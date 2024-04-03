import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./DetailCharacter.css";

const DetailCharacter = ({ character }) => {
  if (!character) {
    return <p>No se encontró información del personaje.</p>;
  }

  const { name, image, status, gender, species, origin, location, type } =
    character;

  return (
    <>
      <div className="ind">
        <div className="detailContainer">
          <img src={image} alt={name} className="indImg" />
          <div className="detailStringContainer">
            <h1>{name}</h1>
            <h3>Status: {status}</h3>
            <h3>Gender: {gender}</h3>
            <h3>Specie: {species}</h3>
            <h3>Type: {type ? type : "Unknown"}</h3>
            <h3>Origin: {origin ? origin.name : "Unknown"}</h3>
            <h3>Location: {location ? location.name : "Unknown"}</h3>
            <h3>Dimension: {location ? location.dimension : "Unknown"}</h3>
          </div>
        </div>
        <NavLink to={"/"}>
          <button className="custom-button button">Volver</button>
        </NavLink>
      </div>
    </>
  );
};

DetailCharacter.propTypes = {
  character: PropTypes.object,
};

export default DetailCharacter;
