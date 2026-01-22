// Theirs
import { type ReactNode } from "react";
import {
  SimpleGrid,
  Text,
  Center,
} from "@chakra-ui/react";

// Ours
import { Card } from "@/components/card";
import { Skeleton } from "@/components/skeleton";
import {
  SkeletonIds,
  Id,
} from "@/constants";
import { isDefined } from "@/lib/isDefined";

// Data
import { Product } from "@/types/main";

// Local Vars
const columnBreaks = [
  1,
  null,
  2,
  3,
];


interface ResultProps {
  items: Product[] | null;
  isPending: boolean;
  children?: never;
}


export function Result({ items, isPending }: ResultProps) {
  const exists = isDefined(items);
  const hasItems = Boolean(items?.length);

  if (!exists) return null;

  if (!hasItems) return (
    <Center minBlockSize={96}>
      <Text>No results found. 🥺</Text>
    </Center>
  );

  let content: ReactNode = null;

  switch (true) {
    case isPending: {
      content = (
        <>
          <Text srOnly>Loading...</Text>
          {SkeletonIds.map(item => <Skeleton key={item} />)}
        </>
      );
      break;
    }

    case !isPending && hasItems: {
      content = items!.map(item => (
        <Card
          key={item.id}
          {...item}
        />
      ));
      break;
    }

    default:
      return null;
  }

  return (
    <SimpleGrid
      id={Id.FILTER_LIST}
      gap="4"
      columns={columnBreaks}
    >
      {content}
    </SimpleGrid>
  );
}
