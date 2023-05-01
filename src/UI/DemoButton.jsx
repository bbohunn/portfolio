import "../App.css";
import demoButton from "./../images/link.png";
const DemoButton = (props) => {
  return (
    <a href={props.url} target="_blank" className="gh-button">
      <div>
        Live Demo
        <span>
          <img src={demoButton} />
        </span>
      </div>
    </a>
  );
};

export default DemoButton;
