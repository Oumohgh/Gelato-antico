/* ==========================================================
   Gelato Antico Main script
   Handles: header scroll, mobile menu, scrollspy,
            reveal-on-scroll, newsletter form.
   i18n is handled by separate HTML files per language.
   ========================================================== */
(function () {
  'use strict';

  var header = document.getElementById('header');
  var mobileToggle = document.getElementById('mobileToggle');
  var nav = document.getElementById('nav');

  /* ===== Header scroll state ===== */
  window.addEventListener('scroll', function () {
    if (header) header.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });

  /* ===== Mobile menu toggle ===== */
  if (mobileToggle) {
    mobileToggle.addEventListener('click', function () {
      var willOpen = !nav.classList.contains('open');
      nav.classList.toggle('open', willOpen);
      header.classList.toggle('menu-open', willOpen);
      mobileToggle.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
    });
  }

  /* Close menu on nav link tap */
  document.querySelectorAll('#nav a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function () {
      nav.classList.remove('open');
      header.classList.remove('menu-open');
      mobileToggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* ===== Scrollspy, highlight active nav link ===== */
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('nav a[href^="#"]');
  var spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        var id = e.target.getAttribute('id');
        navLinks.forEach(function (l) {
          l.classList.toggle('active', l.getAttribute('href') === '#' + id);
        });
      }
    });
  }, { threshold: 0.35, rootMargin: '-72px 0px -50% 0px' });
  sections.forEach(function (s) { spy.observe(s); });

  /* ===== Reveal on scroll ===== */
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        revealObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(function (el) { revealObserver.observe(el); });

  /* ===== Newsletter form, prevent default submit ===== */
  var form = document.querySelector('.newsletter-form');
  if (form) {
    form.addEventListener('submit', function (e) { e.preventDefault(); });
  }
})();