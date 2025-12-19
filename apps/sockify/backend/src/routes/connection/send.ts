import express from 'express';
import zod from 'zod';
import { prisma } from '../../lib/prisma.js';

const router = express.Router();

const sendBody = zod.object({
    s_email: zod.email(),
    r_email: zod.email(),
});

router.post('/send', async (req, res) => {
    // parsing the obj here haha.
    const parsed = sendBody.safeParse(req.body);
    if(!parsed.success) {
        const formattedErrors = parsed.error.issues.map(err => ({ path: err.path[0], msg: err.message }));
        return res.json({
            status: 403,
            msg: 'Invalid Connection-Request Object.',
            error: formattedErrors
        });
    }
    // this isnt written by gpt, your loss i'm very good at this haha.
    const { s_email, r_email } = req.body;

    // finding if receiver actually exists haha.
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

    // ts made me do this haha - what if sender isn't present.
    const sender = await prisma.sOCK_USERS.findUnique({
        where: { email: s_email },
        select: { id: true }
    });
    
    if(!sender) {
        return res.json({
            status: 404,
            msg: `Sender with email ${s_email} is not found.`
        });
    }

    // checking if the sender has already sent a request.
    const check = await prisma.sOCK_USERS.findFirst({
        where: { id: receiver.id, pending: { has: sender.id } }
    })
    if(check) {
        return res.json({
            status: 403,
            msg: 'You have already sent friend request.'
        })
    }

    if (receiver.accepted.includes(sender.id)) {
        return res.json({
            status: 403,
            msg: 'You are already connected with ' + receiver.name
        });
    }

    // adding the user to the pending-connects array.
    await prisma.sOCK_USERS.update({
        where: {id: receiver.id },
        data: {
            pending: {
                push: sender.id
            }
        }
    });

    return res.json({
        status: 201,
        msg: 'Request sent to ' + receiver.name
    });
});

export default router;