import { prisma } from "@/connection";
import { IUser } from "./types";
import generateReferralCode from "@/helper/generateReferralCode";
import { hashPassword } from "@/helper/hashPassword";

export const registerUserService = async({ first_name, last_name, username, phone_number, role, email, password }: Pick<IUser, 'first_name' | 'last_name' | 'username' | 'phone_number' | 'role' | 'email' | 'password'>) => {
    const findUser = await prisma.user.findFirst({
        where: {
            email
        }
    })

    if(findUser){
        throw { message: 'Email Already Registered!', status: 400 }
    }

    let referral_code = generateReferralCode();

    let existingUserWithCode = await prisma.user.findFirst({
        where: {
            referral_code
        }
    })

    while(existingUserWithCode) {
        referral_code = generateReferralCode();
        existingUserWithCode = await prisma.user.findFirst({
            where: {
                referral_code
            }
        })
    }

    const createdUser = await prisma.user.create({
        data:{
            first_name,
            last_name,
            username,
            phone_number,
            role,
            email,
            password: await hashPassword(password),
            referral_code,
            points: 0
        }
    })
}