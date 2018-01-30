# react-isometric-grids [![Build Status](https://travis-ci.org/wuweiweiwu/react-isometric-grid.svg?branch=master)](https://travis-ci.org/wuweiweiwu/react-isometric-grid) [![npm version](https://badge.fury.io/js/react-isometric-grid.svg)](https://badge.fury.io/js/react-isometric-grid)

React Isometric Grids :stuck_out_tongue: Inspired by https://github.com/codrops/IsometricGrids

Featured in Codrop [Collective 386](https://tympanus.net/codrops/collective/collective-386/)!

[![NPM](https://nodei.co/npm/react-isometric-grid.png)](https://nodei.co/npm/react-isometric-grid/)

## [Demo](http://weiweiwu.me/react-isometric-grid)

![Example](https://media.giphy.com/media/l4pTkeY0fDzNwhMzK/giphy.gif)

## Notes

use with `normalize.css` for best results across browsers.

```bash
npm i -S normalize.css

# and in index.js add

import 'normalize.css';
```

## Usage

```javascript
import React, { Component } from 'react';
import IsometricGrid, { Cell } from 'react-isometric-grid';
import dynamics from 'dynamics.js';

class App extends Component {
  render() {
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return (
      <IsometricGrid
        shadow
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
        style={{ height: '800px', width: '900px' }}
      >
        <Cell
          layers={[
            'https://picsum.photos/600/600/?random',
            '#9972fc',
            '#c322a3',
            '#9eb5c2',
          ]}
        />
        <Cell
          layers={[
            'https://picsum.photos/200/300/?random',
            '#9972fc',
            '#c322a3',
            '#9eb5c2',
          ]}
        />
        <Cell
          layers={[
            'https://picsum.photos/400/300/?random',
            '#9972fc',
            '#c322a3',
            '#9eb5c2',
          ]}
        />
        <Cell
          layers={[
            'https://picsum.photos/200/500/?random',
            '#9972fc',
            '#c322a3',
            '#9eb5c2',
          ]}
        />
      </ReactIsometricGrid>
    );
  }
}

export default App;
```

## Options

### Isometric Grid

| Prop                                                                        | Type           | Description                                         | Default                                                                      |
| --------------------------------------------------------------------------- | -------------- | --------------------------------------------------- | ---------------------------------------------------------------------------- |
| children _(required)_                                                       | React elements | Cells inside the grid                               |                                                                              |
| [perspective](https://developer.mozilla.org/en-US/docs/Web/CSS/perspective) | number         | px from the z axis                                  | `3000`                                                                       |
| [transform](https://www.w3schools.com/cssref/css3_pr_transform.asp)         | string         | css transform applied to the whole grid             | `"scale3d(0.8,0.8,1) rotateY(45deg) rotateZ(-10deg)"`                        |
| stackItemsAnimation                                                         | object         | animation properties for each cell using dynamic.js | below                                                                        |
| shadow                                                                      | boolean        | Display a shadow under the cells                    | false                                                                        |
| onGridLoaded                                                                | function       | Callback when the grid is loaded                    | `()=>{}`                                                                     |
| style                                                                       | object         | inline css styling for the inner div                | `{ height: '600px', width: '600px', position: 'absolute', left: 0, top: 0 }` |

#### stackItemsAnimation prop example

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

| Prop                | Type            | Description                                                                                     | Default                                                              |
| ------------------- | --------------- | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| layers _(required)_ | array of string | what each layer is in the cell. <br/> Can be image urls or valid css colors                     |                                                                      |
| href                | string          | url that the image will link to when clicked                                                    | `null`                                                               |
| onClick             | function        | what is executed when the image is clicked. If using with `href`, be sure to `preventDefault()` | `null`                                                               |
| title               | string          | title that is under the layers. Shown on mouse over                                             | `null`                                                               |
| style               | object          | inline styling for the Cell component                                                           | `{ width: '200px', height: '200px', transformStyle: 'preserve-3d' }` |
| layerStyle          | object          | inline styling for each inner layer                                                             | `{ width: '200px', height: '200px' }`                                |
## Compatibility 

It is compatible in browsers where `transform-style: 3d` is supported.

![chart](https://image.ibb.co/gH1R16/Screen_Shot_2018_01_29_at_10_07_54_PM.png)

## Troubleshooting

**z-animations aren't working** Make sure you dont have `overflow` css property set. That messes up z-axis animations. https://stackoverflow.com/questions/21248111/overflow-behavior-after-using-css3-transform

**2d animations are acting weird** in the `style` prop of cell. set `transformStyle: flat` SEE [#9](https://github.com/wuweiweiwu/react-isometric-grid/issues/9) https://www.w3schools.com/cssref/css3_pr_transform-style.asp

**The axis of rotation is weird or not what you want** set the `transformOrigin` property of `layerStyle` prop of Cell. https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin

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

* [Codrops](http://www.codrops.com)
* [Masonry](http://masonry.desandro.com/) by David DeSandro.
* [Dynamics.js](http://dynamicsjs.com/) by Michael Villar.
* [Unsplash](http://unsplash.com)
* Dribbble artists: [Mike](https://dribbble.com/creativemints), [Forefathers](https://dribbble.com/forefathers), [Julian Lavallee](https://dribbble.com/JulienLavallee), [Cosmin Capitanu](https://dribbble.com/Radium)
