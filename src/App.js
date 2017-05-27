import React, { Component } from 'react';

import './App.css';
import Header from './Header'
import ThingList from './ThingList'
// import AddThingButton from './AddThingButton'
import SignIn from './SignIn'
// import SignOut from './SignOut'
import base, { auth } from './base'
import Main from './Main'

class App extends Component {
  state = {
    things: {},
    uid: null
  }

  componentWillMount() {
    auth.onAuthStateChanged(
      (user) => {
        if (user) {
          this.authHandler({ user })
        }
      }
    )
  }

  setupThings = () => {
    this.ref = base.syncState(
      `${this.state.uid}/things`,
      {
        context: this,
        state: 'things'
      }
    )
  }

  authHandler = (authData) => {
    this.setState(
      { uid: authData.user.uid },
      this.setupThings
    )
  }

  thing() {
    return {
      id: `thing-${Date.now()}`,
      name: '',
      completed: false,
      dueOn: '',
    }
  }

  addThing = () => {
    const things = {...this.state.things}
    const thing = this.thing()
    things[thing.id] = thing
    this.setState({ things })
  }

  saveThing = (thing) => {
    const things = {...this.state.things}
    things[thing.id] = thing
    this.setState({ things })
  }

  removeThing = (thing) => {
    const things = {...this.state.things}
    things[thing.id] = null
    this.setState({ things })
  }

  signOut = () => {
    auth
      .signOut()
      .then(() => this.setState({ uid: null }))
  }

  renderThings() {
    const actions = {
      saveThing: this.saveThing,
      removeThing: this.removeThing,
    }

    return (
      <div>
        <Main AddThingButton={this.addThing} signOut={this.signOut}  />
        <ThingList
          things={this.state.things}
          {...actions}
        />
      </div>
    )
  }

  render() {

    return (
      <div className="App">
        <Header />
        { this.state.uid ? this.renderThings() : <SignIn authHandler={this.authHandler} /> }
      </div>
    );
  }
}

export default App;