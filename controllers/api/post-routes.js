const router = require('express').Router();
const multer = require('multer');
const path = require('path')
const sequelize = require('../../config/connection');
const { Posts, Users, Cities, Images} = require('../../models')



//route for posting a new post
router.post('/', (req, res) => {
//  upload()
  if (req.session){


    Posts.create({ 
      location: req.body.location,
      info: req.body.info,
      user_name: req.session.user_id,
      photo: req.body.photo
      //picture: req.body.picture
  })
  .then(dbPostData => res.json(dbPostData),
   console.log(req.body))
  
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });

    
  }
});
//route for finding all posts
router.get('/', (req, res) => {
    Posts.findAll({
      include: [{ model: Users, attributes: ['user_name']},
      { model: Cities, attributes: ['city_name']},
    { model: Images, attributes: ['path']}]
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
})

router.get('/:location', (req, res) => {
    Posts.findAll({
      where: {
        location: req.params.location
      },
      include: [
        {
          model: Cities,
          attributes: ['city_name']
        },
      {
          model: Users,
          attributes: ['user_name']
        }
      ]
       
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
})

router.get('/:user_name', (req, res) => {
  Posts.findAll({
    where: {
      user_name: req.params.user_name
    },
    include: [
      {
        model: Cities,
        attributes: ['city_name']
      }
    ]
  })
  .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
})

module.exports = router;




















module.exports = router;