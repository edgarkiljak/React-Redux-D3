import React, { Component } from 'react';
import './styles/index.css';

class SignIn extends Component {
  cosnstructor() {
    this.state = {
      o: 1
    };
  }

  handleChange = e => {
    console.log(e);
  };

  handleSubmit = e => {
    console.log(e);
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
              onChage={this.handleChange}
            ></input>
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="wehopeitsnot123"
              onChage={this.handleChange}
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
