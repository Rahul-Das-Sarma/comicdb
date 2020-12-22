import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import Sidebar from "./components/sidebar/sidebar";
import {Route} from 'react-router-dom';
import BackDrop from "./components/backdrop/backdrop";
import CharactersInfo from "./components/character/character";
import IndividualComics from "./components/comics/individualComics";

function App() {
  const [showSidebar, setSidebar] = useState(false);

  let backdrop;
  const ToggleDrawer = () => {
    setSidebar((prevState) => {
      return !prevState.showSidebar;
    });
  };
  const BackdropHandler = () => {
    return setSidebar(false);
  };

  if (showSidebar) {
    backdrop = <BackDrop clickBackDrop={BackdropHandler} />;
  }

  return (
    <div>
      <Navbar drawerToggler={ToggleDrawer} />
      <Sidebar show={showSidebar} closeSideBar={BackdropHandler} />
      {backdrop}
      <Route exact path="/" component ={Home} />
      <Route exact path="/characters/:id" component={CharactersInfo} />
      <Route exact path="/comics/:id" component={IndividualComics} />
    </div>
  );
}

export default App;
