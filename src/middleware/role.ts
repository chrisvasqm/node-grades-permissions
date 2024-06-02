import Roles from '../enums/roles';
import User from '../models/User';

const role = (roles: Roles[]) => {
    return (req, res, next) => {
        const { roleId } = req.user as User
        if (!roles.includes(roleId)) return res.status(401).send('Unauthorized');

        next();
    }
}

export default role;