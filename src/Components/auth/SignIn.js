import React, { Component } from 'react';
import './styles/index.css';
import { connect } from 'react-redux';
import { signIn } from '../../Redux/actions/authActions';
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
    this.props.signIn(this.state);
  };

  render() {
    const { authError } = this.props;
    const warningSign = '⚠️';
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
              placeholder="e.g. email@address.com"
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="e.g.  Test123"
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="status">
            {authError ? (
              <p>
                {authError} {warningSign}
              </p>
            ) : null}
          </div>
          <div className="input-field">
            <button className="btn">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToPros = state => {
  const { auth } = state;
  console.log(state.auth);
  console.log(auth.authError);
  return { authError: auth.authError };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => {
      dispatch(signIn(creds));
    }
  };
};
export default connect(mapStateToPros, mapDispatchToProps)(SignIn);
