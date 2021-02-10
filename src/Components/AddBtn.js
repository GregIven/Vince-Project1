// This component is a button that adds card

import React from 'react';

function AddBtn() {
    const [count, setCount] = React.useState(0);

    
    return (
        <div>
            <p>Counter: you clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}> Click here </button>
        </div>
    )
}

export default AddBtn;