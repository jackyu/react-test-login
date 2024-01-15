import React from 'react';
import storage from "../utils/storage";
import { LOGINED_DATA_KEY } from '../constants/auth';
import { createContext, useMemo, useState } from 'react';

// 從 localStorage 取得是否有登入
const loginData = storage.get(LOGINED_DATA_KEY) || undefined;

export const AuthContext = createContext(undefined);

export default function AuthProvider({ children }) {
  const [logined, setLogined] = useState(loginData);

  const setUserLogined = useMemo(() => (data) => {
    if (data !== null && data !== undefined) {
      setLogined(data);
      storage.set(LOGINED_DATA_KEY, data);
    } else {
      setLogined(undefined);
      storage.remove(LOGINED_DATA_KEY);
    }
  }, []);

  const value = useMemo(
    () => ({
      logined,
      setLogined: setUserLogined,
    }),
    [logined, setUserLogined]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
