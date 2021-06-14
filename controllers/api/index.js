const router = require('express').Router();

const postRoutes = require('./post-routes');
const cityRoutes = require('./cities-routes');
const passwordVerify = require('./password-verification')

router.use('./post', postRoutes);
router.use('./city', cityRoutes);
router.use('./password-verification', passwordVerify)

module.exports = router;