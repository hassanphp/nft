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
      <LoadProposals />

      {state.proposals.results &&
        state.proposals.results.map((item) => {
          return (
            <Grid
            templateColumns="repeat(2, 1fr)"
              // templateColumns={{
              //   md: "repeat(2, 1fr)",
              //   sm: "repeat(1, 1fr)",
              //   xsm: "repeat(1, 1fr)",
              // }}
              gap={{ base: "4", md: "4", lg: "4", sm: "1" }}
              padding={{ base: "20px", md: "20px", sm: "29px" }}
              marginTop={{ base: "29px", md: "29px", sm: "29px" }}
              // paddingLeft={{ base: "8px", md: "8px", sm: "2px" }}
              // paddingRight={{ base: "8px", md: "8px", sm: "2px" }}
              backgroundColor="#FFFFFF"
              boxShadow="0px 20px 60px rgba(10, 21, 44, 0.04)"
              borderRadius="16px"
              width="98%"
              key={item.proposal_id}
            >
              <GridItem
                borderRight= "solid 1px #DBDEE7"
              
               
              >
                {/* <HStack>
                  <BackArrow /> <BackButton />
                </HStack> */}
                <Box
                  paddingTop={{
                    base: "45px",
                    lg: "45px",
                    md: "45px",
                    sm: "2px",
                  }}
                >
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

                <Stack direction={["column", "row"]} width="auto">
                  <HStack width="100%">
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
                    <Box width="60%">
                      <VStack>
                        <Box>
                          <Text
                            fontSize="14px"
                            color="#00000"
                            fontWeight="bold"
                          >
                            Votes submitted
                          </Text>
                        </Box>
                        <Box>
                          <UpArrow width="30px" />
                        </Box>
                        <Box>
                          <Text
                            fontSize="24px"
                            color="#00000"
                            fontWeight="bold"
                          >
                            {item.vote_count}
                          </Text>
                        </Box>
                        <Box>
                          <DownArrow />
                        </Box>
                      </VStack>
                    </Box>
                  </HStack>
                  <Spacer />
                </Stack>

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
                        <Heading color="rgba(10, 23, 60, 0.68)" fontSize="18px">
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
                          {item.vote_count == "1" ? <>Vote </> : <>Votes </>}
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
              <GridItem pl={{ base: "6px", lg: "6px", md: "6px", sm: "0px" }}>
                <Box pt={{ base: "5px", lg: "5px", md: "5px", sm: "0px" }}>
                  {" "}
                  <Text fontSize="13px" color="rgba(10, 23, 60, 0.68)">
                    {item.description}
                  </Text>
                </Box>
              </GridItem>
            </Grid>
          );
        })}

      <Box ref={finalRef} tabIndex={-1} aria-label="Vote This NFT"></Box>
    </>
  );
};

export default ProposalList;
