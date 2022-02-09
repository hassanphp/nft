import { React, useState, Component, useContext, useEffect } from "react";
import axios from 'axios';
import {
  Box,
  Text,
  Center,
  VStack,
  Heading,
  HStack,
  Container,
  Flex,
  Grid,
  GridItem,
  SimpleGrid,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import BackButton from "../button/BackButton";
import SubmitVoteButton from "../button/SubmitVoteButton";
import Heart from "../component/Heart";
const ViewProposal = () => {
  let navigate = useNavigate();
  const { state, update } = useContext(UserContext);
  const [voted, setVoted] = useState(false)

  useEffect(() => {
      console.log("Proposal Data", state.currentProposal)

    if (!state.currentProposal) {
      navigate(`/`);
    }
  }, []);
  const submitVote = async (event) => {
    event.preventDefault();
    // const { title, description } = formValue;
    // const userAccount =  localStorage.getItem('accountId');
    // const json = JSON.stringify({
    //      proposal_id: state.currentProposal.proposal_id,
    //      user_id: userAccount
    // });
    
    // const response = await axios.post('https://u7ou8g3qz8.execute-api.us-east-1.amazonaws.com/submitProposalVote', {
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },json
    // });
    // console.log("response", response);
    // navigate('/');
    const userAccount =  localStorage.getItem('accountId');

    var data = JSON.stringify({
        "proposal_id": state.currentProposal.proposal_id,
        "user_address": userAccount
      });
      
      var config = {
        method: 'post',
        url: 'https://u7ou8g3qz8.execute-api.us-east-1.amazonaws.com/submitProposalVote',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {
        // setVoted(response.data.vote_count)
        console.log("Vote Response", response.data);
        
        if(response.data == 'User already voted'){
            console.log("You already voted for this proposal")       
        
        }
        // update({ currentProposal: state.currentProposal });
        
        console.log("Context Updated");

      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <>
      {state.currentProposal && (
        <>
          <BackButton />
          <VStack width="800" >

          <Container maxW="container.lg">
              <Box m={[2, 3]}
                boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                borderRadius="20px 20px 0px 0px"
                bgGradient="linear(to-r,  #13547A 0%, #2DAFA1 100%)"
              >
                <Center>
                  <Heading
                    color="white"
                    p="8"
                    alignItems="center"
                    fontSize="22px"
                  >
                    ➕ Add 1 Basis Point Fee Tier
                  </Heading>
                </Center>
                <Box
                  bg="#F7F7F7"
                  p="10"

                >
                  {/* <Text>Time: {state.currentProposal.time_created}</Text> */}
                  {/* <Text>Status: {state.currentProposal.status}</Text> */}
                  <Text fontSize='13px' color="rgba(10, 23, 60, 0.68)">
                    {" "}
                    {state.currentProposal.title}
                  </Text>
                  <Text fontSize='13px' color="rgba(10, 23, 60, 0.68)">
                    {state.currentProposal.description}
                  </Text>
                  <Container maxW="lg.container" paddingTop="20">
                      {state.currentProposal.status === 'OPEN' ? (
                        <SimpleGrid minChildWidth="160px" spacing="40px">
                      <Box height="80px">
                        <Heading color="rgba(10, 23, 60, 0.68)" fontSize="18px">
                          Are you hyped for this?
                        </Heading>
                      </Box>
                      <Box height="80px">
                        <Center>
                          {/* <Heart color={state.currentProposal.voter_adresses} onClick={submitVote} /> */}
                          <Heart color='red' onClick={submitVote} />

                        </Center>
                      </Box>
                      <Box height="80px">
                        <Heading
                          color="rgba(127, 90, 213, 0.8)"
                          fontSize="26px"
                          fontWeight="extrabold"
                        >
                            
                          {state.currentProposal.vote_count} {state.currentProposal.vote_count == '1' ? (
                      <>Vote </>
                    ) : (<>Votes </>)}
                        </Heading>
                      </Box>
                    </SimpleGrid>
                      ) : (
<><Heading fontSize='14px'>Status: {state.currentProposal.status}</Heading></>
                      )}
                    
                  </Container>
                </Box>
              </Box>
              <SubmitVoteButton />
           
          </Container>
          </VStack>
        </>
      )}
    </>
  );
};

export default ViewProposal;
