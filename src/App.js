import React, { Component } from 'react';
import Box from './components/Box';
import Resizer from './components/Resizer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <Box initWidth="50%" initHeight="300"/>
          <div style={{padding:"30px"}}>
              <h1>Hello resizer</h1>
              <Resizer/>
          </div>
      </div>
    );
  }
}

export default App;
