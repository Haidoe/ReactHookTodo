import { useState } from 'react'
export default initTodos => {
  const [todos, setTodos] = useState(initTodos)
  return {
    todos,
    addTodo: newTodoText => {
      setTodos([
        ...todos,
        { id: Date.now(), task: newTodoText, completed: false }
      ])
    },
    removeTodo: todoId => {
      const filteredTodo = todos.filter(todo => todo.id !== todoId)
      setTodos(filteredTodo)
    },
    toggleTodo: todoId => {
      const updatedTodoList = todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
      setTodos(updatedTodoList)
    },
    editTodo: (todoId, newTodoTask) => {
      const updatedTodoList = todos.map(todo =>
        todo.id === todoId ? { ...todo, task: newTodoTask } : todo
      )
      setTodos(updatedTodoList)
    }
  }
}
