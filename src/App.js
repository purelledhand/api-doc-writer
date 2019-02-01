import React, { Component } from 'react';
import RegisterAPI from './RegisterAPI.js';
import RenderAPI from './RenderAPI.js';
import './App.css';

class App extends Component {
  id = 1;

  state = {
    APIs : [
      {
        id: 0,
        method: 'GET',
        endpoint: 'menu/',
        description: 'show menu list',
        parameter: [
          {
            key: 'sorted',
            value: 'list',
          }
        ],
        returns: [
          {
            key: 'list',
          }
        ]
      },
    ],
  };

  _handleCreate = data => {
    const {APIs} = this.state;

    this.setState({
      APIs : APIs.concat({ id : this.id++, ...data })
    });
  };

  render() {
    return (
      <div className="App">
        <div className="App__controlPanel">
          <RegisterAPI onCreate={this._handleCreate}/>
        </div>
        <div className="App__apiList">
          <RenderAPI APIs={this.state.APIs}/>
        </div>
      </div>
    );
  }

  componentDidMount() {

  }
}

export default App;
