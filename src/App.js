import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Components/layout/Navbar';
import Dashboard from './Components/dashboard/Dashboard';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Dashboard />
      </div>
    </BrowserRouter>
  );
};

export default App;
