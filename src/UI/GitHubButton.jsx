import "../App.css";
import ghButton from "./../images/github-btn.png";
const GithubButton = (props) => {
  return (
    <a href={props.url} target="_blank" className="gh-button">
      <div>
        Code
        <span>
          <img src={ghButton} />
        </span>
      </div>
    </a>
  );
};

export default GithubButton;
