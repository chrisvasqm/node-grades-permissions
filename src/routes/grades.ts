import { Router } from 'express';

const grades = [
    { id: 1, name: 'Pedro', subject: 'Math', grade: 100 },
    { id: 2, name: 'Jose', subject: 'Science', grade: 90 },
    { id: 3, name: 'Maria', subject: 'Religion', grade: 70 },
];

const router = Router();

router.get('/', (_, res) => {
    res.send(grades);
});

export default router;