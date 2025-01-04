import { Link } from "react-router-dom";
import "./NavigationBar.css";
import NavItem from "./NavItem.jsx";

export default function NavigationBar() {
  const navItems = ["Home", "Projects", "About","Contact"];

  return (
    <div className='navigation-bar fixed-top'>
      <div className='navigation-container'>
        <ul>
          {navItems.map((navItem) => (
            <NavItem key={navItem}>{navItem}</NavItem>
          ))}
        </ul>
      </div>
    </div>
  );
}
