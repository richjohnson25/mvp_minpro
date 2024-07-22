import { prisma } from "@/connection";
import { NextFunction, Request, Response } from "express";

export const findAllTransactions = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const transactions = await prisma.transaction.findMany({
            include: {
                participants: true,
                events: true,
            }
        })

        res.status(200).send({
            error: false,
            message: 'Get Transactions Success!',
            data: transactions
        })
    } catch (error) {
        next(error)
    }
}