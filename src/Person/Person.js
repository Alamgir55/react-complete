import React from 'react';
// import Radium from 'radium';
import styled from 'styled-components';

import './Person.css';

const StyledDiv = styled.div`
    width: 60%;
    margin: auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px) {
            width: '450px'
        }
`;

const Person = (props) => {
    // const style = {
    //     '@media (min-width: 500px)' : {
    //         width: '450px'
    //     }
    // };
    return (
        <StyledDiv>
        {/* // <div className="Person" style={style}> */}
            <p onClick={props.click}>I'm {props.name} and i'm {props.age} year old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name} />
        {/* // </div> */}
        </StyledDiv>
    ); 
};

export default Person;