import { RouterContext } from '../context/router-provider';
import { useContext } from 'react';

export const useRouterContext = () => {
  const routerContext = useContext(RouterContext);

  if (!routerContext) {
    throw new Error(
      'useRouterContext must be used within a RouterProvider'
    );
  }

  return routerContext;
}
