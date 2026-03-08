import sys

with open('main.js', 'r', encoding='utf-8') as f:
    js = f.read()

target_html = """'<div class="rd-intel-item"><div class="rd-intel-label">Wind</div><div class="rd-intel-val">' + route.wind + '</div></div>' +
        '<div class="rd-intel-item"><div class="rd-intel-label">Weather</div><div class="rd-intel-val">' + route.weather + '</div></div>' +"""

replace_html = """'<div class="rd-intel-item"><div class="rd-intel-label">Live Weather</div><div class="rd-intel-val" id="live-weather-' + route.id + '"><span style="opacity:0.5">Fetching...</span></div></div>' +
        '<div class="rd-intel-item"><div class="rd-intel-label">Live Wind</div><div class="rd-intel-val" id="live-wind-' + route.id + '"><span style="opacity:0.5">Fetching...</span></div></div>' +"""

js = js.replace(target_html, replace_html)

# We need to inject the fetch logic before the final line of openRouteDetail() which is:
#       inner.scrollTop = 0;
#     }
# Wait, let's look for how `openRouteDetail` closes.
# It ends with:
#       modal.classList.add('active');
#       document.body.style.overflow = 'hidden';
#     }
target_func_end = "      document.body.style.overflow = 'hidden';"

fetch_inject = """      document.body.style.overflow = 'hidden';
      
      // Phase 5: Live Weather/Wind API
      if (dest && dest.lat && dest.lng) {
        fetch('https://api.open-meteo.com/v1/forecast?latitude=' + dest.lat + '&longitude=' + dest.lng + '&current_weather=true')
          .then(function(res) { return res.json(); })
          .then(function(data) {
            if (!data.current_weather) throw new Error('No weather data');
            var w = data.current_weather;
            var wCode = w.weathercode;
            var desc = "Clear";
            if (wCode >= 1 && wCode <= 3) desc = "Partly Cloudy";
            else if (wCode >= 41 && wCode <= 48) desc = "Fog";
            else if (wCode >= 51 && wCode <= 67) desc = "Rain";
            else if (wCode >= 71 && wCode <= 77) desc = "Snow";
            else if (wCode >= 80) desc = "Storm";
            var elWeather = document.getElementById('live-weather-' + route.id);
            var elWind = document.getElementById('live-wind-' + route.id);
            if (elWeather) elWeather.innerHTML = '<span style="color:#FFF;font-weight:700">' + w.temperature + '°C</span> · ' + desc;
            
            // Convert wind direction degrees to compass
            var val = Math.floor((w.winddirection / 22.5) + 0.5);
            var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
            var compass = arr[(val % 16)];
            if (elWind) elWind.innerHTML = '<span style="color:#FFF;font-weight:700">' + w.windspeed + ' km/h</span> · ' + compass;
          })
          .catch(function() {
            var elWeather = document.getElementById('live-weather-' + route.id);
            var elWind = document.getElementById('live-wind-' + route.id);
            if (elWeather) elWeather.innerHTML = route.weather || 'Unavailable';
            if (elWind) elWind.innerHTML = route.wind || 'Unavailable';
          });
      }"""

js = js.replace(target_func_end, fetch_inject)

with open('main.js', 'w', encoding='utf-8') as f:
    f.write(js)

print("Weather API integration injected.")
