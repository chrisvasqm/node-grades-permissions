import express from 'express';
import handleUncaughtErrors from './handlers/uncaughtErrors';
import grades from './routes/grades';
import home from './routes/home';

const app = express();

app.use(express.json());

app.use('/', home);
app.use('/api/grades', grades);

handleUncaughtErrors();

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));
