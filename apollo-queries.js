import { gql } from "@apollo/client";

export const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      image
      name
      status
      species
      gender
      origin {
        name
      }
      location {
        name
      }
      episode {
        name
        id
      }
    }
  }
`;

export const GET_CHARACTERS = gql`
  query Characters {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

export const GET_EPISODE = gql`
  query GetEpisode($id: ID!) {
    episode(id: $id) {
      id
      name
      air_date
      episode
      characters {
        id
        name
      }
    }
  }
`;
