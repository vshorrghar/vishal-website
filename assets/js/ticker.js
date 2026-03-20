/**
 * Ticker banner continuous scroll.
 * Clones ticker-track children for seamless CSS animation loop.
 */
(function () {
  function initTicker(container) {
    if (!container) return;

    var track = container.querySelector('.ticker-track');
    if (!track) return;

    // Clone all children and append for seamless loop
    var children = Array.prototype.slice.call(track.children);
    children.forEach(function (child) {
      var clone = child.cloneNode(true);
      track.appendChild(clone);
    });
  }

  window.initTicker = initTicker;
})();
