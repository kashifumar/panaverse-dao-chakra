"use client";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/theme";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export default function ChakraWrapper({ children }: Props) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
