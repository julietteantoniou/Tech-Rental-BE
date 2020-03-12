const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan')


const server = express();

server.use(helmet());
server.use(cors());
server.use(morgan());
server.use(express.json());


const authRouter = require('./auth/auth-router.js');
const techRouter = require('./tech/tech-router.js');
const rentalRouter = require('./rentals/rental-router.js');

server.use('/auth', authRouter);
server.use('/api/tech', techRouter);
server.use('/api/rentals', rentalRouter);


server.get('/', (req, res) => {
    res.status(200).json('Tech Rental API');
})

module.exports = server;