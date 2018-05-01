// @flow
import React from 'react';
import {Props} from '../types/State';

export const TodoItem = (props: Props) => {
  let {content, isComplete, handleToggle, id} = props
  return (
    <li>
      <input 
        type="checkbox" 
        checked={isComplete}
        onChange={() => handleToggle(id)}/>
      {content}
    </li>
  );
}