/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import IsometricGrid, { Cell } from '../../src';

// import styles from './stylesheets/app.scss';

class App extends Component {
  render() {
    return <IsometricGrid shadow />;
  }
}

export default App;
