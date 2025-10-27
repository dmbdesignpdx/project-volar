// Theris
import {
  Stack,
  Box,
} from "@chakra-ui/react";

// Ours
import { Link } from "./link";


export function Nav() {
  return (
    <Box
      bgColor="gray.50"
      borderRight="1px solid {colors.gray.300}"
      asChild
    >
      <Stack as="nav">
        <ul>
          <Box
            as="li"
          >
            <Link
              label="Home"
              href="/"
            />
          </Box>
          <li>
            <Link
              label="More"
              href="/filter"
            />
          </li>
        </ul>
      </Stack>
    </Box>
  );
}
