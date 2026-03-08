import re

with open('styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Generate the new CSS styles
new_css = """

/* ═══════════════════════════════════════════
   SUB-GEOGRAPHY (LEVEL 3 / LEVEL 4) OVERLAY
   ═══════════════════════════════════════════ */
.subgeo-overlay {
  position: absolute;
  top: 0; right: 0; bottom: 0;
  width: 100%;
  max-width: 800px;
  background: rgba(10, 10, 10, 0.98);
  backdrop-filter: blur(20px);
  border-left: 1px solid rgba(255, 255, 255, 0.08);
  z-index: 1000;
  padding: 2rem;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translateX(100%);
  transition: transform 0.4s var(--ease-out);
  display: flex;
  flex-direction: column;
}

.subgeo-overlay.active {
  transform: translateX(0);
}

.subgeo-back {
  background: none; border: none;
  font-family: 'DM Sans', sans-serif;
  color: #c9a96e; font-size: 0.85rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1.5px;
  cursor: pointer; display: flex; align-items: center; gap: 8px; align-self: flex-start;
  margin-bottom: 2rem; transition: opacity 0.2s;
}
.subgeo-back:hover { opacity: 0.8; }

.subgeo-header { margin-bottom: 2rem; }
.subgeo-tag { font-family: 'Bebas Neue', sans-serif; font-size: 0.85rem; color: var(--gold); letter-spacing: 2px; margin-bottom: 0.5rem; }
.subgeo-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(2rem, 4vw, 3.5rem); color: var(--chalk); font-weight: 300; line-height: 1; margin-bottom: 1rem; }
.subgeo-desc { font-size: 0.95rem; color: rgba(255, 255, 255, 0.6); line-height: 1.6; max-width: 600px; }

.subgeo-stats {
  display: flex; gap: 1.5rem; margin-top: 1.5rem; flex-wrap: wrap;
}
.sg-stat { display: flex; flex-direction: column; }
.sg-stat-val { font-family: 'Bebas Neue', sans-serif; font-size: 1.25rem; color: var(--chalk); }
.sg-stat-lbl { font-size: 0.65rem; color: rgba(255, 255, 255, 0.4); text-transform: uppercase; letter-spacing: 1px; }

/* Tabs */
.subgeo-nav {
  display: flex; gap: 2rem; margin-bottom: 2rem; border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  overflow-x: auto; scrollbar-width: none;
}
.subgeo-nav::-webkit-scrollbar { display: none; }
.sg-tab {
  background: none; border: none;
  font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem; letter-spacing: 1.5px;
  color: rgba(255, 255, 255, 0.4); padding: 0.5rem 0 1rem; cursor: pointer;
  position: relative; white-space: nowrap; transition: color 0.3s;
}
.sg-tab::after {
  content: ''; position: absolute; bottom: -1px; left: 0; right: 0; height: 2px;
  background: var(--gold); transform: scaleX(0); transition: transform 0.3s; transform-origin: left;
}
.sg-tab:hover { color: rgba(255, 255, 255, 0.8); }
.sg-tab.active { color: var(--chalk); }
.sg-tab.active::after { transform: scaleX(1); }

.subgeo-content-frame { flex: 1; display: flex; flex-direction: column; }
.sg-tab-content { display: none; animation: fadeIn 0.4s ease-out; flex: 1; }
.sg-tab-content.active { display: block; }

/* Zones Layout */
.sg-zones-layout { display: flex; flex-direction: column; gap: 2rem; }
.sg-zones-list { display: flex; flex-direction: column; gap: 1rem; }
.sg-zone-card {
  background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: var(--radius-md); padding: 1.5rem; transition: all 0.3s;
  cursor: pointer;
}
.sg-zone-card:hover { border-color: rgba(201, 168, 76, 0.3); background: rgba(201, 168, 76, 0.05); }
.sg-zone-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem; }
.sg-zone-title { font-family: 'Bebas Neue', sans-serif; font-size: 1.25rem; letter-spacing: 1px; color: var(--chalk); }
.sg-zone-diff { font-size: 0.65rem; text-transform: uppercase; letter-spacing: 1px; padding: 0.2rem 0.6rem; border-radius: 20px; background: rgba(255,255,255,0.05); color: rgba(255,255,255,0.6); }
.sg-zone-desc { font-size: 0.85rem; color: rgba(255, 255, 255, 0.5); line-height: 1.5; margin-bottom: 1rem; }
.sg-zone-tags { display: flex; flex-wrap: wrap; gap: 0.5rem; }
.sg-zone-tag { font-size: 0.65rem; color: var(--gold); background: rgba(201,168,76,0.1); padding: 0.2rem 0.5rem; border-radius: 4px; border: 1px solid rgba(201,168,76,0.2); }

.sg-zones-map { background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.05); border-radius: var(--radius-md); min-height: 300px; display: flex; align-items: center; justify-content: center; }
.sg-map-placeholder { display: flex; flex-direction: column; align-items: center; color: rgba(255,255,255,0.2); gap: 1rem; font-family: 'Bebas Neue', sans-serif; font-size: 1.2rem; letter-spacing: 2px; }

/* Bases Layout */
.sg-bases-layout { display: grid; grid-template-columns: 280px 1fr; gap: 2rem; min-height: 500px; }
@media (max-width: 768px) { .sg-bases-layout { grid-template-columns: 1fr; } }
.sg-sidebar-title { font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem; letter-spacing: 1.5px; color: rgba(255,255,255,0.4); margin-bottom: 1rem; }
.sg-base-card { padding: 1rem; border-left: 2px solid transparent; cursor: pointer; transition: all 0.2s; margin-bottom: 0.5rem; }
.sg-base-card:hover { background: rgba(255,255,255,0.02); }
.sg-base-card.active { border-left-color: var(--gold); background: rgba(201,168,76,0.05); }
.sg-base-name { font-weight: 600; color: var(--chalk); font-size: 0.95rem; margin-bottom: 0.25rem; }
.sg-base-char { font-size: 0.75rem; color: rgba(255,255,255,0.5); line-height: 1.4; margin-bottom: 0.5rem; }
.sg-base-meta { display: flex; gap: 1rem; font-size: 0.7rem; color: rgba(255,255,255,0.3); }

/* Routes Display (Level 4) */
.sg-routes-display { display: flex; flex-direction: column; gap: 2rem; }
.sg-empty-state { display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; color: rgba(255,255,255,0.3); text-align: center; gap: 1rem; font-size: 0.9rem; padding: 2rem; border: 1px dashed rgba(255,255,255,0.1); border-radius: var(--radius-md); }
.sg-route-group { margin-bottom: 1.5rem; }
.sg-route-group-title { font-family: 'Bebas Neue', sans-serif; font-size: 1.25rem; letter-spacing: 1px; color: var(--gold); border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 0.5rem; margin-bottom: 1rem; display: flex; align-items: center; justify-content: space-between; }
.sg-route-card-mini { background: rgba(255,255,255,0.03); border-radius: var(--radius-sm); border: 1px solid rgba(255,255,255,0.05); display: flex; overflow: hidden; margin-bottom: 0.75rem; transition: all 0.2s; cursor: pointer; }
.sg-route-card-mini:hover { background: rgba(255,255,255,0.05); border-color: rgba(201,168,76,0.2); }
.sg-route-mini-img { width: 100px; background: #222; overflow: hidden; }
.sg-route-mini-img img { width: 100%; height: 100%; object-fit: cover; }
.sg-route-mini-body { padding: 0.75rem 1rem; flex: 1; display: flex; flex-direction: column; justify-content: center; }
.sg-route-mini-title { font-size: 0.9rem; font-weight: 600; color: var(--chalk); margin-bottom: 0.25rem; display: flex; justify-content: space-between; align-items: center; }
.sg-route-mini-title span { font-weight: 400; font-size: 0.7rem; color: rgba(255,255,255,0.4); text-transform: uppercase; letter-spacing: 1px; }
.sg-route-mini-stats { display: flex; gap: 1rem; font-size: 0.75rem; color: rgba(255,255,255,0.5); }
.sg-route-mini-stat { display: flex; align-items: center; gap: 4px; }
.sg-route-mini-stat svg { width: 12px; height: 12px; color: var(--gold); }

/* Encyclopedia Tab */
.sg-deepdive-container { line-height: 1.6; color: rgba(255,255,255,0.7); font-size: 0.95rem; }
.sg-deepdive-p { margin-bottom: 1.25rem; }
.sg-deepdive-img { width: 100%; border-radius: var(--radius-md); margin: 1.5rem 0; object-fit: cover; aspect-ratio: 16/9; }
.sg-deepdive-caption { font-size: 0.75rem; color: rgba(255,255,255,0.4); text-align: center; margin-top: -1rem; margin-bottom: 1.5rem; font-style: italic; }

"""

# Append the new CSS to styles.css
if ".subgeo-overlay" not in css:
    with open('styles.css', 'a', encoding='utf-8') as f:
        f.write("\n" + new_css)
    print("Injected Sub-Geo CSS.")
else:
    print("Sub-Geo CSS already exists.")
