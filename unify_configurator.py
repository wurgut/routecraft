import sys

print("Reverting Drawer and Unifying Itinerary...")

# 1. HTML Reversion
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

start_idx = html.find('<!-- ═══════ ITINERARY BUILDER DRAWER ═══════ -->')
end_idx = html.find('<!-- ═══════ FREEMIUM GATE MODAL ═══════ -->')

if start_idx != -1 and end_idx != -1:
    html = html[:start_idx] + '<!-- ═══════ FREEMIUM GATE MODAL ═══════ -->' + html[end_idx + len('<!-- ═══════ FREEMIUM GATE MODAL ═══════ -->'):]

nav_item = '      <a href="#itinerary" onclick="event.preventDefault(); document.getElementById(\'itbDrawer\').classList.toggle(\'active\');">Trip Builder</a>'
html = html.replace(nav_item, '')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("index.html reverted.")

# 2. Main.js modification: route from our buttons to the configurer
with open('main.js', 'r', encoding='utf-8') as f:
    js = f.read()

# Replace toggleItbRoute logic
target_js = """    window.toggleItbRoute = function(id) {
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
    };"""

replacement_js = """    window.toggleItbRoute = function(id) {
      // Unify with the existing Configurator
      var route = findById(ROUTE_DATABASE, id);
      if(!route) return;
      
      // Select the destination in the Configurator if it's not already
      if (CONFIGURATOR_STATE.destination !== route.destinationId) {
         cfgSelectDestination(route.destinationId);
      }
      
      // Add the route to the configuration state
      if (CONFIGURATOR_STATE.routes.indexOf(id) === -1) {
         CONFIGURATOR_STATE.routes.push(id);
      }
      
      // Close route modal 
      closeRouteDetail();
      
      // Scroll to configurator and open the 'Routes' step
      var tb = document.getElementById('trip-builder');
      if (tb) tb.scrollIntoView({behavior: 'smooth'});
      
      setTimeout(function(){
         cfgSetStep(3); // Step 3 is typically Route Selection
         cfgRenderState();
      }, 500);
    };"""

js = js.replace(target_js, replacement_js)

# Replace the "Build Trip with This Route" button in the modal to just call toggleItbRoute
modal_ui_target = """'<a href="#trip-builder" class="btn btn-primary" onclick="closeRouteDetail()">Build Trip with This Route →</a>' +"""
modal_ui_replace = """'<button class="btn btn-primary" onclick="toggleItbRoute(\\'' + route.id + '\\')">Build Trip with This Route →</button>' +"""
js = js.replace(modal_ui_target, modal_ui_replace)

with open('main.js', 'w', encoding='utf-8') as f:
    f.write(js)
print("main.js logic updated.")

print("Unification complete.")
