import React, { Component } from "react";
import "./signup.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: false,
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();

    let emailid = localStorage.getItem("email");
    let passid = localStorage.getItem("password");

    if (emailid === this.state.email && passid === this.state.password) {
      console.log("User succesfully Logged in");
    } else {
      this.setState({
        errors: true,
      });
    }

    this.props.history.push("/success");
  };

  render() {
    return (
      <form align="center" onSubmit={this.onSubmit}>
        <h1>Sign-In</h1>
        <b>Email</b> :{" "}
        <input
          type="email"
          name="email"
          placeholder="Enter email id"
          value={this.state.email}
          onChange={(e) => this.onChange(e)}
        />
        <br />
        <br />
        <b>password</b> :{" "}
        <input
          className="password_field"
          type="password"
          name="password"
          value={this.state.password}
          onChange={(e) => this.onChange(e)}
        />
        <br />
        <br />
        <button type="submit" className="btn">
          Submit
        </button>
        <br></br>
        <br></br>
        {this.state.errors && (
          <p style={{ color: "red" }}>
            Either USername or password is incorrect!!
          </p>
        )}
        <br />
        <a href="/about">About Us</a>
      </form>
    );
  }
}

export default Login;
