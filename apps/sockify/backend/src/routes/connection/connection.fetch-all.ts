import express from 'express';
import zod from 'zod';
import { prisma } from '../../lib/prisma.js';

const router = express.Router();

const fetchAllObj = zod.object({
    input: zod.string()
});

router.get('/fetch-all', async (req, res) => {
    try {
        const parsed = fetchAllObj.safeParse(req.query);
        const formattedErrors = parsed.error?.issues.map(err => ({ path: err.path[0], msg: err.message }));
        if(!parsed.success) {
            return res.json({
                status: 403,
                msg: 'Invalid Fetching Request',
                err: formattedErrors
            })
        }

        const { input } = parsed.data;
            const existing_users = await prisma.$transaction(async (tx) => {
                const users = await tx.sOCK_USERS.findMany({
                    where: { 
                        OR: [
                            {
                                email: {
                                    contains: input,
                                    mode: "insensitive"
                                },
                            },
                            {
                                name: {
                                    contains: input,
                                    mode: "insensitive"
                                },
                            },
                        ],
                     },
                    select: {
                        name: true,
                        email: true
                    },
                    take: 10
                });
                return users;
            });

            if(!existing_users || existing_users.length === 0) {
                return res.json({ status: 404, msg: 'Users not found with key: ' + input });
            }

            return res.json({
                status: 200,
                msg: 'Users found in Sockify-DB.',
                existing_users: existing_users
            });

    } catch(err) {
        return res.json({
            status: 500,
            msg: 'Internal Server Error.'
        })
    }
});

export default router;