import express from 'express';
import status from 'express-status-monitor';

const PORT = parseInt(process.env.APP_PORT || '8848');
const HOST = process.env.APP_HOST || 'localhost';

const app = express();

// use express status mointor
app.use(status());

app.listen(PORT, HOST, () => {
  console.log(` Server running at http://${HOST}:${PORT}/`);
});
