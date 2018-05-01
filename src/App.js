import React, { Component } from 'react';
import Header from './components/Header'
import SearchBar from './components/Search'

class App extends Component {
  render() {
    return (
      <div>
    <Header />

      <SearchBar />
    </div>
    );
  }
}

export default App;
