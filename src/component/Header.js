import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import {
  Grid,
  GridItem,
  Flex,
  Button,
  HStack,
  Heading,
  Stack,
  Box,
  Container,
} from "@chakra-ui/react";
import Logo from "./Logo";
import ConnectWalletButton from "../button/ConnectWalletButton";

export default function Header(props) {
  const { state, update } = useContext(UserContext);

  

  return (
    <Container maxW="container.xlg" centerContent bg='white' height='64px' borderRadius='15px 15px 0px 0px'>
      <Grid templateColumns="repeat(5, 1fr)" gap={8} paddingTop={1}>
        <GridItem colSpan={2} colStart={1} colEnd={5} h="10">
          {" "}
          <Box m={[2, 3]}>
            <Stack direction="row">
              <Logo />
              <Heading
                size="md"
            //     bgGradient="linear-gradient(135deg, #4BE1EC  0%, #CB5EEE 100%);
            // color: #9D8EEE;"
            //     bgClip="text"
                fontWeight="semibold"
                color="#0A152C"
                fontSize="20px"
              >
                buildspace
              </Heading>
            </Stack>
          </Box>{" "}
        </GridItem>
        <GridItem colStart={5} colEnd={6} h="10">
          <Box m={[2, 3]}>
            {/* <Button  bgClip="linear-gradient(90deg, #CB5EEE 0%, #4BE1EC 100%)">
              Connect Wallet
            </Button> */}
            {/* <Box
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
                  "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
              }}
              
            >
              Connect Wallet
            </Box> */}

            {/* {!state.currentAccount && ( */}
              <ConnectWalletButton connectWallet={props.connectWallet} />
            {/* )} */}
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
}
