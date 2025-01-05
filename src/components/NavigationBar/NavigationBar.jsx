import { Link } from "react-router-dom";
import "./NavigationBar.css";
import NavItem from "./NavItem.jsx";
import { useState } from "react";

export default function NavigationBar() {
  const navItems = ["Home", "Projects", "About","Contact"];
  const [isScrolled, setIsScrolled] = useState(false);
  
  window.onscroll = () => {window.scrollY === 0 ? setIsScrolled(false) : setIsScrolled(true)};

  function navClickHandler(navItem) {
    navItem === "Home" ? setIsScrolled(false) : setIsScrolled(true);
  }

  return (
    
    <div className={`navigation-bar fixed-top ${isScrolled ? 'navBarScrolled' : ''}`}>
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
