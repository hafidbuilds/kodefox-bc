// @flow

import React from 'react';
import type {Props} from '../types/State';

export const TodoForm = (props: Props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        onChange={props.handleInputChange}
        value={props.currentTodo}/>
      <button type="submit">Submit</button>
    </form>
  );
};
