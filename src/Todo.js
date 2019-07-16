import React from 'react'
import useToggle from './hooks/useToggle'
import EditForm from './EditTodoForm'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
const Todo = ({ task, completed, id, removeTodo, toggleTodo, editTodo }) => {
  const [isEditing, toggle] = useToggle(false)
  return (
    <>
      <ListItem>
        {isEditing ? (
          <EditForm task={task} editTodo={editTodo} id={id} toggle={toggle} />
        ) : (
          <>
            <Checkbox
              checked={completed}
              tabIndex={-1}
              onClick={() => {
                toggleTodo(id)
              }}
            />
            <ListItemText
              style={{
                textDecoration: completed ? 'line-through' : 'none'
              }}
            >
              {task}
            </ListItemText>
          </>
        )}
        <ListItemSecondaryAction>
          <IconButton onClick={() => removeTodo(id)}>
            <DeleteIcon aria-label="Delete" />
          </IconButton>
          <IconButton onClick={toggle}>
            <EditIcon aria-label="Edit" />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </>
  )
}

export default Todo
