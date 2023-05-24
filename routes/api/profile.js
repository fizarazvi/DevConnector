const express = require('express');
const router = express.Router();

//@route  GET api/profiles
//@desc   TEST route
//@access Public (use a token or not)
router.get('/',(req, res) => res.send('Profile route'));

module.exports = router;

