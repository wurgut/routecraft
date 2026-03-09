import sys

with open('styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

start_idx = css.find('/* ═══════════════════════════════════════════\n   ITINERARY BUILDER DRAWER\n   ═══════════════════════════════════════════ */')
end_idx = css.find('/* ═══════════════════════════════════════════\n   COMMUNITY REVIEWS\n   ═══════════════════════════════════════════ */')

if start_idx != -1 and end_idx != -1:
    css = css[:start_idx] + css[end_idx:]
    with open('styles.css', 'w', encoding='utf-8') as f:
        f.write(css)
    print("Itinerary CSS removed successfully.")
else:
    print("Could not find exact CSS boundaries.")
