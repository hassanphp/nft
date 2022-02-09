import React from 'react';
import { Box, Button } from '@chakra-ui/react';

const ConnectWalletButton = (props) => {

    return (
        <Box w='100%' p={4} color='white'>
            <Button colorScheme='blue' onClick={() => props.connectWallet("eth_requestAccounts")}>
                Connect Wallet
            </Button>
        </Box>
    )
}

export default ConnectWalletButton;