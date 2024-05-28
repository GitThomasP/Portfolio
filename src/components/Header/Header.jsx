import coreConceptPng from "../../assets/react-core-concepts.png";
import "./Header.css";
const reactDescriptions = ["Fundemental", "Crucial", "Core"];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default function Header() {
    const description = reactDescriptions[getRandomInt(2)];
  
    return (
      <header>
        <div >
        <h1 className="animate-jump animate-infinite">Welcome!</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
        </div>
      </header>
    );
  }