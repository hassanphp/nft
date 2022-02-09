import React, { useContext } from "react";
import {
  Box,
  Text,
  Center,
  Flex,
  Spacer,
  Grid,
  GridItem,
  Stack,
  Heading,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  Button

} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import LoadProposals from "./LoadProposals";

const ProposalList = () => {
  const { state, update } = useContext(UserContext);
  let navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = React.useRef()

  const handleClick = async (item) => {
    console.log(item);
    update({ currentProposal: item });
    navigate(`/viewProposal/${item.proposal_id}`);
    // onOpen();
  };

  return (
    <>
      <LoadProposals />
      <Grid templateColumns="repeat(3, 1fr)" gap={4} paddingTop={5}>
        {state.proposals &&
          state.proposals.map((item) => {
            return (
              <GridItem key={item.proposal_id} height='290px'>
                <Box
                  bg="#F7F7F7"
                  maxW="sm"
                  borderWidth="1px"
                  borderRadius="20px"
                  overflow="hidden"
                  p="10"
                  boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                >
                    <Text>{item.title}</Text>
                    <Spacer />
                    {item.status === 'OPEN' ? (
                    <Text>{item.vote_count == '1' ? (
                      <>Vote: {item.vote_count}</>
                    ) : (<>Votes: {item.vote_count}</>)}</Text>
                    ) : (
                      <Text>{item.status}</Text>

                    )}
                    <Spacer />
                    <Box m={[2, 3]}>
          <Button bg="#00E6E6" color="#1A202C" onClick={() => handleClick(item)}>
            View Details
          </Button>
        </Box>
                  
                </Box>
              </GridItem>
            );
          })}
      </Grid>

      <Box ref={finalRef} tabIndex={-1} aria-label='Vote This NFT'>
        
      </Box>

      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>NFT Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* <Lorem count={2} /> */}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Open</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>NFT Name</DrawerHeader>
          <DrawerBody>
            <p>Status</p>
            <p>Detail</p>
            <p>Vote</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer> */}

    </>
  );
};

export default ProposalList;
