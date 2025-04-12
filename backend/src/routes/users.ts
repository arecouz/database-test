import supabaseClient from '../lib/supabaseClient';
import express from 'express';
import { CreateUserRequest } from '../types/users';
import { z } from 'zod';

const router = express.Router();

router.get('/', async (_req, res): Promise<void> => {
  try {
    const { data, error } = await supabaseClient.from('users').select('*');

    if (error) {
      res.status(400).json({ error: error.message });
      return;
    }
    res.status(200).json(data);
  } catch (error) {
    console.error('Error getting users: ', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/create', async (req, res): Promise<void> => {
  try {
    const { name, email, password }: CreateUserRequest = req.body;

    const { data, error } = await supabaseClient
      .from('users')
      .insert([{ name, email, password }])
      .single();

    if (error) {
      res.status(400).json({ error: error.message });
      return;
    }

    res.status(201).json(data);
  } catch (error) {
    console.error('Error creating user: ', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
