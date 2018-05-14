// @flow
/* eslint-disable */
import React from 'react';
import type {Element} from 'react'
import {RadioGroup, RadioItem} from './RadioGroup'

type Props = {};

const App = (props: Props) => {
  return (
    <div>
      <RadioGroup name="favColor">
        <RadioItem>Red</RadioItem>
        <RadioItem>Green</RadioItem>
        <RadioItem>Blue</RadioItem>
      </RadioGroup>

      <br />
      <hr />
      <RadioGroup name="favSport">
        <RadioItem>Badminton</RadioItem>
        <RadioItem>Soccer</RadioItem>
        <RadioItem>BaskedBall</RadioItem>
      </RadioGroup>
    </div>
  );
}

export default App;

