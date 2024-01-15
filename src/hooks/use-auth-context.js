import { AuthContext } from '../context/auth-provider';
import { useContext } from 'react';

export const useAuthContext = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error(
      'useAuthContext must be used within a AuthProvider'
    );
  }

  return authContext;
}
