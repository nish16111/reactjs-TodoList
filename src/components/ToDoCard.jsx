import React from 'react'

export function ToDoCard(props)
{
    let {children, handleDeleteTodo, index, handleEditTodo} = props
    return(
        <li className='todoItem'>
            {children}
            <div>

            <button onClick={() => {
                handleDeleteTodo(index)
            }}>
            <i className="fa-solid fa-trash-can"></i>
            </button>

            <button onClick={() => {
                handleEditTodo(index)
            }}>
            <i className="fa-solid fa-pen-to-square"></i>
            </button>

            </div>
        </li>
    )
}