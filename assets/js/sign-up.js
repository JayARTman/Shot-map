const btn = document.getElementById('btn');

      const submitForm = function() {
        const fname = document.getElementById('fname').value;
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        fetch('/api/user', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            'user_name': fname,
            'email': email,
            'password': password
          })
        })
        .then((res) => {
          return res.json();
        })
        .then((data, errors) => {
          if(!data.id) {
            alert(data.errors[0].message);
          }
          console.log(data);
          
        });

        
      }
      btn.addEventListener('click', (event) => {
        event.preventDefault();
        submitForm();
      })