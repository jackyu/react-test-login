import React from 'react';
import { createContext, useMemo, useState } from 'react';
import Router from '../constants/router';

export const RouterContext = createContext(undefined);

export default function RouterProvider({ page = Router.COMPANY, children }) {
  const [currentPage, setCurrentPage] = useState(page);

  const value = useMemo(
    () => ({
      router: currentPage,
      setRouter: setCurrentPage
    }),
    [currentPage]
  );

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
}

// 教學文:
// https://medium.com/comsystoreply/how-to-use-react-context-with-usestate-c8ae4fe72fb9
