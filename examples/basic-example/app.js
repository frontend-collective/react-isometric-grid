/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

// import PrettyInteractionIcon from '../../src/index';

import styles from './stylesheets/app.scss';

class App extends Component {
  render() {
    return (
      <div className={styles['main-content']}>
        {/* <PrettyInteractionIcon
          cssAnimation="flash"
          cssInfinite={false}
          icon="thumbs-up"
          start
        /> */}
      </div>
    );
  }
}

export default App;
