import React, { Component } from "react";
import "./about.css";
/** About the company */

export class About extends Component {
  render() {
    return (
      <div>
        <div className="item">
          <span>Company:</span>
          <b className="value"> Geeksynergy Technologies Pvt Ltd</b>
        </div>
        <br />
        <div className="item">
          <span>Address:</span>
          <b className="address"> Sanjayanagar, Bengaluru-56</b>
        </div>
        <br />
        <div className="item">
          <span>Phone:</span>
          <b className="phone">XXXXXXXXX09</b>
        </div>
        <br />
        <div className="item">
          <span>Email</span>
          <b className="email"> XXXXXX@gmail.com</b>
        </div>
      </div>
    );
  }
}

export default About;
