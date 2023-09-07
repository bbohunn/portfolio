import classes from "./AboutMe.module.css";
import aboutImage3 from "./../../images/about-photo-2.jpg";
import aboutImage2 from "./../../images/about-photo.jpg";
import aboutImage from "./../../images/about-photo-1.jpg";

const AboutMe = () => {
  return (
    <section className={`${classes["about-section"]} centered`} id="about-me">
      <div className={classes["about-section__image"]}>
        <img
          src={aboutImage}
          alt="about image"
          className={`${classes.image} ${classes["image--1"]}`}
        />
        <img
          src={aboutImage2}
          alt="about image"
          className={`${classes.image} ${classes["image--2"]}`}
        />
        <img
          src={aboutImage3}
          alt="about image"
          className={`${classes.image} ${classes["image--3"]}`}
        />
      </div>
      <div className={classes["about-section__info"]}>
        <h2>About me</h2>
        <p>
          I'm a third-year computer science student at Kyiv Polytechnic
          Institute, specializing in frontend and full-stack development.
          Proficient in HTML, CSS, Sass, JavaScript, TypeScript, React, Node.js,
          MongoDB, and Git, I'm dedicated to crafting user-centric web
          experiences. My optimized code, coupled with advanced development
          tools, enables me to create dynamic and engaging interfaces.
          Collaboration is my forte, as I thrive in cross-functional teams,
          contributing to the development of exceptional web applications. As I
          continue my journey, I remain committed to staying current in the
          ever-evolving web development landscape, eager to bring my skills to
          innovative digital projects.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
