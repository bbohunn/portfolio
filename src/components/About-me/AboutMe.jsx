import classes from "./AboutMe.module.css";
import aboutImage from "./../../images/about-photo-2.jpg";

const AboutMe = () => {
  return (
    <section className={`${classes["about-section"]} centered`} id="about-me">
      <div className={classes["about-section__image"]}>
        <img src={aboutImage} alt="about image" />
      </div>
      <div className={classes["about-section__info"]}>
        <h2>About me</h2>
        <p>
          I am a second-year student at the Kyiv Polytechnic Institute, where I
          study computer science. As a junior front-end developer, I have
          various skills in HTML, CSS, Sass, JavaScript, TypeScript, React, and
          Git. I focus on creating responsive websites that offer a flawless
          user experience. My focus is on creating dynamic and engaging
          interfaces by writing clean, optimized code and using advanced
          development tools and techniques. Moreover, I thrive in collaborative
          environments, working effectively with cross-functional teams to build
          exceptional web applications.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
