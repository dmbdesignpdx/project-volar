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
  const isActive = pathname === href;

  return (
    <ChakraLink
      asChild
      fontWeight="bold"
      color={isActive ? "blue.600" : undefined}
      inlineSize="100%"
      paddingInline={4}
      paddingBlock={2}
    >
      <NextLink
        href={href}
        aria-current={isActive ? "page" : undefined}
      >
        {label}
      </NextLink>
    </ChakraLink>
  );
}
