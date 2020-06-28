import React, { Component } from "react";
import data from "./data.json";
import "./further.css";

/** Movie list  */

class Further extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
    };
  }

  render() {
    return data.movie.map((item) => {
      return (
        <div key={item._id} className="container">
          <img className="image" alt="movie poster" src={item.poster} />
          <div className="container__wrapper">
            <div className="container__item">
              <span>Directors:</span>
              {item.director.map((item1, index) => (
                <b key={index}>{item1}</b>
              ))}
            </div>

            <div className="container__item">
              <span>Stars:</span>
              {item.stars.map((item1, index) => (
                <b key={index}>{item1}</b>
              ))}
            </div>
            <div className="container__item">
              <span>Pageviews:</span>
              <b>{item.pageViews}</b>
            </div>
            <div className="container__item">
              <span>title:</span>
              <b>{item.title}</b>
            </div>
            <div className="container__item">
              <span>language:</span>
              <b>{item.language}</b>
            </div>
          </div>
        </div>
      );
    });
  }
}

export default Further;
