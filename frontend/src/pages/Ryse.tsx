import { useState } from 'react';
import supabaseClient from '../lib/supabaseClient';
import { useNavigate } from 'react-router-dom';

const Ryse = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const signUp = async (email: string, password: string) => {
    const { data, error } = await supabaseClient.auth.signUp({
      email: email,
      password: password,
    });
    if (error) {
      setErrorMessage(error.message);
      console.error('sign up error: ', error.message);
    }
    if (data.user) {
      setErrorMessage(`${email} signed in!`);
      console.log('Sign up successful:', data.user);
    }
  };

  const logIn = async (email: string, password: string) => {
    const { data, error } = await supabaseClient.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) {
      setErrorMessage(error.message);
      console.error('log in error: ', error.message);
    }
    if (data.user) {
      navigate('/ryse/logged-in');
    }
  };

  const signInAnonymously = async () => {
    const { data, error } = await supabaseClient.auth.signInAnonymously();
    if (error) {
      setErrorMessage(error.message);
    }
    if (data.user) {
      navigate('/ryse/logged-in');
    }
  };

  return (
    <div className='flex justify-center flex-col items-center h-screen'>
      <p>example123@gmail.com</p>
      <p>supersecretpassword123</p>
      <form className='flex flex-col space-y-4 w-80'>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='p-2 border rounded'
          placeholder='Email'
        />
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='p-2 border rounded'
          required
          placeholder='Password'
        />
        <button
          type='button'
          onClick={() => signUp(email, password)}
          className='p-2 border rounded bg-blue-500 text-white hover:bg-blue-600'
        >
          Sign Up
        </button>
        <button
          type='button'
          onClick={() => logIn(email, password)}
          className='p-2 border rounded bg-green-500 text-white hover:bg-green-600'
        >
          Log In
        </button>
        <button
          type='button'
          onClick={() => signInAnonymously()}
          className='p-2 border rounded bg-amber-700 text-white hover:bg-amber-800'
        >
          Anonymous user
        </button>
      </form>
      <p className='text-red-900'>{errorMessage}</p>
    </div>
  );
};

export default Ryse;
