import React from 'react'

function SetCount(props) {
    const {
        count: [count, setCount]
    } = {
        count: React.useState(0),
        ...(props.state || {})
    };

    return (
        <button onClick={() => setCount(count - 1)}>Decrement</button>
    )
}

export default SetCount