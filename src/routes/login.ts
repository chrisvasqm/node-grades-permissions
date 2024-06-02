import 'dotenv/config';
import { Router } from 'express';
import jwt from 'jsonwebtoken';
import { DecodedUser } from '../../express';

const router = Router();

router.post('/', (_, res) => {
    const user: DecodedUser = {
        id: 1,
        name: 'user',
        roleId: 1
    };

    const token = jwt.sign(user, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
    res.send({ token });
});

export default router;