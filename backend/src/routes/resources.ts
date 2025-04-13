import supabaseClient from '../lib/supabaseClient';
import express from 'express';

const router = express.Router();

router.get('/', async (_req, res): Promise<void> => {
  try {
    const { data, error } = await supabaseClient.from('resources').select('*');

    if (error) {
      res.status(400).json({ error: error.message });
      return;
    }
    res.status(200).json(data);
  } catch (error) {
    console.error('Error getting resources: ', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/test', async (_req, res): Promise<void> => {
  try {
    // Hardcoded data
    console.log('testttt');
    const hardcodedResource = {
      title: 'Hardcoded React Tutorial',
      type: 'article',
      accessibility_score: 90,
      description: 'A hardcoded article on advanced React techniques.',
      created_by: '4ad25bf1-6a8e-4317-b4b0-f48da0a2edc6', // Example user ID
      url: 'https://example.com/advanced-react-tutorial',
      created_at: new Date().toISOString(), // Optionally add the current timestamp for created_at
    };

    // Insert the hardcoded data into Supabase
    const { data, error } = await supabaseClient
      .from('resources')
      .insert([hardcodedResource])
      .single(); // Use `.single()` to return a single inserted record, rather than an array

    if (error) {
      console.error(error.message);
      res.status(400).json({ error: error.message });
      return;
    }

    // Return the created resource data
    res.status(201).json(data);
  } catch (error) {
    console.error('Error creating resource: ', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
