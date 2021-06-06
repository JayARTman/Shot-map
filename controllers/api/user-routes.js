const router = require('express').Router();
//const sequelize = require('../../config/connection');
const { Posts, Users, Cities} = require('../../models');


router.post('/', (req, res) => {
    Users.create({
        user_name: req.body.user_name,
        email: req.body.email,
        password: req.body.password
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/', (req,res) => {
  Users.findAll({
    attributes: { exclude: ['password']}
  })
  .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
})


module.exports = router;



