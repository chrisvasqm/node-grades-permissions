import { JwtPayload } from 'jsonwebtoken';

export interface DecodedUser {
    id: number,
    name: string,
    roleId: number
}

declare global {
    namespace Express {
        interface Request {
            user?: DecodedUser | JwtPayload;
        }
    }
}
