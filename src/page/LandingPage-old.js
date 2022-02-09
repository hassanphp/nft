import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import {
  Box,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  useBreakpointValue,
  Img,
} from "@chakra-ui/react";
import ConnectWalletButton from "../button/ConnectWalletButton";
import CreateProposalButton from "../button/CreateProposalButton";
import ProposalList from "../component/ProposalList";
import Proposals from "../component/Proposals";

// import Logo from "../assets/images/logo-sm.png";

const LandingPage = (props) => {
  const { state, update } = useContext(UserContext);
  const colSpan = useBreakpointValue({ base: 2, md: 1 });

  return (
    <>
      <VStack w="full" h="full" p={12} spacing={10} alignItems="flex-center">
        <VStack spacing={3} alignItems="center">

          <Heading
            size="lg"
            bgGradient="linear-gradient(
135deg
, #4BE1EC  0%, #CB5EEE 100%);
    color: #9D8EEE;"
            bgClip="text"
            fontWeight="extrabold"
          >
            {/* <Img width="35" src={Logo} /> */}
            buildspace
          </Heading>

        </VStack>
        <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full"  bgGradient="linear-gradient(to-r, 180deg, #13547A 0%, #2DAFA1 100%); "
    borderRadius="20px" padding="30px" color="white"
    >
          <GridItem colSpan={colSpan}>
          <Text>
          Buildspace NFT holders pick their favorite proposal every week.  We activate the most popular idea.
         
          </Text>
           

          </GridItem>
        </SimpleGrid>
        <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
          <GridItem colSpan={colSpan}>
          <Text>
            {!state.currentAccount && (
              <ConnectWalletButton connectWallet={props.connectWallet} />
            )}
          </Text>
            <ProposalList />
            <Proposals />

          </GridItem>
        </SimpleGrid>
      </VStack>
    </>
  );
};

export default LandingPage;
