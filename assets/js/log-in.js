const passwordVerify = require('../../controller/api/password-verification.js');
const logInBtn = document.getElementById('logInBtn');

// get user info function for user sign up
const getUserLogin = function() {
    console.log('getUserLogin works')
}

logInBtn.addEventListener('click', getUserLogin)
