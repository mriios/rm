import Image from "next/image";

type NameObject = {
  name: string;
};

type Character = {
  episode: NameObject[];
  id: string;
  image: string;
  name: string;
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
    name = character.name;

  return (
    <>
      <h3 className="text-2xl text-center font-bold">{name}</h3>
      <div className="aspect-square relative w-3/6 max-w-[300px] mx-auto">
        <Image
          src={character.image}
          alt={name}
          layout="fill"
          objectFit="contain"
        />
      </div>
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
          <b>First Episode</b>: {character.episode[0].name}
        </li>
      </ul>
    </>
  );
};

export default CharacterDetail;
