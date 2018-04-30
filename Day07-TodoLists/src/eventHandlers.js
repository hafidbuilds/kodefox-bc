// @flow

import type {State} from './types/State.js';

let eventHandlers = {
  toggleDone: (oldState: State, id: mixed) => {
    let {todoItems} = oldState;
    let newTodoItems = [];
    for (let todoItem of todoItems) {
      if (id === todoItem.id) {
        newTodoItems.push({...todoItem, isDone: !todoItem.isDone});
      } else {
        newTodoItems.push({...todoItem});
      }
    }
    return {...oldState, todoItems: newTodoItems};
  },

  typeInNewItem: (oldState: State, textInput: string) => {
    return {...oldState, newItem: textInput};
  },

  addToList: (oldState: State, id: string) => {
    if (oldState.newItem !== '') {
      let newItemList = {
        id,
        content: oldState.newItem,
        isDone: false,
      };
      return {...oldState, todoItems: [...oldState.todoItems, newItemList], newItem: ''};
    } else {
      return oldState;
    }
  },
};

export default eventHandlers;