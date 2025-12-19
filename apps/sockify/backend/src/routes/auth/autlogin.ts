import express from 'express';
import jwt from 'jsonwebtoken';
import type { JwtPayload } from 'jsonwebtoken';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

dotenv.config();

interface AccessTokenPayload extends JwtPayload {
    email: string;
}

const router = express.Router();
router.use(cookieParser());

router.get('/autologin', async (req, res) => {
    try {
        const token = req.cookies.access_token
        console.log(token);
        if(!token || token === "") {
            return res.json({ status: 401, msg: 'Auto-login failed: Invalid or Expired Token' });
        }
        const payload = jwt.verify(token, process.env.JWT_SECRET as string) as AccessTokenPayload;

        return res.json({
            status: 201,
            msg: 'Autlogin successfull, navigating to app.',
            email: payload?.email
        });

    } catch(err) {
        return res.json({ status: 401, error: 'AutoLogin failed: Invalid or Expired Token'});
    }
});

export default router;