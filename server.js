const express = require('express');
const helmet = require('helmet');

const routers = require("./modelsRouters/routers.js");


const server = express();

server.use(express.json());

server.use('/api/', routers);


server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: `Hello World`
    })
})

module.exports = server;