import express from 'express';
import 'express-async-errors';
import handleUncaughtErrors from './handlers/uncaughtErrors';
import grades from './routes/grades';
import home from './routes/home';
import login from './routes/login';

const app = express();

app.use(express.json());

app.use('/', home);
app.use('/api/grades', grades);
app.use('/api/login', login);

handleUncaughtErrors();

app.use((err, req, res, next) => {
    console.error(err.message);

    res.status(500).send('Something went wrong. Please try again later');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));
