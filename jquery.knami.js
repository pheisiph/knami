/*
 * Knami - Konami Code for jQuery
 * version: 1.0
 * @requires jQuery
 * @homepage https://github.com/darph/knami
 *
 * Licensed under the MIT:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright Forever Patrick Heisiph
 *
 * Usage:
 *
 * $.knami({
 *   onKonamiCodeComplete: function() {
 *     alert("Full health restored!");
 *   }
 * });
 *
 * Change the code character sequence by passing an array of
 * JS Char keyCodes:
 * 
 * var options = {
 *    konamiCode: [13,28,13],
 *    onKonamiCodeComplete: function() {
 *    // ... do stuff
 *    }
 * }
 * 
 * Supports the following callbacks:
 * 
 * onKonamiCodeComplete: When the key sequence has been typed in without interruption.
 * onKonamiKeyPress: When a key in the sequence is pressed regardless of sequence
 * onKonamiKeyPressSequence: When a key is pressed as part of the code sequence
 *  
 *
 */
 (function($) {
  $.knami = function(options) {
    // up,up,down,down,left,right,left,right,b,a,[ENTER]
    var defaults = {
      konamiCode: [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13],
      onKonamiKeyPress: function() {},
      onKonamiKeyPressSequence: function() {},
      onKonamiCodeComplete: function() {}
    };
    var options = $.extend(defaults, options);

    var konamiIndex = 0;
    var konamiCode = options.konamiCode;
    var konamiKeys = $.grep(konamiCode,
    function(v, k) {
      return $.inArray(v, konamiCode) === k;
    });
    var noKonami = true;
    // Konami Code has not yet been entered
    $(window).keyup(function(e) {
      var keyCode = e.keyCode;

      if ($.inArray(keyCode, konamiKeys) > -1) {
        options.onKonamiKeyPress();

        if (keyCode == konamiCode[konamiIndex]) {
          konamiIndex++;
          options.onKonamiKeyPressSequence();
        } else {
          konamiIndex = 0;
        }

        if (noKonami && konamiIndex >= konamiCode.length) {
          noKonami = false;
          // Konami Code can only be invoked once.
          options.onKonamiCodeComplete();
          //we made it to the end!
          konamiIndex = 0;
          // reset
        }
      }
    });
    return this;
  };
})(jQuery);