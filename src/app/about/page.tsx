import { type Metadata } from "next";
import { Container, Heading, Text } from "@chakra-ui/react";

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
        {Content.ABOUT_HEADING}
      </Heading>
      <Text>{Content.ABOUT_COPY}</Text>
    </Container>
  );
}
