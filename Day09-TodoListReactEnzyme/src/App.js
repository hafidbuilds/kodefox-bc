// @flow

import React, {Component} from 'react';
import type {State} from './types/State';
import {TodoForm, TodoLists} from './components/index';
import {addTodo, generateId, findById, toggleTodo, updateTodo} from './lib/todoHelpers';

type Props = {};

class App extends Component<Props, State> {
  state = {
    todos: [
      {id: 1, content: 'Email to John', isComplete: false},
      {id: 2, content: 'Meeting with Simon', isComplete: false},
      {id: 3, content: 'Fix github Issues', isComplete: false},
      {id: 4, content: 'Review Pull Request', isComplete: false},
      {id: 5, content: 'Pair Programming session', isComplete: false},
      {id: 6, content: 'Code Review', isComplete: false},
    ],
    currentTodo: '',
    errorMessage: '',
    filter: '',
    selectedIndex: 0,
  }

  _handleSubmit = (event: SyntheticMouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const randomID = generateId();
    const newTodos = {id: randomID, content: this.state.currentTodo, isComplete: false};
    const updatedTodos = addTodo(this.state.todos, newTodos);
    this.setState({
      todos: updatedTodos,
      currentTodo: '',
    });
  }

  _handleEmptySubmit = (event: SyntheticMouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    this.setState({
      errorMessage: 'Please supply a todo item',
    });
  }

  _handleClearInput = (event: SyntheticMouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    this.setState({
      currentTodo: '',
    });
  }

  _handleToggle = (id: number) => {
    const todoItem = findById(id, this.state.todos);
    if (todoItem) {
      const toggled = toggleTodo(todoItem);
      const updatedTodos = updateTodo(toggled, this.state.todos);
      this.setState({
        todos: updatedTodos,
      });
    }
  }

  _handleInputChange = (event: SyntheticKeyboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    let input = event.currentTarget.value;
    this.setState({
      currentTodo: input,
    });
  }

  _handleFilterType = (event: SyntheticKeyboardEvent<HTMLInputElement>) => {
    this.setState({
      filter: event.currentTarget.value,
    });
  }

  componentDidMount() {
    document.addEventListener('keyup', this._onKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this._onKeyUp);
  }

  _onKeyUp = (event: KeyboardEvent) => {
    let {selectedIndex, todos} = this.state;
    let index = selectedIndex;
    let maxIndex = todos.length - 1;
    let newIndex = index;
    if (event.key === 'ArrowUp') {
      newIndex = Math.max(0, index - 1);
    }
    if (event.key === 'ArrowDown') {
      newIndex = Math.min(maxIndex, index + 1);
    }
    if (newIndex !== index) {
      this.setState({selectedIndex: newIndex});
    }
    if (event.key === ' ' && document.activeElement === document.body) {
      let selectedItem = todos[index];
      this._handleToggle(selectedItem.id);
    }
  };

  render() {
    let {todos, errorMessage, currentTodo, filter, selectedIndex} = this.state;
    const submitHandler = this.state.currentTodo.trim() ? this._handleSubmit : this._handleEmptySubmit;

    if (filter) {
      todos = todos.filter((todoItem) =>
        todoItem.content.toLowerCase()
          .includes(filter.toLowerCase()));
    }

    return (
      <div>
        <input
          type="search"
          placeholder="Search..."
          onChange={this._handleFilterType} />
        <TodoLists
          selectedIndex={selectedIndex}
          handleToggle={this._handleToggle}
          todos={todos}/>
        {errorMessage ?
          <span style={{color: 'red'}} >{errorMessage}</span>
          : null
        }
        <TodoForm
          handleInputChange={this._handleInputChange}
          handleSubmit={submitHandler}
          currentTodo={currentTodo}/>
        <button type="button" onClick={this._handleClearInput}>Clear</button>
      </div>
    );
  }
}

export default App;
