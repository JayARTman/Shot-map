const path = require('path');
const router = require('express').Router();
const { Posts, Users, Cities, Images} = require('../models')

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/contact', (req, res) => {
    res.render('contactus');
});

//if user is logged in, takes them back to home page



router.get('/logged-in', (req, res) => {
    if(!req.session.loggedIn) {
        res.redirect('signup');
        return;
    }
    res.render('logged-in', 
    {
        name:  req.session.user_name
    })
})
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('logged-in');
        return;
    }
    res.render('login-form');
});

router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('logged-in');
        return;
    }
    res.render('signup');
});

router.get('/', (req, res) => {
    console.log(req.session);
  
});
 
module.exports = router;