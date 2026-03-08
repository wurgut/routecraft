import re

with open('main.js', 'r', encoding='utf-8') as f:
    js = f.read()

# Adding encyclopedia to Alps Huez
alps_old = "strava: { komTime: '37m 15s', avgTime: '1h 10m', segmentCount: 21 },"
alps_new = """strava: { komTime: '37m 15s', avgTime: '1h 10m', segmentCount: 21 },
        encyclopedia: 'The 21 hairpins of Alpe d\\'Huez are arguably the most famous piece of road in professional cycling. Every corner tells a story, named after past stage winners.\\n\\nStarting in Le Bourg-d\\'Oisans, the climb slaps you immediately. The first few kilometers average over 10%, serving as a cruel wake-up call before settling into a steady rhythm of 8-9%.\\n\\nAs you pass La Garde and Huez village, the views widen over the valley. The final hairpins, affectionately known as \\'Dutch Corner\\', are steeped in Tour de France lore. Reaching the summit isn\\'t just a physical achievement; it\\'s a pilgrimage.',"""

if alps_old in js:
    js = js.replace(alps_old, alps_new, 1)

# Adding encyclopedia to Dolomites Sella Ronda
dolo_old = "strava: { komTime: '1h 55m', avgTime: '3h 30m', segmentCount: 14 },"
dolo_new = """strava: { komTime: '1h 55m', avgTime: '3h 30m', segmentCount: 14 },
        encyclopedia: 'To ride the Sella Ronda is to experience the Dolomites in their purest, most concentrated form. Circling the magnificent Gruppo del Sella, you\\'ll tackle four interconnected passes: Campolongo, Pordoi, Sella, and Gardena.\\n\\nStarting from Corvara, the initial climb over Passo Campolongo serves as a warm-up. But the real challenge begins on the long, sweeping switchbacks of Passo Pordoi.\\n\\nAt the summit of Passo Sella, you\\'ll be dwarfed by vertical rock faces that glow pink in the afternoon light. It\\'s a rollercoaster of jaw-dropping descents and steady alpine climbs that exemplifies world-class grand fondo riding.',"""

if dolo_old in js:
    js = js.replace(dolo_old, dolo_new, 1)

with open('main.js', 'w', encoding='utf-8') as f:
    f.write(js)
print("Encyclopedia text injected successfully!")
