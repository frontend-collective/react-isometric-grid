import bonzo from 'bonzo';
import dynamics from 'dynamics.js';
import imagesLoaded from 'imagesloaded';
import Masonry from 'masonry-layout';

import { getComputedTranslateY, scrollY, extend } from './utils/misc';
import {
  getRequestAnimationFrame,
  getCancelAnimationFrame,
} from './utils/animation-frame';
import styles from './react-isometric-grid.scss';

const defaultOptions = {
  // static or scrollable
  type: 'static',
  // grid perspective value
  perspective: 0,
  // grid transform
  transform: '',
  // each grid item animation (for the subitems)
  stackItemsAnimation: {
    // this follows the dynamics.js (https://github.com/michaelvillar/dynamics.js) animate fn syntax
    // properties (pos is the current subitem position)
    properties: function(pos) {
      return {
        translateZ: (pos + 1) * 50,
      };
    },
    // animation options (pos is the current subitem position); itemstotal is the total number of subitems
    options: function(pos, itemstotal) {
      return {
        type: dynamics.bezier,
        duration: 500,
        points: [
          { x: 0, y: 0, cp: [{ x: 0.2, y: 1 }] },
          { x: 1, y: 1, cp: [{ x: 0.3, y: 1 }] },
        ],
      };
    },
  },
  // callback for loaded grid
  onGridLoaded: function() {
    return false;
  },
};

// iso grid class
class IsometricGrid {
  constructor(el, options) {
    this.isolayerEl = el;

    this.options = extend({}, defaultOptions);
    extend(this.options, options);

    this.gridEl = this.isolayerEl.querySelector(`.${styles.grid}`);

    // grid items
    this.gridItems = [].slice.call(
      this.gridEl.querySelectorAll(`.${styles.grid__item}`)
    );
    this.gridItemsTotal = this.gridItems.length;

    this.didscroll = false;

    this._init();

    // animation frame functions
    this.requestAnimationFrame = getRequestAnimationFrame();
    this.cancelAnimationFrame = getCancelAnimationFrame();
  }

  _init() {
    var self = this;

    imagesLoaded(this.gridEl, function() {
      // initialize masonry
      self.msnry = new Masonry(self.gridEl, {
        itemSelector: `.${styles.grid__item}`,
        isFitWidth: true,
        horizontalOrder: true,
      });

      self.isolayerEl.style.WebkitTransformStyle = self.isolayerEl.style.transformStyle =
        'preserve-3d';

      var transformValue =
        self.options.perspective != 0
          ? 'perspective(' +
            self.options.perspective +
            'px) ' +
            self.options.transform
          : self.options.transform;
      self.isolayerEl.style.WebkitTransform = self.isolayerEl.style.transform = transformValue;

      // init/bind events
      self._initEvents();

      // grid is "loaded" (all images are loaded)
      self.options.onGridLoaded();
      // bonzo(self.gridEl).addClass(styles['grid--loaded']);
    });
  }

  /**
   * Initialize/Bind events fn.
   */
  _initEvents() {
    var self = this;

    this.gridItems.forEach(function(item) {
      item.addEventListener('mouseenter', e => self._expandSubItems(e.target));
      item.addEventListener('mouseleave', e =>
        self._collapseSubItems(e.target)
      );
    });
  }

  _expandSubItems(item) {
    var self = this,
      itemLink = item.querySelector('a'),
      subItems = [].slice.call(itemLink.querySelectorAll(`.${styles.layer}`)),
      subItemsTotal = subItems.length;

    itemLink.style.zIndex = item.style.zIndex = this.gridItemsTotal;

    subItems.forEach(function(subitem, pos) {
      dynamics.stop(subitem);
      dynamics.animate(
        subitem,
        self.options.stackItemsAnimation.properties(pos),
        self.options.stackItemsAnimation.options(pos, subItemsTotal)
      );
    });
  }

  _collapseSubItems(item) {
    var itemLink = item.querySelector('a');
    [].slice
      .call(itemLink.querySelectorAll(`.${styles.layer}`))
      .forEach(function(subitem, pos) {
        dynamics.stop(subitem);
        dynamics.animate(
          subitem,
          {
            translateZ: 0, // enough to reset any transform value previously set
          },
          {
            duration: 100,
            complete: function() {
              itemLink.style.zIndex = item.style.zIndex = 1;
            },
          }
        );
      });
  }
}

export default IsometricGrid;
