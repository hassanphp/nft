import React, { useEffect, useContext } from 'react';
import axios from 'axios';
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
  }, []);

  return (
    <AppRouter connectWallet={connectWallet}/>
  );
}

export default WalletConnector;