import React from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import Todo from './Todo'
const TodoList = props => {
  if (!props.todos.length) return null
  return (
    <Paper>
      <List>
        {props.todos.map(todo => (
          <Todo
            removeTodo={props.removeTodo}
            toggleTodo={props.toggleTodo}
            editTodo={props.editTodo}
            task={todo.task}
            completed={todo.completed}
            id={todo.id}
            key={todo.id}
          />
        ))}
      </List>
    </Paper>
  )
}

export default TodoList
