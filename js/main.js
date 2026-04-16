/* Klass Tree & Landscape — main.js
   Year stamp + mobile sticky bar reveal + mobile nav toggle */
(function () {
  // year stamp
  var yr = document.getElementById('yr');
  if (yr) yr.textContent = String(new Date().getFullYear());

  // mobile nav toggle
  var menuBtn = document.getElementById('hdr-menu');
  var hdr = menuBtn && menuBtn.closest('.hdr');
  if (menuBtn && hdr) {
    menuBtn.addEventListener('click', function () {
      var open = hdr.classList.toggle('nav-open');
      menuBtn.setAttribute('aria-expanded', String(open));
    });
    // close on nav link click
    hdr.querySelectorAll('.hdr__nav a').forEach(function (link) {
      link.addEventListener('click', function () {
        hdr.classList.remove('nav-open');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
    // close on outside click
    document.addEventListener('click', function (e) {
      if (!hdr.contains(e.target)) {
        hdr.classList.remove('nav-open');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // mobile sticky bar reveal — appears after scrolling past the hero
  var msb = document.getElementById('msb');
  var cover = document.querySelector('.cover') || document.querySelector('.page-hero');
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
