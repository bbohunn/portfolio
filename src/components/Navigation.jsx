import classes from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <nav className={classes.navigation}>
      <div className={classes.navigation__item}>Maksym Bohun</div>
      <div>
        <ul className={classes.navigation__list}>
          <li className={classes.navigation__item}>
            <a href="#home">Home</a>
          </li>
          <li className={classes.navigation__item}>
            <a href="#about-me">About me</a>
          </li>
          <li className={classes.navigation__item}>
            <a href="#">Projects</a>
          </li>
          <li className={classes.navigation__item}>
            <a href="#">Contact me</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
