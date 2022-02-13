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
} from "@chakra-ui/react";
import Clock from "../component/Clock";

export default function LandingContent() {
  return (
    <Container
      centerContent
      maxW="container.lg"
      // bgGradient="linear(to-r,  #13547A 0%, #2DAFA1 100%)  "
      // borderRadius="20px"
      color="white"
      height="130px"
    >
      <Box  display={{ md: "flex" }} width='100%'     alignItems="left" justify="left">
        <Box flexShrink={0} 
   
        >
          <Heading
            size={{ base: "lg", md: "md", lg: "lg", sm: "sm" }}
            bgGradient="linear-gradient(160deg, #CB5EEE 0%, #4BE1EC 90%);
                color: #9D8EEE;"
            bgClip="text"
            fontWeight="extrabold"
            fontSize={{ base: "28px", md: "28px", lg: "28px", sm: "24px" }}
            p="1"
          >
            Decide the future
          </Heading>
        </Box>

        <Box flexShrink={0}>
          <Heading
            size={{ base: "lg", md: "md", lg: "lg", sm: "sm" }}
            fontWeight="extrabold"
            color="#0A152C"
            fontSize={{ base: "28px", md: "28px", lg: "28px", sm: "24px" }}
            p="1"
          >
            of this community
          </Heading>
        </Box>

        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
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
        </Box>
      </Box>

      <Box display={{ md: "flex", lg: "flex" }}  width='100%'  >
        <Box flexShrink={0} align='right'>
        <Text color="#4C5467" fontSize={"14px"} align='right'>
              Cast a vote for your favorite proposal once a week.
              <br />
              We deploy the most popular idea every Monday!
            </Text>
        </Box>

       

        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }} direction='left' alignItems="right" justify="right">
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
        </Box>
      </Box>

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
  );
}
