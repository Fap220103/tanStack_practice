
import useIsLoginContext from '@/lib/hooks/useIsLoginContext';
import { UserContext } from './UserContext';
import type { JSX } from 'react';


interface IUserContextProviderProps {
  children: JSX.Element[] | JSX.Element;
}

const UserContextProvider = ({ children }: IUserContextProviderProps) => {
  return <UserContext.Provider value={useIsLoginContext()}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
