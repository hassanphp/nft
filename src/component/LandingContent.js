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
  Container
} from "@chakra-ui/react";
import Logo from "../component/Logo";

export default function LandingContent() {
  return (
    <Container
    centerContent
    maxW="container.lg"
    bgGradient="linear(to-r,  #13547A 0%, #2DAFA1 100%)  "
    borderRadius="20px"
    padding="30px"
    color="white"
    height='130px'
  >
    <Grid templateColumns="repeat(5, 1fr)" gap={4} >
      <GridItem colSpan={3}  h="30" >
        {" "}
        <Box m={[2, 3]}>
        <Text>
                Buildspace NFT holders pick their favorite proposal every week.
                We activate the most popular idea.
              </Text>
        </Box>{" "}
      </GridItem>
      <GridItem colStart={5} colEnd={6} h="30">
      <Box m={[2, 3]}> 
      <Text>⏰ 5d 23h 17m 53s</Text>

      </Box>
      </GridItem>
    </Grid>
    </Container>
  );
}
