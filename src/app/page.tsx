import { type Metadata } from "next";
import { Filter } from "@/components/filter";
import { Container, Heading } from "@chakra-ui/react";

import { Meta, Content } from "@/constants";


export const metadata: Metadata = {
  title: Meta.TITLE + " | Filter Demo",
};


export default function Home() {
  return (
    <Container maxW="4xl">
      <Heading
        as="h2"
        paddingBlock="8"
        fontSize="2xl"
      >
        {Content.FILTER_HEADING}
      </Heading>
      <Filter />
    </Container>
  );
}
