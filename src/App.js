import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import theme from './theme'
import { UserProvider } from './UserContext'
import WalletConnector from './component/WalletConnector';
import Header from './component/Header'
const App = () => {
  return (
    <>
      <ChakraProvider theme={theme}>
        <UserProvider>
          <Header />
          <WalletConnector />
        </UserProvider>
      </ChakraProvider>
    </>
  );
}

export default App;


//copmonents have reusable components, lazy load, react-lazy
//pages components
//apis components
//helper functions
//constants

