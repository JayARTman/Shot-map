const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Posts, Users, Cities} = require('../../models');




router.post('/', (req, res) => {
    Users.create({
        user_name: req.body.user_name,
        email: req.body.email,
        password: req.body.password

    }).then(dbUserData => {
    req.session.save(() => {
      req.session.id = dbUserData.id;
      req.session.user_name = dbUserData.username;
      req.session.loggedIn = true;
  
      res.json(dbUserData);
    });
})

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

router.get('/:user_name', (req, res) => {
    Users.findOne({ 
      where: { user_name: req.params.user_name },
       attributes: { exclude: ['password']}
    })
    .then(dbUserData => {
        if(!dbUserData) {
            res.status(404)
            return;
        }
        res.json(dbUserData);
    })
    .catch( err => {
        console.log(err);
        res.status(500).json(err);
    })
})

router.post('/login', (req, res) => {
  console.log('hello there')
    Users.findOne({
      where: {
        email: req.body.userEmail

      }
    }).then(dbUserData => {
      if (!dbUserData) {
        res.status(400).json({ message: 'Must be a wrong email address!' });
        return;
      }
  
      const validPassword = dbUserData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res.status(400).json({ message: 'Thats not your password!' });
        return;
      }

      req.session.save(() => {
        req.session.id = dbUserData.id;
        req.session.user_name = dbUserData.user_name;
        req.session.loggedIn = true;
  
      res.json({ user: dbUserData, message: 'You did it!' });
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
  });

  router.post('/logout', (req, res) => {
      if ( req.session.loggedIn) {
        req.session.destroy(() => {
          res.status(204).end();
        })
      }
      else {
        res.status(404).end();
      }
  })
  

module.exports = router;



