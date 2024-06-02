import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { DecodedUser } from '../../express';

const auth = async (req: Request, res: Response, next: NextFunction) => {
    const authorization = req.header('Authorization');
    if (!authorization) return res.status(400).send('Access denied. No Authorization header provided');

    const token = authorization.split(' ')[1];
    if (!token) return res.status(401).send('Access denied. No token provided');

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = decoded as DecodedUser;
        next();
    } catch (error) {
        res.status(400).send('Invalid token')
    }
}

export default auth;