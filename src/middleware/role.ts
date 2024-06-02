import { DecodedUser } from '../../express';
import Roles from '../enums/roles';

const role = (roles: Roles[]) => {
    return (req, res, next) => {
        const { roleId } = req.user as DecodedUser
        if (!roles.includes(roleId)) return res.status(403).send('Access denied');

        next();
    }
}

export default role;