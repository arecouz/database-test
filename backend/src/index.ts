import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import monarchRouter from './routes/monarchs';
import resourceRouter from './routes/resources';
import adminRouter from './routes/admin';

const app = express();
app.use(express.json());

if (!process.env.PORT) {
  throw Error('missing PORT in .env');
}
const PORT = process.env.PORT;

app.use('/api/monarchs', monarchRouter);

// RYSE routes
app.use('/api/create-admin', adminRouter);
app.use('/api/resources', resourceRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
