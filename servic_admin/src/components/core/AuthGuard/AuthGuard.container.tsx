import React, { useEffect, useState } from 'react';

import { Box, Spinner } from '@chakra-ui/react';
import { useHistory, useLocation } from 'react-router-dom';
import { RouteConfig } from 'routes';

import { AuthGuardPublicProps } from './AuthGuard.props';

const AuthGuardContainer = (props: AuthGuardPublicProps): JSX.Element => {
  const history = useHistory();
  const { pathname } = useLocation();
  const [redirect, setRedirecting] = useState(false);

  const sessionRedirectRoutes = ['/', RouteConfig.LOGIN.path];
  const key = '';
  useEffect(() => {
    const checkRedirect = (key?: string) => {
      if (key) {
        if (sessionRedirectRoutes.includes(pathname))
          history.replace(RouteConfig.DASHBOARD.path);
      } else if (props.notFound) {
        setRedirecting(true);

        setTimeout(() => {
          setRedirecting(false);
          if (key) {
            history.replace(RouteConfig.DASHBOARD.path);
          } else if (!key) history.replace(RouteConfig.LOGIN.path);
        }, 1500);
      } else {
        history.replace(RouteConfig.LOGIN.path);
      }
    };
    checkRedirect(key);
  }, [key, props.auth, props.notFound, history]);

  return (
    <>
      {redirect ? (
        <Box
          display="flex"
          height="100vh"
          width="100%"
          alignItems="center"
          justifyContent="center"
        >
          <Spinner size="xl" />
        </Box>
      ) : (
        <>{props.children}</>
      )}
    </>
  );
};

export default AuthGuardContainer;
