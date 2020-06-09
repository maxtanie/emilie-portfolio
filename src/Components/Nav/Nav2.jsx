import React, { Component } from "react";
import "./Nav2.scss";

export default class Nav2 extends Component {
  render() {
    const { tabLinks = [] } = this.props;
    const link = tabLinks;
    const linksIds = [
      "apropos",
      "formations",
      "competences",
      "loisirs",
      "habilites"
    ];

    return (
      <nav className="second-nav fixed-right">
        <ul>
          {link.map((lists, index) => {
            const idsLinks = linksIds.map(listsId => {
              return listsId;
            });
            return (
              <li key={index} className="list-items purple-bg-color">
                <a
                  href={`#${idsLinks[index]}`}
                  className="anchors great-wishes fluo-yellow-color"
                >
                  {lists}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}
