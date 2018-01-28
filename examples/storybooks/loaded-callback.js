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
            style={{
              height: '500px',
              width: '800px',
            }}
          >
            <Cell
              layers={[
                'https://picsum.photos/100/100/?random',
                '#9972fc',
                '#c322a3',
                '#9eb5c2',
              ]}
            />
            <Cell
              layers={[
                'https://picsum.photos/200/200/?random',
                '#9972fc',
                '#c322a3',
                '#9eb5c2',
              ]}
            />
            <Cell
              layers={[
                'https://picsum.photos/300/300/?random',
                '#9972fc',
                '#c322a3',
                '#9eb5c2',
              ]}
            />
            <Cell
              layers={[
                'https://picsum.photos/400/400/?random',
                '#9972fc',
                '#c322a3',
                '#9eb5c2',
              ]}
            />
            <Cell
              layers={[
                'https://picsum.photos/500/500/?random',
                '#9972fc',
                '#c322a3',
                '#9eb5c2',
              ]}
            />
            <Cell
              layers={[
                'https://picsum.photos/600/600/?random',
                '#9972fc',
                '#c322a3',
                '#9eb5c2',
              ]}
            />
            <Cell
              layers={[
                'https://picsum.photos/200/300/?random',
                '#9972fc',
                '#c322a3',
                '#9eb5c2',
              ]}
            />
            <Cell
              layers={[
                'https://picsum.photos/400/300/?random',
                '#9972fc',
                '#c322a3',
                '#9eb5c2',
              ]}
            />
            <Cell
              layers={[
                'https://picsum.photos/200/500/?random',
                '#9972fc',
                '#c322a3',
                '#9eb5c2',
              ]}
            />
          </IsometricGrid>
        </div>
      </div>
    );
  }
}

export default App;
