import sys

with open('main.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
in_alps = False
in_dolo = False

for line in lines:
    if "id: 'alps-huezdor'" in line:
        in_alps = True
    if "id: 'dolomites-alta-badia'" in line:
        in_dolo = True
        
    if in_alps and "stats: {" in line:
        # Before stats, insert highlights and ensure we only do it once
        if "'Alpe d\\'Huez hairpins'" not in "".join(lines):
            new_lines.append("        highlights: ['Alpe d\\'Huez hairpins', 'Col du Galibier', 'Croix de Fer'],\n")
            
    if in_dolo and "stats: {" in line:
        if "'Sella Ronda'" not in "".join(lines):
            new_lines.append("        highlights: ['Sella Ronda', 'Passo Giau', 'Tre Cime di Lavaredo'],\n")
            
    if in_alps and "season: { monthly:" in line:
        line = line.replace("season: { monthly:", "season: { start: 6, end: 9, peakStart: 7, peakEnd: 8, monthly:")
        
    if in_dolo and "season: { monthly:" in line:
        line = line.replace("season: { monthly:", "season: { start: 6, end: 9, peakStart: 7, peakEnd: 8, monthly:")
        
    if "routeCount:" in line and "partnerCount:" in line:
        # once we close the top props, reset flags... well, just relying on exact lines for season/stats is safe
        pass

    # actually, resetting in_alps when deepDive is found
    if "deepDive: null" in line:
        in_alps = False
        in_dolo = False
        
    new_lines.append(line)

with open('main.js', 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print("Safely patched main.js lines.")
