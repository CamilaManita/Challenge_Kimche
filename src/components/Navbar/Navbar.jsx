import logo from "/rick_and_morty.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <NavLink to={"/"} className="navbar">
        <img src={logo} className="imgLogo" />
        <h1>Consumer API Rick And Morty</h1>
      </NavLink>
    </div>
  );
};

export default Navbar;
