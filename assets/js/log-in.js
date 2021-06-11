

// get user info function for user sign up
async function getUserLogin(event) {
  event.preventDefault();
  
    let userEmail = (document.getElementById('email').value).trim();
    let password = (document.getElementById('password').value).trim();
    //console.log('Username is ' + username + ' and your password is ' + password);
    if(userEmail && password){
        const response =  await fetch('api/user/login', {
          method: 'post',
          body: JSON.stringify({ 
            userEmail,
            password
          }),
          headers: { 'Content-Type': 'application/json' },
        })
      if (response.ok) {
        console.log('test')
        document.location.replace('logged-in');
      } else {
        alert(response.statusText);
      }
    }
}
      
document.querySelector('#logInBtn').addEventListener('click', getUserLogin)

