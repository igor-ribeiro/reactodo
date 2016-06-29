'use strict';

import React from 'react';

import Todo from './todo';

export default (props) => {
  return (
      <div style={styles.mainContent}>
        {props.todos.map((todo, key) => {
          return <Todo todo={todo} key={key} handleRemoveTodo={props.handleRemoveTodo}/>
        })}
      </div>
  );
};

const styles = {
  mainContent: {
    padding: '20px 20%',
  },
};
