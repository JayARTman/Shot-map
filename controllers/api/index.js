const router = require('express').Router();

const postRoutes = require('./post-routes');
const cityRoutes = require('./cities-routes');

router.use('./post', postRoutes);
router.use('./city', cityRoutes);

module.exports = router;