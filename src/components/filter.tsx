"use client";

// Theirs
import { useActionState } from "react";
import {
  Input,
  Button,
  Flex,
  SimpleGrid,
  Box,
  Text,
  Stack,
} from "@chakra-ui/react";
import axios from "axios";

// Ours
import { type ProductBody, type ProductResponse } from "@/types/main";
import { Card } from "./card";
import { Skeleton } from "./skeleton";
import { SkeletonIds, Label } from "@/constants";

// Data
import source from "../data/products.json";

// Local
const inputName = "filter";
const columnBreaks = [
  1,
  null,
  2,
  3,
];


async function formAction(state: ProductResponse, formData: FormData) {
  const body = formData.get(inputName);

  if (typeof body !== "string") return null;

  try {
    const response = await axios.post<ProductBody>("/api/filter", { body });

    return response.data;
  } catch (error) {
    console.error("Error fetching AI response:", error);

    return state;
  }
}

export function Filter() {
  const [
    data,
    action,
    isPending,
  ] = useActionState(formAction, null);

  const items = !data
    ? source
    : source.filter(item => {
      const price = parseFloat(item.price);

      if (price < data.minPrice || price > data.maxPrice) return false;

      return (
        (data.brandName.length === 0 || data.brandName.includes(item.brand))
        && (data.color.length === 0 || data.color.includes(item.color))
        && (data.productType.length === 0 || data.productType.includes(item.product))
        && (data.material.length === 0 || data.material.includes(item.material))
        && (data.tags.length === 0 || data.tags.some(tag => item.tags.includes(tag)))
      );
    });

  return (
    <Stack>
      <Flex
        asChild
        gap="4"
      >
        <form action={action}>
          <Input
            type="text"
            name={inputName}
            placeholder={Label.INPUT}
            disabled={false}
            autoComplete="off"
          />
          <Button
            type="submit"
            loading={isPending}
          >
            {Label.FILTER}
          </Button>
          <Button
            type="submit"
            formAction={() => void action(new FormData())}
            disabled={!data}
          >
            {Label.RESET}
          </Button>
        </form>
      </Flex>
      <Box marginBlockStart={4}>
        <Text>
          {Label.COUNT}
          {": "}
          <b>{items.length}</b>
        </Text>
      </Box>
      <Box
        asChild
        marginBlockStart={4}
      >
        <SimpleGrid
          gap="4"
          columns={columnBreaks}
        >
          {isPending
            ? SkeletonIds.map(item => <Skeleton key={item} />)
            : items.map(item => (
              <Card
                key={item.id}
                {...item}
              />
            ))}
        </SimpleGrid>
      </Box>
    </Stack>
  );
}
