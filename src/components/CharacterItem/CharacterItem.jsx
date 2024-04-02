import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

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
  const { id, name, image, species, gender, status } = character;
  // const id = typeof character.id === 'string' ? parseInt(character.id) : character.id;
  return (
    <NavLink to={`/character/${id}`} className="linkin">
      <motion.div
        {...restProps}
        variants={variants}
        initial="hidden"
        animate="visible"
        className="character"
      >
        <LazyLoadImage
          placeholder={
            <img
              src="https://rickandmortyapi.com/api/character/avatar/19.jpeg"
              alt="placeholder"
            />
          }
          alt={name}
          height={300}
          src={image}
          width={300}
        />
        <h2>{name}</h2>
        <p>{status}</p>
        <p>
          {species} - {gender}
        </p>
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
