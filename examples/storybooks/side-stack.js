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
    const layerStyle = {
      transformOrigin: '50% 100%',
    };

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
        <Cell
          layerStyle={layerStyle}
          layers={[img1, '#9972fc', '#c322a3', '#9eb5c2']}
        />
        <Cell
          layerStyle={layerStyle}
          layers={[img2, '#9972fc', '#c322a3', '#9eb5c2']}
        />
        <Cell
          layerStyle={layerStyle}
          layers={[img3, '#9972fc', '#c322a3', '#9eb5c2']}
        />
        <Cell
          layerStyle={layerStyle}
          layers={[img4, '#9972fc', '#c322a3', '#9eb5c2']}
        />
        <Cell
          layerStyle={layerStyle}
          layers={[img5, '#9972fc', '#c322a3', '#9eb5c2']}
        />
        <Cell
          layerStyle={layerStyle}
          layers={[img6, '#9972fc', '#c322a3', '#9eb5c2']}
        />
        <Cell
          layerStyle={layerStyle}
          layers={[img7, '#9972fc', '#c322a3', '#9eb5c2']}
        />
        <Cell
          layerStyle={layerStyle}
          layers={[img1, '#9972fc', '#c322a3', '#9eb5c2']}
        />
        <Cell
          layerStyle={layerStyle}
          layers={[img2, '#9972fc', '#c322a3', '#9eb5c2']}
        />
      </IsometricGrid>
    );
  }
}

export default App;
