import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./DetailCharacter.css";

const DetailCharacter = ({ character }) => {
  if (!character) {
    return <p>No information about the character was found.</p>;
  }

  const { name, image, status, gender, species, origin, location, type } =
    character;

  return (
    <>
      <div className="ind">
        <div className="detailContainer">
          <h2>{name}</h2>
          <div className="detailImage">
            <img src={image} alt={name} />
          </div>
          <div className="detailData">
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
          <button className="custom-button button">Back</button>
        </NavLink>
      </div>
    </>
  );
};

DetailCharacter.propTypes = {
  character: PropTypes.object,
};

export default DetailCharacter;
