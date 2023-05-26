import { Link, useLocation } from "react-router-dom";
import "../assets/css/header.css";
import { Button } from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AboutRoundedIcon from '@mui/icons-material/InfoRounded';
import ContactRoundedIcon from '@mui/icons-material/ContactMailRounded';
import PolicyRoundedIcon from '@mui/icons-material/PolicyRounded';
import GamesRoundedIcon from '@mui/icons-material/SportsEsportsRounded';

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
      <h1>NORTHSIDE YOUTH LEAGUE</h1>
      <nav>
      <ul className="list">
        <Link to="/">
          <Button variant="contained" color="success" startIcon={<HomeRoundedIcon />}>
            Home
          </Button>
        </Link>
        <Link to="/about">
          <Button variant="contained" color="success" startIcon={<AboutRoundedIcon />}>
            About
          </Button>
        </Link>
        <Link to="/contact">
          <Button variant="contained" color="success" startIcon={<ContactRoundedIcon />}>
            Contact
          </Button>
        </Link>
        <Link to="/rules-and-policies">
          <Button variant="contained" color="success" startIcon={<PolicyRoundedIcon />}>
            Rules and Policies
          </Button>
        </Link>
        <Link to="/games">
          <Button variant="contained" color="success" startIcon={<GamesRoundedIcon />}>
            Game information
          </Button>
        </Link>
      </ul>
    </nav>
    </header>
  );
};

export default Header;
