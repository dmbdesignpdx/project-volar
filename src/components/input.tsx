"use client";

// Theirs
import { useState } from "react";
import {
  Input as ChakraInput,
  Button,
  Flex,
} from "@chakra-ui/react";

// Ours
import {
  Label,
  Id,
  Name,
} from "@/constants";
import { ProductBody } from "@/types/main";


interface InputProps {
  action: (formData: FormData) => void;
  data: ProductBody | null;
  isPending: boolean;
}


export function Input({
  action,
  data,
  isPending,
}: InputProps) {
  const [input, setInput] = useState("");

  return (
    <Flex
      asChild
      gap="4"
    >
      <form action={action}>
        <ChakraInput
          type="text"
          name={Name.FILTER_INPUT}
          placeholder={Label.INPUT}
          disabled={false}
          autoComplete="off"
          value={input}
          onChange={e => setInput(e.currentTarget.value)}
          aria-controls={Id.FILTER_LIST}
        />
        <Button
          type="submit"
          loading={isPending}
          disabled={!input}
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
  );
}
