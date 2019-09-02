import React, { Component } from 'react';
import AppHeader from './components/AppHeader';
import Display from './components/Display';
import KeyPad from './components/KeyPad';
import Footer from './components/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <Display />
        <KeyPad />
        <Footer />
      </div>
    );
  }
}

export default App;
