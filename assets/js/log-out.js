 const btn = document.getElementById('logOutBtn')

 async function loggingOut(){
     const response = await fetch('/api/user/logout', {
         method: 'post'
     });
     if (response.ok) {
         document.location.replace('./')
     } else {
        alert(console.log('Nope'))
     }
 };

 btn.addEventListener('click', loggingOut)

