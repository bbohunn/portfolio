import classes from "./Navigation.module.css";
import { AiOutlineMenu } from "react-icons/ai";

const Navigation = (props) => {
  return (
    <nav className={classes.navigation}>
      <div className={classes.navigation__item}>Maksym Bohun</div>
      <div className={classes["navigation__menu-icon"]}>
        <AiOutlineMenu size={24} />
      </div>
      <div className={classes["navigation__sections"]}>
        <ul className={classes.navigation__list}>
          <li className={classes.navigation__item}>
            <a href="#home">Home</a>
          </li>
          <li className={classes.navigation__item}>
            <a href="#about-me">About me</a>
          </li>
          <li className={classes.navigation__item}>
            <a href="#projects">Projects</a>
          </li>
          <li className={classes.navigation__item}>
            <a href="#contact">Contact me</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
