import React, { Component } from 'react';
import dynamics from 'dynamics.js';
import IsometricGrid, { Cell } from '../../src';

import img1 from '../shared/img/1.jpg';
import img2 from '../shared/img/2.jpg';
import img3 from '../shared/img/3.jpg';
import img4 from '../shared/img/4.jpg';
import img5 from '../shared/img/5.jpg';
import img6 from '../shared/img/6.jpg';
import img7 from '../shared/img/7.jpg';

class App extends Component {
  render() {
    return (
      <IsometricGrid
        transform="scale3d(0.8,0.8,1) rotateY(45deg) rotateZ(-10deg)"
        stackItemsAnimation={{
          properties(pos) {
            return {
              rotateX: (pos + 1) * -15,
            };
          },
          options(pos, itemstotal) {
            return {
              type: dynamics.spring,
              delay: (itemstotal - pos - 1) * 30,
            };
          },
        }}
        style={{
          height: '500px',
          width: '800px',
        }}
      >
        <Cell layers={[img1, '#9972fc', '#c322a3', '#9eb5c2']} />
        <Cell layers={[img2, '#9972fc', '#c322a3', '#9eb5c2']} />
        <Cell layers={[img3, '#9972fc', '#c322a3', '#9eb5c2']} />
        <Cell layers={[img4, '#9972fc', '#c322a3', '#9eb5c2']} />
        <Cell layers={[img5, '#9972fc', '#c322a3', '#9eb5c2']} />
        <Cell layers={[img6, '#9972fc', '#c322a3', '#9eb5c2']} />
        <Cell layers={[img7, '#9972fc', '#c322a3', '#9eb5c2']} />
        <Cell layers={[img1, '#9972fc', '#c322a3', '#9eb5c2']} />
        <Cell layers={[img2, '#9972fc', '#c322a3', '#9eb5c2']} />
      </IsometricGrid>
    );
  }
}

export default App;
