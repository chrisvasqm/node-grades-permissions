import Roles from '../enums/roles';
import User from '../models/User';

const role = (roles: Roles[]) => {
    return (req, res, next) => {
        const { role } = req.body as User
        if (!roles.includes(role)) return res.status(401).send('Unauthorized');

        next();
    }
}

export default role;