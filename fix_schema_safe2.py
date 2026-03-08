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
        
    if in_alps and "peakStart: 7, peakEnd: 8" in line and "peak: [7, 8]" not in line:
        line = line.replace("peakStart: 7, peakEnd: 8,", "peakStart: 7, peakEnd: 8, peak: [7, 8],")
    if in_dolo and "peakStart: 7, peakEnd: 8" in line and "peak: [7, 8]" not in line:
        line = line.replace("peakStart: 7, peakEnd: 8,", "peakStart: 7, peakEnd: 8, peak: [7, 8],")
        
    if in_alps and "routeCount: 1" in line and "partnerCount" not in line:
        line = line.replace("routeCount: 1", "routeCount: 1, partnerCount: 0")
    if in_dolo and "routeCount: 1" in line and "partnerCount" not in line:
        line = line.replace("routeCount: 1", "routeCount: 1, partnerCount: 0")

    if "deepDive: null" in line:
        in_alps = False
        in_dolo = False
        
    new_lines.append(line)

with open('main.js', 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print("Safely patched main.js lines with peak array and partnerCount.")
