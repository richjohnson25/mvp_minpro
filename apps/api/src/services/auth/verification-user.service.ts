import { prisma } from "@/connection";
import { IUser } from "./types";
import { hashPassword } from "@/helper/hashPassword";

export const verificationUserService = async({ uid, password }: Pick<IUser, 'uid' | 'password'>) => {
    const findUser = await prisma.user.findUnique({
        where: {
            uid
        }
    })

    if(!findUser){
        throw { message: 'User Not Found!', status: 404 }
    }

    await prisma.user.update({
        where: {
            uid
        },
        data: {
            password: await hashPassword(password),
            isVerified: true
        }
    })
}