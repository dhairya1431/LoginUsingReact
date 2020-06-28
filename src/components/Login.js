import React, { Component } from 'react'
import { login } from './UserFunctions'
import axios from 'axios'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      errors: false
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    let emailid = localStorage.getItem('email')
    let passid = localStorage.getItem('password')

    if(emailid === this.state.email && passid === this.state.password) {
            console.log('User Logged in')
    }
    else {
        this.setState ( {
            errors : true
        })
        throw 'error occurs';
    }

    const user = {
      email: this.state.email,
      password: this.state.password
    }

    this.props.history.push('/success')
    

  }

  render() {
    return (
        <form align="center" onSubmit={this.onSubmit}>
            <h1>Sign-In</h1>
            
            <b>Email</b> : <input type="email" name="email" placeholder="Enter email id" value={this.state.email} onChange={this.onChange}/><br/><br/>
            <b>password</b> : <input type="password" name="password" value={this.state.password} onChange={this.onChange}/><br/><br/>
            
            <button type="submit">Submit</button><br></br>
            <a href="/signup">Already registered? Sign in here</a>
            
            {this.state.errors && <p style={{color: "red"}}>Either USername or password is incorrect!!</p>}
            <br/><br/>

            <a href="/about">About Us</a>
        </form>
        )
    }
}

export default Login

