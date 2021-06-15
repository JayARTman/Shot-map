

let submitBtn = document.getElementById("submitBtn")

async function postData(event) {
    event.preventDefault();

    // this is to get the user city choice
    let userInput = document.getElementById("inputGroupSelect04");
    let location = userInput.value;
    
    // taking choice and making it a string 
//    let location = userInputSelect.value
//    console.log(location)
    let photoId = ''
   //this is to get the description or text from user
    let infoHolder = document.getElementById("infoHolder");
    let info = infoHolder.value;
    
    const fileInput = document.getElementById('exampleFormControlFile1');
    const files = fileInput.files;
    const formData = new FormData();
    console.log(files)
    formData.append('postImage', files[0]);
    
    fetch('/api/upload', {
        method: 'POST',
        body: formData
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })

    // let image = document.getElementById('image').files[0]
    // console.log(image)

    
    
    if (location && info) {
        const response = fetch('/api/post', {
            method: 'post',
            body: JSON.stringify({
                location: location,
                info: info,
            
                // image, 
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
