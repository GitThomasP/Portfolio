import { Link } from "react-router-dom";
export default function NavItem({ children }) {
  const link = '/' + children.toLowerCase();
  return (
    <li className='nav-item'>
      <Link to={link}>{children}</Link>
    </li>
  );
}
