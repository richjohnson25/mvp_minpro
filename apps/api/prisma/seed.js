const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const bcrypt = require('bcrypt')
const hashPassword = async(password) => {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds)
}

const users = [
    {
        first_name: 'Julius',
        last_name: 'Unsong',
        username: 'julius.unsong',
        phone_number: '0819-0645-6111',
        role: 'ORGANIZER',
        email: 'julius.unsong@gmail.com',
        password: 'julius93',
        referral_code: 'JL19US93',
        points: 0,
    },
    {
        first_name: 'Indriyanus',
        last_name: 'Manalor',
        username: 'indriyanus',
        phone_number: '0852-1133-6653',
        role: 'PARTICIPANT',
        email: 'indriyanus@gmail.com',
        password: 'indri521',
        referral_code: 'ID52MN53',
        points: 0,
    },
    {
        first_name: 'Stanislav',
        last_name: 'Kopach',
        username: 'redduck434',
        phone_number: '096-202-3773',
        role: 'ORGANIZER',
        email: 'stanislav.kopach@gmail.com',
        password: 'nutter34',
        referral_code: 'RD34KP61',
        points: 0,
    },
    {
        first_name: 'Maria',
        last_name: 'Serbediya',
        username: 'purplepeacock542',
        phone_number: '033-4616-340',
        role: 'PARTICIPANT',
        email: 'maria.serbedzija@gmail.com',
        password: 'brady46',
        referral_code: 'MR03MT46',
        points: 0,
    },
    {
        first_name: 'Ashton',
        last_name: 'Davies',
        username: 'angrygorilla341',
        phone_number: '974-824-7128',
        role: 'PARTICIPANT',
        email: 'ashton.davies@gmail.com',
        password: 'moscow341',
        referral_code: 'AH97DV41',
        points: 0,
    },
    {
        first_name: 'Marta',
        last_name: 'Raspopovich',
        username: 'sadmeercat799',
        phone_number: '022-4493-725',
        role: 'PARTICIPANT',
        email: 'marta.raspopovich@gmail.com',
        password: 'cable79',
        referral_code: 'MT71RP25',
        points: 0,
    }
]

const events = [
    {
        name: 'Alan Walker - Walkerworld: Asia Tour Pt. I in Jakarta',
        location: 'Beach City Jakarta',
        description: 'Saksikan penampilan langsung dari Alan Walker bersama bintang tamu Vikkstar, Putri Ariani, dan Robin Packalen, serta penampilan spesial dari guru musik Tri Adinata di Walkerworld Asia Tour in Jakarta.',
        type: 'Paid',
        category_id: 1
    },
    {
        name: 'aespa Live - SYNK: Parallel Line in Jakarta',
        location: 'Beach City Jakarta',
        description: 'Saksikan penampilan langsung dari aespa di SYNK: Parallel Line Live Tour in Jakarta',
        type: 'Paid',
        category_id: 1
    },
    {
        name: 'Marketeers Hangout 2024 - Marketing vs. Everybody',
        location: 'The Ballroom at Djakarta Theater',
        description: 'Marketeers Hangout merupakan tempat kumpulnya orang-orang marketing yang kreatif. Di sini, para marketing antusias bisa berbagi inspirasi, solusi kreatif, dan jejaring baru. Seminar tahun ini mengambil tema Marketing vs. Everybody.',
        type: 'Paid',
        category_id: 2
    },
    {
        name: 'Seminar Rahasia Pipa Duit 24/7',
        date: new Date("2024-09-05 10:00:00"),
        time: new Date("2024-09-05 10:00:00"),
        location: 'The Ballroom at Djakarta Theater',
        description: 'Marketeers Hangout merupakan tempat kumpulnya orang-orang marketing yang kreatif. Di sini, para marketing antusias bisa berbagi inspirasi, solusi kreatif, dan jejaring baru. Seminar tahun ini mengambil tema Marketing vs. Everybody.',
        price: 1450000,
        type: 'Paid',
        ticket_types: 'Regular',
        category_id: 2
    },
    {
        name: 'Ultra Beach Bali 2024',
        date: new Date("2024-06-07 15:00:00"),
        time: new Date("2024-06-07 15:00:00"),
        location: 'Canggu, Bali',
        description: 'Outdoor EDM festival which is part of Ultra Music Festival global expansion in Bali',
        price: 3500000,
        type: 'Paid',
        ticket_types: 'Regular',
        category_id: 3
    },
    {
        name: 'WCG 2024 Festival',
        location: 'ICE BSD Hall 1, Tangerang Selatan, Indonesia',
        description: 'Selamat datang di WCG (World Cyber Games), dimana para gamer dan kreator dari seluruh dunia disatukan dalam satu tempat festival',
        type: 'Paid',
        ticket_types: 'Regular',
        category_id: 3
    },
    {
        name: 'Petronas Grand Prix of Malaysia 2024',
        location: 'Sepang International Circuit',
        description: 'Rasakan aksi memacu jantung di Malaysia Superbike Grand Prix di sirkuit ikonik PETRONAS Sepang International Circuit.',
        type: 'Paid',
        category_id: 5
    },
    {
        name: 'Indonesia International Motor Show 2024',
        date: new Date("2024-06-23 17:00:00"),
        time: new Date("2024-06-23 17:00:00"),
        location: 'Jakarta Convention Center',
        description: 'Annual Indonesia International Motor Show',
        price: 0,
        type: 'Free',
        ticket_types: 'Regular',
        category_id: 4
    },
    {
        name: 'Nusa Penida Island by Penida Blue Paradise',
        location: 'Nusa Penida, Bali, Indonesia',
        description: 'Nikmati tur 2 hari yang menakjubkan ke Nusa Penida. Kunjungi berbagai lokasi-lokasi ikonik di pulau ini, mulai dari Pantai Kelingking, Pantai Atuh, Angel’s Billabong, dan lainnya.',
        type: 'Paid',
        ticket_types: 'Regular',
        category_id: 6
    },
    {
        name: 'Tur Bromo Golden Sunrise',
        location: 'Bromo-Tengger-Semeru National Park, Jawa Tengah, Indonesia',
        description: 'Nikmati perjalanan ke Gunung Bromo yang akan memberikanmu sensasi panorama matahari terbit yang cantik.',
        type: 'Paid',
        ticket_types: 'Regular',
        category_id: 6
    },
    {
        name: 'Halong Bay Day Tour',
        location: 'Halong Bay, Hanoi, Vietnam',
        description: 'Perjalanan satu hari ke Halong Bay, salah satu pemandangan terindah di Vietnam yang diimpikan oleh banyak orang untuk dikunjungi sekali seumur hidup, sebuah simbol budaya tentang naga yang membawa dongeng mistis.',
        type: 'Paid',
        ticket_types: 'Regular',
        category_id: 6
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
    {
        name: 'Tour & Travel'
    }
]

const schedules = [
    {
        start_time: new Date("2024-06-08 18:00:00"),
        end_time: new Date("2024-06-08 22:00:00"),
        available_seats: 30,
        event_id: 1
    },
    {
        start_time: new Date("2024-08-24 19:00:00"),
        end_time: new Date("2024-08-24 22:00:00"),
        available_seats: 45,
        event_id: 2
    },
    {
        start_time: new Date("2024-09-12 10:00:00"),
        end_time: new Date("2024-09-12 17:00:00"),
        available_seats: 75,
        event_id: 3
    },
    {
        start_time: new Date("2024-08-31 11:00:00"),
        end_time: new Date("2024-08-31 21:00:00"),
        available_seats: 100,
        event_id: 6
    },
    {
        start_time: new Date("2024-09-01 11:00:00"),
        end_time: new Date("2024-09-01 21:00:00"),
        available_seats: 100,
        event_id: 6
    },
    {
        start_time: new Date("2024-11-01 18:00:00"),
        end_time: new Date("2024-11-01 22:00:00"),
        available_seats: 50,
        event_id: 7
    },
    {
        start_time: new Date("2024-11-02 18:00:00"),
        end_time: new Date("2024-11-02 22:00:00"),
        available_seats: 75,
        event_id: 7
    },
    {
        start_time: new Date("2024-11-03 18:00:00"),
        end_time: new Date("2024-11-03 22:00:00"),
        available_seats: 100,
        event_id: 7
    },
    {
        start_time: new Date("2024-07-20 00:00:00"),
        end_time: new Date("2024-07-20 12:30:00"),
        available_seats: 10,
        event_id: 9
    },
    {
        start_time: new Date("2024-07-23 08:30:00"),
        end_time: new Date("2024-07-23 21:00:00"),
        available_seats: 25,
        event_id: 10
    },
]

const ticket_types = [
    {
        class_name: 'Regular',
        price: 1200000,
        event_id: 1
    },
    {
        class_name: 'Regular',
        price: 1450000,
        event_id: 2
    },
    {
        class_name: 'Regular',
        price: 500000,
        event_id: 3
    },
    {
        class_name: 'VIP',
        price: 1150000,
        event_id: 3
    },
    {
        class_name: 'Regular',
        price: 100000,
        event_id: 5
    },
    {
        class_name: 'General Admission',
        price: 143000,
        event_id: 6
    },
    {
        class_name: 'VIP',
        price: 3300000,
        event_id: 6
    },
    {
        class_name: 'Regular',
        price: 350000,
        event_id: 8
    },
    {
        class_name: 'Regular',
        price: 630000,
        event_id: 9
    },
]

async function main(){
    users.forEach(async(item) => {
        await prisma.user.create({
            data: {
                ...item,
                password: await hashPassword(item.password)
            }
        })
    })

    /*categories.forEach(async(item) => {
        await prisma.category.create({
            data: item
        })
    })*/
}

main().catch((error) => {
    console.log(error)
}).finally(async() => {
    await prisma.$disconnect()
})