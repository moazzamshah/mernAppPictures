const router = require('express').Router();
const User = require('../models/User');
// get should be post here if u use req.session or post

router.get('/all', (req, res) => {
  User.find((error, user) => {
    res.json(user);
  }).populate('addressSchema');
});

const jwt = require('jsonwebtoken');
router.post('/signinByJWT', (req, res) => {
  const { email, password } = req.body;
  const data = req.body;

  console.log('data before encoding: ', data);
  const secret = 'tell me your secret';

  const token = jwt.sign(data, secret, {
    expiresIn: '1d',
  });
  console.log('data after encoding is:', token);
  res.json(token);
});

// ! ================ SIGNIN ================
router.post('/signin', (req, res) => {
  const { username, email, password } = req.body;
  User.findOne({ email, password }, (error, data) => {
    if (!data) {
      res.json('no user found');
    } else {
      res.json('successfully login');
    }
  });
});

//! ================ SIGNUP ================
router.post('/create', (req, res) => {
  // save a user
  const newUser = new User(req.body);
  newUser.save((err, doc) => {
    if (err) throw err.message;
    res.json(doc);
  });
});

router.get('/test', (req, res) => {
  User.find((error, users) => {
    res.json(users);
  })
    .sort({ _id: -1 })
    .limit(3);
});

module.exports = router;
