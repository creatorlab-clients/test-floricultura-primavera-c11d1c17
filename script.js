/* ═══════════════════════════════════════════════════════════════
   template-fiorai-001 — Floricultura Primavera — script.js
   creative-floral scroll · single-page · pt-BR
   ═══════════════════════════════════════════════════════════════ */

// ── Scroll animation — frame config ──────────────────────────
var FRAME_PATH   = 'https://8ispuxmgjxgu2r5q.public.blob.vercel-storage.com/templates/fiorai-001/frames/';
var FRAME_PREFIX = 'frame_';
var FRAME_PAD    = 4;
var FRAME_EXT    = '.webp';
var FRAME_COUNT  = 151;  // creative-floral — HARD

// ── Image fallback ────────────────────────────────────────────
window.__imgFallback = function (img, label) {
  var w = img.naturalWidth || 800;
  var h = img.naturalHeight || 600;
  var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + w + '" height="' + h + '" viewBox="0 0 ' + w + ' ' + h + '">'
    + '<defs><linearGradient id="fg" x1="0%" y1="0%" x2="100%" y2="100%">'
    + '<stop offset="0%" style="stop-color:#EDF4F0;stop-opacity:1"/>'
    + '<stop offset="100%" style="stop-color:#F7F4EF;stop-opacity:1"/>'
    + '</linearGradient></defs>'
    + '<rect width="100%" height="100%" fill="url(#fg)"/>'
    + '<text x="50%" y="50%" font-family="\'DM Serif Display\',Georgia,serif" font-size="16" font-style="italic" fill="#9A8E84" text-anchor="middle" dominant-baseline="middle">'
    + (label || 'imagem em breve')
    + '</text></svg>';
  img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  img.onerror = null;
};

// ── Phosphor Regular SVG inline icons ────────────────────────
var PHOSPHOR_ICONS = {

  /* ─ Category icons ─ */
  'Flower': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" width="40" height="40" aria-hidden="true"><circle cx="128" cy="128" r="20"/><ellipse cx="128" cy="72" rx="16" ry="36"/><ellipse cx="128" cy="184" rx="16" ry="36"/><ellipse cx="72" cy="128" rx="36" ry="16"/><ellipse cx="184" cy="128" rx="36" ry="16"/><ellipse cx="87.5" cy="87.5" rx="16" ry="36" transform="rotate(45 87.5 87.5)"/><ellipse cx="168.5" cy="168.5" rx="16" ry="36" transform="rotate(45 168.5 168.5)"/><ellipse cx="168.5" cy="87.5" rx="16" ry="36" transform="rotate(-45 168.5 87.5)"/><ellipse cx="87.5" cy="168.5" rx="16" ry="36" transform="rotate(-45 87.5 168.5)"/></svg>',

  'Plant': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" width="40" height="40" aria-hidden="true"><path d="M128,232 L128,96"/><path d="M128,96 C128,64 96,40 56,48 C64,88 96,112 128,96 Z"/><path d="M128,148 C128,116 160,92 200,100 C192,140 160,164 128,148 Z"/></svg>',

  'Leaf': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" width="40" height="40" aria-hidden="true"><path d="M213.37,42.63 a8,8,0,0,0,-7.94,-0.44 C164.49,62.17 60.37,104.14 40,176 a56.07,56.07,0,0,0,55.43,70 C136,243.47 210,191 213.93,50.57 A8,8,0,0,0,213.37,42.63 Z"/><line x1="40" y1="216" x2="116" y2="140"/></svg>',

  'Heart': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" width="40" height="40" aria-hidden="true"><path d="M128,216 C128,216 28,156 28,100 a52,52,0,0,1,100,-20 a52,52,0,0,1,100,20 C228,156,128,216,128,216 Z"/></svg>',

  'Star': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" width="40" height="40" aria-hidden="true"><polygon points="128,28 161,100 240,108 184,160 200,240 128,200 56,240 72,160 16,108 95,100"/></svg>',

  'SunHorizon': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" width="40" height="40" aria-hidden="true"><line x1="24" y1="176" x2="232" y2="176"/><path d="M64,176 a64,64,0,0,1,128,0"/><line x1="128" y1="32" x2="128" y2="56"/><line x1="32" y1="80" x2="50" y2="98"/><line x1="224" y1="80" x2="206" y2="98"/></svg>',

  /* ─ UI / contact icons ─ */
  'MapPin': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" width="20" height="20" aria-hidden="true"><circle cx="128" cy="104" r="40"/><path d="M128,224 C128,224 40,152 40,104 a88,88,0,0,1,176,0 C216,152,128,224,128,224 Z"/></svg>',

  'Clock': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" width="20" height="20" aria-hidden="true"><circle cx="128" cy="128" r="96"/><polyline points="128,72 128,128 168,168"/></svg>',

  'Phone': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" width="20" height="20" aria-hidden="true"><path d="M164,164 L184,184 a16,16,0,0,1,0,22.6 C152,240 16,104 49.4,72 a16,16,0,0,1,22.6,0 L92,92 a16,16,0,0,1,0,22.6 L80,126.4 C98,158 98,158 130,176 Z"/></svg>',

  'WhatsappLogo': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" width="20" height="20" aria-hidden="true"><path d="M128,32 C76,32 32,72 32,120 C32,142 40,163 54,179 L40,216 L79,203 C95,211 111,216 128,216 C180,216 224,176 224,128 C224,80 180,32 128,32 Z"/><path d="M100,88 C100,88 92,108 108,124 C124,140 148,132 148,132"/></svg>',

  'InstagramLogo': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" width="20" height="20" aria-hidden="true"><rect x="32" y="32" width="192" height="192" rx="48"/><circle cx="128" cy="128" r="48"/><circle cx="180" cy="76" r="8" fill="currentColor" stroke="none"/></svg>'
};

(function () {
  'use strict';

  // ── Inject icons ─────────────────────────────────────────
  document.querySelectorAll('[data-icon]').forEach(function (el) {
    var name = el.getAttribute('data-icon');
    var svg  = PHOSPHOR_ICONS[name];
    if (svg) el.innerHTML = svg;
  });

  // ── Footer year ──────────────────────────────────────────
  var yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ── Navbar scroll class ──────────────────────────────────
  var navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
  }

  // ── Mobile nav toggle ────────────────────────────────────
  var toggle = document.querySelector('.nav-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      document.body.classList.toggle('nav-mobile-open', !expanded);
    });
    document.querySelectorAll('.nav-links a').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('nav-mobile-open');
      });
    });
  }

  // ── IntersectionObserver — fade-up, stagger-card ─────────
  if ('IntersectionObserver' in window) {
    var animObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          animObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.fade-up, .stagger-card').forEach(function (el) {
      animObserver.observe(el);
    });
  } else {
    document.querySelectorAll('.fade-up, .stagger-card').forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // ── Scroll animation — canvas (cover mode) ───────────────
  var section = document.getElementById('scroll-anim');
  var canvas  = document.getElementById('scroll-canvas');
  if (!section || !canvas) return;

  var ctx    = canvas.getContext('2d');
  var images = [];
  var loaded = 0;
  var currentFrame = 0;
  var pinEl  = section.querySelector('.scroll-anim-pin');
  var DPR    = Math.min(window.devicePixelRatio || 1, 2);

  function setupCanvas() {
    var w = pinEl.clientWidth;
    var h = pinEl.clientHeight;
    canvas.width  = w * DPR;
    canvas.height = h * DPR;
    canvas.style.width  = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  }

  // Cover mode: Math.max(cw/iw, ch/ih) — never contain
  function renderFrame(img) {
    var cw = pinEl.clientWidth;
    var ch = pinEl.clientHeight;
    var iw = img.naturalWidth;
    var ih = img.naturalHeight;
    if (!iw || !ih) return;
    var scale = Math.max(cw / iw, ch / ih);
    var sw = iw * scale;
    var sh = ih * scale;
    var sx = (cw - sw) / 2;
    var sy = (ch - sh) / 2;
    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, sx, sy, sw, sh);
  }

  function drawFrame(index) {
    var img = images[index];
    if (img && img.complete && img.naturalWidth) {
      renderFrame(img);
      currentFrame = index;
    }
  }

  function onScroll() {
    var rect     = section.getBoundingClientRect();
    var total    = section.offsetHeight - window.innerHeight;
    var scrolled = Math.max(0, -rect.top);
    var progress = Math.min(1, scrolled / total);
    var frameIdx = Math.round(progress * (FRAME_COUNT - 1));
    if (frameIdx !== currentFrame) drawFrame(frameIdx);
  }

  // Preload all frames
  for (var i = 0; i < FRAME_COUNT; i++) {
    (function (idx) {
      var img = new Image();
      img.onload = function () {
        loaded++;
        if (idx === 0 || loaded === 1) {
          setupCanvas();
          renderFrame(img);
          currentFrame = 0;
        }
      };
      img.src = FRAME_PATH + FRAME_PREFIX + String(idx + 1).padStart(FRAME_PAD, '0') + FRAME_EXT;
      images[idx] = img;
    })(i);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', function () { setupCanvas(); drawFrame(currentFrame); }, { passive: true });
  setupCanvas();

})();
