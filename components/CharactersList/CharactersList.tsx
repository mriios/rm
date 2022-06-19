import Character from "./Character";

type Character = {
  id: number;
  name: string;
  image: string;
};

interface Props {
  charactersData: {
    characters: {
      results: Character[];
    };
  };
  searchValue: string | undefined;
}

const CharactersList = (props: Props) => {
  let charactersData = props.charactersData,
    searchValue = props.searchValue,
    characterFeed;

  if (charactersData?.characters.results.length) {
    characterFeed = (
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {charactersData?.characters.results.map((character: Character) => {
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
    );
  } else {
    characterFeed = <p>No characters found</p>;
  }

  return (
    <>
      <h3 className="text-center font-bold capitalize">
        {!searchValue ? "All Characters" : searchValue}
      </h3>
      {characterFeed}
    </>
  );
};

export default CharactersList;
