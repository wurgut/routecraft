import re

with open('main.js', 'r', encoding='utf-8') as f:
    js = f.read()

new_regions = """
      {
        id: 'french-alps', name: 'French Alps', country: 'France', continent: 'Europe',
        lat: 45.0, lng: 6.0, color: '#3B82F6',
        tagline: 'The roof of cycling history',
        character: 'Legendary cols of the Tour de France. High altitude, epic passes, and deep cycling culture.',
        vibes: ['alpine', 'history', 'epic', 'bucket-list'],
        seasonalWindow: 'Jun–Sep. Best: Jul–Aug.',
        socialProof: { ridersLastMonth: 12500, period: 'July 2025' },
        image: 'https://images.unsplash.com/photo-1549491763-70678fc53036?w=1600&q=85',
        subGeoIds: ['alps-huezdor']
      },
      {
        id: 'dolomites-region', name: 'The Dolomites', country: 'Italy', continent: 'Europe',
        lat: 46.5, lng: 11.8, color: '#EF4444',
        tagline: 'Most beautiful mountains in the world',
        character: 'Pale peaks, dramatic jagged horizons, demanding climbs, and impeccable Italian hospitality.',
        vibes: ['dramatic', 'grueling', 'cuisine', 'maratona'],
        seasonalWindow: 'Jun–Sep. Best: Jul.',
        socialProof: { ridersLastMonth: 9500, period: 'July 2025' },
        image: 'https://images.unsplash.com/photo-1546200299-46fdb89a5840?w=1600&q=85',
        subGeoIds: ['dolomites-alta-badia']
      }
"""

new_destinations = """
      {
        id: 'alps-huezdor', regionId: 'french-alps', name: "Alpe d'Huez & Oisans",
        country: 'France', continent: 'Europe', lat: 45.09, lng: 6.06, color: '#3B82F6',
        tagline: 'The Holy Mountain of Cycling',
        character: 'The ultimate bucket list destination for road cyclists wanting to trace the history of the Tour de France on legendary ascents.',
        desc: 'Bourg d\\'Oisans Valley serves as the perfect launchpad to tackle Alpe d\\'Huez, Galibier, and Croix de Fer.',
        image: 'https://images.unsplash.com/photo-1549491763-70678fc53036?w=1600&q=85',
        images: ['https://images.unsplash.com/photo-1549491763-70678fc53036?w=800','https://images.unsplash.com/photo-1582260654067-17ed36f0db5b?w=800'],
        stats: { routes: 15, dur: '5-10 Days', diff: 'Expert', season: 'Summer', price: 'High', group: '2-12' },
        conditions: { roads: 'Pristine mountain asphalt', water: 'Available at mountain huts', bikeShops: 'Bourg d\\'Oisans', rental: 'Best in France', specialRisks: 'Variable mountain weather, altitude' },
        zones: [
          { id: 'alps-bourg', name: 'Bourg d\\'Oisans Valley', character: 'Base of the big climbs.', difficulty: 'expert', bestFor: ['climbers'], routeIds: ['alps-huez', 'alps-galibier'] }
        ],
        bases: [
          { id: 'base-bourg', name: 'Bourg d\\'Oisans', character: 'Cycling village entirely dedicated to the sport.', bestFor: 'Pro atmosphere, instant access to climbs.', accessibleZoneIds: ['alps-bourg'], partnerIds: [], nearestAirportIATA: 'LYS', transferKm: 120 }
        ],
        deepDive: null
      },
      {
        id: 'dolomites-alta-badia', regionId: 'dolomites-region', name: 'Alta Badia',
        country: 'Italy', continent: 'Europe', lat: 46.55, lng: 11.87, color: '#EF4444',
        tagline: 'The heart of the Sella Ronda',
        character: 'Incredible alpine passes interwoven with rich Ladin culture, luxury mountain lodges, and world-class culinary experiences.',
        desc: 'Corvara and the surrounding villages provide immediate access to the Maratona dles Dolomites passes.',
        image: 'https://images.unsplash.com/photo-1546200299-46fdb89a5840?w=1600&q=85',
        images: ['https://images.unsplash.com/photo-1546200299-46fdb89a5840?w=800'],
        stats: { routes: 12, dur: '4-7 Days', diff: 'Expert', season: 'Summer', price: 'Luxury', group: '2-8' },
        conditions: { roads: 'Very good, some frost heave', water: 'Abundant fountains', bikeShops: 'Corvara', rental: 'High-end road bikes', specialRisks: 'Thunderstorms, motorbikes on passes' },
        zones: [
          { id: 'dolo-sella', name: 'Sella Ronda', character: 'The legendary four passes.', difficulty: 'expert', bestFor: ['climbers', 'scenery lovers'], routeIds: ['dolo-sella-ronda', 'dolo-giau'] }
        ],
        bases: [
          { id: 'base-corvara', name: 'Corvara', character: 'Ladin mountain luxury.', bestFor: 'Foodies, climbers, luxury.', accessibleZoneIds: ['dolo-sella'], partnerIds: [], nearestAirportIATA: 'VCE', transferKm: 160 }
        ],
        deepDive: null
      }
"""

new_routes = """
      {
        id: 'alps-huez', destinationId: 'alps-huezdor', name: "Alpe d'Huez Classic",
        shortDesc: 'The famous 21 switchbacks of cycling lore.',
        type: 'road', stages: [], distance: 13.8, elevationGain: 1120, maxGradient: 13, avgGradient: 8.1,
        difficulty: 5, sceneryRating: 4, trafficLevel: 3, surfaceType: 'asphalt', surfaceCondition: 5,
        season: { start: 6, end: 9, peakStart: 7, peakEnd: 8 },
        flag: '🇫🇷', country: 'France', region: 'French Alps', image: 'https://images.unsplash.com/photo-1549491763-70678fc53036?w=1600&q=85',
        bestDirection: 'Up', wind: 'Minor', weather: 'Variable',
        elevationProfile: [0,20,40,60,80,100],
        strava: { komTime: '37m 15s', avgTime: '1h 10m', segmentCount: 21 },
        confidence: { waterFrequency: 'Every 5km', phoneSignal: 'Perfect', nearestBikeShop: 'Bourg', surfaceBreakdown: '100% smooth Tarmac', emergencyContacts: '112', offlineMapAvailable: true },
        localTips: ['Pace yourself on the steep first 3 bends.', 'Look for the photographers at corner 5.'],
        waterStops: []
      },
      {
        id: 'dolo-sella-ronda', destinationId: 'dolomites-alta-badia', name: 'Sella Ronda',
        shortDesc: 'Four spectacular passes circling the Sella Massif.',
        type: 'road', stages: [], distance: 54.0, elevationGain: 1650, maxGradient: 11, avgGradient: 6.8,
        difficulty: 4, sceneryRating: 5, trafficLevel: 4, surfaceType: 'asphalt', surfaceCondition: 4,
        season: { start: 6, end: 9, peakStart: 7, peakEnd: 8 },
        flag: '🇮🇹', country: 'Italy', region: 'Dolomites', image: 'https://images.unsplash.com/photo-1546200299-46fdb89a5840?w=1600&q=85',
        bestDirection: 'Anti-clockwise', wind: 'Minor', weather: 'Variable',
        elevationProfile: [0,50,10,60,20,100],
        strava: { komTime: '1h 55m', avgTime: '3h 30m', segmentCount: 14 },
        confidence: { waterFrequency: 'Every village', phoneSignal: 'Good', nearestBikeShop: 'Corvara', surfaceBreakdown: '100% mountain asphalt', emergencyContacts: '112', offlineMapAvailable: true },
        localTips: ['Start early to beat the motorbikes.', 'Stop for strudel at Passo Pordoi.'],
        waterStops: []
      }
"""

js = js.replace('var REGIONS = [', 'var REGIONS = [' + new_regions + ',', 1)
js = js.replace('var DESTINATIONS = [', 'var DESTINATIONS = [' + new_destinations + ',', 1)
if 'var ROUTE_DATABASE = [' in js:
    js = js.replace('var ROUTE_DATABASE = [', 'var ROUTE_DATABASE = [' + new_routes + ',', 1)
elif 'const ROUTE_DATABASE = [' in js:
    js = js.replace('const ROUTE_DATABASE = [', 'const ROUTE_DATABASE = [' + new_routes + ',', 1)

with open('main.js', 'w', encoding='utf-8') as f:
    f.write(js)
print("Data expansion for Alps and Dolomites injected.")
