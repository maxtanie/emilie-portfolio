import React, { Component } from "react";
import "./Formations.scss";
import data from "../../Object/data.json";

export default class Formations extends Component {
  state = {
    data: data,
    formations: data.Formations.Lists
  };
  render() {
    const { formations } = this.state;

    const circlesFormations = formations.map((lists, index) => {
      return (
        <div className="box-formations">
          <div className="circles-infos">
            <div className="content">
              <div className="years">{lists.years}</div>
              <div className="formations-name red-apple-color ">
                {lists.formationsName}
              </div>
              <div
                className={
                  lists.formationsName === "Cefiac" ? `stroke none` : `stroke`
                }
              ></div>
            </div>
          </div>
          <p
            className={
              index % 2 === 0
                ? `content-descriptions left`
                : ` content-descriptions right`
            }
          >
            {lists.descriptions}
          </p>
        </div>
      );
    });

    return (
      <section id="formations" className="padding-section">
        <h2 className="fluo-yellow-color">Formations</h2>
        <div className="container-formations">{circlesFormations}</div>
      </section>
    );
  }
}
