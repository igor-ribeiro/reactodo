'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class HelloComponent extends React.Component {
  render() {
    return <h1>Hello, React!</h1>;
  }
}

ReactDOM.render(<HelloComponent />, document.getElementById('app'));
