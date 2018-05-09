// @flow
import React from 'react';
import {TodoItem} from './TodoItem';
import type {TodoItems} from '../types/State';

type Props = {
  todos: Array<TodoItems>,
  handleToggle: (id: number) => void,
  selectedIndex: number,
};

export const TodoLists = (props: Props) => {
  let {todos, selectedIndex} = props;
  let notDone = todos.filter((todo) => !todo.isComplete);
  let done = todos.filter((todo) => todo.isComplete);
  let newTodos = [...notDone, ...done];
  return (
    <ul>
      {
        newTodos.length === 0 ?
          <h1>NOT FOUND</h1>
          : newTodos.map((todo, index) =>
            <TodoItem key={todo.id} {...todo} handleToggle={props.handleToggle} selectedIndex={selectedIndex} index={index}/>)
      }
    </ul>
  );
};
