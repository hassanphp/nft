import React from "react";
import {
  Grid,
  GridItem,
  Flex,
  Button,
  HStack,
  Heading,
  Stack,
  Box,
  Text,
  Container,
  VStack,
  Center,
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
      <Grid templateColumns="repeat(5, 1fr)" gap={4}>
        <GridItem colSpan={3} h="30">
          <Box m={[2, 3]}>
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
        <GridItem colStart={5} colEnd={6} h="30">
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
      </Grid>
    </Container>
  );
}
