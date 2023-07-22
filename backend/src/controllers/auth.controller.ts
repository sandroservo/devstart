import { authValidation, tokenValidation } from '../validations/auth.validation'
import { getUser } from '../repositories/auth.repository'
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { updateUser } from '../repositories/user.repository'


export const auth = async (req: any, res: any) => {
    try {
        const data = await authValidation.parse(req.body);
        const user = await getUser(data.email);

        if (!user) throw { message: "Usuário não existe" }

        if (user && !user.status) throw { massage: "Usuário Bloquado" }

        if(user && !user.masterId) {
            const data = { masterId: user.id }
            await updateUser(user.id, data)
        }

        if (user && bcrypt.compareSync(data.password, user.password)) {
            const token = jwt.sign(
                {
                    id: user.id,
                    name: user.name,
                    master: user.master,
                    masterId: user.masterId ? user.masterId : user.id,
                },
                String(process.env.TOKEN_KEY),
                {expiresIn: '24h'}
                
            )
            return res.status(200).send({ token})
        } else {
            return res.status(401).send({ message: "não autorizado"})
        }
    } catch (e) {
       return res.status(401).send(e); 
    }
};
 
export const validate =  async (req: any, res: any) => {
    try {
       const data =  await tokenValidation.parse(req.body)
       const decode = await jwt.decode(data.token)
       return res.status(200).send( decode);
    } catch (e) {
       return res.status(400).send(e) 
    }
}