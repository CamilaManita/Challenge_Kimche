import Character from "../Character/Character";
import PropTypes from "prop-types";

const CharacterList = ({ character }) => {
  return (
    <div className="characterList">
      {character.characters.results.length === 0 ? (
        <h1>Error when obtaining characters</h1>
      ) : (
        character.characters.results.map((character) => (
          <Character
            key={character.id}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            img={character.image}
            gender={character.gender}
            type={character.type}
          />
        ))
      )}
    </div>
  );
};

CharacterList.propTypes = {
  character: PropTypes.object.isRequired,
};

export default CharacterList;