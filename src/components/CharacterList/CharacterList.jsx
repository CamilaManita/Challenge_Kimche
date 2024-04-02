import { Fragment } from "react";
import CharacterItem from "../CharacterItem/CharacterItem";
import PropTypes from "prop-types";

const CharactersList = ({ characters }) => {
  return (
    <div className="list">
      {characters?.pages?.map((group, i) => {
        const { results } = group;

        if (results.length === 0) {
          return (
            <div key="no-data" className="no-data">
              No any Character.
            </div>
          );
        }

        return (
          <Fragment key={i}>
            {results?.map((character, i) => (
              <CharacterItem
                key={character.id}
                character={character}
                custom={i}
              />
            ))}
          </Fragment>
        );
      })}
    </div>
  );
};

CharactersList.propTypes = {
  characters: PropTypes.shape({
    pages: PropTypes.arrayOf(
      PropTypes.shape({
        results: PropTypes.array.isRequired,
      }).isRequired
    ).isRequired,
  })
};

export default CharactersList;
