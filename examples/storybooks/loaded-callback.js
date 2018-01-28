/* eslint-disable no-restricted-globals */
import React, { Component } from 'react';
import dynamics from 'dynamics.js';
import bonzo from 'bonzo';
import IsometricGrid, { Cell } from '../../src';

import styles from './generic.scss';

class App extends Component {
  render() {
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return (
      <div className={styles.wrapper}>
        <button onClick={() => location.reload(true)}>REFRESH</button>
        <div className={styles.component}>
          <IsometricGrid
            shadow
            transform="rotateX(45deg) rotateZ(45deg)"
            onGridLoaded={() =>
              bonzo(
                document.getElementsByClassName(styles.wrapper)[0]
              ).addClass(styles['grid-loaded'])
            }
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
            cells={[
              <Cell
                key={1}
                layers={[
                  'https://picsum.photos/200/300/?random',
                  '#9972fc',
                  '#c322a3',
                  '#9eb5c2',
                ]}
              />,
              <Cell
                key={2}
                layers={[
                  'https://picsum.photos/200/300/?random',
                  '#9972fc',
                  '#c322a3',
                  '#9eb5c2',
                ]}
              />,
              <Cell
                key={3}
                layers={[
                  'https://picsum.photos/200/300/?random',
                  '#9972fc',
                  '#c322a3',
                  '#9eb5c2',
                ]}
              />,
              <Cell
                key={4}
                layers={[
                  'https://picsum.photos/200/300/?random',
                  '#9972fc',
                  '#c322a3',
                  '#9eb5c2',
                ]}
              />,
              <Cell
                key={5}
                layers={[
                  'https://picsum.photos/200/300/?random',
                  '#9972fc',
                  '#c322a3',
                  '#9eb5c2',
                ]}
              />,
              <Cell
                key={6}
                layers={[
                  'https://picsum.photos/200/300/?random',
                  '#9972fc',
                  '#c322a3',
                  '#9eb5c2',
                ]}
              />,
              <Cell
                key={7}
                layers={[
                  'https://picsum.photos/200/300/?random',
                  '#9972fc',
                  '#c322a3',
                  '#9eb5c2',
                ]}
              />,
              <Cell
                key={8}
                layers={[
                  'https://picsum.photos/200/300/?random',
                  '#9972fc',
                  '#c322a3',
                  '#9eb5c2',
                ]}
              />,
              <Cell
                key={9}
                layers={[
                  'https://picsum.photos/200/300/?random',
                  '#9972fc',
                  '#c322a3',
                  '#9eb5c2',
                ]}
              />,
            ]}
            style={{
              height: '500px',
              width: '800px',
            }}
          />
        </div>
      </div>
    );
  }
}

export default App;
