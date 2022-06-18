import Head from "next/head";
import CharacterList from "../components/CharactersList/CharactersList";
import { gql } from "@apollo/client";
import client from "../apollo-client";
import { GetStaticProps } from "next";

type Character = {
  __typename: string;
  name: string;
  image: string;
};

type CharactersQuery = {
  data: {
    characters: {
      results: Character[];
    };
  };
  loading: boolean;
};

interface Props {
  charactersQuery: CharactersQuery;
}

const Home = (_props: Props) => {
  let props = _props || {},
    charactersQuery = props.charactersQuery;

  return (
    <>
      <Head>
        <title>Rick and Morty Character Catalog</title>
        <meta
          name="description"
          content="Rick and Morty character catalog; browse and discover"
        />
      </Head>
      <header className="text-center mb-10">
        <h1>Rick and Morty</h1>
        <h2>Made with GraphQL, Apollo, NextJS, TypeScript, TailWindCSS</h2>
      </header>
      {charactersQuery.loading ? (
        <p>Loading...</p>
      ) : (
        <CharacterList characterData={charactersQuery.data} />
      )}
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { data, loading } = await client.query({
    query: gql`
      query Characters {
        characters {
          results {
            name
            image
          }
        }
      }
    `
  });

  return {
    props: {
      charactersQuery: { data, loading }
    }
  };
};

export default Home;
