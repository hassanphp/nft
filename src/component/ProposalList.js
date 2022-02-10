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
  Button,
  Container,
  border,
  Avatar,
  AvatarGroup,
  HStack,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import LoadProposals from "./LoadProposals";
import AvatarIcons from "./AvatarIcons";
import Photo1 from '../assets/avatars/1.png'
import Photo2 from '../assets/avatars/2.png'
import Photo3 from '../assets/avatars/3.png'

const ProposalList = () => {
  const { state, update } = useContext(UserContext);
  let navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef();

  const handleClick = async (item) => {
    console.log(item);
    update({ currentProposal: item });
    navigate(`/viewProposal/${item.proposal_id}`);
    // onOpen();
  };

  return (
    <>
      <Container maxW="container.lg">
        <LoadProposals />
        <Grid
          templateColumns="repeat(3, 1fr)"
          gap={4}
          paddingTop={5}
          paddingLeft={2}
          paddingRight={4}
        >
          {state.proposals &&
            state.proposals.map((item) => {
              return (
                <GridItem key={item.proposal_id} >
                  <Box
                    bg="#FFFF"
                    width="305px"
                    height="200px"
                    maxW="md"
                    borderRadius="16px"
                    overflow="hidden"
                    p="5"
                    boxShadow="0px 20px 30px rgba(10, 21, 44, 0.04)"
                  >
                      <Text align="right" fontSize="8px">
                        {item.status}
                      </Text>
                   
                    <Box m={[2, 3]} height="35px">
                      <Text
                        fontSize="13px"
                        paddingTop="6px"
                        fontWeight="semibold"
                      >
                        {item.title}
                      </Text>
                    </Box>
                    <HStack  m={[2, 3]} height="40px" paddingTop='10px'>
{/* <AvatarGroup >
  <Avatar height='25px' width='25px'>
  <AvatarIcons src={Photo1} />

  </Avatar>
  <Avatar height='25px' width='25px'>
  <AvatarIcons src={Photo2} />

  </Avatar>
  <Avatar height='25px' width='25px'>
  <AvatarIcons src={Photo3} />
  </Avatar>
</AvatarGroup> */}

<AvatarGroup size='xs' max={3} spacing='-10px' loading='lazy'>
  <Avatar  src={Photo1} />
  <Avatar src={Photo2} />
  <Avatar  name='G'  />
  
</AvatarGroup>
                      <Text  fontSize="10px" color='#6699FF' fontWeight='700'>
                        {item.voote_count == "1" ? (
                          <>{item.vote_count} Vote </>
                        ) : (
                          <>{item.vote_count} Votes </>
                        )}
                      </Text>
                 
                    </HStack>

                    <Box m={[2, 3]} paddingTop='5px'>
                      <Box 
                      as='button'
                        fontSize="10px"
                        fontWeight='600'
                        width="100%"
                        borderRadius="100"
                        height="30px"
                        color="#0A152C"
                        border='1px solid #DBDEE7 '
                        bg="#FFF"
                        _hover={
                          { 
                          bg: "linear-gradient(90deg, #6699FF 0%, #FF3366 100%)",
                          border: "0px",
                          color:"#FFFF"
                      }
                    }
                        _active={{
                          bg: "#dddfe2",
                          transform: "scale(0.98)",
                          borderColor: "#bec3c9",
                        }}
                        _focus={{
                          boxShadow:
                            "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
                        }}
                        onClick={() => handleClick(item)}
                      >
                        View Details 
                      </Box>
                    </Box>
                  </Box>
                </GridItem>
              );
            })}
        </Grid>
      </Container>

      <Box ref={finalRef} tabIndex={-1} aria-label="Vote This NFT"></Box>

      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>NFT Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{/* <Lorem count={2} /> */}</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Open</Button>
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
