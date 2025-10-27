import { Filter } from "@/components/filter";
import { Container, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container maxW="4xl">
      <Heading
        as="h2"
        paddingBlock="8"
        fontSize="2xl"
      >
        Filter Using Natural Language
      </Heading>
      <Filter />
    </Container>
  );
}
