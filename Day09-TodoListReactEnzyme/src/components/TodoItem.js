// @flow
import React from 'react';

type Props = {
  handleToggle: (id: number) => void,
  content: string,
  isComplete: boolean,
  id: number,
  selectedIndex: number,
  index: number
};

export const TodoItem = (props: Props) => {
  let {content, isComplete, handleToggle, id, selectedIndex, index} = props;
  let isSelected = index === selectedIndex
  return (
    <li style={isSelected ? {color: 'white', backgroundColor: '#008000'} : {color: 'black', backgroundColor: 'transparent'} }>
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
