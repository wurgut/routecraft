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

// latLngToVec3 intentionally kept in index.html (depends on THREE.Vector3)

// ── Icon Helper ──────────────────────────────

function _vi(d) { return '<svg class="vx-i" viewBox="0 0 24 24">' + d + '</svg>'; }

// ── Season Helpers ──────────────────────────

function isRouteRideableInMonth(route, month) {
  if (!route || !route.season || !month) return false;
  var s = route.season.start, e = route.season.end;
  if (s <= e) return month >= s && month <= e;
  // Wrap-around (e.g. Nov–Mar: start=11, end=3)
  return month >= s || month <= e;
}

function isRoutePeakInMonth(route, month) {
  if (!route || !route.season || !route.season.peak || !month) return false;
  if (!isRouteRideableInMonth(route, month)) return false;
  return route.season.peak.indexOf(month) > -1;
}

function seasonRangeStr(season) {
  if (!season) return '';
  return monthName(season.start) + '\u2013' + monthName(season.end);
}

function seasonRangeWithPeak(season) {
  if (!season) return '';
  var range = seasonRangeStr(season);
  if (season.peak && season.peak.length) {
    range += ' (peak: ' + season.peak.map(monthName).join(', ') + ')';
  }
  return range;
}

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
    if (s.month && !isRouteRideableInMonth(r, s.month)) return false;
    return true;
  });
  switch (s.sort) {
    case 'difficulty-asc': routes.sort(function (a, b) { return a.difficulty - b.difficulty }); break;
    case 'difficulty-desc': routes.sort(function (a, b) { return b.difficulty - a.difficulty }); break;
    case 'distance-asc': routes.sort(function (a, b) { return a.distance - b.distance }); break;
    case 'distance-desc': routes.sort(function (a, b) { return b.distance - a.distance }); break;
    case 'elevation-desc': routes.sort(function (a, b) { return b.elevationGain - a.elevationGain }); break;
    case 'season': routes.sort(function (a, b) {
      var aP = s.month && isRoutePeakInMonth(a, s.month) ? 2 : (s.month && isRouteRideableInMonth(a, s.month) ? 1 : 0);
      var bP = s.month && isRoutePeakInMonth(b, s.month) ? 2 : (s.month && isRouteRideableInMonth(b, s.month) ? 1 : 0);
      return bP - aP;
    }); break;
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
    _vi: _vi,
    isRouteRideableInMonth: isRouteRideableInMonth,
    isRoutePeakInMonth: isRoutePeakInMonth,
    seasonRangeStr: seasonRangeStr,
    seasonRangeWithPeak: seasonRangeWithPeak,
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



/* ═══════════════════════════════════════════
   SUB-GEOGRAPHY (LEVEL 3 / LEVEL 4) LOGIC
   ═══════════════════════════════════════════ */

let currentSubGeoDest = null;

window.openSubGeo = function(destId) {
  const dest = typeof DESTINATION_BY_ID !== 'undefined' ? DESTINATION_BY_ID[destId] : findById(DESTINATIONS, destId);
  if (!dest) return;
  
  currentSubGeoDest = dest;
  const region = typeof REGION_BY_ID !== 'undefined' ? REGION_BY_ID[dest.regionId] : findById(REGIONS, dest.regionId);
  
  // Populate Header
  document.getElementById('subgeo-region-name').textContent = region ? region.name.toUpperCase() : 'REGION';
  document.getElementById('subgeo-name').textContent = dest.name;
  document.getElementById('subgeo-desc').textContent = dest.shortDesc || dest.description || '';
  
  // Build Stats
  const routes = ROUTE_DATABASE.filter(r => r.destinationId === dest.id);
  const totalBases = dest.bases ? dest.bases.length : 0;
  
  let statsHTML = `
    <div class="sg-stat">
      <div class="sg-stat-val">${routes.length}</div>
      <div class="sg-stat-lbl">Curated Routes</div>
    </div>
    <div class="sg-stat">
      <div class="sg-stat-val">${totalBases}</div>
      <div class="sg-stat-lbl">Base Camps</div>
    </div>
  `;
  document.getElementById('subgeo-stats').innerHTML = statsHTML;
  
  // Render sub-tabs content
  renderSubGeoZones(dest);
  renderSubGeoBases(dest, routes);
  renderSubGeoDeepDive(dest);
  
  // Show overlay (and hide experience overlay if open)
  const expOverlay = document.getElementById('experience-overlay');
  if (expOverlay && expOverlay.classList.contains('active')) {
    // Keep it open, just overlay SubGeo on top
  }
  
  const sgOverlay = document.getElementById('subgeo-view');
  if (sgOverlay) {
    sgOverlay.classList.add('active');
    // Default to zones tab
    switchSubGeoTab('zones');
  }
};

window.closeSubGeo = function() {
  const sgOverlay = document.getElementById('subgeo-view');
  if (sgOverlay) {
    sgOverlay.classList.remove('active');
  }
};

window.switchSubGeoTab = function(tabId) {
  // Update Buttons
  document.querySelectorAll('.sg-tab').forEach(btn => {
    if (btn.dataset.tab === tabId) btn.classList.add('active');
    else btn.classList.remove('active');
  });
  
  // Update Content
  document.querySelectorAll('.sg-tab-content').forEach(content => {
    if (content.id === 'sg-tab-' + tabId) content.classList.add('active');
    else content.classList.remove('active');
  });
};

function renderSubGeoZones(dest) {
  const list = document.getElementById('sg-zones-list');
  const mapContainer = document.getElementById('sg-zones-map');
  if (!list) return;
  
  if (!dest.zones || dest.zones.length === 0) {
    list.innerHTML = `<div style="color:rgba(255,255,255,0.4); padding:1rem 0;">No zones defined for this destination.</div>`;
    if (mapContainer) mapContainer.innerHTML = '';
    return;
  }
  
  list.innerHTML = dest.zones.map(z => `
    <div class="sg-zone-card" onclick="switchSubGeoTab('bases')">
      <div class="sg-zone-header">
        <div class="sg-zone-title">${z.name}</div>
      </div>
      <div class="sg-zone-desc">${z.description || ''}</div>
      <div class="sg-zone-tags">
        ${(z.bestFor ? (Array.isArray(z.bestFor) ? z.bestFor : z.bestFor.split(',')).map(t => `<span class="sg-zone-tag">${t.trim()}</span>`).join('') : '')}
      </div>
    </div>
  `).join('');

  if (mapContainer) {
    let markersHtml = '';
    const positions = [
      {x: 60, y: 70}, {x: 140, y: 60}, {x: 100, y: 130}, {x: 50, y: 150}, {x: 160, y: 120}
    ];
    dest.zones.forEach((z, i) => {
      const pos = positions[i % positions.length];
      markersHtml += `
        <g class="sg-map-marker" transform="translate(${pos.x}, ${pos.y})" style="cursor:pointer;" onclick="switchSubGeoTab('bases')">
          <circle cx="0" cy="0" r="3" fill="#c9a96e"></circle>
          <circle cx="0" cy="0" r="8" fill="none" stroke="#c9a96e" stroke-width="0.5" opacity="0.6">
            <animate attributeName="r" values="3;16" dur="2.5s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.8;0" dur="2.5s" repeatCount="indefinite"/>
          </circle>
          <text x="8" y="3" fill="#e8e4dd" font-size="7" font-family="'DM Sans', sans-serif" letter-spacing="0.5" style="text-shadow: 0 1px 3px rgba(0,0,0,0.8);">${z.name.toUpperCase()}</text>
        </g>
      `;
    });
    
    mapContainer.innerHTML = `
      <div class="sg-map-interactive" style="width:100%; height:100%; position:relative; background:rgba(10,10,10,0.5); border-radius:12px; overflow:hidden; border:1px solid rgba(255,255,255,0.05); box-shadow: inset 0 0 40px rgba(0,0,0,0.5);">
        <svg viewBox="0 0 200 200" width="100%" height="100%" style="display:block;">
          <!-- Topographic contour lines -->
          <path d="M-20,40 Q50,10 120,60 T220,50" fill="none" stroke="rgba(201,169,110,0.05)" stroke-width="0.5"/>
          <path d="M-20,60 Q60,30 130,80 T220,70" fill="none" stroke="rgba(201,169,110,0.1)" stroke-width="0.5"/>
          <path d="M-20,80 Q70,50 140,100 T220,90" fill="none" stroke="rgba(201,169,110,0.15)" stroke-width="0.5"/>
          <path d="M-20,100 Q80,70 150,120 T220,110" fill="none" stroke="rgba(201,169,110,0.1)" stroke-width="0.5"/>
          <path d="M-20,120 Q90,90 160,140 T220,130" fill="none" stroke="rgba(201,169,110,0.05)" stroke-width="0.5"/>
          
          <path d="M40,-20 Q80,50 30,120 T60,220" fill="none" stroke="rgba(255,255,255,0.02)" stroke-width="0.5"/>
          <path d="M60,-20 Q100,50 50,120 T80,220" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="0.5"/>
          <path d="M80,-20 Q120,50 70,120 T100,220" fill="none" stroke="rgba(255,255,255,0.02)" stroke-width="0.5"/>
          
          <!-- Route connections representing the sub-geography -->
          <path d="M60,70 L140,60 L100,130 Z" fill="rgba(201,169,110,0.02)" stroke="rgba(201,169,110,0.15)" stroke-width="0.5" stroke-dasharray="2 2"/>
          <path d="M60,70 L50,150 L100,130" fill="none" stroke="rgba(201,169,110,0.15)" stroke-width="0.5" stroke-dasharray="2 2"/>
          
          ${markersHtml}
        </svg>
        <div class="sg-map-overlay-text" style="position:absolute; bottom:12px; right:12px; font-size:8px; letter-spacing:2px; color:rgba(201,169,110,0.5); text-transform:uppercase; font-family:'DM Sans', sans-serif;">
          Conceptual Zone Map
        </div>
      </div>
    `;
  }
}

function renderSubGeoBases(dest, routes) {
  const sidebar = document.getElementById('sg-bases-list');
  const routeDisplay = document.getElementById('sg-routes-display');
  if (!sidebar || !routeDisplay) return;
  
  if (!dest.bases || dest.bases.length === 0) {
    sidebar.innerHTML = `<div style="color:rgba(255,255,255,0.4); padding:1rem 0;">No bases defined.</div>`;
    return;
  }
  
  sidebar.innerHTML = dest.bases.map((b, i) => {
    const baseRoutes = routes.filter(r => r.accessibleFromBases && r.accessibleFromBases.includes(b.id));
    return `
      <div class="sg-base-card" id="sg-base-btn-${b.id}" onclick="selectSubGeoBase('${b.id}')">
        <div class="sg-base-name">${b.name}</div>
        <div class="sg-base-char">${b.character || ''}</div>
        <div class="sg-base-meta">
          <span>${baseRoutes.length} routes</span>
        </div>
        ${(baseRoutes.length > 0 ? `
          <button class="base-card-cta" onclick="event.stopPropagation(); closeSubGeo(); document.getElementById('trip-builder').scrollIntoView({behavior:'smooth'}); setTimeout(function(){startTripFromBase('${dest.id}','${b.id}')}, 400)">Plan Trip from Here &rarr;</button>
        ` : '')}
      </div>
    `;
  }).join('');
}

window.selectSubGeoBase = function(baseId) {
  // Update active state in sidebar
  document.querySelectorAll('.sg-base-card').forEach(card => card.classList.remove('active'));
  const activeBtn = document.getElementById('sg-base-btn-' + baseId);
  if (activeBtn) activeBtn.classList.add('active');
  
  // Collect routes for this base
  const allDestRoutes = ROUTE_DATABASE.filter(r => r.destinationId === currentSubGeoDest.id);
  const baseRoutes = allDestRoutes.filter(r => r.accessibleFromBases && r.accessibleFromBases.includes(baseId));
  
  const display = document.getElementById('sg-routes-display');
  
  if (baseRoutes.length === 0) {
    display.innerHTML = `
      <div class="sg-empty-state">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" width="48" height="48"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"></path><circle cx="12" cy="10" r="3"></circle></svg>
        <p>No curated routes are linked to this base camp yet.</p>
      </div>
    `;
    return;
  }
  
  // Group routes by effort (Level 4 UX)
  const groups = {
    'Easy / Recovery': baseRoutes.filter(r => ['half-day-easy', 'full-day-easy'].includes(r.effortCategory)),
    'Solid Day Out': baseRoutes.filter(r => ['half-day-hard', 'full-day-mod'].includes(r.effortCategory)),
    'Epic Challenges': baseRoutes.filter(r => ['full-day-hard'].includes(r.effortCategory))
  };
  
  // Any routes that did not match the strictly defined categories drop into a fallback group
  const coveredIds = Object.values(groups).flat().map(r => r.id);
  const others = baseRoutes.filter(r => !coveredIds.includes(r.id));
  if (others.length > 0) groups['Other Routes'] = others;
  
  let html = '';
  Object.keys(groups).forEach(groupName => {
    const rList = groups[groupName];
    if (rList.length === 0) return;
    
    html += `
      <div class="sg-route-group">
        <div class="sg-route-group-title">
          <span>${groupName}</span>
          <span style="font-size:0.6em; color:rgba(255,255,255,0.3); font-family: 'DM Sans', sans-serif;">${rList.length} routes</span>
        </div>
        ${rList.map(r => `
          <div class="sg-route-card-mini" onclick="openRouteDetail('${r.id}')">
            <div class="sg-route-mini-img">
              <img src="${r.image}" loading="lazy" alt="${r.name}">
            </div>
            <div class="sg-route-mini-body">
              <div class="sg-route-mini-title">${r.name} <span>${r.type || 'ROAD'}</span></div>
              <div class="sg-route-mini-stats">
                <div class="sg-route-mini-stat"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg> ${r.distance}km</div>
                <div class="sg-route-mini-stat"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg> ${r.elevationGain}m</div>
                <div class="sg-route-mini-stat">${difficultyBar(r.difficulty)}</div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  });
  
  display.innerHTML = html;
}

function renderSubGeoDeepDive(dest) {
  const container = document.getElementById('sg-deepdive-content');
  if (!container) return;
  
  if (!dest.deepDive) {
    container.innerHTML = `<p style="color:rgba(255,255,255,0.4);">No deep dive available for this location.</p>`;
    return;
  }
  
  let html = `<p class="sg-deepdive-p" style="font-size:1.1rem; color:var(--chalk);">${dest.deepDive.intro}</p>`;
  
  if (dest.deepDive.paragraphs) {
    dest.deepDive.paragraphs.forEach(p => {
      html += `<p class="sg-deepdive-p">${p}</p>`;
    });
  }
  
  container.innerHTML = html;
}


// Strava Mock OAuth Integration
window.isStravaConnected = false;

window.toggleStravaAuth = function() {
    var btn = document.getElementById('navStravaBtn');
    if (!window.isStravaConnected) {
        // Simulate OAuth flow
        var originalText = btn.innerHTML;
        btn.innerHTML = 'Connecting...';
        btn.style.opacity = '0.7';
        
        setTimeout(function() {
            window.isStravaConnected = true;
            btn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" style="margin-right:6px"><path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169"></path></svg> Connected';
            btn.classList.add('connected');
            btn.style.opacity = '1';
            
            // Re-render any open route details if they exist
            var rdModal = document.getElementById('rdModal');
            if (rdModal && rdModal.classList.contains('active')) {
                // Find currently open route (simple mock hack)
                var currentRouteName = document.querySelector('.rd-hero-title').textContent.trim();
                if (window.ROUTE_DATABASE) {
                    var route = window.ROUTE_DATABASE.find(r => r.name.toUpperCase() === currentRouteName.toUpperCase() || r.name === currentRouteName);
                    if (route && window.openRouteDetail) {
                        window.openRouteDetail(route.id);
                    }
                }
            }
            
            // Add a small toast notification
            var toast = document.createElement('div');
            toast.style.cssText = 'position:fixed;bottom:20px;right:20px;background:#111;border:1px solid #333;border-left:4px solid #fc4c02;color:#fff;padding:1rem;border-radius:4px;z-index:9999;font-family:inherit;box-shadow:0 10px 30px rgba(0,0,0,0.5);opacity:0;transition:opacity 0.3s ease';
            toast.innerHTML = '<div style="font-weight:600;margin-bottom:4px;font-size:0.9rem;text-transform:uppercase;letter-spacing:1px;color:#fc4c02">Strava Connected</div><div style="font-size:0.85rem;color:rgba(255,255,255,0.7)">Your FTP profile has been synced.</div>';
            document.body.appendChild(toast);
            
            // Trigger reflow and show
            requestAnimationFrame(() => toast.style.opacity = '1');
            
            setTimeout(() => {
                toast.style.opacity = '0';
                setTimeout(() => toast.remove(), 300);
            }, 4000);
            
        }, 1500);
    } else {
        // Disconnect
        window.isStravaConnected = false;
        btn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" style="margin-right:6px"><path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169"></path></svg> Connect Strava';
        btn.classList.remove('connected');
        
        var rdModal = document.getElementById('rdModal');
        if (rdModal && rdModal.classList.contains('active')) {
            var currentRouteName = document.querySelector('.rd-hero-title').textContent.trim();
            if (window.ROUTE_DATABASE) {
                var route = window.ROUTE_DATABASE.find(r => r.name.toUpperCase() === currentRouteName.toUpperCase() || r.name === currentRouteName);
                if (route && window.openRouteDetail) {
                    window.openRouteDetail(route.id);
                }
            }
        }
    }
}
