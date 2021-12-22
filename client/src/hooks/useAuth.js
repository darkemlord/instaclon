import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

export function useAuth(){
  useContext(AuthContext)
}
