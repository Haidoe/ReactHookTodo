import React, { useEffect } from 'react'
import moduleTodo from './module/todo'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'
const TodoApp = () => {
  const initTodos = JSON.parse(window.localStorage.getItem('todos') || '[]')
  const { todos, addTodo, removeTodo, toggleTodo, editTodo } = moduleTodo(
    initTodos
  )
  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: '100vh',
        backgroundColor: 'peru'
      }}
    >
      <AppBar color="primary" position="static" style={{ height: '64px' }}>
        <Toolbar>
          <Typography color="inherit"> TODOS WITH HOOKS </Typography>
        </Toolbar>

        <Grid container justify="center" style={{ marginTop: '1rem' }}>
          <Grid item xs={11} md={8} lg={4}>
            <TodoForm addTodo={addTodo} />
            <TodoList
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
              todos={todos}
            />
          </Grid>
        </Grid>
      </AppBar>
    </Paper>
  )
}
export default TodoApp
