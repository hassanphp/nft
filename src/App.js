import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import theme from './theme'
import { UserProvider } from './UserContext'
import WalletConnector from './component/WalletConnector';
// import useConnect from './utils/useConnect'


import Header from './component/Header'
import  Fonts  from "./theme/Fonts"

const App = () => {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Fonts />
        <UserProvider>
          <Header />
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

