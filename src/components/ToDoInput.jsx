import { useState } from "react"

export default function ToDoInput(props)
{
    const {handleAddTodos, newTodoValue, setNewTodoValue} = props
    

    return(
        <header>

            <input value={newTodoValue} onChange={(e) => {
                setNewTodoValue(e.target.value)
            }} placeholder="Enter to do..."/>

            <button onClick={() => {
                handleAddTodos(newTodoValue)
                setNewTodoValue('')
            }}>Add</button>
        </header>
    )
}
