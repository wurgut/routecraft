    /* ═══════════════════════════════════════════
       1. LOCATIONS DATA — 10 Cycling Destinations
       ═══════════════════════════════════════════ */
    const LOCATIONS = [
      {
        id: 'fuerteventura', name: 'Fuerteventura', country: 'Spain', continent: 'Europe',
        lat: 28.36, lng: -14.05, tagline: 'Volcanic roads & eternal wind', color: '#e8491d',
        desc: 'Europe\'s secret winter training ground. Year-round 17–24°C, volcanic terrain with minimal traffic, and costs lower than Tenerife or Lanzarote. The Betancuria Loop delivers 1,180m of climbing through ancient volcanic spine with Atlantic panoramas.',
        stats: { dur: '5–10 days', diff: 'Intermediate', season: 'Oct–Apr', price: '€800–1,500', group: '2–12', routes: 5 },
        highlights: ['Year-round 17–24°C riding', 'Volcanic landscapes with zero traffic', 'Wind-training paradise for time trialists', 'Cheapest Canary Island for cycling', 'Playitas Resort: Olympic-grade facilities'],
        images: [
          'https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=1200&q=80',
          'https://images.unsplash.com/photo-1710277412488-cc28392a8867?w=1200&q=80',
          'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=1200&q=80',
          'https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?w=1200&q=80',
          'https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=1200&q=80'
        ]
      },
      {
        id: 'mallorca', name: 'Mallorca', country: 'Spain', continent: 'Europe',
        lat: 39.69, lng: 2.98, tagline: 'The cycling capital of Europe', color: '#e85d3a',
        desc: 'The island that defined cycling tourism. Serra de Tramuntana\'s 26 hairpin Sa Calobra descent is a bucket-list climb for every roadie. Perfect infrastructure, bike-friendly hotels, and 300 days of sun.',
        stats: { dur: '5–14 days', diff: 'All levels', season: 'Mar–Jun, Sep–Nov', price: '€1,000–2,500', group: '2–20', routes: 8 },
        highlights: ['Sa Calobra: 26 hairpin legendary descent', 'Serra de Tramuntana UNESCO landscape', '300+ days of sunshine per year', 'Europe\'s most bike-friendly island', 'Pro team training camp destination'],
        images: [
          'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=1200&q=80',
          'https://images.unsplash.com/photo-1589810876123-5d9e4f48184e?w=1200&q=80',
          'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1200&q=80',
          'https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=1200&q=80',
          'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1200&q=80'
        ]
      },
      {
        id: 'transfagarasan', name: 'Transfăgărășan', country: 'Romania', continent: 'Europe',
        lat: 45.60, lng: 24.62, tagline: 'The best road in the world', color: '#44D62C',
        desc: 'The road Jeremy Clarkson called "the best in the world." 90 km through Southern Carpathians crossing 2,042m at Bâlea Lake. Open June–October only. Brown bears, shepherd trails, and zero tourists on two wheels.',
        stats: { dur: '3–7 days', diff: 'Advanced', season: 'Jun–Oct', price: '€400–900', group: '2–8', routes: 4 },
        highlights: ['2,042m summit at Bâlea Lake', 'Open only 5 months per year', 'Brown bear sightings common', 'Lowest cost cycling destination in Europe', 'Authentic Romanian mountain lodges'],
        images: [
          'https://images.unsplash.com/photo-1569165003085-e8a1066f1cb8?w=1200&q=80',
          'https://images.unsplash.com/photo-1526112982068-f899a62e118e?w=1200&q=80',
          'https://images.unsplash.com/photo-1551818176-60579e574b91?w=1200&q=80',
          'https://images.unsplash.com/photo-1504038877628-14603434107c?w=1200&q=80',
          'https://images.unsplash.com/photo-1584739353467-e42f3f0d36ff?w=1200&q=80'
        ]
      },
      {
        id: 'tuscany', name: 'Tuscany', country: 'Italy', continent: 'Europe',
        lat: 43.35, lng: 11.32, tagline: 'White roads & Chianti sunsets', color: '#c9a84c',
        desc: 'The strade bianche — white gravel roads through cypress-lined vineyards that inspired L\'Eroica. Rolling Chianti hills with wine and olive oil tasting built into every ride. Gravel cycling at its most beautiful.',
        stats: { dur: '4–10 days', diff: 'Intermediate', season: 'Apr–Jun, Sep–Oct', price: '€900–2,000', group: '2–12', routes: 6 },
        highlights: ['Strade Bianche race route rideable', 'Wine tasting at family vineyards', 'Cypress-lined gravel perfection', 'L\'Eroica vintage cycling festival', 'Agriturismo farm-stays with gourmet dining'],
        images: [
          'https://images.unsplash.com/photo-1565992441121-4367c2967103?w=1200&q=80',
          'https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=1200&q=80',
          'https://images.unsplash.com/photo-1541370976299-4d24ebbc9077?w=1200&q=80',
          'https://images.unsplash.com/photo-1467803738586-46b7eb7b16a1?w=1200&q=80',
          'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&q=80'
        ]
      },
      {
        id: 'alpe-dhuez', name: 'Alpe d\'Huez', country: 'France', continent: 'Europe',
        lat: 45.09, lng: 6.07, tagline: '21 bends of Tour de France glory', color: '#3B82F6',
        desc: 'The most famous climb in professional cycling. 21 numbered hairpin bends, each named after a Tour de France stage winner. 13.8 km at 8.1% average gradient — the ultimate test piece for road cyclists worldwide.',
        stats: { dur: '3–7 days', diff: 'Advanced', season: 'May–Sep', price: '€1,000–2,200', group: '2–15', routes: 5 },
        highlights: ['21 legendary numbered hairpins', 'Tour de France mountain stage history', 'Col du Galibier and Col de la Croix de Fer nearby', 'Dedicated cycling infrastructure', 'Alpine scenery above 1,800m'],
        images: [
          'https://images.unsplash.com/photo-1530143584546-02191bc84eb5?w=1200&q=80',
          'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80',
          'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1200&q=80',
          'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80',
          'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1200&q=80'
        ]
      },
      {
        id: 'stelvio', name: 'Stelvio Pass', country: 'Italy', continent: 'Europe',
        lat: 46.53, lng: 10.45, tagline: 'The highest paved pass in the Alps', color: '#8B5CF6',
        desc: '2,757m of altitude and 48 hairpin turns from the Bormio side alone. The Stelvio is the Everest of European cycling. Open only in summer, it rewards those who conquer it with views stretching to the Dolomites.',
        stats: { dur: '3–7 days', diff: 'Expert', season: 'Jun–Sep', price: '€1,100–2,400', group: '2–10', routes: 4 },
        highlights: ['2,757m — highest paved Alpine pass', '48 hairpin bends from Bormio', 'Giro d\'Italia legendary summit finish', 'Three approach routes with different characters', 'Connected to Mortirolo and Gavia passes'],
        images: [
          'https://images.unsplash.com/photo-1502786129293-79981df4e689?w=1200&q=80',
          'https://images.unsplash.com/photo-1477346611705-65d1883cee1e?w=1200&q=80',
          'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=1200&q=80',
          'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80',
          'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=1200&q=80'
        ]
      },
      {
        id: 'girona', name: 'Girona', country: 'Spain', continent: 'Europe',
        lat: 41.98, lng: 2.82, tagline: 'Where the pros live & train', color: '#EC4899',
        desc: 'The adopted home of professional cycling. More WorldTour riders live in Girona than any other city. Medieval streets lead to Mediterranean coast rides, Pyrenean foothills, and the best cycling café culture on Earth.',
        stats: { dur: '5–14 days', diff: 'All levels', season: 'Mar–Nov', price: '€900–2,100', group: '2–20', routes: 7 },
        highlights: ['Home to 50+ professional cyclists', 'Rocacorba: the local test climb', 'Costa Brava coastal routes', 'World-class cycling café culture', 'Gateway to the Pyrenees'],
        images: [
          'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=1200&q=80',
          'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1200&q=80',
          'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1200&q=80',
          'https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=1200&q=80',
          'https://images.unsplash.com/photo-1528150230181-99bbf7b22162?w=1200&q=80'
        ]
      },
      {
        id: 'cape-town', name: 'Cape Town', country: 'South Africa', continent: 'Africa',
        lat: -33.93, lng: 18.42, tagline: 'Where mountains meet the Atlantic', color: '#F59E0B',
        desc: 'Chapman\'s Peak Drive is one of the world\'s most scenic coastal roads. Table Mountain as a backdrop to every ride. The Cape Town Cycle Tour is the world\'s largest timed cycling event with 35,000 riders.',
        stats: { dur: '5–10 days', diff: 'Intermediate', season: 'Nov–Mar', price: '€700–1,600', group: '2–15', routes: 5 },
        highlights: ['Chapman\'s Peak: world-class coastal road', 'Table Mountain backdrop on every ride', 'Cape Town Cycle Tour: 35,000 riders', 'Cape Winelands cycling routes', 'Southern hemisphere winter training'],
        images: [
          'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=1200&q=80',
          'https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8e?w=1200&q=80',
          'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1200&q=80',
          'https://images.unsplash.com/photo-1609096100768-f0b74a64733a?w=1200&q=80',
          'https://images.unsplash.com/photo-1496497243327-9dccd845c35f?w=1200&q=80'
        ]
      },
      {
        id: 'colombia', name: 'Colombia', country: 'Colombia', continent: 'South America',
        lat: 6.25, lng: -75.56, tagline: 'Altitude, culture & café de origen', color: '#EF4444',
        desc: 'The homeland of Egan Bernal, Nairo Quintana, and Rigoberto Urán. Alto de Letras is a 3,600m mega-climb. Train at altitude in the Andes while drinking the world\'s best coffee between switchbacks.',
        stats: { dur: '7–14 days', diff: 'Advanced', season: 'Dec–Mar, Jun–Aug', price: '€600–1,400', group: '2–12', routes: 5 },
        highlights: ['Alto de Letras: 80km single climb', 'Train at 2,600m altitude in Medellín', 'World-class Colombian coffee stops', 'Homeland of Grand Tour champions', 'Incredible value for money'],
        images: [
          'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=1200&q=80',
          'https://images.unsplash.com/photo-1568454537842-d933259bb258?w=1200&q=80',
          'https://images.unsplash.com/photo-1501770118606-b1d640526693?w=1200&q=80',
          'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=1200&q=80',
          'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&q=80'
        ]
      },
      {
        id: 'shimanami', name: 'Shimanami Kaido', country: 'Japan', continent: 'Asia',
        lat: 34.25, lng: 133.18, tagline: 'Island-hopping by bicycle bridge', color: '#06B6D4',
        desc: 'A 70 km cycling road connecting six islands across the Seto Inland Sea via dedicated bicycle bridges. Japan\'s ultimate cycling pilgrimage. Flat, scenic, and punctuated by ramen stops, onsen baths, and Shinto shrines.',
        stats: { dur: '2–5 days', diff: 'Beginner', season: 'Mar–May, Sep–Nov', price: '€800–1,800', group: '2–8', routes: 3 },
        highlights: ['70 km dedicated cycling bridges', '6 islands connected across the sea', 'Japanese onsen baths at every stop', 'Flat, accessible for all abilities', 'Ramen, sushi & cultural immersion'],
        images: [
          'https://images.unsplash.com/photo-1528164344705-47542687000d?w=1200&q=80',
          'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=1200&q=80',
          'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&q=80',
          'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1200&q=80',
          'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=1200&q=80'
        ]
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
        country: 'Spain', region: 'Canary Islands', flag: '🇪🇸', tags: ['volcanic', 'climbing', 'year-round'], isNew: false, isFeatured: true
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
        country: 'Spain', region: 'Canary Islands', flag: '🇪🇸', tags: ['gravel', 'adventure', 'remote', 'wind'], isNew: true, isFeatured: false
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
        country: 'Spain', region: 'Canary Islands', flag: '🇪🇸', tags: ['flat', 'coastal', 'recovery', 'year-round'], isNew: false, isFeatured: false
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
        country: 'Romania', region: 'Făgăraș Mountains', flag: '🇷🇴', tags: ['epic', 'climbing', 'alpine', 'switchbacks', 'multi-day'], isNew: false, isFeatured: true
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
        country: 'Romania', region: 'Parâng Mountains', flag: '🇷🇴', tags: ['epic', 'climbing', 'alpine', 'remote', 'multi-day'], isNew: false, isFeatured: false
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
        country: 'Romania', region: 'Făgăraș Mountains', flag: '🇷🇴', tags: ['climbing', 'switchbacks', 'day-ride'], isNew: false, isFeatured: false
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
        country: 'Romania', region: 'Ciucaș Mountains', flag: '🇷🇴', tags: ['forest', 'moderate', 'scenic', 'day-ride'], isNew: false, isFeatured: false
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
        country: 'Greece', region: 'White Mountains', flag: '🇬🇷', tags: ['climbing', 'gorge', 'coastal', 'scenic'], isNew: false, isFeatured: true
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
        country: 'Greece', region: 'White Mountains', flag: '🇬🇷', tags: ['epic', 'multi-day', 'remote', 'climbing', 'adventure'], isNew: true, isFeatured: false
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
        country: 'Greece', region: 'South Crete', flag: '🇬🇷', tags: ['coastal', 'flat', 'recovery', 'warm'], isNew: false, isFeatured: false
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
        country: 'Spain', region: 'Mallorca', flag: '🇪🇸', tags: ['climbing', 'hairpins', 'iconic', 'pro-training'], isNew: false, isFeatured: false
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
        country: 'Italy', region: 'Tuscany', flag: '🇮🇹', tags: ['gravel', 'iconic', 'race-route', 'rolling'], isNew: false, isFeatured: false
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
        country: 'Italy', region: 'South Tyrol', flag: '🇮🇹', tags: ['epic', 'climbing', 'alpine', 'hairpins', 'iconic'], isNew: false, isFeatured: false
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
        country: 'France', region: 'Isère Alps', flag: '🇫🇷', tags: ['climbing', 'iconic', 'tour-de-france', 'hairpins'], isNew: false, isFeatured: false
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
        country: 'France', region: 'Savoie Alps', flag: '🇫🇷', tags: ['epic', 'climbing', 'alpine', 'tour-de-france'], isNew: false, isFeatured: false
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
        country: 'Japan', region: 'Seto Inland Sea', flag: '🇯🇵', tags: ['flat', 'coastal', 'island-hopping', 'beginner-friendly', 'iconic'], isNew: true, isFeatured: false
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
       ROMANIA DEEP DIVE DATA
       ═══════════════════════════════════════════ */
    var ROMANIA_DEEP_DIVE = {
      intro: 'Romania is cycling\'s last great secret. While Mallorca and Tuscany crowd with carbon-clad pelotons, the Carpathians offer equally dramatic climbing at a fraction of the cost — and without the traffic. The Transfăgărășan alone has more vertical per kilometer than the Stelvio.',
      routeIds: ['ro-transfagarasan', 'ro-transalpina', 'ro-balea', 'ro-cheia'],
      partnerIds: ['p-ro-hilton-sibiu', 'p-ro-bikero', 'p-ro-bike-rental', 'p-ro-shuttle', 'p-ro-posada', 'p-ro-recovery'],
      seasonBar: [
        { month: 'Jan', open: false, note: 'Roads closed — snow' },
        { month: 'Feb', open: false, note: 'Roads closed — snow' },
        { month: 'Mar', open: false, note: 'Roads closed — snow' },
        { month: 'Apr', open: false, note: 'Roads closed — snow' },
        { month: 'May', open: false, note: 'Cheia Pass may open late May' },
        { month: 'Jun', open: true, note: 'Season opens — snow walls, cool temps, quiet roads' },
        { month: 'Jul', open: true, note: 'Peak season — warm, long days, some tourist traffic' },
        { month: 'Aug', open: true, note: 'Peak season — busiest month, start rides early' },
        { month: 'Sep', open: true, note: 'Shoulder — autumn colors begin, cooler summits' },
        { month: 'Oct', open: true, note: 'Late season — stunning foliage, cold summits, roads may close late Oct' },
        { month: 'Nov', open: false, note: 'Roads closing — snow risk' },
        { month: 'Dec', open: false, note: 'Roads closed — snow' }
      ],
      culturalHighlights: [
        { title: 'Medieval Sibiu', description: 'European Capital of Culture 2007. Cobblestone squares, baroque architecture, and Romania\'s best restaurant scene.', icon: 'monument' },
        { title: 'Shepherd Traditions', description: 'High mountain shepherds still make cheese in traditional stâni. Stop for fresh cașcaval and a glass of jinars.', icon: 'dining' },
        { title: 'Țuică & Palincă', description: 'Romania\'s legendary plum brandy. Every village has a master distiller. The double-distilled palincă will reset your legs.', icon: 'wine' },
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
        tagline: 'Zero-worry Transfăgărășan. Every detail handled.',
        includes: ['Private guide + support vehicle all days', 'Hilton Sibiu + Hotel Posada accommodation', 'Carpathian Cycles premium bike', 'TransCarpath airport transfers + route shuttles', 'Therme Sibiu recovery sessions', 'Emergency mechanical support', 'Cultural stops: fortified churches + țuică tasting', 'Packed lunches + hydration on every ride', '24/7 concierge WhatsApp line'],
        price7day: 1890,
        savingsVsDIY: 340
      }
    };

    /* ═══════════════════════════════════════════
       CANARY ISLANDS DEEP DIVE DATA
       ═══════════════════════════════════════════ */
    var CANARY_ISLANDS_DEEP_DIVE = {
      intro: 'Fuerteventura is European cycling\'s best-kept winter secret. Year-round sunshine, volcanic landscapes that look like another planet, and trade winds that turn every ride into a tactical challenge. At a fraction of Mallorca\'s cost, with near-zero traffic on inland roads.',
      routeIds: ['fuerte-betancuria', 'fuerte-cofete', 'fuerte-coastal'],
      partnerIds: ['p-fuerte-playitas', 'p-fuerte-bike-station', 'p-fuerte-wind-rides'],
      seasonBar: [
        { month: 'Jan', open: true, note: 'Peak — perfect training weather, 22-25°C' },
        { month: 'Feb', open: true, note: 'Peak — dry, warm, pro teams everywhere' },
        { month: 'Mar', open: true, note: 'Peak — ideal conditions, spring light' },
        { month: 'Apr', open: true, note: 'Open — warming up, light trade winds' },
        { month: 'May', open: true, note: 'Open — warm, occasional calima' },
        { month: 'Jun', open: true, note: 'Open — hotter, strong trade winds begin' },
        { month: 'Jul', open: false, note: 'Too hot — 35°C+, extreme winds' },
        { month: 'Aug', open: false, note: 'Too hot — calima dust storms common' },
        { month: 'Sep', open: false, note: 'Still hot — winds moderate late month' },
        { month: 'Oct', open: true, note: 'Season reopens — warm, winds easing' },
        { month: 'Nov', open: true, note: 'Open — excellent conditions return' },
        { month: 'Dec', open: true, note: 'Open — mild, quiet roads, festive atmosphere' }
      ],
      culturalHighlights: [
        { title: 'Volcanic Geology', description: 'Fuerteventura is 20 million years old — the Canaries\' oldest island. Ride through Miocene-era lava fields, ochre badlands, and volcanic calderas.', icon: 'distance' },
        { title: 'Queso Majorero', description: 'Protected Designation of Origin goat cheese made from Majorero goats. Aged varieties have a nutty, paprika-rubbed rind. Buy fresh at Betancuria.', icon: 'dining' },
        { title: 'Wind Culture', description: 'The NNE trade winds shape everything: architecture, agriculture, and cycling tactics. Local riders read wind like a second language.', icon: 'wind' },
        { title: 'Norman Heritage', description: 'Jean de Béthencourt conquered the island in 1404. The ancient capital Betancuria preserves a Franciscan monastery and Museo Arqueológico.', icon: 'monument' }
      ],
      costComparison: [
        { destination: 'Fuerteventura', hotel: 85, guide: 65, rental: 35, meal: 15, coffee: 2, beer: 3, total7day: 980, currency: 'EUR' },
        { destination: 'Mallorca', hotel: 145, guide: 85, rental: 55, meal: 28, coffee: 4, beer: 5, total7day: 1620, currency: 'EUR' },
        { destination: 'Tenerife', hotel: 95, guide: 70, rental: 40, meal: 18, coffee: 3, beer: 3, total7day: 1120, currency: 'EUR' },
        { destination: 'Lanzarote', hotel: 90, guide: 68, rental: 38, meal: 16, coffee: 2, beer: 3, total7day: 1050, currency: 'EUR' }
      ],
      goldenKeyPackage: {
        name: 'Volcanic Golden Key',
        tagline: 'Zero-worry Fuerteventura. Sun, wind, and volcanic roads — all handled.',
        includes: ['Private guide + support vehicle all days', 'Playitas Resort premium accommodation', 'Fuerte Bike Station carbon bike rental', 'Airport transfers + route shuttles', 'Wind Rides guided group sessions', 'Emergency mechanical support', 'Cultural stops: Betancuria + cheese tasting', 'Packed lunches + hydration on every ride', '24/7 concierge WhatsApp line'],
        price7day: 2180,
        savingsVsDIY: 380
      }
    };

    /* ═══════════════════════════════════════════
       CRETE DEEP DIVE DATA
       ═══════════════════════════════════════════ */
    var CRETE_DEEP_DIVE = {
      intro: 'Crete is where ancient mountains meet the Libyan Sea. The White Mountains offer some of the Mediterranean\'s most dramatic climbing, while Cretan hospitality — raki after every meal, tavernas that refuse to let you pay for dessert — makes every ride feel like coming home.',
      routeIds: ['crete-samaria', 'crete-white-mtns', 'crete-south-coast'],
      partnerIds: ['p-crete-anemos', 'p-crete-bikes', 'p-crete-guide'],
      seasonBar: [
        { month: 'Jan', open: false, note: 'Mountain roads closed — cold, wet' },
        { month: 'Feb', open: false, note: 'Mountain roads closed — snow possible' },
        { month: 'Mar', open: false, note: 'Early spring — coastal rides possible but mountains closed' },
        { month: 'Apr', open: true, note: 'Season opens — wildflowers, cool mountains' },
        { month: 'May', open: true, note: 'Peak — perfect conditions, 20-26°C' },
        { month: 'Jun', open: true, note: 'Peak — warm, long days, dry' },
        { month: 'Jul', open: true, note: 'Open — hot (32°C+), start rides early' },
        { month: 'Aug', open: true, note: 'Open — hottest month, beach recovery essential' },
        { month: 'Sep', open: true, note: 'Peak — heat easing, sea still warm' },
        { month: 'Oct', open: true, note: 'Peak — excellent conditions, fewer tourists' },
        { month: 'Nov', open: true, note: 'Late season — cooler, first rains possible' },
        { month: 'Dec', open: false, note: 'Mountain roads closing — rain season' }
      ],
      culturalHighlights: [
        { title: 'Minoan Heritage', description: 'Europe\'s oldest civilization flourished here 4,000 years ago. Knossos palace and its frescoes are a rest-day must-visit from Chania.', icon: 'monument' },
        { title: 'Cretan Cuisine', description: 'Dakos, kalitsounia, wild greens, and the world\'s finest olive oil. Every taverna meal ends with free raki and seasonal fruit.', icon: 'dining' },
        { title: 'Resistance History', description: 'From Venetians to Ottomans to WWII Germans, Cretans never stopped fighting. The Imbros Gorge was an Allied evacuation route in 1941.', icon: 'book' },
        { title: 'Raki Culture', description: 'Cretan grape brandy served after every meal, at every encounter, for every occasion. Refusing is impossible. Moderation is aspirational.', icon: 'wine' }
      ],
      costComparison: [
        { destination: 'Crete', hotel: 110, guide: 50, rental: 38, meal: 18, coffee: 3, beer: 4, total7day: 1180, currency: 'EUR' },
        { destination: 'Mallorca', hotel: 145, guide: 85, rental: 55, meal: 28, coffee: 4, beer: 5, total7day: 1620, currency: 'EUR' },
        { destination: 'French Alps', hotel: 88, guide: 95, rental: 65, meal: 32, coffee: 5, beer: 6, total7day: 1450, currency: 'EUR' },
        { destination: 'Tuscany', hotel: 160, guide: 90, rental: 50, meal: 35, coffee: 3, beer: 5, total7day: 1780, currency: 'EUR' }
      ],
      goldenKeyPackage: {
        name: 'Minoan Golden Key',
        tagline: 'Zero-worry Crete. Mountains, gorges, and the Libyan Sea — all handled.',
        includes: ['Private guide + support vehicle all days', 'Anemos Luxury Grand Resort accommodation', 'Cretan Cycling premium bike rental', 'Airport transfers + route shuttles', 'Minoan Rides guided cultural tours', 'Emergency mechanical support', 'Cultural stops: olive oil tasting + monastery visits', 'Packed lunches + taverna dinners included', '24/7 concierge WhatsApp line'],
        price7day: 2450,
        savingsVsDIY: 420
      }
    };

    /* ═══════════════════════════════════════════
       DESTINATIONS — enhanced from original
       ═══════════════════════════════════════════ */
    var DESTINATIONS = [
      {
        id: 'fuerteventura', name: 'Fuerteventura', country: 'Spain', flag: '🇪🇸', region: 'Canary Islands',
        tagline: 'Year-round volcanic cycling paradise',
        season: { start: 9, end: 6, peak: [11, 12, 1, 2, 3] }, routeCount: 3, partnerCount: 3,
        airports: ['fuerteventura'], airportIATA: ['FUE'],
        image: 'https://images.unsplash.com/photo-1548025146-ed39dc5f04e4?w=1600&q=85',
        highlights: ['Volcanic landscapes', 'Trade wind training', 'Year-round sun', 'Pro team base']
      },
      {
        id: 'romania', name: 'Romania', country: 'Romania', flag: '🇷🇴', region: 'Carpathian Mountains',
        tagline: 'Epic alpine climbs at unbeatable value',
        season: { start: 6, end: 10, peak: [7, 8] }, routeCount: 4, partnerCount: 6,
        airports: ['sibiu', 'bucharest'], airportIATA: ['SBZ', 'OTP'],
        image: 'https://images.unsplash.com/photo-1561196393-d9ef90aa4d4f?w=1600&q=85',
        highlights: ['Transfăgărășan', '2,000m+ summits', 'Medieval towns', 'Best value in Europe']
      },
      {
        id: 'crete', name: 'Crete', country: 'Greece', flag: '🇬🇷', region: 'Greek Islands',
        tagline: 'Ancient mountains meet the Libyan Sea',
        season: { start: 4, end: 11, peak: [5, 6, 9, 10] }, routeCount: 3, partnerCount: 3,
        airports: ['chania'], airportIATA: ['CHQ'],
        image: 'https://images.unsplash.com/photo-1656861679110-a632ad041c13?w=1600&q=85',
        highlights: ['White Mountains', 'Gorge climbs', 'Beach recovery', 'Cretan cuisine']
      },
      {
        id: 'mallorca', name: 'Mallorca', country: 'Spain', flag: '🇪🇸', region: 'Balearic Islands',
        tagline: 'The cycling capital of Europe',
        season: { start: 3, end: 11, peak: [4, 5, 9, 10] }, routeCount: 1, partnerCount: 1,
        airports: ['palma', 'mallorca'], airportIATA: ['PMI'],
        image: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=1600&q=85',
        highlights: ['Sa Calobra descent', 'Serra de Tramuntana', '300 days of sun', 'Pro team base']
      },
      {
        id: 'tuscany', name: 'Tuscany', country: 'Italy', flag: '🇮🇹', region: 'Central Italy',
        tagline: 'White gravel roads & Chianti sunsets',
        season: { start: 4, end: 10, peak: [5, 6, 9, 10] }, routeCount: 1, partnerCount: 1,
        airports: ['florence', 'pisa', 'siena'], airportIATA: ['FLR', 'PSA'],
        image: 'https://images.unsplash.com/photo-1565992441121-4367c2967103?w=1600&q=85',
        highlights: ['Strade Bianche route', 'Chianti vineyards', 'L\'Eroica festival', 'Agriturismo stays']
      },
      {
        id: 'dolomites', name: 'Dolomites', country: 'Italy', flag: '🇮🇹', region: 'South Tyrol',
        tagline: 'The king of Alpine passes — 48 hairpins to 2,758m',
        season: { start: 6, end: 9, peak: [7, 8] }, routeCount: 1, partnerCount: 1,
        airports: ['innsbruck', 'verona', 'bolzano', 'bormio'], airportIATA: ['INN', 'VRN'],
        image: 'https://images.unsplash.com/photo-1502786129293-79981df4e689?w=1600&q=85',
        highlights: ['Stelvio Pass 2,758m', '48 hairpin bends', 'Giro d\'Italia summit', 'Connected to Mortirolo']
      },
      {
        id: 'alps', name: 'French Alps', country: 'France', flag: '🇫🇷', region: 'Isère & Savoie Alps',
        tagline: 'Where the Tour de France is won and lost',
        season: { start: 5, end: 9, peak: [6, 7, 8] }, routeCount: 2, partnerCount: 1,
        airports: ['grenoble', 'lyon', 'geneva', 'chambery'], airportIATA: ['GNB', 'LYS'],
        image: 'https://images.unsplash.com/photo-1530143584546-02191bc84eb5?w=1600&q=85',
        highlights: ['Alpe d\'Huez 21 hairpins', 'Col du Galibier 2,642m', 'Tour de France history', 'Alpine scenery']
      },
      {
        id: 'japan', name: 'Shimanami Kaido', country: 'Japan', flag: '🇯🇵', region: 'Seto Inland Sea',
        tagline: 'Island-hopping by bicycle across the sea',
        season: { start: 3, end: 11, peak: [4, 5, 10, 11] }, routeCount: 1, partnerCount: 2,
        airports: ['hiroshima', 'onomichi', 'matsuyama'], airportIATA: ['HIJ', 'MYJ'],
        image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=1600&q=85',
        highlights: ['70km cycling bridges', '6 islands connected', 'Japanese onsen baths', 'Flat & accessible']
      }
    ];

    /* ═══════════════════════════════════════════
       CONFIGURATOR STATE — 7-step wizard
       ═══════════════════════════════════════════ */
    var CONFIGURATOR_STATE = {
      currentStep: 1,
      mode: 'standard',
      destination: null,
      dates: { start: null, end: null, nights: 7 },
      selectedRoutes: [],
      accommodation: [],
      transport: { flight: null, shuttles: [], departureCity: null, flightSource: 'static' },
      services: { guide: null, rental: null, addons: [] },
      itinerary: [],
      pricing: { subtotal: 0, memberDiscount: 0, goldenKeyPremium: 0, total: 0 }
    };

    // Lookup maps for O(1) access by id
    var ROUTE_BY_ID = buildLookupMap(ROUTE_DATABASE);
    var PARTNER_BY_ID = buildLookupMap(PARTNERS_DATABASE);
    var DESTINATION_BY_ID = buildLookupMap(DESTINATIONS);

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
          '<div class="cl-items">' + cat.items.map(function (item, ii) {
            var key = ci + '-' + ii;
            return '<div class="cl-item' + (checkedItems.has(key) ? ' checked' : '') + '" onclick="toggleItem(this,\'' + key + '\',' + ci + ')">' +
              '<div class="cl-checkbox"></div>' +
              '<div class="cl-item-text">' + item.text + '</div>' +
              '<div class="cl-item-priority ' + item.priority + '">' + item.priority + '</div>' +
              '</div>';
          }).join('') + '</div>' +
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
    var isGlobeInit = false, isDragging = false, autoRotate = true;
    var globeVisible = false, globeAnimId = null;
    var prevMouse = { x: 0, y: 0 }, mouseNDC;
    var raycaster;

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

    function showGlobeFallback() {
      var loading = document.getElementById('globe-loading');
      loading.innerHTML = '<div style="text-align:center;padding:2rem">' +
        '<div style="font-family:Bebas Neue,sans-serif;font-size:22px;letter-spacing:4px;color:#c9a96e;margin-bottom:12px">CYCLING DESTINATIONS</div>' +
        '<div style="font-size:12px;color:rgba(255,255,255,0.4);margin-bottom:24px">3D globe unavailable \u2014 explore destinations below</div>' +
        '<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center;max-width:500px;margin:0 auto">' +
        LOCATIONS.map(function (loc) {
          return '<button onclick="openExperience(\'' + loc.id + '\')" style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);color:#e8e4dd;padding:8px 14px;border-radius:var(--radius-sm);cursor:pointer;font-family:DM Sans;font-size:12px;font-weight:500;transition:all .2s;min-height:36px" onmouseover="this.style.borderColor=\'' + loc.color + '\';this.style.color=\'' + loc.color + '\'" onmouseout="this.style.borderColor=\'rgba(255,255,255,0.1)\';this.style.color=\'#e8e4dd\'">' + loc.name + '</button>';
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

        // Location markers + sidebar pills
        var sidebar = document.getElementById('globe-sidebar');
        LOCATIONS.forEach(function (loc) {
          var pos = latLngToVec3(loc.lat, loc.lng, 1.005);
          var col = new THREE.Color(loc.color);

          // Dot
          var dot = new THREE.Mesh(new THREE.SphereGeometry(0.012, 16, 16), new THREE.MeshBasicMaterial({ color: col }));
          dot.position.copy(pos);
          dot.userData = { locId: loc.id };
          globeGroup.add(dot);
          markerMeshes.push(dot);

          // Glow
          var glow = new THREE.Mesh(new THREE.SphereGeometry(0.02, 16, 16), new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0.3 }));
          glow.position.copy(pos);
          globeGroup.add(glow);

          // Ring
          var ring = new THREE.Mesh(new THREE.RingGeometry(0.025, 0.03, 32), new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0.4, side: THREE.DoubleSide }));
          ring.position.copy(pos);
          ring.lookAt(new THREE.Vector3(0, 0, 0));
          globeGroup.add(ring);

          // Stem line
          var stemEnd = pos.clone().multiplyScalar(1.04);
          var stemGeo = new THREE.BufferGeometry().setFromPoints([pos, stemEnd]);
          globeGroup.add(new THREE.Line(stemGeo, new THREE.LineBasicMaterial({ color: col, transparent: true, opacity: 0.5 })));

          // Sidebar pill
          var pill = document.createElement('div');
          pill.className = 'loc-pill';
          pill.textContent = loc.name;
          pill.onclick = (function (l) { return function () { flyTo(l); openExperience(l.id); }; })(loc);
          sidebar.appendChild(pill);
        });

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
            if (hits.length > 0) openExperience(hits[0].object.userData.locId);
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
            var loc = LOCATIONS.find(function (l) { return l.id === hits[0].object.userData.locId; });
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
       5. EXPERIENCE OVERLAY
       ═══════════════════════════════════════════ */
    function openExperience(id) {
      var loc = LOCATIONS.find(function (l) { return l.id === id; });
      if (!loc) return;

      var overlay = document.getElementById('experience-overlay');
      var content = document.getElementById('exp-content');

      var highlightsHtml = loc.highlights.map(function (h) {
        return '<div class="exp-highlight"><span style="color:' + loc.color + ';flex-shrink:0">\u25C6</span><span style="font-size:13px;color:rgba(255,255,255,0.55)">' + h + '</span></div>';
      }).join('');

      var galleryHtml = loc.images.map(function (img, i) {
        return '<div class="exp-gallery-item" onclick="openLightbox(\'' + loc.id + '\',' + i + ')"><img src="' + img + '" alt="' + loc.name + ' gallery ' + (i + 1) + '" loading="lazy"></div>';
      }).join('');

      content.innerHTML =
        '<div class="exp-hero">' +
        '<img src="' + loc.images[0] + '" alt="' + loc.name + '">' +
        '<div class="exp-hero-overlay"></div>' +
        '<div class="exp-hero-content">' +
        '<div style="font-size:10px;letter-spacing:3px;text-transform:uppercase;color:' + loc.color + ';font-weight:600;margin-bottom:8px">' + loc.continent + ' \u00B7 ' + loc.country + '</div>' +
        '<div style="font-family:\'Bebas Neue\',sans-serif;font-size:clamp(32px,7vw,64px);letter-spacing:3px;color:#e8e4dd;line-height:0.95">' + loc.name.toUpperCase() + '</div>' +
        '<div style="font-family:\'Cormorant Garamond\',serif;font-size:clamp(14px,2.5vw,20px);color:rgba(255,255,255,0.6);font-style:italic;margin-top:6px">' + loc.tagline + '</div>' +
        '</div>' +
        '</div>' +
        '<div class="exp-stats">' +
        '<div class="exp-stat"><div style="font-size:10px;color:rgba(255,255,255,0.4);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:4px">Duration</div><div style="font-family:\'Bebas Neue\',sans-serif;font-size:18px;color:#e8e4dd;letter-spacing:1px">' + loc.stats.dur + '</div></div>' +
        '<div class="exp-stat"><div style="font-size:10px;color:rgba(255,255,255,0.4);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:4px">Difficulty</div><div style="font-family:\'Bebas Neue\',sans-serif;font-size:18px;color:#e8e4dd;letter-spacing:1px">' + loc.stats.diff + '</div></div>' +
        '<div class="exp-stat"><div style="font-size:10px;color:rgba(255,255,255,0.4);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:4px">Season</div><div style="font-family:\'Bebas Neue\',sans-serif;font-size:18px;color:#e8e4dd;letter-spacing:1px">' + loc.stats.season + '</div></div>' +
        '<div class="exp-stat"><div style="font-size:10px;color:rgba(255,255,255,0.4);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:4px">Budget</div><div style="font-family:\'Bebas Neue\',sans-serif;font-size:18px;color:#c9a96e;letter-spacing:1px">' + loc.stats.price + '</div></div>' +
        '<div class="exp-stat"><div style="font-size:10px;color:rgba(255,255,255,0.4);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:4px">Group Size</div><div style="font-family:\'Bebas Neue\',sans-serif;font-size:18px;color:#e8e4dd;letter-spacing:1px">' + loc.stats.group + '</div></div>' +
        '<div class="exp-stat"><div style="font-size:10px;color:rgba(255,255,255,0.4);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:4px">Routes</div><div style="font-family:\'Bebas Neue\',sans-serif;font-size:18px;color:' + loc.color + ';letter-spacing:1px">' + loc.stats.routes + ' GUIDES</div></div>' +
        '</div>' +
        '<div class="exp-body">' +
        '<div style="font-size:10px;letter-spacing:3px;text-transform:uppercase;color:' + loc.color + ';font-weight:600;margin-bottom:8px">About This Destination</div>' +
        '<div style="font-family:\'Cormorant Garamond\',serif;font-size:18px;color:rgba(255,255,255,0.7);line-height:1.7">' + loc.desc + '</div>' +
        '<div class="exp-grid">' +
        '<div><div style="font-family:\'Bebas Neue\',sans-serif;font-size:16px;letter-spacing:2px;color:#e8e4dd;margin-bottom:12px">HIGHLIGHTS</div>' + highlightsHtml + '</div>' +
        '<div><div style="font-family:\'Bebas Neue\',sans-serif;font-size:16px;letter-spacing:2px;color:#e8e4dd;margin-bottom:12px">LOCATION</div>' +
        '<div style="border-radius:var(--radius-md);overflow:hidden;border:1px solid rgba(255,255,255,0.06)">' +
        '<iframe src="https://www.openstreetmap.org/export/embed.html?bbox=' + (loc.lng - 1) + ',' + (loc.lat - 0.5) + ',' + (loc.lng + 1) + ',' + (loc.lat + 0.5) + '&layer=mapnik&marker=' + loc.lat + ',' + loc.lng + '" style="width:100%;height:220px;border:none;filter:saturate(0.8) brightness(0.85)" loading="lazy"></iframe>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="exp-gallery">' + galleryHtml + '</div>' +
        '<div class="exp-cta">' +
        '<div style="font-family:\'Bebas Neue\',sans-serif;font-size:clamp(20px,4vw,32px);letter-spacing:3px;color:#e8e4dd;margin-bottom:6px">READY TO RIDE ' + loc.name.toUpperCase() + '?</div>' +
        '<div style="font-size:13px;color:rgba(255,255,255,0.4);margin-bottom:20px">Build your complete trip in the Trip Builder</div>' +
        '<button class="exp-cta-btn" onclick="closeExperience();document.getElementById(\'trip-builder\').scrollIntoView({behavior:\'smooth\'});setTimeout(function(){selectTripById(\'' + loc.id + '\')},400)">BUILD YOUR TRIP \u2192</button>' +
        '</div>';

      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
      overlay.scrollTop = 0;
    }

    function closeExperience() {
      document.getElementById('experience-overlay').classList.remove('active');
      document.body.style.overflow = '';
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
      var loc = LOCATIONS.find(function (l) { return l.id === locId; });
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
    var routeFilterState = { type: 'all', dest: 'all', maxDiff: 5, maxDist: 200, sort: 'featured' };
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
    }

    /* ═══════════════════════════════════════════
       ROUTE DETAIL MODAL — Full overlay
       ═══════════════════════════════════════════ */
    // buildDetailElevSvg() defined in app.js

    function openRouteDetail(routeId) {
      var route = ROUTE_BY_ID[routeId];
      if (!route) return;
      var partners = getRoutePartners(route);
      var modal = document.getElementById('rdModal');
      var inner = document.getElementById('rdModalInner');
      // Build modal HTML
      var html = '<button class="rd-close" onclick="closeRouteDetail()" aria-label="Close route detail">&times;</button>' +
        '<div class="rd-hero" style="background-image:url(' + route.image + ')">' +
        '<div class="rd-hero-overlay">' +
        '<div class="rd-hero-badge">' +
        '<span class="rbadge rbadge-' + route.type + '">' + route.type.charAt(0).toUpperCase() + route.type.slice(1) + '</span>' +
        (route.stages.length ? '<span class="rbadge" style="background:var(--forest);color:var(--chalk)">' + route.stages.length + '-Day Stage Route</span>' : '') +
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
        '<div class="rd-intel-item"><div class="rd-intel-label">Season</div><div class="rd-intel-val">' + monthName(route.season.start) + '–' + monthName(route.season.end) + (route.season.peak.length ? ' (peak: ' + route.season.peak.map(monthName).join(', ') + ')' : '') + '</div></div>' +
        '</div></div>';
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
        { label: 'Season', fn: function (r) { return monthName(r.season.start) + '–' + monthName(r.season.end) } },
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

    // Globe lazy init via IntersectionObserver
    var globeObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { initGlobe(); globeObs.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    var globeSection = document.getElementById('world-tours');
    if (globeSection) globeObs.observe(globeSection);

    // Globe visibility tracking — pause/resume animation when off-screen
    var globeVisObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        globeVisible = e.isIntersecting;
        if (globeVisible && isGlobeInit && typeof startGlobeAnim === 'function') startGlobeAnim();
      });
    }, { threshold: 0.05 });
    if (globeSection) globeVisObs.observe(globeSection);

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
      if (prev) prev.style.visibility = CONFIGURATOR_STATE.currentStep === 1 ? 'hidden' : 'visible';
      if (next) next.textContent = CONFIGURATOR_STATE.currentStep === 7 ? 'Request Booking →' : 'Next Step →';
    }

    // cfgCalcPricing() defined in app.js (with NaN guards)

    function toggleGoldenKey(on) {
      CONFIGURATOR_STATE.mode = on ? 'concierge' : 'standard';
      if (on && CONFIGURATOR_STATE.destination) {
        // Auto-select premium partners
        var gkPartners = PARTNERS_DATABASE.filter(function (p) {
          return p.destinationId === CONFIGURATOR_STATE.destination && p.isGoldenKey;
        });
        CONFIGURATOR_STATE.accommodation = gkPartners.filter(function (p) { return p.category === 'hotel' });
        var guide = gkPartners.filter(function (p) { return p.category === 'guide' })[0];
        if (guide) CONFIGURATOR_STATE.services.guide = guide;
      }
      renderCfgStep();
      renderCfgSidebar();
    }

    // Map LOCATIONS IDs (globe/experience) → DESTINATIONS IDs (configurator)
    var LOCATION_TO_DEST = {
      'transfagarasan': 'romania',
      'alpe-dhuez': 'alps',
      'stelvio': 'dolomites'
    };

    function selectTripById(id) {
      var destId = LOCATION_TO_DEST[id] || id;
      // Verify destination exists; silently abort if not (girona, cape-town, colombia have no configurator entry)
      var exists = DESTINATIONS.some(function (d) { return d.id === destId; });
      if (!exists) return;
      cfgSelectDest(destId);
      CONFIGURATOR_STATE.currentStep = 2;
      cfgRefreshUI();
    }

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
      panel.innerHTML = '<div class="cfg-panel-enter">' + html + '</div>';
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
        DESTINATIONS.map(function (d) {
          var sel = CONFIGURATOR_STATE.destination === d.id;
          return '<div class="cfg-dest-card' + (sel ? ' selected' : '') + '" onclick="cfgSelectDest(\'' + d.id + '\')">' +
            '<img src="' + d.image + '" alt="' + d.name + '" loading="lazy">' +
            '<div class="cfg-dest-overlay">' +
            '<div class="cfg-dest-name">' + d.flag + ' ' + d.name + '</div>' +
            '<div class="cfg-dest-tagline">' + d.tagline + '</div>' +
            '<div class="cfg-dest-meta">' + d.routeCount + ' routes · ' + d.partnerCount + ' partners · ' + monthName(d.season.start) + '–' + monthName(d.season.end) + '</div>' +
            '</div>' +
            '</div>';
        }).join('') + '</div>';
    }

    function cfgSelectDest(id) {
      CONFIGURATOR_STATE.destination = id;
      CONFIGURATOR_STATE.selectedRoutes = [];
      CONFIGURATOR_STATE.accommodation = [];
      CONFIGURATOR_STATE.transport = { flight: null, shuttles: [], departureCity: null, flightSource: 'static' };
      CONFIGURATOR_STATE.services = { guide: null, rental: null, addons: [] };
      if (CONFIGURATOR_STATE.mode === 'concierge') toggleGoldenKey(true);
      renderCfgStep();
      renderCfgSidebar();
    }

    // Step 2: Dates
    function renderCfgStep2() {
      var dest = DESTINATION_BY_ID[CONFIGURATOR_STATE.destination];
      var seasonTip = dest ? 'Best season: ' + monthName(dest.season.start) + '–' + monthName(dest.season.end) + '. Peak: ' + dest.season.peak.map(monthName).join(', ') : '';
      return '<h3 class="cfg-panel-title">When Are You Going?</h3>' +
        '<p class="cfg-panel-desc">' + seasonTip + '</p>' +
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
      return '<h3 class="cfg-panel-title">Select Your Routes</h3>' +
        '<p class="cfg-panel-desc">Choose one or more routes for your trip. Multi-day routes include stage breakdowns.</p>' +
        '<div class="cfg-route-grid">' +
        destRoutes.map(function (r) {
          var sel = CONFIGURATOR_STATE.selectedRoutes.indexOf(r.id) > -1;
          return '<div class="cfg-route-mini' + (sel ? ' selected' : '') + '" onclick="cfgToggleRoute(\'' + r.id + '\')">' +
            '<img src="' + r.image + '" alt="' + r.name + '" loading="lazy">' +
            '<div class="cfg-route-mini-body">' +
            '<div class="cfg-route-mini-name">' + r.name + '</div>' +
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
      var hotels = PARTNERS_DATABASE.filter(function (p) {
        return p.destinationId === CONFIGURATOR_STATE.destination && p.category === 'hotel';
      });
      return '<h3 class="cfg-panel-title">Where You\'ll Stay</h3>' +
        '<p class="cfg-panel-desc">Cycling-specific hotels with bike storage, early breakfast, and workshop access.</p>' +
        '<div class="cfg-hotel-grid">' +
        hotels.map(function (h) {
          var sel = CONFIGURATOR_STATE.accommodation.some(function (a) { return a.id === h.id });
          return '<div class="cfg-hotel-card' + (sel ? ' selected' : '') + (h.isGoldenKey ? ' golden-key' : '') + '" onclick="cfgToggleHotel(\'' + h.id + '\')">' +
            (h.isGoldenKey ? '<span class="cfg-gk-badge">Golden Key</span>' : '') +
            '<img src="' + h.image + '" alt="' + h.name + '" loading="lazy">' +
            '<div class="cfg-hotel-info">' +
            '<div class="cfg-hotel-name">' + h.name + '</div>' +
            '<div class="cfg-hotel-rating">' + h.rating + '★ · ' + h.reviewCount + ' reviews</div>' +
            '<div class="cfg-hotel-amenities">' + h.cyclingAmenities.slice(0, 3).map(function (a) { return '<span class="amenity-tag">' + a + '</span>' }).join('') + '</div>' +
            '<div class="cfg-hotel-price">€' + h.priceFrom + '/night · <strong>€' + (h.priceFrom * CONFIGURATOR_STATE.dates.nights) + '</strong> total</div>' +
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
      var dest = CONFIGURATOR_STATE.destination;
      var guides = PARTNERS_DATABASE.filter(function (p) { return p.destinationId === dest && p.category === 'guide' });
      var rentals = PARTNERS_DATABASE.filter(function (p) { return p.destinationId === dest && p.category === 'rental' });
      var physio = PARTNERS_DATABASE.filter(function (p) { return p.destinationId === dest && (p.category === 'physio') });
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

    // Step 7: Review
    function renderCfgStep7() {
      var st = CONFIGURATOR_STATE;
      var dest = DESTINATION_BY_ID[st.destination];
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

    /* ═══════════════════════════════════════════
       DEEP DIVE — Unified Rendering
       ═══════════════════════════════════════════ */
    function renderDeepDive(data, elPrefix, destId, sectionSelector) {
      // Intro
      var intro = document.getElementById(elPrefix + 'Intro');
      if (intro) intro.textContent = data.intro;
      // Routes grid
      var grid = document.getElementById(elPrefix + 'RoutesGrid');
      if (grid) {
        grid.innerHTML = data.routeIds.map(function (rid, i) {
          var r = ROUTE_BY_ID[rid];
          if (!r) return '';
          return '<div class="dd-route-card reveal' + (i ? ' reveal-delay-' + i : '') + '" onclick="openRouteDetail(\'' + r.id + '\')">' +
            '<img src="' + r.image + '" alt="' + r.name + '" loading="lazy">' +
            '<div class="dd-route-overlay">' +
            '<div class="dd-route-name">' + r.name + '</div>' +
            '<div class="dd-route-stats">' + r.distance + 'km · ' + r.elevationGain.toLocaleString() + 'm ↑ · ' + difficultyBar(r.difficulty) + '</div>' +
            (r.stages.length ? '<div class="dd-route-stages">' + r.stages.length + '-day stage route</div>' : '<div class="dd-route-stages">Day ride</div>') +
            '</div>' +
            '</div>';
        }).join('');
      }
      // Season bar
      var seasonBar = document.getElementById(elPrefix + 'SeasonBar');
      if (seasonBar) {
        seasonBar.innerHTML = data.seasonBar.map(function (m) {
          var cls = m.open ? 'dd-month open' : 'dd-month closed';
          if (m.note.indexOf('Peak') > -1) cls += ' peak';
          return '<div class="' + cls + '" title="' + m.note + '"><div class="dd-month-name">' + m.month + '</div><div class="dd-month-bar"></div></div>';
        }).join('');
      }
      // Cost table
      var costTable = document.getElementById(elPrefix + 'CostTable');
      if (costTable) {
        var html = '<table><thead><tr><th>Destination</th><th>Hotel/night</th><th>Guide/day</th><th>Rental/day</th><th>Meal</th><th>7-Day Total</th></tr></thead><tbody>';
        data.costComparison.forEach(function (c, i) {
          html += '<tr' + (i === 0 ? ' class="dd-cost-highlight"' : '') + '>' +
            '<td><strong>' + c.destination + '</strong></td>' +
            '<td>€' + c.hotel + '</td><td>€' + c.guide + '</td><td>€' + c.rental + '</td><td>€' + c.meal + '</td>' +
            '<td><strong>€' + c.total7day + '</strong></td></tr>';
        });
        html += '</tbody></table>';
        costTable.innerHTML = html;
      }
      // Cultural highlights
      var cultureGrid = document.getElementById(elPrefix + 'CultureGrid');
      if (cultureGrid) {
        cultureGrid.innerHTML = data.culturalHighlights.map(function (ch, i) {
          return '<div class="dd-culture-card reveal' + (i ? ' reveal-delay-' + i : '') + '">' +
            '<div class="dd-culture-icon">' + (VX_ICONS[ch.icon] || '') + '</div>' +
            '<h4>' + ch.title + '</h4>' +
            '<p>' + ch.description + '</p>' +
            '</div>';
        }).join('');
      }
      // Golden Key callout
      var gkCallout = document.getElementById(elPrefix + 'GkCallout');
      if (gkCallout) {
        var pkg = data.goldenKeyPackage;
        gkCallout.innerHTML = '<div class="dd-gk-header">' +
          '<div class="dd-gk-title">' + pkg.name + '</div>' +
          '<div class="dd-gk-tagline">' + pkg.tagline + '</div>' +
          '</div>' +
          '<div class="dd-gk-includes">' +
          '<h4>Package Includes:</h4>' +
          '<ul>' + pkg.includes.map(function (item) { return '<li>' + item + '</li>'; }).join('') + '</ul>' +
          '</div>' +
          '<div class="dd-gk-pricing">' +
          '<div class="dd-gk-price">€' + pkg.price7day + ' <span>/ 7 days all-inclusive</span></div>' +
          '<div class="dd-gk-saving">Save €' + pkg.savingsVsDIY + ' vs. booking separately</div>' +
          '<a href="#trip-builder" class="btn btn-primary" onclick="setTimeout(function(){selectTripById(\'' + destId + '\');toggleGoldenKey(true);document.getElementById(\'cfgGkToggle\').querySelector(\'input\').checked=true},300)">Book Golden Key Package →</a>' +
          '</div>';
      }
      // Re-observe reveals
      document.querySelectorAll(sectionSelector + ' .reveal').forEach(function (el) { revealObs.observe(el); });
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
    renderDeepDive(ROMANIA_DEEP_DIVE, 'ro', 'romania', '.romania-section');
    renderDeepDive(CANARY_ISLANDS_DEEP_DIVE, 'ci', 'fuerteventura', '.canary-section');
    renderDeepDive(CRETE_DEEP_DIVE, 'cr', 'crete', '.crete-section');

