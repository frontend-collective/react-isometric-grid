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
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return (
      <IsometricGrid
        shadow
        transform="rotateX(55deg) rotateZ(-45deg)"
        stackItemsAnimation={{
          properties: function(pos) {
            return {
              translateX: getRandomInt(-20, 20),
              translateY: getRandomInt(-20, 20),
              rotateZ: getRandomInt(-10, 10),
            };
          },
          options: function(pos, itemstotal) {
            return {
              type: dynamics.bezier,
              duration: 800,
              points: [
                { x: 0, y: 0, cp: [{ x: 0.2, y: 1 }] },
                { x: 1, y: 1, cp: [{ x: 0.3, y: 1 }] },
              ],
              delay: (itemstotal - pos - 1) * 20,
            };
          },
        }}
        cells={[
          <Cell key={1} layers={[img7, img1, img6, img1]} />,
          <Cell key={1} layers={[img2, img2, img2, img2]} />,
          <Cell key={1} layers={[img7, img5, img1, img1]} />,
          <Cell key={1} layers={[img3, img3, img3, img3]} />,
          <Cell key={1} layers={[img4, img4, img5, img4]} />,
          <Cell key={1} layers={[img3, img6, img5, img5]} />,
          <Cell key={1} layers={[img6, img1, img3, img4]} />,
          <Cell key={1} layers={[img1, img5, img2, img7]} />,
        ]}
        style={{
          height: '500px',
          width: '800px',
        }}
      />
    );
  }
}

export default App;
