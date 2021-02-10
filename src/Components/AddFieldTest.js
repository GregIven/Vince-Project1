import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const Test = [
    {
        name: "First Object",
        details: "This is a test Object",
    },
    {
        name: "Second Object",
        details: "This is 2nd"
    }
]

const numbers = [1,2,3,4,5,6];
const listItems = numbers.map((number) => 
    <div key={uuidv4()}>
        <li>{number}</li>
        <h2>poop</h2>
    </div>    
);

function AddFieldTest() {
    const [intialList, setList] = React.useState(listItems);
    const [name, setName] = React.useState('');
    const handleChange = event => setName(event.target.value);

    function AddItemToList() {
        const updatedList = intialList.concat(name)
        setList(updatedList)
    }

    return (
    <div>
        <form>
            <label htmlFor="name">Name: </label>
            <input onChange={handleChange} id="name" />
        </form>
        {name ? <strong>{name}</strong> : 'Please type name'}
        <ul>{intialList}</ul>
        <button type="button" onClick={() => AddItemToList()}>Add me</button>
    </div>
    )
}

export default AddFieldTest;