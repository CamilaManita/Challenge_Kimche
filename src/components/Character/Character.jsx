import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Character = (props) => {
  return (
    <NavLink to={`/character/${props.id}`} className="linkin">
      <div className="characterInd">
        <img src={props.img} className="imgCharacter" />
        <div className="name">
          <h1>{props.name}</h1>
        </div>
      </div>
    </NavLink>
  );
};

Character.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Character;
