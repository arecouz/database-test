import { useContext } from 'react';
import SupabaseContext from '../context/SupabaseContext';
import { SupabaseContextType } from '../types/supabase';

const useSupabase = (): SupabaseContextType => {
  const context = useContext(SupabaseContext);
  if (!context) {
    throw new Error('no context!');
  }
  return context;
};

export default useSupabase;
