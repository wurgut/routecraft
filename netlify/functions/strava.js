// Netlify serverless function — Strava OAuth2 token exchange & refresh
// Keeps client_secret server-side for security.
//
// Modes:
//   ?action=exchange&code=XYZ           → Exchange auth code for tokens
//   ?action=refresh&refresh_token=XYZ   → Refresh an expired access token

const STRAVA_TOKEN_URL = 'https://www.strava.com/oauth/token';
const STRAVA_ATHLETE_URL = 'https://www.strava.com/api/v3/athlete';

exports.handler = async function (event) {
  const params = event.queryStringParameters || {};
  const clientId = process.env.STRAVA_CLIENT_ID;
  const clientSecret = process.env.STRAVA_CLIENT_SECRET;

  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type'
  };

  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers, body: '' };
  }

  if (!clientId || !clientSecret) {
    return {
      statusCode: 502,
      headers,
      body: JSON.stringify({ error: 'Strava API credentials not configured. Set STRAVA_CLIENT_ID and STRAVA_CLIENT_SECRET in Netlify env vars.' })
    };
  }

  try {
    const action = params.action;

    if (action === 'exchange') {
      // ── Exchange authorization code for access + refresh tokens ──
      const code = params.code;
      if (!code) {
        return { statusCode: 400, headers, body: JSON.stringify({ error: 'Missing code parameter' }) };
      }

      const res = await fetch(STRAVA_TOKEN_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          client_id: clientId,
          client_secret: clientSecret,
          code: code,
          grant_type: 'authorization_code'
        })
      });

      if (!res.ok) {
        const errBody = await res.text();
        return { statusCode: res.status, headers, body: JSON.stringify({ error: 'Strava token exchange failed', detail: errBody }) };
      }

      const data = await res.json();

      // Return only what the frontend needs (never expose client_secret)
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          access_token: data.access_token,
          refresh_token: data.refresh_token,
          expires_at: data.expires_at,
          athlete: data.athlete ? {
            id: data.athlete.id,
            firstname: data.athlete.firstname,
            lastname: data.athlete.lastname,
            profile: data.athlete.profile,
            ftp: data.athlete.ftp || null,
            weight: data.athlete.weight || null
          } : null
        })
      };

    } else if (action === 'refresh') {
      // ── Refresh an expired access token ──
      const refreshToken = params.refresh_token;
      if (!refreshToken) {
        return { statusCode: 400, headers, body: JSON.stringify({ error: 'Missing refresh_token parameter' }) };
      }

      const res = await fetch(STRAVA_TOKEN_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          client_id: clientId,
          client_secret: clientSecret,
          refresh_token: refreshToken,
          grant_type: 'refresh_token'
        })
      });

      if (!res.ok) {
        const errBody = await res.text();
        return { statusCode: res.status, headers, body: JSON.stringify({ error: 'Strava token refresh failed', detail: errBody }) };
      }

      const data = await res.json();

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          access_token: data.access_token,
          refresh_token: data.refresh_token,
          expires_at: data.expires_at
        })
      };

    } else if (action === 'athlete') {
      // ── Fetch athlete profile (including FTP) with an access token ──
      const accessToken = params.access_token;
      if (!accessToken) {
        return { statusCode: 400, headers, body: JSON.stringify({ error: 'Missing access_token parameter' }) };
      }

      const res = await fetch(STRAVA_ATHLETE_URL, {
        headers: { 'Authorization': 'Bearer ' + accessToken }
      });

      if (!res.ok) {
        return { statusCode: res.status, headers, body: JSON.stringify({ error: 'Strava athlete fetch failed' }) };
      }

      const athlete = await res.json();

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          id: athlete.id,
          firstname: athlete.firstname,
          lastname: athlete.lastname,
          profile: athlete.profile,
          ftp: athlete.ftp || null,
          weight: athlete.weight || null
        })
      };

    } else {
      return { statusCode: 400, headers, body: JSON.stringify({ error: 'Invalid action. Use action=exchange, action=refresh, or action=athlete' }) };
    }

  } catch (err) {
    return {
      statusCode: 502,
      headers,
      body: JSON.stringify({ error: 'Strava API request failed', message: err.message })
    };
  }
};
