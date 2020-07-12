import React from 'react';
// import Radium from 'radium';
import classes from './Person.css';


const Person = (props) => {
    // const style = {
    //     '@media (min-width: 500px)' : {
    //         width: '450px'
    //     }
    // };
    return (
        <div className={classes.Person}>
        {/* // <div className="Person" style={style}> */}
            <p onClick={props.click}>I'm {props.name} and i'm {props.age} year old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name} />
        {/* // </div> */}
        </div>
    ); 
};

export default Person;