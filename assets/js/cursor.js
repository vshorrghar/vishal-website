/**
 * Custom cursor — glowing dot that follows mouse.
 * Skips on touch devices.
 */
(function () {
  function initCustomCursor() {
    // Skip on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    var cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
    document.body.style.cursor = 'none';

    document.addEventListener('mousemove', function (e) {
      cursor.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px) translate(-50%, -50%)';
    });

    // Add active class on hover over interactive elements
    var interactiveSelectors = 'a, button, .glass-card, input, select, textarea';
    document.addEventListener('mouseover', function (e) {
      if (e.target.closest(interactiveSelectors)) {
        cursor.classList.add('cursor-active');
      }
    });

    document.addEventListener('mouseout', function (e) {
      if (e.target.closest(interactiveSelectors)) {
        cursor.classList.remove('cursor-active');
      }
    });
  }

  window.initCustomCursor = initCustomCursor;
})();
