import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <Person name="Mike" age="28" />
        <Person name="John" age="15">My hobbies: </Person>
        <Person name="Lisa" age="62" />
      </div>
    );
  }
}

export default App;
