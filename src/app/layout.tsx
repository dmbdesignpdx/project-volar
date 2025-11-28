// Theirs
import { PropsWithChildren } from "react";
import type { Metadata } from "next";
import { Stack_Sans_Text } from "next/font/google";
import { Provider } from "@/components/ui/provider";
import {
  Box,
  Grid,
  Theme,
} from "@chakra-ui/react";

// Ours
import { Meta } from "@/constants";
import { Nav } from "@/components/nav";

import "./globals.css";


const stackSansText = Stack_Sans_Text({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: Meta.TITLE,
  description: Meta.DESCRIPTION,
};


export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className={stackSansText.className}>
        <Provider>
          <Theme
            appearance="light"
            blockSize="100vh"
            bgColor="gray.100"
          >
            {/* TODO: Store Provider */}
            {/* TODO: Header */}
            <Grid
              templateColumns="12rem 1fr"
              blockSize="100%"
            >
              <Nav />
              <Box
                as="main"
                overflowX="scroll"
              >
                {children}
              </Box>
            </Grid>
            {/* TODO: Footer */}
          </Theme>
        </Provider>
      </body>
    </html>
  );
}
