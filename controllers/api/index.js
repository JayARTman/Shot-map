const router = require('express').Router();

const postRoutes = require('./post-routes');
const cityRoutes = require('./cities-routes');
const passwordVerify = require('./password-verification')

const userRoutes = require('./user-routes');
const imageRoutes = require('./image-routes');

router.use('/post', postRoutes);
router.use('/city', cityRoutes);
router.use ('/user', userRoutes);
router.use('/upload', imageRoutes);


module.exports = router;