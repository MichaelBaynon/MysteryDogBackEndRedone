const express = require('express')
const helmet = require('helmet');
const cors = require('cors');

const usersRouter = require('../user/user-router')
const dogsRouter = require('../dogs/dogs-router')

const server = express()

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/users', usersRouter)
server.use('/dogs', dogsRouter)



server.get("/", (req, res) => {
    res.send({ message: "working !" });
  });

module.exports = server