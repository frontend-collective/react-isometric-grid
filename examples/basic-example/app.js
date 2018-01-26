/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import IsometricGrid, { Cell } from '../../src';

import img1 from './img/1.jpg';

class App extends Component {
  render() {
    return (
      <IsometricGrid
        cells={[<Cell
          key={1}
          layers={[img1, 'rgb(133, 189, 85)']}
                />]}
        shadow
      />
    );
  }
}

export default App;
