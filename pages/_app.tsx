import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <header className="text-center mb-10">
        <h1 className="leading-tight mb">Rick and Morty Characters</h1>
        <p className="text-xs text-center">
          Made with NextJS, GraphQL, Apollo, TypeScript, TailWindCSS
        </p>
      </header>
      <main className="max-w-[80%] mx-auto pb-10">
        <Component {...pageProps} />
      </main>
    </ApolloProvider>
  );
}

export default MyApp;
