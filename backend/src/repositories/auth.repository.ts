import { prisma } from "../services/prima";

export const getUser = async (email: string) => {
    const user =  await prisma.user.findFirst({
        where: {
            email
        }
    })
    return user;
}