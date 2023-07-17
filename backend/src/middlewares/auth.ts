import jwt from 'jsonwebtoken'

export const verifyToken = async (req: any, res: any, next: any) =>{
    try {
        const token = req.headers.authorization;
        if (!token) throw { mesage: "Necessario passar token" }

        const replace = token.replace('Bearer ', '');
        const decoded = jwt.verify(replace, String(process.env.TOKEN_KEY))
        req.user = decoded;
        next();
    } catch (e) {
        return res.status(401).send(e)

    }
}