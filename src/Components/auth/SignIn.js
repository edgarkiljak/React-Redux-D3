import React, { Component } from 'react';
import './styles/index.css';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="black-signin-wall-container">
        <form onSubmit={this.handleSubmit} className="black-signin-wall-form">
          <div className="close-btn">&#10005;</div>
          <h5 className="black-signin-text">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="email@address.com"
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="wehopeitsnot123"
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="input-field">
            <button className="btn">Login</button>
          </div>
        </form>
      </div>
    );
  }
}
export default SignIn;
