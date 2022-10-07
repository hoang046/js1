var ellist, addLink, newEl, newText, counter, listItems;
ellist = document.getElementById(elementld: 'list');
addLink = document.getElementById(selectors: 'a');
counter = document.getElementById(elementld: 'counter');
function addItem(e) {
    e.preventDefault();
    newEl = document.createElement( tagName: 'li');
    newText = document.createTextNode(data: 'New list item');
    newEL.appendChild(newText);
    ellist.appendChild(newEl);
}
function updateCount() {
    listItems = ellist.getElementsByTagName('li').length;
    counter.innerHTML = listItem;
}
addItem.addEventListener(type: 'click', addItem, options: false);
ellist.addEventListener(tyoe: 'DOWNodeInserted', updateCount, options: false);