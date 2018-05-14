// @flow
import React, {Children} from 'react';
import type {Element} from 'react'

// SOLUTION 1 : Children Utility
type GroupProps = {
  name: string,
  children?: Array<React$Element<*>>,
};

type ItemProps = {
  children?: Array<React$Element<*>>,
};

export function RadioGroup(props: GroupProps) {
  let {name, children, ...otherProps} = props;
  return (
    <div {...otherProps}>
      {Children.map(children, (child, i) => {
        return (
          <div key={i} {...otherProps}>
            <input type="radio" name={name} />
            <span>{child}</span>
          </div>
        );
      })}
    </div>
  );
}

export function RadioItem(props: ItemProps) {
  let {children, ...otherProps} = props;
  return <span {...otherProps}>{children}</span>;
}