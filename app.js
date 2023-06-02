const express = require('express');
const userRouter = require('./routes/userRoutes.js');

const app = express();

// 1) Global Middleware

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));

// 2) Routes
app.use('/api/v1/users', userRouter);

module.exports = app;