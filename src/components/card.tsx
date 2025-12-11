// Theirs
import {
  Box,
  Text,
  Badge,
  Tag,
  Wrap,
  Card as ChakraCard,
} from "@chakra-ui/react";

// Ours
import type { Product } from "@/types/main";
import { Label } from "@/constants";


export function Card({ ...data }: Product) {
  return (
    <ChakraCard.Root
      as="article"
      bgColor="gray.50"
      opacity={data.inStock ? 1 : 0.666}
      pointerEvents={data.inStock ? "auto" : "none"}
      _hover={{ boxShadow: "md" }}
    >
      <ChakraCard.Header>{data.brand}</ChakraCard.Header>
      <ChakraCard.Body>
        <ChakraCard.Title>{data.name}</ChakraCard.Title>
        <ChakraCard.Description>{data.color} {data.material} {data.product}</ChakraCard.Description>
        <Box
          asChild
          marginBlockStart={2}
          marginBlockEnd={4}
        >
          <Wrap>
            {data.tags.map(item => (
              <Tag.Root
                key={data.id + item.toLowerCase()}
              >
                <Tag.Label>{item}</Tag.Label>
              </Tag.Root>
            ))}
          </Wrap>
        </Box>
        <Box
          asChild
          marginBlockStart="auto"
        >
          <Text textStyle="2xl">${data.price}</Text>
        </Box>
        {!data.inStock && (
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
