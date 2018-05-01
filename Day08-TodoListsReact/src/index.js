// @flow

import React from "react";
import {render} from 'react-dom'

import App from './App'

let body = document.getElementById('root')
if (body) {
  render(<App/>, body)
}
