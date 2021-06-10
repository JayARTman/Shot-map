// const passwordVerify = require('../../controller/api/password-verification.js');
const logInBtn = document.getElementById('logInBtn');

// get user info function for user sign up
const getUserLogin = function() {
    let username = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    //console.log('Username is ' + username + ' and your password is ' + password);

    fetch('/login', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        body: undefined
      })
      .then((res) => {
        console.log(res.json());
        return res.json();
        
      })
      .then((data) => {
        if(!data.id) {
          alert(data.errors[0].message);
        }
        console.log(data);
        
      });

}

logInBtn.addEventListener('click', (event) => {
    event.preventDefault();
    getUserLogin();
});