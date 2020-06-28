import React, { Component } from 'react'
import { register } from './UserFunctions'
import axios from 'axios'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class Signup extends Component {
  constructor() {
    super()
    this.state = {
      
      name: 'Abc',
      email: '',
      password: '',
      proff: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
   
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      proff: this.state.proff
    }

    localStorage.setItem('email' , this.state.email)
    localStorage.setItem('password' , this.state.password)

    // 
    this.props.history.push('/login')
  }

  render() {
    return (
        <form align="center" onSubmit={this.onSubmit}>
            <h1>Sign-Up</h1>
            <b>Name</b> : <input type="text" name="name" value={this.state.name} onChange={this.onChange}/><br/><br/>
            <b>Email</b> : <input type="email" name="email" placeholder="Enter email id" value={this.state.email} onChange={this.onChange}/><br/><br/>
            <b>password</b> : <input type="password" name="password" value={this.state.password} onChange={this.onChange}/><br/><br/>
            <b>Profession</b> : 
            <select value={this.state.proff} onChange={this.onChange} name="proff">
                <option value="Doctor">Doctor</option>
                <option value="Engineer">Engineer</option>
                <option value="Teacher">Teacher</option>
                <option value="Student">Student</option>
            </select>
            <br/><br/>
            <a href="/login"><button type="submit">Submit</button></a>
            <br></br>
            <a href="/login">Already registered? Sign in here</a><br/><br/>

            <a href="/about">About Us</a>
        </form>
    )
  }
}

export default Signup











