
import "./NavigationBar.css";
import NavItem from "./NavItem.jsx";

export default function NavigationBar() {
  const navItems = ["Home", "Projects", "About","Contact"];

  return (
    <div className='navigation-bar'>
      <div className='navigation-container'>
        <img></img>
        <ul>
          {navItems.map((navItem) => (
            <NavItem key={navItem}>{navItem}</NavItem>
          ))}
        </ul>
      </div>
    </div>
  );
}
