import 'dotenv/config';
import { Router } from 'express';
import jwt from 'jsonwebtoken';
import { DecodedUser } from '../../express';

const router = Router();

router.post('/', (_, res) => {
    const payload: DecodedUser = {
        id: 1,
        username: 'user',
        roleId: 3
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
    res.send({ token });
});

export default router;