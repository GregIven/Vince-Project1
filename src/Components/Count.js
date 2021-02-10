import React from 'react'
import SetCount from './SetCount'

function Count(props) {
    const {
        count: [count, setCount]
    } = {
        count: React.useState(0),
        ...(props.state || {})
    };

    return (
        <button onClick={() => setCount(count + 1)}>Increment</button>
    )
}

export default Count