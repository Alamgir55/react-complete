import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
// import UserInput from './UserInput/UserInput';
// import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    person: [
      {id:'vdlie2', name: 'menu', age: '27'},
      {id:'ldiej3', name: 'stepnie', age: '28'},
      {id:'dieio1', name: 'max', age: '26'}
    ],
    other: 'someState',
    showPerson: false
  };

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.person.slice();
    const persons = [...this.state.person];
    persons.splice(personIndex, 1);
    this.setState({person: persons});
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.person.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.person[personIndex]}; 
    person.name = event.target.value;
    const persons = [...this.state.person];
    persons[personIndex] = person;

    this.setState({person: persons});
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

    let persons = null;
    if(this.state.showPerson){
      persons = (
        <div>
          {this.state.person.map((pers, index) => {
            return <Person click={() => this.deletePersonHandler(index)} change={(event) => this.nameChangeHandler(event, pers.id)} name={pers.name} age={pers.age} key={pers.id} />
          })}
        </div> 
      );
    }

    return (
      <div className="App">
       <h1>Hi,i am React.</h1>
       <button style={style} onClick={this.togglePersonHandler}>Switch</button>
        {persons}
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
