import sys
import re
import os

MAIN_JS_PATH = 'main.js'
styles_path = 'styles.css'
app_js_path = 'app.js'

with open(MAIN_JS_PATH, 'r', encoding='utf-8') as f:
    main_js = f.read()

# Replace Strava render block
strava_old = """      // Strava
      if (route.strava) {
        html += '<div class="rd-section"><h2 class="rd-section-title">Strava Data</h2>' +
          '<div class="rd-intel-grid">' +
          '<div class="rd-intel-item"><div class="rd-intel-label">KOM Time</div><div class="rd-intel-val">' + route.strava.komTime + '</div></div>' +
          '<div class="rd-intel-item"><div class="rd-intel-label">Average Time</div><div class="rd-intel-val">' + route.strava.avgTime + '</div></div>' +
          '<div class="rd-intel-item"><div class="rd-intel-label">Segments</div><div class="rd-intel-val">' + route.strava.segmentCount + ' segments</div></div>' +
          '</div></div>';
      }"""

strava_new = """      // Strava
      if (route.strava) {
        var stravaHtml = '';
        if (window.isStravaConnected) {
          stravaHtml = '<div class="rd-intel-grid">' +
          '<div class="rd-intel-item"><div class="rd-intel-label">KOM Time</div><div class="rd-intel-val">' + route.strava.komTime + '</div></div>' +
          '<div class="rd-intel-item"><div class="rd-intel-label">Average Time</div><div class="rd-intel-val">' + route.strava.avgTime + '</div></div>' +
          '<div class="rd-intel-item"><div class="rd-intel-label">Your Est. Time</div><div class="rd-intel-val" style="color:#fc4c02;font-weight:700">' + (route.strava.estTime || '1h 45m') + ' based on FTP</div></div>' +
          '<div class="rd-intel-item" style="grid-column:1/-1;margin-top:0.5rem"><div style="background:#1a1a1a;border:1px solid #333;border-radius:6px;padding:1rem;display:flex;align-items:center;justify-content:center;color:#666;height:120px;text-align:center"><p><strong style="color:#fc4c02">Strava Embed</strong><br>Segment Data Mock</p></div></div>' +
          '</div>';
        } else {
          stravaHtml = '<div class="strava-connect-promo" style="background:rgba(252, 76, 2, 0.05);border:1px solid rgba(252, 76, 2, 0.2);padding:1.5rem;border-radius:8px;text-align:center;">' +
          '<svg viewBox="0 0 24 24" fill="#fc4c02" width="24" height="24" style="margin-bottom:0.5rem">' +
          '<path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169"></path></svg>' +
          '<div style="color:#fc4c02;font-weight:600;margin-bottom:0.5rem;font-size:1.1rem">Unlock Personalised Estimates</div>' +
          '<p style="font-size:0.9rem;color:rgba(255,255,255,0.6);margin-bottom:1.5rem;line-height:1.4">Connect Strava to see your estimated time, matched segments, and friend leaderboards for this route.</p>' +
          '<button onclick="toggleStravaAuth()" class="btn btn-primary" style="background:#fc4c02;color:#fff;border:none">Connect with Strava</button>' +
          '</div>';
        }
        
        html += '<div class="rd-section"><h2 class="rd-section-title">Strava Data</h2>' + stravaHtml + '</div>';
      }"""

if strava_old in main_js:
    main_js = main_js.replace(strava_old, strava_new)
    with open(MAIN_JS_PATH, 'w', encoding='utf-8') as f:
        f.write(main_js)
    print("Injected Strava Logic into main.js")
else:
    print("Could not find Strava old block in main.js")

css_append = """
/* Strava Integration */
.nav-strava {
    background: transparent;
    color: #fc4c02;
    border: 1px solid rgba(252, 76, 2, 0.5);
    padding: 0.4rem 1rem;
    border-radius: 4px;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
}
.nav-strava:hover {
    background: #fc4c02;
    color: #fff;
}
.nav-strava.connected {
    background: rgba(252, 76, 2, 0.1);
    color: #fc4c02;
    border-color: rgba(252, 76, 2, 0.3);
}
"""

with open(styles_path, 'a', encoding='utf-8') as f:
    f.write(css_append)
print("Appended Strava CSS to styles.css")

js_append = """
// Strava Mock OAuth Integration
window.isStravaConnected = false;

window.toggleStravaAuth = function() {
    var btn = document.getElementById('navStravaBtn');
    if (!window.isStravaConnected) {
        // Simulate OAuth flow
        var originalText = btn.innerHTML;
        btn.innerHTML = 'Connecting...';
        btn.style.opacity = '0.7';
        
        setTimeout(function() {
            window.isStravaConnected = true;
            btn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" style="margin-right:6px"><path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169"></path></svg> Connected';
            btn.classList.add('connected');
            btn.style.opacity = '1';
            
            // Re-render any open route details if they exist
            var rdModal = document.getElementById('rdModal');
            if (rdModal && rdModal.classList.contains('active')) {
                // Find currently open route (simple mock hack)
                var currentRouteName = document.querySelector('.rd-hero-title').textContent.trim();
                if (window.ROUTE_DATABASE) {
                    var route = window.ROUTE_DATABASE.find(r => r.name.toUpperCase() === currentRouteName.toUpperCase() || r.name === currentRouteName);
                    if (route && window.openRouteDetail) {
                        window.openRouteDetail(route.id);
                    }
                }
            }
            
            // Add a small toast notification
            var toast = document.createElement('div');
            toast.style.cssText = 'position:fixed;bottom:20px;right:20px;background:#111;border:1px solid #333;border-left:4px solid #fc4c02;color:#fff;padding:1rem;border-radius:4px;z-index:9999;font-family:inherit;box-shadow:0 10px 30px rgba(0,0,0,0.5);opacity:0;transition:opacity 0.3s ease';
            toast.innerHTML = '<div style="font-weight:600;margin-bottom:4px;font-size:0.9rem;text-transform:uppercase;letter-spacing:1px;color:#fc4c02">Strava Connected</div><div style="font-size:0.85rem;color:rgba(255,255,255,0.7)">Your FTP profile has been synced.</div>';
            document.body.appendChild(toast);
            
            // Trigger reflow and show
            requestAnimationFrame(() => toast.style.opacity = '1');
            
            setTimeout(() => {
                toast.style.opacity = '0';
                setTimeout(() => toast.remove(), 300);
            }, 4000);
            
        }, 1500);
    } else {
        // Disconnect
        window.isStravaConnected = false;
        btn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" style="margin-right:6px"><path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169"></path></svg> Connect Strava';
        btn.classList.remove('connected');
        
        var rdModal = document.getElementById('rdModal');
        if (rdModal && rdModal.classList.contains('active')) {
            var currentRouteName = document.querySelector('.rd-hero-title').textContent.trim();
            if (window.ROUTE_DATABASE) {
                var route = window.ROUTE_DATABASE.find(r => r.name.toUpperCase() === currentRouteName.toUpperCase() || r.name === currentRouteName);
                if (route && window.openRouteDetail) {
                    window.openRouteDetail(route.id);
                }
            }
        }
    }
}
"""

with open(app_js_path, 'a', encoding='utf-8') as f:
    f.write(js_append)
print("Appended Strava JS to app.js")
