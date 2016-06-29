'use strict';

import React from 'react';

import AppBar from 'material-ui/AppBar';

export default (props) => {
  return <AppBar title={props.title || 'App Title'} showMenuIconButton={false} style={styles.appBar}/>
}

const styles = {
  appBar: {
    padding: '0 20%',
  },
};
