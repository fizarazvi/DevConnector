const express = require('express');
const router = express.Router();

//@route  GET api/posts
//@desc   TEST route
//@access Public (use a token or not)
router.get('/',(req, res) => res.send('Post route'));

module.exports = router;

