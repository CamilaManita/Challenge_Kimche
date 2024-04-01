import PropTypes from "prop-types";

const CharacterDetail = ({ character }) => {
  return (
    <div className="characterDetail">
      <CharacterDetail
        name={character.name}
        img={character.image}
        status={character.status}
        species={character.species}
        gender={character.gender}
      />
    </div>
  );
};

CharacterDetail.propTypes = {
  character: PropTypes.object.isRequired,
};

export default CharacterDetail;
