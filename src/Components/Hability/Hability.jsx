import React, { Component } from "react";
import "./Hability.scss";
import data from "../../Object/data.json";
import SquareHability from "./SquareHability";

export default class Hability extends Component {
  state = {
    data: data,
    hability: data.Hability.Lists
  };
  render() {
    const { hability } = this.state;

    const squareHability = hability.map((lists, index) => {
      const listDescription = lists.descriptionLists.map((lists, index) => {
        return (
          <React.Fragment>
            {lists}
            <br />
          </React.Fragment>
        );
      });
      return (
        <SquareHability
          key={index}
          imgHability={lists.imgHability}
          altHability={lists.alt}
          descriptionHability={listDescription}
        />
      );
    });
    return (
      <section id="habilites" className="padding-section mtop-max">
        <h2 className="purple-color">Habilités</h2>
        <div className="container-second auto">
          <div className="grid-3 mtop-hability">{squareHability}</div>
        </div>
      </section>
    );
  }
}
