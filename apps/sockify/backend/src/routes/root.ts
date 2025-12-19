import express from 'express';
import signupRouter from './auth/signup.js';
import loginRouter from './auth/login.js';
import autoLoginRouter from './auth/autlogin.js'; 
const router = express.Router();

router.use('/auth', signupRouter, loginRouter, autoLoginRouter);

export default router;