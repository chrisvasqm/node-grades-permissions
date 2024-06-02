import 'dotenv/config';
import { Router } from 'express';
import jwt from 'jsonwebtoken';

const router = Router();

router.post('/', (_, res) => {
    const user = {
        id: 1,
        username: 'user',
        roleId: 3
    };

    const token = jwt.sign(user, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
    res.send({ token });
});

export default router;