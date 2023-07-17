import { prisma } from "../services/prima";
import { User } from "../entities/user";
import { number } from "zod";

export const createUser = async (data: User) => {
    const user = await prisma.user.create({
        data,
        select: {
            id: true
        }
    });
    return user;
}
// Rota de poginação 
export const getAll = async (
    masterId: number | null,
    skip: number,
    take: number,
    search: string | null) => {
    if (!search) {

        const [users, total] = await prisma.$transaction([
            prisma.user.findMany({
                where: {
                    deleted: false,
                    masterId,
                },
                select: {
                    id: true,
                    name: true,
                    email:true,
                    password: false,
                    phone: true,
                    address: true,
                    number: true,
                    cep: true,
                    city: true,
                    masterId: true
                },
                skip,
                take
            }),
            prisma.user.count({
                where: {
                    masterId,
                    deleted: false,
                }
            })

        ])
        const totalPage = Math.ceil(total / take);

        return {total, totalPage, users}

    } else {
        const [users, total] = await prisma.$transaction([
            prisma.user.findMany({
                where: {
                    deleted: false,
                    masterId,
                    name: {
                        search,
                    }
                },
                select: {
                    id: true,
                    name: true,
                    email:true,
                    password: false,
                    phone: true,
                    address: true,
                    number: true,
                    cep: true,
                    city: true,
                    masterId: true
                },
                skip,
                take
            }),
            prisma.user.count({
                where: {
                    masterId,
                    deleted: false,
                }
            })
    
        ])
        const totalPage = Math.ceil(total / take);
    
        return { total, totalPage, users }
    }
}



export const getById = async (id: number) => {
    const user = await prisma.user.findUnique({
        where: {
            id
        },
        select: {
            id: true,
            name: true,
            password: false,
            phone: true,
            address: true,
            number: true,
            cep: true,
            city: true,
            masterId: true
        }
    })
    return user
}

export const updateUser = async (id: number, data: any) => {
    const user = await prisma.user.update({
        where: {
            id
        },
        select: {
            id: true,
            name: true,
            password: false,
            phone: true,
            address: true,
            number: true,
            cep: true,
            city: true,
            masterId: true
        },
        data,
    })
    return user
}

export const deletedUser = async (id: number) => {
    await prisma.user.update({
        where: {
            id
        },
        data: {
            deleted: true
        }
    })

} 