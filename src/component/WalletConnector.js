import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { Box } from '@chakra-ui/react';

import { UserContext } from '../UserContext';
import AppRouter from '../AppRouter';

const WalletConnector = () => {
  const { state, update } = useContext(UserContext);

  const connectWallet = async (requestMethod) => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
      }
      console.log("We have the ethereum object", ethereum);
      const accounts = await ethereum.request({ method: requestMethod });
      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        update({ currentAccount: account });
        checkNftExists(account);
        localStorage.setItem('accountId', account);

      } else {
        console.log("No authorized account found")
      }
    } catch (error) {
      console.log(error);
    }
  }

  const checkNftExists = async (account) => {
  const userAccount =  localStorage.getItem('accountId');

    const json = JSON.stringify({
        // address: account
        address: userAccount
    });
    
    const nftFound = await axios.post('https://q1u7282sh3.execute-api.us-east-1.amazonaws.com/checkUserNFT', json);
    console.log("response", nftFound);
    update({ nftFound: nftFound });
  }

  useEffect(() => {
    connectWallet("eth_accounts");
    update({ connected: true });
  }, []);

  return (
<>
{/* <AppRouter /> */}
<Box
    as="button"
    // position='fixed'
    // top='5'
    // right='110'
    width="135"
    height="32px"
    lineHeight="1.2"
    transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
    borderRadius="100px"
    fontSize="14px"
    fontWeight="semibold"
    bg="linear-gradient(90deg, #CB5EEE 0%, #4BE1EC 100%)"
    padding="8px 20px"
    color="#FFFF"
    _hover={{ bg: "#ebedf0",
  color:"#6699FF"
  }}
    _active={{
      bg: "#dddfe2",
      transform: "scale(0.98)",
      borderColor: "#bec3c9",
    }}
    _focus={{
      boxShadow:
        "none",
    }}       
    onClick={() => connectWallet("eth_requestAccounts")}
    >{!state.currentAccount ? ' Connect Wallet' : ' Wallet Connected'}</Box> 
</>
 
    
  );
}

export default WalletConnector;