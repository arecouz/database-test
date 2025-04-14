import { useEffect, useState } from 'react';
import supabaseClient from '../lib/supabaseClient';
import SupabaseContext from './SupabaseContext';
import { Session } from '@supabase/supabase-js';
import { ReactNode } from 'react';

type SupabaseProviderProps = {
  children: ReactNode;
};

const SupabaseProvider = ({ children }: SupabaseProviderProps) => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabaseClient.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabaseClient.auth.onAuthStateChange((_event, session) => {
      console.log('sessions: ', session);
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <SupabaseContext.Provider value={{ supabaseClient, session, loading }}>
      {children}
    </SupabaseContext.Provider>
  );
};

export default SupabaseProvider;
