import express from 'express';

const app = express();

app.use(express.json());

app.use('/', (_, res) => {
    res.send('Welcome to the Grades API');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));
