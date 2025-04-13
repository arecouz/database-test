import useSupabase from '../hooks/useSupabase';
import axios from 'axios';
import Resources from '../components/Resources.tsx';

const LoggedIn = () => {
  const { session, supabaseClient } = useSupabase();

  const isAnonymous = session ? session.user?.is_anonymous : false;
  const isAdmin = session
    ? session.user?.user_metadata?.role === 'admin'
    : false;

  console.log(session.user.user_metadata);
  console.log('is admin????: ', isAdmin);

  const handleLogOut = async () => {
    console.log('clicked');
    const { data, error } = await supabaseClient.auth.signOut();
    if (error) {
      console.error('Error signing out:', error.message);
    }
    console.log(data);
  };

  const addResource = () => {
    axios.post('/api/resources/test');
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <p className="text-lg font-semibold text-gray-800">
        Logged in as: {session?.user?.email || 'Anonymous User'}
      </p>
      <div className="flex space-x-4">
        <button
          onClick={handleLogOut}
          className="px-6 py-2 text-white bg-red-600 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Log Out
        </button>
        {/* Only show the "Add Resource" button if the user is not anonymous */}
        {!isAnonymous && (
          <button
            onClick={addResource}
            className="px-6 py-2 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Resource
          </button>
        )}
        {isAdmin && (
          <button className="px-6 py-2 text-white bg-gray-700 rounded-lg shadow-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
            ADMIN BUTTON!!!
          </button>
        )}
      </div>
      <Resources />
    </div>
  );
};

export default LoggedIn;
