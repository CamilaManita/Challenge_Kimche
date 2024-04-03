import PropTypes from "prop-types";
import "./Filters.css";

const GenderFilter = ({ gender, onChange }) => {
  return (
    <select
      value={gender ?? "all"}
      className="select"
      onChange={(e) => {
        const value = e.target.value;

        onChange(value === "all" ? null : value);
      }}
    >
      <option value="all" disabled>
        All genders
      </option>
      <option value="female">Female</option>
      <option value="male">Male</option>
      <option value="genderless">Genderless</option>
      <option value="unknown">Unknown</option>
    </select>
  );
};

GenderFilter.propTypes = {
  gender: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default GenderFilter;
