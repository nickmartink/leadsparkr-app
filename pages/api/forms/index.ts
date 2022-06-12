import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../db/prisma';

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
    const forms = await prisma.form.findMany({
        select: {
            name: true,
            id: true,
            // createdAt: true,
            // updatedAt: true
        }
    });
    res.status(200).json(
        forms
    );
};

export default handler;
