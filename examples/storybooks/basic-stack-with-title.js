import React, { Component } from 'react';
import dynamics from 'dynamics.js';
import IsometricGrid, { Cell } from '../../src';

const img1 = 'https://picsum.photos/100/100/?random';
const img2 = 'https://picsum.photos/200/100/?random';
const img3 = 'https://picsum.photos/300/200/?random';
const img4 = 'https://picsum.photos/400/400/?random';
const img5 = 'https://picsum.photos/500/300/?random';
const img6 = 'https://picsum.photos/700/500/?random';
const img7 = 'https://picsum.photos/800/400/?random';

class App extends Component {
  render() {
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return (
      <IsometricGrid
        shadow
        transform="rotateX(45deg) rotateZ(45deg)"
        stackItemsAnimation={{
          properties(pos) {
            return {
              translateZ: (pos + 1) * 30,
              rotateZ: getRandomInt(-4, 4),
            };
          },
          options(pos, itemstotal) {
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
        style={{
          height: '500px',
          width: '800px',
        }}
      >
        <Cell
          title="RANDOM TITLE"
          layers={[img1, '#9972fc', '#c322a3', '#9eb5c2']}
        />
        <Cell
          title="RANDOM TITLE"
          layers={[img2, '#9972fc', '#c322a3', '#9eb5c2']}
        />
        <Cell
          title="RANDOM TITLE"
          layers={[img3, '#9972fc', '#c322a3', '#9eb5c2']}
        />
        <Cell
          title="RANDOM TITLE"
          layers={[img4, '#9972fc', '#c322a3', '#9eb5c2']}
        />
        <Cell
          title="RANDOM TITLE"
          layers={[img5, '#9972fc', '#c322a3', '#9eb5c2']}
        />
        <Cell
          title="RANDOM TITLE"
          layers={[img6, '#9972fc', '#c322a3', '#9eb5c2']}
        />
        <Cell
          title="RANDOM TITLE"
          layers={[img7, '#9972fc', '#c322a3', '#9eb5c2']}
        />
        <Cell
          title="RANDOM TITLE"
          layers={[img1, '#9972fc', '#c322a3', '#9eb5c2']}
        />
        <Cell
          title="RANDOM TITLE"
          layers={[img2, '#9972fc', '#c322a3', '#9eb5c2']}
        />
      </IsometricGrid>
    );
  }
}

export default App;
