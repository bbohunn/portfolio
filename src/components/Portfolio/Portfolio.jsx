import classes from "./Portfolio.module.css";
import GithubButton from "../../UI/GitHubButton";
import DemoButton from "../../UI/DemoButton";
import { useState } from "react";

const Portfolio = () => {
  const [currentLabel, setCurrentLabel] = useState("web");

  return (
    <section
      className={`${classes["portfolio-section"]} centered-2`}
      id="projects"
    >
      <h2>My projects</h2>

      <div className={classes.labels}>
        <div
          className={`${classes.label} ${
            currentLabel === "web" && classes["label--selected"]
          }`}
          onClick={() => setCurrentLabel("web")}
        >
          Web
        </div>
        <div
          className={`${classes.label}  ${
            currentLabel === "mobile" && classes["label--selected"]
          }`}
          onClick={() => setCurrentLabel("mobile")}
        >
          Mobile
        </div>
      </div>

      {currentLabel === "web" && (
        <div className={classes["portfolio-section__projects"]}>
          <div
            className={`${classes["image-left"]} ${classes["project-container"]}`}
          >
            <h3 className={classes["title-mobile"]}>Ftech</h3>
            <video
              width={500}
              style={{ boxShadow: "0 0 10px rgba(0,0,0,0.2)" }}
              autoPlay
              loop
              muted
            >
              <source
                src={require("../../videos/FTECH.MP4")}
                type="video/mp4"
              />
            </video>

            <div className={classes["portfolio-section__info"]}>
              <h3>Ftech Website</h3>
              <p>
                The bespoke website crafted for FTECH is an innovative web
                application featuring a modern user interface. Developed using
                React and Redux, it ensures optimal performance and efficient
                state management for an excellent user experience. Styled
                Components contribute to its contemporary design. The backend,
                built on Node.js, offers scalability and adheres to modern
                development standards. Notably, the website allows seamless
                switching between English and Ukrainian languages, with
                automatic detection and setting of the default language based on
                user preferences. Additionally, Node.js integration automates
                email notifications after user form submissions, further
                enhancing user interaction and overall experience. This feature
                makes FTECH's web product dynamic, user-friendly, and
                functionally rich.
              </p>
              <div className={classes.actions}>
                <GithubButton url="https://github.com/maksym-bohun/Ftech" />
                <DemoButton url="https://ftech.company/" />
              </div>
            </div>
          </div>

          <div
            className={`${classes["image-right"]} ${classes["project-container"]}`}
          >
            <h3 className={classes["title-mobile"]}>Typing Trainer</h3>
            <div className={classes["portfolio-section__info"]}>
              <h3>Typing Trainer</h3>
              <p>
                Introducing the ultimate Typing Trainer: a comprehensive
                platform featuring a Speed Test section to measure your typing
                speed and accuracy, a Train Typing section with structured
                lessons, and a Challenges section to test your skills. Whether
                you're a beginner or aiming to become a typing pro, this trainer
                is your go-to resource for mastering efficient and swift typing.
              </p>
              <div className={classes.actions}>
                <GithubButton url="https://github.com/maksym-bohun/typing-training-app" />
                <DemoButton url="https://maksym-bohun.github.io/typing-training-app/" />
              </div>
            </div>

            <video
              width={500}
              style={{ boxShadow: "0 0 10px rgba(0,0,0,0.2)" }}
              autoPlay
              loop
              muted
            >
              <source
                src={require("../../videos/TypingTrainer.mp4")}
                type="video/mp4"
              />
            </video>
          </div>

          <div
            className={`${classes["image-left"]} ${classes["project-container"]}`}
          >
            <h3 className={classes["title-mobile"]}>Book Shop</h3>
            <video
              width={500}
              style={{ boxShadow: "0 0 10px rgba(0,0,0,0.2)" }}
              autoPlay
              loop
              muted
            >
              <source
                src={require("../../videos/BookShop.mp4")}
                type="video/mp4"
              />
            </video>
            <div className={classes["portfolio-section__info"]}>
              <h3>Book Shop</h3>
              <p>
                Introducing BookShop, the ultimate bookworm's companion.
                Discover, sort, and purchase your favorite books effortlessly
                with our user-friendly app. Find your next literary adventure,
                sort by name or price, add to cart, and proceed to a seamless
                checkout experience. BookShop puts the world of books at your
                fingertips, making it easier than ever to indulge in your
                reading passion.
              </p>
              <div className={classes.actions}>
                <GithubButton url="https://github.com/maksym-bohun/book-shop" />
                <DemoButton url="https://maksym-bohun.github.io/book-shop/" />
              </div>
            </div>
          </div>

          <div
            className={`${classes["image-right"]} ${classes["project-container"]}`}
          >
            <h3 className={classes["title-mobile"]}>Electro</h3>

            <div className={classes["portfolio-section__info"]}>
              <h3>Electro</h3>
              <p>
                Electro is an innovative application that simplifies the buying
                and selling of electronics. You can easily find the desired item
                or post a sales ad in just a few simple steps. The app offers a
                user-friendly interface with filters based on categories,
                cities, and other specifications to help you find exactly what
                you need. In the Electro app, you always have easy access to the
                seller's contact information, including their phone number. With
                this feature, you can directly get in touch with the seller to
                ask questions, discuss transaction details, or arrange a
                meeting. With Electro, you can quickly and confidently discover
                and sell electronics.
              </p>
              <div className={classes.actions}>
                <GithubButton url="https://github.com/maksym-bohun/Electro_" />
              </div>
            </div>
            <video
              width={500}
              style={{ boxShadow: "0 0 10px rgba(0,0,0,0.2)" }}
              autoPlay
              loop
              muted
            >
              <source
                src={require("../../videos/Electro.mp4")}
                type="video/mp4"
              />
            </video>
          </div>

          <div
            className={`${classes["image-left"]} ${classes["project-container"]}`}
          >
            <h3 className={classes["title-mobile"]}>Github Kanban Board</h3>
            <video
              width={500}
              style={{ boxShadow: "0 0 10px rgba(0,0,0,0.2)" }}
              autoPlay
              loop
              muted
            >
              <source
                src={require("../../videos/kanban.mov")}
                type="video/mp4"
              />
            </video>
            <div className={classes["portfolio-section__info"]}>
              <h3>Github Kanban Board</h3>
              <p>
                GitHub Kanban Board: Streamline your project management by
                pasting your GitHub repo URL and instantly organizing issues
                into ToDo, In Progress, and Done columns. Effortlessly track
                progress, collaborate with your team, and stay organized in one
                user-friendly interface. Boost your productivity with the power
                of the GitHub Kanban Board.
              </p>
              <div className={classes.actions}>
                <GithubButton url="https://github.com/maksym-bohun/kanban-board" />
                <DemoButton url="https://maksym-bohun.github.io/kanban-board/" />
              </div>
            </div>
          </div>

          <div
            className={`${classes["image-right"]} ${classes["project-container"]}`}
          >
            <h3 className={classes["title-mobile"]}>Todo-list</h3>

            <div className={classes["portfolio-section__info"]}>
              <h3>Todo-list</h3>
              <p>
                The Todo-list app is a versatile application that allows users
                to efficiently manage their tasks and set timely reminders. With
                its user-friendly interface, users can easily create and
                organize their to-do lists, ensuring that no task goes
                unnoticed. Additionally, users can set reminders for specific
                tasks to receive timely notifications, ensuring that deadlines
                are met and important tasks are not forgotten.
              </p>
              <div className={classes.actions}>
                <GithubButton url="https://github.com/maksym-bohun/my-todo-list" />
                <DemoButton url="https://maksym-bohun.github.io/my-todo-list/" />
              </div>
            </div>
            <video
              width={500}
              style={{ boxShadow: "0 0 10px rgba(0,0,0,0.2)" }}
              autoPlay
              loop
              muted
            >
              <source src={require("../../videos/Todo.mov")} type="video/mp4" />
            </video>
          </div>
        </div>
      )}

      {currentLabel === "mobile" && (
        <div
          className={`${classes["portfolio-section__projects"]} ${classes["portfolio-section__projects--mobile"]}`}
        >
          <div
            className={`${classes["image-left"]} ${classes["project-container"]}`}
          >
            <h3 className={classes["title-mobile"]}>Hometask Tracker</h3>
            <video
              // width={200}
              style={{ boxShadow: "0 0 10px rgba(0,0,0,0.2)", width: "250px" }}
              autoPlay
              loop
              muted
            >
              <source
                src={require("../../videos/hometaskTracker.mp4")}
                type="video/mp4"
              />
            </video>

            <div className={classes["portfolio-section__info"]}>
              <h3>Hometask Tracker</h3>
              <p>
                Introducing my first mobile app: the Hometask Tracker app,
                developed with React Native, Redux Toolkit, and Async Storage
                library. This mobile application streamlines academic task
                management by offering four predefined folders: labs, homework,
                presentations, and other. Users can effortlessly add tasks to
                these folders, ensuring they stay organized and focused. The app
                provides a clear overview of task counts within each folder,
                helping users prioritize their workload effectively. With
                features to update and delete tasks, users can easily maintain
                an accurate task list. Additionally, the app allows for the
                deletion of folders, providing flexibility as academic needs
                evolve. Leveraging Async Storage, all data is securely stored on
                the device, safeguarding privacy and ensuring accessibility.
                Experience enhanced productivity and organization with the
                Hometask Tracker app – essential companion for academic success.
              </p>
            </div>
          </div>
          <div className={classes.actions}>
            <GithubButton url="https://github.com/maksym-bohun/hometasks-tracker" />
            {/* <DemoButton url="https://ftech.company/" /> */}
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
