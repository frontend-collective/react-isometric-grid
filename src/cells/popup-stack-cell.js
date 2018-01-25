import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from '../react-isometric-grid.scss';
import { isValidColor } from '../utils/misc';

class PopupStackCell extends Component {
  render() {
    const { layers, link, title } = this.props;

    const layerList = layers.map(layer => {
      if (!layer) {
        return;
      }
      if (isValidColor(layer)) {
        return (
          <div
            className={styles.layer}
            style={{ backgroundColor: layer }}
          />
        );
      } else {
        return (
          <img
            className={classNames([styles.grid__img, styles.layer])}
            src={layer}
          />
        );
      }
    });

    return (
      <li className={styles.grid__item}>
        <a
          className={styles.grid__link}
          href={link}
        >
          {layerList.reverse()}
          {!!title && <span className={styles['grid__title']}>{title}</span>}
        </a>
      </li>
    );
  }
}

PopupStackCell.PropTypes = {
  // arry of images to be in the stack, or hex string for layer colors
  layers: PropTypes.arrayOf(PropTypes.string).isRequired,

  // onclick navigation link
  link: PropTypes.string,

  // optional tital for the stack
  title: PropTypes.string,
};

export default PopupStackCell;
