import React, { Component } from 'react';
import PropTypes from 'prop-types';
import dynamics from 'dynamics.js';
import classNames from 'classnames';
import bonzo from 'bonzo';

// scss class names
import styles from './react-isometric-grid.scss';

import img1 from './img/Dribbble/1.png';

import IsoGrid from './isometric-grid';

import Cell from './cell';

class ReactIsometricGrid extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // console.log(styles);
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // new IsoGrid(document.querySelector(`.${styles['isolayer--deco4']}`), {
    //   transform: 'rotateX(45deg) rotateZ(45deg)',
    //   stackItemsAnimation: {
    //     properties: function(pos) {
    //       return {
    //         translateZ: (pos + 1) * 30,
    //         rotateZ: getRandomInt(-4, 4),
    //       };
    //     },
    //     options: function(pos, itemstotal) {
    //       return {
    //         type: dynamics.bezier,
    //         duration: 500,
    //         points: [
    //           { x: 0, y: 0, cp: [{ x: 0.2, y: 1 }] },
    //           { x: 1, y: 1, cp: [{ x: 0.3, y: 1 }] },
    //         ],
    //         delay: (itemstotal - pos - 1) * 40,
    //       };
    //     },
    //   },
    //   onGridLoaded: function() {
    //     bonzo(document.body).addClass(styles['grid-loaded']);
    //   },
    // });

    new IsoGrid(document.querySelector(`.${styles.isolayer}`), {
      perspective: 30000,
      // transform: 'rotateX(55deg) rotateZ(-45deg)',
      transform: 'scale3d(0.8,0.8,1) rotateY(45deg) rotateZ(-10deg)',

      stackItemsAnimation: {
        properties: function(pos) {
          return {
            translateX: getRandomInt(-20, 20),
            translateY: getRandomInt(-20, 20),
            rotateZ: getRandomInt(-5, 5),
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
      },
      onGridLoaded: function() {
        bonzo(document.body).addClass(styles['grid-loaded']);
      },
    });

    // new IsoGrid(document.querySelector(`.${styles.isolayer}`), {
    //   perspective: 3000,
    //   transform: 'scale3d(0.8,0.8,1) rotateY(45deg) rotateZ(-10deg)',
    //   stackItemsAnimation: {
    //     properties: function(pos) {
    //       return {
    //         rotateX: (pos + 1) * -15,
    //       };
    //     },
    //     options: function(pos, itemstotal) {
    //       return {
    //         type: dynamics.spring,
    //         delay: (itemstotal - pos - 1) * 30,
    //       };
    //     },
    //   },
    //   onGridLoaded: function() {
    //     bonzo(document.body).addClass(styles['grid-loaded']);
    //   },
    // });
  }

  render() {
    return (
      <div
        className={classNames([
          styles.isolayer,
          // styles['isolayer--deco4'],
          // styles['isolayer--shadow'],
        ])}
      >
        <ul className={styles.grid}>
          <Cell
            layers={[img1, '#ac5cf5', '#5db4eb', '#5debb4']}
            title="TESTING TITLE"
          />
          <Cell
            layers={[img1, '#ac5cf5', '#5db4eb', '#5debb4']}
            title="TESTING TITLE"
          />
          <Cell
            layers={[img1, '#ac5cf5', '#5db4eb', '#5debb4']}
            title="TESTING TITLE"
          />
          <Cell
            layers={[img1, '#ac5cf5', '#5db4eb', '#5debb4']}
            title="TESTING TITLE"
          />
          <Cell
            layers={[img1, '#ac5cf5', '#5db4eb', '#5debb4']}
            title="TESTING TITLE"
          />
        </ul>
      </div>
    );
  }
}

ReactIsometricGrid.propTypes = {
  // have a shadown under the cells
  shadow: PropTypes.bool,
};

export default ReactIsometricGrid;
