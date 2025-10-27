"use client";

// Theirs
import NextLink from "next/link";
import { Link as ChakraLink } from "@chakra-ui/react";
import { usePathname } from "next/navigation";


interface LinkProps {
  href: string;
  label: string;
}


export function Link({ href, label }: LinkProps) {
  const pathname = usePathname();

  return (
    <ChakraLink
      asChild
      fontWeight="bold"
      color={pathname === href ? "blue.600" : undefined}
      inlineSize="100%"
      paddingInline={4}
      paddingBlock={2}
    >
      <NextLink
        href={href}
        aria-current={pathname === href ? "page" : undefined}
      >
        {label}
      </NextLink>
    </ChakraLink>
  );
}
