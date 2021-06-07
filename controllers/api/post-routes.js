const router = require('express').Router();
const sequelize = require('../../config/connection');
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
    Posts.findAll({
      include: [{ model: Users, attributes: ['user_name']},
      { model: Cities, attributes: ['city_name']}]
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
      attributes: [
        'title',
        'info',
        'user_name',
        [sequelize.literal('(SELECT COUNT(*) FROM posts WHERE posts.location = cities.id)'), 'location']
      ],
      include: [
        {
          model: Cities,
          attributes: ['id']
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