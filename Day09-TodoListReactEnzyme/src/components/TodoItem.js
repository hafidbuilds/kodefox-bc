// @flow
import React from 'react';

type Props = {
  handleToggle: (id: number) => void,
  content: string,
  isComplete: boolean,
  id: number,
};

export const TodoItem = (props: Props) => {
  let {content, isComplete, handleToggle, id} = props;
  return (
    <li>
      <input
        type="checkbox"
        checked={isComplete}
        onChange={() => handleToggle(id)}/>
      {
        isComplete ?
          <s>{content}</s>
          : content
      }
    </li>
  );
};
