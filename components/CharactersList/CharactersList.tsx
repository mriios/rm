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
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {characterData?.characters.results.map((character: Character) => {
          return (
            <li className="mb-2" key={character.id}>
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
