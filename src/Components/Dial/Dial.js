import React from 'react';

const Dial = (props) => {
    return (
        <div style={{border:'5px solid black', margin:'8px'}}>
            <h3>this is dail</h3>
            <p>steps so far: {props.steps}</p>
        </div>
    );
};

export default Dial;