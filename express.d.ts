import { JwtPayload } from 'jsonwebtoken';

export interface DecodedUser {
    id: number,
    username: string,
    roleId: number
}

declare global {
    namespace Express {
        interface Request {
            user?: DecodedUser | JwtPayload;
        }
    }
}
