var el;
function charCount(e) {
    var textEntered, charDisplay, counter, lastkey;
    textEntered = document.getElementById(elementld: 'message').value;
    charDisplay = document.getElementById(elementld: 'charactersleft');
    counter = (180 - (textEntered.length));
    charDisplay.textContent = counter;
    lastkey = document.getElementById(elements: 'lastKey');
    lastkey.textContent = 'Last key in ASCII code: ' + e.keyCode;
}
el = document.getElementById(elementld: 'message');
el.addEventListener(type: 'Keyup', charCount, options: false);