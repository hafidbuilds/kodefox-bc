// @flow
export type Props = {
  [string]: mixed,
};

export type TodoItems = {
  id: number,
  content: string,
  isComplete: boolean,
};

export type State = {
  todos: Array<TodoItems>,
  currentTodo: string,
  errorMessage: string,
  filter: string,
  selectedIndex: number
};
