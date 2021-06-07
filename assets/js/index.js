//creating fetch request based on city choice
const cityChoice = document.getElementById('inputGroupSelect04');
const searchBtn = document.getElementById('searchBtn');



const showSearch = function() {
    console.log('button works');
    let city = 'http://localhost:3008/api/post';
    fetch(city)
        .then((response) => console.log(response.json))
        .then((data) => {
        console.log(data)
    })
}

searchBtn.addEventListener('click', showSearch)