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

    const cellStyle = {
      border: '20px solid #fff',
      borderWidth: '40px 20px',
      boxShadow: '-1px 1px 5px rgba(0, 0, 0, 0.1)',
    };

    const style = {
      transformStyle: 'flat',
      padding: '20px',
    };

    return (
      <IsometricGrid
        transform="rotateX(55deg) rotateZ(-45deg)"
        stackItemsAnimation={{
          properties() {
            return {
              translateX: getRandomInt(-60, 60),
              translateY: getRandomInt(-60, 60),
              rotateZ: getRandomInt(-10, 10),
            };
          },
          options(pos, itemstotal) {
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
        style={{
          height: '500px',
          width: '800px',
        }}
      >
        <Cell
          style={style}
          layerStyle={cellStyle}
          layers={[img7, img1, img6, img1]}
        />
        <Cell
          style={style}
          layerStyle={cellStyle}
          layers={[img2, img1, img4, img5]}
        />
        <Cell
          style={style}
          layerStyle={cellStyle}
          layers={[img7, img5, img1, img1]}
        />
        <Cell
          style={style}
          layerStyle={cellStyle}
          layers={[img3, img3, img3, img3]}
        />
        <Cell
          style={style}
          layerStyle={cellStyle}
          layers={[img5, img7, img5, img4]}
        />
        <Cell
          style={style}
          layerStyle={cellStyle}
          layers={[img3, img6, img5, img5]}
        />
        <Cell
          style={style}
          layerStyle={cellStyle}
          layers={[img6, img1, img3, img4]}
        />
        <Cell
          style={style}
          layerStyle={cellStyle}
          layers={[img1, img5, img2, img7]}
        />
      </IsometricGrid>
    );
  }
}

export default App;
