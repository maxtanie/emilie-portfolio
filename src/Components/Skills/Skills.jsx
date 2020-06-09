import React, { Component } from "react";
import data from "../../Object/data.json";
import "./Skills.scss";
import BlockSkills from "./BlockSkills.jsx";
import CirclesSkills from "./CirclesSkills.jsx";

export default class Skills extends Component {
  state = {
    data: data,
    skills: data.Skills.Lists
  };
  render() {
    const { skills } = this.state;

    const skillsList = skills.map((lists, index) => {
      return (
        <BlockSkills
          key={index}
          imgSkills={lists.imgSkills}
          altSkills={lists.alt}
          levelStr={lists.levelStr}
        >
          <CirclesSkills
            maxCircles={5}
            level={lists.level}
            colorsCircles="#e7e1e1"
          ></CirclesSkills>
        </BlockSkills>
      );
    });
    return (
      <section id="competences" className="padding-section">
        <h2 className="purple-color ">Compétences</h2>
        <div className="container-skills">
          <div className="grid-5">{skillsList}</div>
        </div>
      </section>
    );
  }
}
