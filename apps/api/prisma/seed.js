const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const users = [
    {
        first_name: 'Julius',
        last_name: 'Unsong',
        username: 'julius.unsong',
        address: 'Jl. Nusa Luoka V',
        phone_number: '0819-0645-6111',
        role: 'ORGANIZER',
        email: 'julius.unsong@gmail.com',
        password: 'julius93',
        referral_code: 'JUL19US93',
        points: 0,
        registration_date: new Date('2011-08-14 14:06:21')
    },
    {
        first_name: 'Indriyanus',
        last_name: 'Manalor',
        username: 'indriyanus',
        address: 'Graha Permata Poris',
        phone_number: '0852-1133-6653',
        role: 'PARTICIPANT',
        email: 'indriyanus@gmail.com',
        password: 'indri521',
        referral_code: 'IND52M53',
        points: 0,
        registration_date: new Date('2024-04-29 09:27:00')
    },
    {
        first_name: 'Stanislav',
        last_name: 'Kopach',
        username: 'redduck434',
        address: '1061 Keramichniy Provulok',
        phone_number: '096-202-3773',
        role: 'ORGANIZER',
        email: 'stanislav.kopach@gmail.com',
        password: 'nutter34',
        referral_code: 'RD434KP61',
        points: 0,
        registration_date: new Date('2013-10-06 20:32:53')
    },
    {
        first_name: 'Maria',
        last_name: 'Serbediya',
        username: 'purplepeacock542',
        address: '9946 Milana Tucakovica',
        phone_number: '033-4616-340',
        role: 'PARTICIPANT',
        email: 'maria.serbedzija@gmail.com',
        password: 'brady46',
        referral_code: 'MAR03MT46',
        points: 0,
        registration_date: new Date('2008-01-10 19:38:26')
    },
    {
        first_name: 'Ashton',
        last_name: 'Davies',
        username: 'angrygorilla341',
        address: '6620 Marshland Road',
        phone_number: '974-824-7128',
        role: 'PARTICIPANT',
        email: 'ashton.davies@gmail.com',
        password: 'moscow341',
        referral_code: 'ASH97DV41',
        points: 0,
        registration_date: new Date('2010-01-23 15:06:16')
    },
    {
        first_name: 'Marta',
        last_name: 'Raspopovich',
        username: 'sadmeercat799',
        address: '7107 Starih Ratnika',
        phone_number: '022-4493-725',
        role: 'PARTICIPANT',
        email: 'marta.raspopovich@gmail.com',
        password: 'cable79',
        referral_code: 'MT71RPV725',
        points: 0,
        registration_date: new Date('2003-12-26 19:13:38')
    }
]

const events = [
    {
        name: 'Alan Walker - Walkerworld: Asia Tour Pt. I in Jakarta',
        date: new Date("2024-08-24 18:00:00"),
        time: new Date("2024-08-24 18:00:00"),
        location: 'Beach City Jakarta',
        description: 'Alan Walker - Walkerworld concert in Jakarta, joined by special guests Vikkstar, Putri Ariani, Sofiloud, and Robin Packalen, as well as a surprise guest appearance by Tri Adinata and four high school students from Medan',
        available_seats: 70,
        price: 1450000,
        type: 'Paid',
        ticket_types: 'Regular',
        category_id: 1
    },
    {
        name: 'aespa Live - SYNK: Parallel Line in Jakarta',
        date: new Date("2024-08-24 18:00:00"),
        time: new Date("2024-08-24 18:00:00"),
        location: 'Beach City Jakarta',
        description: 'aespa - SYNK: Parallel Line Live Tour in Jakarta',
        available_seats: 90,
        price: 1450000,
        type: 'Paid',
        ticket_types: 'Regular',
        category_id: 1
    },
    {
        name: 'Marketeers Hangout 2024 - Marketing vs. Everybody',
        date: new Date("2024-09-05 10:00:00"),
        time: new Date("2024-09-05 10:00:00"),
        location: 'The Ballroom at Djakarta Theater',
        description: 'Marketeers Hangout merupakan tempat kumpulnya orang-orang marketing yang kreatif. Di sini, para marketing antusias bisa berbagi inspirasi, solusi kreatif, dan jejaring baru.',
        available_seats: 90,
        price: 1450000,
        type: 'Paid',
        ticket_types: 'Regular',
        category_id: 2
    },
    {
        name: 'Petronas Grand Prix of Malaysia 2024',
        date: new Date("2024-11-03 20:00:00"),
        time: new Date("2024-11-03 20:00:00"),
        location: 'Sepang International Circuit',
        description: '3-Day superbike grand prix in Malaysia sponsored by Petronas',
        available_seats: 50,
        price: 100000,
        type: 'Paid',
        ticket_types: 'Regular',
        category_id: 5
    },
    {
        name: 'Indonesia International Motor Show 2024',
        date: new Date("2024-06-23 17:00:00"),
        time: new Date("2024-06-23 17:00:00"),
        location: 'Jakarta Convention Center',
        description: 'Annual Indonesia International Motor Show',
        available_seats: 70,
        price: 0,
        type: 'Free',
        ticket_types: 'Regular',
        category_id: 4
    },
    {
        name: 'Ultra Beach Bali 2024',
        date: new Date("2024-06-07 15:00:00"),
        time: new Date("2024-06-07 15:00:00"),
        location: 'Canggu, Bali',
        description: 'Outdoor EDM festival which is part of Ultra Music Festival global expansion in Bali',
        available_seats: 70,
        price: 3500000,
        type: 'Paid',
        ticket_types: 'Regular',
        category_id: 3
    }
]

const categories = [
    {
        name: 'Konser'
    },
    {
        name: 'Seminar'
    },
    {
        name: 'Festival'
    },
    {
        name: 'Pameran'
    },
    {
        name: 'Olahraga'
    },
]

async function main(){
    users.forEach(async(item) => {
        await prisma.user.create({
            data: item
        })
    })

    categories.forEach(async(item) => {
        await prisma.category.create({
            data: item
        })
    })
}

main().catch((error) => {
    console.log(error)
}).finally(async() => {
    await prisma.$disconnect()
})