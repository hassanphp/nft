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

          <Container maxW="container.lg" backgroundColor='#FFFFFF' boxShadow="0px 20px 60px rgba(10, 21, 44, 0.04)"
                  borderRadius="16px" width='73.5%' >
              {/* <Box m={[2, 3]}
                boxShadow="0px 20px 60px rgba(10, 21, 44, 0.04)"
                borderRadius="16px"
                // bgGradient="linear(to-r,  #13547A 0%, #2DAFA1 100%)"
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
                </Center> */}
 <Grid
          templateColumns="repeat(2, 1fr)"
          gap={4}
          paddingTop={55}
          paddingLeft={8}
          paddingRight={8}
          paddingBottom={15}

        >
        
        <GridItem  borderRight='solid 1px #DBDEE7' >
        <Box paddingTop={45} >
                  {/* <Text>Time: {state.currentProposal.time_created}</Text> */}
                  {/* <Text>Status: {state.currentProposal.status}</Text> */}
                  <Text fontSize='18px' fontWeight='bold' color="#A152C" lineHeight='48px'>
                    {" "}
                    {state.currentProposal.title}
                  </Text>
                 
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
                    
                </Box>
                  </GridItem>
                  <GridItem  paddingLeft={6} >
                    <Box paddingTop='5px'> <Text fontSize='13px' color="rgba(10, 23, 60, 0.68)">
                    {state.currentProposal.description}
                  </Text></Box>
                  </GridItem>
                  </Grid>
         

          

             
                
              {/* </Box> */}
              <SubmitVoteButton />
           
          </Container>
        </>
      )}
    </>
  );
};

export default ViewProposal;
