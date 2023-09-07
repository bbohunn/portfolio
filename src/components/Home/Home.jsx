import classes from "./Home.module.css";
import telegramIcon from "./../../images/telegram.png";
import linkedinIcon from "./../../images/linkedin.png";
import githubIcon from "./../../images/github-sign.png";
import emailIcon from "./../../images/email.png";
import myPhoto from "./../../images/me.jpg";
import Stack from "./Stack";

const Home = () => {
  return (
    <section id="home" className={`${classes["home-section"]} centered`}>
      <div className={classes["home-section__info"]}>
        <h1>Full-stack react.js developer</h1>
        <p>
          Hi, I'm Maksym, a Full-stack React.js Developer based in Kyiv. I'm open
          to new opportunities. Let's connect and bring your ideas to life!
        </p>
        <div className={classes["home-section__icons-container"]}>
          <a
            href="https://t.me/maksym_bohun"
            target="_blank"
            className={classes.icon}
          >
            <img src={telegramIcon} alt="telegram icon" />
          </a>

          <a
            href="https://www.linkedin.com/in/maksym-bohun-9a5679227/"
            target="_blank"
            className={classes.icon}
          >
            <img src={linkedinIcon} alt="linkedin icon" />
          </a>

          <a
            href="https://github.com/maksym-bohun"
            target="_blank"
            className={classes.icon}
          >
            <img src={githubIcon} alt="github icon" />
          </a>

          <a
            href="mailto:maks.boggun@gmail.com"
            target="_blank"
            className={classes.icon}
          >
            <img src={emailIcon} alt="email icon" />
          </a>
        </div>
      </div>

      <div className={classes["home-section__photo"]}>
        <div className={classes["flip-box"]}>
          <div className={classes["flip-box-inner"]}>
            <div className={classes["flip-box-front"]}>
              <img
                src={myPhoto}
                alt="My photo"
                className={classes["my-photo"]}
              />
            </div>

            <div className={classes["flip-box-back"]}>
              <p>Read more about me!</p>
              <a href="#about-me">About me &darr;</a>
            </div>
          </div>
        </div>
      </div>

      <Stack className={classes.stack} />
    </section>
  );
};

export default Home;
