const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Posts, Users, Cities} = require('../../models')

//user choosing a city to see posts on that city

router.post('./city', (req, res) => {
    Cities.findAll({
        attributes: 
    })
})
module.exports = router;