import Image from "next/image";
import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import { useLazyQuery } from "@apollo/client";
import { GET_EPISODE } from "../../apollo-queries";
import { stringify } from "querystring";

type Episode = {
  id: string;
  name: string;
};

type NameObject = {
  name: string;
};

type EpisodeCharacter = {
  id: string;
  name: string;
};

type Character = {
  id: string;
  name: string;
  episode: Episode[];
  image: string;
  status: string;
  origin: NameObject;
  gender: string;
  species: string;
  location: NameObject;
};

interface Props {
  character: Character;
}

const CharacterDetail = (props: Props) => {
  let character = props.character,
    name = character.name,
    firstEpisode = character.episode[0],
    modalBodyContent = <p>Loading...</p>,
    modalEpisode;

  const [episodeModalOpen, setEpisodeModalOpen] = useState(false);

  const [
    getEpisodeDetail,
    {
      loading: episodeLoading,
      data: episodeData,
      error: episodeError,
      called: episodeCalled
    }
  ] = useLazyQuery(GET_EPISODE, {
    variables: {
      id: firstEpisode.id
    }
  });

  const handleEpisodeModalOpen = () => {
    setEpisodeModalOpen((prev) => !prev);
    getEpisodeDetail();
  };

  if (episodeCalled && episodeData && !episodeLoading && !episodeError) {
    modalEpisode = episodeData.episode;
    modalBodyContent = (
      <ul>
        <li>
          <b>Air Date:</b> {modalEpisode.air_date}
        </li>
        <li>
          <b>Episode:</b> {modalEpisode.episode}
        </li>
        <li>
          <b>Characters:</b>
          <ul className="columns-2 md:columns-3">
            {modalEpisode.characters.map((character: EpisodeCharacter) => (
              <li key={character.id}>{character.name}</li>
            ))}
          </ul>
        </li>
      </ul>
    );
  }

  if (episodeError) {
    modalBodyContent = <p>Something went wrong</p>;
  }

  return (
    <>
      <h3 className="text-2xl text-center font-bold">{name}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
        <div className="aspect-square relative w-3/6 max-w-[300px] mx-auto md:ml-auto md:mr-0">
          <Image
            src={character.image}
            alt={name}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div>
          <ul>
            <li>
              <b>Status</b>: {character.status}
            </li>
            <li>
              <b>Species</b>: {character.species}
            </li>
            <li>
              <b>Gender</b>: {character.gender}
            </li>
            <li>
              <b>Origin</b>: {character.origin.name}
            </li>
            <li>
              <b>Location</b>: {character.location.name}
            </li>
            <li>
              <b>First Episode</b>:{" "}
              <button className="underline" onClick={handleEpisodeModalOpen}>
                {firstEpisode.name} (click for episode info)
              </button>
            </li>
          </ul>
        </div>
      </div>
      {episodeModalOpen && (
        <Modal
          modalTitle={firstEpisode.name}
          backdropOnClick={handleEpisodeModalOpen}
        >
          <div>{modalBodyContent}</div>
          <button
            className="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 ml-auto"
            onClick={handleEpisodeModalOpen}
          >
            Close
          </button>
        </Modal>
      )}
    </>
  );
};

export default CharacterDetail;
