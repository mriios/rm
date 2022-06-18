import Character from "./Character";

type Character = {
  __typename: string;
  name: string;
  image: string;
};

interface Props {
  characterData: {
    characters: {
      results: Character[];
    };
  };
}

const CharactersList = (props: Props) => {
  let characterData = props.characterData;

  return (
    <>
      <h3 className="text-center font-bold">All Characters</h3>
      <ul className="flex flex-wrap">
        {characterData?.characters.results.map((character: Character) => {
          return (
            <li className="w-1/4 p-[5px]" key={character.name}>
              <Character name={character.name} imgSrc={character.image} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CharactersList;
