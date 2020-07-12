import React, { Component } from 'react';
import classes from './App.css';
// import Radium, {StyleRoot} from 'radium';
import Person from './Person/Person';
// import UserInput from './UserInput/UserInput';
// import UserOutput from './UserOutput/UserOutput';
// import ValidationComponent from './ValidationComponent/ValidationComponent';
// import Char from './Char/Char';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';




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
    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // };

    let persons = null;
    let btnClass = [classes.Button];

    if(this.state.showPerson){
      persons = (
        <div>
          {this.state.person.map((pers, index) => {
            return <ErrorBoundary key={pers.id}>
             <Person click={() => this.deletePersonHandler(index)} change={(event) => this.nameChangeHandler(event, pers.id)} name={pers.name} age={pers.age}  />
             </ErrorBoundary>
          })}
        </div> 
      );
    
      btnClass.push(classes.Red);
    }
    const assignedClasses = [];
    if(this.state.person.length <= 2){
      assignedClasses.push(classes.red);
    }
    if(this.state.person.length <= 1){
      assignedClasses.push(classes.bold);
    }

    return (
      
        <div className={classes.App}>
        <h1>Hi,i am React.</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button className={btnClass.join(' ')} alt={this.state.showPerson} onClick={this.togglePersonHandler}>Switch</button>
          {persons}
        </div>
    );
  }

  // state = {s
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

  // state = {
  //   userInput: ''
  // }
 

  // inputChangeHandler = (event) => {
  //   this.setState({userInput: event.target.value});
  // };

  // deleteChangeHandler = (index) => {
  //   const text = this.state.userInput.split('');
  //   text.splice(index, 1);
  //   const updatedText = text.join('');
  //   this.setState({userInput: updatedText});
  // };
  
  // render(){
  //   const charList = this.state.userInput.split('').map((ch, index) => {
  //     return <Char charactor={ch} key={index} checked={() => this.deleteChangeHandler(index)} />
  //   })
  //   return (
  //     <div className="App">
  //       <input type='text' onChange={this.inputChangeHandler} value={this.state.userInput} />
  //       <p>{this.state.userInput}</p>
  //       <ValidationComponent inputLength={this.state.userInput.length} />
  //       {charList}
  //     </div>
  //     );
  // }
}

export default App;
