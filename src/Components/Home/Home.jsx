import React, { Component } from "react";
import About from "../About/About.jsx";
import Formations from "../Formations/Formations.jsx";
import Skills from "../Skills/Skills.jsx";
import Hobbies from "../Hobbies/Hobbies.jsx";
import Hability from "../Hability/Hability.jsx";
import Nav1 from "../Nav/Nav1.jsx";
import Nav2 from "../Nav/Nav2.jsx";
import About1 from "../About/About1.jsx";
import Formations1 from "../Formations/Formations1.jsx";
import Skills1 from "../Skills/Skills1.jsx";
import Hability1 from "../Hability/Hability1.jsx";
import Hobbies1 from "../Hobbies/Hobbies1.jsx";

export default class Home extends Component {
  render() {
    return (
      <main>
        <About1></About1>
        <Formations></Formations>
        <Skills></Skills>
        <Hobbies></Hobbies>
        <Hability></Hability>
      </main>
    );
  }
}
