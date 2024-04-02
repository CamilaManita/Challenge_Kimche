import PropTypes from "prop-types";

const SpeciesFilter = ({ species, onChange }) => {
  return (
    <select
      value={species ?? "all"}
      className="select"
      onChange={(e) => {
        const value = e.target.value;

        onChange(value === "all" ? null : value);
      }}
    >
      <option value="all">All species</option>
      <option value="human">Human</option>
      <option value="humanoid">Humanoid</option>
      <option value="alien">Alien</option>
      <option value="robot">Robot</option>
      <option value="animal">Animal</option>
      <option value="poopybutthole">Poopybutthole</option>
      <option value="mythological creature">Mythological Creature</option>
      <option value="disease">Disease</option>
    </select>
  );
};

SpeciesFilter.propTypes = {
    species: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

export default SpeciesFilter;
