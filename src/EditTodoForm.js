import React from 'react'
import TextField from '@material-ui/core/TextField'
import useInput from './hooks/useInputState'
const EditTodoForm = ({ task, id, editTodo, toggle }) => {
  const [value, handleChange, reset] = useInput(task)
  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        editTodo(id, value)
        reset()
        toggle(false)
      }}
    >
      <TextField
        fullWidth
        margin="normal"
        value={value}
        onChange={handleChange}
      />
    </form>
  )
}

export default EditTodoForm
