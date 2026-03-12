// Netlify serverless function — proxies Kiwi.com Tequila API
// Handles two modes:
//   ?type=locations&term=Lon  → city autocomplete
//   ?type=search&fly_from=LON&fly_to=FUE&date_from=01/07/2026&date_to=08/07/2026  → flight search

const KIWI_BASE = 'https://api.tequila.kiwi.com';

exports.handler = async function (event) {
  const params = event.queryStringParameters || {};
  const apiKey = process.env.KIWI_API_KEY;

  if (!apiKey) {
    return { statusCode: 502, body: JSON.stringify({ error: 'API key not configured' }) };
  }

  const headers = {
    'Content-Type': 'application/json',
    'Cache-Control': 'public, max-age=300',
    'Access-Control-Allow-Origin': '*'
  };

  try {
    if (params.type === 'locations') {
      // City autocomplete
      const term = params.term;
      if (!term || term.length < 2) {
        return { statusCode: 400, headers, body: JSON.stringify({ error: 'Term must be at least 2 characters' }) };
      }
      const url = KIWI_BASE + '/locations/query?' + new URLSearchParams({
        term: term,
        location_types: 'city',
        limit: '8',
        active_only: 'true'
      }).toString();

      const res = await fetch(url, { headers: { apikey: apiKey } });
      if (!res.ok) throw new Error('Kiwi locations API returned ' + res.status);
      const data = await res.json();

      const cities = (data.locations || []).map(function (loc) {
        return {
          name: loc.name,
          code: loc.code,
          country: loc.country ? loc.country.name : '',
          countryCode: loc.country ? loc.country.code : ''
        };
      });

      return { statusCode: 200, headers, body: JSON.stringify({ cities: cities }) };

    } else if (params.type === 'search') {
      // Flight search
      var fly_from = params.fly_from;
      var fly_to = params.fly_to;
      var date_from = params.date_from;
      var date_to = params.date_to;

      if (!fly_from || !fly_to || !date_from) {
        return { statusCode: 400, headers, body: JSON.stringify({ error: 'Missing required params: fly_from, fly_to, date_from' }) };
      }

      var searchParams = {
        fly_from: fly_from,
        fly_to: fly_to,
        date_from: date_from,
        date_to: date_to || date_from,
        flight_type: 'oneway',
        one_for_city: '0',
        one_per_date: '0',
        adults: '1',
        curr: 'EUR',
        locale: 'en',
        limit: '15',
        sort: 'price',
        max_stopovers: '2'
      };

      var url = KIWI_BASE + '/v2/search?' + new URLSearchParams(searchParams).toString();
      var res = await fetch(url, { headers: { apikey: apiKey } });
      if (!res.ok) throw new Error('Kiwi search API returned ' + res.status);
      var data = await res.json();

      var flights = (data.data || []).map(function (f) {
        var airlines = f.airlines || [];
        var route = f.route || [];
        var stops = Math.max(0, route.length - 1);
        var departureTime = f.dTime ? new Date(f.dTime * 1000).toISOString() : '';
        var arrivalTime = f.aTime ? new Date(f.aTime * 1000).toISOString() : '';

        // Duration in minutes from fly_duration string or calculate
        var durationMin = 0;
        if (f.fly_duration) {
          var hm = f.fly_duration.match(/(\d+)h\s*(\d+)m/);
          if (hm) durationMin = parseInt(hm[1]) * 60 + parseInt(hm[2]);
        }

        return {
          price: f.price,
          airlines: airlines,
          airlineCodes: airlines,
          flyFrom: f.flyFrom,
          flyTo: f.flyTo,
          cityFrom: f.cityFrom,
          cityTo: f.cityTo,
          stops: stops,
          duration: f.fly_duration || '',
          durationMin: durationMin,
          departureTime: departureTime,
          arrivalTime: arrivalTime,
          deepLink: f.deep_link || '',
          bagsPrice: f.bags_price || {},
          localDeparture: route.length ? route[0].local_departure : '',
          localArrival: route.length ? route[route.length - 1].local_arrival : ''
        };
      });

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ flights: flights, currency: 'EUR' })
      };

    } else {
      return { statusCode: 400, headers, body: JSON.stringify({ error: 'Invalid type param. Use type=locations or type=search' }) };
    }

  } catch (err) {
    return {
      statusCode: 502,
      headers,
      body: JSON.stringify({ error: 'API request failed', message: err.message })
    };
  }
};
