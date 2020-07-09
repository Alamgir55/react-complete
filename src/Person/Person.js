import React from 'react';

import './Person.css';

const Person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and i'm {props.age} year old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name} />
        </div>
    ); 
};

export default Person;