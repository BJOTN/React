import { useState } from "react"

export function TodoList() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    console.log("Type of todos:", typeof todos);
    const todoAll = todos.map((todo, index) => <li key={index}>{todo}</li>
    )
    const addTodo = () => {
        if(newTodo != ''){
        setTodos([...todos, newTodo]);
        setNewTodo('')
    }else{
        alert ('write something...')
    }
    }
    return (
        <>
            <ul>
                {todoAll}
            </ul>
            <input 
            type="text"
            value={newTodo}
            onChange={(e)=>setNewTodo(e.target.value)}
            >
            </input>
            <button onClick={addTodo}>
                Add to do
            </button>
        </>
    )
}