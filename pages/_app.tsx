import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <header className="text-center mb-10">
        <h1 className="leading-tight">Rick and Morty Characters</h1>
      </header>
      <main className="max-w-[80%] mx-auto">
        <Component {...pageProps} />
      </main>
      <footer>
        <p className="text-xs text-center mt-10 mb-2">
          Made with NextJS, GraphQL, Apollo, TypeScript, TailWindCSS
        </p>
      </footer>
    </ApolloProvider>
  );
}

export default MyApp;
