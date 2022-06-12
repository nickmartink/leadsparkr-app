import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    const alice = await prisma.user.upsert({
        where: { email: 'nick@teansta.com' },
        update: {},
        create: {
            email: 'nick@teansta.com',
            first_name: 'Nick',
            last_name: 'Nick',
            role: 'USER',
            avatar: 'https://i.pravatar.cc/200',
            forms: {
                create: [
                    {
                        name: 'First Form',
                        botDetection: false,
                        notificationPreference: 'ALL',
                        endpoint: 'wd32dfx'
                    }
                ]
            }
        },
    })

    // const bob = await prisma.user.upsert({
    //     where: { email: 'bob@prisma.io' },
    //     update: {},
    //     create: {
    //         email: 'bob@prisma.io',
    //         name: 'Bob',
    //         posts: {
    //             create: [
    //                 {
    //                     title: 'Follow Prisma on Twitter',
    //                     content: 'https://twitter.com/prisma',
    //                     published: true,
    //                 },
    //                 {
    //                     title: 'Follow Nexus on Twitter',
    //                     content: 'https://twitter.com/nexusgql',
    //                     published: true,
    //                 },
    //             ],
    //         },
    //     },
    // })
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
