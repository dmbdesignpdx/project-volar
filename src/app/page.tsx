// Theirs
import { type Metadata } from "next";
import { Container, Heading } from "@chakra-ui/react";

// Ours
import { Filter } from "@/components/filter";
import { Meta, Content } from "@/constants";


export const metadata: Metadata = {
  title: Meta.Page.Filter.TITLE,
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
