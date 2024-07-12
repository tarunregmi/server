import express from 'express';

const PORT = parseInt(process.env.APP_PORT || '8848');
const HOST = process.env.APP_HOST || 'localhost';

const app = express();

app.get('/', (req, res) => {
  res.json({ done: 'done' });
});

app.listen(PORT, HOST, () => {
  console.log(` Server running at http://${HOST}:${PORT}/`);
});
