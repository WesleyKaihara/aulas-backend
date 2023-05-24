const express = require("express");
const server = express();

const tasksRouter = require('./routes/tasks');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');

server.use(express.json());
server.use(authRouter);
server.use(tasksRouter);
server.use(usersRouter);

module.exports = server;
