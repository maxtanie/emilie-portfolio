import React, { Component } from "react";

export default class CirclesHobbies extends Component {
  render() {
    const { imgHobbies, altHobbies, nameHobbies } = this.props;
    return (
      <article className="absolute-hobbies block-circles-hobbies">
        <div className="circles-hobbies">
          <div className="content">
            <div className="block-img-hobbies">
              <img src={imgHobbies} alt={altHobbies} className="img-hobbies" />
            </div>

            <p className="name-hobbies purple-color">{nameHobbies}</p>
          </div>
        </div>
      </article>
    );
  }
}
