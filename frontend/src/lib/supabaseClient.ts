import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  throw Error('missing supabase env variables');
}
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);

export default supabaseClient;
