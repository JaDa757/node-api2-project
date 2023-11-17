const express = require('express');
const postsRouter= require('./posts/posts-router')
const server = express();

server.use(express.json());

server.use('/api/posts', postsRouter)

server.get('/', (req, res) => {
    res.status(200).json({
        message: 'Hello, this is your Express server!'
    });
})

module.exports = server;