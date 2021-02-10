import React from 'react';
import './App.css'

const todoData = [
    {  
        text: 'Do first', 
        isCompleted: false,
    },
    {  
        text: 'Do second',
        isCompleted: false,
    },
    {  
        text: 'Do third', 
        isCompleted: false,
    },
]

function Todo() {
    const [todoState, setTodoState] = React.useState(todoData)

    const addTodo = text => {
        const newTodos = [...todoState, { text }];
        setTodoState(newTodos);
    }

    const completeTodo = index => {
        const newTodos = [...todoState];
        newTodos[index].isCompleted = true;
        setTodoState(newTodos);
    }

    const removeTodo = index => {
        const newTodos = [...todoState];
        newTodos.splice(index, 1);
        setTodoState(newTodos);
    }

    return (
        <div className="app">
            <div className="todo-list">
                {todoState.map((todo, idx) => (
                    <TodoComponent
                        key={idx}
                        index={idx}
                        todo={todo}
                        completeTodo={completeTodo}
                        removeTodo={removeTodo}
                    />
                ))}
            </div>
            <AddTodo addTodo={addTodo} />
        </div>
    )
}

function TodoComponent({ todo, index, completeTodo, removeTodo }) {
    return (
        <div 
            className="todo"
            style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
            >
            {todo.text}
            <div>
                <button onClick={() => completeTodo(index)}>Complete</button>
                <button onClick={() => removeTodo(index)}>x</button>
            </div>
        </div>
    )
}

function AddTodo({ addTodo }) {
    const [userInput, setUserInput] = React.useState('')

    const handleSubmit = e => {
        e.preventDefault();
        if (!userInput) return;
        addTodo(userInput);
        setUserInput("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={userInput}
                onChange={e => setUserInput(e.target.value)}
            />
        </form>
    )
}

export default Todo