import React, { useState } from "react";
import { images } from "../../constants";

import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./Navbar.css";

const Navbar = () => {
  const [ToggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="app__navbar">
      <div className="app__navbar-redirections">
        <a href="#Home">Home</a>
        <a href="#Catalogue">Catalogue</a>
        <a href="#About">About</a>
      </div>
      <div className="app__navbar-logo">
        <img src={images.Logo} alt="" />
      </div>
      <div className="app__navbar-redirections">
        <a href="#Gallery">Gallery</a>
        <a href="#Opinion">Opinions</a>
        <a href="#Contact">Contact</a>
      </div>
      <div className="app__navbar-menu">
        {ToggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {ToggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <div className="app__navbar-redirections_menu">
                <a href="#Home">Home</a>
                <a href="#Catalogue">Catalogue</a>
                <a href="#About">About</a>
                <a href="#Gallery">Gallery</a>
                <a href="#Opinion">Opinions</a>
                <a href="#Contact">Contact</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
