import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    await prisma.user.upsert({
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
    });
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
