import React, { Component } from "react";
import "./signup.css";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      proff: "",
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  /** Onchange of the control store the value into state */
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  /** On submit button clicked*/
  onSubmit(e) {
    // Store the values inside localstorage
    localStorage.setItem("email", this.state.email);
    localStorage.setItem("password", this.state.password);

    // redirect user to login screen
    this.props.history.push("/login");
  }

  render() {
    return (
      <form align="center" onSubmit={this.onSubmit}>
        <h1>Sign-Up</h1>
        <b>Name</b> :{" "}
        <input
          className="name_field"
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.onChange}
        />
        <br />
        <br />
        <b>Email</b> :{" "}
        <input
          type="email"
          name="email"
          placeholder="Enter email id"
          value={this.state.email}
          onChange={this.onChange}
        />
        <br />
        <br />
        <b>password</b> :{" "}
        <input
          className="password_field"
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.onChange}
        />
        <br />
        <br />
        <b>Profession</b> :
        <select
          className="profession_field"
          value={this.state.proff}
          onChange={this.onChange}
          name="proff"
        >
          <option value="Doctor">Doctor</option>
          <option value="Engineer">Engineer</option>
          <option value="Teacher">Teacher</option>
          <option value="Student">Student</option>
        </select>
        <br />
        <br />
        <a href="/login">
          <button className="btn" type="submit">
            Submit
          </button>
        </a>
        <br />
        <br />
        <a href="/login">Already registered? Sign in here</a>
        <br />
        <br />
        <a href="/about">About Us</a>
      </form>
    );
  }
}

export default Signup;
