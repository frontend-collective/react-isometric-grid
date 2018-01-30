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
