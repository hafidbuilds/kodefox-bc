// @flow
import React from 'react';
import {TodoItem} from './TodoItem';
import type {TodoItems} from '../types/State';

type Props = {
  todos: Array<TodoItems>,
  handleToggle: (id: number) => void,
};

export const TodoLists = (props: Props) => {
  let {todos} = props;
  return (
    <ul>
      {todos.map((todo) => <TodoItem key={todo.id} {...todo} handleToggle={props.handleToggle}/>)}
    </ul>
  );
};
