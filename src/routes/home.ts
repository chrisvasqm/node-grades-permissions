import { Router } from 'express';

const router = Router();

router.get('/', (_, res) => {
    res.send('Welcome to the Grades API');
});

export default router;