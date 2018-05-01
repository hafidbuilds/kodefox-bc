// @flow
import type {State, TodoItems} from '../types/State'

export const addTodo = (todos: Array<TodoItems>, newTodoItem: TodoItems) => {
  return [...todos, newTodoItem]
}

export const generateId = () => Math.floor(Math.random()*100000)

export const findById = (id: number, todos: Array<TodoItems>) => {
  return todos.find(todoItem => todoItem.id === id)
}

export const toggleTodo = (todoItems: TodoItems) => {
  return {...todoItems, isComplete: !todoItems.isComplete}
}

export const updateTodo = (todoItems: TodoItems, todos: Array<TodoItems>) => {
  const updatedIndex = todos.findIndex(todo => todo.id === todoItems.id)
  return [
    ...todos.slice(0, updatedIndex),
    ...todos.slice(updatedIndex + 1),
    todoItems
  ]
}