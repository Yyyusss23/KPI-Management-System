const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Login Page
router.get('/login', (req, res) => {
  res.render('login', { error: null });
});

// Login Logic
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });

  if (!user) {
    return res.render('login', { error: 'Invalid credentials' });
  }

  req.session.user = {
    id: user._id,
    name: user.name,
    role: user.role
  };

  res.redirect('/dashboard');
});

module.exports = router;
