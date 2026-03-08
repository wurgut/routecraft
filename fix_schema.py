import re
import json

with open('main.js', 'r', encoding='utf-8') as f:
    js = f.read()

# Replace the Alps destination block
alps_regex = r"\{[^}]*id:\s*'alps-huezdor'[^}]*deepDive:\s*null\s*\}"
def replace_alps(m):
    return """{
        id: 'alps-huezdor', regionId: 'french-alps', name: "Alpe d'Huez & Oisans",
        country: 'France', continent: 'Europe', lat: 45.09, lng: 6.06, color: '#3B82F6',
        tagline: 'The Holy Mountain of Cycling',
        character: 'The ultimate bucket list destination for road cyclists wanting to trace the history of the Tour de France on legendary ascents.',
        desc: 'Bourg d\\'Oisans Valley serves as the perfect launchpad to tackle Alpe d\\'Huez, Galibier, and Croix de Fer.',
        flag: '🇫🇷', airportIATA: ['LYS', 'GVA'],
        image: 'https://images.unsplash.com/photo-1549491763-70678fc53036?w=1600&q=85',
        images: ['https://images.unsplash.com/photo-1549491763-70678fc53036?w=800','https://images.unsplash.com/photo-1582260654067-17ed36f0db5b?w=800'],
        highlights: ['Alpe d\\'Huez hairpins', 'Col du Galibier', 'Croix de Fer'],
        stats: { routes: 15, dur: '5-10 Days', diff: 'Expert', season: 'Summer', price: 'High', group: '2-12' },
        season: { start: 6, end: 9, peakStart: 7, peakEnd: 8, monthly: [
          {month:1, heatmapIntensity: 0}, {month:2, heatmapIntensity: 0}, {month:3, heatmapIntensity: 0},
          {month:4, heatmapIntensity: 0}, {month:5, heatmapIntensity: 0.5}, {month:6, heatmapIntensity: 0.8},
          {month:7, heatmapIntensity: 1.0}, {month:8, heatmapIntensity: 1.0}, {month:9, heatmapIntensity: 0.8},
          {month:10, heatmapIntensity: 0.3}, {month:11, heatmapIntensity: 0}, {month:12, heatmapIntensity: 0}
        ]},
        routeCount: 1, partnerCount: 0,
        conditions: { roads: 'Pristine mountain asphalt', water: 'Available at mountain huts', bikeShops: 'Bourg d\\'Oisans', rental: 'Best in France', specialRisks: 'Variable mountain weather, altitude' },
        zones: [
          { id: 'alps-bourg', name: 'Bourg d\\'Oisans Valley', character: 'Base of the big climbs.', difficulty: 'expert', bestFor: ['climbers'], routeIds: ['alps-huez', 'alps-galibier'] }
        ],
        bases: [
          { id: 'base-bourg', name: 'Bourg d\\'Oisans', character: 'Cycling village entirely dedicated to the sport.', bestFor: 'Pro atmosphere, instant access to climbs.', accessibleZoneIds: ['alps-bourg'], partnerIds: [], nearestAirportIATA: 'LYS', transferKm: 120 }
        ],
        deepDive: null
      }"""

js = re.sub(alps_regex, replace_alps, js)

dolo_regex = r"\{[^}]*id:\s*'dolomites-alta-badia'[^}]*deepDive:\s*null\s*\}"
def replace_dolo(m):
    return """{
        id: 'dolomites-alta-badia', regionId: 'dolomites-region', name: 'Alta Badia',
        country: 'Italy', continent: 'Europe', lat: 46.55, lng: 11.87, color: '#EF4444',
        tagline: 'The heart of the Sella Ronda',
        character: 'Incredible alpine passes interwoven with rich Ladin culture, luxury mountain lodges, and world-class culinary experiences.',
        desc: 'Corvara and the surrounding villages provide immediate access to the Maratona dles Dolomites passes.',
        flag: '🇮🇹', airportIATA: ['VCE', 'TSF'],
        image: 'https://images.unsplash.com/photo-1546200299-46fdb89a5840?w=1600&q=85',
        images: ['https://images.unsplash.com/photo-1546200299-46fdb89a5840?w=800'],
        highlights: ['Sella Ronda', 'Passo Giau', 'Tre Cime di Lavaredo'],
        stats: { routes: 12, dur: '4-7 Days', diff: 'Expert', season: 'Summer', price: 'Luxury', group: '2-8' },
        season: { start: 6, end: 9, peakStart: 7, peakEnd: 8, monthly: [
          {month:1, heatmapIntensity: 0}, {month:2, heatmapIntensity: 0}, {month:3, heatmapIntensity: 0},
          {month:4, heatmapIntensity: 0}, {month:5, heatmapIntensity: 0.4}, {month:6, heatmapIntensity: 0.9},
          {month:7, heatmapIntensity: 1.0}, {month:8, heatmapIntensity: 1.0}, {month:9, heatmapIntensity: 0.8},
          {month:10, heatmapIntensity: 0.2}, {month:11, heatmapIntensity: 0}, {month:12, heatmapIntensity: 0}
        ]},
        routeCount: 1, partnerCount: 0,
        conditions: { roads: 'Very good, some frost heave', water: 'Abundant fountains', bikeShops: 'Corvara', rental: 'High-end road bikes', specialRisks: 'Thunderstorms, motorbikes on passes' },
        zones: [
          { id: 'dolo-sella', name: 'Sella Ronda', character: 'The legendary four passes.', difficulty: 'expert', bestFor: ['climbers', 'scenery lovers'], routeIds: ['dolo-sella-ronda', 'dolo-giau'] }
        ],
        bases: [
          { id: 'base-corvara', name: 'Corvara', character: 'Ladin mountain luxury.', bestFor: 'Foodies, climbers, luxury.', accessibleZoneIds: ['dolo-sella'], partnerIds: [], nearestAirportIATA: 'VCE', transferKm: 160 }
        ],
        deepDive: null
      }"""

js = re.sub(dolo_regex, replace_dolo, js)

with open('main.js', 'w', encoding='utf-8') as f:
    f.write(js)

with open('tests/data-integrity.test.js', 'r', encoding='utf-8') as f:
    test_js = f.read()

test_js = test_js.replace("assert.strictEqual(REGIONS.length, 11", "assert.strictEqual(REGIONS.length, 13")
test_js = test_js.replace("assert.strictEqual(DESTINATIONS.length, 11", "assert.strictEqual(DESTINATIONS.length, 13")
test_js = test_js.replace("assert.strictEqual(ROUTE_DATABASE.length, 16", "assert.strictEqual(ROUTE_DATABASE.length, 18")

with open('tests/data-integrity.test.js', 'w', encoding='utf-8') as f:
    f.write(test_js)

print("Schema properly patched with all required fields. Assertions updated.")
