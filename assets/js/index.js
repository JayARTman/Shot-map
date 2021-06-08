//creating fetch request based on city choice
const cityChoice = document.getElementById('inputGroupSelect04');
const searchBtn = document.getElementById('searchBtn');
const signUpBtn = document.getElementById('signUpBtn');
const Handlebars = require('handlebars');

const main = getElementById('main');

// const showSearch = function() {
//   //console.log('button works');
//     let city = 'http://localhost:3008/api/post';
//     fetch(city)
//         .then((response) => console.log(response.json))
//         .then((data) => {
//         console.log(data)
//     })
// }

// get user info function for user sign up
const getUserInfo = function() {
    console.log('getUserInfo works')
}

signUpBtn.addEventListener('click', getUserInfo)
searchBtn.addEventListener('click', showSearch)