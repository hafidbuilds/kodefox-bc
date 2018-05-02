// @flow

import {addTodo, findById, toggleTodo, updateTodo} from './todoHelpers'

it('should add the passed todo to the list', () => {
  const startTodos = [
    {id:1, content: 'one', isComplete: false},
    {id:2, content: 'two', isComplete: false}
  ]
  const newTodo = {id:3, content: 'three', isComplete: false}
  const expected = [
    {id:1, content: 'one', isComplete: false},
    {id:2, content: 'two', isComplete: false},
    {id:3, content: 'three', isComplete: false}
  ]
  const result = addTodo(startTodos, newTodo)
  expect(result).toEqual(expected)
})


it('should not mutate the existing todo array', () => {
  const startTodos = [
    {id:1, content: 'one', isComplete: false},
    {id:2, content: 'two', isComplete: false}
  ]
  const newTodo = {id:3, content: 'three', isComplete: false}
  const expected = [
    {id:1, content: 'one', isComplete: false},
    {id:2, content: 'two', isComplete: false},
    {id:3, content: 'three', isComplete: false}
  ]
  const result = addTodo(startTodos, newTodo)
  expect(result).not.toBe(startTodos)
})

it('should return the expected item from an array', () => {
  const startTodos = [
    {id:1, content: 'one', isComplete: false},
    {id:2, content: 'two', isComplete: false},
    {id:3, content: 'three', isComplete: false}
  ]
  const expected = {id:2, content: 'two', isComplete: false}
  const result = findById(2, startTodos)
  expect(result).toEqual(expected)
})

it('should toggle the isComplete prop of a todo', () => {
  const startTodo = {id:2, content: 'two', isComplete: false}
  const expected = {id:2, content: 'two', isComplete: true}
  const result = toggleTodo(startTodo)
  expect(result).toEqual(expected)
})

it('should not mutate the original todo', () => {
  const startTodo = {id:2, content: 'two', isComplete: false}
  const result = toggleTodo(startTodo)
  expect(result).not.toBe(startTodo)
})

test('should update an item by id', () => {
  const startTodos = [
    {id:1, content: 'one', isComplete: false},
    {id:2, content: 'two', isComplete: false},
    {id:3, content: 'three', isComplete: false}
  ]
  const updatedTodo = {id:2, content: 'two', isComplete: true}
  const expectedTodos = [
    {id:1, content: 'one', isComplete: false},
    {id:2, content: 'two', isComplete: true},  
    {id:3, content: 'three', isComplete: false}
  ]
  const result = updateTodo(updatedTodo, startTodos)
  expect(result).toEqual(expectedTodos)
})

it('should not mutate the original array', () => {
  const startTodos = [
    {id:1, content: 'one', isComplete: false},
    {id:2, content: 'two', isComplete: false},
    {id:3, content: 'three', isComplete: false}
  ]
  const updatedTodo = {id:2, content: 'two', isComplete: true}
  const result = updateTodo(updatedTodo, startTodos)
  expect(result).not.toBe(startTodos)
})