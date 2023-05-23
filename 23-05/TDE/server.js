const express = require("express");
const server = express();

const tasksRouter = require('./routes/tasks');

server.use(express.json());
server.use(tasksRouter);

module.exports = server;
