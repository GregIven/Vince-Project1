import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const CardBorder = styled.ul`
    border-style: solid;
    background-color: burlywood;
    margin: .5em;
    
    width: 256px;
    height: 256px;
    `;
    
const CardTypeStyle = styled.li`
    font: 400;
    text-align: left;

    `;

const INITIAL_CARD_LIST = [
    {
        id: uuidv4(),
        name: 'John Doe',
        location: 'SF',
    },
    {
        id: uuidv4(),
        name: 'Leslie Hoe',
        location: 'Miami',
    },
];

function Card() {
    const [cardInitial, setCard] = React.useState(INITIAL_CARD_LIST);
    const [name, setName] = React.useState('');
    const [field, setField] = React.useState('');

    function onAddCard() {
        const newList = [...cardInitial, { name: '', location: '', contact: '', id: uuidv4() }];
        setCard(newList)
    }
    function onRemoveItem(id) {
        const newList = cardInitial.filter(item => item.id !== id);
        setCard(newList)
    }

    function onSortAscending() {
        const ascendingList = cardInitial.sort((a,b) => a - b)
        setCard(ascendingList)
    }

    function handleChange(event) {
        // track input field's state
        setName(event.target.value);
    }

    function handleAddField(idToCheck) {
        // add field to card - get card by ID, add a property to that object
        const grabCardToAddField = cardInitial.filter(obj => obj.id === idToCheck)  
        const updatedCard = grabCardToAddField.addedField = 'loop'
        console.log(grabCardToAddField)
        setField('')
        // const newCardObj = grabCardToAddField
        // setCard(newList);
        //adds a new card element to the list and returns that new list
        const newList = cardInitial.concat({ name, id: uuidv4() });
        //makes new card
        setCard(newList);
        //sets the name value of the new card to what the state of the input field is.
        setName('')
    }

    return (
        <div>
            {cardInitial.map((item) => 
            <CardBorder key={item.id}>
                <CardTypeStyle>Name: {item.name}</CardTypeStyle>
                <CardTypeStyle>Loc: {item.location}</CardTypeStyle>
                <CardTypeStyle>key: {item.id}</CardTypeStyle>
                <CardTypeStyle>New Field: {item.addedField}</CardTypeStyle>
                <input type="text" value={name} onChange={handleChange} />
                <button type="button" onClick={() => handleAddField(item.id)}> Add Field </button>
                <button type="button" onClick={() => onRemoveItem(item.id)}> Remove </button>
                

            </CardBorder>
            )}
            <button type="button" onClick={() => onAddCard()}>Add New Card</button>
            <button type="button" onClick={() => onSortAscending()}> Sort from A to Z </button>
        </div>
    )
}

export default Card