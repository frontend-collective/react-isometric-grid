import React, { Component } from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import classNames from 'classnames';
import uniqid from 'uniqid';

import styles from './react-isometric-grid.scss';
import { isValidColor } from './utils/misc';

class Cell extends Component {
  render() {
    const { layers, href, title, style, onClick } = this.props;

    const layerList = layers.map(layer => {
      if (!layer) {
        return null;
      }
      if (isValidColor(layer)) {
        return (
          <div
            className={styles.layer}
            key={uniqid()}
            style={{ ...style, backgroundColor: layer }}
          />
        );
      }
      return (
        <img
          alt=""
          className={classNames([styles.grid__img, styles.layer])}
          key={uniqid()}
          src={layer}
          style={style}
        />
      );
    });
    return (
      <li className={styles.grid__item}>
        <a
          className={classNames({
            [styles.grid__link]: true,
            [styles['grid__link--onclick']]: !!onClick,
          })}
          href={href || null}
          onClick={onClick}
        >
          {layerList.reverse()}
          {!!title && <span className={styles.grid__title}>{title}</span>}
        </a>
      </li>
    );
  }
}

Cell.propTypes = {
  // arry of images to be in the stack, or hex string for layer colors
  layers: PropTypes.arrayOf(PropTypes.string).isRequired,

  // onclick navigation link
  href: PropTypes.string,

  // onClick function
  onClick: PropTypes.func,

  // optional tital for the stack
  title: PropTypes.string,

  // styling
  style: stylePropType,
};

Cell.defaultProps = {
  href: null,
  onClick: null,
  title: null,
  style: {
    transformOrigin: '50% 100%',
    width: '200px',
    height: '200px',
  },
};

export default Cell;
