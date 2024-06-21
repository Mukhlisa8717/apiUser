import React, { useState, useEffect, useRef } from "react";
import "./Navbar.scss";
import logo from "../../../public/logoDark.png";
import { FaHome, FaUser, FaUsers } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { BiSolidLogIn } from "react-icons/bi";

const Navbar = ({ setIsLogin }) => {
  const [menu, setMenu] = useState(false);
  const userData = JSON.parse(localStorage.getItem("user-data"));

  const sideNavbarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!sideNavbarRef.current.contains(event.target)) {
        setMenu(false);
      }
    };

    if (menu) {
      document.addEventListener("click", handleClickOutside);
      document.body.classList.add("menu-open");
    } else {
      document.removeEventListener("click", handleClickOutside);
      document.body.classList.remove("menu-open");
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.body.classList.remove("menu-open");
    };
  }, [menu]);

  const handleNavbarClick = () => {
    setMenu(!menu);
  };

  return (
    <>
      <nav className="navbar">
        {userData ? (
          <h2>
            {userData.FirstName} | {userData.role}
          </h2>
        ) : (
          <></>
        )}
      </nav>
      <nav
        className={`side-navbar ${menu ? "menu" : ""}`}
        onClick={handleNavbarClick}
        ref={sideNavbarRef}
      >
        <img src={logo} alt="logo" className="side-navbar__logo" />
        <div className={`side-navbar__menu ${menu ? "open" : ""}`}>
          <NavLink to="/" className="side-navbar__menu-item">
            <FaHome size={18} />
            <h5>Home</h5>
          </NavLink>
          <NavLink to="/profile" className="side-navbar__menu-item">
            <FaUser size={15} />
            <h5>Profile</h5>
          </NavLink>
          {userData?.role === "admin" ? (
            <NavLink to="/users" className="side-navbar__menu-item">
              <FaUsers size={18} />
              <h5>Users</h5>
            </NavLink>
          ) : (
            <></>
          )}
          <NavLink
            to="/exit"
            className="side-navbar__menu-item"
            onClick={() => {
              setIsLogin(false);
              localStorage.clear();
            }}
          >
            <BiSolidLogIn size={18} />
            <h5>Exit</h5>
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
