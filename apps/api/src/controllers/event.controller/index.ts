import { prisma } from "@/connection";
import { NextFunction, Request, Response } from "express";

export const findAllEvents = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const events = await prisma.event.findMany({
            include: {
                event_categories: true
            }
        })

        res.status(200).send({
            error: false,
            message: 'Get Events Success!',
            data: events
        })
    } catch (error) {
        next(error)
    }
}

export const findEventsByOrganizerUid = async(req: Request, res: Response, next: NextFunction) => {
    const { organizer_uid } = req.params

    try {
        const eventsByOrganizer = await prisma.event.findMany({
            where: {
                organizer_uid: organizer_uid
            },
            include: {
                event_categories: true
            }
        })

        res.status(200).send({
            error: false,
            message: 'Get Events By Organizer Success!',
            data: eventsByOrganizer
        })
    } catch (error) {
        next(error)
    }
}

/*export const findEventsByYear = async(req: Request, res: Response, next: NextFunction) => {
    const { year } = req.params;

    try {
        const eventsByYear = await prisma.event.findMany({
            where: {
                AND: [
                    { createdAt: { gte: new Date(`${year}-01-01`) } },
                    { createdAt: { lte: new Date(`${Number(year) + 1}-01-01`) } }
                ]
            }
        })
        
        res.status(200).send({
            error: false,
            message: 'Get Events By Year Success!',
            data: eventsByYear
        })
    } catch (error) {
        next(error)
    }
}

export const findEventsByMonth = async(req: Request, res: Response, next: NextFunction) => {
    const { year, month } = req.params;

    try {
        const eventsByMonth = await prisma.event.findMany({
            where: {
                AND: [
                    { createdAt: { gte: new Date(`${year}-${month}-01`) } },
                    { createdAt: { lte: new Date(`${year}-${Number(month) + 1}-01`) } }
                ]
            }
        })
        
        res.status(200).send({
            error: false,
            message: 'Get Events By Month Success!',
            data: eventsByMonth
        })
    } catch (error) {
        next(error)
    }
}*/