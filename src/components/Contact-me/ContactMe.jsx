import classes from "./ContactMe.module.css";
import mailIcon from "../../images/mail.png";
import locationIcon from "../../images/location.png";
import telegramIcon from "../../images/telegram-btn.png";

const ContactMe = () => {
  return (
    <section className={`${classes["contact-section"]}`} id="contact">
      <div className="centered">
        <h2>Please contact me</h2>
        <div className={classes.actions}>
          <div>
            <img src={locationIcon} className={classes.icon} />
            <div className={classes["actions__info"]}>
              <h3>Location</h3>
              <p>Kyiv, Ukraine</p>
            </div>
          </div>

          <div>
            <img src={telegramIcon} className={classes.icon} />
            <div className={classes["actions__info"]}>
              <h3>Telegram</h3>
              <a href="https://t.me/maksym_bohun">maksym_bohun</a>
            </div>
          </div>

          <div>
            <img src={mailIcon} className={classes.icon} />
            <div className={classes["actions__info"]}>
              <h3>Email</h3>
              <a href="mailto:maks.boggun@gmail.com">maks.boggun@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactMe;
