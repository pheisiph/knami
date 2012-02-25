Knami - Konami Code for jQuery
=

A jQuery plugin to infuse your website with support for the Konami Code. 

If a user keys in the Konami Code in the correct order, a callback function provided by you gets executed. If a mistake is made (another key pressed, the sequence broken), the sequence gets reset. 

Include jQuery file and then invoke the plugin by passing it the callback
that gets executed whenever the Konami Code has been entered. Like, so:

```javascript
$(document).ready(function() {
    $.knami({
        onKonamiCodeComplete: function() {
            alert("Full health restored!");
        }
    });
});
```

You don't have to use the original Konami Code. You can define your own key sequence to trigger the callback by passing an array of [Javascript Char keyCodes][keycodes] called `konamiCode` along with the options object.

There are also a few more callbacks that get called when the keys in
the Konami Code are pressed:


```javascript
$(document).ready(function() {
    $.knami({
        konamiCode: [38,13] // up, enter
        onKonamiCodeComplete: function() {
            alert("Full health restored!");
        },
        onKonamiKeyPress: function() {
            console.debug("I get called whenever a key of the Code is pressed, regardless of whether is was in sequence or not.")
        },
        onKonamiKeyPressSequence: function() {
            console.debug("I get called whenever a key of the Code is pressed *in sequence*").
        }
    });
});
```




[keycodes]: http://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes