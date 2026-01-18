// Theris
import {
  Stack,
  Box,
} from "@chakra-ui/react";

// Ours
import { Link } from "@/components/link";
import { LINKS } from "@/constants";


export function Nav() {
  return (
    <Box
      bgColor="gray.50"
      borderRight="1px solid {colors.gray.300}"
      asChild
    >
      <Stack as="nav">
        <ul>
          {LINKS.map(link => (
            <Box
              key={link.id}
              as="li"
            >
              <Link
                label={link.label}
                href={link.href}
              />
            </Box>
          ))}
        </ul>
      </Stack>
    </Box>
  );
}
