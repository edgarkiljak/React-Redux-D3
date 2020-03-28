import React, { Component } from 'react';
import './index.css';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
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
        <form
          onSubmit={this.handleSubmit}
          className="black-signin-wall-form sign-up"
        >
          <div className="close-btn">&#10005;</div>
          <h5 className="black-signin-text">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="e.g. test@test.co.uk"
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="e.g. Test123!@?#"
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              placeholder="e.g. Test"
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              placeholder="e.g. Test"
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="input-field">
            <button className="btn">Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
}
export default SignUp;
