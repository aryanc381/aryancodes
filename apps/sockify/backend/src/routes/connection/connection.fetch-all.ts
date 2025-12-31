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
    if (!parsed.success) {
      return res.status(400).json({
        status: 400,
        msg: 'Invalid Fetching Request',
        err: parsed.error.issues.map(err => ({
          path: err.path[0],
          msg: err.message
        }))
      });
    }

    const { input } = parsed.data;

    const existing_users = await prisma.sOCK_USERS.findMany({
      where: {
        OR: [
          {
            email: {
              contains: input,
              mode: "insensitive"
            }
          },
          {
            name: {
              contains: input,
              mode: "insensitive"
            }
          }
        ]
      },
      select: {
        name: true,
        email: true
      },
      take: 10
    });

    if (existing_users.length === 0) {
      return res.status(404).json({
        status: 404,
        msg: `Users not found with key: ${input}`
      });
    }

    return res.json({
      status: 200,
      msg: 'Users found in Sockify-DB.',
      existing_users
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({
      status: 500,
      msg: 'Internal Server Error.'
    });
  }
});


export default router;