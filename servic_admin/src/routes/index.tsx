import React from 'react';

import { Switch, useLocation } from 'react-router-dom';
// IMPORT ROUTE
import Dashboard from 'routes/Dashboard';
import Error from 'routes/Error';
import Login from 'routes/Login';

import { ROUTES } from 'constants/routes';
import { Helmet } from 'react-helmet';
import AuthGuard from 'components/core/AuthGuard/AuthGuard.index';
import RouteWithSubRoutes from 'components/core/RouteWithSubRoutes';

export const RouteConfig = {
  // ROUTE SETTINGS ENTRY
  [ROUTES.ERROR]: {
    component: Error,
    name: 'Error',
    path: '/404',
    getPath: () => `/404`,
  },
  [ROUTES.DASHBOARD]: {
    component: Dashboard,
    name: 'Dashboard',
    path: '/dashboard',
    getPath: () => `/dashboard`,
  },
  [ROUTES.LOGIN]: {
    component: Login,
    name: 'Login',
    path: '/login',
    getPath: () => `/login`,
  },
};

const Routes = (): JSX.Element => {
  const location = useLocation();
  const { pathname } = location;

  const showNavbar = pathname !== '/' && pathname !== RouteConfig.LOGIN.path;

  const auth = pathname === RouteConfig.LOGIN.path;

  const notFound =
    Object.values(RouteConfig)
      .map((r) => r.path)
      .filter((p) => pathname.includes(p)).length === 0;

  return (
    <>
      {auth && (
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>
      )}
      {showNavbar && <div />}
      <AuthGuard auth={auth} notFound={notFound}>
        <Switch>
          {Object.values(RouteConfig).map((route) => (
            <RouteWithSubRoutes key={route.path} {...route} />
          ))}
        </Switch>
      </AuthGuard>
    </>
  );
};

export default Routes;
