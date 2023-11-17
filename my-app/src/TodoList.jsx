import { useState } from "react"
import classes from'./todoList.module.scss'

export function TodoList() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    console.log("Type of todos:", typeof todos);
    const delateTodo = (index)=>{
        const newTodos = [...todos];
        newTodos.splice(index,1);
        setTodos(newTodos)
    }
    const todoAll = todos.map((todo, index) => <div><li key={index}>{todo}</li> <button onClick={()=>delateTodo(index)}>x</button></div>
    )
    const addTodo = () => {
        if(newTodo != ''){
        setTodos([...todos, newTodo]);
        setNewTodo('')
    }else{
        alert ('write something...')
    }
    }

    const resetTodo = () => {
        setTodos([]);
        setNewTodo('')
    }


    return (
        <>
            <ul className={classes.container}>
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
            <button className= {classes.button} onClick={resetTodo}>
                Reset
            </button>
        </>
    )
}