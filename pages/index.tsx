import type { NextPage } from "next";
import Head from "next/head";
import CharacterList from "../components/CharactersList/CharactersList";
import { gql } from "@apollo/client";
import client from "../apollo-client";
import { GetStaticProps } from "next";
import { GET_CHARACTERS } from "../apollo-queries";
import SearchForm from "../components/SearchForm/SearchForm";
import { useState } from "react";

type Character = {
  id: number;
  name: string;
  image: string;
};

type searchData = {
  characters: {
    results: Character[];
  };
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

  const [charactersData, setCharactersData] = useState(charactersQuery.data);
  const [searchValue, setSearchValue] = useState<string | undefined>();

  const getSearchData = (
    searchData: searchData,
    searchQuery: string | undefined
  ) => {
    setCharactersData(searchData);
    setSearchValue(searchQuery);
  };

  return (
    <>
      <Head>
        <title>Rick and Morty Character Catalog</title>
        <meta
          name="description"
          content="Rick and Morty character catalog; browse and learn"
        />
      </Head>
      <SearchForm onSubmit={getSearchData} />
      {charactersQuery.loading ? (
        <p>Loading...</p>
      ) : (
        <CharacterList
          charactersData={charactersData}
          searchValue={searchValue}
        />
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
