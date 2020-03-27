import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/layout/Navbar';
import Dashboard from './Components/dashboard/Dashboard';
import SignIn from './Components/auth/SignIn';
import SignUp from './Components/auth/SignUp';
import SignedOut from './Components/layout/SignedOut';
import SignedIn from './Components/layout/SignedIn';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </Switch>
        <Dashboard />
      </div>
    </BrowserRouter>
  );
};

export default App;
