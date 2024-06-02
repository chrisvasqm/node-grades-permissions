import cors from 'cors';
import express from 'express';
import 'express-async-errors';
import helmet from 'helmet';
import errors from './handlers/errors';
import handleUncaughtErrors from './handlers/uncaughtErrors';
import grades from './routes/grades';
import home from './routes/home';
import login from './routes/login';
import me from './routes/me';

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.use('/', home);
app.use('/api/grades', grades);
app.use('/api/login', login);
app.use('/api/me', me);

handleUncaughtErrors();
errors();

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));
