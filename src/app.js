'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppBar from './components/common/app-bar';
import TodosList from './components/todos/todos-list';

class ReacTodo extends React.Component {
  render() {
    const todos = ['Listar todos', 'Adicionar todo', 'Editar todo', 'Remover todo', 'Filtrar todo'];

    return (
      <MuiThemeProvider>
        <div>
          <AppBar title="ReacTodo"/>

          <TodosList todos={todos}/>
        </div>
      </MuiThemeProvider>
    );
  };
}

ReactDOM.render(<ReacTodo />, document.getElementById('app'));
