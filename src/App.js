import React,{useEffect} from 'react';
import { ChakraProvider, extendTheme, CSSReset } from '@chakra-ui/react';
import theme from './theme'
import { UserProvider } from './UserContext'
import WalletConnector from './component/WalletConnector';
// import useConnect from './utils/useConnect'
import AppRouter from './AppRouter';


import Header from './component/Header'
import  Fonts  from "./theme/Fonts"

const App = () => {

  useEffect(() => {
  if(window.ethereum) {
      window.ethereum.on('chainChanged', () => {
        window.location.reload();
      })}
      window.ethereum.on('accountsChanged', () => {
        window.location.reload();
      })
  });

  return (
    <>
      <ChakraProvider theme={theme}>
        <CSSReset />
        <Fonts />
        <UserProvider>
          <Header />
          <AppRouter />
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

