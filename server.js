const express = require('express');
const helmet = require('helmet');

const projectRouter = require('./projects/project-router');
const taskRouter = require('./tasks/task-router');
const resourceRouter = require('./resources/resource-router');
const prjctrsrc = require('./projects-resources/prjctrsrc-router');


const server = express();

server.use(express.json());

server.use('/api/projects', projectRouter);
server.use('/api/tasks', taskRouter);
server.use('/api/resources', resourceRouter);
server.use('/api/projects-resources', prjctrsrc);

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: `There was a server error`
    })
})

module.exports = server;