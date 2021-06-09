const path = require('path');
const router = require('express').Router();
const { Posts, Users, Cities} = require('../models')

// router.get('/', (req, res) => {
//     res.render('index');
// });

router.get('/', (req, res) => {
    Posts.findAll({
      include: [{ model: Users, attributes: ['user_name']},
      { model: Cities, attributes: ['city_name']}]
    })
    .then(dbPostData => res.json(dbPostData));
    
    res.render('index')

    // .catch(err => {
    //   console.log(err);
    //   res.status(500).json(err);
    // });
})
// const sequelize = require('../config/connection');

// router.get('/', (req, res) => {
//     res.render('contactus');
//   });
  
 
module.exports = router;