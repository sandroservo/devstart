import { Request, Response } from "express";
import { createUser, deletedUser, getAll, getById, updateUser } from "../repositories/user.repository";
import { userValidation } from "../validations/user.validation";
import bcrypt from 'bcrypt'
//import { number } from "zod";

//create user
export const create =  async(req: Request, res:Response) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10)
        const data = await userValidation.parse(req.body);
        const user = await createUser(data);
        return res.status(200).send(user)

    } catch (e) {
        return res.status(400).send(e)
    }
}

//lista todos  os  Usuários
export const get = async(req:any, res:Response) => {
    try {
        const masterId = Number(req.user?.masterId)
        const skip = Number(req.query?.skip) || 0
        const take = Number(req.query?.take) || 20
        const search = req.query?.search ? String(req.query.search) : null;
        const user = await getAll(masterId, skip, take, search);
        return res.status(200).send(user);
    } catch (e) {
        return res.status(400).send(e)
    }
}

//listar user por ID
export const getId =  async(req: Request, res: Response) => {
    try {
        
        const user = await getById(Number(req.params.id));
        return res.status(200).send(user);
    } catch (e) {
        return res.status(400).send(e)
    }
}

export const update =  async(req: Request, res:Response) => {
    try {
        const user = await updateUser(Number(req.params.id), req.body);
        return res.status(200).send(user)
    } catch (e) {
        console.log(e)
        return res.status(400).send(e)
    }
}

export const remove =  async(req: Request, res:Response) => {
    try {
        await deletedUser(Number(req.params.id))
        return res.status(204).send()
    } catch (e) {
        return res.status(400).send(e)
    }
}