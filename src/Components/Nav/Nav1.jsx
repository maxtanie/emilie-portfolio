import React, { Component } from "react";
import "./Nav1.scss";

export default class Nav1 extends Component {
  render() {
    const pub = process.env.PUBLIC_URL;

    const { link1, link2, link3, subMenuLinks = [] } = this.props;
    const subMenu = subMenuLinks;

    return (
      <nav className="main-nav-top-center auto">
        <a href="/" className="logo">
          {window.location.pathname.includes("creations") ? (
            <img
              src={`../${pub}` + "img/new-icones/logo-1.png"}
              alt="Logo Emilie Pham Da"
              className="logo-main-nav"
            />
          ) : (
            <img
              src={pub + "img/new-icones/logo-1.png"}
              alt="Logo Emilie Pham Da"
              className="logo-main-nav"
            />
          )}
        </a>

        <ul className="container-menu auto great-wishes flex">
          <li className="list-no-items triangle-home">
            <a href="/" className="anchors-main-menu anch-1 yellow-color">
              {link1}
            </a>
          </li>
          <li className="list-no-items circle-creations">
            <a
              href="/creations"
              className="anchors-main-menu anch-2 red-apple-color"
            >
              {link2}
              <div className="content-rotate">
                <ul className="sub-menu-main">
                  {subMenu.map((subMenuLists, index) => {
                    return (
                      <li key={index} className="list-no-items list-sub-menu">
                        <div className="content-anchors">
                          <a href="" className="anchors-main-menu">
                            {subMenuLists}
                          </a>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </a>
          </li>
          <li className="list-no-items square-contact">
            <a
              href="/contact"
              className="anchors-main-menu anch-3 violet-pink-color"
            >
              {link3}
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
