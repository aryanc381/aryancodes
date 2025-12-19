import express from 'express';
import zod from 'zod';
import { prisma } from '../../lib/prisma.js';

const router = express.Router();

const pendingBody = zod.object({
    email: zod.email()
});

interface IUser {
    name: string,
    email: string,
}

router.get('/retrieve', async(req, res) => {

        const parsed = pendingBody.safeParse(req.query);
        if(!parsed.success) {
            const formattedErrors = parsed.error.issues.map(err => ({ path: err.path[0], msg: err.message }));
            return res.json({
                status: 403,
                msg: 'Invalid Connection-Request Object.',
                error: formattedErrors
            });
        }

        const { email } = parsed.data;
        await prisma.$transaction(async (tx) => {
            const existing_user = await tx.sOCK_USERS.findUnique({
                where: { email: email },
                select: { pending: true, accepted: true, name: true }
            });
            if(!existing_user) {
                return res.json({
                    status: 403,
                    msg: 'User-Email not found.'
                });
            }

            const existing = existing_user?.pending;
            const accepted = existing_user?.accepted;
            let pending_users: IUser[] = [];
            let accpeted_users: IUser[] =[];

            for(let i = 0; i < existing.length!; i++) {
                const pending_user = await prisma.sOCK_USERS.findUnique({
                    where: { id: existing[i] as number },
                    select: { name: true, email: true }
                });
                pending_users.push(pending_user!);
            }

            for(let i = 0; i < accepted.length!; i++) {
                const accepted_user = await prisma.sOCK_USERS.findUnique({
                    where: { id: accepted[i] as number},
                    select: { name: true, email: true }
                });
                accpeted_users.push(accepted_user!);
            }

            return res.json({
                status: 200,
                msg: "User-DB found for " + existing_user.name,
                pending_users: pending_users,
                accepeted_users: accpeted_users
            });

        });
  
    // } catch(err) {
    //     return res.json({
    //         status: 500,
    //         msg: 'Internal Server Error.'
    //     });
    //}
});

export default router;