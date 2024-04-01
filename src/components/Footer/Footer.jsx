import { NavLink } from "react-router-dom";
import github from "/github.svg";
import linkedin from "/linkedin.svg";

const Footer = () => {
  return (
    <div className="footer">
      <h2 className="textFooter">Camila Manita</h2>
      <div className="divLink">
        <NavLink to={"https://github.com/CamilaManita"} target="_blank">
          <img src={github} alt="github icon" />
        </NavLink>
        <NavLink
          to={"https://www.linkedin.com/in/camila-manita/"}
          target="_blank"
        >
          <img src={linkedin} alt="linkedin icon" />
        </NavLink>
      </div>
      <h2 className="textFooter">Full Stack Developer</h2>
    </div>
  );
};

export default Footer;
