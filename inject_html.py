import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# I will inject the new Subgeo view right after the experience-overlay div.
target_marker = '  <!-- EXPERIENCE OVERLAY -->\n  <div id="experience-overlay"><button class="exp-back" onclick="closeExperience()"><span\n        style="font-size:15px">←</span> Back to Globe</button>\n    <div id="exp-content"></div>\n  </div>\n'

new_subgeo_view = """
  <!-- SUB-GEOGRAPHY VIEW (LEVEL 3 / LEVEL 4) -->
  <div id="subgeo-view" class="subgeo-overlay">
    <button class="subgeo-back" onclick="closeSubGeo()">
      <span style="font-size:15px">←</span> Back to Region
    </button>
    
    <div class="subgeo-header">
      <div class="subgeo-title-wrapper">
        <div class="subgeo-tag" id="subgeo-region-name">REGION</div>
        <div class="subgeo-title" id="subgeo-name">DESTINATION NAME</div>
        <p class="subgeo-desc" id="subgeo-desc">Destination description goes here.</p>
      </div>
      
      <div class="subgeo-stats" id="subgeo-stats">
        <!-- Injected via JS -->
      </div>
    </div>
    
    <div class="subgeo-nav">
      <button class="sg-tab active" data-tab="zones" onclick="switchSubGeoTab('zones')">Sub-Geography Zones</button>
      <button class="sg-tab" data-tab="bases" onclick="switchSubGeoTab('bases')">Base Camps & Routes</button>
      <button class="sg-tab" data-tab="deepdive" onclick="switchSubGeoTab('deepdive')">Encyclopedia</button>
    </div>
    
    <div class="subgeo-content-frame">
      <!-- ZONES TAB -->
      <div id="sg-tab-zones" class="sg-tab-content active">
        <div class="sg-zones-layout">
          <div class="sg-zones-list" id="sg-zones-list">
            <!-- Zones injected via JS -->
          </div>
          <div class="sg-zones-map" id="sg-zones-map">
            <!-- Map Placeholder or Graphic -->
            <div class="sg-map-placeholder">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <span>Interactive Zone Map</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- BASES & ROUTES TAB -->
      <div id="sg-tab-bases" class="sg-tab-content">
        <div class="sg-bases-layout">
          <div class="sg-bases-sidebar">
            <h3 class="sg-sidebar-title">Select Base Camp</h3>
            <div id="sg-bases-list">
              <!-- Bases injected via JS -->
            </div>
          </div>
          <div class="sg-routes-display" id="sg-routes-display">
            <div class="sg-empty-state">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <p>Select a base camp to view accessible routes radiating from it.</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- DEEP DIVE ENCYCLOPEDIA TAB -->
      <div id="sg-tab-deepdive" class="sg-tab-content">
        <div class="sg-deepdive-container" id="sg-deepdive-content">
          <!-- Deep Dive injected via JS -->
        </div>
      </div>
    
    </div>
  </div>
"""

if target_marker in html:
    html = html.replace(target_marker, target_marker + new_subgeo_view)
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(html)
    print("Injected Sub-Geo view HTML.")
else:
    print("Could not find exact experience overlay marker.")
