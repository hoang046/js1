function checkUsername() {
    var elMsg = document.getElementById(elementld: 'feedback');
    if (this.value.length < 5) {
        elMsg.textContent = 'Username must be 5 character or more';
    } else {
    elMsg.textContent = '';
    }
}
 var elUsername = document.getElementById(elementld: 'username');
elUsername.onblur = checkUsername();
