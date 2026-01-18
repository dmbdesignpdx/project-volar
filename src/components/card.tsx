// Theirs
import {
  Box,
  Text,
  Badge,
  Tag,
  Wrap,
  Card as ChakraCard,
} from "@chakra-ui/react";
import { type PropsWithoutRef } from "react";

// Ours
import type { Product } from "@/types/main";
import { Label } from "@/constants";


interface CardProps extends PropsWithoutRef<Product> {
  children?: never;
}


export function Card(props: CardProps) {
  return (
    <ChakraCard.Root
      as="article"
      bgColor="gray.50"
      opacity={props.inStock ? 1 : 0.666}
      pointerEvents={props.inStock ? "auto" : "none"}
      _hover={{ boxShadow: "md" }}
    >
      <ChakraCard.Header>{props.brand}</ChakraCard.Header>
      <ChakraCard.Body>
        <ChakraCard.Title>{props.name}</ChakraCard.Title>
        <ChakraCard.Description>
          {props.color} {props.material} {props.product}
        </ChakraCard.Description>
        <Box
          asChild
          marginBlockStart={2}
          marginBlockEnd={4}
        >
          <Wrap>
            {props.tags.map(item => (
              <Tag.Root key={props.id + item.toLowerCase()}>
                <Tag.Label>{item}</Tag.Label>
              </Tag.Root>
            ))}
          </Wrap>
        </Box>
        <Box
          asChild
          marginBlockStart="auto"
        >
          <Text textStyle="2xl">${props.price}</Text>
        </Box>
        {!props.inStock && (
          <Badge
            colorPalette="red"
            pos="absolute"
            top={2}
            right={2}
          >
            {Label.SOLD_OUT}
          </Badge>
        )}
      </ChakraCard.Body>
    </ChakraCard.Root>
  );
}
