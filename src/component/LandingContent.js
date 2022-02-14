import React from "react";
import {
  Grid,
  GridItem,
  HStack,
  Heading,
  Stack,
  Box,
  Text,
  Container,
  VStack,
  Center,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import Clock from "../component/Clock";

export default function LandingContent() {
  return (
    <>
    <Container
      maxW='container.lg'
      color="white"
      height="130px"
      pl={{ sm:'12px'}}
     
    >

<Stack direction={['column', 'row']} 
  width='auto'
  >
        <Box >
          <Heading
            size={{ base: "lg", md: "md", lg: "lg", sm: "sm" }}
            bgGradient="linear-gradient(160deg, #CB5EEE 0%, #4BE1EC 90%);
                color: #9D8EEE;"
            bgClip="text"
            fontWeight="extrabold"
            fontSize={{ base: "28px", md: "28px", lg: "28px", sm: "24px" }}
            p={{base: '1px', md:'1px', sm:'0px'}}

          >
            Decide the future
          </Heading>
        </Box>

        <Box >
          <Heading
            size={{ base: "lg", md: "md", lg: "lg", sm: "sm" }}
            fontWeight="extrabold"
            color="#0A152C"
            fontSize={{ base: "28px", md: "28px", lg: "28px", sm: "24px" }}
            p={{base: '1px', md:'1px', sm:'0px'}}
          >
            of this community
          </Heading>
        </Box>
        <Spacer display={{sm: 'none'}} mt={{ base: 4, md: 0 }} ml={{ md: 20, lg: 20}}></Spacer>
        <Box width='40%' flex='1' alignContent="right"
 mt={{ base: 4, md: 0, sm: 2 }} ml={{ md: 6, sm: 2 }}   ></Box>
        <Box width='40%' flex='1' alignContent="right"
 mt={{ base: 4, md: 0, sm: 2 }} ml={{ md: 6, sm: 2 }}   >
          <Box
            alignSelf="right"
            width="200px"
            bg="#FFF7EB"
            borderRadius="10px"
            border="1px dashed #FFA114"
            alignContent="center"
          >
            <Center color="#3E3931" fontSize="12px" padding="8px">
              Please connect your wallet. <br />
              Only NFT holders can vote.
            </Center>
          </Box>
        </Box>
      </Stack>

      <Stack direction={['column', 'row']} spacing='24px'
  width='auto'
  >
 
 

  <Box  
     width='75%'
         >
          <Text color="#4C5467"         overflow="hidden"
 fontSize={{base: '14px', md:'14px', sm:'10px'}} 
          
          align={{base:'left', md:'left', sm:'left'}} >
            {/* Cast a vote for your favorite proposal once a week.
            <br />
            We deploy the most popular idea every Monday! */}
            his is the place to vote on your favorite proposals, get funded, and reach world domination. The more NFTs you have, the more influence you got here (1 NFT = 5 points). When the countdown ends, we
            launch the most hype idea and replenish your voting power for the next cycle.
          </Text>
        </Box>
  

        <Stack
            direction="row"
            paddingTop="15px"
            verticalAlign="middle"
            alignSelf="right"
            // ml="390px"
            ml={{base: '390px', md:'390px', sm:'10%'}}
          >
            <Clock />
            <Text
              color="#6699FF"
              paddingLeft="5px"
              fontWeight="bold"
              fontSize="12px"
              paddingTop="5px"
              width="200px"
            >
              5d 23h 17m 53s
            </Text>
          </Stack>
          <Stack
            direction="row"
            paddingTop="15px"
            verticalAlign="middle"
            alignSelf="right"
            // ml="390px"
            ml={{base: '390px', md:'390px', sm:'10%'}}
          >
            <Text
              color="#6699FF"
              paddingLeft="5px"
              fontWeight="bold"
              fontSize="12px"
              paddingTop="5px"
              width="200px"
            >
              5d 23h 17m 53s
            </Text>
          </Stack>



          
</Stack>
 

      


      {/* <Grid
        // templateColumns='repeat(3, 1fr)'
        templateColumns={{
          base: "repeat(6, 1fr)",
          md: "repeat(5, 1fr)",
          sm: "repeat(1, 1fr)",
        }}

        // gap={6}
      >
        <GridItem>
          <Flex width="600px">
            <Heading
              size="md"
              bgGradient="linear-gradient(160deg, #CB5EEE 0%, #4BE1EC 90%);
            color: #9D8EEE;"
              bgClip="text"
              fontWeight="extrabold"
              // color="#0A152C"
              fontSize="28px"
              p="1"
            >
              Decide the future
            </Heading>
            <Heading
              size="md"
              fontWeight="extrabold"
              color="#0A152C"
              fontSize="28px"
              p="1"
            >
              of this community
            </Heading>
          </Flex>
        </GridItem>

        <GridItem w="100%">
          <VStack>
            <Box
              width="200px"
              bg="#FFF7EB"
              borderRadius="10px"
              border="1px dashed #FFA114"
              alignContent="center"
            >
              <Center color="#3E3931" fontSize="12px" padding="8px">
                Please connect your wallet. <br />
                Only NFT holders can vote.
              </Center>
            </Box>
          </VStack>
        </GridItem>
      </Grid>

      <Grid
        // templateColumns='repeat(3, 1fr)'
        templateColumns={{
          base: "repeat(6, 1fr)",
          md: "repeat(5, 1fr)",
          sm: "repeat(1, 1fr)",
        }}
        gap={6}
      >
        <GridItem>
          <Flex width="600px">
            <Text color="#4C5467" fontSize={"14px"}>
              Cast a vote for your favorite proposal once a week.
              <br />
              We deploy the most popular idea every Monday!
            </Text>
          </Flex>
        </GridItem>

        <GridItem w="100%">
          <Center>
            <Stack direction="row" paddingTop="15px" verticalAlign="middle">
              <Clock />
              <Text
                color="#6699FF"
                paddingLeft="5px"
                fontWeight="bold"
                fontSize="12px"
                paddingTop="5px"
                width="200px"
              >
                5d 23h 17m 53s
              </Text>
            </Stack>
          </Center>
        </GridItem>
      </Grid> */}

      {/* <Grid 
      templateColumns="repeat(2, 1fr)"
        // templateColumns={{ base: "repeat(5, 1fr)", md: "repeat(2, 1fr)", sm: "repeat(6, 1fr)" }}
      
      gap={4}>
        <GridItem  h="30">
          <Box m={[2, 3]} >
            <HStack>
              <Heading
                size="md"
                bgGradient="linear-gradient(160deg, #CB5EEE 0%, #4BE1EC 90%);
            color: #9D8EEE;"
                bgClip="text"
                fontWeight="extrabold"
                // color="#0A152C"
                fontSize="28px"
              >
                Decide the future
              </Heading>
              <Heading
                size="md"
                fontWeight="extrabold"
                color="#0A152C"
                fontSize="28px"
              >
                of this community
              </Heading>
            </HStack>

            <Text color="#4C5467" fontSize={"14px"} paddingTop="35px">
              Cast a vote for your favorite proposal once a week.
              <br />
              We deploy the most popular idea every Monday!
            </Text>
          </Box>{" "}
        </GridItem>
        <GridItem  h="30">
          <VStack>
            <Box
              width="200px"
              bg="#FFF7EB"
              borderRadius="10px"
              border="1px dashed #FFA114"
              alignContent="center"
            >
              <Center color="#3E3931" fontSize="12px" padding="8px">
                Please connect your wallet. <br />
                Only NFT holders can vote.
              </Center>
            </Box>
          </VStack>
          <Center>
            <Stack direction="row" paddingTop="25px" verticalAlign='middle'>
              <Clock />
              <Text
                color="#6699FF"
                paddingLeft="5px"
                fontWeight="bold"
                fontSize="12px"
                paddingTop='5px'
              >
                5d 23h 17m 53s
              </Text>
            </Stack>
          </Center>
        </GridItem>
      </Grid> */}
    </Container>
          <Box display='none'  marginBottom={{base: '29px', md: '29px', sm:'29px'}} height='300px'></Box>
</>
  );
}
