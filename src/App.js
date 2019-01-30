import React, { Component } from 'react';
import RegisterAPI from './RegisterAPI.js';
import RenderAPI from './RenderAPI.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App__controlPanel">
          <RegisterAPI/>
        </div>
        <div className="App__apiList">
          <RenderAPI/>
        </div>
      </div>
    );
  }
}

export default App;
