const router = require('express').Router();
const Register = require('./register-model.js');
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
  let user = req.body;

  const hash = bcrypt.hashSync(user.password, 12);

  user.password = hash;
  try {
    const newUser = await Register.addUser(user);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
