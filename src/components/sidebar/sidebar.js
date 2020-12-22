import React from "react";
import "./sidebar.css";
import MenuIcon from "@material-ui/icons/Menu";
import { CharacterData } from "../sidebarData/sidebardata";
import {Link} from 'react-router-dom';


function sidebar(props) {
  let drawClass = "SideDrawer";

  if (props.show) {
    drawClass = "SideDrawer open";
  }

  return (
    <div className={drawClass}>
      <div className="top-nav-right-sidebar">
        <div>
          <MenuIcon
            onClick={props.closeSideBar}
            style={{
              color: "white",
              marginTop: "15px",
              marginLeft: "10px",
              fontSize: "55px",
            }}
          />
        </div>
    <Link to='/'>  <img
          className="logo-brand"
          src="https://upload.wikimedia.org/wikipedia/commons/0/04/MarvelLogo.svg"
          alt="marvel-logo"
        /></Link>  
      </div>
      <h3 style={{ color: "rgb(88, 87, 87)",marginLeft:"1rem" }}>Characters</h3>
      <ul>
        
        {CharacterData.map((character, index) => {
          return  <Link
          to={`/characters/${character.path}`}
          style={{ textDecoration: "none", color: "#fff" }}
        > 
        <li key={index}>{character.title}</li>
        </Link>
        ;
        })}
      </ul>
    </div>
  );
}


export default sidebar;
