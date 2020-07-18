import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import Radium from 'radium';
 import classes from './Person.css';
import Aux from '../../../hoc/auxilliary';
import withClass from '../../../hoc/withClass';




class Person extends Component{

    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount(){
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
    }

    render(){
        console.log('[Persons.js] rendering.....');
        return (
            <Aux>
                <p onClick={this.props.click}>I'm {this.props.name} and i'm {this.props.age} year old.</p>
                <p key="i2">{this.props.children}</p>
                 <input key="i3" 
                    ref={this.inputElementRef}
                 type="text"
                onChange={this.props.change}
                value={this.props.name} />
            </Aux>
        ); 
    }
};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    change: PropTypes.func
};

export default withClass(Person, classes.Person);