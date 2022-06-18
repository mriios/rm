import type { NextPage } from "next";
import Head from "next/head";
import CharacterList from "../components/CharactersList/CharactersList";
import { gql } from "@apollo/client";
import client from "../apollo-client";
import { GetStaticProps } from "next";
import { GET_CHARACTERS } from "../apollo-queries";

type Character = {
  id: number;
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

const Home: NextPage<Props> = (_props: Props) => {
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
    query: GET_CHARACTERS
  });

  return {
    props: {
      charactersQuery: { data, loading }
    }
  };
};

export default Home;
