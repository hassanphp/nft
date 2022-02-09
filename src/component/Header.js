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
  Container
} from "@chakra-ui/react";
import Logo from "./Logo";

export default function Header() {
  return (
    <Container maxW="container.lg" centerContent>
      <Grid templateColumns="repeat(5, 1fr)" gap={4} paddingTop={5}>
        <GridItem colSpan={2} colStart={3} colEnd={4} h="10">
          {" "}
          <Box m={[2, 3]}>
            <Stack direction="row">
              <Logo />
              <Heading
                size="lg"
                bgGradient="linear-gradient(135deg, #4BE1EC  0%, #CB5EEE 100%);
            color: #9D8EEE;"
                bgClip="text"
                fontWeight="extrabold"
              >
                buildspace
              </Heading>
            </Stack>
          </Box>{" "}
        </GridItem>
        <GridItem colStart={5} colEnd={6} h="10">
          <Box m={[2, 3]}>
            <Button bg="#E2E8F0" color="#1A202C">
              Connect Wallet
            </Button>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
}
