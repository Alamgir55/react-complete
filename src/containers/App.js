import React, { Component } from 'react';
import classes from './App.css';
// import Radium, {StyleRoot} from 'radium';
import Persons from '../components/Persons/Persons';
// import UserInput from './UserInput/UserInput';
// import UserOutput from './UserOutput/UserOutput';
// import ValidationComponent from './ValidationComponent/ValidationComponent';
// import Char from './Char/Char';
// import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/auxilliary';
import authContext from '../context/auth-context';



class App extends Component {

  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    person: [
      {id:'vdlie2', name: 'menu', age: 27},
      {id:'ldiej3', name: 'stepnie', age: 28},
      {id:'dieio1', name: 'max', age: 26}
    ],
    other: 'someState',
    showPerson: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  };

  
  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.person.slice();
    const persons = [...this.state.person];
    persons.splice(personIndex, 1);
    this.setState({person: persons});
  };

  loginHandler = () => {this.setState({authenticated: true})};

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.person.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.person[personIndex]}; 
    person.name = event.target.value;
    const persons = [...this.state.person];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return {
        person: persons,
        changeCounter: prevState.changeCounter + 1
      };
    });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({
      showPerson: !doesShow
    });
  };

  render() {
    console.log('[App.js] render');
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
   

    if(this.state.showPerson){
      persons = (
        <div>
          <Persons persons={this.state.person} isAuthenticated={this.state.authenticated} click={this.deletePersonHandler} change={this.nameChangeHandler} />
        </div> 
      );
    }
    
    return (  
      
        <Aux>
          <button onClick={() => {this.setState({showCockpit: false});}} >Remove Cockpit</button>
          <authContext.Provider value={{authenticated: this.state.authenticated, login: this.loginHandler}}>  
            {this.state.showCockpit ? (<Cockpit title={this.props.appTitle} showPerson={this.state.showPerson} clicked={this.togglePersonHandler} personsLength={this.state.person.length} /> ) : null}
            {persons}
          </authContext.Provider>  
        </Aux>
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

export default withClass(App, classes.App);
