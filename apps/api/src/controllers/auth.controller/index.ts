import { prisma } from "@/connection";
import { createToken } from "@/helper/createToken";
import { comparePassword } from "@/helper/hashPassword";
import { NextFunction, Request, Response } from "express";

export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { username, password } = req.body;

        const findUser = await prisma.user.findFirst({
            where: {
                AND: [
                    {email: username}
                ]
            }
        });

        if (findUser === null) {
            throw { message: 'Username & Password do not Match!', status: 401 }
        }

        const isPasswordMatch = await comparePassword(password, findUser.password);

        if (isPasswordMatch === false) {
            throw { message: 'Password does not Match!', status: 401 }
        }

        const token = createToken({userId: findUser.uid, userRole: findUser.role})

        res.status(200).send({
            error: false,
            message: 'Login Success!',
            data: {
                token,
                first_name: findUser.first_name,
                last_name: findUser.last_name,
                email: findUser.email,
                role: findUser.role,
                referral_code: findUser.referral_code,
                points: findUser.points
            }
        })
    } catch (error) {
        next(error)
    }
}