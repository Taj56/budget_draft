import React, { createContext, useState, useEffect, useContext } from 'react';
import { getUserName, getCurrency } from '@/utils/storage';

type UserContextType = {
  userName: string | null;
  currency: string | null;
  setUserName: (name: string) => void;
  setCurrency: (currency: string) => void;
};

const UserContext = createContext<UserContextType>({
  userName: null,
  currency: null,
  setUserName: () => {},
  setCurrency: () => {},
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [userName, setUserNameState] = useState<string | null>(null);
  const [currency, setCurrencyState] = useState<string | null>(null);

  useEffect(() => {
    const fetch = async () => {
      const name = await getUserName();
      const curr = await getCurrency();
      setUserNameState(name);
      // @ts-ignore
      setCurrencyState(curr);
    };
    fetch();
  }, []);

  return (
    <UserContext.Provider
      value={{
        userName,
        currency,
        setUserName: setUserNameState,
        setCurrency: setCurrencyState,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
