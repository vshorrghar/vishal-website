/**
 * Typing animation for hero role titles.
 * Types characters one by one, pauses, deletes, cycles to next title.
 */
(function () {
  function initTypingAnimation(element, titles, typeSpeed, deleteSpeed, pauseTime) {
    if (!element || !titles || !titles.length) return;

    typeSpeed = typeSpeed || 80;
    deleteSpeed = deleteSpeed || 40;
    pauseTime = pauseTime || 2000;

    var titleIndex = 0;
    var charIndex = 0;
    var isDeleting = false;

    function tick() {
      var currentTitle = titles[titleIndex];

      if (isDeleting) {
        charIndex--;
        element.textContent = currentTitle.substring(0, charIndex);
      } else {
        charIndex++;
        element.textContent = currentTitle.substring(0, charIndex);
      }

      var delay = isDeleting ? deleteSpeed : typeSpeed;

      if (!isDeleting && charIndex === currentTitle.length) {
        // Finished typing — pause then start deleting
        delay = pauseTime;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        // Finished deleting — move to next title
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
        delay = 300;
      }

      setTimeout(tick, delay);
    }

    tick();
  }

  window.initTypingAnimation = initTypingAnimation;
})();
