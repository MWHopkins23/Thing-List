import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import ThingList from './ThingList'

class App extends Component {
  state = {
    things: {
      'thing-1': {id: 'thing-1', name: 'Milk'},
      'thing-2': {id: 'thing-2', name: 'Bread'},
      'thing-3': {id: 'thing-3', name: 'Lettuce'},
    }
  }

  addThing() {

  }

  render() {
    return (
      <div className="App">
          <Header />
          <ThingList things = {this.state.things} addThing = {this.addThing} />
          <button className="add-thing">Add Thing</button>
      </div>
    );
  }
}

export default App;