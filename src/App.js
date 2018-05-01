import React, { Component } from 'react';
import Header from './components/Header';
import Example from './components/FirstPC';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Example />
    </div>
    );
  }
}

export default App;
