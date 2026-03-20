/**
 * Main orchestrator — initializes all modules on DOMContentLoaded.
 * Each module init is wrapped in try/catch for independent failure.
 */
(function () {

  function initNavigation() {
    var navbar = document.getElementById('navbar');
    var hamburger = document.getElementById('hamburger');
    var navMenu = document.getElementById('nav-menu');
    var navLinks = document.querySelectorAll('.nav-link');

    // Smooth scroll for nav links
    navLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        var targetId = this.getAttribute('href');
        var target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
        // Close mobile menu
        if (navMenu && navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
          if (hamburger) {
            hamburger.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
          }
        }
      });
    });

    // Hamburger toggle
    if (hamburger && navMenu) {
      hamburger.addEventListener('click', function () {
        var isOpen = navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });
    }

    // Navbar scroll effect
    window.addEventListener('scroll', function () {
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
    });

    // Scroll spy — highlight active nav link
    var sections = document.querySelectorAll('section[id]');
    var observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.getAttribute('id');
          navLinks.forEach(function (link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + id) {
              link.classList.add('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(function (section) {
      sectionObserver.observe(section);
    });
  }

  function initScrollAnimations() {
    var animatedElements = document.querySelectorAll('.animate-on-scroll');
    if (!animatedElements.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });

    animatedElements.forEach(function (el) {
      observer.observe(el);
    });
  }

  function initTerminalObserver() {
    var terminalEl = document.getElementById('terminal-mockup');
    if (!terminalEl) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          if (window.startTerminalCycling) window.startTerminalCycling();
        } else {
          if (window.stopTerminalCycling) window.stopTerminalCycling();
        }
      });
    }, { threshold: 0.1 });

    observer.observe(terminalEl);
  }

  // ========== DOMContentLoaded — Init Everything ==========
  document.addEventListener('DOMContentLoaded', function () {

    // 1. Particles
    try {
      var canvas = document.getElementById('particle-canvas');
      if (canvas && window.initParticles) {
        window.initParticles(canvas);
      }
    } catch (e) { console.warn('Particles init failed:', e); }

    // 2. Typing animation
    try {
      var typingTarget = document.getElementById('typing-target');
      if (typingTarget && window.initTypingAnimation) {
        var titles = [
          'Senior Cloud Solutions Architect',
          'GenAI Builder',
          'Kubernetes Practitioner',
          'Cloud-Native Enthusiast',
          'Nordic Tech Speaker'
        ];
        window.initTypingAnimation(typingTarget, titles, 80, 40, 2000);
      }
    } catch (e) { console.warn('Typing init failed:', e); }

    // 3. Ticker
    try {
      var tickerBanner = document.querySelector('.ticker-banner');
      if (tickerBanner && window.initTicker) {
        window.initTicker(tickerBanner);
      }
    } catch (e) { console.warn('Ticker init failed:', e); }

    // 4. Custom cursor
    try {
      if (window.initCustomCursor) {
        window.initCustomCursor();
      }
    } catch (e) { console.warn('Cursor init failed:', e); }

    // 5. Terminal
    try {
      var terminalContainer = document.getElementById('terminal-mockup');
      if (terminalContainer && window.initTerminal) {
        window.initTerminal(terminalContainer);
      }
    } catch (e) { console.warn('Terminal init failed:', e); }

    // 6. Forms
    try {
      if (window.initForms) {
        window.initForms();
      }
    } catch (e) { console.warn('Forms init failed:', e); }

    // 7. Navigation
    try {
      initNavigation();
    } catch (e) { console.warn('Navigation init failed:', e); }

    // 8. Scroll animations
    try {
      initScrollAnimations();
    } catch (e) { console.warn('Scroll animations init failed:', e); }

    // 9. Terminal intersection observer
    try {
      initTerminalObserver();
    } catch (e) { console.warn('Terminal observer init failed:', e); }

    // 10. Visitor counter (localStorage-based)
    try {
      var counterEl = document.getElementById('counter-value');
      if (counterEl) {
        var count = parseInt(localStorage.getItem('vs-visit-count') || '0', 10);
        count++;
        localStorage.setItem('vs-visit-count', count.toString());
        counterEl.textContent = count;
      }
    } catch (e) { console.warn('Counter init failed:', e); }
  });

})();
