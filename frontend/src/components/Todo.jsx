import React from 'react'

const Todo = ({text, updateMode, deleteToDo}) => {
  return (
    <div style={{display: 'flex', gap: '50px', marginTop: '20px'}}>
        <div>{text}</div>
        <div style={{display: 'flex', gap: '10px'}}>
            <p style={{cursor: 'pointer'}} onClick={updateMode}>Editar</p>

            <p style={{cursor: 'pointer'}} onClick={deleteToDo}>Eliminar</p>
        </div>
    </div>
  )
}

export default Todo