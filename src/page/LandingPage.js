import React from "react";
import {
  Container,
  useBreakpointValue,
  VStack,
  Divider,
} from "@chakra-ui/react";
import LandingContent from "../component/LandingContent";
import ProposalList from "../component/ProposalList";

{
  /* <>BISMILLAH</> */
}
const LandingPage = (props) => {
  const colSpan = useBreakpointValue({ base: 2, md: 1 });

  return (
    <>
      <VStack paddingTop={25}>
        <Container maxW="container.lg" centerContent>
          <LandingContent />
        </Container>
        <Container maxW="container.lg" centerContent>
          {/* <Divider paddingTop="10px" paddingBottom="10px" /> */}
          <ProposalList paddingTop="15px" />
        </Container>
      </VStack>
    </>
  );
};

export default LandingPage;
