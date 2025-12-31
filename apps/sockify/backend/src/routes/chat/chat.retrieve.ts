import express from 'express';
import zod from 'zod';
import { prisma } from '../../lib/prisma.js';

const router = express.Router();

const userConnectObj = zod.object({
    input: zod.number()
}); 

router.get('/user-connects', async(req, res) => {
    const parsed = userConnectObj.safeParse(req.query);
    const formattedErrors = parsed.error?.issues.map(err => ({ path: err.path[0], msg: err.message }));
    if(!parsed.success) {
        return res.json({
            status: 403,
            msg: 'Invalid Fetching Request',
            err: formattedErrors
        })
    }

    const { input } = parsed.data;
    const existing_users = await prisma.sOCK_USERS.findMany({
        where: { id: input },
        select: { email: true, accepted: true }
    });

    if(!existing_users || existing_users.length === 0) {
        return res.json({ status: 404, msg: 'Users not found with key: ' + input });
    }

    return res.json({
        status: 200,
        msg: `Connects found.`,
        response: existing_users
    });

});