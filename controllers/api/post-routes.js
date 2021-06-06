const router = require('express').Router();
//const sequelize = require('../../config/connection');
const { Posts, Users, Cities} = require('../../models')


//route for posting a new post
router.post('/', (req, res) => {
    Posts.create({ 
        title: req.body.title,
        location: req.body.location,
        info: req.body.info,
        user_name: req.body.user_name
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
//route for finding all posts
router.get('/', (req, res) => {
    Posts.findAll({})
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
})

module.exports = router;




















module.exports = router;