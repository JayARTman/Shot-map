const path = require('path');
const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/contact', (req, res) => {
    res.render('contactus');
});

router.get('/login', (req, res) => {
    res.render('login-form');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

// const sequelize = require('../config/connection');

// router.get('/', (req, res) => {
//     res.render('contactus');
//   });
  
 
module.exports = router;