import React, { Component } from "react";
import "./BoxCreations.scss";

export default class BoxCreations2 extends Component {
  render() {
    const { img, alt, name, titleCreations, filterItem } = this.props;
    const pub = process.env.PUBLIC_URL;
    return (
      <a
        className="link-read-more"
        href={`/creations/${titleCreations
          .split(" ")
          .join("")
          .toLowerCase()}`}
      >
        <section
          className={`box-creations filter-item bg-yellow-color ${filterItem}`}
        >
          <div className="block-img-default">
            <img src={pub + img} alt={alt} />
            <div className="layer-infos hide">
              <h2 className="name">{name}</h2>
            </div>
          </div>
        </section>
      </a>
    );
  }
}
