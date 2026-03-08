import sys
import re

print("Injecting Itinerary Feature...")

# 1. Modify styles.css
with open('styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

if '.itb-drawer' not in css:
    itb_css = """
/* ═══════════════════════════════════════════
   ITINERARY BUILDER DRAWER
   ═══════════════════════════════════════════ */
.itb-drawer {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  max-width: 400px;
  background: var(--obsidian);
  color: var(--chalk);
  z-index: var(--z-drawer);
  border-top-left-radius: var(--radius-lg);
  box-shadow: var(--shadow-xl);
  transform: translateY(110%);
  transition: transform .4s var(--ease-out);
  display: flex;
  flex-direction: column;
  max-height: 80vh;
  border: 1px solid rgba(255,255,255,0.1);
  border-bottom: none;
  border-right: none;
}

.itb-drawer.active {
  transform: translateY(0);
}

.itb-drawer-header {
  padding: 1rem 1.5rem;
  border-bottom: 1px solid rgba(255,255,255,0.06);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255,255,255,0.02);
}

.itb-drawer-title {
  font-family: 'Bebas Neue', sans-serif;
  letter-spacing: 2px;
  font-size: 1.2rem;
  color: var(--gold);
  margin-top: 2px;
}

.itb-drawer-close {
  background: transparent;
  border: none;
  color: rgba(255,255,255,0.5);
  cursor: pointer;
  font-size: .8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: color .2s;
}

.itb-drawer-close:hover {
  color: var(--chalk);
}

.itb-drawer-body {
  padding: 1rem 1.5rem;
  overflow-y: auto;
  flex-grow: 1;
}

.itb-drawer-footer {
  padding: 1.5rem;
  border-top: 1px solid rgba(255,255,255,0.06);
  background: rgba(0,0,0,0.3);
}

.itb-empty {
  color: rgba(255,255,255,0.4);
  font-size: 0.9rem;
  text-align: center;
  padding: 2rem 0;
  font-style: italic;
}

.itb-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid rgba(255,255,255,0.05);
}

.itb-item-img {
  width: 50px;
  height: 50px;
  border-radius: var(--radius-sm);
  object-fit: cover;
}

.itb-item-info {
  flex-grow: 1;
}

.itb-item-name {
  font-weight: 700;
  font-size: 0.85rem;
  text-transform: uppercase;
  margin-bottom: 2px;
}

.itb-item-stats {
  font-size: 0.75rem;
  color: rgba(255,255,255,0.6);
  display: flex;
  gap: 0.5rem;
}

.itb-item-remove {
  background: rgba(255,255,255,0.1);
  border: none;
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background .2s;
}

.itb-item-remove:hover {
  background: var(--ember);
}

.itb-stats-summary {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-family: 'Bebas Neue', sans-serif;
  letter-spacing: 1px;
  font-size: 1.3rem;
  color: var(--chalk);
}

.rc-itb-btn {
  position: absolute;
  top: 0.7rem;
  right: 0.7rem;
  background: rgba(10,10,10,0.6);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255,255,255,0.1);
  color: white;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all .2s var(--ease-out);
  z-index: 10;
}

.rc-itb-btn:hover {
  background: var(--forest);
  transform: scale(1.1);
}

.rc-itb-btn.added {
  background: var(--ember);
  border-color: var(--ember);
}

.rd-hero-itb {
  position: absolute;
  top: 1.5rem;
  right: 5rem;
  background: rgba(10,10,10,0.5);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,0.2);
  color: white;
  padding: 0.6rem 1rem;
  border-radius: var(--radius-sm);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  cursor: pointer;
  transition: all .2s;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.rd-hero-itb:hover {
  background: var(--forest);
}

.rd-hero-itb.added {
  background: var(--ember);
  border-color: var(--ember);
}
"""
    with open('styles.css', 'w', encoding='utf-8') as f:
        f.write(css + "\n" + itb_css)
    print("styles.css patched.")


# 2. Modify index.html
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

if 'itbDrawer' not in html:
    html_inject = """
  <!-- ═══════ ITINERARY BUILDER DRAWER ═══════ -->
  <div class="itb-drawer" id="itbDrawer">
    <div class="itb-drawer-header">
      <span class="itb-drawer-title">Multi-Day Itinerary (<span id="itbCount">0</span>)</span>
      <button class="itb-drawer-close" onclick="clearItinerary()">✕ Clear</button>
    </div>
    <div class="itb-drawer-body" id="itbDrawerBody">
      <div class="itb-empty">Select routes to build a custom multi-day trip.</div>
    </div>
    <div class="itb-drawer-footer" id="itbDrawerFooter" style="display:none;">
      <div class="itb-stats-summary">
        <div>Total: <span id="itbTotalDist" style="color:var(--gold)">0 km</span></div>
        <div><span id="itbTotalElev" style="color:var(--ember)">0 m ↑</span></div>
      </div>
      <button class="btn btn-primary" style="width:100%" onclick="saveItinerary()">Save Itinerary</button>
    </div>
  </div>

  <!-- ═══════ FREEMIUM GATE MODAL ═══════ -->"""
    html = html.replace('<!-- ═══════ FREEMIUM GATE MODAL ═══════ -->', html_inject)
    
    # Also add "Itinerary" to top nav
    nav_item = '<a href="#itinerary" onclick="event.preventDefault(); document.getElementById(\'itbDrawer\').classList.toggle(\'active\');">Trip Builder</a>'
    html = html.replace('<a href="#trip-builder">Configurator</a>', '<a href="#trip-builder">Configurator</a>\n      ' + nav_item)
    
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(html)
    print("index.html patched.")

# 3. Modify main.js 
with open('main.js', 'r', encoding='utf-8') as f:
    js = f.read()

if 'var itineraryRoutes = [];' not in js:
    # A. Inject State and Functions
    state_injection = """
    var comparedRoutes = [];
    var itineraryRoutes = [];

    window.toggleItbRoute = function(id) {
      var idx = itineraryRoutes.indexOf(id);
      if (idx > -1) {
        itineraryRoutes.splice(idx, 1);
      } else {
        itineraryRoutes.push(id);
      }
      renderItineraryDrawer();
      if (typeof renderRouteCards === 'function') renderRouteCards();
      
      // Update modal button if open
      var modalBtn = document.getElementById('rdItbBtn');
      if (modalBtn && modalBtn.dataset.id === id) {
        if (itineraryRoutes.indexOf(id) > -1) {
          modalBtn.classList.add('added');
          modalBtn.innerHTML = '✓ Added to Set';
        } else {
          modalBtn.classList.remove('added');
          modalBtn.innerHTML = '+ Add Stage';
        }
      }
    };

    window.clearItinerary = function() {
      itineraryRoutes = [];
      renderItineraryDrawer();
      if (typeof renderRouteCards === 'function') renderRouteCards();
      document.getElementById('itbDrawer').classList.remove('active');
    };

    window.removeItbRoute = function(id) {
      var idx = itineraryRoutes.indexOf(id);
      if (idx > -1) itineraryRoutes.splice(idx, 1);
      renderItineraryDrawer();
      if (typeof renderRouteCards === 'function') renderRouteCards();
    };

    window.saveItinerary = function() {
      alert("Itinerary saved! (Mock Action: In Phase 6, this pairs with user accounts to save to DB.)");
      document.getElementById('itbDrawer').classList.remove('active');
    };

    window.renderItineraryDrawer = function() {
      var countEl = document.getElementById('itbCount');
      var bodyEl = document.getElementById('itbDrawerBody');
      var footEl = document.getElementById('itbDrawerFooter');
      var drawer = document.getElementById('itbDrawer');
      var distEl = document.getElementById('itbTotalDist');
      var elevEl = document.getElementById('itbTotalElev');
      
      if (!countEl || !bodyEl || !footEl) return;
      
      countEl.textContent = itineraryRoutes.length;
      
      if (itineraryRoutes.length === 0) {
        bodyEl.innerHTML = '<div class="itb-empty">Select routes to build a custom multi-day trip.</div>';
        footEl.style.display = 'none';
        return;
      }
      
      // Show drawer automatically when first route added
      if (itineraryRoutes.length > 0 && !drawer.classList.contains('active')) {
         drawer.classList.add('active');
      }
      
      var html = '';
      var totalDist = 0;
      var totalElev = 0;
      
      itineraryRoutes.forEach(function(rId, index) {
        var route = findById(ROUTE_DATABASE, rId);
        if(!route) return;
        totalDist += route.distance;
        totalElev += route.elevationGain;
        
        html += '<div class="itb-item">' +
                '<div style="font-family:\'Bebas Neue\',sans-serif;color:var(--gold);font-size:1.2rem;width:20px;">' + (index+1) + '</div>' + 
                '<img src="' + route.image + '" class="itb-item-img">' +
                '<div class="itb-item-info">' +
                '<div class="itb-item-name">' + route.name + '</div>' +
                '<div class="itb-item-stats">' + route.distance + 'km • ' + route.elevationGain + 'm ↑</div>' +
                '</div>' +
                '<button class="itb-item-remove" title="Remove stage" onclick="removeItbRoute(\\'' + route.id + '\\')">✕</button>' +
                '</div>';
      });
      
      bodyEl.innerHTML = html;
      footEl.style.display = 'block';
      distEl.textContent = Math.round(totalDist) + ' km';
      elevEl.textContent = Math.round(totalElev) + ' m ↑';
    };
"""
    js = js.replace('var comparedRoutes = [];', state_injection)

    # B. Inject Add button into route cards
    # find: '<label class="re-compare-cb'
    # we want to put our button before it, or replace the comparison button if it takes up too much space. We can just insert it.
    inject_btn = """
        var isItb = itineraryRoutes.indexOf(route.id) > -1;
        var itbBtn = '<button class="rc-itb-btn' + (isItb ? ' added' : '') + '" onclick="event.stopPropagation();toggleItbRoute(\\'' + route.id + '\\')" title="Add to Itinerary">' + 
                     (isItb ? '✓' : '+') + '</button>';
"""
    
    js = js.replace("var isCompared = comparedRoutes.indexOf(route.id) > -1;", "var isCompared = comparedRoutes.indexOf(route.id) > -1;" + inject_btn)
    
    card_str_target = "'<label class=\"re-compare-cb'"
    js = js.replace(card_str_target, "itbBtn + " + card_str_target)

    # C. Inject Add button into Route Detail Modal Header
    modal_btn_target = """'<button class="rd-hero-compare" onclick="toggleCompareRoute(\\'' + route.id + '\\')">Compare Route</button>' +"""
    modal_btn_inject = """'<button id="rdItbBtn" data-id="' + route.id + '" class="rd-hero-itb ' + (itineraryRoutes.indexOf(route.id) > -1 ? 'added' : '') + '" onclick="toggleItbRoute(\\'' + route.id + '\\')">' + 
                         (itineraryRoutes.indexOf(route.id) > -1 ? '✓ Added to Set' : '+ Add Stage') + '</button>' +
                         '<button class="rd-hero-compare" onclick="toggleCompareRoute(\\'' + route.id + '\\')">Compare</button>' +"""
    
    js = js.replace(modal_btn_target, modal_btn_inject)
    
    with open('main.js', 'w', encoding='utf-8') as f:
        f.write(js)
    print("main.js patched.")

print("Itinerary Injector complete.")
