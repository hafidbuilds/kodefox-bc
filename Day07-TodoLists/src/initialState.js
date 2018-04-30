// @flow

import type {State} from './types/State.js';

let initialState: State = {
  todoItems: [
    {id: '4', content: 'Go to shcool', isDone: false},
    {id: '9', content: 'Do what teacher said', isDone: false},
    {id: '1', content: 'Go home', isDone: false},
  ],
  newItem: '',
};

export default initialState;