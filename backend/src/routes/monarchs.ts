import express, { Request, Response } from 'express';
import supabaseClient from '../lib/supabaseClient';

const router = express.Router();

router.get('/', async (req: Request, res: Response): Promise<void> => {
  const { name, startDate, endDate } = req.query;

  // Validate name parameter if it's provided
  let query = supabaseClient.from('British Monarchs').select('*');

  if (name && typeof name === 'string') {
    query = query.ilike('Monarch', `%${name}%`);
  }

  // Validate startDate and endDate if they are provided
  if (
    startDate &&
    typeof startDate === 'string' &&
    endDate &&
    typeof endDate === 'string'
  ) {
    const start = parseInt(startDate, 10);
    const end = parseInt(endDate, 10);

    if (isNaN(start) || isNaN(end)) {
      res
        .status(400)
        .json({ error: 'startDate and endDate must be valid numbers.' });
      return;
    }

    query = query.gte('Birth', start).lte('Death', end);
  }

  try {
    const { data, error } = await query;

    if (error) {
      console.error('Error fetching monarchs: ', error.message);
      res.status(500).json({ error: error.message });
      return;
    }

    res.json(data);
  } catch (error) {
    console.error('Error processing the request: ', error);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

export default router;
