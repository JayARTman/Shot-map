const router = require('express').Router();

const postRoutes = require('./post-routes');
const cityRoutes = require('./cities-routes');
const userRoutes = require('./user-routes');

router.use('/post', postRoutes);
router.use('/city', cityRoutes);
router.use ('/user', userRoutes);
module.exports = router;