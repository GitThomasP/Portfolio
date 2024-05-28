import "./NavigationBar.css";

export default function NavigationBar() {
  return (
    <div className="navigation-bar">
        <div className="navigation-container">
            <img></img>

            <ul>
                <li className="nav-item"><a href="#">Home</a></li>
                <li className="nav-item"><a href="#">Projects</a></li>
                <li className="nav-item"><a href="#">About</a></li>
                <li className="nav-item"><a href="#">Contact</a></li>
            </ul>
        </div>

    </div>
  );
  }