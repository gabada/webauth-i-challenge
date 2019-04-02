const router = require('express').Router();
const Users = require('./users-model.js');
const globalRestricted = require('../middleware/global.js');

function restricted(req, res, next) {
  if (req.session && req.session.username) {
    next();
  } else {
    res.status(401).json({ message: 'You shall not pass' });
  }
}

router.get('/', restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

router.get('/restricted/*', globalRestricted, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

router.get('/restricted/hello', (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

router.get('/logout', (req, res) => {
  if (req.session) {
    req.session.destroy(err => {
      if (err) {
        res.send('error loggin gyou out');
      } else {
        res.send('bye. you are logged out');
      }
    });
  } else {
    res.end();
  }
});

module.exports = router;
