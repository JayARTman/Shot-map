//creating fetch request based on city choice
const cityChoice = document.getElementById('inputGroupSelect04');
const searchBtn = document.getElementById('searchBtn');
const signUpBtn = document.getElementById('signUpBtn');

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
const getUserLogin = function() {
    console.log('getUserLogin works')
}

signUpBtn.addEventListener('click', getUserLogin)
searchBtn.addEventListener('click', showSearch)