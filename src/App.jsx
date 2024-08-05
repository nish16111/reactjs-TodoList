import { useState, useEffect } from "react"
import ToDoInput from "./components/ToDoInput"
import  ToDoList  from "./components/ToDoList"


function App() {

  const [todos, setTodos] = useState([])
  const[newTodoValue, setNewTodoValue] = useState('')

  function persistData(newList)
  {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }))
  }

  function handleAddTodos(newTodo)
  {
    const newTodoList = [...todos, newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleDeleteTodo(index)
  {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleEditTodo(index)
  {
    const valueToBeEdited = todos[index]
    setNewTodoValue(valueToBeEdited)
    handleDeleteTodo(index)
  }

  useEffect(() => {
    
    if(!localStorage)
    {
      return
    }

    let localTodos = localStorage.getItem('todos')

    if(!localTodos)
    {
      return
    }

    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)

  }, [])

  return (
    <>
      <ToDoInput newTodoValue = {newTodoValue} setNewTodoValue = {setNewTodoValue} 
      handleAddTodos = {handleAddTodos}/>
      <ToDoList handleDeleteTodo = {handleDeleteTodo} todos={todos} 
      handleEditTodo = {handleEditTodo}/>
    </>
  )
}

export default App
