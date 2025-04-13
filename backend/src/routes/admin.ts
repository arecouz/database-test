import express from 'express';
import supabaseAdminClient from '../lib/supabaseAdminClient';

const router = express.Router();

// We should have token based security here...
router.post('/', async (req, res): Promise<void> => {
  const { email, password } = req.body;

  const { data, error } = await supabaseAdminClient.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: {
      role: 'admin',
    },
  });
  if (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not create admin' });
    return;
  }
  res.json({ user: data.user });
  return;
});

export default router;
