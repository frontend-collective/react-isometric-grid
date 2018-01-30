/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { withNotes } from '@storybook/addon-notes';
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
  .add(
    'Basic Stack',
    withNotes('A basic 3d vertical stack animation')(() =>
      wrapWithSource(<BasicStack />, 'basic-stack.js')
    )
  )
  .add(
    'Spread',
    withNotes('A spread animation to showcase a bunch of photos')(() =>
      wrapWithSource(<Spread />, 'spread.js')
    )
  )
  .add(
    'Side Stack',
    withNotes(
      'Using the transform property of react-isometric-grid to display a bookshelf like grid that opens sideways'
    )(() => wrapWithSource(<SideStack />, 'side-stack.js'))
  );

storiesOf('Advanced', module).add(
  'onGridLoaded Callback',
  withNotes(
    'Using the onGridLoaded callback to display the grid until all images are loaded'
  )(() => wrapWithSource(<LoadedCallback />, 'loaded-callback.js'))
);
