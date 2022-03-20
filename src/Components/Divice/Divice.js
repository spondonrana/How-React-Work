import React from 'react';
import DiviceDetails from '../DiviceDetails/DiviceDetails';

const Divice = (props) => {
    return (
        <div style={{border:'2px solid red'}}>
            <h2>I have: {props.name}</h2>
            {/* <h3>Price: {props.price}</h3> */}
            <DiviceDetails price={props.price}></DiviceDetails>
        </div>
    );
};

export default Divice;