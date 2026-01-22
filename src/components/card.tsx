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


export function Card({
  id,
  inStock,
  name,
  color,
  material,
  price,
  product,
  tags,
  brand,
}: CardProps) {
  return (
    <ChakraCard.Root
      as="article"
      bgColor="gray.50"
      opacity={inStock ? 1 : 0.666}
      pointerEvents={inStock ? "auto" : "none"}
      _hover={{ boxShadow: "md" }}
    >
      <ChakraCard.Header>{brand}</ChakraCard.Header>
      <ChakraCard.Body>
        <ChakraCard.Title>{name}</ChakraCard.Title>
        <ChakraCard.Description>
          {color} {material} {product}
        </ChakraCard.Description>
        <Box
          asChild
          marginBlockStart={2}
          marginBlockEnd={4}
        >
          <Wrap>
            {tags.map(item => (
              <Tag.Root key={item.toLowerCase() + id}>
                <Tag.Label>{item}</Tag.Label>
              </Tag.Root>
            ))}
          </Wrap>
        </Box>
        <Box
          asChild
          marginBlockStart="auto"
        >
          <Text textStyle="2xl">${price}</Text>
        </Box>
        {!inStock && (
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
