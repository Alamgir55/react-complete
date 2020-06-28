import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    person: [
      {name: 'max', age: '26'},
      {name: 'menu', age: '27'},
      {name: 'stepnie', age: '28'}
    ],
    other: 'someState'
  }
  switchButtonHandler = () => {
    this.setState({
      person: [
        {name: 'maxium', age: '26'},
        {name: 'menu', age: '27'},
        {name: 'stepnie', age: '21'}
      ]
    })
  };

  render() {
    return (
      <div className="App">
       <h1>Hi,i am React.</h1>
       <button onClick={this.switchButtonHandler}>Switch</button>
       <Person name={this.state.person[0].name} age={this.state.person[1].age} />
       <Person name={this.state.person[1].name} age={this.state.person[1].age}>My Hobbies: Racing</Person>
       <Person name={this.state.person[2].name} age={this.state.person[2].age} />
      </div>
    );
  }
}

export default App;
