import React, { useContext, useEffect } from "react";
import axios from "axios";

import {
  Box,
  Text,
  Center,
  AvatarGroup,
  Avatar,
  Heading,
  HStack,
  Container,
  Flex,
  Grid,
  GridItem,
  SimpleGrid,
  ButtonGroup,
  Stack,
  Spacer,
  IconButton,
  Button,
  VStack,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import LoadProposals from "./LoadProposals";
import AvatarIcons from "./AvatarIcons";
import BackButton from "../button/BackButton";
import SubmitVoteButton from "../button/SubmitVoteButton";
import Heart from "../component/Heart";
import Fire from "../component/Fire";
import BackArrow from "../component/BackArrow";
import UpArrow from "../component/UpArrow";

import SimpleClock from "../component/SimpleClock";
import Photo1 from "../assets/avatars/1.png";
import Photo2 from "../assets/avatars/2.png";
import Photo3 from "../assets/avatars/3.png";
import DownArrow from "./DownArrow";

const ProposalList = () => {
  const { state, update } = useContext(UserContext);
  let navigate = useNavigate();
  const finalRef = React.useRef();

  const handleClick = async (item) => {
    console.log(item);
    update({ currentProposal: item });
    navigate(`/viewProposal/${item.proposal_id}`);
  };

  const submitVote = async (event) => {
    event.preventDefault();
    // const { title, description } = formValue;
    // const userAccount =  localStorage.getItem('accountId');
    // const json = JSON.stringify({
    //      proposal_id: item.proposal_id,
    //      user_id: userAccount
    // });

    // const response = await axios.post('https://u7ou8g3qz8.execute-api.us-east-1.amazonaws.com/submitProposalVote', {
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },json
    // });
    // console.log("response", response);
    // navigate('/');
    const userAccount = localStorage.getItem("accountId");

    var data = JSON.stringify({
      // proposal_id: item.proposal_id,
      user_address: userAccount,
    });

    var config = {
      method: "post",
      url: "https://u7ou8g3qz8.execute-api.us-east-1.amazonaws.com/submitProposalVote",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        // setVoted(response.data.vote_count)
        console.log("Vote Response", response.data);

        if (response.data == "User already voted") {
          console.log("You already voted for this proposal");
        }
        // update({ currentProposal: item });

        console.log("Context Updated");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <Container
        maxW="container.lg"
        mt={{
          base: "5px",
          md: "5px",
          sm: "20%",
        }}
      >
        <LoadProposals />

        {state.proposals.results &&
          state.proposals.results.map((item) => {
            return (
              <Container
                maxW="container.lg"
                backgroundColor="#FFFFFF"
                boxShadow="0px 20px 60px rgba(10, 21, 44, 0.04)"
                borderRadius="16px"
                width="97%"
                key={item.proposal_id}
                mt={{ base: '20px', md: '20px', lg:'20px', sm:'20px' }}
              >
                <Grid
                  templateColumns={{base:'repeat(2, 1fr)', lg:'repeat(2, 1fr)', md:'repeat(2, 1fr)',
                 sm:'repeat(1, 1fr)'}}
                  gap={{base:'4', md:'4', lg:'4', sm:'1'}}
                  paddingTop={{base: '55px', md: '55px', sm:'2px'}}
                  paddingLeft={{base: '8px', md: '8px', sm:'2px'}}
                  paddingRight={{base: '8px', md: '8px', sm:'2px'}}
pt={{base:'15px', md:'15px', sm:'5px'}}                >
                  <GridItem 
                  borderRight={{
                  base:'solid 1px #DBDEE7', 
                  md:'solid 1px #DBDEE7', 
                  sm:'solid 0px #DBDEE7', 
                }}
                  
                  >
                    {/* <HStack>
                  <BackArrow /> <BackButton />
                </HStack> */}
                    <Box paddingTop={{base: '45px', lg:'45px', md: '45px', sm:'2px'}}>
                      <Text
                        fontSize="18px"
                        fontWeight="bold"
                        color="#A152C"
                        lineHeight="48px"
                      >
                        {" "}
                        {item.title}
                      </Text>
                    </Box>

                    <Flex height="40px" paddingTop="50px" width='full' >
                      <HStack width='100%'>
                        <AvatarGroup
                          size="sm"
                          max={3}
                          spacing="-10px"
                          loading="lazy"
                        >
                          <Avatar src={Photo1} />
                          <Avatar src={Photo2} />
                          <Avatar name="G" />
                        </AvatarGroup>
                        <Text
                          fontSize="14px"
                          color="#6699FF"
                          fontWeight="400"
                          textDecoration="underline"
                        >
                          {item.vote_count == "1" ? (
                            <>{item.vote_count} vote </>
                          ) : (
                            <>{item.vote_count} votes </>
                          )}
                        </Text>

                          <VStack align='center'         
 >
                            <Box>
                            <Text
                                fontSize="14px"
                                color="#00000"
                                fontWeight="bold"
                              >
                                Votes submitted
                              </Text>
                            </Box>
                            <Box >
                              <UpArrow  width='30px'/>
                            </Box>
                            <Box>
                              <Text
                                fontSize="24px"
                                color="#00000"
                                fontWeight="bold"
                              >
                                {item.vote_count }
                              </Text>
                            </Box>
                            <Box >
                              <DownArrow />
                            </Box>
                          </VStack>
                      </HStack>
                      <Spacer />

                      {/* <HStack paddingRight="70px"> */}
                        {/* <Button 
                    paddingTop='6px'
                    paddingBottom='2'
                    paddingRight='22px'
                    paddingLeft='15px'
                    border='solid 1px #DFE2EA'
                    boxShadow='0px 20px 60px rgba(10, 21, 44, 0.04)' 
                    borderRadius='22px' 
                    verticalAlign='middle'
                    bg='white'

                    fontSize='14px'
                    _hover={{
                      background: "white",
                      color: "#6699FF",
                    }}
                    _focus={{boxShadow: "none",
                    background: "white",

                  }}

                      leftIcon={<Fire />}
                      >
                   Submit Vote
                    </Button> */}
                      {/* </HStack> */}
                    </Flex>

                    <HStack paddingTop="85px">
                      <Box>
                        <Text fontSize="15px" color="#0A152C" fontWeight="500">
                          Status
                        </Text>
                        <Text
                          paddingTop="10px"
                          fontSize="15px"
                          color="#4C5467"
                          fontWeight="400"
                        >
                          {" "}
                          {item.status}
                        </Text>
                      </Box>

                      <Box paddingLeft="20px">
                        <Text fontSize="15px" color="#0A152C" fontWeight="500">
                          Created
                        </Text>
                        <Stack
                          direction="row"
                          paddingTop="10px"
                          verticalAlign="middle"
                        >
                          <SimpleClock />
                          <Text
                            color="#4C5467"
                            paddingLeft="0px"
                            fontWeight="500"
                            fontSize="13px"
                          >
                            2019-12-06, 01:27
                          </Text>
                        </Stack>
                      </Box>
                    </HStack>

                    <Box paddingTop={45}>
                      {item.status === "OPEN" ? (
                        <SimpleGrid minChildWidth="160px" spacing="40px">
                          <Box height="80px">
                            <Heading
                              color="rgba(10, 23, 60, 0.68)"
                              fontSize="18px"
                            >
                              Are you hyped for this?
                            </Heading>
                          </Box>
                          <Box height="80px">
                            <Center>
                              {/* <Heart color={item.voter_adresses} onClick={submitVote} /> */}
                              <Heart color="red" onClick={submitVote} />
                            </Center>
                          </Box>
                          <Box height="80px">
                            <Heading
                              color="rgba(127, 90, 213, 0.8)"
                              fontSize="26px"
                              fontWeight="extrabold"
                            >
                              {item.vote_count}{" "}
                              {item.vote_count == "1" ? (
                                <>Vote </>
                              ) : (
                                <>Votes </>
                              )}
                            </Heading>
                          </Box>
                        </SimpleGrid>
                      ) : (
                        <>
                          {/* <Heading fontSize="14px">
                        Status: {item.status}
                      </Heading> */}
                        </>
                      )}
                    </Box>
                  </GridItem>
                  <GridItem pl={{base:'6px', lg:'6px', md: '6px', sm:'0px'}}>
                    <Box pt={{base: '5px', lg:'5px', md:'5px', sm:'0px'}} >
                      {" "}
                      <Text fontSize="13px" color="rgba(10, 23, 60, 0.68)">
                        {item.description}
                      </Text>
                    </Box>
                  </GridItem>
                </Grid>

                {/* </Box> */}
                {/* <SubmitVoteButton /> */}
              </Container>
            );
          })}

        {/* <Grid
          // templateColumns="repeat(3, 1fr)"

          templateColumns={{
            base: "repeat(3, 1fr)",
            md: "repeat(3, 1fr)",
            sm: "repeat(1, 1fr)",
          }}
          gap={4}
          paddingTop={5}
          paddingLeft={2}
          paddingRight={4}
        >
          {state.proposals.results &&
            state.proposals.results.map((item) => {
              return (
                <GridItem key={item.proposal_id}>
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
                    <Text align="right" fontSize="12px">
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
                    <HStack m={[2, 3]} height="40px" paddingTop="10px">
                      <AvatarGroup
                        size="xs"
                        max={3}
                        spacing="-10px"
                        loading="lazy"
                      >
                        <Avatar src={Photo1} />
                        <Avatar src={Photo2} />
                        <Avatar name="G" />
                      </AvatarGroup>
                      <Text fontSize="10px" color="#6699FF" fontWeight="700">
                        {item.voote_count == "1" ? (
                          <>{item.vote_count} Vote </>
                        ) : (
                          <>{item.vote_count} Votes </>
                        )}
                      </Text>
                    </HStack>

                    <Box m={[2, 3]} paddingTop="5px">
                      <Box
                        as="button"
                        fontSize="10px"
                        fontWeight="600"
                        width="100%"
                        borderRadius="100"
                        height="30px"
                        color="#0A152C"
                        border="1px solid #DBDEE7 "
                        bg="#FFF"
                        _hover={{
                          bg: "linear-gradient(90deg, #6699FF 0%, #FF3366 100%)",
                          border: "0px",
                          color: "#FFFF",
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
                        onClick={() => handleClick(item)}
                      >
                        View Details
                      </Box>
                    </Box>
                  </Box>
                </GridItem>
              );
            })}
        </Grid> */}
      </Container>

      <Box ref={finalRef} tabIndex={-1} aria-label="Vote This NFT"></Box>
    </>
  );
};

export default ProposalList;
