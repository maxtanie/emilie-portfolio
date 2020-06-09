import React, { Component } from "react";

export default class BlockSkills extends Component {
  render() {
    const { imgSkills, altSkills, levelStr } = this.props;
    return (
      <div className="content-skills">
        <div className="block-skills">
          <div className="img-skills">
            <img src={imgSkills} alt={altSkills} />
          </div>
          {this.props.children}
          <p className="levelStr purple-color">{levelStr}</p>
        </div>
      </div>
    );
  }
}
