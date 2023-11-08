import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

const TodoList = () => {
  const [todos, setTodos] = useState([])

  const addTodo = todo => {
    if(!todo.text || /^\s*$/.test(todo.text)){
      return
    }
    const newTodos = [todo, ...todos]

    setTodos(newTodos)
  }

  const removeTodo = id => {
    const removeArray = [...todos].filter(todo=>todo.id !== id)

    setTodos(removeArray)
  }

  const updateTodo = (todoId, newValue) => {
    if(!newValue.text || /^\s*$/.test(newValue.text)){
      return;
    }

    setTodos(prev => prev.map(item =>(item.id === todoId ? newValue : item)))
  }

  const completeTodo = id => {
    let updateTodos = todos.map(todo => {
      if(todo.id === id){
        todo.isComplete = !todo.isComplete
      }
      return todo
    })
    setTodos(updateTodos)
  }

  return (
    <div>
      <h1>Your plan:</h1>
      <TodoForm onSubmit={addTodo}/>
      <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
    </div>
  )
}

export default TodoList