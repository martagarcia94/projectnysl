import { Link, useLocation } from "react-router-dom";
import "../assets/css/header.css";

const Header = () => {
  const location = useLocation();
  const menu = [
    { name: "Home", link: "/", isActive: false },
    { name: "About", link: "/about", isActive: false },
    { name: "Contact", link: "/contact", isActive: false },
    {
      name: "Rules and Policies",
      link: "/rules-and-policies",
      isActive: false,
    },
    {
      name: "Game Information",
      link: "/games",
      isActive: false,
    },
  ];

    menu.forEach((menuItem) =>
      menuItem.link === location.pathname
      ? (menuItem.isActive = true)
      : (menuItem.isActive = false)
  );
  
  return (
    <header>
      <h1>Northside Youth Soccer League</h1>
      <nav>
        <ul className="list">
          {menu.map((menuItem, index) => (
            <Link
              key={index}
              className={`menu__link ${menuItem.isActive ? "active" : ""}`}
              to={menuItem.link}
            >
              <li>{menuItem.name}</li>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;