"use client";
import { ApolloProvider } from "@apollo/client";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { graphqlClient } from "../graphql/gql.setup";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ApolloProvider client={graphqlClient}>
      <NextUIProvider>
        <NextThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </NextThemeProvider>
      </NextUIProvider>
    </ApolloProvider>
  );
};

export default Provider;
