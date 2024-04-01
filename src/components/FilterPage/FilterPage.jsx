import { useState } from "react";

const FilterPage = () => {
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");
  const [gender, setGender] = useState("");

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleSpeciesChange = (e) => {
    setSpecies(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };


  const handleFilterReset = () => {
    setStatus("");
    setSpecies("");
    setGender("");
  };

  return (
    <div className="filter">
      <select className="select" value={status} onChange={handleStatusChange}>
        <option value="">Seleccionar estado</option>
        <option value="Alive">Vivo</option>
        <option value="Dead">Muerto</option>
        <option value="unknown">Desconocido</option>
      </select>
      <select className="select" value={species} onChange={handleSpeciesChange}>
        <option value="">Seleccionar especie</option>
        <option value="Human">Humano</option>
        <option value="Alien">Alien</option>
      </select>
      <select className="select" value={gender} onChange={handleGenderChange}>
        <option value="">Seleccionar género</option>
        <option value="Male">Masculino</option>
        <option value="Female">Femenino</option>
        <option value="unknown">Desconocido</option>
      </select>
      <button onClick={handleFilterReset} className="buttonReset">Resetear Filtros</button>
    </div>
  );
};

export default FilterPage;
