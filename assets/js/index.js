//creating fetch request based on city choice
const cityChoice = document.getElementById('inputGroupSelect04');
const searchBtn = document.getElementById('searchBtn');



const showSearch = function() {
    console.log('button works');
   var city = 'http://127.0.0.1:3008/api/post';
    fetch(city)
    .then((response) => response.json)
    .then((data) => {
        console.log(data)
    })
}

searchBtn.addEventListener('click', showSearch)