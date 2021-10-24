import { useEffect, useState } from 'react';
import { useGlobalContext } from '../context/Provider';

/**
 * React hook to check if the user is authenticated based on the user's global state.
 * @returns True if the user is authenticated or False if the user is not authenticated
 */
const useIsAuth = () => {
  const [isAuth, setIsAuth] = useState(false);
  const { user } = useGlobalContext();

  // Only check on user state change
  useEffect(() => {
    if (user.id) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [user]);

  return isAuth;
};
export default useIsAuth;
