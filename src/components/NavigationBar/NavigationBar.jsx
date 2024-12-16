import { Link } from "react-router-dom";
import "./NavigationBar.css";
import NavItem from "./NavItem.jsx";

export default function NavigationBar() {
  const navItems = ["Home", "Projects", "About","Contact"];

  return (
    <div className='navigation-bar'>
      <div className='navigation-container'>
        <a><span className="NavLogo">Thomas Baaré</span></a>
        <ul>
          {navItems.map((navItem) => (
            <NavItem key={navItem}>{navItem}</NavItem>
          ))}
        </ul>
      </div>
    </div>
  );
}
