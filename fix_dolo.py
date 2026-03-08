import sys
import re

with open('main.js', 'r', encoding='utf-8') as f:
    js = f.read()

# I will use robust string replace
target = "stats: { routes: 12, dur: '4-7 Days', diff: 'Expert', season: 'Summer', price: 'Luxury', group: '2-8' },"
replacement = "highlights: ['Sella Ronda', 'Passo Giau', 'Tre Cime di Lavaredo'],\n        " + target

if "highlights: ['Sella" not in js:
    js = js.replace(target, replacement)
    print("Highlights patched for Dolomites.")
else:
    print("Already there!")

with open('main.js', 'w', encoding='utf-8') as f:
    f.write(js)
