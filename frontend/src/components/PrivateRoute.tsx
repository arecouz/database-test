import { Navigate } from 'react-router-dom';
import useSupabase from '../hooks/useSupabase';

const PrivateRoute = ({ children }) => {
  const { session, loading } = useSupabase();

  console.log('PrivateRoute - Loading:', loading);
  console.log('PrivateRoute - Session:', session);

  if (loading) {
    // Optionally, show a loading indicator while waiting for the session
    return <div>Loading...</div>;
  }

  if (!session) {
    return <Navigate to='/ryse' replace />;
  }

  return <div>{children}</div>;
};

export default PrivateRoute;
