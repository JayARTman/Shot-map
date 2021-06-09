// const passwordVerify = require('../../controller/api/password-verification.js');
const logInBtn = document.getElementById('logInBtn');

// get user info function for user sign up
const getUserLogin = function() {
    let username = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    //console.log('Username is ' + username + ' and your password is ' + password);

    fetch('/:user_name')
        .then(res => res.json())
        console.log(getUserLogin)


    //for (i = 0; )
}

logInBtn.addEventListener('click', (event) => {
    event.preventDefault();
    getUserLogin();
});