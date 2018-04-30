// @flow

import type {State} from './types/State.js';

let renderApp = (state: State) => {
  let {todoItems} = state;
  let html = ``;
  for (let todoItem of todoItems) {
    if (todoItem.isDone) {
      html = html + `<p onClick="emitEvent('toggleDone','${todoItem.id}')"><s>${todoItem.content}</s></p>`;
    } else {
      html = html + `<p onClick="emitEvent('toggleDone','${todoItem.id}')">${todoItem.content}</p>`;

    }
  }
  let textInput = `<input value='${state.newItem}' onBlur="emitEvent('typeInNewItem', this.value)" type='text' />`;
  let buttonComponent = `<button onClick="emitEvent('addToList','${Math.random().toString()}')">Add to List</button>`;
  html = html + textInput + buttonComponent;
  return html;
};

export default renderApp;