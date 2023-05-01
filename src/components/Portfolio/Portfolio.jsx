import todoImage from "../../images/todo.jpg";
import typingTrainerImage from "../../images/typing-trainer.jpg";
import bookShopImage from "../../images/book-store.jpg";
import kanbanImage from "../../images/kanban.jpg";
import classes from "./Portfolio.module.css";
import GithubButton from "../../UI/GitHubButton";
import DemoButton from "../../UI/DemoButton";

const Portfolio = () => {
  return (
    <section
      className={`${classes["portfolio-section"]} centered-2`}
      id="projects"
    >
      <h2>My projects</h2>
      <div className={classes["portfolio-section__projects"]}>
        <img
          src={todoImage}
          alt=""
          className={classes["portfolio-section__image"]}
        />
        <div className={classes["portfolio-section__info"]}>
          <h3>Todo-list</h3>
          <p>
            The Todo-list app is a versatile application that allows users to
            efficiently manage their tasks and set timely reminders. With its
            user-friendly interface, users can easily create and organize their
            to-do lists, ensuring that no task goes unnoticed. Additionally,
            users can set reminders for specific tasks to receive timely
            notifications, ensuring that deadlines are met and important tasks
            are not forgotten.
          </p>
          <div className={classes.actions}>
            <GithubButton url="https://github.com/maksym-bohun/my-todo-list" />
            <DemoButton url="https://maksym-bohun.github.io/my-todo-list/" />
          </div>
        </div>
        <div className={classes["portfolio-section__info"]}>
          <h3>Book Shop</h3>
          <p>
            Introducing BookShop, the ultimate bookworm's companion. Discover,
            sort, and purchase your favorite books effortlessly with our
            user-friendly app. Find your next literary adventure, sort by name
            or price, add to cart, and proceed to a seamless checkout
            experience. BookShop puts the world of books at your fingertips,
            making it easier than ever to indulge in your reading passion.
          </p>
          <div className={classes.actions}>
            <GithubButton url="https://github.com/maksym-bohun/book-shop" />
            <DemoButton url="https://maksym-bohun.github.io/book-shop/" />
          </div>
        </div>

        <img
          src={bookShopImage}
          alt=""
          className={classes["portfolio-section__image"]}
        />
        <img
          src={typingTrainerImage}
          alt=""
          className={classes["portfolio-section__image"]}
        />
        <div className={classes["portfolio-section__info"]}>
          <h3>Typing Trainer</h3>
          <p>
            Introducing the ultimate Typing Trainer: a comprehensive platform
            featuring a Speed Test section to measure your typing speed and
            accuracy, a Train Typing section with structured lessons, and a
            Challenges section to test your skills. Whether you're a beginner or
            aiming to become a typing pro, this trainer is your go-to resource
            for mastering efficient and swift typing.
          </p>
          <div className={classes.actions}>
            <GithubButton url="https://github.com/maksym-bohun/typing-training-app" />
            <DemoButton url="https://maksym-bohun.github.io/typing-training-app/" />
          </div>
        </div>
        <div className={classes["portfolio-section__info"]}>
          <h3>Github Kanban Board</h3>
          <p>
            GitHub Kanban Board: Streamline your project management by pasting
            your GitHub repo URL and instantly organizing issues into ToDo, In
            Progress, and Done columns. Effortlessly track progress, collaborate
            with your team, and stay organized in one user-friendly interface.
            Boost your productivity with the power of the GitHub Kanban Board.
          </p>
          <div className={classes.actions}>
            <GithubButton url="https://github.com/maksym-bohun/kanban-board" />
            <DemoButton url="https://maksym-bohun.github.io/kanban-board/" />
          </div>
        </div>
        <img
          src={kanbanImage}
          alt=""
          className={classes["portfolio-section__image"]}
        />
      </div>
    </section>
  );
};

export default Portfolio;
