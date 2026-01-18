"use client";

// Theirs
import { useActionState } from "react";
import {
  Box,
  Text,
  Stack,
} from "@chakra-ui/react";

// Ours
import { formAction } from "@/actions/filter";
import { Result } from "@/components/result";
import { Input } from "@/components/input";
import { Label } from "@/constants";

// Data
import source from "../data/products.json";


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
      <Input
        data={data}
        isPending={isPending}
        action={action}
      />
      {/* Status */}
      <Box marginBlockStart={4}>
        <Text
          aria-live="polite"
          aria-atomic="true"
        >
          {Label.COUNT}
          {": "}
          <b>{items.length}</b>
        </Text>
      </Box>
      <Box marginBlockStart={4}>
        <Result
          items={items}
          isPending={isPending}
        />
      </Box>
    </Stack>
  );
}
