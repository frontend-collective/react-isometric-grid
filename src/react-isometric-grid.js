import React, { Component } from 'react';
import PropTypes from 'prop-types';

// helper libraries
const Masonry = require('masonry-layout');
const dynamics = require('dynamics.js');
const imageloaded = require('imagesloaded');

const AnimOnScroll = require('./js/animOnScroll');
const classie = require('./js/classie');

class ReactIsometricGrid extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return <h1>Hello, World!</h1>;
  }
}

export default ReactIsometricGrid;
