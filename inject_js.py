import re

with open('app.js', 'r', encoding='utf-8') as f:
    js = f.read()

new_js = """

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
  if (!list) return;
  
  if (!dest.zones || dest.zones.length === 0) {
    list.innerHTML = `<div style="color:rgba(255,255,255,0.4); padding:1rem 0;">No zones defined for this destination.</div>`;
    return;
  }
  
  list.innerHTML = dest.zones.map(z => `
    <div class="sg-zone-card" onclick="switchSubGeoTab('bases')">
      <div class="sg-zone-header">
        <div class="sg-zone-title">${z.name}</div>
      </div>
      <div class="sg-zone-desc">${z.description || ''}</div>
      <div class="sg-zone-tags">
        ${(z.bestFor ? z.bestFor.split(',').map(t => `<span class="sg-zone-tag">${t.trim()}</span>`).join('') : '')}
      </div>
    </div>
  `).join('');
}

function renderSubGeoBases(dest, routes) {
  const sidebar = document.getElementById('sg-bases-list');
  const routeDisplay = document.getElementById('sg-routes-display');
  if (!sidebar || !routeDisplay) return;
  
  if (!dest.bases || dest.bases.length === 0) {
    sidebar.innerHTML = `<div style="color:rgba(255,255,255,0.4); padding:1rem 0;">No bases defined.</div>`;
    return;
  }
  
  sidebar.innerHTML = dest.bases.map((b, i) => `
    <div class="sg-base-card" id="sg-base-btn-${b.id}" onclick="selectSubGeoBase('${b.id}')">
      <div class="sg-base-name">${b.name}</div>
      <div class="sg-base-char">${b.character || ''}</div>
      <div class="sg-base-meta">
        <span>${routes.filter(r => r.accessibleFromBases && r.accessibleFromBases.includes(b.id)).length} routes</span>
      </div>
    </div>
  `).join('');
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

"""

if "window.openSubGeo" not in js:
    with open('app.js', 'a', encoding='utf-8') as f:
        f.write("\n" + new_js)
    print("Injected Sub-Geo JS.")
else:
    print("Sub-Geo JS already exists.")
