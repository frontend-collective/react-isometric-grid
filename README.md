# react-isometric-grids

React Isometric Grids :stuck_out_tongue: Inspired by https://github.com/codrops/IsometricGrids

[![Test Coverage](https://api.codeclimate.com/v1/badges/23aa36958fab6bfee77a/test_coverage)](https://codeclimate.com/github/wuweiweiwu/react-isometric-grid/test_coverage)[![Build Status](https://travis-ci.org/wuweiweiwu/react-isometric-grid.svg?branch=master)](https://travis-ci.org/wuweiweiwu/react-isometric-grid)

## [Demo](http://weiweiwu.me/react-isometric-grid)

![Example](https://media.giphy.com/media/1iZS7zj75q9zAFLa/giphy.gif)

## Usage

```javascript
import React, { Component } from 'react';

import IsometricGrid, { Cell } from '../../src';

import dynamics from 'dynamics.js';

import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';
import img5 from './img/5.jpg';
import img6 from './img/6.jpg';
import img7 from './img/7.jpg';

class App extends Component {
  render() {
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return (
      <IsometricGrid
        transform="rotateX(45deg) rotateZ(45deg)"
        stackItemsAnimation={{
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
        }}
        cells={[
          <Cell key={1} layers={[img1, '#9972fc', '#c322a3', '#9eb5c2']} />,
          <Cell key={1} layers={[img2, '#9972fc', '#c322a3', '#9eb5c2']} />,
          <Cell key={1} layers={[img3, '#9972fc', '#c322a3', '#9eb5c2']} />,
          <Cell key={1} layers={[img4, '#9972fc', '#c322a3', '#9eb5c2']} />,
          <Cell key={1} layers={[img5, '#9972fc', '#c322a3', '#9eb5c2']} />,
          <Cell key={1} layers={[img6, '#9972fc', '#c322a3', '#9eb5c2']} />,
          <Cell key={1} layers={[img7, '#9972fc', '#c322a3', '#9eb5c2']} />,
        ]}
        style={{ height: '800px', width: '900px' }}
      />
    );
  }
}

export default App;
```

## Options

### Isometric Grid

| Prop                | Type          | Description                                                                                    | Default                                                                      |
| ------------------- | ------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| shadow              | boolean       | Display a shadow under the cells                                                               | false                                                                        |
| onGridLoaded        | function      | Callback when the grid is loaded                                                               | `()=>{}`                                                                     |
| style               | object        | inline css styling for the inner div                                                           | `{ height: '600px', width: '600px', position: 'absolute', left: 0, top: 0 }` |
| perspective         | number        | px from the z axis https://developer.mozilla.org/en-US/docs/Web/CSS/perspective                | `3000`                                                                       |
| transform           | string        | css transform applied to the whole grid https://www.w3schools.com/cssref/css3_pr_transform.asp | `"scale3d(0.8,0.8,1) rotateY(45deg) rotateZ(-10deg)"`                        |
| stackItemsAnimation | object        | animation properties for each cell using dynamic.js                                            | below                                                                        |
| cells _(required)_  | array of Cell | Cells inside the grid                                                                          |                                                                              |

#### stackItemsAnimation

dynamic.js animations parameters

```javascript
{
  // object of the properties/values you want to animate
  // https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function
  properties(pos) {
    return {
      rotateX: (pos + 1) * -15,
    };
  },
  // object representing the animation like duration and easing
  // https://github.com/michaelvillar/dynamics.js#dynamicsanimateel-properties-options
  options(pos, totalItems) {
    return {
      type: dynamics.spring,
      delay: (totalItems - pos - 1) * 30,
    };
}
```

### Cell

| Prop                | Type            | Description                                                           | Default                                                            |
| ------------------- | --------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------ |
| layers _(required)_ | array of string | what each layer is in the cell. Can be image urls or valid css colors |                                                                    |
| link                | string          | Callback when the grid is loaded                                      | `""`                                                               |
| style               | object          | inline styling for the inner item                                     | `{ transformOrigin: '50% 100%', width: '200px', height: '200px' }` |
| title               | string          | title that is under the layers. Shown on mouse over                   | `""`                                                               |

## Contributing

After cloning the repository and running `npm install` inside, you can use the following commands to develop and build the project.

```sh
# Starts a webpack dev server that hosts a demo page with the component.
# It uses react-hot-loader so changes are reflected on save.
npm start

# Start the storybook, which has several different examples to play with.
# Also hot-reloaded.
npm run storybook

# Runs the library tests
npm test

# Lints the code with eslint
npm run lint

# Lints and builds the code, placing the result in the dist directory.
# This build is necessary to reflect changes if youre
#  `npm link`-ed to this repository from another local project.
npm run build
```

Pull requests are welcome!

## License

MIT

## Credits

* [Masonry](http://masonry.desandro.com/) by David DeSandro.
* [Dynamics.js](http://dynamicsjs.com/) by Michael Villar.
* [Unsplash](http://unsplash.com)
* Dribbble artists: [Mike](https://dribbble.com/creativemints), [Forefathers](https://dribbble.com/forefathers), [Julian Lavallee](https://dribbble.com/JulienLavallee), [Cosmin Capitanu](https://dribbble.com/Radium)
* [Codrops](http://www.codrops.com)
