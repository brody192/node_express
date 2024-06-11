import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/health', (req, res) => {
    res.send('ok');
});

const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 3000;

app.listen(port, host, () => {
    console.log(`Example app listening on http://${host}:${port}`);
});