const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Posts, Users, Cities} = require('../../models')

//user choosing a city to see posts on that city

router.post('/', (req, res) => {
    Cities.create({
        city_name: req.body.city_name
        
     })
     .then(dbCityData => res.json(dbCityData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/', (req,res) => {
    Cities.findAll({})
    .then(dbCityData => res.json(dbCityData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.get('/:city_name', (req, res) => {
  Cities.findAll({ where: { city_name: req.params.city_name }})
  .then(dbCityData => {
    if(!dbCityData) {
      res.status(404);
      return;
    }
    res.json(dbCityData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
})
module.exports = router;