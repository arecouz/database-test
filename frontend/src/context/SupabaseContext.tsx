import { createContext } from 'react';
import { Session, SupabaseClient } from '@supabase/supabase-js';

type SupabaseContextType = {
  session: Session | null;
  supabaseClient: SupabaseClient;
  loading: boolean;
};

const SupabaseContext = createContext<SupabaseContextType | null>(null);

export default SupabaseContext;
