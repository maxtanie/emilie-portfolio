import React, { Component } from "react";
import "./ListsPages.scss";
import print from "../../Object/print2.json";
import logo from "../../Object/logo2.json";
import web from "../../Object/web2.json";
import Carousel from "./Carousel";

let loc = window.location.pathname,
  nu = 0,
  lists = print.concat(logo, web),
  val = "",
  prop = "",
  urlName = "";

let showLink = lists.map(elem => {
  return elem.DefaultsCreations.map(links => {
    return links.name;
  });
});

const li = showLink.map((elem, index) => {
  let val = `/creations/${elem}`;
  if (loc === val) {
    nu = index;
    return nu;
  } else {
  }
});

console.log(li);

export default class ListsPages extends Component {
  state = {
    index: nu,
    indexPrev: nu,
    lists: lists,
    name: "",
    num: 0,
    resetNum: 0,
    ids: 1,
    isActived: null,
    descriptions: ""
  };

  prev = () => {
    const { lists } = this.state;

    if (lists.length === 1) {
      return this.setState({
        index: 0
      });
    }
    if (this.state.index === 0) {
      this.setState({
        index: lists.length - 1
      });
    } else {
      this.setState({
        index: this.state.index - 1
      });
    }
  };

  next = () => {
    const { lists } = this.state;
    if (lists.length === 1) {
      return this.setState({
        index: 0
      });
    }
    if (this.state.index < lists.length - 1) {
      this.setState({
        index: this.state.index + 1
      });
    } else {
      this.setState({
        index: 0
      });
    }
  };

  changeData = event => {
    let { lists, num, index, indexPrev, resetNum } = this.state;
    indexPrev = index <= 0 ? (indexPrev = 0) : index - 1;

    let ids = event.target.id - 1;
    let nums = ids;

    console.log(
      "ids:",
      ids,
      "num:",
      num,
      "index:",
      index,
      "indexPrev: ",
      indexPrev
    );
    if (nums === ids) {
      return this.setState({
        num: nums
      });
    }
  };

  carouselOpen = () => {
    return (
      <Carousel
        name="https://lh3.googleusercontent.com/oxPeODS2m6rYIVbhcQChRtOWEYeGDwbeeeB1cDU2o_WYAVPU61VIgx-_6BAh5gSL8Sw=h900"
        item="Print"
        descriptions="Super carousel"
      />
    );
  };
  render() {
    let { index, lists } = this.state;
    // let his = this.props.history;
    // his = prop;

    // let x = showLink.map((elem, index) => {
    //   let val = `/creations/${elem}`;
    //   if (loc === val) {
    //     nu = index;
    //     return nu;
    //   } else {
    //   }
    // });

    // console.log(x);
    const LeftInfo = props => {
      return (
        <div className="left-block">
          <p className="id red-apple-color ">
            {props.id < 10 ? `0${props.id}` : props.id}
          </p>
          <p className="name-2 violet-pink-2-color ">{props.name}</p>
          <p className="item violet-pink-2-color ">{props.item}</p>
          <p className="descriptions">{props.descriptions}</p>
        </div>
      );
    };

    const RightInfo = props => {
      return (
        <img
          id={props.id}
          data-key={props.id}
          key={props.id}
          src={props.img}
          alt=""
          class="img-crea"
          onClick={props.onClick}
        />
      );
    };

    let valName = "",
      valsN = "";

    const vals = lists.map((elem, index) => {
      const l = elem.ListSlide.map((lists, idx) => {
        const pub = "../";
        return (
          <RightInfo
            id={lists.id}
            data-key={lists.id}
            key={lists.id}
            img={pub + lists.img}
            onClick={e => this.changeData(e)}
          ></RightInfo>
        );
      });
      const v = elem.ListsDefaultCreationsDetails.map((list, idx) => {
        urlName = list.name;
        const url = window.location.pathname;

        return (
          <LeftInfo
            id={list.id}
            name={list.name}
            item={list.item}
            descriptions={list.descriptions}
          ></LeftInfo>
        );
      });

      return (
        <div className="grid-page">
          <div className="flex">
            <div className="left-infs">
              {v[index >= 1 ? this.state.resetNum : this.state.num]}
            </div>
            <div className="right-infs">
              <div className="grid-img">{l}</div>
            </div>
          </div>
        </div>
      );
    });

    // console.log(this.state.descriptions);

    return (
      <div className="container">
        <div className="btns">
          <button onClick={this.prev}>&#8592;</button>
          <button onClick={this.next}>&#8594;</button>
        </div>
        <div className="infos">{vals[index]}</div>
      </div>
    );
  }
}
