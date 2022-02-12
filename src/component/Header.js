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
// import { useToggle } from "../utils/useConnect";
import { useLocalStorage } from "../utils/checkLocal";
import WalletConnector from "./WalletConnector";

export default function Header(props) {
  const { state, update } = useContext(UserContext);
  // const [isTextChanged, setIsTextChanged] = useToggle();
    


  return (
    <Container
      maxW="container.xlg"
      centerContent
      bg="white"
      height="64px"
      borderRadius="15px 15px 0px 0px"
    >
      <Grid templateColumns="repeat(5, 1fr)" gap={8} paddingTop={1}>
        <GridItem colSpan={2} colStart={1} colEnd={5} h="10">
          {" "}
          <Box m={[2, 3]}>
            <Stack direction="row">
              <Logo />
              <Heading
                size="md"
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
          {/* <Box m={[2, 3]}>{!state.currentAccount && <WalletConnector />}</Box> */}
          <Box m={[2, 3]}>
          {/* <button onClick={setIsTextChanged}>{isTextChanged ? 'Toggled' : 'Click to Toggle'}</button> */}

            {/* <WalletConnector /> */}
            <WalletConnector  />

            </Box>

        </GridItem>
      </Grid>
    </Container>
  );
}
