import { createClient } from '@supabase/supabase-js';
import { Database } from '../types/database.types';

if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
  throw Error('missing supabase env variables');
}
const supabaseClient = createClient<Database>(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export default supabaseClient;
