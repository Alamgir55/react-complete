import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
// import UserInput from './UserInput/UserInput';
// import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    person: [
      {name: 'max', age: '26'},
      {name: 'menu', age: '27'},
      {name: 'stepnie', age: '28'}
    ],
    other: 'someState',
    showPerson: false
  }
  switchButtonHandler = (newName) => {
    this.setState({
      person: [
        {name: newName, age: '26'},
        {name: 'menu', age: '27'},
        {name: 'stepnie', age: '21'}
      ]
    })
  };
  nameChangeHandler = (event) => {
    this.setState({
      person: [
        {name: 'Max', age: '26'},
        {name: event.target.value, age: '27'},
        {name: 'stepnie', age: '21'}
      ]
    })
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({
      showPerson: !doesShow
    });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
       <h1>Hi,i am React.</h1>
       <button style={style} onClick={this.togglePersonHandler}>Switch</button>
        {this.state.showPerson === true ? <div>
          <Person name={this.state.person[0].name} age={this.state.person[1].age} />
          <Person click={this.switchButtonHandler.bind(this, 'mexxx')} name={this.state.person[1].name} change={this.nameChangeHandler} age={this.state.person[1].age}>My Hobbies: Racing</Person>
          <Person name={this.state.person[2].name} age={this.state.person[2].age} />
        </div> : null}
      </div>
    );
  }

  // state = {
  //   userName: 'Max'
  // };

  //   usernameChangeHandler = (event) => {
  //   this.setState({
  //     userName: event.target.value
  //   });
  // };

  // render() {
  //   return (
  //     <div className="App">
  //       <UserInput changed={this.usernameChangeHandler} value={this.state.userName} />
  //       <UserOutput userName={this.state.userName}  />
  //       <UserOutput userName={this.state.userName}  /> 
  //       <UserOutput userName={this.state.userName} />  
  //     </div>
  //   );
  // }
}

export default App;
