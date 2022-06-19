import type { GetStaticPaths, NextPage } from "next";
import Head from "next/head";
import { gql } from "@apollo/client";
import client from "../../../apollo-client";
import { GetStaticProps } from "next";
import { GET_CHARACTER } from "../../../apollo-queries";
import CharacterDetail from "../../../components/CharacterDetail/CharacterDetail";
import Link from "next/link";

type Episode = {
  id: string;
  name: string;
};

type NameObject = {
  name: string;
};

type Character = {
  episode: Episode[];
  id: string;
  image: string;
  name: string;
  status: string;
  origin: NameObject;
  gender: string;
  species: string;
  location: NameObject;
};

type CharacterQuery = {
  data: {
    character: Character;
  };
  loading: boolean;
};

interface Props {
  characterQuery: CharacterQuery;
}

const Character: NextPage<Props> = (props: Props) => {
  let character = props.characterQuery.data.character,
    name = character.name,
    pageMetaTitle = `${name} - Character Sheet`,
    pageMetaDescription = `Character sheet for ${name} from Rick and Morty show`;

  return (
    <>
      <Head>
        <title>{pageMetaTitle}</title>
        <meta name="description" content={pageMetaDescription} />
      </Head>
      <CharacterDetail character={character} />
      <Link href="/">
        <a className="underline mt-20 block p-2 border border-white inline-block rounded hover:border-slate-400">
          Back to all characters
        </a>
      </Link>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({
    query: gql`
      query Characters {
        characters {
          results {
            id
          }
        }
      }
    `
  });

  return {
    fallback: false,
    paths: data.characters.results.map((character: any) => ({
      params: {
        id: character.id.toString()
      }
    }))
  };
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const characterId = context.params?.id;

  const { data, loading } = await client.query({
    query: GET_CHARACTER,
    variables: { id: characterId }
  });

  return {
    props: {
      characterQuery: { data, loading }
    }
  };
};

export default Character;
