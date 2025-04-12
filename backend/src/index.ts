import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import monarchRouter from './routes/monarchs';
const app = express();
app.use(express.json());

if (!process.env.PORT) {
  throw Error('missing PORT in .env');
}
const PORT = process.env.PORT;

app.get('/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.use('/api/monarchs', monarchRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
