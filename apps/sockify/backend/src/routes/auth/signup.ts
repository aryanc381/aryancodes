import express from 'express';
import zod from 'zod';
import jwt from 'jsonwebtoken';
import { prisma } from '../../lib/prisma.js';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';


dotenv.config();

const router = express.Router();
const signUpBody = zod.object({
    name: zod.string(),
    email: zod.email(),
    password: zod.string(),
});

router.post('/signup', async (req, res) => {

    const parsed = signUpBody.safeParse(req.body);
    if(!parsed.success) { 
        const formattedErrors = parsed.error.issues.map(err => ({ path: err.path[0], msg: err.message }));
        return res.json({ status: 403, msg: 'Invalid Signup Object.', error: formattedErrors});
    }

    const { name, email, password } = req.body;

    const existing_user = await prisma.sock_user.findUnique({
        where: { email: email }
    });
    if(existing_user) {
        return res.json({
            status: 405,
            msg: 'User already exists in Sockify-DB.'
        });
    }

    const hashed_password = await bcrypt.hash(password, Number(process.env.SALT));
    const token = jwt.sign({ email: email }, process.env.JWT_SECRET as string);
    const new_user = await prisma.sock_user.create({
        data: {
            name: name, 
            email: email,
            password: hashed_password,
            token: token
        }
    });

    res.cookie("access_token", token );

    return res.json({
        status: 201,
        msg: 'User has been added to Sockify-DB.',
        name: new_user.name,
        password: new_user.password,
        token: new_user.token
    });
});

export default router;