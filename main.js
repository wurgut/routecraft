    /* ═══════════════════════════════════════════
       1. REGIONS — Geographic macro-regions (L2)
       ═══════════════════════════════════════════ */
    var REGIONS = [
      {
        id: 'canary-islands', name: 'Canary Islands', country: 'Spain', continent: 'Europe',
        lat: 28.1, lng: -15.4, color: '#e8491d',
        tagline: 'Volcanic fire, year-round sun',
        character: 'Seven volcanic islands off Africa\'s northwest coast. Year-round cycling with trade winds, dramatic volcanic terrain, and costs below mainland Spain.',
        vibes: ['pro-training', 'year-round', 'volcanic', 'wind-training'],
        seasonalWindow: 'Year-round. Best: Feb–May, Oct–Nov.',
        socialProof: { ridersLastMonth: 3200, period: 'March 2025' },
        image: 'https://images.unsplash.com/photo-1548025146-ed39dc5f04e4?w=1600&q=85',
        subGeoIds: ['fuerteventura']
      },
      {
        id: 'balearics', name: 'Balearic Islands', country: 'Spain', continent: 'Europe',
        lat: 39.5, lng: 2.9, color: '#e85d3a',
        tagline: 'The cycling capital of Europe',
        character: 'Mediterranean archipelago that defined cycling tourism. Perfect infrastructure, bike-friendly hotels, 300 days of sun.',
        vibes: ['pro-training', 'all-levels', 'infrastructure'],
        seasonalWindow: 'Mar–Nov. Best: Apr–May, Sep–Oct.',
        socialProof: { ridersLastMonth: 8500, period: 'April 2025' },
        image: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=1600&q=85',
        subGeoIds: ['mallorca']
      },
      {
        id: 'carpathians', name: 'Carpathian Mountains', country: 'Romania', continent: 'Europe',
        lat: 45.6, lng: 24.6, color: '#44D62C',
        tagline: 'Cycling\'s last great secret',
        character: 'Epic alpine climbing at a fraction of Alpine costs. Open June–October only, with brown bears, shepherd trails, and zero tourists on two wheels.',
        vibes: ['alpine', 'adventure', 'value', 'wilderness'],
        seasonalWindow: 'Jun–Oct. Best: Jul–Aug.',
        socialProof: { ridersLastMonth: 420, period: 'July 2025' },
        image: 'https://images.unsplash.com/photo-1569165003085-e8a1066f1cb8?w=1200&q=80',
        subGeoIds: ['romania']
      },
      {
        id: 'greek-islands', name: 'Greek Islands', country: 'Greece', continent: 'Europe',
        lat: 35.2, lng: 24.9, color: '#3B82F6',
        tagline: 'Where mountains meet the Libyan Sea',
        character: 'Ancient mountains, gorge climbs, and Mediterranean hospitality. White Mountains offer dramatic climbing; Cretan cuisine makes every rest stop memorable.',
        vibes: ['mountains', 'cuisine', 'history', 'coastal'],
        seasonalWindow: 'Apr–Nov. Best: May–Jun, Sep–Oct.',
        socialProof: { ridersLastMonth: 1100, period: 'May 2025' },
        image: 'https://images.unsplash.com/photo-1656861679110-a632ad041c13?w=1600&q=85',
        subGeoIds: ['crete']
      },
      {
        id: 'central-italy', name: 'Central Italy', country: 'Italy', continent: 'Europe',
        lat: 43.35, lng: 11.32, color: '#c9a84c',
        tagline: 'White roads & Chianti sunsets',
        character: 'Strade bianche — white gravel roads through cypress-lined vineyards. Rolling Chianti hills with wine and olive oil tasting built into every ride.',
        vibes: ['gravel', 'wine', 'scenic', 'culture'],
        seasonalWindow: 'Apr–Oct. Best: May–Jun, Sep–Oct.',
        socialProof: { ridersLastMonth: 2800, period: 'May 2025' },
        image: 'https://images.unsplash.com/photo-1565992441121-4367c2967103?w=1200&q=80',
        subGeoIds: ['tuscany']
      },
      {
        id: 'italian-alps', name: 'Italian Alps', country: 'Italy', continent: 'Europe',
        lat: 46.53, lng: 10.45, color: '#8B5CF6',
        tagline: 'The king of Alpine passes',
        character: 'Home to the Stelvio, Mortirolo, and Gavia — the most feared passes in professional cycling. Open only in summer.',
        vibes: ['alpine', 'expert', 'iconic-climbs'],
        seasonalWindow: 'Jun–Sep. Best: Jul–Aug.',
        socialProof: { ridersLastMonth: 1500, period: 'July 2025' },
        image: 'https://images.unsplash.com/photo-1502786129293-79981df4e689?w=1200&q=80',
        subGeoIds: ['dolomites']
      },
      {
        id: 'french-alps', name: 'French Alps', country: 'France', continent: 'Europe',
        lat: 45.09, lng: 6.07, color: '#3B82F6',
        tagline: 'Where the Tour de France is won',
        character: 'The most famous climbs in professional cycling. Alpe d\'Huez\'s 21 hairpins, Col du Galibier at 2,642m, decades of Tour de France history.',
        vibes: ['tour-de-france', 'alpine', 'iconic-climbs'],
        seasonalWindow: 'May–Sep. Best: Jun–Aug.',
        socialProof: { ridersLastMonth: 3800, period: 'July 2025' },
        image: 'https://images.unsplash.com/photo-1530143584546-02191bc84eb5?w=1200&q=80',
        subGeoIds: ['alps']
      },
      {
        id: 'seto-inland-sea', name: 'Seto Inland Sea', country: 'Japan', continent: 'Asia',
        lat: 34.25, lng: 133.18, color: '#06B6D4',
        tagline: 'Island-hopping by bicycle bridge',
        character: '70 km cycling road connecting six islands via dedicated bicycle bridges. Flat, scenic, punctuated by ramen stops, onsen baths, and Shinto shrines.',
        vibes: ['accessible', 'cultural', 'island-hopping', 'beginner-friendly'],
        seasonalWindow: 'Mar–Nov. Best: Apr–May, Oct–Nov.',
        socialProof: { ridersLastMonth: 5200, period: 'October 2025' },
        image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=1200&q=80',
        subGeoIds: ['japan']
      },
      {
        id: 'catalonia', name: 'Catalonia', country: 'Spain', continent: 'Europe',
        lat: 41.98, lng: 2.82, color: '#EC4899',
        tagline: 'Where the pros live & train',
        character: 'Adopted home of professional cycling. More WorldTour riders live here than anywhere else. Medieval streets, coastal rides, Pyrenean foothills, best cycling café culture.',
        vibes: ['pro-lifestyle', 'cafe-culture', 'all-levels'],
        seasonalWindow: 'Mar–Nov. Best: Apr–May, Sep–Oct.',
        socialProof: { ridersLastMonth: 6100, period: 'April 2025' },
        image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=1200&q=80',
        subGeoIds: ['girona']
      },
      {
        id: 'western-cape', name: 'Western Cape', country: 'South Africa', continent: 'Africa',
        lat: -33.93, lng: 18.42, color: '#F59E0B',
        tagline: 'Where mountains meet the Atlantic',
        character: 'Chapman\'s Peak Drive is one of the world\'s most scenic coastal roads. Table Mountain as backdrop. Cape Town Cycle Tour draws 35,000 riders.',
        vibes: ['coastal', 'scenic', 'southern-hemisphere'],
        seasonalWindow: 'Nov–Mar. Best: Dec–Feb.',
        socialProof: { ridersLastMonth: 2200, period: 'January 2025' },
        image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=1200&q=80',
        subGeoIds: ['cape-town']
      },
      {
        id: 'colombian-andes', name: 'Colombian Andes', country: 'Colombia', continent: 'South America',
        lat: 6.25, lng: -75.56, color: '#EF4444',
        tagline: 'Altitude, culture & café de origen',
        character: 'Homeland of Grand Tour champions. Alto de Letras is a 3,600m mega-climb. Train at altitude in the Andes while drinking the world\'s best coffee.',
        vibes: ['altitude', 'coffee', 'grand-tour-heritage', 'value'],
        seasonalWindow: 'Dec–Mar, Jun–Aug. Best: Jan–Feb.',
        socialProof: { ridersLastMonth: 900, period: 'January 2025' },
        image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=1200&q=80',
        subGeoIds: ['colombia']
      }
    ];


    /* ═══════════════════════════════════════════
       2. DESTINATIONS — Sub-geographies (L3)
       Unified from LOCATIONS + DESTINATIONS + deep dives
       ═══════════════════════════════════════════ */
    var DESTINATIONS = [
      // ── FUERTEVENTURA ──
      {
        id: 'fuerteventura', name: 'Fuerteventura', country: 'Spain', continent: 'Europe', flag: '\u{1F1EA}\u{1F1F8}',
        lat: 28.36, lng: -14.05, color: '#e8491d', regionId: 'canary-islands',
        tagline: 'Mars on Earth \u2014 desert landscapes, endless coast, wind as companion',
        desc: 'Europe\'s secret winter training ground. Year-round 17\u201324\u00B0C, volcanic terrain with minimal traffic, and costs lower than Tenerife or Lanzarote. The Betancuria Loop delivers 1,180m of climbing through ancient volcanic spine with Atlantic panoramas.',
        stats: { dur: '5\u201310 days', diff: 'Intermediate', season: 'Oct\u2013Apr', price: '\u20AC800\u20131,500', group: '2\u201312', routes: 5 },
        highlights: ['Year-round 17\u201324\u00B0C riding', 'Volcanic landscapes with zero traffic', 'Wind-training paradise for time trialists', 'Cheapest Canary Island for cycling', 'Playitas Resort: Olympic-grade facilities'],
        images: [
          'https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=1200&q=80',
          'https://images.unsplash.com/photo-1710277412488-cc28392a8867?w=1200&q=80',
          'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=1200&q=80',
          'https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?w=1200&q=80',
          'https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=1200&q=80'
        ],
        image: 'https://images.unsplash.com/photo-1548025146-ed39dc5f04e4?w=1600&q=85',
        airportIATA: ['FUE'], routeCount: 3, partnerCount: 3,
        season: {
          start: 9, end: 6, peak: [11, 12, 1, 2, 3],
          monthly: [
            { month: 1,  tempRange: [17, 22], daylight: 10.5, wind: 'moderate-NE', heatmapIntensity: 0.8 },
            { month: 2,  tempRange: [17, 23], daylight: 11.0, wind: 'moderate-NE', heatmapIntensity: 0.9 },
            { month: 3,  tempRange: [18, 24], daylight: 12.0, wind: 'moderate-NE', heatmapIntensity: 0.85 },
            { month: 4,  tempRange: [18, 25], daylight: 13.0, wind: 'light-NE', heatmapIntensity: 0.7 },
            { month: 5,  tempRange: [19, 26], daylight: 14.0, wind: 'moderate-NE', heatmapIntensity: 0.5 },
            { month: 6,  tempRange: [21, 28], daylight: 14.5, wind: 'strong-NE', heatmapIntensity: 0.3 },
            { month: 7,  tempRange: [23, 31], daylight: 14.5, wind: 'strong-NE', heatmapIntensity: 0.1 },
            { month: 8,  tempRange: [24, 32], daylight: 13.5, wind: 'strong-NE', heatmapIntensity: 0.1 },
            { month: 9,  tempRange: [23, 30], daylight: 12.5, wind: 'moderate-NE', heatmapIntensity: 0.15 },
            { month: 10, tempRange: [21, 27], daylight: 11.5, wind: 'moderate-NE', heatmapIntensity: 0.6 },
            { month: 11, tempRange: [19, 24], daylight: 11.0, wind: 'moderate-NE', heatmapIntensity: 0.75 },
            { month: 12, tempRange: [18, 22], daylight: 10.5, wind: 'moderate-NE', heatmapIntensity: 0.7 }
          ]
        },
        conditions: {
          roads: 'Well-maintained asphalt. Inland roads quieter than coastal highways.',
          water: 'Scarce in interior and south. Carry minimum 2 bottles. Refill in villages.',
          bikeShops: 'Limited. Puerto del Rosario and Corralejo only. Bring essential spares.',
          rental: 'Available in Corralejo, Costa Calma, and Jand\u00EDa. Book 1\u20132 weeks ahead in Feb.',
          specialRisks: 'Calima (Saharan dust) \u2014 low in Feb, occasional. Avoid riding in heavy dust.'
        },
        zones: [
          { id: 'fuerte-north', name: 'The North \u2014 Corralejo & Dunes', character: 'Surfer-town energy. Flat terrain with volcanic backdrops. Famous Corralejo dunes along the coast.', difficulty: 'easy-moderate', bestFor: ['beginners', 'e-bike explorers', 'beach + rides'], routeIds: ['fuerte-coastal'] },
          { id: 'fuerte-interior', name: 'Volcanic Interior \u2014 Betancuria & P\u00E1jara', character: 'Mars-like landscapes of red earth, dormant volcanoes, and wind-sculpted ravines. The island\'s iconic cycling challenge.', difficulty: 'advanced', bestFor: ['experienced climbers', 'landscape lovers'], routeIds: ['fuerte-betancuria'] },
          { id: 'fuerte-southeast', name: 'The Southeast \u2014 Las Playitas & Gran Tarajal', character: 'The serious cyclist\'s base. Las Playitas sports resort used by professional teams for winter training.', difficulty: 'intermediate', bestFor: ['performance riders', 'triathletes'], routeIds: [] },
          { id: 'fuerte-south', name: 'The Wild South \u2014 Jand\u00EDa Peninsula', character: 'Nature reserve. Wild beaches at Cofete, reachable only by gravel track. Pico de la Zarza 807m.', difficulty: 'expert', bestFor: ['gravel adventurers', 'wilderness seekers'], routeIds: ['fuerte-cofete'] },
          { id: 'fuerte-west', name: 'The West Coast \u2014 El Cotillo & Cliffs', character: 'Remote and solitary. Coastal tracks overlooking furious waves. Quieter than anywhere else on the island.', difficulty: 'intermediate', bestFor: ['solitude seekers', 'coastal lovers'], routeIds: [] }
        ],
        bases: [
          { id: 'corralejo', name: 'Corralejo', character: 'Surfer town. Restaurants, nightlife, bike rental. Ferry to Lanzarote.', bestFor: 'Mixed ability. Social base. Day trips to other zones by car.', accessibleZoneIds: ['fuerte-north', 'fuerte-interior', 'fuerte-west'], partnerIds: ['p-fuerte-playitas'], nearestAirportIATA: 'FUE', transferKm: 40 },
          { id: 'costa-calma', name: 'Costa Calma', character: 'Quiet resort. Central location. Access to both Jand\u00EDa and the interior.', bestFor: 'Solo riders wanting calm. Strategic for covering the island.', accessibleZoneIds: ['fuerte-south', 'fuerte-interior', 'fuerte-southeast'], partnerIds: [], nearestAirportIATA: 'FUE', transferKm: 75 },
          { id: 'las-playitas', name: 'Las Playitas', character: 'Sports resort. Training facilities. Pro-cyclist community.', bestFor: 'Performance riders. Structured training environment.', accessibleZoneIds: ['fuerte-southeast', 'fuerte-interior'], partnerIds: ['p-fuerte-playitas'], nearestAirportIATA: 'FUE', transferKm: 65 }
        ],
        deepDive: {
          routeIds: ['fuerte-betancuria', 'fuerte-cofete', 'fuerte-coastal'],
          intro: 'Fuerteventura is European cycling\'s best-kept winter secret. Year-round sunshine, volcanic landscapes that look like another planet, and trade winds that turn every ride into a tactical challenge. At a fraction of Mallorca\'s cost, with near-zero traffic on inland roads.',
          seasonBar: [
            { month: 'Jan', open: true, note: 'Peak \u2014 perfect training weather, 22-25\u00B0C' },
            { month: 'Feb', open: true, note: 'Peak \u2014 dry, warm, pro teams everywhere' },
            { month: 'Mar', open: true, note: 'Peak \u2014 ideal conditions, spring light' },
            { month: 'Apr', open: true, note: 'Open \u2014 warming up, light trade winds' },
            { month: 'May', open: true, note: 'Open \u2014 warm, occasional calima' },
            { month: 'Jun', open: true, note: 'Open \u2014 hotter, strong trade winds begin' },
            { month: 'Jul', open: false, note: 'Too hot \u2014 35\u00B0C+, extreme winds' },
            { month: 'Aug', open: false, note: 'Too hot \u2014 calima dust storms common' },
            { month: 'Sep', open: false, note: 'Still hot \u2014 winds moderate late month' },
            { month: 'Oct', open: true, note: 'Season reopens \u2014 warm, winds easing' },
            { month: 'Nov', open: true, note: 'Open \u2014 excellent conditions return' },
            { month: 'Dec', open: true, note: 'Open \u2014 mild, quiet roads, festive atmosphere' }
          ],
          culturalHighlights: [
            { title: 'Volcanic Geology', description: 'Fuerteventura is 20 million years old \u2014 the Canaries\' oldest island. Ride through Miocene-era lava fields, ochre badlands, and volcanic calderas.', icon: 'distance' },
            { title: 'Queso Majorero', description: 'Protected Designation of Origin goat cheese made from Majorero goats. Aged varieties have a nutty, paprika-rubbed rind. Buy fresh at Betancuria.', icon: 'dining' },
            { title: 'Wind Culture', description: 'The NNE trade winds shape everything: architecture, agriculture, and cycling tactics. Local riders read wind like a second language.', icon: 'wind' },
            { title: 'Norman Heritage', description: 'Jean de B\u00E9thencourt conquered the island in 1404. The ancient capital Betancuria preserves a Franciscan monastery and Museo Arqueol\u00F3gico.', icon: 'monument' }
          ],
          costComparison: [
            { destination: 'Fuerteventura', hotel: 85, guide: 65, rental: 35, meal: 15, coffee: 2, beer: 3, total7day: 980, currency: 'EUR' },
            { destination: 'Mallorca', hotel: 145, guide: 85, rental: 55, meal: 28, coffee: 4, beer: 5, total7day: 1620, currency: 'EUR' },
            { destination: 'Tenerife', hotel: 95, guide: 70, rental: 40, meal: 18, coffee: 3, beer: 3, total7day: 1120, currency: 'EUR' },
            { destination: 'Lanzarote', hotel: 90, guide: 68, rental: 38, meal: 16, coffee: 2, beer: 3, total7day: 1050, currency: 'EUR' }
          ],
          goldenKeyPackage: {
            name: 'Volcanic Golden Key',
            tagline: 'Zero-worry Fuerteventura. Sun, wind, and volcanic roads \u2014 all handled.',
            includes: ['Private guide + support vehicle all days', 'Playitas Resort premium accommodation', 'Fuerte Bike Station carbon bike rental', 'Airport transfers + route shuttles', 'Wind Rides guided group sessions', 'Emergency mechanical support', 'Cultural stops: Betancuria + cheese tasting', 'Packed lunches + hydration on every ride', '24/7 concierge WhatsApp line'],
            price7day: 2180,
            savingsVsDIY: 380
          }
        }
      },
      // ── ROMANIA ──
      {
        id: 'romania', name: 'Romania', country: 'Romania', continent: 'Europe', flag: '\u{1F1F7}\u{1F1F4}',
        lat: 45.60, lng: 24.62, color: '#44D62C', regionId: 'carpathians',
        tagline: 'The best road in the world',
        desc: 'The road Jeremy Clarkson called "the best in the world." 90 km through Southern Carpathians crossing 2,042m at B\u00E2lea Lake. Open June\u2013October only. Brown bears, shepherd trails, and zero tourists on two wheels.',
        stats: { dur: '3\u20137 days', diff: 'Advanced', season: 'Jun\u2013Oct', price: '\u20AC400\u2013900', group: '2\u20138', routes: 4 },
        highlights: ['2,042m summit at B\u00E2lea Lake', 'Open only 5 months per year', 'Brown bear sightings common', 'Lowest cost cycling destination in Europe', 'Authentic Romanian mountain lodges'],
        images: [
          'https://images.unsplash.com/photo-1569165003085-e8a1066f1cb8?w=1200&q=80',
          'https://images.unsplash.com/photo-1526112982068-f899a62e118e?w=1200&q=80',
          'https://images.unsplash.com/photo-1551818176-60579e574b91?w=1200&q=80',
          'https://images.unsplash.com/photo-1504038877628-14603434107c?w=1200&q=80',
          'https://images.unsplash.com/photo-1584739353467-e42f3f0d36ff?w=1200&q=80'
        ],
        image: 'https://images.unsplash.com/photo-1561196393-d9ef90aa4d4f?w=1600&q=85',
        airportIATA: ['SBZ', 'OTP'], routeCount: 4, partnerCount: 6,
        season: {
          start: 6, end: 10, peak: [7, 8],
          monthly: [
            { month: 1,  tempRange: [-5, 2],  daylight: 9.0,  wind: 'light', heatmapIntensity: 0 },
            { month: 2,  tempRange: [-3, 4],  daylight: 10.0, wind: 'light', heatmapIntensity: 0 },
            { month: 3,  tempRange: [1, 9],   daylight: 11.5, wind: 'light', heatmapIntensity: 0 },
            { month: 4,  tempRange: [5, 14],  daylight: 13.0, wind: 'light', heatmapIntensity: 0 },
            { month: 5,  tempRange: [10, 19], daylight: 15.0, wind: 'light', heatmapIntensity: 0.05 },
            { month: 6,  tempRange: [14, 24], daylight: 16.0, wind: 'light', heatmapIntensity: 0.5 },
            { month: 7,  tempRange: [16, 27], daylight: 16.0, wind: 'light', heatmapIntensity: 0.9 },
            { month: 8,  tempRange: [16, 27], daylight: 15.0, wind: 'light', heatmapIntensity: 0.85 },
            { month: 9,  tempRange: [12, 22], daylight: 13.0, wind: 'light', heatmapIntensity: 0.6 },
            { month: 10, tempRange: [7, 16],  daylight: 11.5, wind: 'light', heatmapIntensity: 0.3 },
            { month: 11, tempRange: [2, 9],   daylight: 10.0, wind: 'light', heatmapIntensity: 0 },
            { month: 12, tempRange: [-3, 3],  daylight: 9.0,  wind: 'light', heatmapIntensity: 0 }
          ]
        },
        conditions: {
          roads: 'Well-maintained main roads. Mountain passes can have rough patches. Minimal traffic outside Jul\u2013Aug.',
          water: 'Mountain springs on routes. Villages every 15\u201325 km on main roads. Carry extra for remote sections.',
          bikeShops: 'Sibiu city center. Limited options elsewhere \u2014 bring essential spares.',
          rental: 'BikeRo in Sibiu, Carpathian Cycles. Book 1 week ahead in peak season.',
          specialRisks: 'Brown bears near B\u00E2lea Lake area. Dogs in villages (carry deterrent). Altitude cold above 1,800m even in summer.'
        },
        zones: [
          { id: 'ro-transfagarasan', name: 'Transf\u0103g\u0103r\u0103\u0219an Valley', character: 'The most dramatic road in Romania. 90 km crossing the Southern Carpathians at 2,042m via B\u00E2lea Lake.', difficulty: 'advanced', bestFor: ['experienced climbers', 'adventure seekers'], routeIds: ['ro-transfagarasan', 'ro-balea'] },
          { id: 'ro-transalpina', name: 'Transalpina Ridge', character: 'Romania\'s highest road at 2,145m. Less famous but equally dramatic, with alpine meadows and shepherds\' huts.', difficulty: 'advanced', bestFor: ['altitude lovers', 'solitude seekers'], routeIds: ['ro-transalpina'] },
          { id: 'ro-cheia', name: 'Cheia Pass & Prahova Valley', character: 'Accessible pass connecting Transylvania to Wallachia. Lower altitude, mixed terrain, rolling through forested valleys.', difficulty: 'intermediate', bestFor: ['intermediate riders', 'mixed terrain'], routeIds: ['ro-cheia'] }
        ],
        bases: [
          { id: 'sibiu', name: 'Sibiu', character: 'European Capital of Culture 2007. Cobblestone squares, baroque architecture, Romania\'s best restaurant scene.', bestFor: 'Main hub for Transf\u0103g\u0103r\u0103\u0219an and Transalpina. Culture and dining on rest days.', accessibleZoneIds: ['ro-transfagarasan', 'ro-transalpina'], partnerIds: ['p-ro-hilton-sibiu', 'p-ro-bikero', 'p-ro-bike-rental'], nearestAirportIATA: 'SBZ', transferKm: 5 },
          { id: 'curtea-de-arges', name: 'Curtea de Arge\u0219', character: 'Small historic town at the southern base of the Transf\u0103g\u0103r\u0103\u0219an. Medieval monastery.', bestFor: 'Southern approach. Budget-friendly.', accessibleZoneIds: ['ro-transfagarasan'], partnerIds: ['p-ro-posada'], nearestAirportIATA: 'OTP', transferKm: 160 }
        ],
        deepDive: {
          routeIds: ['ro-transfagarasan', 'ro-transalpina', 'ro-balea', 'ro-cheia'],
          intro: 'Romania is cycling\'s last great secret. While Mallorca and Tuscany crowd with carbon-clad pelotons, the Carpathians offer equally dramatic climbing at a fraction of the cost \u2014 and without the traffic. The Transf\u0103g\u0103r\u0103\u0219an alone has more vertical per kilometer than the Stelvio.',
          seasonBar: [
            { month: 'Jan', open: false, note: 'Roads closed \u2014 snow' },
            { month: 'Feb', open: false, note: 'Roads closed \u2014 snow' },
            { month: 'Mar', open: false, note: 'Roads closed \u2014 snow' },
            { month: 'Apr', open: false, note: 'Roads closed \u2014 snow' },
            { month: 'May', open: false, note: 'Cheia Pass may open late May' },
            { month: 'Jun', open: true, note: 'Season opens \u2014 snow walls, cool temps, quiet roads' },
            { month: 'Jul', open: true, note: 'Peak season \u2014 warm, long days, some tourist traffic' },
            { month: 'Aug', open: true, note: 'Peak season \u2014 busiest month, start rides early' },
            { month: 'Sep', open: true, note: 'Shoulder \u2014 autumn colors begin, cooler summits' },
            { month: 'Oct', open: true, note: 'Late season \u2014 stunning foliage, cold summits, roads may close late Oct' },
            { month: 'Nov', open: false, note: 'Roads closing \u2014 snow risk' },
            { month: 'Dec', open: false, note: 'Roads closed \u2014 snow' }
          ],
          culturalHighlights: [
            { title: 'Medieval Sibiu', description: 'European Capital of Culture 2007. Cobblestone squares, baroque architecture, and Romania\'s best restaurant scene.', icon: 'monument' },
            { title: 'Shepherd Traditions', description: 'High mountain shepherds still make cheese in traditional st\u00E2ni. Stop for fresh ca\u0219caval and a glass of jinars.', icon: 'dining' },
            { title: '\u021Auic\u0103 & Palinc\u0103', description: 'Romania\'s legendary plum brandy. Every village has a master distiller. The double-distilled palinc\u0103 will reset your legs.', icon: 'wine' },
            { title: 'Fortified Churches', description: 'UNESCO-listed Saxon fortified churches dot the Transylvanian hills. 7 are World Heritage sites within riding distance of Sibiu.', icon: 'book' }
          ],
          costComparison: [
            { destination: 'Romania', hotel: 52, guide: 55, rental: 30, meal: 12, coffee: 2, beer: 2, total7day: 680, currency: 'EUR' },
            { destination: 'Mallorca', hotel: 145, guide: 85, rental: 55, meal: 28, coffee: 4, beer: 5, total7day: 1620, currency: 'EUR' },
            { destination: 'French Alps', hotel: 88, guide: 95, rental: 65, meal: 32, coffee: 5, beer: 6, total7day: 1450, currency: 'EUR' },
            { destination: 'Tuscany', hotel: 160, guide: 90, rental: 50, meal: 35, coffee: 3, beer: 5, total7day: 1780, currency: 'EUR' }
          ],
          goldenKeyPackage: {
            name: 'Carpathian Golden Key',
            tagline: 'Zero-worry Transf\u0103g\u0103r\u0103\u0219an. Every detail handled.',
            includes: ['Private guide + support vehicle all days', 'Hilton Sibiu + Hotel Posada accommodation', 'Carpathian Cycles premium bike', 'TransCarpath airport transfers + route shuttles', 'Therme Sibiu recovery sessions', 'Emergency mechanical support', 'Cultural stops: fortified churches + \u021Buic\u0103 tasting', 'Packed lunches + hydration on every ride', '24/7 concierge WhatsApp line'],
            price7day: 1890,
            savingsVsDIY: 340
          }
        }
      },
      // ── CRETE ──
      {
        id: 'crete', name: 'Crete', country: 'Greece', continent: 'Europe', flag: '\u{1F1EC}\u{1F1F7}',
        lat: 35.24, lng: 24.47, color: '#3B82F6', regionId: 'greek-islands',
        tagline: 'Ancient mountains meet the Libyan Sea',
        desc: 'Where ancient mountains meet the Libyan Sea. The White Mountains offer dramatic climbing, while Cretan hospitality \u2014 raki after every meal, tavernas that refuse to let you pay for dessert \u2014 makes every ride feel like coming home.',
        stats: { dur: '5\u201310 days', diff: 'Intermediate\u2013Advanced', season: 'Apr\u2013Nov', price: '\u20AC900\u20131,800', group: '2\u201312', routes: 3 },
        highlights: ['White Mountains dramatic climbing', 'Samari\u00E1 Gorge approach ride', 'Beach recovery between rides', 'Cretan cuisine and raki culture', 'Ancient Minoan heritage'],
        images: [
          'https://images.unsplash.com/photo-1656861679110-a632ad041c13?w=1600&q=85',
          'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1200&q=80',
          'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1200&q=80',
          'https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=1200&q=80',
          'https://images.unsplash.com/photo-1467803738586-46b7eb7b16a1?w=1200&q=80'
        ],
        image: 'https://images.unsplash.com/photo-1656861679110-a632ad041c13?w=1600&q=85',
        airportIATA: ['CHQ'], routeCount: 3, partnerCount: 3,
        season: {
          start: 4, end: 11, peak: [5, 6, 9, 10],
          monthly: [
            { month: 1,  tempRange: [9, 15],  daylight: 10.0, wind: 'moderate', heatmapIntensity: 0 },
            { month: 2,  tempRange: [9, 15],  daylight: 10.5, wind: 'moderate', heatmapIntensity: 0 },
            { month: 3,  tempRange: [10, 17], daylight: 12.0, wind: 'moderate', heatmapIntensity: 0.05 },
            { month: 4,  tempRange: [13, 21], daylight: 13.0, wind: 'light', heatmapIntensity: 0.4 },
            { month: 5,  tempRange: [16, 26], daylight: 14.5, wind: 'light', heatmapIntensity: 0.8 },
            { month: 6,  tempRange: [20, 30], daylight: 15.0, wind: 'light-meltemi', heatmapIntensity: 0.85 },
            { month: 7,  tempRange: [23, 33], daylight: 15.0, wind: 'meltemi', heatmapIntensity: 0.5 },
            { month: 8,  tempRange: [23, 33], daylight: 14.0, wind: 'meltemi', heatmapIntensity: 0.45 },
            { month: 9,  tempRange: [21, 29], daylight: 12.5, wind: 'light', heatmapIntensity: 0.8 },
            { month: 10, tempRange: [17, 25], daylight: 11.5, wind: 'light', heatmapIntensity: 0.7 },
            { month: 11, tempRange: [14, 20], daylight: 10.5, wind: 'moderate', heatmapIntensity: 0.3 },
            { month: 12, tempRange: [11, 16], daylight: 10.0, wind: 'moderate', heatmapIntensity: 0 }
          ]
        },
        conditions: {
          roads: 'Main roads well-maintained. Mountain roads narrow with sharp turns. Watch for goats.',
          water: 'Villages every 10\u201320 km on main routes. Mountain springs marked. Carry extra for south coast.',
          bikeShops: 'Chania and Heraklion. Limited elsewhere.',
          rental: 'Available in Chania. Book ahead in May\u2013Jun and Sep\u2013Oct.',
          specialRisks: 'Meltemi winds Jul\u2013Aug can be extreme. Mountain roads steep and exposed. Summer heat above 32\u00B0C \u2014 start early.'
        },
        zones: [
          { id: 'crete-white-mtns', name: 'White Mountains', character: 'Dramatic limestone peaks rising to 2,453m. The most challenging climbing in Crete.', difficulty: 'advanced', bestFor: ['experienced climbers', 'mountain lovers'], routeIds: ['crete-white-mtns'] },
          { id: 'crete-samaria', name: 'Samari\u00E1 Gorge Approaches', character: 'Rides approaching and descending from Europe\'s longest gorge. Spectacular descents.', difficulty: 'intermediate-advanced', bestFor: ['gorge lovers', 'descenders'], routeIds: ['crete-samaria'] },
          { id: 'crete-south', name: 'South Coast', character: 'Remote coastal roads with views of the Libyan Sea. Quiet villages, dramatic cliffs, beach stops.', difficulty: 'intermediate', bestFor: ['coastal riders', 'beach recovery'], routeIds: ['crete-south-coast'] }
        ],
        bases: [
          { id: 'chania', name: 'Chania', character: 'Venetian harbor town. Best restaurant scene in Crete. Gateway to White Mountains and Samari\u00E1.', bestFor: 'Main hub. Culture, dining, and mountain access.', accessibleZoneIds: ['crete-white-mtns', 'crete-samaria', 'crete-south'], partnerIds: ['p-crete-anemos', 'p-crete-bikes', 'p-crete-guide'], nearestAirportIATA: 'CHQ', transferKm: 15 }
        ],
        deepDive: {
          routeIds: ['crete-samaria', 'crete-white-mtns', 'crete-south-coast'],
          intro: 'Crete is where ancient mountains meet the Libyan Sea. The White Mountains offer some of the Mediterranean\'s most dramatic climbing, while Cretan hospitality \u2014 raki after every meal, tavernas that refuse to let you pay for dessert \u2014 makes every ride feel like coming home.',
          seasonBar: [
            { month: 'Jan', open: false, note: 'Mountain roads closed \u2014 cold, wet' },
            { month: 'Feb', open: false, note: 'Mountain roads closed \u2014 snow possible' },
            { month: 'Mar', open: false, note: 'Early spring \u2014 coastal rides possible but mountains closed' },
            { month: 'Apr', open: true, note: 'Season opens \u2014 wildflowers, cool mountains' },
            { month: 'May', open: true, note: 'Peak \u2014 perfect conditions, 20-26\u00B0C' },
            { month: 'Jun', open: true, note: 'Peak \u2014 warm, long days, dry' },
            { month: 'Jul', open: true, note: 'Open \u2014 hot (32\u00B0C+), start rides early' },
            { month: 'Aug', open: true, note: 'Open \u2014 hottest month, beach recovery essential' },
            { month: 'Sep', open: true, note: 'Peak \u2014 heat easing, sea still warm' },
            { month: 'Oct', open: true, note: 'Peak \u2014 excellent conditions, fewer tourists' },
            { month: 'Nov', open: true, note: 'Late season \u2014 cooler, first rains possible' },
            { month: 'Dec', open: false, note: 'Mountain roads closing \u2014 rain season' }
          ],
          culturalHighlights: [
            { title: 'Minoan Heritage', description: 'Europe\'s oldest civilization flourished here 4,000 years ago. Knossos palace and its frescoes are a rest-day must-visit.', icon: 'monument' },
            { title: 'Cretan Cuisine', description: 'Dakos, kalitsounia, wild greens, and the world\'s finest olive oil. Every taverna meal ends with free raki and seasonal fruit.', icon: 'dining' },
            { title: 'Resistance History', description: 'From Venetians to Ottomans to WWII Germans, Cretans never stopped fighting. Imbros Gorge was an Allied evacuation route in 1941.', icon: 'book' },
            { title: 'Raki Culture', description: 'Cretan grape brandy served after every meal, at every encounter, for every occasion. Refusing is impossible.', icon: 'wine' }
          ],
          costComparison: [
            { destination: 'Crete', hotel: 110, guide: 50, rental: 38, meal: 18, coffee: 3, beer: 4, total7day: 1180, currency: 'EUR' },
            { destination: 'Mallorca', hotel: 145, guide: 85, rental: 55, meal: 28, coffee: 4, beer: 5, total7day: 1620, currency: 'EUR' },
            { destination: 'French Alps', hotel: 88, guide: 95, rental: 65, meal: 32, coffee: 5, beer: 6, total7day: 1450, currency: 'EUR' },
            { destination: 'Tuscany', hotel: 160, guide: 90, rental: 50, meal: 35, coffee: 3, beer: 5, total7day: 1780, currency: 'EUR' }
          ],
          goldenKeyPackage: {
            name: 'Minoan Golden Key',
            tagline: 'Zero-worry Crete. Mountains, gorges, and the Libyan Sea \u2014 all handled.',
            includes: ['Private guide + support vehicle all days', 'Anemos Luxury Grand Resort accommodation', 'Cretan Cycling premium bike rental', 'Airport transfers + route shuttles', 'Minoan Rides guided cultural tours', 'Emergency mechanical support', 'Cultural stops: olive oil tasting + monastery visits', 'Packed lunches + taverna dinners included', '24/7 concierge WhatsApp line'],
            price7day: 2450,
            savingsVsDIY: 420
          }
        }
      },
      // ── MALLORCA ──
      {
        id: 'mallorca', name: 'Mallorca', country: 'Spain', continent: 'Europe', flag: '\u{1F1EA}\u{1F1F8}',
        lat: 39.69, lng: 2.98, color: '#e85d3a', regionId: 'balearics',
        tagline: 'The cycling capital of Europe',
        desc: 'The island that defined cycling tourism. Serra de Tramuntana\'s 26 hairpin Sa Calobra descent is a bucket-list climb for every roadie. Perfect infrastructure, bike-friendly hotels, and 300 days of sun.',
        stats: { dur: '5\u201314 days', diff: 'All levels', season: 'Mar\u2013Jun, Sep\u2013Nov', price: '\u20AC1,000\u20132,500', group: '2\u201320', routes: 8 },
        highlights: ['Sa Calobra: 26 hairpin legendary descent', 'Serra de Tramuntana UNESCO landscape', '300+ days of sunshine per year', 'Europe\'s most bike-friendly island', 'Pro team training camp destination'],
        images: [
          'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=1200&q=80',
          'https://images.unsplash.com/photo-1589810876123-5d9e4f48184e?w=1200&q=80',
          'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1200&q=80',
          'https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=1200&q=80',
          'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1200&q=80'
        ],
        image: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=1600&q=85',
        airportIATA: ['PMI'], routeCount: 1, partnerCount: 1,
        season: {
          start: 3, end: 11, peak: [4, 5, 9, 10],
          monthly: [
            { month: 1,  tempRange: [6, 15],  daylight: 10.0, wind: 'light', heatmapIntensity: 0.15 },
            { month: 2,  tempRange: [6, 15],  daylight: 10.5, wind: 'light', heatmapIntensity: 0.25 },
            { month: 3,  tempRange: [8, 18],  daylight: 12.0, wind: 'light', heatmapIntensity: 0.6 },
            { month: 4,  tempRange: [10, 21], daylight: 13.5, wind: 'light', heatmapIntensity: 0.85 },
            { month: 5,  tempRange: [14, 25], daylight: 14.5, wind: 'light', heatmapIntensity: 0.9 },
            { month: 6,  tempRange: [18, 29], daylight: 15.0, wind: 'light', heatmapIntensity: 0.7 },
            { month: 7,  tempRange: [21, 33], daylight: 15.0, wind: 'light', heatmapIntensity: 0.4 },
            { month: 8,  tempRange: [22, 33], daylight: 14.0, wind: 'light', heatmapIntensity: 0.35 },
            { month: 9,  tempRange: [19, 29], daylight: 12.5, wind: 'light', heatmapIntensity: 0.8 },
            { month: 10, tempRange: [15, 24], daylight: 11.5, wind: 'light', heatmapIntensity: 0.75 },
            { month: 11, tempRange: [11, 19], daylight: 10.5, wind: 'light', heatmapIntensity: 0.35 },
            { month: 12, tempRange: [8, 16],  daylight: 9.5,  wind: 'light', heatmapIntensity: 0.1 }
          ]
        },
        conditions: {
          roads: 'Excellent. Dedicated cycling lanes on many routes. Well-maintained mountain roads.',
          water: 'Caf\u00E9s and fountains frequent. Never more than 10\u201315 km between stops.',
          bikeShops: 'Abundant in Palma, Alc\u00FAdia, Pollen\u00E7a, and S\u00F3ller.',
          rental: 'Wide availability. Carbon road and gravel bikes. Book 2+ weeks ahead in Apr\u2013May.',
          specialRisks: 'Tourist traffic on coastal roads. Sa Calobra descent has tight turns \u2014 watch for buses.'
        },
        zones: [
          { id: 'mallorca-tramuntana', name: 'Serra de Tramuntana', character: 'UNESCO World Heritage mountain range. Sa Calobra, Puig Major, Cap de Formentor.', difficulty: 'advanced', bestFor: ['climbers', 'pro-training'], routeIds: ['mallorca-sa-calobra'] },
          { id: 'mallorca-plains', name: 'Central Plain & East Coast', character: 'Flat to rolling terrain. Perfect for base miles, group rides, and beginners.', difficulty: 'easy', bestFor: ['beginners', 'group rides'], routeIds: [] }
        ],
        bases: [
          { id: 'palma', name: 'Palma de Mallorca', character: 'Capital city. Best restaurants, nightlife, cycling caf\u00E9 culture.', bestFor: 'All-round base. City culture plus mountain access.', accessibleZoneIds: ['mallorca-tramuntana', 'mallorca-plains'], partnerIds: [], nearestAirportIATA: 'PMI', transferKm: 8 }
        ],
        deepDive: null
      },
      // ── TUSCANY ──
      {
        id: 'tuscany', name: 'Tuscany', country: 'Italy', continent: 'Europe', flag: '\u{1F1EE}\u{1F1F9}',
        lat: 43.35, lng: 11.32, color: '#c9a84c', regionId: 'central-italy',
        tagline: 'White roads & Chianti sunsets',
        desc: 'The strade bianche \u2014 white gravel roads through cypress-lined vineyards that inspired L\'Eroica. Rolling Chianti hills with wine and olive oil tasting built into every ride. Gravel cycling at its most beautiful.',
        stats: { dur: '4\u201310 days', diff: 'Intermediate', season: 'Apr\u2013Jun, Sep\u2013Oct', price: '\u20AC900\u20132,000', group: '2\u201312', routes: 6 },
        highlights: ['Strade Bianche race route rideable', 'Wine tasting at family vineyards', 'Cypress-lined gravel perfection', 'L\'Eroica vintage cycling festival', 'Agriturismo farm-stays with gourmet dining'],
        images: [
          'https://images.unsplash.com/photo-1565992441121-4367c2967103?w=1200&q=80',
          'https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=1200&q=80',
          'https://images.unsplash.com/photo-1541370976299-4d24ebbc9077?w=1200&q=80',
          'https://images.unsplash.com/photo-1467803738586-46b7eb7b16a1?w=1200&q=80',
          'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&q=80'
        ],
        image: 'https://images.unsplash.com/photo-1565992441121-4367c2967103?w=1600&q=85',
        airportIATA: ['FLR', 'PSA'], routeCount: 1, partnerCount: 1,
        season: {
          start: 4, end: 10, peak: [5, 6, 9, 10],
          monthly: [
            { month: 1,  tempRange: [2, 10],  daylight: 9.5,  wind: 'light', heatmapIntensity: 0 },
            { month: 2,  tempRange: [3, 12],  daylight: 10.5, wind: 'light', heatmapIntensity: 0.05 },
            { month: 3,  tempRange: [5, 15],  daylight: 12.0, wind: 'light', heatmapIntensity: 0.2 },
            { month: 4,  tempRange: [8, 19],  daylight: 13.5, wind: 'light', heatmapIntensity: 0.6 },
            { month: 5,  tempRange: [12, 24], daylight: 15.0, wind: 'light', heatmapIntensity: 0.85 },
            { month: 6,  tempRange: [16, 29], daylight: 15.5, wind: 'light', heatmapIntensity: 0.8 },
            { month: 7,  tempRange: [19, 33], daylight: 15.5, wind: 'light', heatmapIntensity: 0.4 },
            { month: 8,  tempRange: [19, 33], daylight: 14.5, wind: 'light', heatmapIntensity: 0.35 },
            { month: 9,  tempRange: [16, 28], daylight: 12.5, wind: 'light', heatmapIntensity: 0.75 },
            { month: 10, tempRange: [11, 22], daylight: 11.5, wind: 'light', heatmapIntensity: 0.65 },
            { month: 11, tempRange: [6, 14],  daylight: 10.0, wind: 'light', heatmapIntensity: 0.1 },
            { month: 12, tempRange: [3, 10],  daylight: 9.5,  wind: 'light', heatmapIntensity: 0 }
          ]
        },
        conditions: {
          roads: 'Mix of paved and white gravel (strade bianche). Main roads good. Gravel sections can be rough after rain.',
          water: 'Frequent villages and agriturismi. Fountains in most town squares.',
          bikeShops: 'Siena, Florence. Several specialist gravel shops.',
          rental: 'Good availability. Gravel-specific bikes common. Book ahead for L\'Eroica week.',
          specialRisks: 'Gravel roads dusty in summer, muddy in rain. Hunters active Oct\u2013Jan (wear bright colors).'
        },
        zones: [
          { id: 'tuscany-chianti', name: 'Chianti Hills', character: 'Rolling vineyard country between Florence and Siena. Classic strade bianche, wine stops, cypress lanes.', difficulty: 'intermediate', bestFor: ['gravel riders', 'wine lovers'], routeIds: ['tuscany-strade-bianche'] },
          { id: 'tuscany-crete-senesi', name: 'Crete Senesi', character: 'Lunar clay hills south of Siena. Stark, beautiful, remote gravel riding.', difficulty: 'intermediate', bestFor: ['photographers', 'solitude seekers'], routeIds: [] }
        ],
        bases: [
          { id: 'siena', name: 'Siena', character: 'Medieval city. Piazza del Campo, Palio horse race, world-class dining.', bestFor: 'Central hub for all Tuscan gravel. Culture on rest days.', accessibleZoneIds: ['tuscany-chianti', 'tuscany-crete-senesi'], partnerIds: [], nearestAirportIATA: 'FLR', transferKm: 75 }
        ],
        deepDive: null
      },
      // ── DOLOMITES (was stelvio in LOCATIONS) ──
      {
        id: 'dolomites', name: 'Stelvio Pass', country: 'Italy', continent: 'Europe', flag: '\u{1F1EE}\u{1F1F9}',
        lat: 46.53, lng: 10.45, color: '#8B5CF6', regionId: 'italian-alps',
        tagline: 'The highest paved pass in the Alps',
        desc: '2,757m of altitude and 48 hairpin turns from the Bormio side alone. The Stelvio is the Everest of European cycling. Open only in summer, it rewards those who conquer it with views stretching to the Dolomites.',
        stats: { dur: '3\u20137 days', diff: 'Expert', season: 'Jun\u2013Sep', price: '\u20AC1,100\u20132,400', group: '2\u201310', routes: 4 },
        highlights: ['2,757m \u2014 highest paved Alpine pass', '48 hairpin bends from Bormio', 'Giro d\'Italia legendary summit finish', 'Three approach routes with different characters', 'Connected to Mortirolo and Gavia passes'],
        images: [
          'https://images.unsplash.com/photo-1502786129293-79981df4e689?w=1200&q=80',
          'https://images.unsplash.com/photo-1477346611705-65d1883cee1e?w=1200&q=80',
          'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=1200&q=80',
          'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80',
          'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=1200&q=80'
        ],
        image: 'https://images.unsplash.com/photo-1502786129293-79981df4e689?w=1600&q=85',
        airportIATA: ['INN', 'VRN'], routeCount: 1, partnerCount: 1,
        season: {
          start: 6, end: 9, peak: [7, 8],
          monthly: [
            { month: 1,  tempRange: [-10, -2], daylight: 9.0,  wind: 'light', heatmapIntensity: 0 },
            { month: 2,  tempRange: [-8, 0],   daylight: 10.0, wind: 'light', heatmapIntensity: 0 },
            { month: 3,  tempRange: [-4, 5],   daylight: 11.5, wind: 'light', heatmapIntensity: 0 },
            { month: 4,  tempRange: [0, 10],   daylight: 13.5, wind: 'light', heatmapIntensity: 0 },
            { month: 5,  tempRange: [5, 15],   daylight: 15.0, wind: 'light', heatmapIntensity: 0.1 },
            { month: 6,  tempRange: [8, 20],   daylight: 16.0, wind: 'light', heatmapIntensity: 0.6 },
            { month: 7,  tempRange: [11, 24],  daylight: 16.0, wind: 'light', heatmapIntensity: 0.9 },
            { month: 8,  tempRange: [11, 23],  daylight: 14.5, wind: 'light', heatmapIntensity: 0.85 },
            { month: 9,  tempRange: [7, 18],   daylight: 12.5, wind: 'light', heatmapIntensity: 0.5 },
            { month: 10, tempRange: [3, 12],   daylight: 11.0, wind: 'light', heatmapIntensity: 0.05 },
            { month: 11, tempRange: [-3, 5],   daylight: 9.5,  wind: 'light', heatmapIntensity: 0 },
            { month: 12, tempRange: [-8, -1],  daylight: 9.0,  wind: 'light', heatmapIntensity: 0 }
          ]
        },
        conditions: {
          roads: 'Well-maintained Alpine roads. Hairpin turns require caution on descents. Some gravel shoulders.',
          water: 'Rifugios (mountain huts) on main passes. Villages in valleys.',
          bikeShops: 'Bormio, Prad am Stilfserjoch. Specialist Alpine shops.',
          rental: 'Available in Bormio and Prad. Book ahead Jul\u2013Aug.',
          specialRisks: 'Altitude \u2014 above 2,500m oxygen is thin. Afternoon thunderstorms common Jul\u2013Aug. Temperature drops 6\u00B0C per 1,000m.'
        },
        zones: [
          { id: 'dolomites-stelvio', name: 'Stelvio & Surrounding Passes', character: 'The crown jewel. Stelvio, Mortirolo, Gavia \u2014 three legendary passes within a day\'s ride.', difficulty: 'expert', bestFor: ['expert climbers', 'Giro d\'Italia pilgrims'], routeIds: ['dolomites-stelvio'] }
        ],
        bases: [
          { id: 'bormio', name: 'Bormio', character: 'Alpine spa town at the base of Stelvio. Thermal baths for recovery. Classic Italian dining.', bestFor: 'Base for all three major passes. Recovery-focused.', accessibleZoneIds: ['dolomites-stelvio'], partnerIds: [], nearestAirportIATA: 'INN', transferKm: 180 }
        ],
        deepDive: null
      },
      // ── FRENCH ALPS (was alpe-dhuez in LOCATIONS) ──
      {
        id: 'alps', name: 'French Alps', country: 'France', continent: 'Europe', flag: '\u{1F1EB}\u{1F1F7}',
        lat: 45.09, lng: 6.07, color: '#3B82F6', regionId: 'french-alps',
        tagline: '21 bends of Tour de France glory',
        desc: 'The most famous climb in professional cycling. 21 numbered hairpin bends, each named after a Tour de France stage winner. 13.8 km at 8.1% average gradient \u2014 the ultimate test piece for road cyclists worldwide.',
        stats: { dur: '3\u20137 days', diff: 'Advanced', season: 'May\u2013Sep', price: '\u20AC1,000\u20132,200', group: '2\u201315', routes: 5 },
        highlights: ['21 legendary numbered hairpins', 'Tour de France mountain stage history', 'Col du Galibier and Col de la Croix de Fer nearby', 'Dedicated cycling infrastructure', 'Alpine scenery above 1,800m'],
        images: [
          'https://images.unsplash.com/photo-1530143584546-02191bc84eb5?w=1200&q=80',
          'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80',
          'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1200&q=80',
          'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80',
          'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1200&q=80'
        ],
        image: 'https://images.unsplash.com/photo-1530143584546-02191bc84eb5?w=1600&q=85',
        airportIATA: ['GNB', 'LYS'], routeCount: 2, partnerCount: 1,
        season: {
          start: 5, end: 9, peak: [6, 7, 8],
          monthly: [
            { month: 1,  tempRange: [-6, 1],  daylight: 9.0,  wind: 'light', heatmapIntensity: 0 },
            { month: 2,  tempRange: [-5, 3],  daylight: 10.5, wind: 'light', heatmapIntensity: 0 },
            { month: 3,  tempRange: [-2, 7],  daylight: 12.0, wind: 'light', heatmapIntensity: 0 },
            { month: 4,  tempRange: [2, 12],  daylight: 13.5, wind: 'light', heatmapIntensity: 0.05 },
            { month: 5,  tempRange: [6, 17],  daylight: 15.0, wind: 'light', heatmapIntensity: 0.4 },
            { month: 6,  tempRange: [10, 22], daylight: 16.0, wind: 'light', heatmapIntensity: 0.8 },
            { month: 7,  tempRange: [12, 25], daylight: 16.0, wind: 'light', heatmapIntensity: 0.95 },
            { month: 8,  tempRange: [12, 25], daylight: 14.5, wind: 'light', heatmapIntensity: 0.9 },
            { month: 9,  tempRange: [9, 20],  daylight: 12.5, wind: 'light', heatmapIntensity: 0.55 },
            { month: 10, tempRange: [4, 14],  daylight: 11.0, wind: 'light', heatmapIntensity: 0.1 },
            { month: 11, tempRange: [-1, 7],  daylight: 9.5,  wind: 'light', heatmapIntensity: 0 },
            { month: 12, tempRange: [-5, 2],  daylight: 9.0,  wind: 'light', heatmapIntensity: 0 }
          ]
        },
        conditions: {
          roads: 'Excellent. French Alpine roads well-maintained. Cycling infrastructure on Alpe d\'Huez.',
          water: 'Frequent villages and caf\u00E9s in valleys. Carry extra for high passes.',
          bikeShops: 'Bourg d\'Oisans (base of Alpe d\'Huez), Briançon, Grenoble.',
          rental: 'Good availability in Bourg d\'Oisans. Book ahead for Tour de France weeks.',
          specialRisks: 'Afternoon thunderstorms Jun\u2013Aug. Col du Galibier can be cold even in summer. Tour de France weeks bring massive crowds.'
        },
        zones: [
          { id: 'alps-alpe-dhuez', name: 'Alpe d\'Huez & Oisans Valley', character: 'The most famous climb in cycling. 21 numbered hairpins. Bourg d\'Oisans as the base.', difficulty: 'advanced', bestFor: ['Tour de France pilgrims', 'climbers'], routeIds: ['alps-alpe-dhuez'] },
          { id: 'alps-galibier', name: 'Galibier & High Cols', character: 'Col du Galibier at 2,642m, Col du Lautaret, Col de la Croix de Fer. Epic high-altitude passes.', difficulty: 'expert', bestFor: ['altitude lovers', 'multi-pass days'], routeIds: ['alps-galibier'] }
        ],
        bases: [
          { id: 'bourg-doisans', name: 'Bourg d\'Oisans', character: 'Base village of Alpe d\'Huez. Cycling shops, caf\u00E9s, and hotels catering to cyclists.', bestFor: 'Hub for Alpe d\'Huez and surrounding cols.', accessibleZoneIds: ['alps-alpe-dhuez', 'alps-galibier'], partnerIds: [], nearestAirportIATA: 'GNB', transferKm: 65 }
        ],
        deepDive: null
      },
      // ── JAPAN (was shimanami in LOCATIONS) ──
      {
        id: 'japan', name: 'Shimanami Kaido', country: 'Japan', continent: 'Asia', flag: '\u{1F1EF}\u{1F1F5}',
        lat: 34.25, lng: 133.18, color: '#06B6D4', regionId: 'seto-inland-sea',
        tagline: 'Island-hopping by bicycle bridge',
        desc: 'A 70 km cycling road connecting six islands across the Seto Inland Sea via dedicated bicycle bridges. Japan\'s ultimate cycling pilgrimage. Flat, scenic, and punctuated by ramen stops, onsen baths, and Shinto shrines.',
        stats: { dur: '2\u20135 days', diff: 'Beginner', season: 'Mar\u2013May, Sep\u2013Nov', price: '\u20AC800\u20131,800', group: '2\u20138', routes: 3 },
        highlights: ['70 km dedicated cycling bridges', '6 islands connected across the sea', 'Japanese onsen baths at every stop', 'Flat, accessible for all abilities', 'Ramen, sushi & cultural immersion'],
        images: [
          'https://images.unsplash.com/photo-1528164344705-47542687000d?w=1200&q=80',
          'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=1200&q=80',
          'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&q=80',
          'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1200&q=80',
          'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=1200&q=80'
        ],
        image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=1600&q=85',
        airportIATA: ['HIJ', 'MYJ'], routeCount: 1, partnerCount: 2,
        season: {
          start: 3, end: 11, peak: [4, 5, 10, 11],
          monthly: [
            { month: 1,  tempRange: [2, 9],   daylight: 10.0, wind: 'light', heatmapIntensity: 0.05 },
            { month: 2,  tempRange: [2, 10],  daylight: 10.5, wind: 'light', heatmapIntensity: 0.1 },
            { month: 3,  tempRange: [5, 14],  daylight: 12.0, wind: 'light', heatmapIntensity: 0.5 },
            { month: 4,  tempRange: [10, 20], daylight: 13.5, wind: 'light', heatmapIntensity: 0.85 },
            { month: 5,  tempRange: [15, 24], daylight: 14.5, wind: 'light', heatmapIntensity: 0.8 },
            { month: 6,  tempRange: [19, 27], daylight: 14.5, wind: 'light', heatmapIntensity: 0.3 },
            { month: 7,  tempRange: [23, 31], daylight: 14.5, wind: 'light', heatmapIntensity: 0.2 },
            { month: 8,  tempRange: [24, 32], daylight: 13.5, wind: 'light', heatmapIntensity: 0.2 },
            { month: 9,  tempRange: [20, 28], daylight: 12.5, wind: 'light', heatmapIntensity: 0.5 },
            { month: 10, tempRange: [14, 23], daylight: 11.5, wind: 'light', heatmapIntensity: 0.85 },
            { month: 11, tempRange: [8, 17],  daylight: 10.5, wind: 'light', heatmapIntensity: 0.7 },
            { month: 12, tempRange: [4, 12],  daylight: 10.0, wind: 'light', heatmapIntensity: 0.1 }
          ]
        },
        conditions: {
          roads: 'Dedicated cycling lanes on bridges. Island roads quiet and well-paved.',
          water: 'Konbini (convenience stores) every few km. Vending machines everywhere.',
          bikeShops: 'Onomichi and Imabari. Rental stations along the route.',
          rental: 'Giant store in Onomichi. Rental stations with drop-off at the other end.',
          specialRisks: 'Rainy season (tsuyu) Jun\u2013Jul. Typhoon risk Aug\u2013Sep. Bridges close in high winds.'
        },
        zones: [
          { id: 'japan-shimanami', name: 'Shimanami Kaido Bridge Route', character: 'The full 70 km island-hopping route from Onomichi to Imabari via six islands and dedicated cycling bridges.', difficulty: 'beginner', bestFor: ['all abilities', 'cultural immersion', 'families'], routeIds: ['japan-shimanami'] }
        ],
        bases: [
          { id: 'onomichi', name: 'Onomichi', character: 'Hillside port town. Temple walks, cat alleys, ramen street. The traditional starting point.', bestFor: 'Start point. Cultural richness. Giant rental shop.', accessibleZoneIds: ['japan-shimanami'], partnerIds: [], nearestAirportIATA: 'HIJ', transferKm: 80 }
        ],
        deepDive: null
      },
      // ── GIRONA (globe-only, no routes yet) ──
      {
        id: 'girona', name: 'Girona', country: 'Spain', continent: 'Europe', flag: '\u{1F1EA}\u{1F1F8}',
        lat: 41.98, lng: 2.82, color: '#EC4899', regionId: 'catalonia',
        tagline: 'Where the pros live & train',
        desc: 'The adopted home of professional cycling. More WorldTour riders live in Girona than any other city. Medieval streets lead to Mediterranean coast rides, Pyrenean foothills, and the best cycling caf\u00E9 culture on Earth.',
        stats: { dur: '5\u201314 days', diff: 'All levels', season: 'Mar\u2013Nov', price: '\u20AC900\u20132,100', group: '2\u201320', routes: 7 },
        highlights: ['Home to 50+ professional cyclists', 'Rocacorba: the local test climb', 'Costa Brava coastal routes', 'World-class cycling caf\u00E9 culture', 'Gateway to the Pyrenees'],
        images: [
          'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=1200&q=80',
          'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1200&q=80',
          'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1200&q=80',
          'https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=1200&q=80',
          'https://images.unsplash.com/photo-1528150230181-99bbf7b22162?w=1200&q=80'
        ],
        image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=1200&q=80',
        airportIATA: ['GRO', 'BCN'], routeCount: 0, partnerCount: 0,
        season: {
          start: 3, end: 11, peak: [4, 5, 9, 10],
          monthly: [
            { month: 1,  tempRange: [3, 12],  daylight: 9.5,  wind: 'light-tramontana', heatmapIntensity: 0.1 },
            { month: 2,  tempRange: [4, 13],  daylight: 10.5, wind: 'light-tramontana', heatmapIntensity: 0.2 },
            { month: 3,  tempRange: [6, 16],  daylight: 12.0, wind: 'light', heatmapIntensity: 0.55 },
            { month: 4,  tempRange: [9, 19],  daylight: 13.5, wind: 'light', heatmapIntensity: 0.8 },
            { month: 5,  tempRange: [13, 23], daylight: 14.5, wind: 'light', heatmapIntensity: 0.9 },
            { month: 6,  tempRange: [17, 28], daylight: 15.5, wind: 'light', heatmapIntensity: 0.75 },
            { month: 7,  tempRange: [20, 31], daylight: 15.5, wind: 'light', heatmapIntensity: 0.5 },
            { month: 8,  tempRange: [20, 31], daylight: 14.0, wind: 'light', heatmapIntensity: 0.45 },
            { month: 9,  tempRange: [17, 27], daylight: 12.5, wind: 'light', heatmapIntensity: 0.8 },
            { month: 10, tempRange: [13, 22], daylight: 11.5, wind: 'light', heatmapIntensity: 0.65 },
            { month: 11, tempRange: [8, 16],  daylight: 10.0, wind: 'light-tramontana', heatmapIntensity: 0.25 },
            { month: 12, tempRange: [4, 12],  daylight: 9.5,  wind: 'light-tramontana', heatmapIntensity: 0.1 }
          ]
        },
        conditions: null, zones: [], bases: [], deepDive: null
      },
      // ── CAPE TOWN (globe-only, no routes yet) ──
      {
        id: 'cape-town', name: 'Cape Town', country: 'South Africa', continent: 'Africa', flag: '\u{1F1FF}\u{1F1E6}',
        lat: -33.93, lng: 18.42, color: '#F59E0B', regionId: 'western-cape',
        tagline: 'Where mountains meet the Atlantic',
        desc: 'Chapman\'s Peak Drive is one of the world\'s most scenic coastal roads. Table Mountain as a backdrop to every ride. The Cape Town Cycle Tour is the world\'s largest timed cycling event with 35,000 riders.',
        stats: { dur: '5\u201310 days', diff: 'Intermediate', season: 'Nov\u2013Mar', price: '\u20AC700\u20131,600', group: '2\u201315', routes: 5 },
        highlights: ['Chapman\'s Peak: world-class coastal road', 'Table Mountain backdrop on every ride', 'Cape Town Cycle Tour: 35,000 riders', 'Cape Winelands cycling routes', 'Southern hemisphere winter training'],
        images: [
          'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=1200&q=80',
          'https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8e?w=1200&q=80',
          'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1200&q=80',
          'https://images.unsplash.com/photo-1609096100768-f0b74a64733a?w=1200&q=80',
          'https://images.unsplash.com/photo-1496497243327-9dccd845c35f?w=1200&q=80'
        ],
        image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=1200&q=80',
        airportIATA: ['CPT'], routeCount: 0, partnerCount: 0,
        season: {
          start: 11, end: 3, peak: [12, 1, 2],
          monthly: [
            { month: 1,  tempRange: [16, 28], daylight: 14.5, wind: 'strong-SE', heatmapIntensity: 0.85 },
            { month: 2,  tempRange: [16, 28], daylight: 13.5, wind: 'strong-SE', heatmapIntensity: 0.8 },
            { month: 3,  tempRange: [15, 26], daylight: 12.5, wind: 'moderate', heatmapIntensity: 0.6 },
            { month: 4,  tempRange: [12, 23], daylight: 11.5, wind: 'light', heatmapIntensity: 0.3 },
            { month: 5,  tempRange: [10, 20], daylight: 10.5, wind: 'moderate-NW', heatmapIntensity: 0.1 },
            { month: 6,  tempRange: [8, 18],  daylight: 10.0, wind: 'moderate-NW', heatmapIntensity: 0.05 },
            { month: 7,  tempRange: [7, 17],  daylight: 10.0, wind: 'moderate-NW', heatmapIntensity: 0.05 },
            { month: 8,  tempRange: [8, 18],  daylight: 10.5, wind: 'moderate-NW', heatmapIntensity: 0.1 },
            { month: 9,  tempRange: [9, 20],  daylight: 11.5, wind: 'moderate', heatmapIntensity: 0.2 },
            { month: 10, tempRange: [11, 23], daylight: 12.5, wind: 'moderate-SE', heatmapIntensity: 0.4 },
            { month: 11, tempRange: [13, 25], daylight: 13.5, wind: 'strong-SE', heatmapIntensity: 0.7 },
            { month: 12, tempRange: [15, 27], daylight: 14.5, wind: 'strong-SE', heatmapIntensity: 0.85 }
          ]
        },
        conditions: null, zones: [], bases: [], deepDive: null
      },
      // ── COLOMBIA (globe-only, no routes yet) ──
      {
        id: 'colombia', name: 'Colombia', country: 'Colombia', continent: 'South America', flag: '\u{1F1E8}\u{1F1F4}',
        lat: 6.25, lng: -75.56, color: '#EF4444', regionId: 'colombian-andes',
        tagline: 'Altitude, culture & caf\u00E9 de origen',
        desc: 'The homeland of Egan Bernal, Nairo Quintana, and Rigoberto Ur\u00E1n. Alto de Letras is a 3,600m mega-climb. Train at altitude in the Andes while drinking the world\'s best coffee between switchbacks.',
        stats: { dur: '7\u201314 days', diff: 'Advanced', season: 'Dec\u2013Mar, Jun\u2013Aug', price: '\u20AC600\u20131,400', group: '2\u201312', routes: 5 },
        highlights: ['Alto de Letras: 80km single climb', 'Train at 2,600m altitude in Medell\u00EDn', 'World-class Colombian coffee stops', 'Homeland of Grand Tour champions', 'Incredible value for money'],
        images: [
          'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=1200&q=80',
          'https://images.unsplash.com/photo-1568454537842-d933259bb258?w=1200&q=80',
          'https://images.unsplash.com/photo-1501770118606-b1d640526693?w=1200&q=80',
          'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=1200&q=80',
          'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&q=80'
        ],
        image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=1200&q=80',
        airportIATA: ['MDE', 'BOG'], routeCount: 0, partnerCount: 0,
        season: {
          start: 12, end: 3, peak: [1, 2],
          monthly: [
            { month: 1,  tempRange: [15, 27], daylight: 12.0, wind: 'light', heatmapIntensity: 0.8 },
            { month: 2,  tempRange: [15, 27], daylight: 12.0, wind: 'light', heatmapIntensity: 0.85 },
            { month: 3,  tempRange: [15, 27], daylight: 12.0, wind: 'light', heatmapIntensity: 0.6 },
            { month: 4,  tempRange: [15, 26], daylight: 12.0, wind: 'light', heatmapIntensity: 0.25 },
            { month: 5,  tempRange: [15, 25], daylight: 12.5, wind: 'light', heatmapIntensity: 0.15 },
            { month: 6,  tempRange: [14, 26], daylight: 12.5, wind: 'light', heatmapIntensity: 0.5 },
            { month: 7,  tempRange: [14, 27], daylight: 12.5, wind: 'light', heatmapIntensity: 0.6 },
            { month: 8,  tempRange: [14, 27], daylight: 12.5, wind: 'light', heatmapIntensity: 0.55 },
            { month: 9,  tempRange: [14, 26], daylight: 12.0, wind: 'light', heatmapIntensity: 0.2 },
            { month: 10, tempRange: [15, 25], daylight: 12.0, wind: 'light', heatmapIntensity: 0.15 },
            { month: 11, tempRange: [15, 25], daylight: 12.0, wind: 'light', heatmapIntensity: 0.2 },
            { month: 12, tempRange: [15, 27], daylight: 12.0, wind: 'light', heatmapIntensity: 0.7 }
          ]
        },
        conditions: null, zones: [], bases: [], deepDive: null
      }
    ];


    /* ═══════════════════════════════════════════
       2. RACE CALENDAR
       ═══════════════════════════════════════════ */
    const RACE_EVENTS = [
      { name: 'Strade Bianche Gran Fondo', location: 'Tuscany, Italy', date: '2026-03-07', type: 'granfondo', distance: '138 km', img: 'https://images.unsplash.com/photo-1565992441121-4367c2967103?w=400&q=80' },
      { name: 'Cape Town Cycle Tour', location: 'Cape Town, SA', date: '2026-03-08', type: 'pro', distance: '109 km', img: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=400&q=80' },
      { name: 'Mallorca 312', location: 'Mallorca, Spain', date: '2026-03-28', type: 'granfondo', distance: '312 km', img: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=400&q=80' },
      { name: 'Fuerteventura Bike Fest', location: 'Fuerteventura, Spain', date: '2026-04-11', type: 'charity', distance: '65 km', img: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=400&q=80' },
      { name: 'Sa Calobra Sprint', location: 'Mallorca, Spain', date: '2026-04-25', type: 'club', distance: '42 km', img: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=400&q=80' },
      { name: 'Girona Gravel Ride', location: 'Girona, Spain', date: '2026-05-16', type: 'club', distance: '90 km', img: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=400&q=80' },
      { name: 'Stelvio Day', location: 'Stelvio, Italy', date: '2026-06-06', type: 'granfondo', distance: '138 km', img: 'https://images.unsplash.com/photo-1502786129293-79981df4e689?w=400&q=80' },
      { name: 'Gran Fondo Colombia', location: 'Medellín, Colombia', date: '2026-06-14', type: 'granfondo', distance: '155 km', img: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=400&q=80' },
      { name: 'La Marmotte', location: 'Alpe d\'Huez, France', date: '2026-07-04', type: 'granfondo', distance: '174 km', img: 'https://images.unsplash.com/photo-1530143584546-02191bc84eb5?w=400&q=80' },
      { name: 'Maratona dles Dolomites', location: 'Dolomites, Italy', date: '2026-07-05', type: 'granfondo', distance: '138 km', img: 'https://images.unsplash.com/photo-1502786129293-79981df4e689?w=400&q=80' },
      { name: 'Transfăgărășan Challenge', location: 'Romania', date: '2026-08-22', type: 'club', distance: '90 km', img: 'https://images.unsplash.com/photo-1569165003085-e8a1066f1cb8?w=400&q=80' },
      { name: 'Girona Costa Brava GF', location: 'Girona, Spain', date: '2026-09-12', type: 'granfondo', distance: '160 km', img: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=400&q=80' },
      { name: 'L\'Eroica', location: 'Tuscany, Italy', date: '2026-10-03', type: 'charity', distance: '209 km', img: 'https://images.unsplash.com/photo-1565992441121-4367c2967103?w=400&q=80' },
      { name: 'Shimanami Cycling Festival', location: 'Japan', date: '2026-10-25', type: 'charity', distance: '70 km', img: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=400&q=80' }
    ];

    let calYear = 2026, calMonth = 2; // March 2026 (0-indexed)
    const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    function renderCalendar() {
      const monthEl = document.getElementById('calMonth');
      const daysEl = document.getElementById('calDays');
      const eventsEl = document.getElementById('calEvents');
      if (!monthEl || !daysEl || !eventsEl) return;

      monthEl.textContent = MONTH_NAMES[calMonth].toUpperCase() + ' ' + calYear;

      const firstDay = new Date(calYear, calMonth, 1).getDay();
      const startOffset = (firstDay + 6) % 7;
      const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
      const prevMonthDays = new Date(calYear, calMonth, 0).getDate();
      const today = new Date();

      const monthEvents = RACE_EVENTS.filter(function (e) {
        var d = new Date(e.date);
        return d.getFullYear() === calYear && d.getMonth() === calMonth;
      });
      const eventDays = new Set(monthEvents.map(function (e) { return new Date(e.date).getDate(); }));

      var html = '';
      for (var i = startOffset - 1; i >= 0; i--) {
        html += '<div class="cal-day">' + (prevMonthDays - i) + '</div>';
      }
      for (var d = 1; d <= daysInMonth; d++) {
        var isToday = d === today.getDate() && calMonth === today.getMonth() && calYear === today.getFullYear();
        var hasEvent = eventDays.has(d);
        var cls = 'cal-day current-month';
        if (isToday) cls += ' today';
        if (hasEvent) cls += ' has-event';
        var attrs = hasEvent ? ' tabindex="0" role="button" aria-label="Day ' + d + ', has event"' : '';
        html += '<div class="' + cls + '"' + attrs + '>' + d + '</div>';
      }
      var totalCells = startOffset + daysInMonth;
      var remaining = (7 - (totalCells % 7)) % 7;
      for (var r = 1; r <= remaining; r++) {
        html += '<div class="cal-day">' + r + '</div>';
      }
      daysEl.innerHTML = html;

      if (monthEvents.length === 0) {
        eventsEl.innerHTML = '<div style="text-align:center;padding:2.5rem 1.5rem">' +
          '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="1.2" style="margin-bottom:12px"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>' +
          '<div style="color:rgba(255,255,255,0.35);font-size:.85rem;margin-bottom:4px">No events this month</div>' +
          '<div style="color:rgba(255,255,255,0.2);font-size:.72rem;margin-bottom:14px">Races run March\u2013October 2026</div>' +
          '<button onclick="calMonth=2;calYear=2026;renderCalendar()" style="background:rgba(232,73,29,0.1);border:1px solid rgba(232,73,29,0.25);color:var(--ember);padding:8px 16px;border-radius:var(--radius-sm);cursor:pointer;font-family:DM Sans;font-size:.7rem;font-weight:600;letter-spacing:1px;text-transform:uppercase;transition:all .2s;min-height:36px">Jump to March 2026</button>' +
          '</div>';
        return;
      }
      eventsEl.innerHTML = monthEvents.map(function (e) {
        var ed = new Date(e.date);
        return '<div class="cal-event">' +
          '<div class="cal-event-date"><div class="cal-event-day">' + ed.getDate() + '</div><div class="cal-event-month">' + MONTH_NAMES[ed.getMonth()].substring(0, 3).toUpperCase() + '</div></div>' +
          '<div class="cal-event-info"><div class="cal-event-name">' + e.name + ' <span class="cal-event-tag">' + e.type + '</span></div><div class="cal-event-meta"><span>' + e.location + '</span><span>' + e.distance + '</span></div></div>' +
          '<div class="cal-event-img"><img src="' + e.img + '" alt="' + e.name + '" loading="lazy"></div>' +
          '</div>';
      }).join('');
    }

    function changeMonth(delta) {
      calMonth += delta;
      if (calMonth > 11) { calMonth = 0; calYear++; }
      if (calMonth < 0) { calMonth = 11; calYear--; }
      renderCalendar();
    }

    // Calendar keyboard navigation
    document.getElementById('calDays').addEventListener('keydown', function (e) {
      var focused = document.activeElement;
      if (!focused || !focused.classList.contains('cal-day')) return;
      var days = Array.from(this.querySelectorAll('.cal-day.current-month[tabindex]'));
      var idx = days.indexOf(focused);
      if (idx === -1) return;
      if (e.key === 'ArrowRight' && idx < days.length - 1) { e.preventDefault(); days[idx + 1].focus(); }
      if (e.key === 'ArrowLeft' && idx > 0) { e.preventDefault(); days[idx - 1].focus(); }
      if (e.key === 'ArrowDown' && idx + 7 < days.length) { e.preventDefault(); days[idx + 7].focus(); }
      if (e.key === 'ArrowUp' && idx - 7 >= 0) { e.preventDefault(); days[idx - 7].focus(); }
      if (e.key === 'Enter') {
        var dayNum = parseInt(focused.textContent);
        var evtCard = document.querySelector('.cal-event');
        if (evtCard) evtCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });

    /* ═══════════════════════════════════════════
       PREMIUM SVG ICON SET — Dual-tone flat design
       Three-layer depth: wash → outline → detail fill
       Muted corporate palette via currentColor
       ═══════════════════════════════════════════ */
    // _vi() defined in app.js
    var VX_ICONS = {
      bike: _vi('<circle cx="5.5" cy="16.5" r="4.5" fill="currentColor" opacity=".08"/><circle cx="18.5" cy="16.5" r="4.5" fill="currentColor" opacity=".08"/><circle cx="5.5" cy="16.5" r="3" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="18.5" cy="16.5" r="3" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="14.5" cy="4.5" r="1.5" fill="currentColor"/><path d="M12 16.5V12.5l-2.5-3L13 7l2 3h3" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>'),
      document: _vi('<path d="M6 2h8l6 6v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2z" fill="currentColor" opacity=".08"/><path d="M6 2h8l6 6v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2z" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M14 2v6h6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><rect x="8" y="13" width="8" height="1.2" rx=".6" fill="currentColor" opacity=".45"/><rect x="8" y="17" width="5" height="1.2" rx=".6" fill="currentColor" opacity=".45"/>'),
      health: _vi('<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="currentColor" opacity=".08"/><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M9.5 12h5M12 9.5v5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>'),
      plane: _vi('<path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 10-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z" fill="currentColor" opacity=".1"/><path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 10-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z" fill="currentColor"/>'),
      device: _vi('<rect x="5" y="1.5" width="14" height="21" rx="2.5" fill="currentColor" opacity=".08"/><rect x="5" y="1.5" width="14" height="21" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="5" y1="5" x2="19" y2="5" stroke="currentColor" stroke-width=".8" opacity=".2"/><line x1="5" y1="18" x2="19" y2="18" stroke="currentColor" stroke-width=".8" opacity=".2"/><circle cx="12" cy="20" r=".8" fill="currentColor" opacity=".4"/>'),
      van: _vi('<rect x="1" y="5" width="22" height="10" rx="2" fill="currentColor" opacity=".06"/><path d="M2 15V7a2 2 0 012-2h9l4 4h3a2 2 0 012 2v4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="7" cy="17" r="2.5" fill="currentColor" opacity=".08"/><circle cx="7" cy="17" r="1.8" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="17" cy="17" r="2.5" fill="currentColor" opacity=".08"/><circle cx="17" cy="17" r="1.8" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M9.5 16.5h5" stroke="currentColor" stroke-width="1.5" fill="none"/><line x1="15" y1="5" x2="15" y2="9" stroke="currentColor" stroke-width=".8" opacity=".25"/>'),
      hotel: _vi('<rect x="3" y="3" width="18" height="19" rx="2" fill="currentColor" opacity=".08"/><path d="M3 3h18v18a2 2 0 01-2 2H5a2 2 0 01-2-2V3z" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M3 7h18" stroke="currentColor" stroke-width="1" opacity=".2"/><rect x="7" y="10" width="2.5" height="2.5" rx=".6" fill="currentColor" opacity=".35"/><rect x="14.5" y="10" width="2.5" height="2.5" rx=".6" fill="currentColor" opacity=".35"/><rect x="7" y="14.5" width="2.5" height="2.5" rx=".6" fill="currentColor" opacity=".35"/><rect x="14.5" y="14.5" width="2.5" height="2.5" rx=".6" fill="currentColor" opacity=".35"/><rect x="10" y="17" width="4" height="5" rx="1" fill="currentColor" opacity=".2"/>'),
      massage: _vi('<circle cx="12" cy="4.5" r="3" fill="currentColor" opacity=".1"/><circle cx="12" cy="4.5" r="2.2" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M9 11s1.5-1.2 3-1.2 3 1.2 3 1.2" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M4.5 21l3-9.5h1M19.5 21l-3-9.5h-1" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>'),
      nutrition: _vi('<path d="M12 2c-3 4-6 6-6 10a6 6 0 0012 0c0-4-3-6-6-10z" fill="currentColor" opacity=".08"/><path d="M12 2c-3 4-6 6-6 10a6 6 0 0012 0c0-4-3-6-6-10z" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M12 8v7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M9 13l3 2.5L15 13" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" opacity=".4"/>'),
      monument: _vi('<path d="M5 20V9l7-5 7 5v11" fill="currentColor" opacity=".06"/><path d="M2 20h20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M5 20V9l7-5 7 5v11" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><line x1="9" y1="20" x2="9" y2="13" stroke="currentColor" stroke-width="1.5"/><line x1="12" y1="20" x2="12" y2="11" stroke="currentColor" stroke-width="1.5"/><line x1="15" y1="20" x2="15" y2="13" stroke="currentColor" stroke-width="1.5"/>'),
      spa: _vi('<path d="M12 22c6-3 8-8 8-12 0 0-3.5 1-8 1S4 10 4 10c0 4 2 9 8 12z" fill="currentColor" opacity=".08"/><path d="M12 22c6-3 8-8 8-12 0 0-3.5 1-8 1S4 10 4 10c0 4 2 9 8 12z" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M12 15c2.5-2 4-5 4-8 0 0-1.5.5-4 .5S8 7 8 7c0 3 1.5 6 4 8z" fill="currentColor" opacity=".12"/><path d="M12 15c2.5-2 4-5 4-8 0 0-1.5.5-4 .5S8 7 8 7c0 3 1.5 6 4 8z" fill="none" stroke="currentColor" stroke-width="1.2"/>'),
      dining: _vi('<path d="M3 2v7a3 3 0 003 3h2a3 3 0 003-3V2" fill="currentColor" opacity=".06"/><path d="M3 2v7a3 3 0 003 3h2a3 3 0 003-3V2" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 2v20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M21 15V2a5 5 0 00-5 5v3a2 2 0 002 2h1v9" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="18" cy="21" r=".5" fill="currentColor" opacity=".3"/><circle cx="7" cy="21" r=".5" fill="currentColor" opacity=".3"/>'),
      distance: _vi('<path d="M18 20V4M6 20V10M12 20V7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" opacity=".12"/><path d="M18 20V4M6 20V10M12 20V7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>'),
      elevation: _vi('<path d="M2 20l7-14 4 8 3-4 6 10H2z" fill="currentColor" opacity=".08"/><path d="M2 20l7-14 4 8 3-4 6 10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M2 20h20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>'),
      temp: _vi('<path d="M14 14.76V3.5a2.5 2.5 0 00-5 0v11.26a4.5 4.5 0 105 0z" fill="currentColor" opacity=".08"/><path d="M14 14.76V3.5a2.5 2.5 0 00-5 0v11.26a4.5 4.5 0 105 0z" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="11.5" cy="17.5" r="1.5" fill="currentColor" opacity=".45"/><line x1="11.5" y1="17" x2="11.5" y2="8" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" opacity=".35"/>'),
      wind: _vi('<path d="M9.59 4.59A2 2 0 1111 8H2" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.59 19.41A2 2 0 1014 16H2" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.73 7.73A2.5 2.5 0 1119.5 12H2" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity=".5"/>'),
      wine: _vi('<path d="M8 2h8l-1 6a4 4 0 01-6 0L8 2z" fill="currentColor" opacity=".1"/><path d="M8 2h8l-1 6a4 4 0 01-6 0L8 2z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><line x1="12" y1="10" x2="12" y2="20" stroke="currentColor" stroke-width="1.5"/><path d="M8 20h8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>'),
      book: _vi('<path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" fill="currentColor" opacity=".08"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" fill="currentColor" opacity=".08"/><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" fill="none" stroke="currentColor" stroke-width="1.5"/>'),
      wrench: _vi('<path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" fill="currentColor" opacity=".08"/><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>')
    };

    function replaceStaticEmoji() {
      // Route card stats — detect icon type from content
      document.querySelectorAll('.rc-stat').forEach(function (stat) {
        var strong = stat.querySelector('strong');
        if (!strong) return;
        var text = strong.textContent;
        var iconName;
        if (/\d+\s*km\b/i.test(text)) iconName = 'distance';
        else if (/m\s*↑/.test(text)) iconName = 'elevation';
        else if (/°C/.test(text)) iconName = 'temp';
        else if (/km\/h|Variable|NNE|SW|NW|SE/i.test(text)) iconName = 'wind';
        else if (/stop/i.test(text)) iconName = 'wine';
        if (iconName) stat.innerHTML = VX_ICONS[iconName] + ' ' + strong.outerHTML;
      });
      // Route card depth badges
      document.querySelectorAll('.route-card-depth').forEach(function (el) {
        var m = el.textContent.trim().match(/[\d,]+\s*words/);
        if (m) el.innerHTML = VX_ICONS.book + ' ' + m[0];
      });
      // Become-partner icons — map by heading text
      var bpMap = { 'HOTELS': 'hotel', 'GUIDES': 'bike', 'RENTAL': 'wrench', 'RECOVERY': 'massage', 'SHUTTLES': 'van' };
      document.querySelectorAll('.bp-card').forEach(function (card) {
        var h4 = card.querySelector('h4');
        var icon = card.querySelector('.bp-icon');
        if (h4 && icon && bpMap[h4.textContent]) icon.innerHTML = VX_ICONS[bpMap[h4.textContent]];
      });
    }

    /* ═══════════════════════════════════════════
       ROUTE DATABASE — 16 routes across destinations
       ═══════════════════════════════════════════ */
    var ROUTE_DATABASE = [
      // ── FUERTEVENTURA (3 routes) ──
      {
        id: 'fuerte-betancuria', destinationId: 'fuerteventura', name: 'Betancuria Loop', subtitle: 'The island\'s defining climb through volcanic valleys',
        type: 'road', difficulty: 3, distance: 72, elevationGain: 1240, elevationLoss: 1240, maxGradient: 14, avgGradient: 5.2,
        surfaceType: 'asphalt', surfaceCondition: 4, trafficLevel: 2, sceneryRating: 5,
        elevationProfile: [{ km: 0, elev: 20 }, { km: 5, elev: 45 }, { km: 12, elev: 320 }, { km: 18, elev: 580 }, { km: 24, elev: 420 }, { km: 30, elev: 680 }, { km: 36, elev: 520 }, { km: 42, elev: 340 }, { km: 48, elev: 160 }, { km: 54, elev: 380 }, { km: 60, elev: 240 }, { km: 66, elev: 80 }, { km: 72, elev: 20 }],
        strava: { komTime: '2h 18min', avgTime: '3h 05min', segmentCount: 8 },
        bestDirection: 'clockwise', wind: 'NNE trade winds 15-25 km/h — tailwind on southern return',
        weather: '22-28°C year-round, minimal rain Oct-Apr', season: { start: 10, end: 5, peak: [1, 2, 3] },
        waterStops: [{ km: 18, name: 'Betancuria village café', reliable: true, image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&q=75' }, { km: 36, name: 'Pájara supermarket', reliable: true, image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=400&q=75' }, { km: 54, name: 'Tuineje bar', reliable: true, image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&q=75' }],
        localTips: ['Start before 9am to avoid headwinds on the northern ascent', 'The descent from Morro de la Cruz has loose gravel on corners — brake early', 'Fill bottles at Betancuria, next reliable water is 18km away', 'Local goat cheese at the Betancuria museum café is legendary'],
        stages: [], partnerCount: 6,
        shortDesc: 'A volcanic masterpiece linking ancient capital Betancuria to the wild south coast. Sustained climbing through ochre badlands with sweeping Atlantic views.',
        encyclopedia: 'Betancuria was founded in 1404 by the Norman conqueror Jean de Béthencourt, making it Fuerteventura\'s oldest settlement and capital for over four centuries. The route traverses a volcanic landscape shaped during the Miocene era, when eruptions built the island\'s spine over 20 million years ago. Today the interior valleys support Majorero goat herds whose milk produces the island\'s celebrated queso majorero, a Protected Designation of Origin cheese since 1996. The climb through the central massif reveals geological layers of basalt and trachyte, while the village itself preserves a 15th-century Franciscan monastery and the Museo Arqueológico. Fuerteventura\'s designation as a UNESCO Biosphere Reserve in 2009 recognized this austere landscape as one of the Canary Islands\' most ecologically significant zones.\\n\\nThe ascent from the east coast into the central massif follows what was once the only road connecting the island\'s scattered settlements — a route walked by missionaries, merchants, and Castilian soldiers for centuries. The Morro de la Cruz viewpoint at 670m offers a panorama across the Vega de Río Palmas, a rare green valley fed by underground aquifers where pre-Hispanic Mahorero people established their most important settlement. The Santa María church in Betancuria, rebuilt after the devastating 1593 Berber pirate raid led by Xabán Arráez, houses a carved wooden altarpiece considered one of the finest in the Canary Islands. Below the village, the Barranco de las Peñitas gorge shelters the Ermita de la Virgen de la Peña, the island\'s patroness shrine set into the living rock.\\n\\nFor cyclists, the route\'s defining character is the contrast between fierce Atlantic exposure on the western flanks and the sheltered warmth of the eastern valleys. The NNE trade winds that batter Fuerteventura year-round create a natural tailwind on the southern return leg but can make the northern climb a battle of attrition. The volcanic soil, ranging from deep ochre to charcoal black, supports almost no trees above 400m, leaving the road fully exposed. Local riders recommend carrying a wind vest even in 28°C heat — the summit winds can cut through cycling kit. The best months are November through March, when European professionals arrive for altitude-free winter training camps, and the goat cheese season peaks with fresh queso tierno available at roadside farms.',
        encyclopediaImages: [
          { url: 'https://images.unsplash.com/photo-1768156575148-c3641aaaf531?w=1600&q=85', caption: 'The ochre volcanic valleys of central Fuerteventura near Betancuria', afterParagraph: 0 },
          { url: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=1600&q=85', caption: 'Winding road through the Vega de Río Palmas toward the ancient capital', afterParagraph: 1 }
        ],
        image: 'https://images.unsplash.com/photo-1548025146-ed39dc5f04e4?w=1600&q=85',
        country: 'Spain', region: 'Canary Islands', flag: '🇪🇸', tags: ['volcanic', 'climbing', 'year-round'], isNew: false, isFeatured: true,
        effortCategory: 'full-day-moderate',
        accessibleFromBases: ['corralejo', 'costa-calma', 'las-playitas'],
        confidence: { waterFrequency: 'every-18km', phoneSignal: 'good', nearestBikeShop: 'Corralejo 30km', surfaceBreakdown: '100% asphalt', emergencyContacts: '+34 112', offlineMapAvailable: true }
      },
      {
        id: 'fuerte-cofete', destinationId: 'fuerteventura', name: 'Cofete Peninsula', subtitle: 'Remote beach road to the island\'s wild edge',
        type: 'gravel', difficulty: 4, distance: 48, elevationGain: 860, elevationLoss: 860, maxGradient: 18, avgGradient: 6.1,
        surfaceType: 'mixed', surfaceCondition: 2, trafficLevel: 1, sceneryRating: 5,
        elevationProfile: [{ km: 0, elev: 5 }, { km: 6, elev: 180 }, { km: 12, elev: 420 }, { km: 18, elev: 610 }, { km: 24, elev: 280 }, { km: 30, elev: 45 }, { km: 36, elev: 320 }, { km: 42, elev: 480 }, { km: 48, elev: 5 }],
        strava: { komTime: '2h 42min', avgTime: '3h 50min', segmentCount: 4 },
        bestDirection: 'out-and-back from Morro Jable', wind: 'Exposed ridgeline — crosswinds can exceed 40 km/h',
        weather: '20-26°C, very dry, extreme sun exposure', season: { start: 10, end: 4, peak: [11, 12, 1] },
        waterStops: [{ km: 0, name: 'Morro Jable shops', reliable: true, image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=400&q=75' }, { km: 24, name: 'Cofete restaurant (seasonal, often closed)', reliable: false, image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=75' }],
        localTips: ['32mm+ tires recommended — the descent to Cofete is rough gravel', 'Carry 2L minimum water — Cofete restaurant may be closed', 'Wind on the Jandía ridge can stop you dead — check forecast', 'The Villa Winter at Cofete has a mysterious WWII history worth exploring'],
        stages: [], partnerCount: 3,
        shortDesc: 'An adventure route to Fuerteventura\'s most remote beach. Rough gravel, punishing climbs, and absolute solitude on the Jandía peninsula.',
        encyclopedia: 'The Cofete Peninsula harbors one of Fuerteventura\'s most enduring mysteries: Villa Winter, a remote mansion built by German engineer Gustav Winter in the 1940s, rumored to have served as a U-boat supply station during World War II. The 13-kilometer Cofete beach, accessible only by the rough track this route follows, remains one of Europe\'s most isolated stretches of sand. The Jandía Natural Park protects 14,318 hectares of the peninsula\'s unique ecosystem, including several endemic plant species found nowhere else on Earth. The ridge crossing offers views of both the Atlantic and the Sotavento lagoon, a stark contrast of wild ocean and calm turquoise water. Geologically, the Jandía massif at 807 meters is Fuerteventura\'s highest point and its youngest volcanic formation.\\n\\nThe gravel track from Morro Jable begins deceptively gently along the Sotavento coast before climbing sharply onto the Jandía ridge. This is Fuerteventura at its most primal — no guardrails, no services, and crosswinds that can exceed 50 km/h on exposed sections. The descent to Cofete beach drops 600 meters in 6 kilometers over loose volcanic gravel, demanding full concentration and wider tires (32mm minimum, 38mm recommended). Villa Winter, visible from the descent, has been partially restored and occasionally opens for guided tours; its underground rooms and rooftop observatory continue to fuel speculation about its wartime purpose. The beach itself, facing the open Atlantic toward the Americas, generates powerful surf and dangerous currents — it is not safe for swimming but its raw beauty is staggering.\\n\\nThe Jandía peninsula\'s isolation supports a micro-ecosystem of remarkable endemism: the cardón de Jandía (Euphorbia handiensis), a cactus-like succulent found only on these slopes, and the hubara canaria (Houbara bustard), one of the world\'s rarest birds. The high ridge section passes through cloud forest remnants where moisture from the trade wind inversion layer supports lichens and mosses in an otherwise arid landscape. After the ride, Morro Jable\'s harbor restaurants serve locally caught vieja (parrotfish) grilled over volcanic stone — the island\'s signature dish. The optimal window is November to February, when winds are strong enough to keep the experience authentic but not dangerously so, and winter light paints the peninsula in dramatic gold and shadow.',
        encyclopediaImages: [
          { url: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=1600&q=85', caption: 'The remote Cofete beach stretching along the Jandía peninsula', afterParagraph: 0 },
          { url: 'https://images.unsplash.com/photo-1663931340881-bf00526cd9f5?w=1600&q=85', caption: 'Rough gravel track descending through volcanic terrain to the coast', afterParagraph: 2 }
        ],
        image: 'https://images.unsplash.com/photo-1568051243851-f9b136146e97?w=1600&q=85',
        country: 'Spain', region: 'Canary Islands', flag: '🇪🇸', tags: ['gravel', 'adventure', 'remote', 'wind'], isNew: true, isFeatured: false,
        effortCategory: 'half-day-hard',
        accessibleFromBases: ['costa-calma'],
        confidence: { waterFrequency: 'scarce', phoneSignal: 'poor', nearestBikeShop: 'Morro Jable 15km', surfaceBreakdown: '40% asphalt / 60% gravel', emergencyContacts: '+34 112', offlineMapAvailable: true }
      },
      {
        id: 'fuerte-coastal', destinationId: 'fuerteventura', name: 'Coastal North Circuit', subtitle: 'Flat speed run along turquoise lagoons',
        type: 'road', difficulty: 2, distance: 85, elevationGain: 320, elevationLoss: 320, maxGradient: 6, avgGradient: 1.8,
        surfaceType: 'asphalt', surfaceCondition: 5, trafficLevel: 3, sceneryRating: 4,
        elevationProfile: [{ km: 0, elev: 10 }, { km: 10, elev: 25 }, { km: 20, elev: 15 }, { km: 30, elev: 40 }, { km: 40, elev: 30 }, { km: 50, elev: 20 }, { km: 60, elev: 35 }, { km: 70, elev: 25 }, { km: 85, elev: 10 }],
        strava: { komTime: '2h 05min', avgTime: '2h 48min', segmentCount: 6 },
        bestDirection: 'counter-clockwise', wind: 'Tailwind southbound on east coast',
        weather: '22-30°C, occasional sand haze (calima)', season: { start: 9, end: 6, peak: [11, 12, 1, 2, 3] },
        waterStops: [{ km: 15, name: 'El Cotillo village', reliable: true, image: 'https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=400&q=75' }, { km: 35, name: 'Lajares café strip', reliable: true, image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&q=75' }, { km: 55, name: 'Corralejo center', reliable: true, image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&q=75' }, { km: 75, name: 'Puerto del Rosario gas station', reliable: true, image: 'https://images.unsplash.com/photo-1527018601619-a508a2be00cd?w=400&q=75' }],
        localTips: ['Perfect warm-up or recovery ride', 'Corralejo has the best post-ride café scene on the island', 'Watch for sand drifts on the road near the dunes', 'The FV-1 highway has a wide shoulder but fast traffic — stay alert'],
        stages: [], partnerCount: 5,
        shortDesc: 'A fast, flat loop around Fuerteventura\'s northern tip. Turquoise lagoons, sand dunes, and reliable tailwinds make this the perfect recovery ride.',
        encyclopedia: 'The northern loop skirts the Corralejo Dunes Natural Park, a 2,668-hectare field of golden Saharan sand that drifts across the island\'s northeastern tip. These dunes, formed from marine sediments and windblown African sand, create an otherworldly landscape just meters from the road. The route connects fishing villages like El Cotillo, where traditional stone harbors shelter small boats, to the resort town of Corralejo, Fuerteventura\'s most cosmopolitan settlement. The calima — a hot wind carrying Saharan dust that can reduce visibility to under a kilometer — occasionally transforms the ride into an amber-tinted experience. Fuerteventura\'s average of just 147mm of annual rainfall makes this one of the driest cycling routes in Europe, with reliable riding conditions year-round.\\n\\nEl Cotillo, the route\'s western anchor, was once the island\'s main port and still retains a working fishing culture. Its Castillo del Tostón, a round defensive tower built in 1740 to repel pirate attacks, overlooks natural rock pools where locals swim year-round. The lagoons south of El Cotillo — crystalline tidal pools protected by natural lava breakwaters — rank among the Canary Islands\' finest swimming spots and make exceptional post-ride recovery baths. North of town, the windswept coast shelters some of Europe\'s most consistent surf breaks, drawing wave riders from across the continent. The road between El Cotillo and Lajares passes through a lava field where the rock is so young (geologically speaking) that almost nothing grows — a black moonscape punctuated only by the road itself.\\n\\nLajares, a tiny crossroads village, has reinvented itself as Fuerteventura\'s creative hub, with artisan bakeries, surf shapers, and the island\'s best coffee at the famous Lajares Café. The onward road to Corralejo follows the island\'s northeast coast with the volcanic island of Lobos visible offshore — a 4.5-square-kilometer nature reserve accessible by 15-minute ferry that harbors one of the Canaries\' most pristine snorkeling lagoons. For cyclists, this flat loop works perfectly as a recovery ride between harder days on the Betancuria climb, or as a self-contained day of fast, scenic riding. The wide FV-1 shoulder accommodates groups safely, though sand drifts near the dunes occasionally narrow the usable road. September through June offers ideal conditions; July and August bring extreme heat (35°C+) and the calima, though even then the trade winds provide some relief.',
        encyclopediaImages: [
          { url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=85', caption: 'Golden sand dunes of Corralejo Natural Park on Fuerteventura\'s northern tip', afterParagraph: 0 },
          { url: 'https://images.unsplash.com/photo-1530538095376-a4936b35b5f0?w=1600&q=85', caption: 'Turquoise lagoons near El Cotillo — perfect post-ride recovery pools', afterParagraph: 1 }
        ],
        image: 'https://images.unsplash.com/photo-1710277412488-cc28392a8867?w=1600&q=85',
        country: 'Spain', region: 'Canary Islands', flag: '🇪🇸', tags: ['flat', 'coastal', 'recovery', 'year-round'], isNew: false, isFeatured: false,
        effortCategory: 'full-day-easy',
        accessibleFromBases: ['corralejo'],
        confidence: { waterFrequency: 'every-15km', phoneSignal: 'excellent', nearestBikeShop: 'Corralejo 5km', surfaceBreakdown: '100% asphalt', emergencyContacts: '+34 112', offlineMapAvailable: true }
      },
      // ── ROMANIA (4 routes) ──
      {
        id: 'ro-transfagarasan', destinationId: 'romania', name: 'Transfăgărășan', subtitle: 'The road that broke Top Gear\'s superlatives',
        type: 'road', difficulty: 5, distance: 152, elevationGain: 2840, elevationLoss: 2840, maxGradient: 12, avgGradient: 5.8,
        surfaceType: 'asphalt', surfaceCondition: 4, trafficLevel: 4, sceneryRating: 5,
        elevationProfile: [{ km: 0, elev: 340 }, { km: 10, elev: 520 }, { km: 20, elev: 780 }, { km: 30, elev: 1050 }, { km: 40, elev: 1320 }, { km: 50, elev: 1580 }, { km: 60, elev: 1860 }, { km: 68, elev: 2042 }, { km: 76, elev: 2042 }, { km: 86, elev: 1780 }, { km: 96, elev: 1480 }, { km: 106, elev: 1180 }, { km: 116, elev: 920 }, { km: 126, elev: 680 }, { km: 136, elev: 480 }, { km: 146, elev: 380 }, { km: 152, elev: 340 }],
        strava: { komTime: '5h 12min', avgTime: '7h 20min', segmentCount: 14 },
        bestDirection: 'north-to-south (Sibiu side first)', wind: 'Valley funneling — headwinds common on southern descent',
        weather: '8-22°C at summit, snow possible Jun/Sep', season: { start: 6, end: 10, peak: [7, 8] },
        waterStops: [{ km: 22, name: 'Cârțișoara village shop', reliable: true, image: 'https://images.unsplash.com/photo-1572715376701-98568319fd0b?w=400&q=75' }, { km: 42, name: 'Bâlea Cascadă restaurant', reliable: true, image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=75' }, { km: 68, name: 'Bâlea Lac hotel (summit)', reliable: true, image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&q=75' }, { km: 98, name: 'Vidraru dam café', reliable: true, image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&q=75' }, { km: 130, name: 'Curtea de Argeș town', reliable: true, image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&q=75' }],
        localTips: ['Road opens late June — check status at infotrafic.ro', 'Start at dawn from Sibiu side to summit before tourist traffic builds', 'The tunnel at Bâlea Lac is dark and narrow — front + rear lights mandatory', 'Pack arm warmers and a gilet — summit can be 15°C colder than valley', 'Wednesday has least traffic, avoid weekends Jul-Aug completely', 'The Vidraru dam viewpoint on the south descent is worth a 5-min stop'],
        stages: [
          { day: 1, title: 'Sibiu to Bâlea Lac Summit', distance: 68, elevation: 1700, description: 'The legendary north face. 68km of sustained climbing from medieval Sibiu through alpine meadows to the 2,042m tunnel. The final 12km above Bâlea Cascadă waterfall feature the famous switchbacks.', overnight: 'Bâlea Lac Hotel (2,034m)' },
          { day: 2, title: 'Summit to Curtea de Argeș', distance: 84, elevation: 1140, description: 'Descend the dramatic south face past Vidraru dam and its 166m drop. Rolling terrain through Argeș valley to the royal town of Curtea de Argeș with its stunning monastery.', overnight: 'Hotel Posada (Curtea de Argeș)' }
        ],
        partnerCount: 8,
        shortDesc: 'Romania\'s crown jewel. 2,042m summit, 90km of switchbacks through the Făgăraș Mountains. The road Clarkson called "the best in the world" delivers for cyclists too — just harder.',
        encyclopedia: 'Built between 1970 and 1974 on the orders of Nicolae Ceaușescu following the 1968 Soviet invasion of Czechoslovakia, the Transfăgărășan was a military strategic road designed to move troops rapidly across the Carpathians. Construction claimed the lives of an estimated 40 workers and required over 6,000 tonnes of dynamite to blast through the Făgăraș Mountains. The road climbs to 2,042 meters at Bâlea Lac, a glacial lake formed during the Pleistocene ice ages. Jeremy Clarkson famously declared it "the best road in the world" on Top Gear in 2009, transforming it into an international destination. The Vidraru Dam on the southern descent, completed in 1966, stands 166 meters tall and created a 465-hectare reservoir in the Argeș valley.\\n\\nThe northern approach begins in Sibiu, Transylvania\'s cultural jewel and European Capital of Culture 2007. Sibiu\'s Piața Mare (Grand Square) is framed by pastel-colored merchant houses with distinctive \"eye\" dormers — oval attic windows that seem to watch the streets below. The city\'s Brukenthal National Museum, founded in 1790, is one of the oldest in Europe and houses an exceptional collection of Flemish and Austrian paintings. From Sibiu, the road follows the Olt River valley through villages where Saxon fortified churches — seven of which are UNESCO World Heritage Sites — stand as monuments to the German settlers who colonized Transylvania in the 12th century. The fortified church at Cisnădie, just 12km from the route start, is worth a brief detour for its remarkable frescoes and defensive towers.\\n\\nAbove the treeline at approximately 1,800 meters, the landscape transforms into high alpine meadow scattered with crystalline streams and carpeted with wildflowers in July — gentians, arnica, and the rare Carpathian bellflower. Marmots whistle from boulder fields, and golden eagles patrol the thermals above the ridgeline. The summit tunnel at Bâlea Lac is 887 meters long, unlit, narrow, and shared with tourist traffic — it demands front and rear lights and considerable nerve. The lake itself, at 2,034 meters, freezes solid each winter and since 2006 has hosted Romania\'s only ice hotel, rebuilt annually from lake-harvested blocks. The south face descent past Vidraru Dam is equally dramatic: the dam\'s 166-meter concrete arch holds back a turquoise reservoir where the Argeș River once carved a wild gorge.\\n\\nCurtea de Argeș, the route\'s southern terminus, served as Wallachia\'s first capital in the 14th century. Its Episcopal Cathedral, built by Prince Neagoe Basarab between 1512 and 1517, blends Byzantine and Moorish architecture in a design so elaborate that legend attributes it to a master builder who walled his wife into the foundations. The royal tombs of Romania\'s first kings — Carol I and Ferdinand I — rest here. Local cuisine rewards the exhausted cyclist: mici (grilled minced-meat rolls) with mustard and fresh bread, sarmale (cabbage rolls stuffed with spiced pork and rice), and the ubiquitous țuică — plum brandy served cold as an aperitif, its quality varying from village moonshine to refined double-distilled palincă. The road typically opens in late June and closes in late October, with July and August offering the warmest summit temperatures (8-15°C) but also the heaviest tourist traffic. Wednesday and Thursday see the lightest vehicle volumes; weekends in July and August should be avoided entirely.',
        encyclopediaImages: [
          { url: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=1600&q=85', caption: 'The legendary switchbacks of the Transfăgărășan climbing through the Făgăraș Mountains', afterParagraph: 0 },
          { url: 'https://images.unsplash.com/photo-1584646098378-0874589d76b1?w=1600&q=85', caption: 'Bâlea Lac glacial lake at 2,034m — the summit reward', afterParagraph: 2 },
          { url: 'https://images.unsplash.com/photo-1589810876123-5d9e4f48184e?w=1600&q=85', caption: 'Sibiu\'s Piața Mare with its iconic pastel merchant houses and "eye" dormers', afterParagraph: 1 }
        ],
        image: 'https://images.unsplash.com/photo-1561196393-d9ef90aa4d4f?w=1600&q=85',
        country: 'Romania', region: 'Făgăraș Mountains', flag: '🇷🇴', tags: ['epic', 'climbing', 'alpine', 'switchbacks', 'multi-day'], isNew: false, isFeatured: true,
        effortCategory: 'multi-day',
        accessibleFromBases: ['sibiu', 'curtea-de-arges'],
        confidence: { waterFrequency: 'every-20km', phoneSignal: 'poor-above-1500m', nearestBikeShop: 'Sibiu 45km', surfaceBreakdown: '100% asphalt', emergencyContacts: '+40 112', offlineMapAvailable: true }
      },
      {
        id: 'ro-transalpina', destinationId: 'romania', name: 'Transalpina', subtitle: 'Romania\'s highest paved road — wilder, quieter, harder',
        type: 'road', difficulty: 5, distance: 138, elevationGain: 2650, elevationLoss: 2650, maxGradient: 11, avgGradient: 5.4,
        surfaceType: 'asphalt', surfaceCondition: 3, trafficLevel: 2, sceneryRating: 5,
        elevationProfile: [{ km: 0, elev: 420 }, { km: 15, elev: 780 }, { km: 30, elev: 1180 }, { km: 45, elev: 1620 }, { km: 55, elev: 2020 }, { km: 62, elev: 2145 }, { km: 75, elev: 1780 }, { km: 90, elev: 1420 }, { km: 105, elev: 1080 }, { km: 120, elev: 720 }, { km: 138, elev: 420 }],
        strava: { komTime: '4h 48min', avgTime: '6h 55min', segmentCount: 10 },
        bestDirection: 'south-to-north (Novaci to Sebeș)', wind: 'Exposed above treeline — unpredictable gusts',
        weather: '5-20°C at summit, rapid weather changes', season: { start: 6, end: 10, peak: [7, 8] },
        waterStops: [{ km: 20, name: 'Rânca ski resort (summer café)', reliable: true, image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=75' }, { km: 45, name: 'Obârșia Lotrului refuge', reliable: false, image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=400&q=75' }, { km: 80, name: 'Sebeș valley shepherd hut', reliable: false, image: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=400&q=75' }, { km: 115, name: 'Petrești village', reliable: true, image: 'https://images.unsplash.com/photo-1572715376701-98568319fd0b?w=400&q=75' }],
        localTips: ['Surface deteriorates above 1,800m — watch for potholes and gravel patches', 'Less traffic than Transfăgărășan but also fewer services', 'Carry extra food — 60km stretch with no reliable supplies', 'Shepherd dogs can be aggressive — stop, dismount, walk past slowly', 'The Urdele Pass (2,145m) is Romania\'s highest paved point'],
        stages: [
          { day: 1, title: 'Novaci to Urdele Pass', distance: 62, elevation: 1725, description: 'From the Jiu valley through Rânca ski resort to Romania\'s highest paved summit. Above 1,800m the road cuts through high alpine grasslands with panoramic Carpathian views.', overnight: 'Mountain refuge or descend to Obârșia Lotrului' },
          { day: 2, title: 'Urdele Pass to Sebeș', distance: 76, elevation: 925, description: 'A long, scenic descent through the Lotru and Sebeș valleys. Rolling hills, medieval Saxon villages, and the transition from wild mountains to Transylvanian farmland.', overnight: 'Guest house in Sebeș' }
        ],
        partnerCount: 4,
        shortDesc: 'Higher, wilder, and emptier than its famous neighbor. The Transalpina reaches 2,145m through raw Carpathian wilderness — no guardrails, fewer tourists, pure cycling.',
        encyclopedia: 'The Transalpina traces a route used since Roman times to cross the Carpathian Mountains, with sections following the ancient path connecting Dacia to the Roman province of Moesia. Romania\'s highest paved road reaches 2,145 meters at Urdele Pass in the Parâng Mountains, surpassing even the Transfăgărășan\'s summit by over 100 meters. Above the treeline, the road passes through high-altitude grasslands where transhumant shepherds still drive their flocks along routes unchanged for centuries. The Transalpina was significantly modernized between 2007 and 2012, transforming a deteriorating communist-era military track into a scenic mountain highway. The Lotru valley section crosses one of Romania\'s least populated regions, offering genuine wilderness cycling where brown bears, wolves, and chamois outnumber humans.\\n\\nThe southern approach from Novaci follows the Jiu River valley into increasingly wild terrain. Novaci itself is the gateway to the Parâng ski resort at Rânca, where a small summer café at 1,600 meters offers the last reliable refreshments before the summit push. Above Rânca, the road deteriorates noticeably — frost heave and minimal maintenance leave potholes and gravel patches that demand attention, particularly on descents. The surface above 1,800 meters can be rough enough to rattle a carbon frame, and riders on lightweight race setups should consider running 28mm tires at reduced pressure. The reward is proportional: above the treeline, the Transalpina crosses a vast alpine plateau with 360-degree views across the Parâng, Lotru, and Cindrel mountain ranges, a landscape of almost Mongolian emptiness.\\n\\nTranshumance — the seasonal movement of sheep between lowland winter pastures and high mountain meadows — remains a living tradition along the Transalpina corridor. Each June, shepherds drive flocks of hundreds of Țurcana sheep up ancient trails that parallel the road, settling in temporary camps called stâni where they produce fresh cașcaval (aged sheep cheese) and urdă (a soft ricotta-like whey cheese) using methods unchanged since the Dacian era. Cyclists may encounter shepherd dogs — large, powerful Carpathian and Mioritic breeds trained to protect flocks from wolves and bears. The standard advice is to stop, dismount, and walk slowly past while speaking calmly; never sprint past a guarded flock.\\n\\nThe northern descent into the Sebeș valley passes through the transition zone between wild Carpathian highlands and the gentler Transylvanian plateau. Here, medieval Saxon villages with fortified churches appear: Sebeș itself preserves a 13th-century Evangelical church and fragments of its original defensive walls. The entire Transalpina corridor falls within brown bear territory — Romania hosts an estimated 6,000 bears, Europe\'s largest population outside Russia — and early morning or late evening riders may spot bears at forest edges. The road opens later than the Transfăgărășan (usually late June) and closes earlier (mid-October). September offers the finest conditions: autumn colors igniting the beech forests, cool but not cold summit temperatures, minimal traffic, and the shepherd camps still operating at full capacity.',
        encyclopediaImages: [
          { url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=85', caption: 'The vast alpine plateau above treeline on the Transalpina, Romania\'s highest road', afterParagraph: 1 },
          { url: 'https://images.unsplash.com/photo-1758707686634-60415a54ee68?w=1600&q=85', caption: 'Transhumant shepherd flocks crossing high mountain meadows along the Transalpina corridor', afterParagraph: 2 }
        ],
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=85',
        country: 'Romania', region: 'Parâng Mountains', flag: '🇷🇴', tags: ['epic', 'climbing', 'alpine', 'remote', 'multi-day'], isNew: false, isFeatured: false,
        effortCategory: 'multi-day',
        accessibleFromBases: ['sibiu'],
        confidence: { waterFrequency: 'every-25km', phoneSignal: 'poor', nearestBikeShop: 'Sibiu 50km', surfaceBreakdown: '95% asphalt / 5% gravel patches', emergencyContacts: '+40 112', offlineMapAvailable: true }
      },
      {
        id: 'ro-balea', destinationId: 'romania', name: 'Bâlea Lac Loop', subtitle: 'Summit assault — north face only, maximum climbing',
        type: 'road', difficulty: 4, distance: 78, elevationGain: 1720, elevationLoss: 1720, maxGradient: 12, avgGradient: 6.2,
        surfaceType: 'asphalt', surfaceCondition: 4, trafficLevel: 3, sceneryRating: 5,
        elevationProfile: [{ km: 0, elev: 340 }, { km: 8, elev: 520 }, { km: 16, elev: 780 }, { km: 24, elev: 1050 }, { km: 32, elev: 1380 }, { km: 39, elev: 2042 }, { km: 46, elev: 1380 }, { km: 54, elev: 1050 }, { km: 62, elev: 780 }, { km: 70, elev: 520 }, { km: 78, elev: 340 }],
        strava: { komTime: '2h 38min', avgTime: '3h 45min', segmentCount: 6 },
        bestDirection: 'out-and-back from Cârțișoara', wind: 'Valley channeling, headwind on return descent unlikely',
        weather: '8-22°C at summit, clear mornings typical Jul-Aug', season: { start: 6, end: 10, peak: [7, 8] },
        waterStops: [{ km: 22, name: 'Cârțișoara village', reliable: true, image: 'https://images.unsplash.com/photo-1572715376701-98568319fd0b?w=400&q=75' }, { km: 34, name: 'Bâlea Cascadă', reliable: true, image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=75' }, { km: 39, name: 'Bâlea Lac summit hotel', reliable: true, image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&q=75' }],
        localTips: ['Perfect day ride if you\'re based near Sibiu', 'The last 5km above Bâlea Cascadă are the steepest — save energy', 'Turn around at the tunnel for the purest climbing experience', 'Morning ascent = empty road + dramatic light on the switchbacks'],
        stages: [], partnerCount: 5,
        shortDesc: 'The concentrated essence of the Transfăgărășan. Just the legendary north face — 39km of switchback climbing to 2,042m and back. Pure vertical.',
        encyclopedia: 'The Făgăraș Mountains form Romania\'s highest and most dramatic mountain range, a 70-kilometer ridge of crystalline schist rising above 2,500 meters at its peaks. Bâlea Lac itself sits at 2,034 meters in a textbook glacial cirque carved during the last ice age, its dark waters fed by snowmelt well into July. Each winter since 2006, an ice hotel is constructed on the frozen lake surface using blocks cut from the lake itself — the only such structure in Eastern Europe. The alpine meadows flanking the ascent support over 30 species of endemic alpine plants, including the Carpathian bellflower and edelweiss. The north face road, with its 27 switchbacks visible in aerial photographs, has become one of Eastern Europe\'s most recognizable cycling images.\\n\\nThis out-and-back route isolates the most dramatic section of the Transfăgărășan — the legendary north face — making it the ideal day ride for cyclists based in or near Sibiu. The approach from Cârțișoara village follows the Bâlea stream through dense beech and spruce forest, climbing gently for the first 20 kilometers at 3-4%. The gradient stiffens above Bâlea Cascadă (Bâlea Waterfall), a 60-meter torrent that marks the transition from forest to alpine zone. From here, the road\'s famous switchbacks begin in earnest: 27 numbered hairpins cut into the mountainside, each offering a wider view across the Făgăraș ridge as the horizon expands. The final 5 kilometers above 1,800 meters average 7-8% with ramps touching 12%, demanding patience and low gearing.\\n\\nThe summit area at Bâlea Lac rewards the effort with alpine scenery on par with anything in the Alps. The glacial lake, roughly 400 meters long and 200 meters wide, reflects the surrounding peaks on still mornings — Moldoveanu (2,544m, Romania\'s highest) and Negoiu (2,535m) are visible on the ridge above. The Bâlea Lac hotel, originally built as a communist-era mountain chalet, offers basic but welcome refreshments: hot ciorbă de burtă (tripe soup), a Romanian recovery staple, and strong Turkish-style coffee. The ice hotel, constructed each December from 1,500 tons of lake ice and 500 tons of snow, draws winter visitors but its sculptural remains are sometimes visible well into June.\\n\\nThe descent retraces the ascent, offering a completely different experience — the switchbacks that demanded grinding patience on the way up now flow with momentum and rhythm. The key hazard is tourist traffic: cars and buses ascending from below take the hairpins wide, and the road has no shoulder in many sections. Morning ascents (departing Sibiu by 6:30am) typically reach the summit before the main tourist wave arrives around 11am. The return ride into Cârțișoara passes through the village\'s traditional hay meadows, where locals still mow by hand with scythes in July and August, stacking the hay in the distinctive conical shapes that dot the Transylvanian landscape.',
        encyclopediaImages: [
          { url: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600&q=85', caption: 'The north face switchbacks visible from the Bâlea valley — cycling\'s most recognizable climb in Eastern Europe', afterParagraph: 1 }
        ],
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=85',
        country: 'Romania', region: 'Făgăraș Mountains', flag: '🇷🇴', tags: ['climbing', 'switchbacks', 'day-ride'], isNew: false, isFeatured: false,
        effortCategory: 'full-day-hard',
        accessibleFromBases: ['sibiu'],
        confidence: { waterFrequency: 'every-20km', phoneSignal: 'poor-above-1500m', nearestBikeShop: 'Sibiu 45km', surfaceBreakdown: '100% asphalt', emergencyContacts: '+40 112', offlineMapAvailable: true }
      },
      {
        id: 'ro-cheia', destinationId: 'romania', name: 'Cheia Pass', subtitle: 'Transylvanian gateway through the Ciucaș foothills',
        type: 'road', difficulty: 3, distance: 95, elevationGain: 1180, elevationLoss: 1180, maxGradient: 9, avgGradient: 4.1,
        surfaceType: 'asphalt', surfaceCondition: 4, trafficLevel: 3, sceneryRating: 4,
        elevationProfile: [{ km: 0, elev: 450 }, { km: 12, elev: 620 }, { km: 24, elev: 840 }, { km: 36, elev: 1080 }, { km: 45, elev: 1240 }, { km: 55, elev: 1080 }, { km: 65, elev: 880 }, { km: 75, elev: 650 }, { km: 85, elev: 500 }, { km: 95, elev: 450 }],
        strava: { komTime: '2h 52min', avgTime: '3h 55min', segmentCount: 7 },
        bestDirection: 'clockwise from Brașov', wind: 'Sheltered by forest — minimal wind impact',
        weather: '12-26°C, afternoon thunderstorms possible Jun-Aug', season: { start: 5, end: 10, peak: [6, 7, 8, 9] },
        waterStops: [{ km: 18, name: 'Cheia village shop', reliable: true, image: 'https://images.unsplash.com/photo-1572715376701-98568319fd0b?w=400&q=75' }, { km: 36, name: 'Suzana Monastery', reliable: true, image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=400&q=75' }, { km: 60, name: 'Măneciu lakeside café', reliable: true, image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&q=75' }, { km: 80, name: 'Săcele town', reliable: true, image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&q=75' }],
        localTips: ['Great intro ride for the Carpathians — challenging but not brutal', 'The Suzana Monastery at km 36 has excellent homemade plum brandy (țuică)', 'Black bear territory — make noise on forested descents', 'Combine with a rest day in Brașov for the full Transylvanian experience'],
        stages: [], partnerCount: 4,
        shortDesc: 'A forested Carpathian crossing linking Brașov to the Prahova valley. Sustained moderate climbing through beech forests with glimpses of the Ciucaș massif.',
        encyclopedia: 'The Cheia Pass cuts through the foothills of the Ciucaș Mountains, a compact limestone massif famous for its wind-sculpted rock towers and natural pillars rising up to 30 meters. The route passes near Suzana Monastery, a 17th-century Orthodox foundation set in a forest clearing that still maintains traditional monastic life. Romania\'s Carpathian forests shelter Europe\'s largest population of brown bears — an estimated 6,000 to 6,500 animals — and the Cheia corridor is prime habitat. The pass connects Brașov, Transylvania\'s cultural capital with its famous Black Church and medieval Saxon fortifications, to the Prahova valley\'s resort towns. Historically a trade route between Transylvania and Wallachia, the Cheia road carried merchants, salt caravans, and, during the World Wars, retreating armies.\\n\\nBrașov, the route\'s starting point, deserves at least a rest day before or after the ride. The city\'s medieval core, ringed by 12th-century walls, centers on the Black Church (Biserica Neagră) — the largest Gothic church in southeastern Europe, named for the soot that blackened its walls during a devastating 1689 fire. The Council Square (Piața Sfatului) is framed by baroque merchant houses and anchored by the old Town Hall, now a history museum. Above the rooftops, the Hollywood-style BRAȘOV sign on Tampa Mountain is reached by a cable car or a steep 1.5-hour hike that offers panoramic views across the city to the Carpathian wall beyond. The narrow medieval lanes of the Schei Gate district — the only entrance permitted to ethnic Romanians during Saxon rule — lead to the First Romanian School, a museum documenting the earliest Romanian-language education.\\n\\nThe ride out of Brașov through Săcele enters dense Carpathian forest almost immediately. European beech, Norway spruce, and silver fir create a cathedral-like canopy that filters the light and keeps temperatures 5-8°C cooler than the valley floor. This is prime brown bear habitat — the forests around Brașov support one of Europe\'s densest bear populations — and while encounters during daylight riding hours are rare, making noise on descents through isolated sections is sensible. The Ciucaș Mountains visible to the east present a distinctive silhouette: limestone pillars and towers sculpted by wind and frost erosion into formations with names like Tigăile Mari (The Great Cauldrons) and Turnul Goliat (Goliath\'s Tower).\\n\\nSuzana Monastery at kilometer 36 makes an ideal mid-ride stop. Founded in 1740, the monastery maintains an orchard and distillery where monks produce a respected țuică. The adjacent hamlet offers simple food — fresh bread, brânză de burduf (sheep cheese aged in pine bark), and smoked sausages. The descent from the pass summit into the Prahova valley reveals a different Romania: the resort towns of Cheia and Măneciu, popular with Bucharest weekenders, have good restaurants and accommodation options. The lake at Măneciu, formed by a hydroelectric dam on the Teleajen River, offers a scenic lakeside section before the route turns back toward Brașov. The Cheia Pass is rideable from May through October, with June and September offering the best balance of warm temperatures, manageable traffic, and clear visibility. Afternoon thunderstorms are common in July and August — plan to complete the exposed summit section before 2pm.',
        encyclopediaImages: [
          { url: 'https://images.unsplash.com/photo-1623006023380-50d09bf032a4?w=1600&q=85', caption: 'Dense Carpathian beech forest along the Cheia Pass — prime brown bear habitat', afterParagraph: 2 },
          { url: 'https://images.unsplash.com/photo-1580137189272-c9379f8864fd?w=1600&q=85', caption: 'The medieval Black Church in Brașov, southeastern Europe\'s largest Gothic church', afterParagraph: 1 }
        ],
        image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1600&q=85',
        country: 'Romania', region: 'Ciucaș Mountains', flag: '🇷🇴', tags: ['forest', 'moderate', 'scenic', 'day-ride'], isNew: false, isFeatured: false,
        effortCategory: 'full-day-moderate',
        accessibleFromBases: [],
        confidence: { waterFrequency: 'every-15km', phoneSignal: 'moderate', nearestBikeShop: 'Brasov 60km', surfaceBreakdown: '100% asphalt', emergencyContacts: '+40 112', offlineMapAvailable: true }
      },
      // ── CRETE (3 routes) ──
      {
        id: 'crete-samaria', destinationId: 'crete', name: 'Samariá Gorge Circuit', subtitle: 'From sea level to the rim of Samariá Gorge',
        type: 'road', difficulty: 4, distance: 94, elevationGain: 2180, elevationLoss: 2180, maxGradient: 15, avgGradient: 6.5,
        surfaceType: 'asphalt', surfaceCondition: 3, trafficLevel: 2, sceneryRating: 5,
        elevationProfile: [{ km: 0, elev: 5 }, { km: 10, elev: 280 }, { km: 20, elev: 620 }, { km: 30, elev: 980 }, { km: 38, elev: 1230 }, { km: 47, elev: 920 }, { km: 56, elev: 580 }, { km: 65, elev: 320 }, { km: 75, elev: 180 }, { km: 85, elev: 80 }, { km: 94, elev: 5 }],
        strava: { komTime: '3h 28min', avgTime: '4h 50min', segmentCount: 8 },
        bestDirection: 'clockwise from Chania', wind: 'Coastal breeze up to 20 km/h, sheltered in gorge section',
        weather: '18-32°C, dry Apr-Oct', season: { start: 4, end: 10, peak: [5, 6, 9, 10] },
        waterStops: [{ km: 15, name: 'Lakki village taverna', reliable: true, image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&q=75' }, { km: 30, name: 'Omalos plateau café', reliable: true, image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&q=75' }, { km: 55, name: 'Sougia beach bar', reliable: true, image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=75' }, { km: 78, name: 'Paleochora town', reliable: true, image: 'https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=400&q=75' }],
        localTips: ['The climb to Omalos plateau is relentless — 30km at 4-6%', 'Late season (Oct) means fewer tourists on the gorge rim road', 'Fill bottles at Omalos — the descent south has limited services', 'Greek drivers are aggressive on mountain roads — mirror recommended'],
        stages: [], partnerCount: 4,
        shortDesc: 'A punishing but spectacular loop from Chania to the rim of Samariá Gorge. 1,230m of climbing through the White Mountains with views into one of Europe\'s longest gorges.',
        encyclopedia: 'The Samariá Gorge stretches 16 kilometers through Crete\'s White Mountains, designated a UNESCO Biosphere Reserve in 1981 for its exceptional biodiversity. The gorge shelters the last significant population of the kri-kri, the Cretan wild goat descended from the first domesticated goats brought to the island over 8,000 years ago. The White Mountains — Lefka Ori in Greek — are composed of Triassic-Jurassic limestone that has been carved by water over 200 million years. During World War II, Cretan partisans used the gorge\'s caves and narrow passages to evade German occupation forces, with the village of Samariá serving as a resistance base until it was destroyed in reprisal. The Iron Gates section narrows to just 3.5 meters wide between 300-meter vertical walls.\\n\\nThe cycling route does not enter the gorge itself — that is a hiking-only trail — but instead climbs to the Omalos Plateau at 1,230 meters, the gorge\'s northern rim. Omalos is a high mountain plain encircled by the White Mountains, used for centuries as summer pasture by Cretan shepherds who still bring their flocks here each May. The plateau\'s isolation made it a natural stronghold during Crete\'s many uprisings: against Venetian rule (1205-1669), against the Ottoman Empire (1669-1898), and against the German occupation (1941-1945). A monument at the Xyloskalo trailhead — the start of the gorge hike — commemorates the Cretan resistance fighters who used these mountains as their base of operations.\\n\\nThe climb from Chania to Omalos is the ride\'s centerpiece: 30 kilometers of sustained 4-6% gradient through olive groves, then orange orchards, then chestnut forest, and finally bare limestone. The road passes through Lakki, a village famous for its chestnut honey — dark, intensely flavored, and sold by roadside vendors in recycled water bottles. Above Lakki, the route enters the Omalos basin through a narrow defile where the road clings to the canyon wall. The views from the plateau rim across to Mount Gigilos (2,080m) and the Samariá valley below are among the most dramatic in the Mediterranean. On clear days, the Libyan Sea glimmers to the south, 1,200 meters below.\\n\\nThe descent from Omalos toward the south coast follows a different road through increasingly remote terrain. Sougia, the route\'s coastal waypoint, is a tiny village accessible only by a single mountain road — one of the few places in Crete where genuine isolation still exists. Its pebbly beach faces directly toward Libya, 300 kilometers across open water. The onward coastal road to Paleochora winds through Crete\'s driest corner, where phrygana scrubland (aromatic thyme, oregano, and sage) scents the hot air. Paleochora itself, wrapped around a Venetian castle ruin on a narrow peninsula, has evolved into a laid-back traveler\'s town with excellent tavernas serving fresh fish, dakos (the Cretan bruschetta of barley rusk, tomato, and mizithra cheese), and strong raki — the Cretan grape brandy offered free after every meal. The route is at its best in May-June and September-October; midsummer heat (35°C+) and fierce tourist crowds at the gorge entrance make July-August less appealing.',
        encyclopediaImages: [
          { url: 'https://images.unsplash.com/photo-1763927608627-f4970eca5b38?w=1600&q=85', caption: 'The narrow Iron Gates section of Samariá Gorge — 3.5 meters between 300m walls', afterParagraph: 0 },
          { url: 'https://images.unsplash.com/photo-1586861203927-800a5acdcc4d?w=1600&q=85', caption: 'Climbing through olive groves toward the Omalos plateau above Chania', afterParagraph: 2 }
        ],
        image: 'https://images.unsplash.com/photo-1656861679110-a632ad041c13?w=1600&q=85',
        country: 'Greece', region: 'White Mountains', flag: '🇬🇷', tags: ['climbing', 'gorge', 'coastal', 'scenic'], isNew: false, isFeatured: true,
        effortCategory: 'full-day-moderate',
        accessibleFromBases: ['chania'],
        confidence: { waterFrequency: 'every-15km', phoneSignal: 'moderate', nearestBikeShop: 'Chania 20km', surfaceBreakdown: '100% asphalt', emergencyContacts: '+30 112', offlineMapAvailable: true }
      },
      {
        id: 'crete-white-mtns', destinationId: 'crete', name: 'White Mountains Loop', subtitle: 'Multi-day traverse of Crete\'s untamed heart',
        type: 'road', difficulty: 5, distance: 185, elevationGain: 3850, elevationLoss: 3850, maxGradient: 16, avgGradient: 5.9,
        surfaceType: 'mixed', surfaceCondition: 3, trafficLevel: 1, sceneryRating: 5,
        elevationProfile: [{ km: 0, elev: 5 }, { km: 20, elev: 580 }, { km: 40, elev: 1120 }, { km: 55, elev: 1480 }, { km: 70, elev: 980 }, { km: 90, elev: 420 }, { km: 110, elev: 880 }, { km: 130, elev: 1320 }, { km: 145, elev: 1050 }, { km: 160, elev: 620 }, { km: 175, elev: 280 }, { km: 185, elev: 5 }],
        strava: { komTime: '7h 45min', avgTime: '11h 20min', segmentCount: 12 },
        bestDirection: 'clockwise from Chania', wind: 'Variable — exposed ridges, sheltered valleys',
        weather: '10-30°C depending on altitude, afternoon thermals', season: { start: 5, end: 10, peak: [5, 6, 9, 10] },
        waterStops: [{ km: 22, name: 'Theriso village', reliable: true, image: 'https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=400&q=75' }, { km: 55, name: 'Askyfou plateau', reliable: true, image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&q=75' }, { km: 90, name: 'Hora Sfakion harbor', reliable: true, image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&q=75' }, { km: 130, name: 'Imbros village', reliable: true, image: 'https://images.unsplash.com/photo-1572715376701-98568319fd0b?w=400&q=75' }, { km: 160, name: 'Georgioupoli coast', reliable: true, image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=75' }],
        localTips: ['Multi-day route — plan 2-3 days with overnight stops', 'Hora Sfakion to Imbros is the toughest section, 40km of climbing', 'Guest houses along the route are basic but welcoming', 'Carry emergency food — some villages have no shop', 'The Askyfou War Museum is worth a 15-min detour'],
        stages: [
          { day: 1, title: 'Chania to Hora Sfakion', distance: 90, elevation: 1900, description: 'South across the White Mountains via the Theriso gorge and Askyfou plateau. A massive day ending at the tiny harbor town of Hora Sfakion on the Libyan Sea.', overnight: 'Hotel Stavris (Hora Sfakion)' },
          { day: 2, title: 'Hora Sfakion to Georgioupoli', distance: 95, elevation: 1950, description: 'East along the coast then north through the Imbros gorge and over the mountains back to the Sea of Crete. The final descent to Georgioupoli is a reward for brutal climbing.', overnight: 'Anemos Luxury Grand Resort (Georgioupoli)' }
        ],
        partnerCount: 5,
        shortDesc: 'The ultimate Cretan challenge. 185km across the White Mountains linking the Sea of Crete to the Libyan Sea and back. Brutal climbing, remote villages, Homeric landscapes.',
        encyclopedia: 'The Lefka Ori range contains over 50 peaks above 2,000 meters, making it Crete\'s highest and most imposing mountain massif, with Pachnes reaching 2,453 meters. Hora Sfakion, the route\'s coastal midpoint, has been a center of Cretan resistance for centuries — its inhabitants famously never submitted to Ottoman rule during 250 years of occupation. The Imbros Gorge, narrower and less touristed than Samariá, served as the evacuation route for 12,000 Allied soldiers during the Battle of Crete in May 1941, one of the war\'s first major airborne invasions. The Askyfou plateau at 700 meters, surrounded by mountains on all sides, supported an isolated farming community that maintained Cretan traditions largely unchanged for centuries. Its small war museum documents the island\'s fierce resistance heritage.\\n\\nThis multi-day route is Crete\'s ultimate cycling challenge and one of the Mediterranean\'s great endurance rides. Day one\'s 90-kilometer crossing from the Sea of Crete to the Libyan Sea traverses the full width of the White Mountains — a staggering 1,900 meters of climbing through terrain that shifts from coastal olive groves to alpine limestone within 40 kilometers. The road through the Theriso Gorge, the route\'s opening act, follows the narrow canyon where Eleftherios Venizelos — Crete\'s greatest statesman and later Greece\'s prime minister — launched his 1905 revolution against Ottoman rule. Theriso village, at the gorge\'s head, preserves the revolutionary headquarters as a small museum.\\n\\nThe Askyfou plateau, reached after a lung-burning climb, feels like a hidden world: a flat green basin at 700 meters surrounded by mountains on all sides, with a few stone farmhouses, a tiny church, and the remarkable Askyfou War Museum — a personal collection of weapons, uniforms, and documents spanning Crete\'s conflicts from the Venetian era to World War II, assembled by one family over generations. The descent from Askyfou to Hora Sfakion drops 700 meters in 12 kilometers of tight switchbacks overlooking the Libyan Sea — one of the most exhilarating descents in European cycling. Hora Sfakion itself is a miniature harbor town wedged between cliffs and sea, historically so difficult to access that its Sfakiot clan maintained virtual independence for centuries. Their reputation for fierce resistance earned them the nickname "the Spartans of Crete."\\n\\nDay two\'s return north via the Imbros Gorge adds historical gravity to physical suffering. In May 1941, after the Battle of Crete — the first time the Allies faced a major airborne invasion — 12,000 Australian, New Zealand, and British soldiers retreated through this gorge to evacuation ships at Hora Sfakion, harassed by German bombers overhead. The narrow path between 300-meter limestone walls still carries the weight of that desperate march. The road ascent from the gorge to the plateau above is brutally steep (short ramps to 16%), but the subsequent descent toward Georgioupoli on the north coast rewards with panoramic views across Souda Bay. Cretan cuisine sustains riders throughout: kalitsounia (sweet cheese pastries), lamb with stamnagathi (a wild Cretan green), and the ever-present raki, poured generously at every taverna stop. The route demands 2-3 days with adequate rest, and riders should carry emergency food on the mountain sections where villages may lack any shop.',
        encyclopediaImages: [
          { url: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1600&q=85', caption: 'The dramatic descent from Askyfou to Hora Sfakion overlooking the Libyan Sea', afterParagraph: 2 },
          { url: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1600&q=85', caption: 'Hora Sfakion\'s tiny harbor — the "Spartan" stronghold wedged between cliffs and sea', afterParagraph: 1 }
        ],
        image: 'https://images.unsplash.com/photo-1504512485720-7d83a16ee930?w=1600&q=85',
        country: 'Greece', region: 'White Mountains', flag: '🇬🇷', tags: ['epic', 'multi-day', 'remote', 'climbing', 'adventure'], isNew: true, isFeatured: false,
        effortCategory: 'multi-day',
        accessibleFromBases: ['chania'],
        confidence: { waterFrequency: 'every-20km', phoneSignal: 'poor-in-mountains', nearestBikeShop: 'Chania 30km', surfaceBreakdown: '90% asphalt / 10% gravel', emergencyContacts: '+30 112', offlineMapAvailable: true }
      },
      {
        id: 'crete-south-coast', destinationId: 'crete', name: 'South Coast Cruise', subtitle: 'Laid-back coastal roll along the Libyan Sea',
        type: 'road', difficulty: 2, distance: 68, elevationGain: 480, elevationLoss: 480, maxGradient: 7, avgGradient: 2.8,
        surfaceType: 'asphalt', surfaceCondition: 3, trafficLevel: 2, sceneryRating: 4,
        elevationProfile: [{ km: 0, elev: 5 }, { km: 8, elev: 60 }, { km: 16, elev: 120 }, { km: 24, elev: 80 }, { km: 32, elev: 160 }, { km: 40, elev: 100 }, { km: 48, elev: 140 }, { km: 56, elev: 80 }, { km: 64, elev: 40 }, { km: 68, elev: 5 }],
        strava: { komTime: '1h 52min', avgTime: '2h 35min', segmentCount: 5 },
        bestDirection: 'east-to-west', wind: 'Offshore morning breeze, onshore afternoon',
        weather: '20-34°C, hottest route in database', season: { start: 4, end: 11, peak: [5, 6, 9, 10] },
        waterStops: [{ km: 12, name: 'Plakias beach bars', reliable: true, image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=75' }, { km: 28, name: 'Frangokastello taverna', reliable: true, image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&q=75' }, { km: 45, name: 'Hora Sfakion harbor', reliable: true, image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&q=75' }],
        localTips: ['Perfect recovery ride after the White Mountains Loop', 'Start early — afternoon heat can exceed 38°C in summer', 'The beach at Frangokastello has the clearest water in Crete', 'Carry extra water in summer — shade is scarce on the south coast'],
        stages: [], partnerCount: 3,
        shortDesc: 'A relaxed coastal ride along Crete\'s dramatic south coast. Warm Libyan Sea, Venetian castles, and empty beaches — the perfect recovery or rest-day spin.',
        encyclopedia: 'Frangokastello, the Venetian fortress that anchors this coastal route, was built in 1371 to impose order on the rebellious Sfakian population and protect against pirate raids. Local legend holds that each May, ghostly armored figures — the Drosoulites — march at dawn near the castle, said to be the spirits of Cretan rebels killed in an 1828 uprising against the Ottomans. The Libyan Sea coast enjoys Crete\'s warmest temperatures, with water reaching 26°C in summer and a microclimate that allows banana cultivation — rare in Europe. Venetian rule from 1205 to 1669 left its mark in the fortifications, harbors, and olive terraces visible along the route. The south coast\'s dramatic geography, where mountains plunge directly into the sea, creates a sense of cycling at the edge of the European continent.\\n\\nThis coastal route traces the base of the White Mountains where they plunge into the Libyan Sea, creating a dramatic interface of vertical limestone and deep blue water. The road rarely strays more than a kilometer from the shore, passing through a succession of tiny settlements that feel closer to North Africa than to mainland Greece — in fact, the Libyan coast is just 300 kilometers south, closer than Athens. The microclimate here is distinctly African: summer temperatures regularly exceed 35°C, banana trees and date palms grow in sheltered gullies, and rainfall is virtually nonexistent from May through October. The sea temperature reaches 26°C by midsummer, making every beach stop a genuine recovery opportunity.\\n\\nPlakias, the route\'s first significant stop, occupies a sweeping sandy bay backed by olive groves and a dramatic gorge. The Kourtaliótiko Gorge, just inland, channels a river that creates a rare south-coast waterfall and supports a colony of griffon vultures nesting on its cliffs. Frangokastello itself is strikingly photogenic: the Venetian fortress\'s four square towers stand almost intact against a backdrop of mountains and the island\'s clearest water — the sandy beach here has such transparent shallows that boats appear to float on air. The Drosoulites phenomenon, observed at dawn on calm May mornings, has been variously attributed to atmospheric refraction, mirages, or genuine supernatural agency; Cretans tend toward the latter explanation, and the castle\'s reputation as a haunted place keeps it atmospheric even in high season.\\n\\nHora Sfakion, the route\'s eastern endpoint, is the embarkation point for ferries to the tiny coastal settlements of Loutro and Agia Roumeli (the Samariá Gorge exit), making it possible to combine this ride with other adventures. The cuisine along the south coast is distinctly Cretan and distinctly excellent: snails cooked in rosemary and vinegar (chochlioi bourbouristi), lamb slow-roasted with wild herbs, and horta (foraged wild greens) dressed with lemon and the region\'s superb olive oil. Every meal ends with raki and a plate of seasonal fruit — often figs, grapes, or pomegranates from the taverna owner\'s own garden. For cyclists, this route works beautifully as a recovery day after the White Mountains Loop, or as a standalone ride for those who prefer warm coastal cycling to mountain suffering. Start early (6-7am) in summer to cover the majority of distance before the heat becomes punishing.',
        encyclopediaImages: [
          { url: 'https://images.unsplash.com/photo-1602088113235-229c19758e9f?w=1600&q=85', caption: 'Frangokastello\'s Venetian fortress with the White Mountains rising behind', afterParagraph: 1 },
          { url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&q=85', caption: 'Cretan taverna table: dakos, fresh fish, and olive oil — the cyclist\'s reward', afterParagraph: 3 }
        ],
        image: 'https://images.unsplash.com/photo-1515859005217-8a1f08870f59?w=1600&q=85',
        country: 'Greece', region: 'South Crete', flag: '🇬🇷', tags: ['coastal', 'flat', 'recovery', 'warm'], isNew: false, isFeatured: false,
        effortCategory: 'full-day-easy',
        accessibleFromBases: ['chania'],
        confidence: { waterFrequency: 'every-12km', phoneSignal: 'good', nearestBikeShop: 'Chania 40km', surfaceBreakdown: '100% asphalt', emergencyContacts: '+30 112', offlineMapAvailable: true }
      },
      // ── CLASSIC EUROPEAN + JAPAN (6 routes, lighter data) ──
      {
        id: 'mallorca-sa-calobra', destinationId: 'mallorca', name: 'Sa Calobra', subtitle: 'The Mediterranean\'s most famous cycling descent',
        type: 'road', difficulty: 4, distance: 52, elevationGain: 1480, elevationLoss: 1480, maxGradient: 12, avgGradient: 6.8,
        surfaceType: 'asphalt', surfaceCondition: 5, trafficLevel: 4, sceneryRating: 5,
        elevationProfile: [{ km: 0, elev: 40 }, { km: 6, elev: 320 }, { km: 13, elev: 680 }, { km: 20, elev: 820 }, { km: 26, elev: 680 }, { km: 32, elev: 420 }, { km: 38, elev: 60 }, { km: 44, elev: 420 }, { km: 52, elev: 40 }],
        strava: { komTime: '1h 38min', avgTime: '2h 25min', segmentCount: 6 },
        bestDirection: 'Climb from sea level up', 'wind': 'Sheltered by Serra de Tramuntana',
        weather: '16-30°C, dry Mar-Oct', season: { start: 2, end: 11, peak: [3, 4, 5, 9, 10] },
        waterStops: [{ km: 0, name: 'Sa Calobra beach bar', reliable: true, image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=75' }, { km: 26, name: 'Coll dels Reis summit', reliable: false, image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=400&q=75' }, { km: 52, name: 'Pollença town', reliable: true, image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&q=75' }],
        localTips: ['The famous "tie knot" 270° hairpin is at km 8 — iconic photo spot', 'Pro teams train here Jan-Mar, so you\'ll have fast company', 'The Sa Calobra climb itself is 9.5km — the 52km loop includes the approach from Pollença', 'Start from the bottom at 7am to avoid the bus convoys'],
        stages: [], partnerCount: 6,
        shortDesc: 'Mallorca\'s legendary corkscrew road. 26 hairpins, a famous 270° loop (the "tie knot"), and 680m of climbing from a turquoise cove to the Serra de Tramuntana ridgeline.',
        encyclopedia: 'The road to Sa Calobra was designed by Italian engineer Antonio Parietti in 1932, a masterwork of mountain road engineering through the Serra de Tramuntana, designated a UNESCO World Heritage Site in 2011. The route\'s most famous feature, the 270-degree nus de sa corbata (tie knot), passes beneath itself in a dramatic loop that descends 800 meters in 9.4 kilometers — a gradient that has attracted professional cycling teams since the 1960s. The Serra de Tramuntana\'s limestone geology, shaped by Mesozoic-era tectonic collisions between the African and European plates, creates the dramatic cliffs and gorges that make this road so spectacular. The Torrent de Pareis gorge at the bottom, where two canyons meet the sea, is one of the Mediterranean\'s most dramatic natural amphitheaters.\\n\\nMallorca\'s transformation into cycling\'s premier winter training destination began in the 1980s when German and Scandinavian teams discovered the island\'s combination of quiet mountain roads, mild winter temperatures (14-18°C in January), and world-class hotel infrastructure. Today, an estimated 100,000 cyclists visit annually, with January through April seeing a constant procession of professional teams on these exact roads. The Sa Calobra climb itself — 9.4 kilometers from sea level to the Coll dels Reis pass at 682 meters — is the island\'s signature effort, its reputation built on the relentless gradient (averaging 7% with ramps to 12%), the spectacular engineering of the hairpin bends, and the famous "tie knot" where the road loops over itself in a 270-degree corkscrew. The Parietti monument at the pass honors the engineer whose audacious design made this road possible.\\n\\nThe descent to the Sa Calobra cove reveals the Torrent de Pareis, a cavernous gorge where two canyons converge at the sea. The pebble beach at the gorge mouth, hemmed by 200-meter limestone walls, is one of the Mediterranean\'s most extraordinary natural spaces — a cathedral of rock and water that hosts an annual classical concert in July. The climb back out is the experience most riders remember: the gradient, the heat radiating off limestone, and the satisfaction of conquering every hairpin. The wider loop from Pollença adds the approach through the Tramuntana\'s northern foothills, passing through Caimari (famous for its November olive oil fair) and the monastery of Lluc, Mallorca\'s most sacred site and a popular refueling stop with a good café and atmospheric 13th-century cloisters.\\n\\nPollença itself, the natural base for this route, is an elegant town of honey-stone buildings centered on its Plaça Major, where Sunday markets have operated since the 14th century. The town\'s 365-step Calvari staircase — one for each day of the year — leads to a hilltop chapel with views across the bay to Cap de Formentor. Local cuisine leans Mediterranean: tumbet (a layered vegetable bake of aubergine, potato, and pepper in tomato sauce), pa amb oli (bread rubbed with tomato and drenched in olive oil), and sobrassada — a soft, paprika-cured sausage spread unique to the Balearic Islands. For a post-ride treat, ensaïmada — the island\'s iconic spiral pastry dusted with powdered sugar — pairs perfectly with a cortado at any of Pollença\'s square-side cafés.',
        encyclopediaImages: [
          { url: 'https://images.unsplash.com/photo-1600240644455-3edc55c375fe?w=1600&q=85', caption: 'The famous "tie knot" — the road loops 270 degrees beneath itself on the Sa Calobra descent', afterParagraph: 1 },
          { url: 'https://images.unsplash.com/photo-1744718734621-b3b19a39b999?w=1600&q=85', caption: 'Torrent de Pareis gorge at sea level — a natural cathedral of limestone walls', afterParagraph: 2 }
        ],
        image: 'https://images.unsplash.com/photo-1640188223456-f5e5b33615fc?w=1600&q=85',
        country: 'Spain', region: 'Mallorca', flag: '🇪🇸', tags: ['climbing', 'hairpins', 'iconic', 'pro-training'], isNew: false, isFeatured: false,
        effortCategory: 'half-day-hard',
        accessibleFromBases: ['palma'],
        confidence: { waterFrequency: 'every-15km', phoneSignal: 'good', nearestBikeShop: 'Palma 30km', surfaceBreakdown: '100% asphalt', emergencyContacts: '+34 112', offlineMapAvailable: true }
      },
      {
        id: 'italy-strade-bianche', destinationId: 'tuscany', name: 'Strade Bianche', subtitle: 'Tuscany\'s white gravel roads — the race route',
        type: 'gravel', difficulty: 3, distance: 136, elevationGain: 1820, elevationLoss: 1820, maxGradient: 18, avgGradient: 3.2,
        surfaceType: 'mixed', surfaceCondition: 3, trafficLevel: 2, sceneryRating: 5,
        elevationProfile: [{ km: 0, elev: 320 }, { km: 15, elev: 280 }, { km: 30, elev: 380 }, { km: 45, elev: 420 }, { km: 60, elev: 340 }, { km: 75, elev: 460 }, { km: 90, elev: 380 }, { km: 105, elev: 520 }, { km: 120, elev: 440 }, { km: 136, elev: 320 }],
        strava: { komTime: '4h 10min', avgTime: '5h 45min', segmentCount: 11 },
        bestDirection: 'Any — rolling terrain', wind: 'Gentle Tuscan breezes, rarely an issue',
        weather: '14-28°C, spring and autumn best', season: { start: 3, end: 11, peak: [4, 5, 9, 10] },
        waterStops: [{ km: 20, name: 'Buonconvento bar', reliable: true, image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&q=75' }, { km: 50, name: 'Asciano town square', reliable: true, image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&q=75' }, { km: 80, name: 'Castelnuovo Berardenga', reliable: true, image: 'https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=400&q=75' }, { km: 110, name: 'Monte Sante Marie farm', reliable: true, image: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=400&q=75' }],
        localTips: ['28mm+ tires at lower pressure for the gravel sectors', 'The Piazza del Campo finish in Siena is iconic — time it right', 'Spring (Mar-Apr) has wildflowers on the strade bianche', 'The route features 14 gravel sectors, each with its own character and challenge'],
        stages: [], partnerCount: 4,
        shortDesc: 'Ride the actual race route through Tuscany\'s legendary white gravel roads. 14 strade bianche sectors linking medieval hill towns, cypress-lined ridges, and Siena\'s Piazza del Campo.',
        encyclopedia: 'The Strade Bianche race was first held in 2007 and quickly established itself as one of cycling\'s most beloved one-day events. Its white gravel roads — strade bianche — are geological artifacts: the pale clay surface is composed of Pliocene-era marine sediments deposited when Tuscany lay beneath the sea three to five million years ago. The route culminates at Siena\'s Piazza del Campo, the shell-shaped medieval square that hosts the famous Palio horse race twice each summer. Fourteen official gravel sectors wind through the Crete Senesi badlands and Val d\'Arbia, past Romanesque abbey ruins and Renaissance farmhouses. The Tuscan landscape traversed by this route inspired countless Renaissance painters, and the rolling terrain of cypress trees, vineyards, and golden light remains essentially unchanged since the 14th century.\\n\\nThe Crete Senesi — the clay badlands south of Siena — create the route\'s most dramatic landscapes. These eroded hillsides, sculpted by rain into sharp ridges and lunar gullies, have an austere beauty that contrasts with Tuscany\'s more famous rolling green hills. The white clay surface of the strade bianche varies dramatically with weather: dry conditions produce a fast, firm surface with the texture of packed flour, while rain transforms the same roads into treacherous mud that clogs drivetrains and adds kilograms to wheels. The race itself, held in early March, often confronts riders with both extremes in a single day. For recreational riders, spring and autumn offer the best surface conditions, with April\'s wildflower explosion (poppies, wild orchids, cornflowers) adding color to the pale landscape.\\n\\nThe route connects a constellation of medieval hill towns, each worth a pause. Buonconvento, a perfectly preserved 14th-century walled town, has an excellent small museum of sacred art and a main street lined with artisan food shops. Asciano perches on a ridge overlooking the Crete Senesi and hosts the Museo Cassioli, filled with Sienese School paintings. Castelnuovo Berardenga marks the border between the Crete Senesi and the Chianti Classico wine region — here the landscape transforms from pale clay to dark green vineyards and olive groves. The abandoned Romanesque abbey of Monte Sante Marie, visible from one of the gravel sectors, stands as a haunting ruin in a wheat field that seems painted by Piero della Francesca.\\n\\nSiena\'s Piazza del Campo, the race\'s dramatic finish, is one of Italy\'s most remarkable public spaces: a shell-shaped medieval square built at the junction of three hills, sloping down to the Palazzo Pubblico and its slender Torre del Mangia. Twice each summer (July 2 and August 16), the Palio horse race transforms the piazza into a roaring amphitheater, but even on an ordinary Tuesday it radiates centuries of civic pride. Tuscan cuisine is cycling food at its finest: ribollita (bread and bean soup thickened to stew), pici (hand-rolled thick spaghetti with ragù), bistecca alla fiorentina (thick-cut T-bone grilled over chestnut embers), and the region\'s legendary Brunello di Montalcino and Chianti Classico wines. The ideal approach is 2-3 days: ride the route, explore the towns, and eat everything.',
        encyclopediaImages: [
          { url: 'https://images.unsplash.com/photo-1685707107311-b82c55ce0edd?w=1600&q=85', caption: 'Cypress-lined white gravel road in the Crete Senesi — the strade bianche at their finest', afterParagraph: 1 },
          { url: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1600&q=85', caption: 'Siena\'s Piazza del Campo — the shell-shaped finish line of the Strade Bianche race', afterParagraph: 3 }
        ],
        image: 'https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=1600&q=85',
        country: 'Italy', region: 'Tuscany', flag: '🇮🇹', tags: ['gravel', 'iconic', 'race-route', 'rolling'], isNew: false, isFeatured: false,
        effortCategory: 'full-day-moderate',
        accessibleFromBases: ['siena'],
        confidence: { waterFrequency: 'every-12km', phoneSignal: 'good', nearestBikeShop: 'Siena 5km', surfaceBreakdown: '55% asphalt / 45% white gravel', emergencyContacts: '+39 112', offlineMapAvailable: true }
      },
      {
        id: 'italy-stelvio', destinationId: 'dolomites', name: 'Passo dello Stelvio', subtitle: 'The king of Alpine passes — 48 hairpins to 2,758m',
        type: 'road', difficulty: 5, distance: 24.3, elevationGain: 1850, elevationLoss: 0, maxGradient: 14, avgGradient: 7.6,
        surfaceType: 'asphalt', surfaceCondition: 4, trafficLevel: 4, sceneryRating: 5,
        elevationProfile: [{ km: 0, elev: 908 }, { km: 3, elev: 1080 }, { km: 6, elev: 1260 }, { km: 9, elev: 1450 }, { km: 12, elev: 1650 }, { km: 15, elev: 1880 }, { km: 18, elev: 2120 }, { km: 21, elev: 2420 }, { km: 24.3, elev: 2758 }],
        strava: { komTime: '1h 32min', avgTime: '2h 25min', segmentCount: 5 },
        bestDirection: 'East from Prato allo Stelvio', wind: 'Exposed above 2,200m — cold headwinds possible',
        weather: '2-18°C at summit, snow walls in June', season: { start: 6, end: 9, peak: [7, 8] },
        waterStops: [{ km: 5, name: 'Gomagoi village', reliable: true, image: 'https://images.unsplash.com/photo-1572715376701-98568319fd0b?w=400&q=75' }, { km: 10, name: 'Trafoi hotel zone', reliable: true, image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&q=75' }, { km: 19, name: 'Rifugio Garibaldi', reliable: true, image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=400&q=75' }, { km: 24.3, name: 'Summit restaurants', reliable: true, image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=75' }],
        localTips: ['48 numbered hairpins — count them down for motivation', 'Stelvio Bike Day (late Aug/early Sep) closes the road to cars', 'Carry warm layers — summit can be below freezing even in July', 'The Bormio (west) side is steeper but less scenic'],
        stages: [], partnerCount: 5,
        shortDesc: 'Italy\'s highest paved pass and cycling\'s ultimate climb. 24.3km from Prato allo Stelvio, 1,850m elevation gain, 48 numbered hairpins through glacial scenery to 2,758m.',
        encyclopedia: 'The Stelvio Pass road was engineered between 1820 and 1825 by Carlo Donegani, who designed its 48 numbered hairpins to maintain a near-constant gradient traversable by horse-drawn carriages of the Austrian Empire. At 2,758 meters, it remains the highest paved pass in the Eastern Alps and the second highest in all of Europe. The Giro d\'Italia first summited the Stelvio in 1953, and it has served as the race\'s Cima Coppi — the highest point — more than any other climb. The Stelvio National Park, established in 1935, protects 130,000 hectares of glacial terrain, alpine meadows, and forests that shelter ibex, chamois, golden eagles, and the recently reintroduced bearded vulture. The pass\'s strategic military significance is evidenced by World War I fortifications still visible near the summit.\\n\\nThe eastern approach from Prato allo Stelvio is considered the classic cycling ascent: 24.3 kilometers of unrelenting gradient averaging 7.6%, with the 48 hairpins numbered from bottom to top, creating an irresistible countdown. Each bend is signed, and counting them down becomes a mental survival strategy as oxygen thins and legs protest. The road\'s remarkable engineering maintains a near-constant pitch, with none of the false flats or descent interruptions found on other major cols — it simply climbs from the first meter to the last. At Trafoi (km 10, 1,543m), the Hotel Bella Vista has served cyclists since the 1960s and its terrace offers a view of the remaining hairpins zigzagging up the mountain face — a sight that is either inspiring or demoralizing depending on your state.\\n\\nAbove 2,200 meters, the landscape becomes genuinely alpine: snow walls line the road in June (sometimes reaching 3-4 meters), marmots whistle from boulder fields, and the Ortler glacier gleams across the valley. The summit hosts several restaurants, souvenir shops, and a small chapel — its commercialism a stark contrast to the wild beauty of the approach. The Stelvio Bike Day (Stilfserjoch Radtag), held annually in late August or early September, closes the eastern approach to motor traffic for one day, drawing 10,000+ cyclists to ride the pass car-free — an experience that transforms the climb from a battle with tourist buses into a pure cycling festival.\\n\\nWorld War I left a profound mark on the Stelvio landscape. The pass formed part of the Austro-Italian front line from 1915 to 1918, and some of the war\'s highest-altitude combat took place on the glaciers and ridges above the road. Trenches, gun emplacements, and tunnel systems are still visible near the summit, and the Stelvio museum houses artifacts recovered from the ice as glaciers retreat. The South Tyrolean culture of the valley below is distinctly Austrian in character — German-speaking, with hearty cuisine built around canederli (bread dumplings), speck (smoked ham), and apple strudel. The Stelvio is open from June to late September, with July and August offering the warmest conditions but also the heaviest tourist traffic. Early morning starts (before 7am) are essential to summit before the bus convoys begin their assault around 10am.',
        encyclopediaImages: [
          { url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600&q=85', caption: 'The 48 numbered hairpins of the Stelvio climbing toward the 2,758m summit', afterParagraph: 1 },
          { url: 'https://images.unsplash.com/photo-1755874851336-2b6c6c94690b?w=1600&q=85', caption: 'Snow walls lining the road in June near the Stelvio summit — a dramatic alpine tunnel', afterParagraph: 2 }
        ],
        image: 'https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=1600&q=85',
        country: 'Italy', region: 'South Tyrol', flag: '🇮🇹', tags: ['epic', 'climbing', 'alpine', 'hairpins', 'iconic'], isNew: false, isFeatured: false,
        effortCategory: 'half-day-hard',
        accessibleFromBases: ['bormio'],
        confidence: { waterFrequency: 'every-10km', phoneSignal: 'moderate', nearestBikeShop: 'Bormio 3km', surfaceBreakdown: '100% asphalt', emergencyContacts: '+39 112', offlineMapAvailable: true }
      },
      {
        id: 'france-alpe-dhuez', destinationId: 'alps', name: 'Alpe d\'Huez', subtitle: '21 legendary hairpins — cycling\'s most storied climb',
        type: 'road', difficulty: 4, distance: 13.8, elevationGain: 1120, elevationLoss: 0, maxGradient: 13, avgGradient: 8.1,
        surfaceType: 'asphalt', surfaceCondition: 5, trafficLevel: 3, sceneryRating: 4,
        elevationProfile: [{ km: 0, elev: 740 }, { km: 2, elev: 900 }, { km: 4, elev: 1020 }, { km: 6, elev: 1120 }, { km: 8, elev: 1260 }, { km: 10, elev: 1420 }, { km: 12, elev: 1600 }, { km: 13.8, elev: 1860 }],
        strava: { komTime: '35min 56s', avgTime: '1h 08min', segmentCount: 3 },
        bestDirection: 'Up from Le Bourg-d\'Oisans', wind: 'Sheltered in the valley, exposed final 3km',
        weather: '8-24°C, afternoon thunderstorms common Jul-Aug', season: { start: 5, end: 10, peak: [6, 7, 8, 9] },
        waterStops: [{ km: 0, name: 'Le Bourg-d\'Oisans town', reliable: true, image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&q=75' }, { km: 7, name: 'La Garde-en-Oisans', reliable: true, image: 'https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=400&q=75' }, { km: 13.8, name: 'Alpe d\'Huez resort', reliable: true, image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&q=75' }],
        localTips: ['Each hairpin is numbered 21 to 1 with champion names', 'The steepest section (13%) is in the first 3km — don\'t blow up early', 'Time trial yourself — sub-60min is a strong amateur performance', 'Visit the museum at bend 16 for Tour de France history'],
        stages: [], partnerCount: 4,
        shortDesc: 'The climb that defines the Tour de France. 13.8km, 21 numbered hairpins, each bearing a champion\'s name, ascending 1,120m from Le Bourg-d\'Oisans to the ski station.',
        encyclopedia: 'Alpe d\'Huez first appeared in the Tour de France on July 4, 1952, when Fausto Coppi attacked on its slopes to win the stage and ultimately the Tour — establishing the climb\'s legend in a single afternoon. The 21 hairpin bends are each signed with the name of a past stage winner, from Coppi at bend 21 to the most recent champions near the top. The gradient averages 8.1% but ramps to 13% in the opening kilometers, a vicious introduction that has broken countless riders. The naming tradition began in the 1990s when the commune installed the distinctive hairpin signs, creating a unique countdown that has become cycling\'s most recognizable climb marker. The ski resort at the summit, developed in the 1930s, transforms each July into cycling\'s most raucous amphitheater, with up to 500,000 spectators lining the road.\\n\\nLe Bourg-d\'Oisans, the climb\'s base town, sits at the confluence of the Romanche River and the road to the major Alpine passes. This unassuming mountain town has become cycling\'s unofficial Alpine capital, with multiple bike shops, hire outlets, and hotels catering specifically to riders. The first three kilometers out of town deliver the climb\'s steepest gradients — sustained 10-13% that immediately separate the prepared from the optimistic. This opening salvo is the climb\'s crux: riders who start too hard here will pay for it on the upper slopes, while those who pace conservatively through bends 21 to 15 can accelerate as the gradient eases to 7-8% through the middle section.\\n\\nThe hairpin signs create a unique psychological experience unlike any other climb. Bend 21 bears Coppi\'s name; bend 15 celebrates Marco Pantani, whose 1995 ascent in 36 minutes 50 seconds remains the stuff of legend (though its legitimacy is debated). Each bend offers a micro-reward — another champion\'s name, another view across the Romanche valley, another confirmation of upward progress. La Garde-en-Oisans, a tiny hamlet at bend 12, provides a natural regrouping point with a small café and a fountain. Above La Garde, the road enters a series of longer, straighter ramps through forest before emerging onto open mountainside for the final three kilometers to the ski station at 1,860 meters.\\n\\nThe Alpe d\'Huez community has embraced its cycling identity with rare enthusiasm. A small museum at bend 16 documents the climb\'s Tour de France history with jerseys, bikes, and memorabilia from decades of racing. The road surface is maintained to excellent standard — smooth asphalt with clear lane markings — and traffic is generally respectful of cyclists, accustomed as local drivers are to sharing the road with thousands of riders each summer. Timing yourself is irresistible: sub-60 minutes represents a strong amateur performance, sub-50 minutes is exceptional, and anything under 45 minutes approaches elite level. The Oisans region\'s cuisine reflects its Alpine setting: tartiflette (potato, reblochon cheese, lardons, and cream), raclette, and the local specialty tourtons — small fried pastries stuffed with potato or cheese — provide the calories that the climb demands. June through September offers the best conditions, with July\'s extended daylight allowing late-afternoon ascents when the road is quieter and the light most beautiful.',
        encyclopediaImages: [
          { url: 'https://images.unsplash.com/photo-1528543606781-2f6e6857f318?w=1600&q=85', caption: 'The 21 numbered hairpins of Alpe d\'Huez rising above the Romanche valley', afterParagraph: 0 },
          { url: 'https://images.unsplash.com/photo-1530143311094-34d807799e8f?w=1600&q=85', caption: 'A hairpin bend bearing a Tour de France champion\'s name — the unique countdown experience', afterParagraph: 2 }
        ],
        image: 'https://images.unsplash.com/photo-1471506480208-91b3a4cc78be?w=1600&q=85',
        country: 'France', region: 'Isère Alps', flag: '🇫🇷', tags: ['climbing', 'iconic', 'tour-de-france', 'hairpins'], isNew: false, isFeatured: false,
        effortCategory: 'half-day-hard',
        accessibleFromBases: ['bourg-doisans'],
        confidence: { waterFrequency: 'every-8km', phoneSignal: 'good', nearestBikeShop: 'Bourg d\'Oisans 1km', surfaceBreakdown: '100% asphalt', emergencyContacts: '+33 112', offlineMapAvailable: true }
      },
      {
        id: 'france-galibier', destinationId: 'alps', name: 'Col du Galibier', subtitle: 'Where the Tour\'s fate is decided — 2,642m of suffering',
        type: 'road', difficulty: 5, distance: 69, elevationGain: 2120, elevationLoss: 850, maxGradient: 12, avgGradient: 5.5,
        surfaceType: 'asphalt', surfaceCondition: 4, trafficLevel: 3, sceneryRating: 5,
        elevationProfile: [{ km: 0, elev: 720 }, { km: 8, elev: 980 }, { km: 16, elev: 1320 }, { km: 23, elev: 1580 }, { km: 30, elev: 1920 }, { km: 35, elev: 2058 }, { km: 42, elev: 1920 }, { km: 49, elev: 2120 }, { km: 56, elev: 2380 }, { km: 63, elev: 2580 }, { km: 69, elev: 2642 }],
        strava: { komTime: '2h 18min', avgTime: '3h 30min', segmentCount: 7 },
        bestDirection: 'South from Valloire via Col du Télégraphe', wind: 'Severe above 2,200m — can halt progress entirely',
        weather: '0-16°C at summit, snow possible Jun-Sep', season: { start: 6, end: 9, peak: [7, 8] },
        waterStops: [{ km: 0, name: 'Saint-Michel-de-Maurienne', reliable: true, image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&q=75' }, { km: 18, name: 'Valloire village', reliable: true, image: 'https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=400&q=75' }, { km: 35, name: 'Plan Lachat refuge', reliable: false, image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=400&q=75' }, { km: 69, name: 'Summit monument (no water)', reliable: false, image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=75' }],
        localTips: ['The Galibier follows the Télégraphe — a 12km warm-up col to Valloire', 'Above the tree line there is zero shelter — full weather protection mandatory', 'The memorial to Marco Pantani near the summit is a pilgrimage site', 'Descending north to Col du Lautaret is fast but exposed — brake early on the switchbacks'],
        stages: [], partnerCount: 3,
        shortDesc: 'The giant of the northern Alps. Col du Télégraphe + Col du Galibier = 2,120m of climbing to a barren 2,642m summit. Where Tour de France legends are forged.',
        encyclopedia: 'The Col du Galibier has featured in the Tour de France since 1911, when race founder Henri Desgrange sent riders over its 2,642-meter summit to test whether humans and bicycles could conquer such heights. A monument to Desgrange near the summit honors his vision. The traditional approach pairs two climbs: the Col du Télégraphe at 1,566 meters serves as a 12-kilometer appetizer before Valloire, after which the Galibier proper begins its 18-kilometer ascent above the treeline. Near the summit, a memorial to Marco Pantani marks the spot where the Italian climber launched one of his most spectacular attacks in the 1998 Tour. The pass sits on the boundary between the northern and southern French Alps, offering views from Mont Blanc to the Écrins massif on clear days.\\n\\nThe approach from Saint-Michel-de-Maurienne begins with the Col du Télégraphe — a 12-kilometer, 856-meter warm-up climb that many riders underestimate. The Télégraphe averages 7.1% with sections touching 9%, and it depletes legs before the main event even begins. Valloire, the valley town between the two cols, offers a brief psychological reprieve: cafés, a fountain, and the knowledge that you\'ve completed only the appetizer. The Galibier proper begins immediately out of Valloire with 8 kilometers of forested climbing to Plan Lachat, where a small refuge marks the treeline. Above Plan Lachat, everything changes: the trees disappear, the sky opens up, and the road traverses a vast, empty, wind-scoured landscape of scree and alpine grassland that extends to the horizon in every direction.\\n\\nThe final 10 kilometers above the treeline are among cycling\'s most exposed and psychologically demanding. There is nowhere to hide from wind, sun, or cold — conditions can shift from scorching sunshine to near-freezing hail within 30 minutes. The Pantani memorial, a simple stone marker with a photograph, sits at a bend where the Italian launched one of his most memorable attacks during the 1998 Tour. The Desgrange monument near the summit — an obelisk honoring the Tour\'s founder — marks the emotional finish line, though the actual geographic summit lies slightly beyond. On clear days, the panorama from the top encompasses Mont Blanc (80 km north), the Meije and Écrins glaciers (south), and the vast sweep of the Maurienne and Briançonnais valleys.\\n\\nThe Maurienne valley below is one of the French Alps\' most historically significant corridors — a natural passage between France and Italy used by Roman legions, medieval pilgrims, and Napoleonic armies. Saint-Jean-de-Maurienne, accessible from the route, is home to the Opinel knife museum, celebrating the iconic folding knife invented here in 1890 and still manufactured in the valley. Savoyard cuisine sustains riders with substantial mountain fare: diots (pork sausages braised in white wine), crozets (small square buckwheat pasta gratinéed with Beaufort cheese), and the legendary Beaufort d\'alpage — summer alpine cheese produced from the milk of cows grazing the high meadows, with a rich, nutty flavor that embodies the mountains themselves. The Galibier is open from early June to mid-October, with the most reliable weather in July and August. The pass features in the Tour de France roughly every other year, and riding it on a non-Tour day is advisable — race-associated road closures and crowds can last for days.',
        encyclopediaImages: [
          { url: 'https://images.unsplash.com/photo-1464278533981-50106e6176b1?w=1600&q=85', caption: 'Above the treeline on the Galibier — wind-scoured emptiness stretching to the horizon', afterParagraph: 2 },
          { url: 'https://images.unsplash.com/photo-1666870981007-fb95c18e7e18?w=1600&q=85', caption: 'The Desgrange memorial near the summit — a pilgrimage site for Tour de France devotees', afterParagraph: 3 }
        ],
        image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1600&q=85',
        country: 'France', region: 'Savoie Alps', flag: '🇫🇷', tags: ['epic', 'climbing', 'alpine', 'tour-de-france'], isNew: false, isFeatured: false,
        effortCategory: 'full-day-hard',
        accessibleFromBases: ['bourg-doisans'],
        confidence: { waterFrequency: 'every-15km', phoneSignal: 'moderate', nearestBikeShop: 'Bourg d\'Oisans 20km', surfaceBreakdown: '100% asphalt', emergencyContacts: '+33 112', offlineMapAvailable: true }
      },
      {
        id: 'japan-shimanami', destinationId: 'japan', name: 'Shimanami Kaido', subtitle: 'Island-hopping across the Seto Inland Sea',
        type: 'road', difficulty: 2, distance: 70, elevationGain: 340, elevationLoss: 340, maxGradient: 6, avgGradient: 2.1,
        surfaceType: 'asphalt', surfaceCondition: 5, trafficLevel: 1, sceneryRating: 5,
        elevationProfile: [{ km: 0, elev: 5 }, { km: 8, elev: 45 }, { km: 16, elev: 20 }, { km: 24, elev: 55 }, { km: 32, elev: 15 }, { km: 40, elev: 50 }, { km: 48, elev: 10 }, { km: 56, elev: 40 }, { km: 64, elev: 20 }, { km: 70, elev: 5 }],
        strava: { komTime: '2h 05min', avgTime: '3h 10min', segmentCount: 7 },
        bestDirection: 'Onomichi to Imabari', wind: 'Sea breeze, mild and consistent',
        weather: '12-30°C, cherry blossom Mar-Apr, autumn color Oct-Nov', season: { start: 3, end: 11, peak: [4, 5, 10, 11] },
        waterStops: [{ km: 10, name: 'Mukaishima convenience store', reliable: true, image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=400&q=75' }, { km: 25, name: 'Setoda town', reliable: true, image: 'https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=400&q=75' }, { km: 40, name: 'Omishima shrine café', reliable: true, image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=400&q=75' }, { km: 55, name: 'Hakata island shop', reliable: true, image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=400&q=75' }, { km: 70, name: 'Imabari station', reliable: true, image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&q=75' }],
        localTips: ['Dedicated cycling lane on all 6 bridges — completely separated from traffic', 'Rent bikes at either end for one-way ride, ship luggage ahead', 'Stop at Dolce gelato on Setoda island — made with local citrus', 'The bridges are the highlights — each crossing reveals a new island panorama', 'Spring cherry blossom season along the route is unforgettable'],
        stages: [], partnerCount: 3,
        shortDesc: 'Japan\'s cycling paradise. 6 bridges spanning 6 islands across the turquoise Seto Inland Sea. Dedicated cycling lanes, zero traffic stress, and island-hopping perfection.',
        encyclopedia: 'The Shimanami Kaido\'s six bridges, completed in 1999 as part of the Nishiseto Expressway, span 60 kilometers of the Seto Inland Sea connecting Honshu to Shikoku — making it the world\'s first long-distance sea-crossing cycling route. Each bridge features a dedicated cycling and pedestrian lane, separated from motor traffic, with gentle spiral ramps replacing steep approaches. The islands between the bridges — Mukaishima, Innoshima, Ikuchijima, Omishima, Hakatajima, and Oshima — are famous for cultivating mikan citrus, with groves covering hillsides down to the waterline. Omishima island hosts Oyamazumi Shrine, one of Japan\'s oldest Shinto shrines, whose treasury contains the nation\'s largest collection of samurai armor and weapons. The route has become a model for cycling infrastructure worldwide and attracts over 300,000 cyclists annually.\\n\\nOnomoichi, the route\'s Honshu starting point, is itself a destination worth exploring. This hillside port town, clinging to steep slopes above a narrow strait, is famous for its 25 temples connected by a winding path called the Temple Walk — a 2.5-kilometer trail through atmospheric lanes, stone staircases, and gardens that reveals new perspectives of the Inland Sea at every turn. The town\'s literary connections run deep: it was the setting for several acclaimed Japanese films and novels, and its narrow lanes and retro cafés have attracted a community of artists and craftspeople who have revitalized its fading merchant quarter. The Onomichi U2 hotel — a converted waterfront warehouse with a "cycle-through" check-in — exemplifies the route\'s cyclist-first culture. Giant, the Taiwanese bike manufacturer, operates a rental hub here with a fleet of carbon road bikes available for the crossing.\\n\\nEach island along the route has a distinct character. Innoshima was the stronghold of the Murakami Suigun, a powerful naval clan who controlled the Inland Sea shipping lanes from the 14th to 16th centuries — their castle ruins overlook the strait. Ikuchijima is home to Kosanji Temple, an astonishing 20th-century complex where a wealthy businessman reproduced famous structures from across Japan in miniature, including a replica of Nikkō\'s ornate Yōmeimon Gate. The temple\'s hilltop terrace, clad in Italian Carrara marble (an incongruous choice that somehow works), offers panoramic views across the island-dotted sea. Omishima, the largest island, is dominated by Oyamazumi Shrine, whose treasury holds approximately 80% of all nationally designated Important Cultural Properties in the category of armor and weapons — a staggering concentration of samurai heritage in an unlikely island setting.\\n\\nThe bridges themselves are engineering marvels and the route\'s visual highlights. The Tatara Bridge, at 1,480 meters, is one of the world\'s longest cable-stayed spans, and the cycling lane crosses at a height that puts riders eye-level with seabirds and the masts of passing cargo ships. The gentle spiral ramps that carry cyclists up to bridge level — a design innovation copied worldwide — eliminate the steep approach grades that would otherwise make the crossings inaccessible to casual riders. The Seto Inland Sea\'s protected waters, dotted with hundreds of small islands, create a landscape of almost painterly beauty: fishing boats, oyster rafts, the distant silhouettes of the Shikoku mountains, and the play of light on water that shifts from silver to gold to deep blue through the day. Local food is exceptional: Setoda island\'s Dolce gelato shop makes Italian-style gelato with locally grown lemons and hassaku citrus; the islands\' octopus, caught in the strong tidal currents, is famous across Japan; and the mikan (mandarin oranges) are so sweet they\'re sold as luxury fruit on the mainland. Cherry blossom season (late March to mid-April) transforms the route into a pink-and-white dreamscape, while November\'s autumn colors set the temple gardens ablaze.',
        encyclopediaImages: [
          { url: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1600&q=85', caption: 'The Tatara Bridge — one of the world\'s longest cable-stayed spans, with dedicated cycling lane', afterParagraph: 3 },
          { url: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=1600&q=85', caption: 'Cherry blossom season along the Shimanami Kaido — Japan at its most beautiful', afterParagraph: 0 }
        ],
        image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=1600&q=85',
        country: 'Japan', region: 'Seto Inland Sea', flag: '🇯🇵', tags: ['flat', 'coastal', 'island-hopping', 'beginner-friendly', 'iconic'], isNew: true, isFeatured: false,
        effortCategory: 'full-day-easy',
        accessibleFromBases: ['onomichi'],
        confidence: { waterFrequency: 'every-5km', phoneSignal: 'excellent', nearestBikeShop: 'Onomichi 0km (at start)', surfaceBreakdown: '100% asphalt (dedicated cycling path)', emergencyContacts: '+81 110', offlineMapAvailable: true }
      }
    ];

    /* ═══════════════════════════════════════════
       PARTNERS DATABASE — 18 partners
       ═══════════════════════════════════════════ */
    var PARTNERS_DATABASE = [
      // ── FUERTEVENTURA PARTNERS ──
      {
        id: 'p-fuerte-playitas', name: 'Playitas Resort', destinationId: 'fuerteventura', category: 'hotel', isGoldenKey: true, priceFrom: 95,
        amenities: ['Pool', 'Restaurant', 'Spa', 'Airport shuttle'], cyclingAmenities: ['Locked bike storage', 'Wash station', 'Workshop tools', 'Route maps'],
        addons: [{ name: 'Bike wash & tune-up', price: 15, unit: 'session' }, { name: 'Performance massage', price: 45, unit: '60min' }, { name: 'Nutrition pack (gels+electrolytes)', price: 12, unit: 'day' }],
        description: 'The Canaries\' premier sports resort with dedicated cycling center, 50m pool, and direct access to the Betancuria climb.', rating: 4.8, reviewCount: 342,
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=85'
      },
      {
        id: 'p-fuerte-bike-station', name: 'Fuerte Bike Station', destinationId: 'fuerteventura', category: 'rental', isGoldenKey: false, priceFrom: 35,
        amenities: ['Shop', 'Fitting service'], cyclingAmenities: ['Canyon/Specialized fleet', 'Carbon road & gravel bikes', 'Saddle bag kit included', 'GPS preloaded routes'],
        addons: [{ name: 'Power meter upgrade', price: 15, unit: 'day' }, { name: 'Bike fitting session', price: 40, unit: 'session' }],
        description: 'Premium bike rental with Canyon Endurace and Specialized Diverge fleet. Professional fitting and preloaded GPS routes.', rating: 4.6, reviewCount: 178,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=85'
      },
      {
        id: 'p-fuerte-wind-rides', name: 'Wind Rides Fuerte', destinationId: 'fuerteventura', category: 'guide', isGoldenKey: true, priceFrom: 65,
        amenities: ['Support vehicle', 'Snacks & water'], cyclingAmenities: ['Group rides (4-8)', 'Solo guide option', 'Mechanical support', 'Photography'],
        addons: [{ name: 'Private guide upgrade', price: 40, unit: 'day' }, { name: 'Drone video package', price: 80, unit: 'ride' }],
        description: 'Local guides who know every wind pattern and shortcut. Small group rides with support vehicle and mechanical backup.', rating: 4.9, reviewCount: 96,
        image: 'https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?w=1200&q=85'
      },
      // ── ROMANIA PARTNERS ──
      {
        id: 'p-ro-hilton-sibiu', name: 'Hilton Sibiu', destinationId: 'romania', category: 'hotel', isGoldenKey: true, priceFrom: 78,
        amenities: ['Restaurant', 'Spa', 'Gym', 'Parking'], cyclingAmenities: ['Secure bike room', 'Bike wash area', 'Early breakfast (5:30am)', 'GPX library'],
        addons: [{ name: 'Recovery massage', price: 35, unit: '60min' }, { name: 'Packed lunch', price: 12, unit: 'day' }, { name: 'Late checkout', price: 25, unit: 'stay' }],
        description: '4-star hotel in Sibiu\'s historic center. 5-minute drive from the Transfăgărășan start. Early cyclist breakfast and secure bike storage.', rating: 4.7, reviewCount: 520,
        image: 'https://images.unsplash.com/photo-1652608861195-54d06fa5c601?w=1200&q=85'
      },
      {
        id: 'p-ro-bikero', name: 'BikeRo Adventures', destinationId: 'romania', category: 'guide', isGoldenKey: true, priceFrom: 55,
        amenities: ['Support vehicle', 'Mechanic on call', 'Snacks & hydration'], cyclingAmenities: ['Transfăgărășan specialist', 'Groups 2-10', 'Multi-day tours', 'Bear-aware routes'],
        addons: [{ name: 'Private guide', price: 45, unit: 'day' }, { name: 'Summit photo package', price: 30, unit: 'ride' }, { name: 'Cultural stops addon', price: 20, unit: 'day' }],
        description: 'Romania\'s top cycling guide service. Transfăgărășan specialists with 8 years of summit experience. Support vehicle on every ride.', rating: 4.9, reviewCount: 124,
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=85'
      },
      {
        id: 'p-ro-bike-rental', name: 'Carpathian Cycles', destinationId: 'romania', category: 'rental', isGoldenKey: false, priceFrom: 30,
        amenities: ['Shop', 'Repairs'], cyclingAmenities: ['Trek/Giant fleet', 'Road & gravel options', 'Spare parts inventory', 'Delivery to hotel'],
        addons: [{ name: 'Power meter bike', price: 20, unit: 'day' }, { name: 'Spare wheel set', price: 10, unit: 'day' }],
        description: 'Reliable rental fleet based in Sibiu. Trek Émonda and Giant Defy road bikes. Delivery to any partner hotel.', rating: 4.4, reviewCount: 89,
        image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=1200&q=85'
      },
      {
        id: 'p-ro-shuttle', name: 'TransCarpath Shuttle', destinationId: 'romania', category: 'shuttle', isGoldenKey: false, priceFrom: 25,
        amenities: ['Minivan fleet', 'Bike racks'], cyclingAmenities: ['Airport transfers (OTP/SBZ)', 'Route start shuttles', 'Bike-safe vehicles', 'Multi-day logistics'],
        addons: [{ name: 'Bike box storage', price: 5, unit: 'day' }, { name: 'Extra luggage', price: 10, unit: 'transfer' }],
        description: 'Dedicated cycling shuttle service covering all Romanian routes. Bike-safe minivans with professional racks. Airport to trailhead, no stress.', rating: 4.5, reviewCount: 67,
        image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&q=85'
      },
      {
        id: 'p-ro-posada', name: 'Hotel Posada', destinationId: 'romania', category: 'hotel', isGoldenKey: false, priceFrom: 52,
        amenities: ['Restaurant', 'Garden', 'Parking'], cyclingAmenities: ['Bike storage', 'Packed lunch available', 'Route advice', 'Flexible meals'],
        addons: [{ name: 'Traditional dinner', price: 18, unit: 'person' }, { name: 'Țuică tasting', price: 8, unit: 'session' }],
        description: 'Charming hotel in Curtea de Argeș at the southern base of the Transfăgărășan. Perfect overnight stop on Day 2.', rating: 4.3, reviewCount: 156,
        image: 'https://images.unsplash.com/photo-1691840902964-34607e8a57a2?w=1200&q=85'
      },
      {
        id: 'p-ro-recovery', name: 'Therme Sibiu', destinationId: 'romania', category: 'physio', isGoldenKey: true, priceFrom: 40,
        amenities: ['Thermal pools', 'Sauna', 'Steam room'], cyclingAmenities: ['Sports massage', 'Compression therapy', 'Ice bath', 'Stretching area'],
        addons: [{ name: 'Deep tissue massage', price: 50, unit: '60min' }, { name: 'Cryotherapy session', price: 35, unit: 'session' }],
        description: 'Thermal spa with dedicated sports recovery center. Post-ride ritual: thermal pool → ice bath → massage. Golden Key members get priority booking.', rating: 4.6, reviewCount: 230,
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&q=85'
      },
      // ── CRETE PARTNERS ──
      {
        id: 'p-crete-anemos', name: 'Anemos Luxury Grand Resort', destinationId: 'crete', category: 'hotel', isGoldenKey: true, priceFrom: 110,
        amenities: ['Beach access', '5 restaurants', 'Spa', 'Pool complex'], cyclingAmenities: ['Pro bike room', 'Mechanic on site', 'Cyclist breakfast (5am)', 'Laundry express'],
        addons: [{ name: 'Sports massage', price: 55, unit: '60min' }, { name: 'Nutrition consultation', price: 40, unit: 'session' }],
        description: '5-star resort on Crete\'s north coast. Dedicated cycling program with on-site mechanic, 5am breakfast, and climate-controlled bike storage.', rating: 4.8, reviewCount: 410,
        image: 'https://images.unsplash.com/photo-1697753581573-9ecb0fefcbae?w=1200&q=85'
      },
      {
        id: 'p-crete-bikes', name: 'Cretan Cycling', destinationId: 'crete', category: 'rental', isGoldenKey: false, priceFrom: 38,
        amenities: ['Shop', 'Repairs', 'Accessories'], cyclingAmenities: ['Pinarello/Bianchi fleet', 'E-bike option', 'Spare parts', 'GPS routes preloaded'],
        addons: [{ name: 'E-bike upgrade', price: 25, unit: 'day' }, { name: 'Spare battery', price: 15, unit: 'day' }],
        description: 'Premium Italian bike fleet. Pinarello Dogma and Bianchi Oltre road bikes, plus Specialized Turbo e-bikes for the gorge routes.', rating: 4.5, reviewCount: 134,
        image: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=1200&q=85'
      },
      {
        id: 'p-crete-guide', name: 'Minoan Rides', destinationId: 'crete', category: 'guide', isGoldenKey: false, priceFrom: 50,
        amenities: ['Support vehicle', 'Water & snacks'], cyclingAmenities: ['Group & private rides', 'Cultural stops', 'Taverna lunch included', 'Photography'],
        addons: [{ name: 'Private guide', price: 55, unit: 'day' }, { name: 'Olive oil tasting detour', price: 15, unit: 'ride' }],
        description: 'Guided rides combining cycling with Cretan culture. Every ride includes a taverna lunch stop with local wine and olive oil.', rating: 4.7, reviewCount: 78,
        image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1200&q=85'
      },
      // ── CLASSIC DESTINATION PARTNERS ──
      {
        id: 'p-mallorca-hotel', name: 'Hotel Son Brull', destinationId: 'mallorca', category: 'hotel', isGoldenKey: true, priceFrom: 145,
        amenities: ['Pool', 'Restaurant', 'Spa', 'Wine cellar'], cyclingAmenities: ['Pro bike room', 'Wash station', 'Route planning desk', 'Cyclist menu'],
        addons: [{ name: 'Wine & cycling pairing dinner', price: 65, unit: 'person' }],
        description: 'Boutique hotel in Pollença, gateway to the Tramuntana. Beloved by pro teams. World-class cuisine meets cyclist-specific service.', rating: 4.9, reviewCount: 280,
        image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=1200&q=85'
      },
      {
        id: 'p-tuscany-hotel', name: 'Castello di Velona', destinationId: 'tuscany', category: 'hotel', isGoldenKey: true, priceFrom: 160,
        amenities: ['Infinity pool', 'Michelin restaurant', 'Spa', 'Vineyard'], cyclingAmenities: ['Bike storage', 'Route curation', 'Strade Bianche specialist', 'Wine & ride packages'],
        addons: [{ name: 'Chianti tasting ride', price: 45, unit: 'ride' }],
        description: '11th-century castle converted to 5-star resort in the Val d\'Orcia. Direct access to Strade Bianche gravel sectors.', rating: 4.9, reviewCount: 195,
        image: 'https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=1200&q=85'
      },
      {
        id: 'p-dolomites-hotel', name: 'Hotel Adler Dolomiti', destinationId: 'dolomites', category: 'hotel', isGoldenKey: true, priceFrom: 135,
        amenities: ['Spa', 'Restaurant', 'Indoor pool', 'Ski room'], cyclingAmenities: ['Bike vault', 'Workshop', 'Guided rides', 'Altitude training info'],
        addons: [{ name: 'Guided Stelvio ride', price: 80, unit: 'ride' }],
        description: 'Luxury mountain hotel at the base of the Stelvio. 25m pool for recovery, gourmet half-board, and guided summit rides.', rating: 4.8, reviewCount: 310,
        image: 'https://images.unsplash.com/photo-1564574685150-74a84d02d695?w=1200&q=85'
      },
      {
        id: 'p-alps-hotel', name: 'Le Grand Aigle', destinationId: 'alps', category: 'hotel', isGoldenKey: false, priceFrom: 88,
        amenities: ['Restaurant', 'Spa', 'Parking'], cyclingAmenities: ['Bike room', 'Route maps', 'Packed lunches', 'Flexible dining'],
        addons: [{ name: 'Col hunting package (3 cols)', price: 95, unit: 'package' }],
        description: 'Mountain hotel in Le Bourg-d\'Oisans at the base of Alpe d\'Huez and gateway to the Galibier. Cyclist-friendly since 1985.', rating: 4.5, reviewCount: 420,
        image: 'https://images.unsplash.com/photo-1760972564466-7ea892898b8e?w=1200&q=85'
      },
      {
        id: 'p-japan-hotel', name: 'Onomichi U2', destinationId: 'japan', category: 'hotel', isGoldenKey: false, priceFrom: 120,
        amenities: ['Restaurant', 'Bar', 'Gallery', 'Shop'], cyclingAmenities: ['Giant bikes on site', 'Bike-through check-in', 'Repair tools', 'Luggage forward service'],
        addons: [{ name: 'Giant rental (full carbon)', price: 45, unit: 'day' }, { name: 'Luggage forwarding to Imabari', price: 20, unit: 'bag' }],
        description: 'Converted waterfront warehouse designed for cyclists. Ride your bike into reception. Home base for the Shimanami Kaido.', rating: 4.7, reviewCount: 510,
        image: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=1200&q=85'
      },
      {
        id: 'p-japan-guide', name: 'Shimanami Cycling Tours', destinationId: 'japan', category: 'guide', isGoldenKey: false, priceFrom: 70,
        amenities: ['Support van', 'Snacks', 'Insurance'], cyclingAmenities: ['English-speaking guide', 'Cultural stops', 'Temple visits', 'Ferry connections'],
        addons: [{ name: 'Sashimi lunch experience', price: 30, unit: 'ride' }, { name: 'Onsen evening package', price: 25, unit: 'person' }],
        description: 'Expert English-speaking guides for the Shimanami Kaido. Cultural immersion with cycling — temples, citrus farms, artisan workshops.', rating: 4.8, reviewCount: 145,
        image: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=1200&q=85'
      }
    ];

    /* ═══════════════════════════════════════════
       AIRLINES DATA — 6 airlines with bike fees
       ═══════════════════════════════════════════ */
    var AIRLINES_DATA = [
      {
        name: 'Ryanair', bikeFee: 60, bikePolicy: 'Bike box max 30kg, must be pre-booked online. No soft bags.',
        routes: [{ from: 'London STN', to: 'Fuerteventura', basePrice: 45, duration: '4h 30m' }, { from: 'London STN', to: 'Sibiu', basePrice: 35, duration: '3h 15m' }, { from: 'London STN', to: 'Chania', basePrice: 55, duration: '4h 00m' }]
      },
      {
        name: 'Wizz Air', bikeFee: 45, bikePolicy: 'Bike box or bag max 32kg. Online pre-booking required.',
        routes: [{ from: 'London LTN', to: 'Sibiu', basePrice: 30, duration: '3h 10m' }, { from: 'London LTN', to: 'Bucharest', basePrice: 25, duration: '3h 25m' }, { from: 'Vienna', to: 'Sibiu', basePrice: 22, duration: '1h 45m' }]
      },
      {
        name: 'easyJet', bikeFee: 55, bikePolicy: 'Bike bag/box max 32kg, 300cm total dimensions. Book via customer service.',
        routes: [{ from: 'London LGW', to: 'Fuerteventura', basePrice: 65, duration: '4h 25m' }, { from: 'London LGW', to: 'Chania', basePrice: 75, duration: '3h 55m' }, { from: 'London LGW', to: 'Palma (Mallorca)', basePrice: 50, duration: '2h 20m' }]
      },
      {
        name: 'TAROM', bikeFee: 40, bikePolicy: 'Bike box max 32kg included in checked baggage for sports equipment. Best policy for Romania.',
        routes: [{ from: 'London LHR', to: 'Bucharest', basePrice: 120, duration: '3h 20m' }, { from: 'Bucharest', to: 'Sibiu', basePrice: 35, duration: '0h 55m' }, { from: 'Munich', to: 'Sibiu', basePrice: 85, duration: '2h 00m' }]
      },
      {
        name: 'Eurowings', bikeFee: 50, bikePolicy: 'Bike must be in rigid box. Handlebars turned, pedals removed. Max 31kg.',
        routes: [{ from: 'Düsseldorf', to: 'Fuerteventura', basePrice: 80, duration: '4h 40m' }, { from: 'Munich', to: 'Chania', basePrice: 70, duration: '2h 50m' }, { from: 'Düsseldorf', to: 'Palma (Mallorca)', basePrice: 55, duration: '2h 30m' }]
      },
      {
        name: 'Aegean Airlines', bikeFee: 35, bikePolicy: 'Bicycle as sports equipment, max 32kg. Most generous policy for Greece.',
        routes: [{ from: 'Athens', to: 'Chania', basePrice: 45, duration: '0h 50m' }, { from: 'London LHR', to: 'Athens', basePrice: 95, duration: '3h 40m' }, { from: 'Thessaloniki', to: 'Chania', basePrice: 40, duration: '1h 10m' }]
      }
    ];

    /* ═══════════════════════════════════════════
       DEPARTURE CITIES — global autocomplete
       ═══════════════════════════════════════════ */
    var DEPARTURE_CITIES = [
      // Europe
      { name: 'London', code: 'LON', country: 'United Kingdom' },
      { name: 'London Stansted', code: 'STN', country: 'United Kingdom' },
      { name: 'London Gatwick', code: 'LGW', country: 'United Kingdom' },
      { name: 'London Heathrow', code: 'LHR', country: 'United Kingdom' },
      { name: 'London Luton', code: 'LTN', country: 'United Kingdom' },
      { name: 'Manchester', code: 'MAN', country: 'United Kingdom' },
      { name: 'Edinburgh', code: 'EDI', country: 'United Kingdom' },
      { name: 'Birmingham', code: 'BHX', country: 'United Kingdom' },
      { name: 'Dublin', code: 'DUB', country: 'Ireland' },
      { name: 'Paris', code: 'CDG', country: 'France' },
      { name: 'Lyon', code: 'LYS', country: 'France' },
      { name: 'Nice', code: 'NCE', country: 'France' },
      { name: 'Marseille', code: 'MRS', country: 'France' },
      { name: 'Berlin', code: 'BER', country: 'Germany' },
      { name: 'Munich', code: 'MUC', country: 'Germany' },
      { name: 'Frankfurt', code: 'FRA', country: 'Germany' },
      { name: 'Hamburg', code: 'HAM', country: 'Germany' },
      { name: 'Düsseldorf', code: 'DUS', country: 'Germany' },
      { name: 'Cologne', code: 'CGN', country: 'Germany' },
      { name: 'Stuttgart', code: 'STR', country: 'Germany' },
      { name: 'Amsterdam', code: 'AMS', country: 'Netherlands' },
      { name: 'Brussels', code: 'BRU', country: 'Belgium' },
      { name: 'Zurich', code: 'ZRH', country: 'Switzerland' },
      { name: 'Geneva', code: 'GVA', country: 'Switzerland' },
      { name: 'Vienna', code: 'VIE', country: 'Austria' },
      { name: 'Madrid', code: 'MAD', country: 'Spain' },
      { name: 'Barcelona', code: 'BCN', country: 'Spain' },
      { name: 'Palma de Mallorca', code: 'PMI', country: 'Spain' },
      { name: 'Malaga', code: 'AGP', country: 'Spain' },
      { name: 'Rome', code: 'FCO', country: 'Italy' },
      { name: 'Milan', code: 'MXP', country: 'Italy' },
      { name: 'Venice', code: 'VCE', country: 'Italy' },
      { name: 'Florence', code: 'FLR', country: 'Italy' },
      { name: 'Naples', code: 'NAP', country: 'Italy' },
      { name: 'Bologna', code: 'BLQ', country: 'Italy' },
      { name: 'Lisbon', code: 'LIS', country: 'Portugal' },
      { name: 'Porto', code: 'OPO', country: 'Portugal' },
      { name: 'Copenhagen', code: 'CPH', country: 'Denmark' },
      { name: 'Stockholm', code: 'ARN', country: 'Sweden' },
      { name: 'Oslo', code: 'OSL', country: 'Norway' },
      { name: 'Helsinki', code: 'HEL', country: 'Finland' },
      { name: 'Warsaw', code: 'WAW', country: 'Poland' },
      { name: 'Krakow', code: 'KRK', country: 'Poland' },
      { name: 'Prague', code: 'PRG', country: 'Czech Republic' },
      { name: 'Budapest', code: 'BUD', country: 'Hungary' },
      { name: 'Bucharest', code: 'OTP', country: 'Romania' },
      { name: 'Cluj-Napoca', code: 'CLJ', country: 'Romania' },
      { name: 'Sibiu', code: 'SBZ', country: 'Romania' },
      { name: 'Athens', code: 'ATH', country: 'Greece' },
      { name: 'Thessaloniki', code: 'SKG', country: 'Greece' },
      { name: 'Istanbul', code: 'IST', country: 'Turkey' },
      { name: 'Zagreb', code: 'ZAG', country: 'Croatia' },
      { name: 'Belgrade', code: 'BEG', country: 'Serbia' },
      { name: 'Sofia', code: 'SOF', country: 'Bulgaria' },
      { name: 'Reykjavik', code: 'KEF', country: 'Iceland' },
      // North America
      { name: 'New York', code: 'JFK', country: 'United States' },
      { name: 'New York Newark', code: 'EWR', country: 'United States' },
      { name: 'Los Angeles', code: 'LAX', country: 'United States' },
      { name: 'San Francisco', code: 'SFO', country: 'United States' },
      { name: 'Chicago', code: 'ORD', country: 'United States' },
      { name: 'Miami', code: 'MIA', country: 'United States' },
      { name: 'Boston', code: 'BOS', country: 'United States' },
      { name: 'Washington DC', code: 'IAD', country: 'United States' },
      { name: 'Atlanta', code: 'ATL', country: 'United States' },
      { name: 'Dallas', code: 'DFW', country: 'United States' },
      { name: 'Denver', code: 'DEN', country: 'United States' },
      { name: 'Seattle', code: 'SEA', country: 'United States' },
      { name: 'Portland', code: 'PDX', country: 'United States' },
      { name: 'Houston', code: 'IAH', country: 'United States' },
      { name: 'Phoenix', code: 'PHX', country: 'United States' },
      { name: 'Minneapolis', code: 'MSP', country: 'United States' },
      { name: 'Toronto', code: 'YYZ', country: 'Canada' },
      { name: 'Vancouver', code: 'YVR', country: 'Canada' },
      { name: 'Montreal', code: 'YUL', country: 'Canada' },
      { name: 'Mexico City', code: 'MEX', country: 'Mexico' },
      // South America
      { name: 'São Paulo', code: 'GRU', country: 'Brazil' },
      { name: 'Rio de Janeiro', code: 'GIG', country: 'Brazil' },
      { name: 'Buenos Aires', code: 'EZE', country: 'Argentina' },
      { name: 'Bogotá', code: 'BOG', country: 'Colombia' },
      { name: 'Lima', code: 'LIM', country: 'Peru' },
      { name: 'Santiago', code: 'SCL', country: 'Chile' },
      // Asia
      { name: 'Tokyo', code: 'NRT', country: 'Japan' },
      { name: 'Osaka', code: 'KIX', country: 'Japan' },
      { name: 'Seoul', code: 'ICN', country: 'South Korea' },
      { name: 'Beijing', code: 'PEK', country: 'China' },
      { name: 'Shanghai', code: 'PVG', country: 'China' },
      { name: 'Hong Kong', code: 'HKG', country: 'Hong Kong' },
      { name: 'Singapore', code: 'SIN', country: 'Singapore' },
      { name: 'Bangkok', code: 'BKK', country: 'Thailand' },
      { name: 'Taipei', code: 'TPE', country: 'Taiwan' },
      { name: 'Delhi', code: 'DEL', country: 'India' },
      { name: 'Mumbai', code: 'BOM', country: 'India' },
      { name: 'Bangalore', code: 'BLR', country: 'India' },
      { name: 'Dubai', code: 'DXB', country: 'UAE' },
      { name: 'Abu Dhabi', code: 'AUH', country: 'UAE' },
      { name: 'Doha', code: 'DOH', country: 'Qatar' },
      { name: 'Tel Aviv', code: 'TLV', country: 'Israel' },
      { name: 'Kuala Lumpur', code: 'KUL', country: 'Malaysia' },
      { name: 'Jakarta', code: 'CGK', country: 'Indonesia' },
      { name: 'Manila', code: 'MNL', country: 'Philippines' },
      { name: 'Ho Chi Minh City', code: 'SGN', country: 'Vietnam' },
      // Africa
      { name: 'Johannesburg', code: 'JNB', country: 'South Africa' },
      { name: 'Cape Town', code: 'CPT', country: 'South Africa' },
      { name: 'Cairo', code: 'CAI', country: 'Egypt' },
      { name: 'Nairobi', code: 'NBO', country: 'Kenya' },
      { name: 'Casablanca', code: 'CMN', country: 'Morocco' },
      { name: 'Lagos', code: 'LOS', country: 'Nigeria' },
      // Oceania
      { name: 'Sydney', code: 'SYD', country: 'Australia' },
      { name: 'Melbourne', code: 'MEL', country: 'Australia' },
      { name: 'Brisbane', code: 'BNE', country: 'Australia' },
      { name: 'Perth', code: 'PER', country: 'Australia' },
      { name: 'Auckland', code: 'AKL', country: 'New Zealand' },
      { name: 'Wellington', code: 'WLG', country: 'New Zealand' }
    ];

    /* ═══════════════════════════════════════════
       BIKE FEES — keyed by IATA airline code
       ═══════════════════════════════════════════ */
    var BIKE_FEES = {
      FR: { fee: 60, policy: 'Bike box max 30kg, must be pre-booked online. No soft bags.', maxKg: 30 },
      W6: { fee: 45, policy: 'Bike box or bag max 32kg. Online pre-booking required.', maxKg: 32 },
      U2: { fee: 55, policy: 'Bike bag/box max 32kg, 300cm total dimensions. Book via customer service.', maxKg: 32 },
      LH: { fee: 70, policy: 'Bicycle as sports baggage, rigid case required. Max 32kg.', maxKg: 32 },
      BA: { fee: 65, policy: 'Bike must be in rigid case, max 23kg per bag. Pre-book recommended.', maxKg: 23 },
      AF: { fee: 65, policy: 'Bicycle accepted as sports equipment. Rigid packaging required. Max 23kg.', maxKg: 23 },
      IB: { fee: 50, policy: 'Bike box/bag, handlebars turned, pedals removed. Max 23kg.', maxKg: 23 },
      VY: { fee: 50, policy: 'Sports equipment online pre-booking. Rigid packaging. Max 32kg.', maxKg: 32 },
      SK: { fee: 60, policy: 'Bike as special baggage, rigid case. Max 32kg. Pre-book required.', maxKg: 32 },
      TK: { fee: 40, policy: 'Bicycle accepted free as checked baggage on some routes. Max 23kg.', maxKg: 23 },
      RO: { fee: 40, policy: 'Bike box max 32kg included in checked baggage for sports equipment.', maxKg: 32 },
      A3: { fee: 35, policy: 'Bicycle as sports equipment, max 32kg. Most generous policy for Greece.', maxKg: 32 },
      EW: { fee: 50, policy: 'Bike must be in rigid box. Handlebars turned, pedals removed. Max 31kg.', maxKg: 31 },
      OS: { fee: 70, policy: 'Bicycle as sports baggage. Rigid case required. Max 32kg.', maxKg: 32 },
      AZ: { fee: 60, policy: 'Bike accepted as sports equipment. Rigid packaging. Max 23kg.', maxKg: 23 },
      KL: { fee: 65, policy: 'Bicycle in rigid case. Max 32kg. Pre-book via customer service.', maxKg: 32 },
      LX: { fee: 70, policy: 'Bicycle as sports baggage. Rigid case. Max 32kg.', maxKg: 32 },
      SN: { fee: 65, policy: 'Bicycle in rigid packaging. Max 32kg. Pre-book required.', maxKg: 32 },
      TP: { fee: 55, policy: 'Bicycle as special baggage. Rigid packaging. Max 32kg.', maxKg: 32 },
      NK: { fee: 75, policy: 'Oversized item, must be pre-booked. Max 100lbs.', maxKg: 45 },
      TO: { fee: 50, policy: 'Bicycle as sports equipment. Pre-booking online. Max 32kg.', maxKg: 32 },
      D8: { fee: 55, policy: 'Bicycle as sports equipment. Online pre-booking. Max 32kg.', maxKg: 32 },
      QS: { fee: 45, policy: 'Bicycle as sports equipment. Max 32kg. Pre-book online.', maxKg: 32 },
      PC: { fee: 40, policy: 'Bicycle as oversized baggage. Max 32kg.', maxKg: 32 },
      __default: { fee: 55, policy: 'Estimated fee — check airline website for exact bicycle policy.', maxKg: 32 }
    };

    /* ═══════════════════════════════════════════
       CONFIGURATOR STATE — 7-step wizard
       ═══════════════════════════════════════════ */
    var CONFIGURATOR_STATE = {
      currentStep: 1,
      mode: 'standard',
      destination: null,
      selectedBase: null,
      dates: { start: null, end: null, nights: 7 },
      selectedRoutes: [],
      accommodation: [],
      transport: { flight: null, shuttles: [], departureCity: null, flightSource: 'static' },
      services: { guide: null, rental: null, addons: [] },
      itinerary: [],
      pricing: { subtotal: 0, memberDiscount: 0, goldenKeyPremium: 0, total: 0 },
      submitted: false
    };

    // Lookup maps for O(1) access by id
    var ROUTE_BY_ID = buildLookupMap(ROUTE_DATABASE);
    var PARTNER_BY_ID = buildLookupMap(PARTNERS_DATABASE);
    var DESTINATION_BY_ID = buildLookupMap(DESTINATIONS);
    var REGION_BY_ID = buildLookupMap(REGIONS);

    var CONFIGURATOR_STEPS = [
      { num: 1, label: 'Destination', icon: 'distance' },
      { num: 2, label: 'Dates', icon: 'temp' },
      { num: 3, label: 'Routes', icon: 'bike' },
      { num: 4, label: 'Stay', icon: 'hotel' },
      { num: 5, label: 'Transport', icon: 'plane' },
      { num: 6, label: 'Services', icon: 'wrench' },
      { num: 7, label: 'Review', icon: 'document' }
    ];

    /* ═══════════════════════════════════════════
       3. PRE-DEPARTURE CHECKLIST
       ═══════════════════════════════════════════ */
    const CHECKLIST_DATA = [
      {
        name: 'Gear', icon: 'bike', iconClass: 'gear',
        items: [
          { text: 'Road/gravel bike serviced & packed', priority: 'essential' },
          { text: 'Helmet, shoes, cleats & pedals', priority: 'essential' },
          { text: 'Cycling kit (2\u20133 sets) + chamois cream', priority: 'essential' },
          { text: 'Spare tubes, CO\u2082, multi-tool, tire levers', priority: 'recommended' }
        ]
      },
      {
        name: 'Documents', icon: 'document', iconClass: 'docs',
        items: [
          { text: 'Passport & travel insurance (bike cover)', priority: 'essential' },
          { text: 'Booking confirmations printed/saved offline', priority: 'essential' },
          { text: 'GPX files downloaded to device', priority: 'recommended' },
          { text: 'Emergency contacts card in jersey pocket', priority: 'optional' }
        ]
      },
      {
        name: 'Health', icon: 'health', iconClass: 'health',
        items: [
          { text: 'Sunscreen SPF 50+ (sport/sweat-proof)', priority: 'essential' },
          { text: 'Electrolyte tabs & energy gels for ride days', priority: 'essential' },
          { text: 'First-aid kit: bandages, antiseptic, tape', priority: 'recommended' },
          { text: 'Foam roller or massage ball for recovery', priority: 'optional' }
        ]
      },
      {
        name: 'Logistics', icon: 'plane', iconClass: 'logistics',
        items: [
          { text: 'Bike box or bag (check airline dimensions)', priority: 'essential' },
          { text: 'Airport transfer with bike capacity booked', priority: 'recommended' },
          { text: 'Hotel bike storage confirmed', priority: 'recommended' },
          { text: 'Local SIM or eSIM for data abroad', priority: 'optional' }
        ]
      },
      {
        name: 'Tech', icon: 'device', iconClass: 'tech',
        items: [
          { text: 'Bike computer charged + mounts', priority: 'essential' },
          { text: 'Phone mount & power bank (10,000mAh+)', priority: 'recommended' },
          { text: 'Action camera + chest/helmet mount', priority: 'optional' },
          { text: 'ANT+/Bluetooth sensors (HR, cadence, power)', priority: 'optional' }
        ]
      }
    ];

    var TOTAL_ITEMS = CHECKLIST_DATA.reduce(function (s, c) { return s + c.items.length; }, 0);
    var checkedItems = new Set();

    function loadChecklist() {
      try {
        var saved = localStorage.getItem('rc-checklist');
        if (saved) checkedItems = new Set(JSON.parse(saved));
      } catch (e) { /* ignore */ }
    }

    function saveChecklist() {
      localStorage.setItem('rc-checklist', JSON.stringify(Array.from(checkedItems)));
    }

    function renderChecklist() {
      var container = document.getElementById('clCategories');
      container.innerHTML = CHECKLIST_DATA.map(function (cat, ci) {
        var checkedCount = cat.items.filter(function (_, ii) { return checkedItems.has(ci + '-' + ii); }).length;
        return '<div class="cl-category' + (ci === 0 ? ' open' : '') + '">' +
          '<div class="cl-cat-header" onclick="toggleCategory(this)">' +
          '<div class="cl-cat-icon ' + cat.iconClass + '">' + VX_ICONS[cat.icon] + '</div>' +
          '<div class="cl-cat-title">' + cat.name + '</div>' +
          '<div class="cl-cat-count">' + checkedCount + '/' + cat.items.length + '</div>' +
          '<div class="cl-cat-arrow">\u25BE</div>' +
          '</div>' +
          '<div class="cl-items"><div class="cl-items-inner">' + cat.items.map(function (item, ii) {
            var key = ci + '-' + ii;
            return '<div class="cl-item' + (checkedItems.has(key) ? ' checked' : '') + '" onclick="toggleItem(this,\'' + key + '\',' + ci + ')">' +
              '<div class="cl-checkbox"></div>' +
              '<div class="cl-item-text">' + item.text + '</div>' +
              '<div class="cl-item-priority ' + item.priority + '">' + item.priority + '</div>' +
              '</div>';
          }).join('') + '</div></div>' +
          '</div>';
      }).join('');
      updateProgress();
    }

    function toggleCategory(header) {
      header.parentElement.classList.toggle('open');
    }

    function toggleItem(el, key, catIdx) {
      el.classList.toggle('checked');
      if (checkedItems.has(key)) checkedItems.delete(key);
      else checkedItems.add(key);
      saveChecklist();
      var cat = el.closest('.cl-category');
      if (!cat || catIdx >= CHECKLIST_DATA.length) { updateProgress(); return; }
      var count = cat.querySelectorAll('.cl-item.checked').length;
      var total = CHECKLIST_DATA[catIdx].items.length;
      var countEl = cat.querySelector('.cl-cat-count');
      if (countEl) countEl.textContent = count + '/' + total;
      updateProgress();
    }

    function updateProgress() {
      var pct = Math.round((checkedItems.size / TOTAL_ITEMS) * 100);
      var circle = document.getElementById('clProgressCircle');
      var circumference = 2 * Math.PI * 80;
      circle.style.strokeDashoffset = circumference - (circumference * pct / 100);
      document.getElementById('clPct').textContent = pct + '%';
      document.getElementById('clSummary').innerHTML = '<strong>' + checkedItems.size + '</strong> of <strong>' + TOTAL_ITEMS + '</strong> items checked';
      // Mobile sticky bar
      var mFill = document.getElementById('clMobileFill');
      var mText = document.getElementById('clMobileText');
      if (mFill) mFill.style.width = pct + '%';
      if (mText) mText.textContent = checkedItems.size + '/' + TOTAL_ITEMS + ' done';
    }

    /* ═══════════════════════════════════════════
       4. THREE.JS GLOBE
       ═══════════════════════════════════════════ */
    var globeScene, globeCamera, globeRenderer, globeGroup, markerMeshes = [];
    var globeMarkers = []; // { regionId, dot, glow, ring, stem, intensity }
    var isGlobeInit = false, isDragging = false, autoRotate = true;
    var globeVisible = false, globeAnimId = null;
    var prevMouse = { x: 0, y: 0 }, mouseNDC;
    var raycaster;
    var globeMonth = new Date().getMonth() + 1;
    var globeSeasonality = true;

    function latLngToVec3(lat, lng, r) {
      var phi = (90 - lat) * (Math.PI / 180);
      var theta = (lng + 180) * (Math.PI / 180);
      return new THREE.Vector3(
        -r * Math.sin(phi) * Math.cos(theta),
        r * Math.cos(phi),
        r * Math.sin(phi) * Math.sin(theta)
      );
    }

    function createEarthCanvas() {
      var c = document.createElement('canvas');
      c.width = 2048; c.height = 1024;
      var ctx = c.getContext('2d');
      var grad = ctx.createLinearGradient(0, 0, 0, 1024);
      grad.addColorStop(0, '#0a1628');
      grad.addColorStop(0.5, '#0d1f3c');
      grad.addColorStop(1, '#0a1628');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 2048, 1024);
      ctx.fillStyle = '#1a3a2a';
      ctx.beginPath(); ctx.ellipse(1100, 350, 120, 100, 0, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.ellipse(1080, 550, 100, 180, -0.15, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.ellipse(1350, 320, 250, 130, 0.1, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.ellipse(500, 300, 180, 130, 0.2, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.ellipse(650, 600, 90, 170, 0.15, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.ellipse(1600, 620, 90, 60, 0.1, 0, Math.PI * 2); ctx.fill();
      var imageData = ctx.getImageData(0, 0, 2048, 1024);
      for (var i = 0; i < imageData.data.length; i += 4) {
        var noise = (Math.random() - 0.5) * 8;
        imageData.data[i] = Math.max(0, Math.min(255, imageData.data[i] + noise));
        imageData.data[i + 1] = Math.max(0, Math.min(255, imageData.data[i + 1] + noise));
        imageData.data[i + 2] = Math.max(0, Math.min(255, imageData.data[i + 2] + noise));
      }
      ctx.putImageData(imageData, 0, 0);
      return c;
    }

    function getRegionHeatmap(regionId, month) {
      var region = REGION_BY_ID[regionId];
      if (!region) return 0;
      var maxIntensity = 0;
      region.subGeoIds.forEach(function (sgId) {
        var dest = DESTINATION_BY_ID[sgId];
        if (dest && dest.season && dest.season.monthly) {
          var m = dest.season.monthly.find(function (mo) { return mo.month === month; });
          if (m && m.heatmapIntensity > maxIntensity) maxIntensity = m.heatmapIntensity;
        }
      });
      return maxIntensity;
    }

    function getRawHeatmap(regionId) {
      var region = REGION_BY_ID[regionId];
      if (!region) return 0;
      var total = 0, count = 0;
      region.subGeoIds.forEach(function (sgId) {
        var dest = DESTINATION_BY_ID[sgId];
        if (dest && dest.season && dest.season.monthly) {
          dest.season.monthly.forEach(function (mo) {
            total += mo.heatmapIntensity;
            count++;
          });
        }
      });
      return count > 0 ? total / count : 0;
    }

    function getEffectiveIntensity(regionId) {
      if (!globeSeasonality) return getRawHeatmap(regionId);
      return getRegionHeatmap(regionId, globeMonth);
    }

    function intensityToMarkerProps(intensity) {
      return {
        dotSize: 0.008 + intensity * 0.008,
        glowSize: 0.015 + intensity * 0.015,
        glowOpacity: 0.1 + intensity * 0.4,
        ringInner: 0.02 + intensity * 0.01,
        ringOuter: 0.025 + intensity * 0.02,
        ringOpacity: 0.15 + intensity * 0.35,
        stemOpacity: 0.3 + intensity * 0.3
      };
    }

    function seasonLabel(intensity) {
      if (intensity >= 0.7) return 'Peak Season';
      if (intensity >= 0.4) return 'Good Conditions';
      if (intensity > 0) return 'Shoulder Season';
      return 'Off Season';
    }

    function seasonColor(intensity) {
      if (intensity >= 0.7) return '#44D62C';
      if (intensity >= 0.4) return '#c9a96e';
      if (intensity > 0) return '#F59E0B';
      return '#EF4444';
    }

    function seasonLabelShort(intensity) {
      if (intensity >= 0.7) return 'Peak';
      if (intensity >= 0.4) return 'Good';
      if (intensity > 0) return 'Shoulder';
      return 'Off';
    }

    function buildOverlayHero(data) {
      return '<div class="exp-hero">' +
        '<img src="' + data.image + '" alt="' + data.name + '">' +
        '<div class="exp-hero-overlay"></div>' +
        '<div class="exp-hero-content">' +
        '<div class="exp-eyebrow" style="color:' + data.color + '">' + data.continent + ' \u00B7 ' + data.country + '</div>' +
        '<div class="exp-title">' + data.name.toUpperCase() + '</div>' +
        '<div class="exp-tagline">' + data.tagline + '</div>' +
        '</div>' +
        '</div>';
    }

    function buildStatBar(stats) {
      return '<div class="exp-stats">' +
        stats.map(function (s) {
          return '<div class="exp-stat">' +
            '<div class="exp-stat-label">' + s.label + '</div>' +
            '<div class="exp-stat-value"' + (s.color ? ' style="color:' + s.color + '"' : '') + '>' + s.value + '</div>' +
            '</div>';
        }).join('') +
        '</div>';
    }

    function navigateToDestination(destId) {
      closeExperience();
      setTimeout(function () { openExperience(destId); }, 300);
    }

    function repaintGlobeMarkers(animate) {
      var duration = animate ? 500 : 0;
      var startTime = Date.now();
      var startProps = globeMarkers.map(function (m) {
        return {
          glowScale: m.glow.scale.x,
          glowOpacity: m.glow.material.opacity,
          ringOpacity: m.ring.material.opacity,
          stemOpacity: m.stem.material.opacity,
          intensity: m.intensity
        };
      });
      var targetProps = globeMarkers.map(function (m) {
        return getEffectiveIntensity(m.regionId);
      });

      // Update sidebar pills
      var pills = document.querySelectorAll('.loc-pill');
      pills.forEach(function (pill, i) {
        if (i < targetProps.length) {
          pill.classList.toggle('peak', targetProps[i] >= 0.6);
        }
      });

      // Update stat text
      var peakCount = targetProps.filter(function (t) { return t >= 0.6; }).length;
      var statEl = document.getElementById('globe-stat-text');
      if (statEl) statEl.textContent = peakCount + ' in season · ' + REGIONS.length + ' regions';

      if (!animate || duration === 0) {
        globeMarkers.forEach(function (m, i) {
          var p = intensityToMarkerProps(targetProps[i]);
          m.glow.scale.setScalar(p.glowSize / 0.015);
          m.glow.material.opacity = p.glowOpacity;
          m.ring.material.opacity = p.ringOpacity;
          m.stem.material.opacity = p.stemOpacity;
          m.intensity = targetProps[i];
        });
        return;
      }

      function tick() {
        var elapsed = Date.now() - startTime;
        var t = Math.min(1, elapsed / duration);
        var ease = 1 - Math.pow(1 - t, 3); // cubic ease-out
        globeMarkers.forEach(function (m, i) {
          var sp = startProps[i];
          var tp = intensityToMarkerProps(targetProps[i]);
          m.glow.scale.setScalar(sp.glowScale + (tp.glowSize / 0.015 - sp.glowScale) * ease);
          m.glow.material.opacity = sp.glowOpacity + (tp.glowOpacity - sp.glowOpacity) * ease;
          m.ring.material.opacity = sp.ringOpacity + (tp.ringOpacity - sp.ringOpacity) * ease;
          m.stem.material.opacity = sp.stemOpacity + (tp.stemOpacity - sp.stemOpacity) * ease;
          if (t >= 1) m.intensity = targetProps[i];
        });
        if (t < 1) requestAnimationFrame(tick);
      }
      tick();
    }

    var MONTH_ABBR = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    function renderGlobeMonthBar() {
      var bar = document.getElementById('globe-month-bar');
      if (!bar) return;
      // Compute global average intensity per month for heatmap coloring
      var monthAvgs = [];
      for (var m = 1; m <= 12; m++) {
        var total = 0;
        REGIONS.forEach(function (r) { total += getRegionHeatmap(r.id, m); });
        monthAvgs.push(total / REGIONS.length);
      }
      var maxAvg = Math.max.apply(null, monthAvgs);

      bar.innerHTML = MONTH_ABBR.map(function (label, i) {
        var month = i + 1;
        var norm = maxAvg > 0 ? monthAvgs[i] / maxAvg : 0;
        var r = Math.round(68 + norm * 132);
        var g = Math.round(40 + norm * 80);
        var b = Math.round(20 + norm * 10);
        var bgColor = 'rgba(' + r + ',' + g + ',' + b + ',' + (0.15 + norm * 0.4) + ')';
        var cls = 'globe-month-btn' + (month === globeMonth ? ' active' : '');
        return '<button class="' + cls + '" onclick="setGlobeMonth(' + month + ')" style="background:' + bgColor + '">' + label + '</button>';
      }).join('');
    }

    function generateQuickIdeas(month) {
      return DESTINATIONS.map(function (dest) {
        var mo = dest.season && dest.season.monthly
          ? dest.season.monthly.find(function (m) { return m.month === month; })
          : null;
        var intensity = mo ? mo.heatmapIntensity : 0;
        var region = REGION_BY_ID[dest.regionId];

        // Build reason string from monthly data
        var reasons = [seasonLabelShort(intensity)];
        if (mo && mo.tempRange) reasons.push(mo.tempRange[0] + '\u2013' + mo.tempRange[1] + '\u00B0C');
        if (mo && mo.wind) reasons.push(mo.wind.replace(/^(light|moderate|strong)-?/i, function (m) { return m.charAt(0).toUpperCase() + m.slice(1).replace('-', ' '); }));

        // Check for race events this month
        var monthStr = month < 10 ? '0' + month : '' + month;
        var events = RACE_EVENTS.filter(function (e) {
          return e.date.substring(5, 7) === monthStr && e.location.toLowerCase().indexOf(dest.name.toLowerCase()) > -1;
        });
        if (events.length > 0) reasons.push(events[0].name);

        // Cost hint from deep dive or stats
        var costHint = dest.stats ? dest.stats.price : '';
        if (dest.deepDive && dest.deepDive.costComparison && dest.deepDive.costComparison.length > 0) {
          var own = dest.deepDive.costComparison.find(function (c) { return c.destination === dest.name; });
          if (own) costHint = '\u20AC' + own.total7day.toLocaleString() + '/wk';
        }

        // Count rideable routes for this month
        var destRoutes = ROUTE_DATABASE.filter(function (r) { return r.destinationId === dest.id; });
        var rideableCount = destRoutes.filter(function (r) { return isRouteRideableInMonth(r, month); }).length;

        return {
          destId: dest.id,
          destName: dest.name,
          regionName: region ? region.name : '',
          intensity: intensity,
          label: seasonLabelShort(intensity),
          color: seasonColor(intensity),
          reason: reasons.join(' \u00B7 '),
          costHint: costHint,
          routeCount: dest.routeCount,
          rideableCount: rideableCount,
          image: dest.image,
          flag: dest.flag
        };
      }).sort(function (a, b) {
        // Destinations with rideable routes first, then by intensity
        if (a.rideableCount > 0 && b.rideableCount === 0) return -1;
        if (b.rideableCount > 0 && a.rideableCount === 0) return 1;
        return b.intensity - a.intensity;
      });
    }

    var quickIdeasOpen = false;

    function renderQuickIdeas() {
      var panel = document.getElementById('quick-ideas-panel');
      if (!panel) return;
      var ideas = generateQuickIdeas(globeMonth).slice(0, 4);
      var monthName = MONTH_ABBR[globeMonth - 1];

      panel.innerHTML =
        '<div class="qi-header">' +
        '<div class="qi-title">TRIP IDEAS FOR ' + monthName.toUpperCase() + '</div>' +
        '<button class="qi-close" onclick="toggleQuickIdeas()" aria-label="Close trip ideas">\u00D7</button>' +
        '</div>' +
        '<div class="qi-cards">' +
        ideas.map(function (idea) {
          return '<div class="qi-card" onclick="openExperience(\'' + idea.destId + '\')" style="--accent:' + idea.color + '">' +
            '<div class="qi-card-img"><img src="' + idea.image + '" alt="' + idea.destName + '" loading="lazy"></div>' +
            '<div class="qi-card-body">' +
            '<div class="qi-card-dest">' + idea.flag + ' ' + idea.destName + '</div>' +
            '<div class="qi-card-region">' + idea.regionName + '</div>' +
            '<div class="qi-card-reason">' + idea.reason + '</div>' +
            '<div class="qi-card-meta">' +
            (idea.routeCount > 0 ? '<span>' + idea.rideableCount + '/' + idea.routeCount + ' routes open</span>' : '<span class="qi-coming-soon">Coming Soon</span>') +
            (idea.costHint ? '<span>' + idea.costHint + '</span>' : '') +
            '</div>' +
            '</div>' +
            '</div>';
        }).join('') +
        '</div>';
    }

    function toggleQuickIdeas() {
      var panel = document.getElementById('quick-ideas-panel');
      if (!panel) return;
      quickIdeasOpen = !quickIdeasOpen;
      panel.classList.toggle('active', quickIdeasOpen);
      if (quickIdeasOpen) renderQuickIdeas();
      var btn = document.getElementById('qi-toggle-btn');
      if (btn) btn.classList.toggle('active', quickIdeasOpen);
    }

    function setGlobeMonth(month) {
      globeMonth = month;
      renderGlobeMonthBar();
      repaintGlobeMarkers(true);
      if (quickIdeasOpen) renderQuickIdeas();
      // Propagate to route explorer (visibility-gated)
      routeFilterState.month = month;
      var grid = document.getElementById('routeCardsGrid');
      if (grid && grid.offsetParent !== null) renderRouteCards();
      // Re-render season filter pill label
      var seasonPill = document.getElementById('reSeasonPill');
      if (seasonPill) seasonPill.textContent = 'Open in ' + MONTH_ABBR[month - 1];
    }

    function toggleGlobeSeasonality(on) {
      globeSeasonality = on;
      repaintGlobeMarkers(true);
      if (quickIdeasOpen) renderQuickIdeas();
    }

    function showGlobeFallback() {
      var loading = document.getElementById('globe-loading');
      loading.innerHTML = '<div style="text-align:center;padding:2rem">' +
        '<div style="font-family:Bebas Neue,sans-serif;font-size:22px;letter-spacing:4px;color:#c9a96e;margin-bottom:12px">CYCLING DESTINATIONS</div>' +
        '<div style="font-size:12px;color:rgba(255,255,255,0.4);margin-bottom:24px">3D globe unavailable \u2014 explore regions below</div>' +
        '<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center;max-width:500px;margin:0 auto">' +
        REGIONS.map(function (r) {
          return '<button onclick="openRegion(\'' + r.id + '\')" style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);color:#e8e4dd;padding:8px 14px;border-radius:var(--radius-sm);cursor:pointer;font-family:DM Sans;font-size:12px;font-weight:500;transition:all .2s;min-height:36px" onmouseover="this.style.borderColor=\'' + r.color + '\';this.style.color=\'' + r.color + '\'" onmouseout="this.style.borderColor=\'rgba(255,255,255,0.1)\';this.style.color=\'#e8e4dd\'">' + r.name + '</button>';
        }).join('') +
        '</div></div>';
      loading.classList.remove('hidden');
      loading.style.opacity = '1';
      loading.style.position = 'relative';
      loading.style.minHeight = '50vh';
      loading.style.display = 'flex';
    }

    function initGlobe() {
      if (isGlobeInit) return;
      isGlobeInit = true;

      // Timeout fallback — if globe doesn't render within 5s
      var fallbackTimer = setTimeout(function () { if (!globeRenderer) showGlobeFallback(); }, 5000);

      try {
        if (!mouseNDC) mouseNDC = new THREE.Vector2();
        var container = document.getElementById('globe-container');
        var w = container.clientWidth, h = container.clientHeight;

        globeScene = new THREE.Scene();
        globeCamera = new THREE.PerspectiveCamera(45, w / h, 0.1, 1000);
        globeCamera.position.z = 3.2;

        globeRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        globeRenderer.setSize(w, h);
        globeRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(globeRenderer.domElement);

        globeGroup = new THREE.Group();
        globeScene.add(globeGroup);
        raycaster = new THREE.Raycaster();

        // Stars
        var starGeo = new THREE.BufferGeometry();
        var starVerts = new Float32Array(3000 * 3);
        for (var i = 0; i < 3000 * 3; i++) starVerts[i] = (Math.random() - 0.5) * 100;
        starGeo.setAttribute('position', new THREE.BufferAttribute(starVerts, 3));
        globeScene.add(new THREE.Points(starGeo, new THREE.PointsMaterial({ color: 0xffffff, size: 0.05, transparent: true, opacity: 0.7 })));

        // Earth sphere
        var earthGeo = new THREE.SphereGeometry(1, 64, 64);
        var procTexture = new THREE.CanvasTexture(createEarthCanvas());
        var earthMat = new THREE.MeshPhongMaterial({ map: procTexture, bumpScale: 0.03, specular: new THREE.Color(0x111122), shininess: 15 });
        var earthMesh = new THREE.Mesh(earthGeo, earthMat);
        globeGroup.add(earthMesh);

        // NASA Blue Marble upgrade
        var texLoader = new THREE.TextureLoader();
        texLoader.load('https://unpkg.com/three-globe@2.31.0/example/img/earth-blue-marble.jpg',
          function (tex) { earthMat.map = tex; earthMat.needsUpdate = true; }, undefined, function () { });
        texLoader.load('https://unpkg.com/three-globe@2.31.0/example/img/earth-topology.png',
          function (tex) { earthMat.bumpMap = tex; earthMat.needsUpdate = true; }, undefined, function () { });

        // Cloud layer
        var cloudMat = new THREE.MeshPhongMaterial({ color: 0xffffff, transparent: true, opacity: 0.08, depthWrite: false });
        globeGroup.add(new THREE.Mesh(new THREE.SphereGeometry(1.01, 48, 48), cloudMat));

        // Atmosphere glow
        var atmosMat = new THREE.ShaderMaterial({
          vertexShader: 'varying vec3 vNormal; void main(){ vNormal = normalize(normalMatrix * normal); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
          fragmentShader: 'varying vec3 vNormal; void main(){ float intensity = pow(0.65 - dot(vNormal, vec3(0,0,1)), 2.0); gl_FragColor = vec4(0.3,0.6,1.0,1.0) * intensity; }',
          blending: THREE.AdditiveBlending,
          side: THREE.BackSide,
          transparent: true
        });
        globeScene.add(new THREE.Mesh(new THREE.SphereGeometry(1.15, 48, 48), atmosMat));

        // Lights
        globeScene.add(new THREE.AmbientLight(0x333344, 1.5));
        var sun = new THREE.DirectionalLight(0xfff5e8, 1.8);
        sun.position.set(5, 3, 5);
        globeScene.add(sun);

        // Region markers + sidebar pills (L1 globe shows REGIONS, not destinations)
        var sidebar = document.getElementById('globe-sidebar');
        REGIONS.forEach(function (region) {
          var intensity = getEffectiveIntensity(region.id);
          var props = intensityToMarkerProps(intensity);
          var pos = latLngToVec3(region.lat, region.lng, 1.005);
          var col = new THREE.Color(region.color);

          // Dot
          var dot = new THREE.Mesh(new THREE.SphereGeometry(props.dotSize, 16, 16), new THREE.MeshBasicMaterial({ color: col }));
          dot.position.copy(pos);
          dot.userData = { locId: region.id, isRegion: true };
          globeGroup.add(dot);
          markerMeshes.push(dot);

          // Glow
          var glow = new THREE.Mesh(new THREE.SphereGeometry(0.015, 16, 16), new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: props.glowOpacity }));
          glow.position.copy(pos);
          glow.scale.setScalar(props.glowSize / 0.015);
          globeGroup.add(glow);

          // Ring
          var ring = new THREE.Mesh(new THREE.RingGeometry(props.ringInner, props.ringOuter, 32), new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: props.ringOpacity, side: THREE.DoubleSide }));
          ring.position.copy(pos);
          ring.lookAt(new THREE.Vector3(0, 0, 0));
          globeGroup.add(ring);

          // Stem line
          var stemEnd = pos.clone().multiplyScalar(1.04);
          var stemGeo = new THREE.BufferGeometry().setFromPoints([pos, stemEnd]);
          var stemMat = new THREE.LineBasicMaterial({ color: col, transparent: true, opacity: props.stemOpacity });
          var stem = new THREE.Line(stemGeo, stemMat);
          globeGroup.add(stem);

          // Store structured reference for live repaint
          globeMarkers.push({ regionId: region.id, dot: dot, glow: glow, ring: ring, stem: stem, intensity: intensity });

          // Sidebar pill
          var pill = document.createElement('div');
          pill.className = 'loc-pill' + (intensity >= 0.6 ? ' peak' : '');
          pill.textContent = region.name;
          pill.onclick = (function (r) { return function () { flyTo(r); openRegion(r.id); }; })(region);
          sidebar.appendChild(pill);
        });

        // Render month bar controls
        renderGlobeMonthBar();

        // Interaction
        var canvas = globeRenderer.domElement;
        var startTime = 0;

        canvas.addEventListener('pointerdown', function (e) {
          isDragging = true; autoRotate = false; startTime = Date.now();
          prevMouse = { x: e.clientX, y: e.clientY };
        });

        window.addEventListener('pointermove', function (e) {
          var rect = container.getBoundingClientRect();
          mouseNDC.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
          mouseNDC.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
          if (isDragging) {
            var dx = e.clientX - prevMouse.x;
            var dy = e.clientY - prevMouse.y;
            globeGroup.rotation.y += dx * 0.005;
            globeGroup.rotation.x += dy * 0.005;
            globeGroup.rotation.x = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, globeGroup.rotation.x));
            prevMouse = { x: e.clientX, y: e.clientY };
          }
        });

        window.addEventListener('pointerup', function (e) {
          if (isDragging && Date.now() - startTime < 200) {
            raycaster.setFromCamera(mouseNDC, globeCamera);
            var hits = raycaster.intersectObjects(markerMeshes);
            if (hits.length > 0) openRegion(hits[0].object.userData.locId);
          }
          isDragging = false;
          setTimeout(function () { autoRotate = true; }, 3000);
        });

        canvas.addEventListener('wheel', function (e) {
          e.preventDefault();
          globeCamera.position.z = Math.max(1.8, Math.min(5, globeCamera.position.z + e.deltaY * 0.002));
        }, { passive: false });

        // Touch zoom
        var lastTouchDist = 0;
        canvas.addEventListener('touchstart', function (e) {
          if (e.touches.length === 2) {
            var dx = e.touches[0].clientX - e.touches[1].clientX;
            var dy = e.touches[0].clientY - e.touches[1].clientY;
            lastTouchDist = Math.sqrt(dx * dx + dy * dy);
          }
        }, { passive: true });
        canvas.addEventListener('touchmove', function (e) {
          if (e.touches.length === 2) {
            var dx = e.touches[0].clientX - e.touches[1].clientX;
            var dy = e.touches[0].clientY - e.touches[1].clientY;
            var dist = Math.sqrt(dx * dx + dy * dy);
            globeCamera.position.z = Math.max(1.8, Math.min(5, globeCamera.position.z - (dist - lastTouchDist) * 0.008));
            lastTouchDist = dist;
          }
        }, { passive: true });

        // Tooltip
        var tooltip = document.getElementById('globe-tooltip');
        var tooltipName = document.getElementById('tooltip-name');
        var tooltipCountry = document.getElementById('tooltip-country');

        // Animate — only runs when globe section is visible
        function animate() {
          if (!globeVisible || document.hidden) {
            globeAnimId = null;
            return;
          }
          globeAnimId = requestAnimationFrame(animate);
          if (autoRotate) globeGroup.rotation.y += 0.001;

          // Tooltip raycasting
          raycaster.setFromCamera(mouseNDC, globeCamera);
          var hits = raycaster.intersectObjects(markerMeshes);
          if (hits.length > 0) {
            var loc = REGION_BY_ID[hits[0].object.userData.locId];
            if (loc) {
              tooltipName.textContent = loc.name;
              tooltipCountry.textContent = loc.country;
              var v = hits[0].object.position.clone();
              v.applyMatrix4(globeGroup.matrixWorld);
              v.project(globeCamera);
              var rect = container.getBoundingClientRect();
              tooltip.style.left = ((v.x + 1) / 2 * rect.width) + 'px';
              tooltip.style.top = ((-v.y + 1) / 2 * rect.height) + 'px';
              tooltip.classList.add('show');
              canvas.style.cursor = 'pointer';
            }
          } else {
            tooltip.classList.remove('show');
            canvas.style.cursor = isDragging ? 'grabbing' : 'grab';
          }

          // Marker pulse
          var t = Date.now() * 0.001;
          markerMeshes.forEach(function (m, i) {
            m.scale.setScalar(1 + Math.sin(t * 2 + i) * 0.15);
          });

          globeRenderer.render(globeScene, globeCamera);
        }

        function startGlobeAnim() {
          if (!globeAnimId && globeVisible && !document.hidden) animate();
        }

        // Resume animation when tab becomes visible again
        document.addEventListener('visibilitychange', function () {
          if (!document.hidden) startGlobeAnim();
        });

        globeVisible = true;
        animate();

        // Resize handler
        window.addEventListener('resize', function () {
          var w = container.clientWidth, h = container.clientHeight;
          globeCamera.aspect = w / h;
          globeCamera.updateProjectionMatrix();
          globeRenderer.setSize(w, h);
        });

        // Hide loading spinner
        clearTimeout(fallbackTimer);
        setTimeout(function () {
          document.getElementById('globe-loading').classList.add('hidden');
        }, 800);

      } catch (e) {
        clearTimeout(fallbackTimer);
        console.warn('Globe init failed:', e);
        showGlobeFallback();
      }
    }

    function flyTo(loc) {
      var phi = (90 - loc.lat) * Math.PI / 180;
      var theta = (loc.lng + 180) * Math.PI / 180;
      var targetY = -theta + Math.PI;
      var targetX = -(phi - Math.PI / 2);
      var startY = globeGroup.rotation.y;
      var startX = globeGroup.rotation.x;
      var start = Date.now();
      function anim() {
        var p = Math.min(1, (Date.now() - start) / 800);
        var ease = 1 - Math.pow(1 - p, 3);
        globeGroup.rotation.y = startY + (targetY - startY) * ease;
        globeGroup.rotation.x = startX + (targetX - startX) * ease;
        if (p < 1) requestAnimationFrame(anim);
      }
      anim();
    }

    /* ═══════════════════════════════════════════
       5. EXPERIENCE OVERLAY — Section builders
       ═══════════════════════════════════════════ */

    function zoneDifficultyColor(diff) {
      if (!diff) return 'rgba(255,255,255,0.4)';
      var d = diff.toLowerCase();
      if (d.indexOf('expert') > -1) return '#EF4444';
      if (d.indexOf('advanced') > -1) return '#F59E0B';
      if (d.indexOf('moderate') > -1 || d.indexOf('intermediate') > -1) return '#c9a96e';
      return '#44D62C';
    }

    function buildZonesSection(loc) {
      if (!loc.zones || loc.zones.length === 0) return '';
      var cards = loc.zones.map(function (z) {
        var routeIds = z.routeIds || [];
        var routeLinksHtml = routeIds.map(function (rid) {
          var r = ROUTE_BY_ID[rid];
          if (!r) return '';
          return '<a class="zone-route-link" onclick="openRouteDetail(\'' + rid + '\')">' + r.name + ' \u2192</a>';
        }).join('');
        var bestForHtml = z.bestFor ? z.bestFor.map(function (b) {
          return '<span class="zone-best-for-tag">' + b + '</span>';
        }).join('') : '';
        return '<div class="zone-card" style="--accent:' + loc.color + '">' +
          '<div class="zone-card-header">' +
          '<div class="zone-card-name">' + z.name + '</div>' +
          '<div class="zone-card-diff" style="color:' + zoneDifficultyColor(z.difficulty) + '">' + (z.difficulty || '') + '</div>' +
          '</div>' +
          '<div class="zone-card-character">' + z.character + '</div>' +
          (routeLinksHtml ? '<div class="zone-route-links">' + routeLinksHtml + '</div>' : '') +
          '<div class="zone-card-footer">' +
          (bestForHtml ? '<div class="zone-best-for">' + bestForHtml + '</div>' : '') +
          '</div>' +
          '</div>';
      }).join('');
      return '<div class="exp-section-eyebrow" style="color:' + loc.color + '">Riding Zones</div>' +
        '<div class="exp-section-title">WHERE TO RIDE</div>' +
        '<div class="zone-grid">' + cards + '</div>';
    }

    function buildBasesSection(loc) {
      if (!loc.bases || loc.bases.length === 0) return '';
      var hasRoutes = loc.routeCount > 0;
      var cards = loc.bases.map(function (b) {
        var zoneNames = b.accessibleZoneIds ? b.accessibleZoneIds.map(function (zid) {
          var zone = loc.zones ? loc.zones.find(function (z) { return z.id === zid; }) : null;
          return zone ? zone.name.split(' \u2014 ')[0] : zid;
        }) : [];
        var partnerCount = b.partnerIds ? b.partnerIds.length : 0;
        return '<div class="base-card" style="--accent:' + loc.color + '">' +
          '<div class="base-card-name">' + b.name + '</div>' +
          '<div class="base-card-character">' + b.character + '</div>' +
          '<div class="base-card-best-for"><strong>Best for:</strong> ' + b.bestFor + '</div>' +
          (b.transferKm ? '<div class="base-card-meta">Airport transfer: ' + b.transferKm + ' km (' + b.nearestAirportIATA + ')</div>' : '') +
          (zoneNames.length > 0 ? '<div class="base-card-zones">Zones: ' + zoneNames.join(', ') + '</div>' : '') +
          (partnerCount > 0 ? '<div class="base-card-partners">' + partnerCount + ' partner' + (partnerCount > 1 ? 's' : '') + ' at this base</div>' : '') +
          (hasRoutes ? '<button class="base-card-cta" onclick="closeExperience();document.getElementById(\'trip-builder\').scrollIntoView({behavior:\'smooth\'});setTimeout(function(){startTripFromBase(\'' + loc.id + '\',\'' + b.id + '\')},400)">Plan Trip from Here \u2192</button>' : '') +
          '</div>';
      }).join('');
      return '<div class="exp-section-eyebrow" style="color:' + loc.color + '">Base Camps</div>' +
        '<div class="exp-section-title">WHERE TO STAY</div>' +
        '<div class="base-grid">' + cards + '</div>';
    }

    function buildConditionsSection(loc) {
      if (!loc.conditions) return '';
      var items = [
        { icon: 'distance', label: 'Roads', text: loc.conditions.roads },
        { icon: 'health', label: 'Water', text: loc.conditions.water },
        { icon: 'bike', label: 'Bike Shops', text: loc.conditions.bikeShops },
        { icon: 'bike', label: 'Bike Rental', text: loc.conditions.rental }
      ];
      if (loc.conditions.specialRisks) {
        items.push({ icon: 'health', label: 'Special Risks', text: loc.conditions.specialRisks });
      }
      var html = items.map(function (item) {
        return '<div class="condition-item">' +
          '<div class="condition-label">' + item.label + '</div>' +
          '<div class="condition-text">' + item.text + '</div>' +
          '</div>';
      }).join('');
      return '<div class="exp-section-eyebrow" style="color:' + loc.color + '">Practical Intel</div>' +
        '<div class="exp-section-title">CONDITIONS & LOGISTICS</div>' +
        '<div class="conditions-grid">' + html + '</div>';
    }

    function buildDestSeasonBar(loc) {
      if (!loc.season || !loc.season.monthly) return '';
      var cells = loc.season.monthly.map(function (mo) {
        var color = seasonColor(mo.heatmapIntensity);
        var temp = mo.tempRange ? mo.tempRange[0] + '\u2013' + mo.tempRange[1] + '\u00B0' : '';
        var isActive = mo.month === globeMonth;
        return '<div class="dest-season-cell' + (isActive ? ' dest-season-active' : '') + '">' +
          '<div class="dest-season-month">' + MONTH_ABBR[mo.month - 1] + '</div>' +
          '<div class="dest-season-bar-fill" style="background:' + color + ';height:' + Math.max(4, mo.heatmapIntensity * 32) + 'px"></div>' +
          '<div class="dest-season-temp">' + temp + '</div>' +
          (isActive ? '<div class="dest-season-now">Now</div>' : '') +
          '</div>';
      }).join('');
      return '<div class="exp-section-eyebrow" style="color:' + loc.color + '">When to Go</div>' +
        '<div class="exp-section-title">SEASONAL CONDITIONS</div>' +
        '<div class="dest-season-bar">' + cells + '</div>';
    }

    function buildDeepDive(loc) {
      if (!loc.deepDive) return '';
      var html = '';

      // Cultural highlights
      if (loc.deepDive.culturalHighlights && loc.deepDive.culturalHighlights.length > 0) {
        var cards = loc.deepDive.culturalHighlights.map(function (ch) {
          return '<div class="culture-card" style="--accent:' + loc.color + '">' +
            '<div class="culture-card-title">' + ch.title + '</div>' +
            '<div class="culture-card-desc">' + ch.description + '</div>' +
            '</div>';
        }).join('');
        html += '<div class="exp-section-eyebrow" style="color:' + loc.color + '">Local Culture</div>' +
          '<div class="exp-section-title">CULTURAL HIGHLIGHTS</div>' +
          '<div class="culture-grid">' + cards + '</div>';
      }

      // Season notes (deep dive editorial)
      if (loc.deepDive.seasonBar && loc.deepDive.seasonBar.length > 0) {
        var notes = loc.deepDive.seasonBar.map(function (s) {
          var statusClass = s.open ? 'season-note-open' : 'season-note-closed';
          return '<div class="season-note ' + statusClass + '">' +
            '<span class="season-note-month">' + s.month + '</span>' +
            '<span class="season-note-text">' + s.note + '</span>' +
            '</div>';
        }).join('');
        html += '<div class="exp-section-eyebrow" style="color:' + loc.color + '">Expert Notes</div>' +
          '<div class="exp-section-title">MONTH-BY-MONTH GUIDE</div>' +
          '<div class="season-notes-list">' + notes + '</div>';
      }

      // Cost comparison
      if (loc.deepDive.costComparison && loc.deepDive.costComparison.length > 0) {
        var costCards = loc.deepDive.costComparison.map(function (c) {
          var isCurrent = c.destination === loc.name;
          return '<div class="cost-card' + (isCurrent ? ' cost-card-current' : '') + '" style="--accent:' + loc.color + '">' +
            '<div class="cost-card-dest">' + c.destination + (isCurrent ? ' \u2713' : '') + '</div>' +
            '<div class="cost-card-total">' + c.currency + ' ' + c.total7day.toLocaleString() + '<span class="cost-card-per">/7 days</span></div>' +
            '<div class="cost-card-breakdown">' +
            '<span>Hotel ' + c.currency + ' ' + c.hotel + '/n</span>' +
            '<span>Guide ' + c.currency + ' ' + c.guide + '/d</span>' +
            '<span>Rental ' + c.currency + ' ' + c.rental + '/d</span>' +
            '<span>Meal ' + c.currency + ' ' + c.meal + '</span>' +
            '</div>' +
            '</div>';
        }).join('');
        html += '<div class="exp-section-eyebrow" style="color:' + loc.color + '">Value</div>' +
          '<div class="exp-section-title">COST COMPARISON</div>' +
          '<div class="cost-grid">' + costCards + '</div>';
      }

      // Golden key package
      if (loc.deepDive.goldenKeyPackage) {
        var pkg = loc.deepDive.goldenKeyPackage;
        var includes = pkg.includes.map(function (item) {
          return '<li class="gk-include">' + item + '</li>';
        }).join('');
        html += '<div class="golden-key-section" style="--accent:' + loc.color + '">' +
          '<div class="gk-header">' +
          '<div class="gk-eyebrow">Premium Experience</div>' +
          '<div class="gk-name">' + pkg.name + '</div>' +
          '<div class="gk-tagline">' + pkg.tagline + '</div>' +
          '</div>' +
          '<ul class="gk-includes">' + includes + '</ul>' +
          '<div class="gk-pricing">' +
          '<div class="gk-price">From \u20AC' + pkg.price7day.toLocaleString() + ' <span class="gk-price-per">/ 7 days</span></div>' +
          (pkg.savingsVsDIY ? '<div class="gk-savings">Save \u20AC' + pkg.savingsVsDIY + ' vs. booking separately</div>' : '') +
          '</div>' +
          '</div>';
      }

      return html;
    }

    function openExperience(id) {
      var loc = DESTINATIONS.find(function (l) { return l.id === id; });
      if (!loc) return;
      _savedScrollY = window.scrollY;

      var overlay = document.getElementById('experience-overlay');
      var content = document.getElementById('exp-content');
      var region = REGION_BY_ID[loc.regionId];

      var highlightsHtml = loc.highlights.map(function (h) {
        return '<div class="exp-highlight"><span style="color:' + loc.color + ';flex-shrink:0">\u25C6</span><span class="exp-highlight-text">' + h + '</span></div>';
      }).join('');

      var galleryHtml = loc.images.map(function (img, i) {
        return '<div class="exp-gallery-item" onclick="openLightbox(\'' + loc.id + '\',' + i + ')"><img src="' + img + '" alt="' + loc.name + ' gallery ' + (i + 1) + '" loading="lazy"></div>';
      }).join('');

      content.innerHTML =
        '<div class="exp-breadcrumb">' +
        '<span class="exp-breadcrumb-link" onclick="closeExperience()">Globe</span>' +
        '<span class="exp-breadcrumb-sep">\u203A</span>' +
        (region ? '<span class="exp-breadcrumb-link" onclick="closeExperience();setTimeout(function(){openRegion(\'' + region.id + '\')},420)">' + region.name + '</span><span class="exp-breadcrumb-sep">\u203A</span>' : '') +
        '<span class="exp-breadcrumb-current">' + loc.name + '</span>' +
        '</div>' +
        buildOverlayHero({ image: loc.images[0], name: loc.name, color: loc.color, continent: loc.continent, country: loc.country, tagline: loc.tagline }) +
        buildStatBar([
          { label: 'Duration', value: loc.stats.dur },
          { label: 'Difficulty', value: loc.stats.diff },
          { label: 'Season', value: loc.stats.season },
          { label: 'Budget', value: loc.stats.price, color: '#c9a96e' },
          { label: 'Group Size', value: loc.stats.group },
          { label: 'Routes', value: loc.stats.routes + ' GUIDES', color: loc.color }
        ]) +
        '<div class="exp-body">' +
        '<div class="exp-section-eyebrow" style="color:' + loc.color + '">About This Destination</div>' +
        '<div class="region-character-text">' + loc.desc + '</div>' +
        '<div class="exp-grid">' +
        '<div><div class="exp-section-title">HIGHLIGHTS</div>' + highlightsHtml + '</div>' +
        '<div><div class="exp-section-title">LOCATION</div>' +
        '<div class="exp-map-frame">' +
        '<iframe src="https://www.openstreetmap.org/export/embed.html?bbox=' + (loc.lng - 1) + ',' + (loc.lat - 0.5) + ',' + (loc.lng + 1) + ',' + (loc.lat + 0.5) + '&layer=mapnik&marker=' + loc.lat + ',' + loc.lng + '" class="exp-map-iframe" loading="lazy"></iframe>' +
        '</div>' +
        '</div>' +
        '</div>' +
        buildDestSeasonBar(loc) +
        buildZonesSection(loc) +
        buildBasesSection(loc) +
        buildConditionsSection(loc) +
        buildDeepDive(loc) +
        '</div>' +
        '<div class="exp-gallery">' + galleryHtml + '</div>' +
        '<div class="exp-cta">' +
        '<div class="exp-cta-title">READY TO RIDE ' + loc.name.toUpperCase() + '?</div>' +
        '<div class="exp-cta-sub">Build your complete trip in the Trip Builder</div>' +
        '<button class="exp-cta-btn" onclick="closeExperience();document.getElementById(\'trip-builder\').scrollIntoView({behavior:\'smooth\'});setTimeout(function(){selectTripById(\'' + loc.id + '\')},400)">BUILD YOUR TRIP \u2192</button>' +
        '</div>';

      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
      overlay.scrollTop = 0;
    }

    function closeExperience() {
      document.getElementById('experience-overlay').classList.remove('active');
      document.body.style.overflow = '';
      window.scrollTo(0, _savedScrollY);
    }

    /* ═══════════════════════════════════════════
       5b. REGION OVERLAY (L2 View)
       ═══════════════════════════════════════════ */
    function openRegion(regionId) {
      var region = REGION_BY_ID[regionId];
      if (!region) return;
      _savedScrollY = window.scrollY;

      var overlay = document.getElementById('experience-overlay');
      var content = document.getElementById('exp-content');
      var intensity = getEffectiveIntensity(regionId);

      // Sub-geography cards with thumbnails
      var subGeoHtml = region.subGeoIds.map(function (sgId) {
        var dest = DESTINATION_BY_ID[sgId];
        if (!dest) return '';
        var destIntensity = 0;
        if (dest.season && dest.season.monthly) {
          var m = dest.season.monthly.find(function (mo) { return mo.month === globeMonth; });
          if (m) destIntensity = m.heatmapIntensity;
        }
        return '<div class="region-subgeo-card" style="--accent:' + dest.color + '" onclick="navigateToDestination(\'' + dest.id + '\')">' +
          '<div class="region-subgeo-thumb"><img src="' + dest.image + '" alt="' + dest.name + '" loading="lazy"></div>' +
          '<div class="region-subgeo-body">' +
          '<div class="region-subgeo-header">' +
          '<div class="region-subgeo-name">' + dest.name.toUpperCase() + '</div>' +
          '<div class="region-subgeo-season" style="color:' + seasonColor(destIntensity) + '">' + seasonLabelShort(destIntensity) + '</div>' +
          '</div>' +
          '<div class="region-subgeo-tagline">' + dest.tagline + '</div>' +
          '<div class="region-subgeo-meta">' +
          '<span>' + dest.stats.routes + ' routes</span>' +
          '<span>' + dest.stats.diff + '</span>' +
          '<span>' + dest.stats.season + '</span>' +
          '</div>' +
          '</div>' +
          '</div>';
      }).join('');

      // Vibes tags
      var vibesHtml = region.vibes.map(function (v) {
        return '<span class="region-vibe-tag">' + v + '</span>';
      }).join('');

      content.innerHTML =
        '<div class="exp-breadcrumb">' +
        '<span class="exp-breadcrumb-link" onclick="closeExperience()">Globe</span>' +
        '<span class="exp-breadcrumb-sep">\u203A</span>' +
        '<span class="exp-breadcrumb-current">' + region.name + '</span>' +
        '</div>' +
        buildOverlayHero({ image: region.image, name: region.name, color: region.color, continent: region.continent, country: region.country, tagline: region.tagline }) +
        buildStatBar([
          { label: 'Right Now', value: seasonLabel(intensity).toUpperCase(), color: seasonColor(intensity) },
          { label: 'Best Window', value: region.seasonalWindow },
          { label: 'Destinations', value: region.subGeoIds.length },
          { label: 'Riders Last Month', value: region.socialProof ? region.socialProof.ridersLastMonth.toLocaleString() : '\u2014', color: region.color }
        ]) +
        '<div class="exp-body">' +
        '<div class="exp-section-eyebrow" style="color:' + region.color + '">Region Character</div>' +
        '<div class="region-character-text">' + region.character + '</div>' +
        '<div class="region-vibes-row">' + vibesHtml + '</div>' +
        '<div class="exp-section-title">EXPLORE DESTINATIONS</div>' +
        '<div class="region-subgeo-grid">' + subGeoHtml + '</div>' +
        '</div>';

      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
      overlay.scrollTop = 0;
    }

    // Swipe-right-to-dismiss on experience overlay (mobile)
    (function () {
      var overlay = document.getElementById('experience-overlay');
      var startX = 0, startY = 0, swiping = false;
      overlay.addEventListener('touchstart', function (e) {
        var t = e.touches[0];
        if (t.clientX < 40) { startX = t.clientX; startY = t.clientY; swiping = true; }
      }, { passive: true });
      overlay.addEventListener('touchmove', function (e) {
        if (!swiping) return;
        var dx = e.touches[0].clientX - startX;
        var dy = Math.abs(e.touches[0].clientY - startY);
        if (dx > 100 && dy < 80) { swiping = false; closeExperience(); }
      }, { passive: true });
      overlay.addEventListener('touchend', function () { swiping = false; }, { passive: true });
    })();

    /* ═══════════════════════════════════════════
       6. LIGHTBOX
       ═══════════════════════════════════════════ */
    var lbImages = [], lbIdx = 0;

    function openLightbox(locId, idx) {
      var loc = DESTINATIONS.find(function (l) { return l.id === locId; });
      if (!loc) return;
      lbImages = loc.images;
      lbIdx = idx;
      showLbImage();
      document.getElementById('lightbox').classList.add('active');
    }

    function closeLightbox() {
      document.getElementById('lightbox').classList.remove('active');
    }

    function showLbImage() {
      document.getElementById('lb-img').src = lbImages[lbIdx];
      document.getElementById('lb-counter').textContent = (lbIdx + 1) + ' / ' + lbImages.length;
    }

    function lbPrev(e) { if (e) e.stopPropagation(); lbIdx = (lbIdx - 1 + lbImages.length) % lbImages.length; showLbImage(); }
    function lbNext(e) { if (e) e.stopPropagation(); lbIdx = (lbIdx + 1) % lbImages.length; showLbImage(); }

    document.addEventListener('keydown', function (e) {
      if (!document.getElementById('lightbox').classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') lbPrev();
      if (e.key === 'ArrowRight') lbNext();
    });

    /* ═══════════════════════════════════════════
       7. UI HELPERS
       ═══════════════════════════════════════════ */
    function goHome() {
      closeExperience();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function toggleCompare(btn) {
      btn.classList.toggle('active');
      document.querySelector('.membership-grid').classList.toggle('comparing');
      btn.textContent = btn.classList.contains('active') ? 'Show All Features' : 'Compare Plans';
    }

    /* ═══════════════════════════════════════════
       ROUTE ENCYCLOPEDIA — Rendering + Filtering
       ═══════════════════════════════════════════ */
    var routeFilterState = { type: 'all', dest: 'all', maxDiff: 5, maxDist: 200, sort: 'featured', month: null };
    var comparedRoutes = [];

    // getRoutePartners() defined in app.js

    // buildMiniElevSvg() defined in app.js

    // difficultyBar(), trafficDot() defined in app.js

    function renderRouteCard(route, idx) {
      var partners = getRoutePartners(route);
      var hotels = partners.filter(function (p) { return p.category === 'hotel'; }).length;
      var isCompared = comparedRoutes.indexOf(route.id) > -1;
      var delay = idx % 4;
      return '<div class="route-card reveal' + (delay ? ' reveal-delay-' + delay : '') + '" data-type="' + route.type + '" data-id="' + route.id + '">' +
        '<div class="route-card-img">' +
        '<img src="' + route.image + '" alt="' + route.name + '" loading="lazy">' +
        '<div class="route-card-badge">' +
        '<span class="rbadge rbadge-' + route.type + '">' + route.type.charAt(0).toUpperCase() + route.type.slice(1) + '</span>' +
        (route.isNew ? '<span class="rbadge rbadge-new">New</span>' : '') +
        (route.stages.length ? '<span class="rbadge" style="background:var(--forest);color:var(--chalk)">' + route.stages.length + '-Day</span>' : '') +
        (route.effortCategory ? '<span class="rbadge rbadge-effort">' + effortLabel(route.effortCategory) + '</span>' : '') +
        (routeFilterState.month ? '<span class="rbadge rbadge-season' + (isRoutePeakInMonth(route, routeFilterState.month) ? ' rbadge-peak' : '') + '">' + (isRoutePeakInMonth(route, routeFilterState.month) ? 'Peak' : 'Open') + '</span>' : '') +
        '</div>' +
        '<label class="re-compare-cb' + (isCompared ? ' active' : '') + '" onclick="event.stopPropagation();toggleCompareRoute(\'' + route.id + '\')">' +
        '<input type="checkbox"' + (isCompared ? ' checked' : '') + ' aria-label="Compare ' + route.name + '"> Compare' +
        '</label>' +
        '</div>' +
        '<div class="route-card-body" onclick="openRouteDetail(\'' + route.id + '\')">' +
        '<div class="route-card-loc">' + route.flag + ' ' + route.region + ', ' + route.country + '</div>' +
        '<div class="route-card-title">' + route.name.toUpperCase() + '</div>' +
        '<div class="route-card-desc">' + route.shortDesc.substring(0, 140) + (route.shortDesc.length > 140 ? '...' : '') + '</div>' +
        '<div class="elev-profile">' + buildMiniElevSvg(route.elevationProfile, route.type) + '</div>' +
        '<div class="route-card-stats">' +
        '<div class="rc-stat">' + VX_ICONS.distance + ' <strong>' + route.distance + ' km</strong></div>' +
        '<div class="rc-stat">' + VX_ICONS.elevation + ' <strong>' + route.elevationGain.toLocaleString() + 'm</strong> ↑</div>' +
        '<div class="rc-stat">' + difficultyBar(route.difficulty) + '</div>' +
        '<div class="rc-stat">' + trafficDot(route.trafficLevel) + ' ' +
        '<span style="background:var(--surface-' + route.surfaceType + ');color:#fff;padding:1px 6px;border-radius:3px;font-size:.65rem;font-weight:600;text-transform:uppercase">' + route.surfaceType + '</span>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="route-card-footer" onclick="openRouteDetail(\'' + route.id + '\')">' +
        '<div class="rc-partners"><strong>' + partners.length + '</strong> partners' + (hotels ? ' · ' + hotels + ' hotel' + (hotels > 1 ? 's' : '') : '') + '</div>' +
        '<div class="rc-cta">Full Guide →</div>' +
        '</div>' +
        '</div>';
    }

    // getFilteredRoutes() defined in app.js

    function renderRouteCards() {
      var routes = getFilteredRoutes();
      var grid = document.getElementById('routeCardsGrid');
      if (!grid) return;
      grid.innerHTML = routes.map(function (r, i) { return renderRouteCard(r, i); }).join('');
      document.getElementById('reResultsCount').textContent = routes.length + ' route' + (routes.length !== 1 ? 's' : '');
      // Staggered enter animation on cards
      requestAnimationFrame(function () {
        var cards = grid.querySelectorAll('.route-card');
        cards.forEach(function (card, i) {
          card.classList.add('route-card-enter');
          if (i < 8) card.classList.add('route-card-enter-' + i);
        });
      });
      // Re-observe reveal elements
      grid.querySelectorAll('.reveal').forEach(function (el) { revealObs.observe(el); });
    }

    function initRouteFilters() {
      // Populate destination dropdown from unique destinations in ROUTE_DATABASE
      var sel = document.getElementById('reFilterDest');
      var seen = {};
      ROUTE_DATABASE.forEach(function (r) {
        if (!seen[r.destinationId]) {
          seen[r.destinationId] = true;
          var opt = document.createElement('option');
          opt.value = r.destinationId;
          opt.textContent = r.flag + ' ' + r.country + ' — ' + r.region;
          sel.appendChild(opt);
        }
      });
      // Type pills
      document.querySelectorAll('.rt-pill').forEach(function (pill) {
        pill.addEventListener('click', function () {
          document.querySelectorAll('.rt-pill').forEach(function (p) { p.classList.remove('active'); });
          pill.classList.add('active');
          routeFilterState.type = pill.dataset.filter;
          renderRouteCards();
        });
      });
      // Destination select
      sel.addEventListener('change', function () {
        routeFilterState.dest = sel.value;
        renderRouteCards();
      });
      // Difficulty range
      var diffSlider = document.getElementById('reFilterDiff');
      var diffVal = document.getElementById('reFilterDiffVal');
      diffSlider.addEventListener('input', function () {
        var v = parseInt(diffSlider.value);
        routeFilterState.maxDiff = v;
        diffVal.textContent = '1–' + v;
        renderRouteCards();
      });
      // Distance range
      var distSlider = document.getElementById('reFilterDist');
      var distVal = document.getElementById('reFilterDistVal');
      distSlider.addEventListener('input', function () {
        var v = parseInt(distSlider.value);
        routeFilterState.maxDist = v;
        distVal.textContent = v >= 200 ? 'Any' : '≤' + v + 'km';
        renderRouteCards();
      });
      // Sort select
      document.getElementById('reFilterSort').addEventListener('change', function () {
        routeFilterState.sort = this.value;
        renderRouteCards();
      });
      // Season filter toggle
      var seasonToggle = document.getElementById('reSeasonToggle');
      if (seasonToggle) {
        seasonToggle.addEventListener('change', function () {
          routeFilterState.month = this.checked ? globeMonth : null;
          var pill = document.getElementById('reSeasonPill');
          if (pill) pill.textContent = this.checked ? 'Open in ' + MONTH_ABBR[globeMonth - 1] : 'Any Season';
          renderRouteCards();
        });
      }
    }

    /* ═══════════════════════════════════════════
       ROUTE DETAIL MODAL — Full overlay
       ═══════════════════════════════════════════ */
    // buildDetailElevSvg() defined in app.js

    var EFFORT_LABELS = {
      'half-day-easy': 'Half Day \u00B7 Easy',
      'half-day-hard': 'Half Day \u00B7 Hard',
      'full-day-easy': 'Full Day \u00B7 Easy',
      'full-day-moderate': 'Full Day \u00B7 Moderate',
      'full-day-hard': 'Full Day \u00B7 Hard',
      'multi-day': 'Multi-Day'
    };

    function effortLabel(category) {
      return EFFORT_LABELS[category] || category || '';
    }

    function buildConfidenceSection(route) {
      if (!route.confidence) return '';
      var c = route.confidence;
      var items = [
        { label: 'Water Frequency', value: c.waterFrequency },
        { label: 'Phone Signal', value: c.phoneSignal },
        { label: 'Nearest Bike Shop', value: c.nearestBikeShop },
        { label: 'Surface Breakdown', value: c.surfaceBreakdown },
        { label: 'Emergency Contacts', value: c.emergencyContacts },
        { label: 'Offline Map', value: c.offlineMapAvailable ? 'Available' : 'Not available' }
      ];
      return '<div class="rd-section"><h2 class="rd-section-title">Route Confidence</h2>' +
        '<div class="rd-intel-grid">' +
        items.map(function (item) {
          return '<div class="rd-intel-item"><div class="rd-intel-label">' + item.label + '</div><div class="rd-intel-val">' + item.value + '</div></div>';
        }).join('') +
        '</div></div>';
    }

    var _savedScrollY = 0;

    function openRouteDetail(routeId) {
      var route = ROUTE_BY_ID[routeId];
      if (!route) return;
      _savedScrollY = window.scrollY;
      var partners = getRoutePartners(route);
      var modal = document.getElementById('rdModal');
      var inner = document.getElementById('rdModalInner');
      var dest = DESTINATION_BY_ID[route.destinationId];
      var region = dest ? REGION_BY_ID[dest.regionId] : null;
      // Build breadcrumb
      var breadcrumb = '<div class="rd-breadcrumb">' +
        '<span class="exp-breadcrumb-link" onclick="closeRouteDetail()">Globe</span>' +
        '<span class="exp-breadcrumb-sep">\u203A</span>' +
        (region ? '<span class="exp-breadcrumb-link" onclick="closeRouteDetail();setTimeout(function(){openRegion(\'' + region.id + '\')},420)">' + region.name + '</span><span class="exp-breadcrumb-sep">\u203A</span>' : '') +
        (dest ? '<span class="exp-breadcrumb-link" onclick="closeRouteDetail();setTimeout(function(){openExperience(\'' + dest.id + '\')},420)">' + dest.name + '</span><span class="exp-breadcrumb-sep">\u203A</span>' : '') +
        '<span class="exp-breadcrumb-current">' + route.name + '</span>' +
        '</div>';
      // Build modal HTML
      var html = breadcrumb +
        '<button class="rd-close" onclick="closeRouteDetail()" aria-label="Close route detail">&times;</button>' +
        '<div class="rd-hero" style="background-image:url(' + route.image + ')">' +
        '<div class="rd-hero-overlay">' +
        '<div class="rd-hero-badge">' +
        '<span class="rbadge rbadge-' + route.type + '">' + route.type.charAt(0).toUpperCase() + route.type.slice(1) + '</span>' +
        (route.stages.length ? '<span class="rbadge" style="background:var(--forest);color:var(--chalk)">' + route.stages.length + '-Day Stage Route</span>' : '') +
        (route.effortCategory ? '<span class="rbadge rbadge-effort">' + effortLabel(route.effortCategory) + '</span>' : '') +
        '</div>' +
        '<h1 class="rd-hero-title">' + route.name + '</h1>' +
        '<p class="rd-hero-subtitle">' + route.subtitle + '</p>' +
        '<div class="rd-hero-loc">' + route.flag + ' ' + route.region + ', ' + route.country + '</div>' +
        '</div>' +
        '</div>' +
        '<div class="rd-stats-strip">' +
        '<div class="rd-stat"><span class="rd-stat-val">' + route.distance + ' km</span><span class="rd-stat-label">Distance</span></div>' +
        '<div class="rd-stat"><span class="rd-stat-val">' + route.elevationGain.toLocaleString() + 'm</span><span class="rd-stat-label">Elevation Gain</span></div>' +
        '<div class="rd-stat"><span class="rd-stat-val">' + route.maxGradient + '%</span><span class="rd-stat-label">Max Gradient</span></div>' +
        '<div class="rd-stat"><span class="rd-stat-val">' + route.avgGradient + '%</span><span class="rd-stat-label">Avg Gradient</span></div>' +
        '<div class="rd-stat">' + difficultyBar(route.difficulty) + '<span class="rd-stat-label">Difficulty ' + route.difficulty + '/5</span></div>' +
        '<div class="rd-stat"><span class="rd-stat-val">' + route.sceneryRating + '/5</span><span class="rd-stat-label">Scenery</span></div>' +
        '</div>';
      // Short description + encyclopedia
      if (route.shortDesc) {
        html += '<div class="rd-section"><p class="rd-short-desc">' + route.shortDesc + '</p></div>';
      }
      if (route.encyclopedia) {
        var encParagraphs = route.encyclopedia.split('\\n\\n');
        var encImages = route.encyclopediaImages || [];
        var encHtml = '';
        encParagraphs.forEach(function (p, idx) {
          encHtml += '<p class="rd-encyclopedia">' + p + '</p>';
          encImages.forEach(function (img) {
            if (img.afterParagraph === idx) {
              encHtml += '<figure class="rd-enc-img"><img src="' + img.url + '" alt="' + img.caption + '" loading="lazy"><figcaption>' + img.caption + '</figcaption></figure>';
            }
          });
        });
        html += '<div class="rd-section"><h2 class="rd-section-title">About This Route</h2>' + encHtml + '</div>';
      }
      // Elevation profile
      html += '<div class="rd-section"><h2 class="rd-section-title">Elevation Profile</h2>' +
        '<div class="rd-ep-wrap">' + buildDetailElevSvg(route.elevationProfile, route) + '</div></div>';
      // Route intelligence
      html += '<div class="rd-section"><h2 class="rd-section-title">Route Intelligence</h2>' +
        '<div class="rd-intel-grid">' +
        '<div class="rd-intel-item"><div class="rd-intel-label">Best Direction</div><div class="rd-intel-val">' + route.bestDirection + '</div></div>' +
        '<div class="rd-intel-item"><div class="rd-intel-label">Wind</div><div class="rd-intel-val">' + route.wind + '</div></div>' +
        '<div class="rd-intel-item"><div class="rd-intel-label">Weather</div><div class="rd-intel-val">' + route.weather + '</div></div>' +
        '<div class="rd-intel-item"><div class="rd-intel-label">Surface</div><div class="rd-intel-val" style="text-transform:capitalize">' + route.surfaceType + ' — Condition ' + route.surfaceCondition + '/5</div></div>' +
        '<div class="rd-intel-item"><div class="rd-intel-label">Traffic</div><div class="rd-intel-val">' + trafficDot(route.trafficLevel) + ' Level ' + route.trafficLevel + '/5</div></div>' +
        '<div class="rd-intel-item"><div class="rd-intel-label">Season</div><div class="rd-intel-val">' + seasonRangeWithPeak(route.season) + '</div></div>' +
        '<div class="rd-intel-item"><div class="rd-intel-label">Right Now</div><div class="rd-intel-val" style="color:' + (isRouteRideableInMonth(route, globeMonth) ? (isRoutePeakInMonth(route, globeMonth) ? '#44D62C' : '#c9a96e') : '#EF4444') + ';font-weight:700">' + (isRouteRideableInMonth(route, globeMonth) ? (isRoutePeakInMonth(route, globeMonth) ? 'Open \u2014 Peak Season' : 'Open \u2014 Shoulder') : 'Closed') + ' (' + MONTH_ABBR[globeMonth - 1] + ')</div></div>' +
        '</div></div>';
      // Confidence
      html += buildConfidenceSection(route);
      // Strava
      if (route.strava) {
        html += '<div class="rd-section"><h2 class="rd-section-title">Strava Data</h2>' +
          '<div class="rd-intel-grid">' +
          '<div class="rd-intel-item"><div class="rd-intel-label">KOM Time</div><div class="rd-intel-val">' + route.strava.komTime + '</div></div>' +
          '<div class="rd-intel-item"><div class="rd-intel-label">Average Time</div><div class="rd-intel-val">' + route.strava.avgTime + '</div></div>' +
          '<div class="rd-intel-item"><div class="rd-intel-label">Segments</div><div class="rd-intel-val">' + route.strava.segmentCount + ' segments</div></div>' +
          '</div></div>';
      }
      // Water stops
      if (route.waterStops && route.waterStops.length) {
        html += '<div class="rd-section"><h2 class="rd-section-title">Water Stops</h2><div class="rd-water-list">';
        route.waterStops.forEach(function (ws) {
          var thumbHtml = ws.image ? '<div class="rd-water-thumb"><img src="' + ws.image + '" alt="' + ws.name + '" loading="lazy"></div>' : '';
          html += '<div class="rd-water-item">' + thumbHtml + '<div class="rd-water-info"><div class="rd-water-km">km ' + ws.km + '</div><div class="rd-water-name">' + ws.name + '</div>' +
            '<span class="rd-water-rel ' + (ws.reliable ? 'reliable' : 'seasonal') + '">' + (ws.reliable ? 'Reliable' : 'Seasonal') + '</span></div></div>';
        });
        html += '</div></div>';
      }
      // Local tips
      if (route.localTips && route.localTips.length) {
        html += '<div class="rd-section"><h2 class="rd-section-title">Local Tips</h2><ul class="rd-tips-list">';
        route.localTips.forEach(function (tip) { html += '<li>' + tip + '</li>'; });
        html += '</ul></div>';
      }
      // Stages
      if (route.stages && route.stages.length) {
        html += '<div class="rd-section"><h2 class="rd-section-title">Stage Breakdown</h2><div class="rd-stages">';
        route.stages.forEach(function (stage) {
          html += '<div class="rd-stage">' +
            '<div class="rd-stage-header" onclick="this.parentElement.classList.toggle(\'open\')">' +
            '<div class="rd-stage-day">Day ' + stage.day + '</div>' +
            '<div class="rd-stage-info"><strong>' + stage.title + '</strong><span>' + stage.distance + ' km · ' + stage.elevation + 'm ↑</span></div>' +
            '<div class="rd-stage-arrow">▸</div>' +
            '</div>' +
            '<div class="rd-stage-body"><p>' + stage.description + '</p><p style="margin-top:.5rem;color:var(--gold)"><strong>Overnight:</strong> ' + stage.overnight + '</p></div>' +
            '</div>';
        });
        html += '</div></div>';
      }
      // Partners sidebar
      if (partners.length) {
        html += '<div class="rd-section"><h2 class="rd-section-title">Partners in ' + route.region + '</h2><div class="rd-partners-grid">';
        partners.forEach(function (p) {
          html += '<div class="rd-partner-card' + (p.isGoldenKey ? ' golden-key' : '') + '">' +
            '<div class="rd-partner-img"><img src="' + p.image + '" alt="' + p.name + '" loading="lazy">' +
            (p.isGoldenKey ? '<span class="rd-gk-badge">Golden Key</span>' : '') + '</div>' +
            '<div class="rd-partner-info">' +
            '<div class="rd-partner-name">' + p.name + '</div>' +
            '<div class="rd-partner-cat">' + p.category.charAt(0).toUpperCase() + p.category.slice(1) + ' · ' + p.rating + '★ (' + p.reviewCount + ')</div>' +
            '<div class="rd-partner-price">From €' + p.priceFrom + '/' + (p.category === 'hotel' ? 'night' : p.category === 'guide' ? 'day' : 'day') + '</div>' +
            '<div class="rd-partner-amenities">' + p.cyclingAmenities.slice(0, 3).map(function (a) { return '<span class="amenity-tag">' + a + '</span>'; }).join('') + '</div>' +
            '</div>' +
            '</div>';
        });
        html += '</div></div>';
      }
      // CTA
      html += '<div class="rd-cta-bar">' +
        '<a href="#trip-builder" class="btn btn-primary" onclick="closeRouteDetail()">Build Trip with This Route →</a>' +
        '<button class="btn btn-ghost" onclick="toggleCompareRoute(\'' + route.id + '\');closeRouteDetail()">Add to Comparison</button>' +
        '</div>';
      inner.innerHTML = html;
      modal.classList.add('active');
      modal.scrollTop = 0;
      document.body.style.overflow = 'hidden';
      // Elevation profile hover
      setTimeout(function () {
        var tooltip = document.getElementById('rdEpTooltip');
        if (!tooltip) return;
        inner.querySelectorAll('.rd-ep-hover').forEach(function (rect) {
          rect.addEventListener('mouseenter', function () {
            var svg = rect.closest('svg');
            if (!svg) return;
            tooltip.textContent = 'km ' + rect.dataset.km + ' · ' + rect.dataset.elev + 'm';
            tooltip.style.opacity = '1';
            var svgRect = svg.getBoundingClientRect();
            var r = rect.getBoundingClientRect();
            tooltip.style.left = (r.left - svgRect.left + r.width / 2) + 'px';
          });
          rect.addEventListener('mouseleave', function () { tooltip.style.opacity = '0'; });
        });
      }, 100);
    }

    function closeRouteDetail() {
      document.getElementById('rdModal').classList.remove('active');
      document.body.style.overflow = '';
      window.scrollTo(0, _savedScrollY);
    }

    // monthName() defined in app.js

    /* ═══════════════════════════════════════════
       ROUTE COMPARISON — Drawer
       ═══════════════════════════════════════════ */
    function toggleCompareRoute(routeId) {
      var idx = comparedRoutes.indexOf(routeId);
      if (idx > -1) {
        comparedRoutes.splice(idx, 1);
      } else {
        if (comparedRoutes.length >= 3) return;
        comparedRoutes.push(routeId);
      }
      updateComparisonUI();
      renderRouteCards();
    }

    function updateComparisonUI() {
      var drawer = document.getElementById('cmpDrawer');
      var countEl = document.getElementById('cmpCount');
      countEl.textContent = comparedRoutes.length;
      if (comparedRoutes.length >= 2) {
        drawer.classList.add('active');
        renderComparisonDrawer();
      } else {
        drawer.classList.remove('active');
      }
    }

    function renderComparisonDrawer() {
      var body = document.getElementById('cmpDrawerBody');
      var routes = comparedRoutes.map(function (id) {
        return ROUTE_BY_ID[id];
      }).filter(Boolean);
      if (routes.length < 2) { body.innerHTML = ''; return; }
      var fields = [
        { label: 'Distance', fn: function (r) { return r.distance + ' km' } },
        { label: 'Elevation', fn: function (r) { return r.elevationGain.toLocaleString() + 'm' } },
        { label: 'Max Gradient', fn: function (r) { return r.maxGradient + '%' } },
        { label: 'Avg Gradient', fn: function (r) { return r.avgGradient + '%' } },
        { label: 'Difficulty', fn: function (r) { return difficultyBar(r.difficulty) } },
        { label: 'Surface', fn: function (r) { return r.surfaceType } },
        { label: 'Traffic', fn: function (r) { return trafficDot(r.trafficLevel) + ' ' + r.trafficLevel + '/5' } },
        { label: 'Scenery', fn: function (r) { return r.sceneryRating + '/5' } },
        { label: 'Season', fn: function (r) { return seasonRangeStr(r.season) } },
        { label: 'Strava KOM', fn: function (r) { return r.strava ? r.strava.komTime : '—' } },
        { label: 'Partners', fn: function (r) { return getRoutePartners(r).length } }
      ];
      var html = '<table class="cmp-table"><thead><tr><th></th>';
      routes.forEach(function (r) { html += '<th>' + r.name + '<br><small>' + r.flag + ' ' + r.country + '</small></th>'; });
      html += '</tr></thead><tbody>';
      fields.forEach(function (f) {
        html += '<tr><td class="cmp-label">' + f.label + '</td>';
        routes.forEach(function (r) { html += '<td>' + f.fn(r) + '</td>'; });
        html += '</tr>';
      });
      html += '</tbody></table>';
      body.innerHTML = html;
    }

    function clearComparison() {
      comparedRoutes = [];
      updateComparisonUI();
      renderRouteCards();
    }

    /* ═══════════════════════════════════════════
       FREEMIUM GATE
       ═══════════════════════════════════════════ */
    function showFmGate(feature) {
      var gate = document.getElementById('fmGate');
      var title = document.getElementById('fmGateTitle');
      var desc = document.getElementById('fmGateDesc');
      var icon = document.getElementById('fmGateIcon');
      var messages = {
        'route-detail': { title: 'Unlock Full Route Intelligence', desc: 'Detailed elevation profiles, water stops, local tips, and stage breakdowns are available to Explorer members.', icon: VX_ICONS.book },
        'configurator': { title: 'Unlock Trip Configurator', desc: 'Full 7-step trip building with flights, hotels, guides, and real pricing is available to Explorer members.', icon: VX_ICONS.plane },
        'comparison': { title: 'Unlock Route Comparison', desc: 'Side-by-side route comparison with overlaid elevation profiles is available to Explorer members.', icon: VX_ICONS.distance },
        'gpx': { title: 'Unlock GPX Downloads', desc: 'Download GPS routes for your bike computer. Free members get 1 download per month.', icon: VX_ICONS.device }
      };
      var msg = messages[feature] || messages['route-detail'];
      title.textContent = msg.title;
      desc.textContent = msg.desc;
      icon.innerHTML = msg.icon;
      gate.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeFmGate() {
      document.getElementById('fmGate').classList.remove('active');
      document.body.style.overflow = '';
    }

    // Scroll reveal
    var revealObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(function (el) { revealObs.observe(el); });

    // Nav scroll effect
    window.addEventListener('scroll', function () {
      document.getElementById('topnav').classList.toggle('scrolled', window.scrollY > 50);
    });

    // Stat counter animation
    var statObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          var el = e.target;
          var target = parseInt(el.dataset.count);
          if (!target) return;
          statObs.unobserve(el);
          var start = performance.now();
          function tick(now) {
            var p = Math.min(1, (now - start) / 1500);
            var ease = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(target * ease);
            if (p < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.5 });
    document.querySelectorAll('[data-count]').forEach(function (el) { statObs.observe(el); });

    // Close all modals/overlays (route detail, experience, feature gate)
    function closeAllModals() {
      var rd = document.getElementById('rdModal');
      if (rd && rd.classList.contains('active')) { rd.classList.remove('active'); }
      var exp = document.getElementById('experience-overlay');
      if (exp && exp.classList.contains('active')) { exp.classList.remove('active'); }
      var fm = document.getElementById('fmGate');
      if (fm && fm.classList.contains('active')) { fm.classList.remove('active'); }
      document.body.style.overflow = '';
    }

    // Nav links close any open modal so the target section is visible
    document.querySelectorAll('#topnav .nav-links a[href^="#"], .mobile-nav a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', closeAllModals);
    });

    // Mobile nav
    function setMobileNav(el) {
      document.querySelectorAll('.mnav-item').forEach(function (m) { m.classList.remove('active'); });
      el.classList.add('active');
    }

    // Mobile nav section tracking
    var sectionObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          var id = e.target.id;
          document.querySelectorAll('.mnav-item').forEach(function (m) {
            m.classList.toggle('active', m.dataset.section === id);
          });
        }
      });
    }, { threshold: 0.3 });
    document.querySelectorAll('section[id]').forEach(function (s) { sectionObs.observe(s); });

    // Globe immediate init — first paint then init (rAF deferral)
    var globeSection = document.getElementById('home');
    requestAnimationFrame(function () { initGlobe(); });

    // Globe visibility tracking — pause/resume animation when off-screen
    var globeVisObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        globeVisible = e.isIntersecting;
        if (globeVisible && isGlobeInit && typeof startGlobeAnim === 'function') startGlobeAnim();
      });
    }, { threshold: 0.05 });
    if (globeSection) globeVisObs.observe(globeSection);

    /* ═══════════════════════════════════════════
       PARTNER HELPERS
       ═══════════════════════════════════════════ */
    function getPartnersForDest(destId, category, baseId) {
      var partners = PARTNERS_DATABASE.filter(function (p) {
        if (p.destinationId !== destId) return false;
        if (category && p.category !== category) return false;
        return true;
      });
      if (baseId) {
        var dest = DESTINATION_BY_ID[destId];
        var base = dest && dest.bases ? dest.bases.find(function (b) { return b.id === baseId; }) : null;
        var basePartnerIds = base && base.partnerIds ? base.partnerIds : [];
        partners.sort(function (a, b) {
          var aMatch = basePartnerIds.indexOf(a.id) > -1 ? 0 : 1;
          var bMatch = basePartnerIds.indexOf(b.id) > -1 ? 0 : 1;
          return aMatch - bMatch;
        });
      }
      return partners;
    }

    function startTripFromBase(destId, baseId) {
      var dest = DESTINATION_BY_ID[destId];
      if (!dest || dest.routeCount === 0) return;
      var base = dest.bases ? dest.bases.find(function (b) { return b.id === baseId; }) : null;
      cfgSelectDest(destId);
      CONFIGURATOR_STATE.selectedBase = base ? baseId : null;
      CONFIGURATOR_STATE.currentStep = 2;
      cfgRefreshUI();
    }

    /* ═══════════════════════════════════════════
       TRIP CONFIGURATOR — 7-Step Wizard Engine
       ═══════════════════════════════════════════ */
    function initTripBuilder() {
      renderCfgStepsBar();
      renderCfgStep();
      renderCfgSidebar();
    }

    function renderCfgStepsBar() {
      var bar = document.getElementById('cfgStepsBar');
      if (!bar) return;
      bar.innerHTML = CONFIGURATOR_STEPS.map(function (s) {
        var cls = 'cfg-step-dot';
        if (s.num < CONFIGURATOR_STATE.currentStep) cls += ' done';
        if (s.num === CONFIGURATOR_STATE.currentStep) cls += ' active';
        return '<div class="' + cls + '" onclick="cfgGoToStep(' + s.num + ')">' +
          '<div class="cfg-step-num">' + s.num + '</div>' +
          '<div class="cfg-step-label">' + s.label + '</div>' +
          '</div>';
      }).join('<div class="cfg-step-line"></div>');
    }

    function cfgNotifyStateChange() {
      cfgCalcPricing();
      renderCfgStep();
      renderCfgSidebar();
    }

    function cfgRefreshUI() {
      cfgCalcPricing();
      renderCfgStepsBar();
      renderCfgStep();
      renderCfgSidebar();
      updateCfgNav();
    }

    function cfgGoToStep(num) {
      if (num > CONFIGURATOR_STATE.currentStep + 1) return;
      CONFIGURATOR_STATE.currentStep = num;
      cfgRefreshUI();
    }

    function cfgNextStep() {
      if (CONFIGURATOR_STATE.currentStep === 7) {
        cfgSubmitBooking();
        return;
      }
      if (CONFIGURATOR_STATE.currentStep < 7) {
        CONFIGURATOR_STATE.currentStep++;
        cfgRefreshUI();
      }
    }

    function cfgPrevStep() {
      if (CONFIGURATOR_STATE.currentStep > 1) {
        CONFIGURATOR_STATE.currentStep--;
        cfgRefreshUI();
      }
    }

    function updateCfgNav() {
      var prev = document.getElementById('cfgPrev');
      var next = document.getElementById('cfgNext');
      var isSubmitted = CONFIGURATOR_STATE.submitted;
      if (prev) prev.style.visibility = (CONFIGURATOR_STATE.currentStep === 1 || isSubmitted) ? 'hidden' : 'visible';
      if (next) {
        if (isSubmitted) {
          next.style.display = 'none';
        } else {
          next.style.display = '';
          next.disabled = false;
          next.textContent = CONFIGURATOR_STATE.currentStep === 7 ? 'Request Booking \u2192' : 'Next Step \u2192';
        }
      }
    }

    // cfgCalcPricing() defined in app.js (with NaN guards)

    function toggleGoldenKey(on) {
      CONFIGURATOR_STATE.mode = on ? 'concierge' : 'standard';
      if (on && CONFIGURATOR_STATE.destination) {
        // Auto-select premium partners
        var gkPartners = getPartnersForDest(CONFIGURATOR_STATE.destination, null, CONFIGURATOR_STATE.selectedBase).filter(function (p) { return p.isGoldenKey; });
        CONFIGURATOR_STATE.accommodation = gkPartners.filter(function (p) { return p.category === 'hotel' });
        var guide = gkPartners.filter(function (p) { return p.category === 'guide' })[0];
        if (guide) CONFIGURATOR_STATE.services.guide = guide;
      }
      renderCfgStep();
      renderCfgSidebar();
    }

    function selectTripById(id) {
      // Verify destination exists; silently abort if not (girona, cape-town, colombia have no routes)
      var exists = DESTINATIONS.some(function (d) { return d.id === id && d.routeCount > 0; });
      if (!exists) return;
      cfgSelectDest(id);
      CONFIGURATOR_STATE.currentStep = 2;
      cfgRefreshUI();
    }

    var _cfgLastStep = 1;
    function renderCfgStep() {
      var panel = document.getElementById('cfgPanel');
      if (!panel) return;
      var step = CONFIGURATOR_STATE.currentStep;
      var html = '';
      switch (step) {
        case 1: html = renderCfgStep1(); break;
        case 2: html = renderCfgStep2(); break;
        case 3: html = renderCfgStep3(); break;
        case 4: html = renderCfgStep4(); break;
        case 5: html = renderCfgStep5(); break;
        case 6: html = renderCfgStep6(); break;
        case 7: html = renderCfgStep7(); break;
      }
      // Exit animation if step actually changed
      if (step !== _cfgLastStep && panel.firstChild) {
        panel.firstChild.classList.add('cfg-panel-exit');
        setTimeout(function () {
          panel.innerHTML = '<div class="cfg-panel-enter">' + html + '</div>';
          panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 200);
      } else {
        panel.innerHTML = '<div class="cfg-panel-enter">' + html + '</div>';
      }
      _cfgLastStep = step;
      updateCfgNav();
      // Post-render hook: if step 5 and departure city is set, trigger flight search
      if (step === 5 && CONFIGURATOR_STATE.transport.departureCity && !_cfgApiLoading) {
        if (_cfgApiFlights !== null) {
          // Re-render cached results
          cfgRenderApiFlights(_cfgApiFlights);
        } else {
          cfgSearchFlights();
        }
      }
    }

    // Step 1: Destination
    function renderCfgStep1() {
      return '<h3 class="cfg-panel-title">Choose Your Destination</h3>' +
        '<p class="cfg-panel-desc">Select a destination to begin building your trip. Routes, partners, and pricing update automatically.</p>' +
        '<div class="cfg-dest-grid">' +
        DESTINATIONS.filter(function (d) { return d.routeCount > 0; }).map(function (d) {
          var sel = CONFIGURATOR_STATE.destination === d.id;
          return '<div class="cfg-dest-card' + (sel ? ' selected' : '') + '" onclick="cfgSelectDest(\'' + d.id + '\')">' +
            '<img src="' + d.image + '" alt="' + d.name + '" loading="lazy">' +
            '<div class="cfg-dest-overlay">' +
            '<div class="cfg-dest-name">' + d.flag + ' ' + d.name + '</div>' +
            '<div class="cfg-dest-tagline">' + d.tagline + '</div>' +
            '<div class="cfg-dest-meta">' + d.routeCount + ' routes · ' + d.partnerCount + ' partners · ' + seasonRangeStr(d.season) + '</div>' +
            '</div>' +
            '</div>';
        }).join('') + '</div>';
    }

    function cfgSelectDest(id) {
      CONFIGURATOR_STATE.destination = id;
      CONFIGURATOR_STATE.selectedBase = null;
      CONFIGURATOR_STATE.selectedRoutes = [];
      CONFIGURATOR_STATE.accommodation = [];
      CONFIGURATOR_STATE.transport = { flight: null, shuttles: [], departureCity: null, flightSource: 'static' };
      CONFIGURATOR_STATE.services = { guide: null, rental: null, addons: [] };
      CONFIGURATOR_STATE.submitted = false;
      if (CONFIGURATOR_STATE.mode === 'concierge') toggleGoldenKey(true);
      renderCfgStep();
      renderCfgSidebar();
    }

    // Step 2: Dates
    function cfgSmartDateDefault() {
      if (CONFIGURATOR_STATE.dates.start && CONFIGURATOR_STATE.dates.start !== '2026-07-15') return;
      var dest = DESTINATION_BY_ID[CONFIGURATOR_STATE.destination];
      if (!dest || !dest.season || !dest.season.peak || !dest.season.peak.length) return;
      var peakMonth = dest.season.peak[0];
      var year = 2026;
      // If peak month has already passed in 2026, use 2027
      var now = new Date();
      if (year === now.getFullYear() && peakMonth < now.getMonth() + 1) year = 2027;
      var mm = peakMonth < 10 ? '0' + peakMonth : '' + peakMonth;
      CONFIGURATOR_STATE.dates.start = year + '-' + mm + '-15';
      CONFIGURATOR_STATE.dates.end = addDays(CONFIGURATOR_STATE.dates.start, CONFIGURATOR_STATE.dates.nights);
    }

    function cfgDateOutOfSeason() {
      var dest = DESTINATION_BY_ID[CONFIGURATOR_STATE.destination];
      if (!dest || !dest.season || !CONFIGURATOR_STATE.dates.start) return false;
      var month = parseInt(CONFIGURATOR_STATE.dates.start.split('-')[1]);
      var s = dest.season.start, e = dest.season.end;
      if (s <= e) return month < s || month > e;
      return month < s && month > e;
    }

    function renderCfgStep2() {
      cfgSmartDateDefault();
      var dest = DESTINATION_BY_ID[CONFIGURATOR_STATE.destination];
      var seasonTip = dest ? 'Best season: ' + seasonRangeWithPeak(dest.season) : '';
      var outOfSeason = cfgDateOutOfSeason();
      return '<h3 class="cfg-panel-title">When Are You Going?</h3>' +
        '<p class="cfg-panel-desc">' + seasonTip + '</p>' +
        (outOfSeason ? '<div class="cfg-season-warning">Selected dates fall outside the rideable season for this destination. Some routes may be closed.</div>' : '') +
        '<div class="cfg-date-grid">' +
        '<div class="cfg-date-field"><label>Start Date</label><input type="date" id="cfgDateStart" value="' + (CONFIGURATOR_STATE.dates.start || '2026-07-15') + '" onchange="cfgUpdateDates()"></div>' +
        '<div class="cfg-date-field"><label>End Date</label><input type="date" id="cfgDateEnd" value="' + (CONFIGURATOR_STATE.dates.end || '2026-07-22') + '" onchange="cfgUpdateDates()"></div>' +
        '</div>' +
        '<div class="cfg-nights-display">' +
        '<label>Duration</label>' +
        '<input type="range" min="3" max="21" value="' + CONFIGURATOR_STATE.dates.nights + '" id="cfgNightsSlider" oninput="cfgUpdateNights(this.value)">' +
        '<span class="cfg-nights-val" id="cfgNightsVal">' + CONFIGURATOR_STATE.dates.nights + ' nights</span>' +
        '</div>';
    }

    function cfgUpdateDates() {
      var s = document.getElementById('cfgDateStart');
      var e = document.getElementById('cfgDateEnd');
      if (s && e && s.value && e.value) {
        CONFIGURATOR_STATE.dates.start = s.value;
        CONFIGURATOR_STATE.dates.end = e.value;
        var diff = Math.round((new Date(e.value) - new Date(s.value)) / 86400000);
        if (diff > 0) {
          CONFIGURATOR_STATE.dates.nights = diff;
          var slider = document.getElementById('cfgNightsSlider');
          if (slider) slider.value = diff;
          var val = document.getElementById('cfgNightsVal');
          if (val) val.textContent = diff + ' nights';
        }
      }
      cfgCalcPricing();
      renderCfgSidebar();
    }

    function cfgUpdateNights(n) {
      CONFIGURATOR_STATE.dates.nights = parseInt(n);
      var val = document.getElementById('cfgNightsVal');
      if (val) val.textContent = n + ' nights';
      cfgCalcPricing();
      renderCfgSidebar();
    }

    // Step 3: Routes
    function renderCfgStep3() {
      var destRoutes = ROUTE_DATABASE.filter(function (r) { return r.destinationId === CONFIGURATOR_STATE.destination; });
      var tripMonth = CONFIGURATOR_STATE.dates.start ? parseInt(CONFIGURATOR_STATE.dates.start.split('-')[1]) : null;
      return '<h3 class="cfg-panel-title">Select Your Routes</h3>' +
        '<p class="cfg-panel-desc">Choose one or more routes for your trip. Multi-day routes include stage breakdowns.</p>' +
        '<div class="cfg-route-grid">' +
        destRoutes.map(function (r) {
          var sel = CONFIGURATOR_STATE.selectedRoutes.indexOf(r.id) > -1;
          var closed = tripMonth && !isRouteRideableInMonth(r, tripMonth);
          var peak = tripMonth && isRoutePeakInMonth(r, tripMonth);
          return '<div class="cfg-route-mini' + (sel ? ' selected' : '') + (closed ? ' cfg-route-closed' : '') + '" onclick="cfgToggleRoute(\'' + r.id + '\')">' +
            '<img src="' + r.image + '" alt="' + r.name + '" loading="lazy">' +
            '<div class="cfg-route-mini-body">' +
            '<div class="cfg-route-mini-name">' + r.name +
            (closed ? '<span class="cfg-route-season-tag closed">Closed in ' + monthName(tripMonth) + '</span>' : '') +
            (peak ? '<span class="cfg-route-season-tag peak">Peak Season</span>' : '') +
            '</div>' +
            '<div class="cfg-route-mini-stats">' + r.distance + 'km · ' + r.elevationGain.toLocaleString() + 'm ↑ · ' + difficultyBar(r.difficulty) + '</div>' +
            '<div class="cfg-route-mini-desc">' + r.shortDesc.substring(0, 120) + '...</div>' +
            (r.stages.length ? '<div class="cfg-route-mini-stages">' + r.stages.length + '-day stage route</div>' : '') +
            '</div>' +
            '<div class="cfg-route-mini-check">' + (sel ? '✓' : '') + '</div>' +
            '</div>';
        }).join('') + '</div>';
    }

    function cfgToggleRoute(id) {
      var idx = CONFIGURATOR_STATE.selectedRoutes.indexOf(id);
      if (idx > -1) CONFIGURATOR_STATE.selectedRoutes.splice(idx, 1);
      else CONFIGURATOR_STATE.selectedRoutes.push(id);
      renderCfgStep();
      renderCfgSidebar();
    }

    // Step 4: Accommodation
    function renderCfgStep4() {
      var st = CONFIGURATOR_STATE;
      var hotels = getPartnersForDest(st.destination, 'hotel', st.selectedBase);
      var baseObj = null;
      if (st.selectedBase) {
        var dest = DESTINATION_BY_ID[st.destination];
        baseObj = dest && dest.bases ? dest.bases.find(function (b) { return b.id === st.selectedBase; }) : null;
      }
      var basePartnerIds = baseObj && baseObj.partnerIds ? baseObj.partnerIds : [];
      return '<h3 class="cfg-panel-title">Where You\'ll Stay</h3>' +
        '<p class="cfg-panel-desc">Cycling-specific hotels with bike storage, early breakfast, and workshop access.</p>' +
        '<div class="cfg-hotel-grid">' +
        hotels.map(function (h) {
          var sel = st.accommodation.some(function (a) { return a.id === h.id });
          var atBase = basePartnerIds.indexOf(h.id) > -1;
          return '<div class="cfg-hotel-card' + (sel ? ' selected' : '') + (h.isGoldenKey ? ' golden-key' : '') + '" onclick="cfgToggleHotel(\'' + h.id + '\')">' +
            (atBase ? '<span class="cfg-base-tag">At your base</span>' : '') +
            (h.isGoldenKey ? '<span class="cfg-gk-badge">Golden Key</span>' : '') +
            '<img src="' + h.image + '" alt="' + h.name + '" loading="lazy">' +
            '<div class="cfg-hotel-info">' +
            '<div class="cfg-hotel-name">' + h.name + '</div>' +
            '<div class="cfg-hotel-rating">' + h.rating + '★ · ' + h.reviewCount + ' reviews</div>' +
            '<div class="cfg-hotel-amenities">' + h.cyclingAmenities.slice(0, 3).map(function (a) { return '<span class="amenity-tag">' + a + '</span>' }).join('') + '</div>' +
            '<div class="cfg-hotel-price">€' + h.priceFrom + '/night · <strong>€' + (h.priceFrom * st.dates.nights) + '</strong> total</div>' +
            '</div>' +
            '<div class="cfg-check">' + (sel ? '✓' : '') + '</div>' +
            '</div>';
        }).join('') + '</div>';
    }

    function cfgToggleItem(stateArray, id) {
      var item = PARTNER_BY_ID[id];
      if (!item) return;
      var idx = -1;
      stateArray.forEach(function (a, i) { if (a.id === id) idx = i; });
      if (idx > -1) stateArray.splice(idx, 1);
      else stateArray.push(item);
      cfgNotifyStateChange();
    }

    function cfgToggleHotel(id) {
      cfgToggleItem(CONFIGURATOR_STATE.accommodation, id);
    }

    // Step 5: Transport — departure city search + API flights + static fallback

    var _cfgDepTimer = null;
    var _cfgDepCache = {};
    var _cfgApiFlights = null;   // null=not searched, []=searched-empty, array=results
    var _cfgApiLoading = false;
    var _cfgApiFailed = false;
    var _cfgStaticOpen = false;

    // formatDateForKiwi(), addDays(), cfgGetBikeFee() defined in app.js

    function cfgDepartureSearch(term) {
      clearTimeout(_cfgDepTimer);
      if (!term || term.length < 2) {
        var dd = document.getElementById('cfgDepDropdown');
        if (dd) dd.style.display = 'none';
        return;
      }
      _cfgDepTimer = setTimeout(function () {
        var dd = document.getElementById('cfgDepDropdown');
        if (dd) { dd.style.display = 'block'; dd.innerHTML = '<div class="cfg-dep-loading">Searching cities...</div>'; }

        var t = term.toLowerCase();
        var cities = [];

        // Search DEPARTURE_CITIES (global database)
        if (typeof DEPARTURE_CITIES !== 'undefined') {
          cities = DEPARTURE_CITIES.filter(function (c) {
            return c.name.toLowerCase().includes(t) ||
              c.code.toLowerCase().includes(t) ||
              c.country.toLowerCase().includes(t);
          });
        }

        // Also include any AIRLINES_DATA route origins not already covered
        if (typeof AIRLINES_DATA !== 'undefined') {
          var existingNames = {};
          cities.forEach(function (c) { existingNames[c.name.toLowerCase()] = true; });
          AIRLINES_DATA.forEach(function (a) {
            if (a.routes) {
              a.routes.forEach(function (r) {
                if (r.from && r.from.toLowerCase().includes(t) && !existingNames[r.from.toLowerCase()]) {
                  existingNames[r.from.toLowerCase()] = true;
                  cities.push({ name: r.from, code: r.from, country: '' });
                }
              });
            }
          });
        }

        // Limit to top 10 for cleaner UI
        cfgRenderDepartureDropdown(cities.slice(0, 10));
      }, 200);
    }

    function cfgRenderDepartureDropdown(cities) {
      var dd = document.getElementById('cfgDepDropdown');
      if (!dd) return;
      if (!cities.length) {
        dd.style.display = 'block';
        dd.innerHTML = '<div class="cfg-dep-empty">No cities found</div>';
        return;
      }
      dd.style.display = 'block';
      dd.innerHTML = cities.map(function (c) {
        return '<div class="cfg-dep-option" onclick="cfgSelectDeparture(\'' + c.code + '\',\'' + c.name.replace(/'/g, "\\'") + '\',\'' + (c.country || '').replace(/'/g, "\\'") + '\')">' +
          '<span>' + c.name + (c.country ? ', ' + c.country : '') + '</span>' +
          '<span class="cfg-dep-option-code">' + c.code + '</span>' +
          '</div>';
      }).join('');
    }

    function cfgSelectDeparture(code, name, country) {
      CONFIGURATOR_STATE.transport.departureCity = { name: name, code: code, country: country };
      var dd = document.getElementById('cfgDepDropdown');
      if (dd) dd.style.display = 'none';
      // Re-render the departure input area to show chip
      var wrapper = document.getElementById('cfgDepWrapper');
      if (wrapper) {
        wrapper.innerHTML = cfgRenderDepartureChip();
      }
      cfgSearchFlights();
    }

    function cfgRenderDepartureChip() {
      var dc = CONFIGURATOR_STATE.transport.departureCity;
      if (!dc) return '';
      return '<div class="cfg-departure-chip">' +
        VX_ICONS.plane + ' ' + dc.name + (dc.country ? ', ' + dc.country : '') +
        ' <span class="cfg-dep-option-code">' + dc.code + '</span>' +
        ' <span class="cfg-dep-clear" onclick="cfgClearDeparture()">✕</span>' +
        '</div>';
    }

    function cfgClearDeparture() {
      CONFIGURATOR_STATE.transport.departureCity = null;
      CONFIGURATOR_STATE.transport.flightSource = 'static';
      CONFIGURATOR_STATE.transport.flight = null;
      _cfgApiFlights = null;
      _cfgApiFailed = false;
      _cfgStaticOpen = false;
      cfgNotifyStateChange();
    }

    function cfgSearchFlights() {
      var dc = CONFIGURATOR_STATE.transport.departureCity;
      if (!dc) return;
      var dest = CONFIGURATOR_STATE.destination;
      var destObj = DESTINATION_BY_ID[dest];
      if (!destObj || !destObj.airportIATA || !destObj.airportIATA.length) return;

      var dateFrom = CONFIGURATOR_STATE.dates.start || '2026-07-15';
      var dateTo = addDays(dateFrom, 2);

      _cfgApiLoading = true;
      _cfgApiFailed = false;
      _cfgApiFlights = null;
      CONFIGURATOR_STATE.transport.flightSource = 'api';

      // Show loading state
      var resultsEl = document.getElementById('cfgFlightResults');
      if (resultsEl) {
        resultsEl.innerHTML = '<div class="cfg-flight-loading"><div class="cfg-spinner"></div> Searching flights from ' + dc.name + '...</div>';
      }

      // Mimic API delay
      setTimeout(function () {
        var results = [];

        if (typeof AIRLINES_DATA !== 'undefined') {
          AIRLINES_DATA.forEach(function (a) {
            if (a.routes) {
              a.routes.forEach(function (r) {
                // Check origin match (fuzzy or exact)
                var originMatch = r.from && (r.from.toLowerCase() === dc.name.toLowerCase() || r.from === dc.code);
                // Check destination match via airport keywords
                var destMatch = false;
                if (destObj && destObj.airports) {
                  var toLower = r.to.toLowerCase();
                  destMatch = destObj.airports.some(function (kw) { return toLower.indexOf(kw) > -1; });
                } else if (destObj) {
                  destMatch = r.to.toLowerCase().includes(destObj.id.toLowerCase());
                }

                if (originMatch && destMatch) {
                  results.push({
                    airline: a.name,
                    bikeFee: a.bikeFee,
                    bikePolicy: a.bikePolicy,
                    from: r.from,
                    to: r.to,
                    basePrice: r.basePrice,
                    duration: r.duration,
                    source: 'api' // mimic api source
                  });
                }
              });
            }
          });
        }

        _cfgApiLoading = false;

        var flights = results.map(function (f) {
          return {
            airline: f.airline,
            flightNum: 'Local',
            depTime: '10:00',
            arrTime: '14:00',
            duration: f.duration,
            price: f.basePrice,
            bikeFee: f.bikeFee,
            bikePolicy: f.bikePolicy,
            from: f.from,
            to: f.to,
            source: 'api'
          };
        });

        _cfgApiFlights = flights;
        _cfgStaticOpen = false;

        if (flights.length > 0) {
          cfgRenderApiFlights(flights);
        } else {
          _cfgApiLoading = false;
          var resultsEl = document.getElementById('cfgFlightResults');
          if (resultsEl) resultsEl.innerHTML = '<div class="cfg-flight-error">No direct flights found from ' + dc.name + ' to this destination in the local database.</div>';
        }
      }, 600);
    }


    // cfgTransformApiResult() defined in app.js

    function cfgRenderApiFlights(flights) {
      var resultsEl = document.getElementById('cfgFlightResults');
      if (!resultsEl) return;
      if (!flights.length) {
        resultsEl.innerHTML = '<div class="cfg-flight-empty">No flights found for these dates. Try different dates or check the suggested flights below.</div>';
        _cfgStaticOpen = true;
        var body = document.getElementById('cfgStaticBody');
        var chev = document.getElementById('cfgStaticChevron');
        if (body) body.classList.add('open');
        if (chev) chev.classList.add('open');
        return;
      }

      var bestPrice = Math.min.apply(null, flights.map(function (f) { return f.basePrice + f.bikeFee; }));
      var selFlight = CONFIGURATOR_STATE.transport.flight;

      var html = '<div class="cfg-flight-count"><strong>' + flights.length + '</strong> flights found</div>';
      html += '<table class="cfg-flight-table"><thead><tr><th>Airline</th><th>Route</th><th>Duration</th><th>Stops</th><th>Flight</th><th>Bike Fee</th><th>Total</th><th></th></tr></thead><tbody>';

      flights.forEach(function (f, idx) {
        var total = f.basePrice + f.bikeFee;
        var isBest = total === bestPrice;
        var sel = selFlight && selFlight.source === 'api' && selFlight._apiIdx === idx;

        html += '<tr class="' + (sel ? 'selected' : '') + '" onclick="cfgSelectApiFlight(' + idx + ')">' +
          '<td><strong>' + f.airline + '</strong></td>' +
          '<td>' + f.from + ' → ' + f.to + '</td>' +
          '<td>' + f.duration + '</td>' +
          '<td>' + (f.stops === 0 ? '<span class="cfg-direct">Direct</span>' : f.stops + ' stop' + (f.stops > 1 ? 's' : '')) + '</td>' +
          '<td>€' + f.basePrice + '</td>' +
          '<td>' + (f.bikeFeeEstimate ? '<span class="cfg-fee-estimate">~€' + f.bikeFee + '*</span>' : '€' + f.bikeFee) + '</td>' +
          '<td><strong' + (isBest ? ' class="cfg-best-price"' : '') + '>€' + total + '</strong></td>' +
          '<td>' + (sel ? '✓' : '') + '</td>' +
          '</tr>';
      });

      html += '</tbody></table>';

      var hasEstimates = flights.some(function (f) { return f.bikeFeeEstimate; });
      if (hasEstimates) {
        html += '<div class="cfg-fee-note">* Estimated bike fee — check airline website for exact policy and price.</div>';
      }

      resultsEl.innerHTML = html;
    }

    function cfgSelectApiFlight(idx) {
      if (!_cfgApiFlights || !_cfgApiFlights[idx]) return;
      var f = _cfgApiFlights[idx];
      CONFIGURATOR_STATE.transport.flight = {
        airline: f.airline,
        from: f.from,
        to: f.to,
        basePrice: f.basePrice,
        bikeFee: f.bikeFee,
        bikePolicy: f.bikePolicy,
        duration: f.duration,
        stops: f.stops,
        deepLink: f.deepLink,
        bikeFeeEstimate: f.bikeFeeEstimate,
        source: 'api',
        _apiIdx: idx
      };
      CONFIGURATOR_STATE.transport.flightSource = 'api';
      cfgCalcPricing();
      cfgRenderApiFlights(_cfgApiFlights);
      renderCfgSidebar();
    }

    function cfgToggleStaticFlights() {
      _cfgStaticOpen = !_cfgStaticOpen;
      var body = document.getElementById('cfgStaticBody');
      var chev = document.getElementById('cfgStaticChevron');
      if (body) body.classList.toggle('open');
      if (chev) chev.classList.toggle('open');
    }

    // Click-outside handler for departure dropdown
    document.addEventListener('click', function (e) {
      var dropdown = document.getElementById('cfgDepDropdown');
      var input = document.getElementById('cfgDepInput');
      if (dropdown && input && !dropdown.contains(e.target) && e.target !== input) {
        dropdown.style.display = 'none';
      }
    });

    // cfgGetStaticFlights() defined in app.js

    function renderCfgStep5() {
      var dest = CONFIGURATOR_STATE.destination;
      var dc = CONFIGURATOR_STATE.transport.departureCity;
      var staticFlights = cfgGetStaticFlights();
      var shuttles = PARTNERS_DATABASE.filter(function (p) { return p.destinationId === dest && p.category === 'shuttle' });
      var selFlight = CONFIGURATOR_STATE.transport.flight;
      var hasApi = dc !== null;
      var staticExpanded = !hasApi || _cfgStaticOpen || _cfgApiFailed;

      var html = '<h3 class="cfg-panel-title">Getting There</h3>' +
        '<p class="cfg-panel-desc">Search flights from your city with transparent bike fees.</p>';

      // Departure city input
      html += '<div class="cfg-departure-wrapper">';
      html += '<div class="cfg-departure-label">' + VX_ICONS.plane + ' Departure City</div>';
      html += '<div id="cfgDepWrapper">';
      if (dc) {
        html += cfgRenderDepartureChip();
      } else {
        html += '<div class="cfg-departure-input-row">' +
          '<input type="text" class="cfg-departure-input" id="cfgDepInput" placeholder="Type your city (e.g. London, Berlin, New York...)" oninput="cfgDepartureSearch(this.value)" autocomplete="off">' +
          '</div>';
      }
      html += '</div>';
      html += '<div id="cfgDepDropdown" class="cfg-dep-dropdown" style="display:none"></div>';
      html += '</div>';

      // API flight results container
      html += '<div id="cfgFlightResults"></div>';

      // Static flights section — always collapsible
      if (staticFlights.length) {
        var staticLabel = hasApi ? 'Suggested Flights (from European hubs)' : 'Browse Suggested Flights (from European hubs)';
        // Collapsed by default when no city selected; expanded only if user toggled or API failed
        var showExpanded = hasApi ? (_cfgStaticOpen || _cfgApiFailed) : _cfgStaticOpen;

        html += '<div class="cfg-static-section">';
        html += '<div class="cfg-static-toggle" onclick="cfgToggleStaticFlights()">' +
          '<span>' + staticLabel + '</span>' +
          '<span class="cfg-chevron' + (showExpanded ? ' open' : '') + '" id="cfgStaticChevron">▼</span>' +
          '</div>';
        html += '<div class="cfg-static-body' + (showExpanded ? ' open' : '') + '" id="cfgStaticBody">';

        html += '<table class="cfg-flight-table"><thead><tr><th>Airline</th><th>Route</th><th>Duration</th><th>Flight</th><th>Bike Fee</th><th>Total</th><th></th></tr></thead><tbody>';
        staticFlights.forEach(function (f) {
          var total = f.basePrice + f.bikeFee;
          var sel = selFlight && selFlight.source === 'static' && selFlight.airline === f.airline && selFlight.from === f.from;
          html += '<tr class="' + (sel ? 'selected' : '') + '" onclick="cfgSelectFlight(\'' + f.airline.replace(/'/g, "\\'") + '\',\'' + f.from.replace(/'/g, "\\'") + '\',\'' + f.to.replace(/'/g, "\\'") + '\',' + f.basePrice + ',' + f.bikeFee + ',\'' + f.duration + '\')">' +
            '<td><strong>' + f.airline + '</strong></td><td>' + f.from + ' → ' + f.to + '</td><td>' + f.duration + '</td>' +
            '<td>€' + f.basePrice + '</td><td>€' + f.bikeFee + '</td><td><strong>€' + total + '</strong></td>' +
            '<td>' + (sel ? '✓' : '') + '</td></tr>';
        });
        html += '</tbody></table>';

        html += '</div></div>'; // close static-body + static-section
      }

      // Shuttles
      if (shuttles.length) {
        html += '<h4 style="margin-top:1.5rem;color:var(--chalk)">Airport Shuttles</h4><div class="cfg-shuttle-list">';
        shuttles.forEach(function (s) {
          var sel = CONFIGURATOR_STATE.transport.shuttles.some(function (sh) { return sh.id === s.id });
          html += '<div class="cfg-shuttle-item' + (sel ? ' selected' : '') + '" onclick="cfgToggleShuttle(\'' + s.id + '\')">' +
            VX_ICONS.van + ' <strong>' + s.name + '</strong> · From €' + s.priceFrom + ' ' + (sel ? '✓' : '+') +
            '</div>';
        });
        html += '</div>';
      }

      return html;
    }

    function cfgSelectFlight(airline, from, to, price, bikeFee, duration) {
      CONFIGURATOR_STATE.transport.flight = { airline: airline, from: from, to: to, basePrice: price, bikeFee: bikeFee, duration: duration, source: 'static' };
      CONFIGURATOR_STATE.transport.flightSource = 'static';
      cfgNotifyStateChange();
    }

    function cfgToggleShuttle(id) {
      cfgToggleItem(CONFIGURATOR_STATE.transport.shuttles, id);
    }

    // Step 6: Services
    function renderCfgStep6() {
      var st = CONFIGURATOR_STATE;
      var guides = getPartnersForDest(st.destination, 'guide', st.selectedBase);
      var rentals = getPartnersForDest(st.destination, 'rental', st.selectedBase);
      var physio = getPartnersForDest(st.destination, 'physio', st.selectedBase);
      var html = '<h3 class="cfg-panel-title">Services & Support</h3>' +
        '<p class="cfg-panel-desc">Guides, bike rental, and recovery services to complete your trip.</p>';
      // Guides
      if (guides.length) {
        html += '<h4 style="color:var(--chalk);margin-bottom:.5rem">Guided Rides</h4><div class="cfg-service-grid">';
        guides.forEach(function (g) {
          var sel = CONFIGURATOR_STATE.services.guide && CONFIGURATOR_STATE.services.guide.id === g.id;
          html += '<div class="cfg-service-card' + (sel ? ' selected' : '') + (g.isGoldenKey ? ' golden-key' : '') + '" onclick="cfgSelectGuide(\'' + g.id + '\')">' +
            (g.isGoldenKey ? '<span class="cfg-gk-badge">Golden Key</span>' : '') +
            '<div class="cfg-service-name">' + g.name + '</div>' +
            '<div class="cfg-service-desc">' + g.description.substring(0, 80) + '...</div>' +
            '<div class="cfg-service-price">From €' + g.priceFrom + '/day · ' + g.rating + '★</div>' +
            '</div>';
        });
        html += '</div>';
      }
      // Rentals
      if (rentals.length) {
        html += '<h4 style="color:var(--chalk);margin:1.5rem 0 .5rem">Bike Rental</h4><div class="cfg-service-grid">';
        rentals.forEach(function (r) {
          var sel = CONFIGURATOR_STATE.services.rental && CONFIGURATOR_STATE.services.rental.id === r.id;
          html += '<div class="cfg-service-card' + (sel ? ' selected' : '') + '" onclick="cfgSelectRental(\'' + r.id + '\')">' +
            '<div class="cfg-service-name">' + r.name + '</div>' +
            '<div class="cfg-service-desc">' + r.cyclingAmenities.slice(0, 3).join(' · ') + '</div>' +
            '<div class="cfg-service-price">From €' + r.priceFrom + '/day · ' + r.rating + '★</div>' +
            '</div>';
        });
        html += '</div>';
      }
      // Recovery
      if (physio.length) {
        html += '<h4 style="color:var(--chalk);margin:1.5rem 0 .5rem">Recovery & Wellness</h4><div class="cfg-service-grid">';
        physio.forEach(function (p) {
          var sel = CONFIGURATOR_STATE.services.addons.some(function (a) { return a.id === p.id });
          html += '<div class="cfg-service-card' + (sel ? ' selected' : '') + (p.isGoldenKey ? ' golden-key' : '') + '" onclick="cfgToggleAddon(\'' + p.id + '\')">' +
            (p.isGoldenKey ? '<span class="cfg-gk-badge">Golden Key</span>' : '') +
            '<div class="cfg-service-name">' + p.name + '</div>' +
            '<div class="cfg-service-desc">' + p.cyclingAmenities.slice(0, 3).join(' · ') + '</div>' +
            '<div class="cfg-service-price">From €' + p.priceFrom + '/session · ' + p.rating + '★</div>' +
            '</div>';
        });
        html += '</div>';
      }
      return html;
    }

    function cfgSelectGuide(id) {
      var g = PARTNER_BY_ID[id];
      CONFIGURATOR_STATE.services.guide = (CONFIGURATOR_STATE.services.guide && CONFIGURATOR_STATE.services.guide.id === id) ? null : g;
      cfgNotifyStateChange();
    }

    function cfgSelectRental(id) {
      var r = PARTNER_BY_ID[id];
      CONFIGURATOR_STATE.services.rental = (CONFIGURATOR_STATE.services.rental && CONFIGURATOR_STATE.services.rental.id === id) ? null : r;
      cfgNotifyStateChange();
    }

    function cfgToggleAddon(id) {
      cfgToggleItem(CONFIGURATOR_STATE.services.addons, id);
    }

    // Booking submission
    function cfgSubmitBooking() {
      if (CONFIGURATOR_STATE.submitted) return;
      var name = document.getElementById('cfgBookName');
      var email = document.getElementById('cfgBookEmail');
      var phone = document.getElementById('cfgBookPhone');
      if (!name || !email || !name.value.trim() || !email.value.trim()) {
        var firstEmpty = (!name || !name.value.trim()) ? name : email;
        if (firstEmpty) firstEmpty.focus();
        return;
      }
      if (email.validity && !email.validity.valid) { email.focus(); return; }
      var st = CONFIGURATOR_STATE;
      var dest = DESTINATION_BY_ID[st.destination];
      var payload = {
        name: name.value.trim(),
        email: email.value.trim(),
        phone: phone ? phone.value.trim() : '',
        destination: dest ? dest.name : st.destination,
        base: st.selectedBase || '',
        dates: st.dates,
        mode: st.mode,
        routes: st.selectedRoutes.map(function (rid) { var r = ROUTE_BY_ID[rid]; return r ? r.name : rid; }),
        accommodation: st.accommodation.map(function (a) { return a.name; }),
        guide: st.services.guide ? st.services.guide.name : '',
        rental: st.services.rental ? st.services.rental.name : '',
        addons: st.services.addons.map(function (a) { return a.name; }),
        flight: st.transport.flight ? st.transport.flight.airline + ' ' + st.transport.flight.from + ' → ' + st.transport.flight.to : '',
        total: st.pricing.total
      };
      var formData = new FormData();
      formData.append('form-name', 'booking-request');
      Object.keys(payload).forEach(function (k) {
        var val = typeof payload[k] === 'object' ? JSON.stringify(payload[k]) : payload[k];
        formData.append(k, val);
      });
      CONFIGURATOR_STATE.submitted = true;
      var btn = document.getElementById('cfgNext');
      if (btn) { btn.textContent = 'Submitting...'; btn.disabled = true; }
      fetch('/', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData
      }).then(function () {
        renderCfgStep();
        updateCfgNav();
      }).catch(function () {
        renderCfgStep();
        updateCfgNav();
      });
    }

    function cfgSerializeBooking() {
      var st = CONFIGURATOR_STATE;
      var dest = DESTINATION_BY_ID[st.destination];
      return {
        destination: dest ? dest.name : '',
        base: st.selectedBase || '',
        nights: st.dates.nights,
        mode: st.mode,
        routes: st.selectedRoutes.length,
        accommodation: st.accommodation.length,
        total: st.pricing.total
      };
    }

    function cfgResetBooking() {
      CONFIGURATOR_STATE.currentStep = 1;
      CONFIGURATOR_STATE.destination = null;
      CONFIGURATOR_STATE.selectedBase = null;
      CONFIGURATOR_STATE.selectedRoutes = [];
      CONFIGURATOR_STATE.accommodation = [];
      CONFIGURATOR_STATE.transport = { flight: null, shuttles: [], departureCity: null, flightSource: 'static' };
      CONFIGURATOR_STATE.services = { guide: null, rental: null, addons: [] };
      CONFIGURATOR_STATE.pricing = { subtotal: 0, memberDiscount: 0, goldenKeyPremium: 0, total: 0 };
      CONFIGURATOR_STATE.submitted = false;
      cfgRefreshUI();
    }

    // Step 7: Review
    function renderCfgStep7() {
      var st = CONFIGURATOR_STATE;
      var dest = DESTINATION_BY_ID[st.destination];

      // Confirmation view after submission
      if (st.submitted) {
        return '<div class="cfg-confirmation">' +
          '<div class="cfg-confirm-icon">&#10003;</div>' +
          '<h3 class="cfg-panel-title">Booking Request Sent</h3>' +
          '<p class="cfg-panel-desc">We\'ve received your trip request for ' + (dest ? dest.flag + ' ' + dest.name : 'your destination') + '.</p>' +
          '<div class="cfg-confirm-next">' +
          '<div class="cfg-confirm-step">We\'ll review your trip and email you within 24 hours with availability and final pricing.</div>' +
          '<div class="cfg-confirm-step">No payment is required until your trip is confirmed.</div>' +
          '</div>' +
          '<div class="cfg-confirm-summary">' +
          '<div class="cfg-confirm-line"><span>Destination</span><span>' + (dest ? dest.name : '') + '</span></div>' +
          '<div class="cfg-confirm-line"><span>Duration</span><span>' + st.dates.nights + ' nights</span></div>' +
          '<div class="cfg-confirm-line"><span>Routes</span><span>' + st.selectedRoutes.length + '</span></div>' +
          '<div class="cfg-confirm-line"><span>Est. Total</span><span>\u20AC' + st.pricing.total + '</span></div>' +
          '</div>' +
          '<button class="btn btn-ghost cfg-confirm-reset" onclick="cfgResetBooking()" style="color:var(--chalk);border-color:rgba(255,255,255,0.2);margin-top:1.5rem">Plan Another Trip</button>' +
          '</div>';
      }

      var html = '<h3 class="cfg-panel-title">Trip Review</h3>';
      if (!dest) return html + '<p class="cfg-panel-desc">Please select a destination first.</p>';
      html += '<div class="cfg-review-header">' +
        '<div class="cfg-review-dest">' + dest.flag + ' ' + dest.name + ' · ' + st.dates.nights + ' nights</div>' +
        (st.mode === 'concierge' ? '<span class="cfg-gk-badge" style="display:inline-block">Golden Key</span>' : '') +
        '</div>';
      // Timeline
      html += '<div class="cfg-review-timeline">';
      // Flight
      if (st.transport.flight) {
        var fl = st.transport.flight;
        var flTotal = fl.basePrice + fl.bikeFee;
        var flDetail = fl.from + ' → ' + fl.to;
        if (fl.stops !== undefined) flDetail += ' · ' + (fl.stops === 0 ? 'Direct' : fl.stops + ' stop' + (fl.stops > 1 ? 's' : ''));
        if (fl.duration) flDetail += ' · ' + fl.duration;
        var flPriceDetail = '€' + fl.basePrice + ' flight + €' + fl.bikeFee + ' bike' + (fl.bikeFeeEstimate ? '*' : '');
        html += '<div class="cfg-review-item">' + VX_ICONS.plane +
          '<div><strong>' + fl.airline + '</strong><br>' + flDetail + '<br><span style="font-size:.65rem;color:rgba(255,255,255,.4)">' + flPriceDetail + '</span>' +
          (fl.deepLink ? '<br><a href="' + fl.deepLink + '" target="_blank" rel="noopener" class="cfg-api-book-link">Book on Kiwi.com →</a>' : '') +
          '</div><div>€' + flTotal + '</div></div>';
      }
      // Shuttles
      st.transport.shuttles.forEach(function (s) {
        html += '<div class="cfg-review-item">' + VX_ICONS.van + '<div><strong>' + s.name + '</strong><br>Airport transfer</div><div>€' + s.priceFrom + '</div></div>';
      });
      // Routes
      st.selectedRoutes.forEach(function (rid) {
        var r = ROUTE_BY_ID[rid];
        if (r) html += '<div class="cfg-review-item">' + VX_ICONS.bike + '<div><strong>' + r.name + '</strong><br>' + r.distance + 'km · ' + r.elevationGain + 'm ↑</div><div>—</div></div>';
      });
      // Accommodation
      st.accommodation.forEach(function (a) {
        html += '<div class="cfg-review-item">' + VX_ICONS.hotel + '<div><strong>' + a.name + '</strong><br>' + st.dates.nights + ' nights</div><div>€' + (a.priceFrom * st.dates.nights) + '</div></div>';
      });
      // Guide
      if (st.services.guide) {
        var gDays = Math.min(st.dates.nights, 5);
        html += '<div class="cfg-review-item">' + VX_ICONS.bike + '<div><strong>' + st.services.guide.name + '</strong><br>' + gDays + ' guided days</div><div>€' + (st.services.guide.priceFrom * gDays) + '</div></div>';
      }
      // Rental
      if (st.services.rental) {
        html += '<div class="cfg-review-item">' + VX_ICONS.wrench + '<div><strong>' + st.services.rental.name + '</strong><br>' + st.dates.nights + ' days rental</div><div>€' + (st.services.rental.priceFrom * st.dates.nights) + '</div></div>';
      }
      // Addons
      st.services.addons.forEach(function (a) {
        html += '<div class="cfg-review-item">' + VX_ICONS.massage + '<div><strong>' + a.name + '</strong></div><div>€' + a.priceFrom + '</div></div>';
      });
      html += '</div>';
      // Pricing summary
      html += '<div class="cfg-review-pricing">' +
        '<div class="cfg-review-line"><span>Subtotal</span><span>€' + st.pricing.subtotal + '</span></div>' +
        '<div class="cfg-review-line" style="color:var(--diff-1)"><span>Explorer Discount (10%)</span><span>−€' + st.pricing.memberDiscount + '</span></div>' +
        (st.pricing.goldenKeyPremium ? '<div class="cfg-review-line" style="color:var(--gold)"><span>Golden Key Premium</span><span>+€' + st.pricing.goldenKeyPremium + '</span></div>' : '') +
        '<div class="cfg-review-line cfg-review-total"><span>Total</span><span>€' + st.pricing.total + '</span></div>' +
        '</div>';
      // Contact form
      html += '<div class="cfg-booking-form">' +
        '<div class="cfg-booking-form-title">Your Details</div>' +
        '<div class="cfg-booking-fields">' +
        '<input type="text" id="cfgBookName" placeholder="Full name" required class="cfg-book-input">' +
        '<input type="email" id="cfgBookEmail" placeholder="Email address" required class="cfg-book-input">' +
        '<input type="tel" id="cfgBookPhone" placeholder="Phone (optional)" class="cfg-book-input">' +
        '</div>' +
        '</div>';
      return html;
    }

    // Sidebar
    function renderCfgSidebar() {
      var sb = document.getElementById('cfgSidebar');
      if (!sb) return;
      var st = CONFIGURATOR_STATE;
      var dest = DESTINATION_BY_ID[st.destination];
      var html = '<div class="cfg-sb-title">Trip Summary</div>';
      if (dest) {
        html += '<div class="cfg-sb-dest">' + dest.flag + ' ' + dest.name + '</div>';
        html += '<div class="cfg-sb-nights">' + st.dates.nights + ' nights</div>';
      }
      if (st.selectedRoutes.length) {
        html += '<div class="cfg-sb-section"><strong>Routes (' + st.selectedRoutes.length + ')</strong></div>';
        st.selectedRoutes.forEach(function (rid) {
          var r = ROUTE_BY_ID[rid];
          if (r) html += '<div class="cfg-sb-item">' + r.name + ' · ' + r.distance + 'km</div>';
        });
      }
      if (st.accommodation.length) {
        html += '<div class="cfg-sb-section"><strong>Accommodation</strong></div>';
        st.accommodation.forEach(function (a) {
          html += '<div class="cfg-sb-item">' + a.name + ' · €' + (a.priceFrom * st.dates.nights) + '</div>';
        });
      }
      if (st.transport.flight) {
        html += '<div class="cfg-sb-section"><strong>Transport</strong></div>';
        var sbFl = st.transport.flight;
        html += '<div class="cfg-sb-item">' + sbFl.airline + ' · ' + sbFl.from + ' → ' + sbFl.to + '</div>';
        html += '<div class="cfg-sb-item" style="font-size:.65rem;color:rgba(255,255,255,.35)">€' + sbFl.basePrice + ' + €' + sbFl.bikeFee + ' bike = €' + (sbFl.basePrice + sbFl.bikeFee) + '</div>';
      }
      html += '<div class="cfg-sb-total"><span>Est. Total</span><span>€' + st.pricing.total + '</span></div>';
      if (st.pricing.memberDiscount) {
        html += '<div class="cfg-sb-savings">Save €' + st.pricing.memberDiscount + ' with membership</div>';
      }
      sb.innerHTML = html;
    }

    // Image skeleton loading — fade in on load
    document.querySelectorAll('.route-card-img img, .partner-card-img img').forEach(function (img) {
      img.setAttribute('data-loaded', 'false');
      if (img.complete) { img.setAttribute('data-loaded', 'true'); return; }
      img.addEventListener('load', function () { img.setAttribute('data-loaded', 'true'); });
      img.addEventListener('error', function () { img.setAttribute('data-loaded', 'true'); });
    });

    // Global image error fallback — generates a placeholder SVG for broken Unsplash images
    document.addEventListener('error', function (e) {
      if (e.target.tagName === 'IMG' && !e.target.dataset.fallback) {
        e.target.dataset.fallback = 'true';
        var alt = e.target.alt || 'Image';
        e.target.src = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" fill="%23181a20"><rect width="600" height="400"/><text x="300" y="190" text-anchor="middle" fill="%23555" font-family="sans-serif" font-size="16">' + alt + '</text><text x="300" y="220" text-anchor="middle" fill="%23444" font-family="sans-serif" font-size="12">Image unavailable</text></svg>');
      }
    }, true);

    // Init on page load
    replaceStaticEmoji();
    initRouteFilters();
    renderRouteCards();
    loadChecklist();
    renderChecklist();
    renderCalendar();
    initTripBuilder();

