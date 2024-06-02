import { Router } from 'express';
import auth from '../middleware/auth';

const router = Router();

router.get('/', auth, (req, res) => {
    const { id, name, roleId } = req.user;

    res.send({ id, name, roleId });
});

export default router;