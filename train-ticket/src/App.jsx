import React, { Component, createContext } from 'react';
import logo from './logo.svg';
import './App.css';

const BatteryContext = createContext()

class Leaf extends Component {
  static contextType = BatteryContext;
  render() {
    const battery = this.context
    return (
          <h1>battery: {battery}</h1>
    )
  }
}

class Middle extends Component {
  render() {
    return <Leaf />
  };
}

class App extends Component {
  state = {
    battery: 30
  }
  render() {
    const { battery } = this.state
    return (
      <BatteryContext.Provider value={battery}>
        <Middle />
      </BatteryContext.Provider>
    );
  }
}

export default App;
