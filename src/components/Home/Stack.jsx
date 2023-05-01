import reactIcon from "./../../images/physics.png";
import jsIcon from "./../../images/js.png";
import htmlIcon from "./../../images/html-5.png";
import cssIcon from "./../../images/css-3.png";
import sassIcon from "./../../images/sass.png";
import githubIcon from "./../../images/github.png";
import typescriptIcon from "./../../images/typescript.png";
import classes from "./Stack.module.css";

const Stack = (props) => {
  return (
    <div className={`${classes["technologies-stack"]} ${props.className}`}>
      <h3>My technologies stack</h3>
      <div>
        <img src={reactIcon} alt="react icon" className={classes.icon} />
        <img src={jsIcon} alt="js icon" className={classes.icon} />
        <img
          src={typescriptIcon}
          alt="typescript icon"
          className={classes.icon}
        />
        <img src={htmlIcon} alt="html icon" className={classes.icon} />
        <img src={cssIcon} alt="css icon" className={classes.icon} />
        <img src={sassIcon} alt="sass icon" className={classes.icon} />
        <img src={githubIcon} alt="github icon" className={classes.icon} />
      </div>
    </div>
  );
};
export default Stack;
