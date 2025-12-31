import express from 'express';
import zod from 'zod';
import { prisma } from '../../lib/prisma.js';

const router = express.Router();

const userConnectObj = zod.object({
    input: zod.string()
}); 

router.get('/user-connects', async(req, res) => {
    try {
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
            where: { email: input },
            select: { email: true, accepted: true }
        });

        if(!existing_users || existing_users.length === 0) {
            return res.json({ status: 404, msg: 'Users not found with key: ' + input });
        }

        const searchUsers = await prisma.sOCK_USERS.findMany({
            where: {
                id: {
                    in: existing_users[0]?.accepted!
                }
            },
            select: {
                id: true,
                name: true,
                email: true
            }
        });

        return res.json({
            status: 200,
            msg: `Connects found.`,
            response: searchUsers
        });
    } catch(err) {
        return res.json({
            status: 500,
            msg: 'Internal Server Error.'
        });
    } 
});

export default router;