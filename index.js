const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session);

const db = require('./data/dbConfig.js');

const server = express();
const port = 5000;

const registerRouter = require('./register/register-router.js');
const usersRouter = require('./users/users-router.js');
const loginRouter = require('./login/login-router.js');

const sessionConfig = {
  name: 'sloth',
  secret: 'secret4lyfe!CHANGEME',
  cookie: {
    maxAge: 1000 * 60 * 15, // 15 min
    secure: false,
    httpOnly: true // can not access the cookie in JS
  },
  resave: false,
  saveUninitialized: false,
  store: new KnexSessionStore({
    tablename: 'sessions',
    sidfieldname: 'sid',
    knex: db,
    createtable: true,
    clearInterval: 1000 * 60 * 60
  })
};

server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(session(sessionConfig));

server.use('/api/register', registerRouter);
server.use('/api/users', usersRouter);
server.use('/api/login', loginRouter);

server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));
