import sys

# 1. CSS Injection
css_inject = """
/* ═══════════════════════════════════════════
   COMMUNITY REVIEWS
   ═══════════════════════════════════════════ */
.rd-reviews-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1rem;
}

.rd-review-card {
  background: rgba(255,255,255,0.02);
  border: 1px solid rgba(255,255,255,0.06);
  padding: 1.5rem;
  border-radius: var(--radius-md);
}

.rd-rv-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.rd-rv-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--slate);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.2rem;
  color: var(--chalk);
}

.rd-rv-meta {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.rd-rv-meta strong {
  font-size: 0.9rem;
  color: var(--chalk);
}

.rd-rv-meta span {
  font-size: 0.75rem;
  color: rgba(255,255,255,0.5);
}

.rd-rv-stars {
  color: var(--gold);
  letter-spacing: 2px;
  font-size: 1.1rem;
}

.rd-rv-text {
  font-size: 0.9rem;
  line-height: 1.6;
  color: rgba(255,255,255,0.7);
}

.rd-review-form {
  margin-top: 2rem;
  background: rgba(10,10,10,0.5);
  border: 1px solid rgba(201,168,76,0.2);
  padding: 1.5rem;
  border-radius: var(--radius-md);
  border-left: 3px solid var(--gold);
}

.rd-review-form h4 {
  font-family: 'Bebas Neue', sans-serif;
  letter-spacing: 1px;
  font-size: 1.3rem;
  color: var(--chalk);
  margin-bottom: 0.5rem;
}

.rd-review-form p {
  font-size: 0.85rem;
  color: rgba(255,255,255,0.6);
  margin-bottom: 1.5rem;
}

.rd-rv-stars-input {
  color: var(--gold);
  font-size: 1.2rem;
  letter-spacing: 2px;
  margin-bottom: 1rem;
  cursor: pointer;
}

.rd-rv-stars-input span {
  font-size: 0.85rem;
  color: rgba(255,255,255,0.6);
  letter-spacing: 0;
  margin-right: 10px;
}

.rd-review-form textarea {
  width: 100%;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: var(--radius-sm);
  padding: 1rem;
  color: var(--chalk);
  font-family: 'DM Sans', sans-serif;
  margin-bottom: 1rem;
  min-height: 100px;
  resize: vertical;
}

.rd-review-form textarea:focus {
  outline: none;
  border-color: var(--gold);
}
"""

with open('styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

if '.rd-reviews-list' not in css:
    with open('styles.css', 'w', encoding='utf-8') as f:
        f.write(css + "\n" + css_inject)
    print("styles.css patched for reviews.")


# 2. JS Injection
with open('main.js', 'r', encoding='utf-8') as f:
    js = f.read()

target_js = "      // CTA\n      html += '<div class=\"rd-cta-bar\">'"

inject_js = """      // Reviews & Community Mockup
      var mockReviews = [
        { name: "Sarah J.", role: "Expedition Rider", stars: 5, date: "Oct 2025", text: "Incredible climb! The wind at the top was brutal, but the pavement is butter smooth. Stop at the cafe at km 40." },
        { name: "Marko T.", role: "Local Guide", stars: 4, date: "Sep 2025", text: "A classic test piece. Make sure you bring enough water because the middle section has zero shade." }
      ];
      html += '<div class="rd-section"><h2 class="rd-section-title">Community Reviews</h2><div class="rd-reviews-list">';
      mockReviews.forEach(function(r) {
         html += '<div class="rd-review-card">' +
                 '<div class="rd-rv-header">' +
                 '<div class="rd-rv-avatar">' + r.name.charAt(0) + '</div>' +
                 '<div class="rd-rv-meta"><strong>' + r.name + '</strong><span>' + r.role + ' &middot; ' + r.date + '</span></div>' +
                 '<div class="rd-rv-stars">★★★★' + (r.stars === 5 ? '★' : '☆') + '</div>' +
                 '</div>' +
                 '<p class="rd-rv-text">' + r.text + '</p>' +
                 '</div>';
      });
      html += '<div class="rd-review-form">' +
              '<h4>Log Your Ride</h4>' +
              '<p>Ridden this route? Share your conditions, time, and tips with the community.</p>' +
              '<div class="rd-rv-stars-input"><span>Rate: </span> ☆☆☆☆☆</div>' +
              '<textarea placeholder="Write your review..."></textarea>' +
              '<button class="btn btn-secondary" onclick="alert(\\\'Review submitted! (Phase 6 DB Hook)\\\')">Post Review</button>' +
              '</div>';
      html += '</div></div>';

      // CTA
      html += '<div class="rd-cta-bar">'"""

if 'rd-reviews-list' not in js:
    js = js.replace(target_js, inject_js)
    with open('main.js', 'w', encoding='utf-8') as f:
        f.write(js)
    print("main.js patched for reviews.")
