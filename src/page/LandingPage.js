import React from "react";
import {
  Container,
  useBreakpointValue,
  VStack,
  Divider,
  Spacer,
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
          <Divider paddingTop="10px" paddingBottom="10px" />
        </Container>

        <Container maxW="container.lg"   centerContent>
          <ProposalList  marginTop={{base: '29px', md: '29px', sm:'29px'}} />
        </Container>
      </VStack>
    </>
  );
};

export default LandingPage;
