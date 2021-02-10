import React from 'react';
import AddBtn from '../Components/AddBtn';
import Card from '../Components/Card';
import SetCount from '../Components/SetCount';
import Count from '../Components/Count';


function MainContentContainer() {
    const [count, setCount] = React.useState(0)
    return (
        <div>
            <Card />
            <h3>{count}</h3>
            <SetCount state={{ count: [count, setCount] }} />
            <Count state={{ count: [count, setCount] }} />
        </div>
    )
}

export default MainContentContainer