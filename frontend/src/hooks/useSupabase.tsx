import { useContext } from 'react';
import SupabaseContext from '../context/SupabaseContext';

const useSupabase = () => useContext(SupabaseContext);

export default useSupabase;
