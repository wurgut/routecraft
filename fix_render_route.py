import sys

with open('main.js', 'r', encoding='utf-8') as f:
    js = f.read()

target = """    function renderRouteCard(route, idx) {
      var partners = getRoutePartners(route);
      var hotels = partners.filter(function (p) { return p.category === 'hotel'; }).length;
      var isCompared = comparedRoutes.indexOf(route.id) > -1;
        var isItb = itineraryRoutes.indexOf(route.id) > -1;
        var itbBtn = '<button class="rc-itb-btn' + (isItb ? ' added' : '') + '" onclick="event.stopPropagation();toggleItbRoute(\\'' + route.id + '\\')" title="Add to Itinerary">' + 
                     (isItb ? '✓' : '+') + '</button>';"""

replacement = """    function renderRouteCard(route, idx) {
      var partners = getRoutePartners(route);
      var hotels = partners.filter(function (p) { return p.category === 'hotel'; }).length;
      var isCompared = comparedRoutes.indexOf(route.id) > -1;
      
      // Phase 5: Check if Route is already in Configurator
      var isItb = typeof CONFIGURATOR_STATE !== 'undefined' && CONFIGURATOR_STATE && CONFIGURATOR_STATE.routes ? CONFIGURATOR_STATE.routes.indexOf(route.id) > -1 : false;
      var itbBtn = '<button class="rc-itb-btn' + (isItb ? ' added' : '') + '" onclick="event.stopPropagation();toggleItbRoute(\\'' + route.id + '\\')" title="Add to Itinerary">' + 
                   (isItb ? '✓' : '+') + '</button>';"""

js = js.replace(target, replacement)

with open('main.js', 'w', encoding='utf-8') as f:
    f.write(js)
print("renderRouteCard fixed.")
