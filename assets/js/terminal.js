/**
 * TokenIQ terminal mockup.
 * Generates fake AI cost intelligence entries and cycles them.
 */
(function () {
  var intervalId = null;
  var outputEl = null;
  var maxLines = 6;

  var tokens = ['GPT-4', 'Claude', 'Llama3', 'Mixtral', 'Gemini', 'Titan'];

  function pad(n) {
    return n < 10 ? '0' + n : '' + n;
  }

  function generateFakeEntry() {
    var now = new Date();
    var time = pad(now.getHours()) + ':' + pad(now.getMinutes()) + ':' + pad(now.getSeconds());
    var token = tokens[Math.floor(Math.random() * tokens.length)];
    var cost = (Math.random() * 0.088 + 0.001).toFixed(3);
    var usage = Math.floor(Math.random() * 998 + 1) + 'K';
    var savings = Math.floor(Math.random() * 30 + 5);
    var direction = savings > 15 ? '▲' : '▼';

    return '[' + time + '] ' + token + '  $' + cost + '/1K tok  ' + usage + ' tokens  ' + direction + ' ' + savings + '% savings';
  }

  function initTerminal(container) {
    if (!container) return;

    // Create terminal header
    var header = document.createElement('div');
    header.className = 'terminal-header';
    header.textContent = 'TokenIQ \u26A1 AI Cost Intelligence [LIVE] \uD83D\uDFE2';
    container.appendChild(header);

    // Create output area
    outputEl = document.createElement('div');
    outputEl.className = 'terminal-output';
    container.appendChild(outputEl);

    // Add initial entries
    for (var i = 0; i < 4; i++) {
      addEntry();
    }
  }

  function addEntry() {
    if (!outputEl) return;

    var line = document.createElement('div');
    line.className = 'terminal-line';
    line.textContent = generateFakeEntry();
    outputEl.appendChild(line);

    // Remove oldest if over max
    while (outputEl.children.length > maxLines) {
      var oldest = outputEl.children[0];
      oldest.classList.add('fading');
      // Remove after fade
      (function (el) {
        setTimeout(function () {
          if (el.parentNode) el.parentNode.removeChild(el);
        }, 500);
      })(oldest);
    }
  }

  function startCycling() {
    if (intervalId) return;
    intervalId = setInterval(addEntry, 3000);
  }

  function stopCycling() {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }

  window.initTerminal = initTerminal;
  window.startTerminalCycling = startCycling;
  window.stopTerminalCycling = stopCycling;
  window.generateFakeEntry = generateFakeEntry;
})();
