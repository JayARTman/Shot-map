const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Posts, Users, Cities} = require('../../models')
//user posting to site
//seeing posts


router.get('/', (req, res) => {
    console.log('got em')
})




















module.exports = router;