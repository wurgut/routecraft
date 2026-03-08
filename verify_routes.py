import re

with open('main.js', 'r', encoding='utf-8') as f:
    js = f.read()

# Routes are already linked via `accessibleFromBases` from my previous manual work/base data
# I just need to verify that every route has accessibleFromBases.

# Let's write a small diagnostic block that prints out any route without `accessibleFromBases`
lines = js.split('\n')
in_route = False
current_route_name = "Unknown"
has_bases = False

for line in lines:
    if "id: '" in line and "destinationId:" in line:
        if in_route and not has_bases:
            print(f"Route {current_route_name} is missing accessibleFromBases")
        in_route = True
        has_bases = False
        m = re.search(r"name:\s*'([^']+)'", line)
        if m:
            current_route_name = m.group(1)
            
    if "accessibleFromBases:" in line:
        has_bases = True

if in_route and not has_bases:
    print(f"Route {current_route_name} is missing accessibleFromBases")

print("Diagnostic complete.")
