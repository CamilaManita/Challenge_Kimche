import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const DetailCharacter = ({ character }) => {
  if (!character) {
    return <p>No se encontró información del personaje.</p>;
  }

  return (
    <>
      <div className="ind">
        <h1>{character.name}</h1>
        <img src={character.image} alt={character.name} className="indImg" />
        <h3>Status: {character.status}</h3>
        <h3>Species: {character.species}</h3>
        <h3>Gender: {character.gender}</h3>
        <NavLink to={"/"} className="volver">
          Volver
        </NavLink>
      </div>
    </>
  );
};

DetailCharacter.propTypes = {
  character: PropTypes.object,
};

export default DetailCharacter;
