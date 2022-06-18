import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <header className="text-center mb-10">
        <h1>Rick and Morty</h1>
        <h2>Made with NxtJS, GraphQL, Apollo, TypeScript, TailWindCSS</h2>
      </header>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
