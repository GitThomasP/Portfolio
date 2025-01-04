import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
export default function NavItem({ children }) {
  let link = '/' + children.toLowerCase();

  children.toLowerCase() === 'about' || children.toLowerCase() === 'contact' || children.toLowerCase() === 'home' ? link= '/home#' + children.toLowerCase() : link = '/' + children.toLowerCase();
  return (
    <li className='nav-item'>
      <HashLink smooth to={link}>{children}</HashLink>
    </li>
  );
}
