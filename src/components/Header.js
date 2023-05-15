import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/css/header.css";
import firebase from "firebase/compat/app";

const Header = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log("auth changed", user);
      setUser(user);
    });
  }, []);

  console.log(user);
  const location = useLocation();
  const menu = [
    { name: "Home", link: "/", isActive: false, isShown: true },
    { name: "About", link: "/about", isActive: false, isShown: true },
    { name: "Contact", link: "/contact", isActive: false, isShown: true },
    {
      name: "Rules and Policies",
      link: "/rules-and-policies",
      isActive: false,
      isShown: true,
    },
    {
      name: "Game Information",
      link: "/games",
      isActive: false,
      isShown: true,
    },
    { name: "Messages", link: "/messages", isActive: false, isShown: false },
  ];

    menu.forEach((menuItem) =>
      menuItem.link === location.pathname
      ? (menuItem.isActive = true)
      : (menuItem.isActive = false)
  );
  
  user ? (menu[5].isShown = true) : (menu[5].isShown = false);
  
  return (
    <header>
      <h1>Northside Youth Soccer League</h1>
      <nav>
        <ul className="list">
          {menu.map(
            (menuItem, index) =>
              menuItem.isShown && (
                <Link
                  key={index}
                  className={`menu__link ${menuItem.isActive ? "active" : ""}`}
                  to={menuItem.link}
                >
                  <li>{menuItem.name}</li>
                </Link>
              )
           )}
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