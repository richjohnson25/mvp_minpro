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
    /*{
        name: 'Alan Walker - Walkerworld: Asia Tour Pt. I in Jakarta',
        location: 'Jakarta',
        description: `Watch Alan Walker's live performance in Walkerworld: Asia Tour Pt. I in Jakarta`,
        organizer_uid: 'clymnrrcw0000y3y70fjztdg6',
        category_id: 1
    },
    {
        name: 'aespa Live - SYNK: Parallel Line in Jakarta',
        location: 'Jakarta',
        description: `Watch aespa's live performance at SYNK: Parallel Line in Jakarta, taking place at Beach City International Stadium`,
        organizer_uid: 'clymnrrcz0003y3y7tp8dqi8c',
        category_id: 1
    },
    {
        name: 'Marketeers Hangout 2024 - Marketing vs. Everybody',
        location: 'Jakarta',
        description: 'Marketeers Hangout is the place where the marketers can share new inspirations, creativity, and networks.',
        organizer_uid: 'clymnrrcz0003y3y7tp8dqi8c',
        category_id: 3
    },
    {
        name: 'Building Unbreakable Self-Esteem with Solomon Asine',
        location: 'Online',
        description: `Join us for a virtual event where we'll discuss practical tips and strategies to boost your self-esteem in today's challenging world.`,
        organizer_uid: 'clymnrrcz0003y3y7tp8dqi8c',
        category_id: 3
    },
    {
        name: 'WCG 2024 Festival',
        location: 'Tangerang',
        description: 'Welcome to  WCG (World Cyber Games) Festival, where the gamers and the content creators meet in one festival',
        organizer_uid: 'clymnrrcz0003y3y7tp8dqi8c',
        category_id: 5
    },
    {
        name: 'WONDERLAB',
        location: 'Jakarta',
        description: 'Get ready to dive into the future! WONDERLAB is multi-sensory exhibition experience featuring the latest technological trends',
        organizer_uid: 'clymnrrcw0000y3y70fjztdg6',
        category_id: 4
    },
    {
        name: 'Petronas Grand Prix of Malaysia 2024',
        location: 'Sepang',
        description: 'Feel the high speed, heart-pumping action at the Malaysia Superbike Grand Prix at the iconic PETRONAS Sepang International Circuit.',
        organizer_uid: 'clymnrrcz0003y3y7tp8dqi8c',
        category_id: 6
    },
    {
        name: 'Formula 1 Singapore Airlines Singapore Grand Prix 2024',
        location: 'Singapore',
        description: 'Get ready for the high adrenaline race at F1 Singapore Airlanes Singapore Grand Prix, featuring your favorite superstar racers.',
        organizer_uid: 'clymnrrcz0003y3y7tp8dqi8c',
        category_id: 6
    },
    {
        name: 'Nusa Penida Island 3-Day Tour',
        location: 'Bali',
        description: `Enjoy the 3-day tour to Nusa Penida, exploring the iconic locations of the island such as Kelingking Beach, Atuh Beach, Angel's Billabong, and many more.`,
        organizer_uid: 'clymnrrcw0000y3y70fjztdg6',
        category_id: 2
    },
    {
        name: 'Halong Bay Day Tour',
        location: 'Hanoi',
        description: 'Enjoy the day trip to Halong Bay, Vietnam, a cultural symbol about the dragon which brought the mystical fairy tales.',
        organizer_uid: 'clymnrrcw0000y3y70fjztdg6',
        category_id: 2
    },
    {
        name: 'Jazz Gunung Bromo 2024',
        location: 'Malang',
        description: 'Enjoy the live performances of various jazz musicians around the world, surrounded by the lush mountainous scenery of Bromo Mountains.',
        organizer_uid: 'clymnrrcz0003y3y7tp8dqi8c',
        category_id: 5
    },
    {
        name: 'GAIKINDO Indonesia International Auto Show (GIIAS) 2024',
        location: 'Tangerang',
        description: 'The biggest automotive exhibition returns this year with over 55 automobile brands of passenger cars, commercial vehicles, and motorcycles.',
        organizer_uid: 'clymnrrcw0000y3y70fjztdg6',
        category_id: 4
    },*/
    {
        name: 'Open Trip Pulau Pari',
        location: 'Jakarta',
        description: `Enjoy the 2-day trip to Pulau Pari, featuring underwater activities such as snorkeling and seeing a sunset at one of the island's best spots.`,
        organizer_uid: 'clymnrrcw0000y3y70fjztdg6',
        category_id: 2
    },
    {
        name: '1-Day Semarang Tour',
        location: 'Semarang',
        description: `Embark on the one-day trip to Semarang, visiting the city's iconic locations such as Lawang Sewu, Sam Poo Kong, and the Old Town.`,
        organizer_uid: 'clymnrrcw0000y3y70fjztdg6',
        category_id: 2
    },
    {
        name: 'Penang Grand Island Full-Day Tour',
        location: 'Penang',
        description: `Enjoy the full-day trip to Penang Island, visiting several locations such as Penang Batik Factory and Kek Lok Si Temple.`,
        organizer_uid: 'clymnrrcw0000y3y70fjztdg6',
        category_id: 2
    }
]

const categories = [
    {
        name: 'Concert'
    },
    {
        name: 'Seminar'
    },
    {
        name: 'Festival'
    },
    {
        name: 'Exhibition'
    },
    {
        name: 'Sports'
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
        event_id: 2
    },
    {
        start_time: new Date("2024-08-24 19:00:00"),
        end_time: new Date("2024-08-24 22:00:00"),
        available_seats: 45,
        event_id: 1
    },
    {
        start_time: new Date("2024-08-24 19:00:00"),
        end_time: new Date("2024-08-24 22:00:00"),
        available_seats: 25,
        event_id: 8
    },
    {
        start_time: new Date("2024-09-12 10:00:00"),
        end_time: new Date("2024-09-12 17:00:00"),
        available_seats: 75,
        event_id: 4
    },
    {
        start_time: new Date("2024-08-01 14:00:00"),
        end_time: new Date("2024-08-01 15:00:00"),
        available_seats: 40,
        event_id: 5
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
        start_time: new Date("2024-09-20 19:00:00"),
        end_time: new Date("2024-09-20 22:00:00"),
        available_seats: 80,
        event_id: 3
    },
    {
        start_time: new Date("2024-09-21 19:00:00"),
        end_time: new Date("2024-09-21 22:00:00"),
        available_seats: 150,
        event_id: 3
    },
    {
        start_time: new Date("2024-07-20 09:00:00"),
        end_time: new Date("2024-07-22 15:00:00"),
        available_seats: 10,
        event_id: 9
    },
    {
        start_time: new Date("2024-07-23 08:30:00"),
        end_time: new Date("2024-07-23 21:00:00"),
        available_seats: 25,
        event_id: 10
    },
    {
        start_time: new Date("2024-07-19 15:00:00"),
        end_time: new Date("2024-07-19 22:00:00"),
        available_seats: 25,
        event_id: 11
    },
    {
        start_time: new Date("2024-07-19 15:00:00"),
        end_time: new Date("2024-07-19 22:00:00"),
        available_seats: 45,
        event_id: 11
    },
    {
        start_time: new Date("2024-07-19 11:00:00"),
        end_time: new Date("2024-07-19 21:00:00"),
        available_seats: 80,
        event_id: 12
    },
    {
        start_time: new Date("2024-07-27 08:00:00"),
        end_time: new Date("2024-07-28 18:00:00"),
        available_seats: 40,
        event_id: 13
    },
    {
        start_time: new Date("2024-08-03 08:00:00"),
        end_time: new Date("2024-08-04 18:00:00"),
        available_seats: 90,
        event_id: 13
    },
    {
        start_time: new Date("2024-08-19 07:30:00"),
        end_time: new Date("2024-08-19 19:30:00"),
        available_seats: 30,
        event_id: 14
    },
    {
        start_time: new Date("2024-09-25 08:30:00"),
        end_time: new Date("2024-09-25 16:00:00"),
        available_seats: 20,
        event_id: 15
    }
]

const ticket_types = [
    {
        type_name: 'Regular',
        price: 1450000,
        event_id: 1
    },
    {
        type_name: 'Regular',
        price: 1200000,
        event_id: 2
    },
    {
        type_name: 'Regular',
        price: 1660000,
        event_id: 3
    },
    {
        type_name: 'Regular',
        price: 500000,
        event_id: 4
    },
    {
        type_name: 'VIP',
        price: 1150000,
        event_id: 4
    },
    {
        type_name: 'Regular',
        price: 100000,
        event_id: 5
    },
    {
        type_name: 'General Admission',
        price: 77000,
        event_id: 6
    },
    {
        type_name: 'VIP',
        price: 3300000,
        event_id: 6
    },
    {
        type_name: 'Tribune',
        price: 550000,
        event_id: 7
    },
    {
        type_name: 'VIP',
        price: 1200000,
        event_id: 7
    },
    {
        type_name: 'Full Package',
        price: 3150000,
        event_id: 8
    },
    {
        type_name: 'Full Package',
        price: 630000,
        event_id: 9
    },
    {
        type_name: 'General Admission',
        price: 100000,
        event_id: 10
    },
    {
        type_name: 'VIP',
        price: 250000,
        event_id: 10
    },
    {
        type_name: 'Regular',
        price: 85000,
        event_id: 11
    },
    {
        type_name: 'Regular',
        price: 0,
        event_id: 12
    },
    {
        type_name: 'Start Angke',
        price: 375000,
        event_id: 13
    },
    {
        type_name: 'Start Ancol',
        price: 770000,
        event_id: 13
    },
    {
        type_name: '5 pax',
        price: 410000,
        event_id: 14
    },
    {
        type_name: '4 pax',
        price: 470000,
        event_id: 14
    },
    {
        type_name: '3 pax',
        price: 575000,
        event_id: 14
    },
    {
        type_name: '2 pax',
        price: 775000,
        event_id: 14
    },
    {
        type_name: 'Regular',
        price: 1370000,
        event_id: 15
    }
]

const transactions = [
    {
        amount_paid: 2400000,
        number_of_tickets: 2,
        status: 'Completed',
        event_id: 2,
        participant_uid: 'clymnrrcy0001y3y7sjsa88f7',
        schedule_id: 2,
        ticket_type_id: 2
    },
    {
        amount_paid: 231000,
        number_of_tickets: 3,
        status: 'Completed',
        event_id: 6,
        participant_uid: 'clymnrrcz0002y3y7i5ko9gec',
        schedule_id: 5,
        ticket_type_id: 10
    },
    {
        amount_paid: 154000,
        number_of_tickets: 2,
        status: 'Cancelled',
        event_id: 6,
        participant_uid: 'clymnrref0005y3y7wfx85ecl',
        schedule_id: 5,
        ticket_type_id: 10
    },
    {
        amount_paid: 1260000,
        number_of_tickets: 2,
        status: 'Completed',
        event_id: 9,
        participant_uid: 'clymnrref0005y3y7wfx85ecl',
        schedule_id: 13,
        ticket_type_id: 6
    },
    {
        amount_paid: 200000,
        number_of_tickets: 2,
        status: 'Pending',
        event_id: 5,
        participant_uid: 'clymnrrcy0001y3y7sjsa88f7',
        schedule_id: 19,
        ticket_type_id: 4
    },
    {
        amount_paid: 3150000,
        number_of_tickets: 1,
        status: 'Completed',
        event_id: 8,
        participant_uid: 'clymnrree0004y3y7sn28fn33',
        schedule_id: 13,
        ticket_type_id: 1
    },
]

async function main(){
    /*users.forEach(async(item) => {
        await prisma.user.create({
            data: {
                ...item,
                password: await hashPassword(item.password)
            }
        })
    })

    categories.forEach(async(item) => {
        await prisma.category.create({
            data: item
        })
    })

    events.forEach(async(item) => {
        await prisma.event.create({
            data: item
        })
    })

    schedules.forEach(async(item) => {
        await prisma.schedule.create({
            data: item
        })
    })

    ticket_types.forEach(async(item) => {
        await prisma.ticketType.create({
            data: item
        })
    })*/

    transactions.forEach(async(item) => {
        await prisma.transaction.create({
            data: item
        })
    })
}

main().catch((error) => {
    console.log(error)
}).finally(async() => {
    await prisma.$disconnect()
})