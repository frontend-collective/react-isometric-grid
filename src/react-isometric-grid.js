import React, { Component } from 'react';
import PropTypes from 'prop-types';

// helper libraries
// const Masonry = require('masonry-layout');
// const dynamics = require('dynamics.js');
import dynamics from 'dynamics.js';
// const imageloaded = require('imagesloaded');
//
// const AnimOnScroll = require('./js/animOnScroll');
// const classie = require('./js/classie');
import classNames from 'classnames';
import bonzo from 'bonzo';

// scss class names
import styles from './react-isometric-grid.scss';

import img1 from './img/Dribbble/1.png';

import IsoGrid from './isometric-grid';
// import IsoGrid from './iso';

class ReactIsometricGrid extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // console.log(styles);
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    new IsoGrid(document.querySelector(`.${styles['isolayer--deco1']}`), {
      transform:
        'translateX(33vw) translateY(-340px) rotateX(45deg) rotateZ(45deg)',
      stackItemsAnimation: {
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
      },
      onGridLoaded: function() {
        bonzo(document.body).addClass(styles['grid-loaded']);
      },
    });
    // new IsoGrid(document.querySelector(`.${styles['isolayer--deco4']}`), {
    //   perspective: 3000,
    //   transform:
    //     'translate3d(-200px,-200px,0) scale3d(0.8,0.8,1) rotateY(45deg) rotateZ(-10deg)',
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
          styles['isolayer--deco1'],
          styles['isolayer--shadow'],
        ])}
      >
        <ul className={styles.grid}>
          <li className={styles.grid__item}>
            <a
              className={styles.grid__link}
              href="https://dribbble.com/fuviz"
            >
              <div className={styles.layer} />
              <div className={styles.layer} />
              <div className={styles.layer} />
              <span className={styles['grid__title']}>Cosmin Capitanu</span>
              <img
                alt="01"
                className={classNames([styles.grid__img, styles.layer])}
                src={img1}
              />
            </a>
          </li>
          <li className={styles.grid__item}>
            <a
              className={styles.grid__link}
              href="https://dribbble.com/fuviz"
            >
              <div className={styles.layer} />
              <div className={styles.layer} />
              <div className={styles.layer} />
              <img
                alt="01"
                className={classNames([styles.grid__img, styles.layer])}
                src={img1}
              />
            </a>
          </li>
          <li className={styles.grid__item}>
            <a
              className={styles.grid__link}
              href="https://dribbble.com/fuviz"
            >
              <div className={styles.layer} />
              <div className={styles.layer} />
              <div className={styles.layer} />
              <img
                alt="01"
                className={classNames([styles.grid__img, styles.layer])}
                src={img1}
              />
            </a>
          </li>
          <li className={styles.grid__item}>
            <a
              className={styles.grid__link}
              href="https://dribbble.com/fuviz"
            >
              <div className={styles.layer} />
              <div className={styles.layer} />
              <div className={styles.layer} />
              <img
                alt="01"
                className={classNames([styles.grid__img, styles.layer])}
                src={img1}
              />
            </a>
          </li>
          <li className={styles.grid__item}>
            <a
              className={styles.grid__link}
              href="https://dribbble.com/fuviz"
            >
              <div className={styles.layer} />
              <div className={styles.layer} />
              <div className={styles.layer} />
              <img
                alt="01"
                className={classNames([styles.grid__img, styles.layer])}
                src={img1}
              />
            </a>
          </li>
          <li className={styles.grid__item}>
            <a
              className={styles.grid__link}
              href="https://dribbble.com/fuviz"
            >
              <div className={styles.layer} />
              <div className={styles.layer} />
              <div className={styles.layer} />
              <img
                alt="01"
                className={classNames([styles.grid__img, styles.layer])}
                src={img1}
              />
            </a>
          </li>
          <li className={styles.grid__item}>
            <a
              className={styles.grid__link}
              href="https://dribbble.com/fuviz"
            >
              <div className={styles.layer} />
              <div className={styles.layer} />
              <div className={styles.layer} />
              <img
                alt="01"
                className={classNames([styles.grid__img, styles.layer])}
                src={img1}
              />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default ReactIsometricGrid;
