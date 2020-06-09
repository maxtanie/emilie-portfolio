import React, { Component } from "react";
import "./Hobbies.scss";
import data from "../../Object/data.json";
import CirclesHobbies from "./CirclesHobbies";

export default class Hobbies extends Component {
  state = {
    data: data,
    hobbies: data.Hobbies.Lists
  };
  render() {
    const { hobbies } = this.state;

    const hobbiesLists = hobbies.map((lists, index) => {
      return (
        <CirclesHobbies
          imgHobbies={lists.imgHobbies}
          altHobbies={lists.alt}
          nameHobbies={lists.name}
        />
      );
    });
    return (
      <section id="loisirs" className="padding-section">
        <h2 class="purple-color">Loisirs</h2>
        <div className="container-second auto">
          <div className="grid-4">{hobbiesLists}</div>
        </div>
      </section>
    );
  }
}
