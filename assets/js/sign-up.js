const btn = document.getElementById('btn');


      async function submitForm(event) {
        console.log('btn works')
        event.preventDefault();

        const user_name = document.getElementById('fname').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        if(user_name && email && password){
          const response =  await fetch('/api/user', {
            method: 'post',
          
             body: JSON.stringify({
              user_name,
              email,
              password
            }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
          document.location.replace('logged-in');
        } else {
          alert(console.log('Nope'))
        }
      }
    }
     
    document.getElementById('btn').addEventListener('click', submitForm)

