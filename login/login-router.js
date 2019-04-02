const router = require('express').Router();
const Login = require('./login-model.js');
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
  let { username, password } = req.body;
  try {
    const user = await Login.findBy({ username }).first();
    if (user && bcrypt.compareSync(password, user.password)) {
      req.session.username = user.username;
      res.status(200).json({ message: 'Logged in' });
    } else {
      res.status(401).json({ message: 'You shall not pass!' });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
