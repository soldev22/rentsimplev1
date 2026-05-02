import next from 'next';
import express from 'express';

const port = process.env.PORT || 3000;
const dev = false;
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.all('*', (req, res) => handle(req, res));

  server.listen(port, () => {
    console.log(`> Server running on port ${port}`);
  });
});
