import React, { useEffect, useState } from "react";
import "./navbar.css";
import MenuIcon from "@material-ui/icons/Menu";
import { CharacterData } from "../sidebarData/sidebardata";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  let navBarClass = "top_navbar";
  const [show, handleShow] = useState(navBarClass);

  useEffect(()=> {
    window.addEventListener('scroll',() => {
      if(window.scrollY > 20){
        handleShow(navBarClass + ' top_navbar_on_scroll')
      }else {
        handleShow(navBarClass)
      }
    })
  },[])


  return (
    <nav className={show}>
      <div className="top-nav-right">
        <div className="menu-logo">
          <MenuIcon
            onClick={props.drawerToggler}
            style={{
              color: "white",
              marginTop: "15px",
              marginLeft: "10px",
              fontSize: "55px",
            }}
          />
        </div>
        <Link to="/">
          
          <img
            className="logo-brand"
            src="https://upload.wikimedia.org/wikipedia/commons/0/04/MarvelLogo.svg"
            alt="marvel-logo"
          />
        </Link>
      </div>
      <div className="nav__drawer">
        <h3 style={{ color: "rgb(88, 87, 87)", marginLeft: "1rem" }}>
          Characters
        </h3>
        <ul>
          {CharacterData.map((character, index) => {
            return (
              <Link
                to={`/characters/${character.path}`}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                
                <li key={index}> {character.title}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
