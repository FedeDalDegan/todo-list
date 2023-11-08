import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
  const [input, setInput] = useState("")
  const inputRef = useRef(null)

  // Hara FOCUs en este elemento al INICIAR el sitio
  useEffect(()=>{
    inputRef.current.focus()
  },[])

  const handleChange = e => {
    // Tomo como valor lo que se escriba en el input
    setInput(e.target.value)
  }

  const handleSubmit = e => {
    // Evitamos que al clickear el boton, se refresque el sitio
    e.preventDefault()
    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input
    })
    setInput("")
    
  }

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <input type='text' placeholder='Add a TODO' name='text' value={input} onChange={handleChange} ref={inputRef} className='todo-input' />
      <button className='todo-button edit'>Add a TODO</button>
    </form>

  )
}

export default TodoForm
