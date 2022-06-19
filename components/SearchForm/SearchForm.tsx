import { useRef, useState, useEffect } from "react";
import Button from "../Button/Button";
import { useLazyQuery, useQuery } from "@apollo/client";
import { GET_FILTERED_CHARACTER } from "../../apollo-queries";

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

interface Props {
  onSubmit: (searchData: searchData, searchQuery: string | undefined) => void;
}

const SearchForm = (props: Props) => {
  const searchValue = useRef<null | HTMLInputElement>(null);

  const [getFilteredCharacter] = useLazyQuery(GET_FILTERED_CHARACTER, {
    variables: {
      name: searchValue.current?.value
    },
    onCompleted: (data) => {
      props.onSubmit(data, searchValue.current?.value);
    }
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getFilteredCharacter();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search character</label>
        <input
          type="text"
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Search specific character"
          ref={searchValue}
        />
        <Button type="submit">Search</Button>
      </form>
    </div>
  );
};

export default SearchForm;
