const path = require('path');
const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('about.handlebars');
});


// const sequelize = require('../config/connection');

// router.get('/', (req, res) => {
//     res.render('contactus');
//   });
  
 
module.exports = router;