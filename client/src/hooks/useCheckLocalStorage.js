import { useEffect } from 'react';
import { useGlobalContext } from '../context/Provider';
import signIn from '../context/actions/user/sign-in';

const useCheckLocalStorage = () => {
  const { userDispatcher } = useGlobalContext();

  // Check if username and password is available and login the user
  const checkUserStorage = () => {
    const username = window.localStorage.getItem('username');
    const password = window.localStorage.getItem('password');
    if (username && password) {
      signIn(userDispatcher, { username, password });
    }
  };

  // Only run once on page load
  useEffect(() => {
    checkUserStorage();
  }, []);
};
export default useCheckLocalStorage;
