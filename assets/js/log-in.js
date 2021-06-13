// const passwordVerify = require('../../controller/api/password-verification.js');
const logInBtn = document.getElementById('logInBtn');

// get user info function for user sign up
const getUserLogin = function() {
    let username = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    console.log(username)
    //console.log('Username is ' + username + ' and your password is ' + password);
    let fetchUrl = 'api/user/:' + username
    fetch('api/user', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        'user_name': username,
        'password': password
      }
    })
    .then((res) => res.json())
    .then(data => {
      console.log(data)
    })

}

logInBtn.addEventListener('click', (event) => {
    event.preventDefault();
    getUserLogin();
});