import React, { Component } from "react";
import data from "../../Object/data.json";

export default class ListsAboutExamples extends Component {
  state = {
    data: data,
    listsAbout: data.About.ExampleSkills
  };
  render() {
    const { listsAbout } = this.state;

    return (
      <div className="grid-2 mtop">
        {listsAbout.map((lists, index) => {
          return (
            <div className="block-skills-example" key={index}>
              <div className="flex">
                <div className="name">{lists.name}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
