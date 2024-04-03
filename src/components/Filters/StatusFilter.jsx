import PropTypes from "prop-types";
import "./Filters.css";

const StatusFilter = ({ status, onChange }) => {
  return (
    <select
      value={status ?? "all"}
      className="select"
      onChange={(e) => {
        const value = e.target.value;
        onChange(value === "all" ? null : value);
      }}
    >
      <option value="all" disabled>
        All status...
      </option>
      <option value="alive">Alive</option>
      <option value="dead">Dead</option>
      <option value="unknown">Unknown</option>
    </select>
  );
};

StatusFilter.propTypes = {
  status: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default StatusFilter;
