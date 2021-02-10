import React from 'react';
import { v4 as uuidv4 } from 'uuid'

const initialList = [
    {
        id: 'a',
        name: 'Robin',
    },
    {
        id: 'b',
        name: 'Dennis',
    },
]

const listReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                list: state.list.concat({ name: action.name, id: action.id }),
            };
        default:
            throw new Error();
    }
}

function NewTest1() {
    const [listData, dispatchListData] = React.useReducer(
        listReducer,
        {
            list: initialList,
            isShowList: true,

        }
    );

    // const [listData, setListData] = React.useState({
    //     list: initialList,
    //     isShowList: true,
    // });

    const [name, setName] = React.useState('');

    function handleChange(event) {
        setName(event.target.value);
    }
    
    function handleAdd() {
        dispatchListData({ type: 'ADD_ITEM', name, id:uuidv4() });
        // const newList = listData.list.concat({
        //     name,
        //     id: uuidv4(),
        // });

        // setListData({ ...listData, list: newList });

        setName('');
    }

    return (
        <div>
            <AddItem
                name={name}
                onChange={handleChange}
                onAdd={handleAdd}
            />
            <List list={listData.list} />
            {/* {listData.isShowList && <List list={listData.list} />} */}
        </div>
    );
};

const AddItem = ({ name, onChange, onAdd }) => (
    <div>
        <input type="text" value={name} onChange={onChange} />
        <button type="button" onClick={onAdd}>
            Add
        </button>
    </div>
);

const List = ({ list }) => (
    <ul>
        {list.map((item) => (
        <li key={item.id}>{item.name}</li>
        ))}
    </ul>
)

export default NewTest1