// @flow

type TodoItem = {
  id: string,
  content: string,
  isDone: boolean,
};

export type State = {
  todoItems: Array<TodoItem>,
  
};