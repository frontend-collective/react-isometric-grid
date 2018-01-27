/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import IsometricGrid, { Cell } from '../../src';

import dynamics from 'dynamics.js';

import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';
import img5 from './img/5.jpg';
import img6 from './img/6.jpg';
import img7 from './img/7.jpg';

class App extends Component {
  render() {
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return (
      <IsometricGrid
        transform="rotateX(45deg) rotateZ(45deg)"
        stackItemsAnimation={{
          properties: function(pos) {
            return {
              translateZ: (pos + 1) * 30,
              rotateZ: getRandomInt(-4, 4),
            };
          },
          options: function(pos, itemstotal) {
            return {
              type: dynamics.bezier,
              duration: 500,
              points: [
                { x: 0, y: 0, cp: [{ x: 0.2, y: 1 }] },
                { x: 1, y: 1, cp: [{ x: 0.3, y: 1 }] },
              ],
              delay: (itemstotal - pos - 1) * 40,
            };
          },
        }}
        cells={[
          <Cell key={1} layers={[img1, '#9972fc', '#c322a3', '#9eb5c2']} />,
          <Cell key={1} layers={[img2, '#9972fc', '#c322a3', '#9eb5c2']} />,
          <Cell key={1} layers={[img3, '#9972fc', '#c322a3', '#9eb5c2']} />,
          <Cell key={1} layers={[img4, '#9972fc', '#c322a3', '#9eb5c2']} />,
          <Cell key={1} layers={[img5, '#9972fc', '#c322a3', '#9eb5c2']} />,
          <Cell key={1} layers={[img6, '#9972fc', '#c322a3', '#9eb5c2']} />,
          <Cell key={1} layers={[img7, '#9972fc', '#c322a3', '#9eb5c2']} />,
        ]}
        style={{ height: '800px', width: '900px' }}
      />
    );
  }
}

export default App;
