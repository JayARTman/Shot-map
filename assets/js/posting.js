let submitBtn = document.getElementById("submitBtn")

async function postData(event) {
    event.preventDefault();

    // this is to get the user city choice
    let userInput = document.getElementById("inputGroupSelect04");
    let userInputSelect = userInput.value;

    // taking choice and making it a string 
   let location = userInputSelect.toString()

   //this is to get the description or text from user
    let infoHolder = document.getElementById("infoHolder");
    let info = infoHolder.value;

    let image = document.getElementById('image').files[0]
    console.log(image)
    
    if (location && info) {
        
        const response = await fetch ('/api/post', {
            method: 'POST',
            body: JSON.stringify({
                location,
                info,
                image, 
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        if (response.ok) {
            document.location.reload();
          } else {
            alert(response.statusText);
          }
    }
}

submitBtn.addEventListener('click', postData)
