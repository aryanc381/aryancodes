import express from 'express';
import zod from 'zod';
import { prisma } from '../../lib/prisma.js';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';

dotenv.config();

const router = express.Router();
router.use(cookieParser());

const loginBody = zod.object({
    email: zod.email(),
    password: zod.string()
});

router.post('/login', async (req, res) => {
    
    const parsed = loginBody.safeParse(req.body);
    if(!parsed.success) { 
        const formattedErrors = parsed.error.issues.map(err => ({ path: err.path[0], msg: err.message }));
        return res.json({ status: 403, msg: 'Invalid Signup Object.', error: formattedErrors});
    }

    const { email, password } = req.body;
    const existing_user = await prisma.sOCK_USERS.findUnique({
        where: { email: email },
        select: { token: true, password: true, id: true, email: true, name: true }
    });

    if(!existing_user) {
        return res.json({
            status: 404,
            msg: 'User not found in Sockify-DB.'
        });
    }

    const is_valid = await bcrypt.compare(password, existing_user?.password!);
    const token = jwt.sign({ email: existing_user.email, id: existing_user.id, name: existing_user.name }, process.env.JWT_SECRET as string);

    if(!is_valid) {
        return res.json({ status: 405, msg: 'Invalid Password.'});
    }

    res.cookie("access_token", token, { httpOnly: true, sameSite: 'lax', secure: false });
    
    return res.json({
        status: 201,
        msg: 'User has logged in successfully!',
        token: existing_user?.token,
        email: existing_user.email,
        name: existing_user.name,
        id: existing_user.id
    });
});

export default router;