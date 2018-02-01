import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Photo from './Photo.js';
import Buttons from './button.js';
import Buttonsgrp from './Buttonsgrp.js';
import ComplaintForm from './Complaintform.js';

class App extends Component {
  render() {
    return (
      <div className="App">
		<Photo/><br/>
		<Buttons/><br/>
		<Buttonsgrp/><br/><br/>
		<ComplaintForm/>
      </div>
    );
  }
}

export default App;
