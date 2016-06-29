'use strict';

import React from 'react';

import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui/svg-icons/content/clear';

export default (props) => {
  return (
    <Paper style={styles.todo}>
      <div style={styles.todoText}>{props.todo}</div>
      <IconButton onClick={() => props.handleRemoveTodo(props.todo)}><DeleteIcon /></IconButton>
    </Paper>
  );
};

const styles = {
  todo: {
    padding: 12,
    display: 'flex',
    alignItems: 'center',
    marginBottom: 5,
  },

  todoText: {
    flex: 1,
  },
};
