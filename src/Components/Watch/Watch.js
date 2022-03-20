import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {
    const [steps, setSteps] = useState(0);

    const increaseStep = () => {
        const newStepsCount = steps + 1;
        setSteps(newStepsCount);
    }

    const decreaseStep = () => {
        const newDecraseCount = steps - 1;
        setSteps(newDecraseCount);
    }
    
    useEffect( () => {

    }, [steps])
    return (
        <div style={{border:'3px solid green', margin:'10px'}}>
            <h2>This is my Smart Watch</h2>
            <h3>My Current Step: {steps}</h3>
            <button onClick={increaseStep}>De Dour>>>></button>
            <button onClick={decreaseStep}>Bari Fire Ay Baba chole gese..</button>
            <Display name='RealMe' steps={steps}></Display>
        </div>
    );
};

export default Watch;