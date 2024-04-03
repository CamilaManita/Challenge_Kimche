import PropTypes from "prop-types";
import './Filters.css'

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
      <option value="all" className="option">Status...</option>
      <option value="alive" className="option">Alive</option>
      <option value="dead" className="option">Dead</option>
      <option value="unknown" className="option">Unknown</option>
    </select>
  );
};

StatusFilter.propTypes = {
  status: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default StatusFilter;
