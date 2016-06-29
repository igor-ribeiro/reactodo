'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppBar from './components/common/app-bar';
import TodosList from './components/todos/todos-list';

class ReacTodo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: ['Listar todos', 'Adicionar todo', 'Editar todo', 'Remover todo', 'Filtrar todo'],
    };

    this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar title="ReacTodo"/>

          <TodosList todos={this.state.todos} handleRemoveTodo={this.handleRemoveTodo}/>
        </div>
      </MuiThemeProvider>
    );
  }

  handleRemoveTodo(todo)  {
    const todos = _.difference(this.state.todos, [todo]);

    this.setState({ todos });
  }
}

ReactDOM.render(<ReacTodo />, document.getElementById('app'));
