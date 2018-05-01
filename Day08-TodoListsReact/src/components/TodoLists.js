// @flow
import React from 'react';
import {TodoItem} from './TodoItem';
import {Props} from '../types/State'

export const TodoLists = (props: Props) => {
  let {todos} = props
  return (
    <ul>
      {todos.map(todo => <TodoItem key={todo.id} {...todo} handleToggle={props.handleToggle}/>)}
    </ul>
  );
}