/* ═══════════════════════════════════════════
   app.js — Pure logic extracted from index.html
   No DOM dependencies. Testable with Vitest.
   ═══════════════════════════════════════════ */

// ── Lookup Utilities ─────────────────────────

function findById(array, id) {
  for (var i = 0; i < array.length; i++) {
    if (array[i].id === id) return array[i];
  }
  return undefined;
}

function buildLookupMap(array) {
  var map = {};
  for (var i = 0; i < array.length; i++) {
    map[array[i].id] = array[i];
  }
  return map;
}

// ── Utilities ────────────────────────────────

function formatDateForKiwi(dateStr) {
  // 'YYYY-MM-DD' → 'DD/MM/YYYY'
  if (!dateStr) return '';
  var p = dateStr.split('-');
  if (p.length !== 3) return '';
  return p[2] + '/' + p[1] + '/' + p[0];
}

function addDays(dateStr, days) {
  if (!dateStr) return '';
  var d = new Date(dateStr);
  if (isNaN(d.getTime())) return '';
  d.setDate(d.getDate() + days);
  var mm = String(d.getMonth() + 1).padStart(2, '0');
  var dd = String(d.getDate()).padStart(2, '0');
  return d.getFullYear() + '-' + mm + '-' + dd;
}

function monthName(m) {
  return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][m - 1] || '';
}

function latLngToVec3(lat, lng, r) {
  var phi = (90 - lat) * (Math.PI / 180);
  var theta = (lng + 180) * (Math.PI / 180);
  return {
    x: -r * Math.sin(phi) * Math.cos(theta),
    y: r * Math.cos(phi),
    z: r * Math.sin(phi) * Math.sin(theta)
  };
}

// ── Icon Helper ──────────────────────────────

function _vi(d) { return '<svg class="vx-i" viewBox="0 0 24 24">' + d + '</svg>'; }

// ── Route & Partner Helpers ──────────────────

function getRoutePartners(route) {
  return PARTNERS_DATABASE.filter(function (p) { return p.destinationId === route.destinationId; });
}

function getFilteredRoutes() {
  var s = routeFilterState;
  var routes = ROUTE_DATABASE.filter(function (r) {
    if (s.type !== 'all' && r.type !== s.type) return false;
    if (s.dest !== 'all' && r.destinationId !== s.dest) return false;
    if (r.difficulty > s.maxDiff) return false;
    if (r.distance > s.maxDist) return false;
    return true;
  });
  switch (s.sort) {
    case 'difficulty-asc': routes.sort(function (a, b) { return a.difficulty - b.difficulty }); break;
    case 'difficulty-desc': routes.sort(function (a, b) { return b.difficulty - a.difficulty }); break;
    case 'distance-asc': routes.sort(function (a, b) { return a.distance - b.distance }); break;
    case 'distance-desc': routes.sort(function (a, b) { return b.distance - a.distance }); break;
    case 'elevation-desc': routes.sort(function (a, b) { return b.elevationGain - a.elevationGain }); break;
    default: routes.sort(function (a, b) { return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0) }); break;
  }
  return routes;
}

// ── SVG Rendering Helpers ────────────────────

function buildMiniElevSvg(profile, type) {
  if (!profile || !profile.length) return '';
  var maxElev = Math.max.apply(null, profile.map(function (p) { return p.elev; }));
  var minElev = Math.min.apply(null, profile.map(function (p) { return p.elev; }));
  var range = maxElev - minElev || 1;
  var maxKm = profile[profile.length - 1].km || 1;
  var w = 400, h = 40, pad = 2;
  var pts = profile.map(function (p) {
    var x = (p.km / maxKm) * w;
    var y = h - pad - ((p.elev - minElev) / range) * (h - pad * 2);
    return x.toFixed(1) + ',' + y.toFixed(1);
  });
  var line = 'M' + pts.join(' L');
  var fill = line + ' L' + w + ',' + h + ' L0,' + h + ' Z';
  var color = type === 'gravel' ? 'var(--gold)' : 'var(--ember)';
  var gradId = 'epg' + Math.random().toString(36).substr(2, 5);
  return '<svg viewBox="0 0 ' + w + ' ' + h + '" preserveAspectRatio="none">' +
    '<defs><linearGradient id="' + gradId + '" x1="0%" y1="0%" x2="0%" y2="100%">' +
    '<stop offset="0%" stop-color="' + color + '" stop-opacity="0.2"/>' +
    '<stop offset="100%" stop-color="' + color + '" stop-opacity="0.02"/></linearGradient></defs>' +
    '<path d="' + fill + '" fill="url(#' + gradId + ')"/>' +
    '<path d="' + line + '" fill="none" stroke="' + color + '" stroke-width="1.5"/></svg>';
}

function difficultyBar(level) {
  var bars = '';
  for (var i = 1; i <= 5; i++) {
    var clr = i <= level ? 'var(--diff-' + level + ')' : 'rgba(0,0,0,0.08)';
    bars += '<div style="width:6px;height:14px;border-radius:2px;background:' + clr + '"></div>';
  }
  return '<div style="display:flex;gap:2px;align-items:center">' + bars + '</div>';
}

function trafficDot(level) {
  var colors = ['', 'var(--diff-1)', 'var(--diff-2)', 'var(--diff-3)', 'var(--diff-4)', 'var(--diff-5)'];
  var labels = ['', 'Empty', 'Quiet', 'Moderate', 'Busy', 'Heavy'];
  return '<span class="re-traffic-dot" style="background:' + colors[level] + '" title="Traffic: ' + labels[level] + '"></span>';
}

function buildDetailElevSvg(profile, route) {
  if (!profile || profile.length < 2) return '';
  var maxElev = Math.max.apply(null, profile.map(function (p) { return p.elev }));
  var minElev = Math.min.apply(null, profile.map(function (p) { return p.elev }));
  var range = maxElev - minElev || 1;
  var maxKm = profile[profile.length - 1].km || 1;
  var w = 800, h = 200, pad = 20;
  var pts = profile.map(function (p) {
    return {
      x: pad + (p.km / maxKm) * (w - pad * 2),
      y: pad + (1 - (p.elev - minElev) / range) * (h - pad * 2),
      km: p.km, elev: p.elev
    };
  });
  // Gradient coloring based on grade
  var segments = '';
  for (var i = 0; i < pts.length - 1; i++) {
    var grade = ((profile[i + 1].elev - profile[i].elev) / ((profile[i + 1].km - profile[i].km) * 10)).toFixed(1);
    var color;
    if (grade > 6) color = 'var(--grade-steep)';
    else if (grade > 0) color = 'var(--grade-mod)';
    else if (grade < -2) color = 'var(--grade-desc)';
    else color = 'var(--grade-flat)';
    segments += '<line x1="' + pts[i].x.toFixed(1) + '" y1="' + pts[i].y.toFixed(1) + '" x2="' + pts[i + 1].x.toFixed(1) + '" y2="' + pts[i + 1].y.toFixed(1) + '" stroke="' + color + '" stroke-width="3" stroke-linecap="round"/>';
  }
  // Fill area
  var pathD = 'M' + pts.map(function (p) { return p.x.toFixed(1) + ',' + p.y.toFixed(1) }).join(' L');
  var fillD = pathD + ' L' + pts[pts.length - 1].x.toFixed(1) + ',' + (h - pad) + ' L' + pts[0].x.toFixed(1) + ',' + (h - pad) + ' Z';
  // Water stops
  var waterMarkers = '';
  if (route.waterStops) {
    route.waterStops.forEach(function (ws) {
      var wx = pad + (ws.km / maxKm) * (w - pad * 2);
      var interpElev = minElev;
      for (var j = 0; j < profile.length - 1; j++) {
        if (ws.km >= profile[j].km && ws.km <= profile[j + 1].km) {
          var t = (ws.km - profile[j].km) / (profile[j + 1].km - profile[j].km);
          interpElev = profile[j].elev + t * (profile[j + 1].elev - profile[j].elev);
          break;
        }
      }
      var wy = pad + (1 - (interpElev - minElev) / range) * (h - pad * 2);
      waterMarkers += '<circle cx="' + wx.toFixed(1) + '" cy="' + wy.toFixed(1) + '" r="4" fill="' + (ws.reliable ? '#3B82F6' : '#94A3B8') + '" stroke="#fff" stroke-width="1.5"/>';
      waterMarkers += '<title>' + ws.name + (ws.reliable ? '' : ' (seasonal)') + '</title>';
    });
  }
  // Y-axis labels
  var yLabels = '';
  var steps = 4;
  for (var s = 0; s <= steps; s++) {
    var elev = Math.round(minElev + (range * s / steps));
    var yy = pad + (1 - s / steps) * (h - pad * 2);
    yLabels += '<text x="' + (pad - 4) + '" y="' + yy.toFixed(1) + '" text-anchor="end" fill="var(--mist)" font-size="10" dominant-baseline="middle">' + elev + 'm</text>';
    yLabels += '<line x1="' + pad + '" y1="' + yy.toFixed(1) + '" x2="' + (w - pad) + '" y2="' + yy.toFixed(1) + '" stroke="rgba(0,0,0,0.05)" stroke-dasharray="4,4"/>';
  }
  // Invisible hover rectangles for tooltip
  var hoverRects = '';
  for (var k = 0; k < pts.length; k++) {
    var rw = (w - pad * 2) / pts.length;
    hoverRects += '<rect x="' + (pts[k].x - rw / 2).toFixed(1) + '" y="0" width="' + rw.toFixed(1) + '" height="' + h + '" fill="transparent" data-km="' + pts[k].km + '" data-elev="' + pts[k].elev + '" class="rd-ep-hover"/>';
  }
  return '<svg viewBox="0 0 ' + w + ' ' + h + '" class="rd-ep-svg">' +
    yLabels +
    '<path d="' + fillD + '" fill="rgba(232,73,29,0.06)"/>' +
    segments + waterMarkers + hoverRects +
    '</svg>' +
    '<div class="rd-ep-tooltip" id="rdEpTooltip"></div>' +
    '<div class="rd-ep-legend">' +
    '<span><i style="background:var(--grade-flat)"></i> Flat/gentle</span>' +
    '<span><i style="background:var(--grade-mod)"></i> Moderate</span>' +
    '<span><i style="background:var(--grade-steep)"></i> Steep (&gt;6%)</span>' +
    '<span><i style="background:var(--grade-desc)"></i> Descent</span>' +
    '<span><i style="background:#3B82F6;border-radius:50%"></i> Water stop</span>' +
    '</div>';
}

// ── Flight Helpers ───────────────────────────

function cfgGetBikeFee(airlineCode) {
  return BIKE_FEES[airlineCode] || BIKE_FEES.__default;
}

function cfgGetStaticFlights() {
  var dest = CONFIGURATOR_STATE.destination;
  var destObj = findById(DESTINATIONS, dest);
  var airportKeywords = destObj && destObj.airports ? destObj.airports : [];
  var flights = [];
  AIRLINES_DATA.forEach(function (airline) {
    airline.routes.forEach(function (route) {
      var toLower = route.to.toLowerCase();
      var destMatch = airportKeywords.some(function (kw) { return toLower.indexOf(kw) > -1; });
      if (destMatch) {
        flights.push({ airline: airline.name, bikeFee: airline.bikeFee, bikePolicy: airline.bikePolicy, from: route.from, to: route.to, basePrice: route.basePrice, duration: route.duration, source: 'static' });
      }
    });
  });
  return flights;
}

function cfgTransformApiResult(f) {
  var primaryAirline = f.airlines && f.airlines.length ? f.airlines[0] : '';
  var feeData = cfgGetBikeFee(primaryAirline);
  var isEstimate = !BIKE_FEES[primaryAirline];

  return {
    airline: f.airlines ? f.airlines.join(', ') : 'Unknown',
    airlineCodes: f.airlineCodes || f.airlines || [],
    from: f.cityFrom + ' (' + f.flyFrom + ')',
    to: f.cityTo + ' (' + f.flyTo + ')',
    basePrice: f.price,
    bikeFee: feeData.fee,
    bikePolicy: feeData.policy,
    bikeFeeEstimate: isEstimate,
    duration: f.duration || '',
    stops: f.stops || 0,
    deepLink: f.deepLink || '',
    localDeparture: f.localDeparture || '',
    localArrival: f.localArrival || '',
    source: 'api'
  };
}

// ── Pricing ──────────────────────────────────

function cfgCalcPricing() {
  var st = CONFIGURATOR_STATE;
  var nights = (st.dates && st.dates.nights) || 0;
  var sub = 0;
  // Accommodation
  if (st.accommodation) {
    st.accommodation.forEach(function (a) { sub += (a.priceFrom || 0) * nights; });
  }
  // Transport
  if (st.transport && st.transport.flight) {
    sub += (st.transport.flight.basePrice || 0) + (st.transport.flight.bikeFee || 0);
  }
  if (st.transport && st.transport.shuttles) {
    st.transport.shuttles.forEach(function (s) { sub += (s.priceFrom || 0); });
  }
  // Services
  if (st.services) {
    if (st.services.guide) sub += (st.services.guide.priceFrom || 0) * Math.min(nights, 5);
    if (st.services.rental) sub += (st.services.rental.priceFrom || 0) * nights;
    if (st.services.addons) {
      st.services.addons.forEach(function (a) { sub += (a.priceFrom || 0); });
    }
  }
  st.pricing.subtotal = sub;
  st.pricing.memberDiscount = Math.round(sub * 0.10);
  st.pricing.goldenKeyPremium = st.mode === 'concierge' ? Math.round(sub * 0.15) : 0;
  st.pricing.total = sub - st.pricing.memberDiscount + st.pricing.goldenKeyPremium;
}

// ── Exports for testing ──────────────────────
// In browser: these are already globals.
// In Node/Vitest: export them.
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    findById: findById,
    buildLookupMap: buildLookupMap,
    formatDateForKiwi: formatDateForKiwi,
    addDays: addDays,
    monthName: monthName,
    latLngToVec3: latLngToVec3,
    _vi: _vi,
    getRoutePartners: getRoutePartners,
    getFilteredRoutes: getFilteredRoutes,
    buildMiniElevSvg: buildMiniElevSvg,
    difficultyBar: difficultyBar,
    trafficDot: trafficDot,
    buildDetailElevSvg: buildDetailElevSvg,
    cfgGetBikeFee: cfgGetBikeFee,
    cfgGetStaticFlights: cfgGetStaticFlights,
    cfgTransformApiResult: cfgTransformApiResult,
    cfgCalcPricing: cfgCalcPricing
  };
}
