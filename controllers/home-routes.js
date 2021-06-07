const path = require('path');
const router = require('express').Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, ''));
});
router.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '../about.html'));
});
router.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '../contactus.html'));
});
router.get('/loginform', (req, res) => {
    res.sendFile(path.join(__dirname, '../loginform.html'));
})

// const sequelize = require('../config/connection');

//login in and out
module.exports = router;