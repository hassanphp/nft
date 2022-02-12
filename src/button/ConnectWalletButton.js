import React from 'react';
import { Box, Button } from '@chakra-ui/react';

const ConnectWalletButton = (props) => {

    return (
                        <Box
              as="button"
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

             onClick={() => props.connectWallet("eth_requestAccounts")}>
                Connect Wallet
            </Box>
    )
}

export default ConnectWalletButton;