/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import styles from './generic.scss';
import BasicStack from './basic-stack';
import Spread from './spread';
import SideStack from './side-stack';
import LoadedCallback from './loaded-callback';

const wrapWithSource = (node, src) => (
  <div>
    {node}

    <br />
    <a
      href={`https://github.com/wuweiweiwu/react-isometric-grid/blob/master/examples/storybooks/${src}`}
      target="_top"
      rel="noopener noreferrer"
      className={styles.sourceLink}
    >
      VIEW SOURCE →
    </a>
  </div>
);

storiesOf('Basics', module)
  .add('Basic Stack', () => wrapWithSource(<BasicStack />, 'basic-stack.js'))
  .add('Spread', () => wrapWithSource(<Spread />, 'spread.js'))
  .add('Side Stack', () => wrapWithSource(<SideStack />, 'side-stack.js'));

storiesOf('Advanced', module).add('onGridLoaded Callback', () =>
  wrapWithSource(<LoadedCallback />, 'loaded-callback.js')
);
