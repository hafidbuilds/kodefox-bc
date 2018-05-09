// @flow
/* eslint-disable */
import React, {Component, Fragment} from 'react';
type State = {
  selectedItem: boolean
}

class App extends Component {

  render() {
    return (
      <Fragment>
        <RadioGroup>
          <Radio.One>One is selected</Radio.One>
          <Radio.Two>Two is selected</Radio.Two>
          <Radio.Three>Three is selected</Radio.Three>
          <Radio.Toggle />
        </RadioGroup>

        {/* <RadioGroup>
          <Radio.Four>Four is selected</Radio.Four>
          <Radio.Five>Five is selected</Radio.Five>
          <Radio.Six>Six is selected</Radio.Six>
          <Radio.Toggle />          
        </RadioGroup> */}
      </Fragment>
    );
  }
}

// SOLUTION 1 : Compound Components
const ToggleOne = ({isChecked, children}) => {
  return isChecked ? children : null
}
const ToggleTwo = ({isChecked, children}) => {
  return isChecked ? children : null
}
const ToggleThree = ({isChecked, children}) => {
  return isChecked ? children : null
}
const ToggleButton = ({isChecked, handleToggle, ...props}) => {
  return (
    <div>
      <input 
        type="checkbox" 
        defaultChecked={isChecked}
        onChange={handleToggle}/>
    </div>
  )
}
  
class RadioGroup extends Component<State> {
  static One = ToggleOne
  static Two = ToggleTwo
  static Three = ToggleThree
  static Button = ToggleButton

  state = {
    isChecked: false,
  }

  _handleToggle = (event: SyntheticMouseEvent<HTMLInputElement>) => {
    // let prevState = this.state.selectedItem
    // const newSelectedItem = event.target.value
    // const indexOfRadio = prevState.indexOf(event.target.value)

    if (event.target.checked) {
      this.setState(({isChecked}) => ({
        isChecked: !isChecked
      }));
    }
    if (!event.target.checked) {
      // prevState.splice(indexOfRadio, 1)
      this.setState(({isChecked}) => ({
        isChecked: !isChecked
      }))
    }
  }
  render() {
    const children = React.Children.map(
      this.props.children, 
      child => 
        React.cloneElement(child, {
          isChecked: this.state.isChecked,
          handleToggle: this._handleToggle
        })
    )
    return (
      <div>{children}</div>
    )
  }
}