import express from 'express';

import signupRouter from './auth/auth.signup.js';
import loginRouter from './auth/auth.login.js';
import autoLoginRouter from './auth/auth.autlogin.js'; 

import sendReqRouter from './connection/connection.send.js';
import acceptReqRouter from './connection/connection.accept.js';
import retrieveRouter from './connection/connection.get.js';
import fetchAllRouter from './connection/connection.fetch-all.js';

const router = express.Router();

router.use('/auth', signupRouter, loginRouter, autoLoginRouter);
router.use('/connect', sendReqRouter, acceptReqRouter, retrieveRouter, fetchAllRouter);

export default router;