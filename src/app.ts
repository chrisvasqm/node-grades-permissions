import express from 'express';
import 'express-async-errors';
import errors from './handlers/errors';
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
errors();

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));
