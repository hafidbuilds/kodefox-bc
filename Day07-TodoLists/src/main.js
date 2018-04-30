// @flow

import initialState from './initialState.js';
import renderApp from './App.js';
import eventHandlers from './eventHandlers.js';

let state = initialState;

global.emitEvent = (eventName: string, data: mixed) => {
  let eventHandler: Function = eventHandlers[eventName];
  if (eventHandler) {
    state = eventHandler(state, data);
  }
  render();
};

let render = () => {
  let html = renderApp(state);
  if (document.body) {
    document.body.innerHTML = html;
  }
};

render();