import { prisma } from "@/connection";
import { createToken } from "@/helper/createToken";
import generateReferralCode from "@/helper/generateReferralCode";
import { comparePassword, hashPassword } from "@/helper/hashPassword";
import { authenticationUserService } from "@/services/auth/authentication-user.service";
import { keepAuthenticationUserService } from "@/services/auth/keep-authentication-user.service";
import { registerUserService } from "@/services/auth/register-user-service";
import { NextFunction, Request, Response } from "express";

export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { username, password } = req.body;

        const findUser = await authenticationUserService({ email: username })

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

export const register = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { first_name, last_name, username, phone_number, role, email, password } = req.body;

        const createdUser = await registerUserService({ first_name, last_name, username, phone_number, role, email, password })

        res.status(201).send({
            error: false,
            message: "User Registration Success!",
            data: {createdUser}
        })
    } catch (error) {
        next(error)
    }
}

export const keepAuthenticationUser = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {userId} = req.body

        const findUser = await keepAuthenticationUserService({ uid: userId })

        if(findUser === null){
            throw { message: 'Unauthorized!', status: 401 }
        }

        res.status(200).send({
            error: false,
            message: 'Login Success!',
            data: {
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

/*export const verificationUser = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const { password, userId } = req.body

        const findUser = await verificationUserService({ uid: userId, password })

        res.status(201).send({
            error: false,
            message: 'Verification & Update Password Success',
            data: {}
        })
    } catch (error) {
        next(error)
    }
}*/