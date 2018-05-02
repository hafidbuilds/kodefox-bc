// @flow

import React, {Component} from 'react';
import type {State} from './types/State';
import {TodoForm, TodoLists} from './components/index';
import {addTodo, generateId, findById, toggleTodo, updateTodo} from './lib/todoHelpers';

type Props = {};

class App extends Component<Props, State> {
  state = {
    todos: [
      {id: 1, content: 'Go To School', isComplete: false},
      {id: 2, content: 'Doing Homework', isComplete: false},
      {id: 3, content: 'Playing Game', isComplete: false},
    ],
    currentTodo: '',
    errorMessage: '',
    filter: ''
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

  render() {
    let {todos, errorMessage, currentTodo} = this.state;
    const submitHandler = this.state.currentTodo ? this._handleSubmit : this._handleEmptySubmit;

    if (this.state.filter) {
      todos = todos.filter(todoItem => 
        todoItem.content.toLowerCase()
          .includes(this.state.filter.toLowerCase()))
    };

    return (
      <div>
        <input 
          type="text" 
          placeholder='Search...'
          onChange={this._handleFilterType} />
        <TodoLists
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
