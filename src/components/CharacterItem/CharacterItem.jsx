import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./CharacterItem.css";

const variants = {
  visible: (i) => ({
    opacity: 1,
    transition: {
      delay: i * 0.1,
    },
  }),
  hidden: {
    opacity: 0,
  },
};

const CharacterItem = ({ character, ...restProps }) => {
  const { id, name, image } = character;
  return (
    <NavLink to={`/character/${id}`} className="linkin">
      <motion.div
        {...restProps}
        variants={variants}
        initial="hidden"
        animate="visible"
        className="characterInd"
      >
        <LazyLoadImage
          placeholder={
            <img
              src="https://rickandmortyapi.com/api/character/avatar/19.jpeg"
              alt="placeholder"
              className="imgCharacter"
            />
          }
          alt={name}
          height={200}
          src={image}
          width={200}
        />
        <div className="name">
          <h1>{name}</h1>
        </div>
      </motion.div>
    </NavLink>
  );
};

CharacterItem.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
  }).isRequired,
};

export default CharacterItem;
