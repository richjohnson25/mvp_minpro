import { prisma } from "@/connection";
import { IUser } from "./types";

export const keepAuthenticationUserService = async({ uid }: Pick<IUser, 'uid'>) => {
    return await prisma.user.findFirst({
        where: {
            uid
        }
    });
}