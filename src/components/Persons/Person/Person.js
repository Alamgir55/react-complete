import React, { Component } from 'react';
// import Radium from 'radium';
import classes from './Person.css';


class Person extends Component{
    render(){
        console.log('[Persons.js] rendering.....');
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>I'm {this.props.name} and i'm {this.props.age} year old.</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.change} value={this.props.name} />
            </div>
        ); 
    }
};

export default Person;