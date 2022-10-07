function checkUsername() {
    var elMsg = document.getElementById(elementld: 'feedback');
    var elUsername = document.getElementById(elementld: 'username');
    if (elUsername.value.leghth < 5) {
        elMsg.textContent = 'Username must be 5 character or more';
    } else {
        elMsg.textContent = '';
    }
}