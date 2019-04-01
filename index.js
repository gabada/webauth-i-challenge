const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();
const port = 5000;

// const registerRouter = require('./register/register-router.js');
// const usersRouter = require('./users/user-router.js');
// const loginRouter = require('./login/login-router.js');

server.use(express.json());
server.use(cors());
server.use(helmet());

// server.use('/api/register', registerRouter);
// server.use('/api/users', usersRouter);
// server.use('/api/login', loginRouter);

server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));
