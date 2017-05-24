import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import ThingList from './ThingList'
import AddThingButton from './AddThingButton'

class App extends Component {
  state = {
    things: {
      'thing-1': { id: 'thing-1', name: 'Milk' },
      'thing-2': { id: 'thing-2', name: 'Bread' },
      'thing-3': { id: 'thing-3', name: 'Bibb lettuce' },
    }
  }

// breaking up 'addThing' to a separate function that creates blank inputs
  thing() {
    return {
       id: `thing-${Date.now()}`,
      name: '',
    }
  }

  addThing = () => {
    const things = {...this.state.things}
    const thing = this.thing
    things[thing.id] = thing
    this.setState({ things })
  }

  saveThing = (thing) => {
    const things = {...this.state.things}
    things[thing.id] = thing
    this.setState({ things })
  }

  render() {
    return (
      <div className="App">
        <Header />
        {/*pass as a prop*/}
        <AddThingButton addThing={this.addThing} />
        <ThingList 
          things={this.state.things}
          saveThing={this.saveThing}
         />
      </div>
    );
  }
}

export default App;