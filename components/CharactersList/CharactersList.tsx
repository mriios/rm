import Character from "./Character";

type Character = {
  id: number;
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
            <li className="w-1/3 md:w-1/5 px-1 mb-2 md:px-2" key={character.id}>
              <Character
                id={character.id}
                name={character.name}
                imgSrc={character.image}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CharactersList;
