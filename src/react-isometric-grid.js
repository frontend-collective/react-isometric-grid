import React, { Component } from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import dynamics from 'dynamics.js';
import classNames from 'classnames';

import styles from './react-isometric-grid.scss';
import IsometricGrid from './isometric-grid';

class ReactIsometricGrid extends Component {
  componentDidMount() {
    const {
      onGridLoaded,
      perspective,
      transform,
      stackItemsAnimation,
    } = this.props;

    this.isometricGrid = new IsometricGrid(
      document.querySelector(`.${styles.isolayer}`),
      {
        perspective,
        transform,
        stackItemsAnimation,
        onGridLoaded,
      }
    );
  }

  render() {
    const { style, shadow, cells } = this.props;

    return (
      <div
        className={classNames({
          [styles.isolayer]: true,
          [styles['isolayer--shadow']]: shadow,
        })}
        style={style}
      >
        <ul className={styles.grid}>{cells}</ul>
      </div>
    );
  }
}

ReactIsometricGrid.propTypes = {
  // have a shadow under the cells
  shadow: PropTypes.bool,

  // ongridloaded callback
  onGridLoaded: PropTypes.func,

  // style
  style: stylePropType,

  // cells
  cells: PropTypes.arrayOf(PropTypes.element).isRequired,

  // perspective value, # of px distance from z origin
  perspective: PropTypes.number,

  // transform of the isometric grid in 3d space
  // https://www.w3schools.com/cssref/css3_pr_transform.asp
  transform: PropTypes.string,

  // animation values for each cell dynamicjs
  stackItemsAnimation: PropTypes.shape({
    // object of the properties/values you want to animate
    // https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function
    properties: PropTypes.func,

    // object representing the animation like duration and easing
    // https://github.com/michaelvillar/dynamics.js#dynamicsanimateel-properties-options
    options: PropTypes.func,
  }),
};

ReactIsometricGrid.defaultProps = {
  shadow: false,
  onGridLoaded: () => {},
  style: {
    height: '600px',
    width: '600px',
    position: 'absolute',
    left: 0,
    top: 0,
  },
  perspective: 3000,
  transform: 'scale3d(0.8,0.8,1) rotateY(45deg) rotateZ(-10deg)',
  stackItemsAnimation: {
    properties(pos) {
      return {
        rotateX: (pos + 1) * -15,
      };
    },
    options(pos, totalItems) {
      return {
        type: dynamics.spring,
        delay: (totalItems - pos - 1) * 30,
      };
    },
  },
};

export default ReactIsometricGrid;
