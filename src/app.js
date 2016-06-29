'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';

class ReacTodo extends React.Component {
  render() {
    const todos = ['Listar todos', 'Adicionar todo', 'Editar todo', 'Remover todo', 'Filtrar todo'];

    return (
      <MuiThemeProvider>
        <div>
          <AppBar title="ReacTodo" showMenuIconButton={false} style={styles.appBar}/>

          <div style={styles.mainContent}>
            {todos.map((todo, key) => { return <Paper style={styles.todo} key={key}>{todo}</Paper>; })}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  appBar: {
    padding: '0 20%',
  },

  todo: {
    padding: 20,
  },

  mainContent: {
    padding: '20px 20%',
  },
};

ReactDOM.render(<ReacTodo />, document.getElementById('app'));
