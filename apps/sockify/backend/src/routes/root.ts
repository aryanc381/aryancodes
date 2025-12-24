import express from 'express';
import signupRouter from './auth/signup.js';
import loginRouter from './auth/login.js';
import autoLoginRouter from './auth/autlogin.js'; 
import sendReqRouter from './connection/send.js';
import acceptReqRouter from './connection/accept.js';
import retrieveRouter from './connection/get.js';
import fetchAllRouter from './connection/fetchAll.js';

const router = express.Router();

router.use('/auth', signupRouter, loginRouter, autoLoginRouter);
router.use('/connect', sendReqRouter, acceptReqRouter, retrieveRouter, fetchAllRouter);

export default router;