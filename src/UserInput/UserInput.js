import React from 'react';

const UserInput = (props) => {
    const inputStyle = {
        border: '2px solid blue'
    };
    return <input type='text' style={inputStyle} onChange={props.changed} value={props.value} />
};

export default UserInput;