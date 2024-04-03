import logo from "/rick_and_morty.svg";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="containerNavbar">
      <NavLink to={"/"} className="text">
        <div className="contenedorTextoLogo">
          <img src={logo} />
          <h1 className="text">Consumer API - Rick And Morty</h1>
          <img src={logo} />
        </div>
      </NavLink>
    </div>
  );
};

export default Navbar;
