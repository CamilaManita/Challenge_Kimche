import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { SpeciesFilter, GenderFilter, StatusFilter } from "../Filters/index";
import { useFilterStore } from "../../store";
import LoadMoreArea from "../LoadMoreArea/LoadMoreArea";
import { useCharacters } from "../../hooks";
import CharactersList from "../CharacterList/CharacterList";
import SearchBar from "../SearchBar/SearchBar";

const Characters = () => {
  let location = useLocation();
  let [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery,setSearchQuery] = useState('');
  const species = useFilterStore((state) => state.species);
  const gender = useFilterStore((state) => state.gender);
  const status = useFilterStore((state) => state.status);
  const changeSpecies = useFilterStore((state) => state.changeSpecies);
  const changeGender = useFilterStore((state) => state.changeGender);
  const changeStatus = useFilterStore((state) => state.changeStatus);

  const onChangeSpecies = (value) => {
    if (value !== "all") {
      searchParams.set("species", value);
      setSearchParams(searchParams);
    } else {
      searchParams.delete("species");
      setSearchParams(searchParams);
    }
  };

  const onChangeGender = (value) => {
    if (value !== "all") {
      searchParams.set("gender", value);
      setSearchParams(searchParams);
    } else {
      searchParams.delete("gender");
      setSearchParams(searchParams);
    }
  };

  const onChangeStatus = (value) => {
    if (value !== "all") {
      searchParams.set("status", value);
      setSearchParams(searchParams);
    } else {
      searchParams.delete("status");
      setSearchParams(searchParams);
    }
  };

  const resetFilters = () => {
    setSearchQuery('')
    setSearchParams(new URLSearchParams())
  }

  useEffect(() => {
    const speciesQuery = searchParams.get("species");
    const genderQuery = searchParams.get("gender");
    const statusQuery = searchParams.get("status");


    if (speciesQuery !== species) {
      changeSpecies(speciesQuery);
    }

    if (genderQuery !== gender) {
      changeGender(genderQuery);
    }

    if (statusQuery !== status) {
      changeStatus(statusQuery);
    }

  }, [location, searchParams, changeSpecies, changeGender, changeStatus, species, gender, status]);

  const {
    data: characters,
    state,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetching
  } = useCharacters({ filter: { species, gender, status, name: searchQuery } });

  const loadMoreProps = {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetching
  };

  return (
    <div className="container">
      <SpeciesFilter species={species} onChange={onChangeSpecies} />
      <GenderFilter gender={gender} onChange={onChangeGender} />
      <StatusFilter status={status} onChange={onChangeStatus} />
      <button onClick={resetFilters}>Reset Filters</button>
      <SearchBar onSearch={setSearchQuery}/>
      {state === "loading" ? (
        <p>Loading...</p>
      ) : (
        <>
          <CharactersList characters={characters} />
          <LoadMoreArea {...loadMoreProps} />
        </>
      )}
    </div>
  );
};

export default Characters;
