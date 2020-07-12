import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  static getDerivedStateFromProps(props, state){
    console.log('[Person.js getDerivedStateFromProps]');
    return state;
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[Person.js] shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('[Person.js] getSnapshotBeforeUpdate');
    return { message: 'Snapshot' };
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('[Person.js] componentDidUpdate');
    console.log(snapshot);
  }

  render(){
    console.log('[Persons.js] rendering.....');
     return this.props.persons.map((pers, index) => {
      return ( <Person key={pers.id} click={() => this.props.click(index)} change={(event) => this.props.change(event, pers.id)} name={pers.name} age={pers.age}  /> );
    })
  }
};

export default Persons;