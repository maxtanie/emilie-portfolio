import React, { Component } from "react";

export default class SquareHability extends Component {
  render() {
    const { imgHability, altHability, descriptionHability } = this.props;

    return (
      <article className="square-hability">
        <div className="block-img-hability">
          <img src={imgHability} alt={altHability} className="img-hability" />
        </div>
        <div className="block-description">{descriptionHability}</div>
      </article>
    );
  }
}
