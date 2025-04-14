import { Session, SupabaseClient } from '@supabase/supabase-js';

export type SupabaseContextType = {
  session: Session | null;
  supabaseClient: SupabaseClient;
};


