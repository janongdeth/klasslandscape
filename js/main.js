/* Klass Tree & Landscape — main.js
   Minimal JS: year stamp + mobile sticky bar reveal after cover scroll. */
(function () {
  // year stamp
  var yr = document.getElementById('yr');
  if (yr) yr.textContent = String(new Date().getFullYear());

  // mobile sticky bar reveal — appears after the cover section
  var msb = document.getElementById('msb');
  var cover = document.querySelector('.cover');
  if (msb && cover && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          msb.classList.remove('is-visible');
          msb.setAttribute('aria-hidden', 'true');
        } else if (e.boundingClientRect.top < 0) {
          msb.classList.add('is-visible');
          msb.setAttribute('aria-hidden', 'false');
        }
      });
    }, { threshold: 0 });
    io.observe(cover);
  }
})();
