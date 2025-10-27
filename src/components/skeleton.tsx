// Theirs
import { Card, SkeletonText } from "@chakra-ui/react";


export function Skeleton() {
  return (
    <Card.Root>
      <Card.Body>
        <SkeletonText
          inlineSize="2rem"
          noOfLines={1}
          marginBlockEnd={8}
        />
        <SkeletonText
          noOfLines={4}
          gap={4}
        />
      </Card.Body>
    </Card.Root>
  );
}
