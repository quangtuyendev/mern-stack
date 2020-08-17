const User = require('../models/user');
const config = require('../config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

async function register(req, res) {
  const { email, username, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    return res.status(400).json({ msg: 'Email already exists' });
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const newUser = new User({
    email,
    username,
    password: hash,
  });
  await newUser.save();
  res.status(201).json({ msg: 'Register successful' })
}

async function signin(req, res) {
  const { email, password } = req.body;
  const userInfo = await User.findOne({ email });
  if (!userInfo) {
    return res.status(404).send({ msg: 'Email is not correct' });
  }
  const isMatch = await bcrypt.compare(password, userInfo.password);
  if (!isMatch) {
    return res.status(404).send({ msg: 'Password is not correct' });

  }
  res.status(200).json({
    username: userInfo.username,
    isAuthenticated: true,
    message: 'Signin successful',
    token: jwt.sign(
      {
        _id: userInfo._id,
        email: userInfo.email,
        username: userInfo.username,
        password: userInfo.password,
      },
      config.JWT_SECRET,
      {
        expiresIn: 3600,
      }
    )
  })
}

module.exports = { register, signin }