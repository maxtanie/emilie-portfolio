import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
// @import "~bootstrap/scss/bootstrap";

import "./App.scss";
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import Creations from "./Components/Creations/Creations";
import Nav1 from "./Components/Nav/Nav1";
import Nav2 from "./Components/Nav/Nav2";
import CreationsLists from "./Components/Creations/CreationsLists";
import ListsPages from "./Components/Creations/ListsPages";

export default class App extends Component {
  render() {
    const locationCreations =
      window.location.pathname.includes("creations") ||
      window.location.pathname.includes("contact");

    const mainNav = (
      <Nav1
        link1="Accueil"
        link2="Créations"
        link3="Contact"
        subMenuLinks={["Print", "Logo", "Packaging", "Web"]}
      ></Nav1>
    );
    const NavHome = () => {
      return (
        <React.Fragment>
          {mainNav}
          <Nav2
            tabLinks={[
              "A propos",
              "Formations",
              "Compétences",
              "Loisirs",
              "Habillités"
            ]}
          ></Nav2>
        </React.Fragment>
      );
    };

    const NavCreations = () => {
      return <React.Fragment>{mainNav}</React.Fragment>;
    };

    const switchLocations = locationCreations ? (
      <NavCreations></NavCreations>
    ) : (
      <NavHome></NavHome>
    );

    return (
      <div>
        {switchLocations}
        <Route>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/creations" exact component={Creations} />
            <Route path="/creations/:id" exact component={ListsPages} />
          </Switch>
        </Route>
      </div>
    );
  }
}
