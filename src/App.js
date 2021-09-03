import React from 'react';
import './style.css';
import Login from './Login';
import { Component } from 'react';
import Form from './Form';
import Navbar from './Navbar';
import RegisterForm from './RegisterForm/RegisterForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      buttonName: ['Log in', 'Sign up']
    };
  }
  render() {
    return (
      <div>
        <Form buttonName={this.state.buttonName[0]} />

        <RegisterForm buttonName={this.state.buttonName[1]} />
      </div>
    );
  }
}

export default App;
