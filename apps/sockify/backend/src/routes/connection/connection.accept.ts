import express from 'express';
import zod from 'zod';
import { prisma } from '../../lib/prisma.js';

const router = express.Router();

const acceptBody = zod.object({
    s_email: zod.email(),
    r_email: zod.email()
});

router.post('/accept', async(req, res) => {
    try {
        const parsed = acceptBody.safeParse(req.body);
        if(!parsed.success) {
            const formattedErrors = parsed.error.issues.map(err => ({ path: err.path[0], msg: err.message }));
            return res.json({
                status: 403,
                msg: 'Invalid Connection-Request Object.',
                error: formattedErrors
            });
        }

        const { s_email, r_email } = req.body;

        const receiver = await prisma.sOCK_USERS.findUnique({
            where: { email: r_email },
            select: { id: true, pending: true, name: true, accepted: true }
        });
        if(!receiver) {
            return res.json({
                status: 404,
                msg: `Receiver with email ${r_email} is not found.`
            });
        }

        const sender = await prisma.sOCK_USERS.findUnique({
            where: { email: s_email },
            select: { id: true, accepted: true, name: true }
        });
        if(!sender) {
            return res.json({
                status: 404,
                msg: `Sender with email ${s_email} is not found.`
            });
        }

        if (receiver.accepted.includes(sender.id)) {
            return res.json({
                status: 403,
                msg: 'You are already connected with ' + sender.name
            });
        }
        
        const check = await prisma.sOCK_USERS.findFirst({
            where: { id: receiver.id, pending: { has: sender.id } }
        });

        if(!check) {
            return res.json({
                status: 403,
                msg: `You have to first get a friend-request from ${s_email}.`
            });
        }

        

        // created a prissma transaction that does -> move sender from pending to accepted, add receiver in sender's accepted.
        await prisma.$transaction(async (tx) => {
            await tx.sOCK_USERS.update({
            where: { id: receiver.id },
            data: {
                    pending: {
                        set: receiver.pending.filter(id => id !== sender.id),
                    },
                    accepted: {
                        push: sender.id,
                    }
                }
            });

            await tx.sOCK_USERS.update({
                where: { id: sender.id },
                data: {
                    accepted: {
                        push: receiver.id
                    }
                }
            });
        });

        return res.json({
            status: 200,
            msg: `You and ${sender.name} are now connected.`
        });
    } catch(err) {
        return res.json({
            status: 500,
            msg: 'Internal Server Error.'
        });
    }
});

export default router;