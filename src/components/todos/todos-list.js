'use strict';

import React from 'react';

import Paper from 'material-ui/Paper';

export default (props) => {
  return (
      <div style={styles.mainContent}>
        {props.todos.map((todo, key) => { return <Paper style={styles.todo} key={key} onDoubleClick={() => props.handleRemoveTodo(todo)}>{todo}</Paper>; })}
      </div>
  );
};

const styles = {
  todo: {
    padding: 20,
  },

  mainContent: {
    padding: '20px 20%',
  },
};
