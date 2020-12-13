import React from 'react';

import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { ReactQueryConfigProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import Routes from 'routes';

const App = (): JSX.Element => {
  const reactQueryConfig = {
    queries: {
      retry: 3,
    },
  };

  return (
    <ReactQueryConfigProvider config={reactQueryConfig}>
      <ChakraProvider>
        <CSSReset />
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ChakraProvider>
    </ReactQueryConfigProvider>
  );
};

export default App;
