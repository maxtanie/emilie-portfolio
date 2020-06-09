import React, { Component } from "react";
// DECLARATION OF MY CREATION LIST JSON OBJECT
import print from "../../Object/print.json";
import logo from "../../Object/logo.json";
import web from "../../Object/web.json";
import packaging from "../../Object/packaging.json";
import CreationsListsPages from "./CreationsListsPages.jsx";

const dataCreationsList = [print, logo, web, packaging];

export default class CreationsLists extends Component {
  render() {
    const url = this.props.location.pathname;

    const creationsListsToFilter = dataCreationsList.map((info, index) => {
      const pub = process.env.PUBLIC_URL;
      return info.map(elem => {
        return elem.DefaultsCreations.map(elem => {
          if (url.includes(elem.name)) {
            return elem.ListsDefaultCreationsDetails.map(details => {
              return (
                <CreationsListsPages
                  id={details.id}
                  titleCreations={elem.alt}
                  itemCreations={details.item}
                  descriptions={details.descriptions}
                  img={`../${pub}` + details.img}
                />
              );
            });
          }
        });
      });
    });

    return (
      <section className="container-creations-list">
        <div className="grid-creations">{creationsListsToFilter}</div>
      </section>
    );
  }
}
