import bonzo from 'bonzo';
import dynamics from 'dynamics.js';
import imagesLoaded from 'imagesloaded';
import Masonry from 'masonry-layout';

// import AnimOnScroll from './utils/anim-on-scroll';
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
class IsoGrid {
  constructor(el, options) {
    this.isolayerEl = el;

    this.options = extend({}, defaultOptions);
    extend(this.options, options);

    // this.gridEl = this.isolayerEl.querySelector('.grid');
    this.gridEl = this.isolayerEl.querySelector(`.${styles.grid}`);

    // grid items
    // this.gridItems = [].slice.call(this.gridEl.querySelectorAll('.grid__item'));
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
        // itemSelector: '.grid__item',
        itemSelector: `.${styles.grid__item}`,
        isFitWidth: true,
        horizontalOrder: true,
      });

      // the isolayer div element will be positioned fixed and will have a transformation based on the values defined in the HTML (data-attrs for the isolayer div element)
      // if (self.options.type === 'scrollable') {
      //   self.isolayerEl.style.position = 'fixed';
      // }

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

      // create the div element that will force the height for scrolling
      // if (self.options.type === 'scrollable') {
      //   self._createPseudoScroller();
      // }

      // init/bind events
      self._initEvents();

      // effects for loading grid elements:
      // if (self.options.type === 'scrollable') {
      //   new AnimOnScroll(self.gridEl, {
      //     minDuration: 1,
      //     maxDuration: 1.2,
      //     viewportFactor: 0,
      //   });
      // }

      // grid is "loaded" (all images are loaded)
      self.options.onGridLoaded();
      // bonzo(self.gridEl).addClass(styles['grid--loaded']);
    });
  }

  /**
   * Creates the div element that will force the height for scrolling
   */
  // _createPseudoScroller() {
  //   // element that will force the height for scrolling
  //   this.pseudoScrollerEl = document.createElement('div');
  //   this.pseudoScrollerEl.className = styles['pseudo-scroller'];
  //   // insert it inside the main container (same level of isolayerEl)
  //   this.isolayerEl.parentNode.insertBefore(
  //     this.pseudoScrollerEl,
  //     this.isolayerEl
  //   );
  //   // set the height of the pseudoScroller (grid´s height + additional space between the top of the rotated isolayerEl and the page - value set for the translation on the Y axis)
  //   this.pseudoScrollerEl.style.height =
  //     this.gridEl.offsetHeight +
  //     getComputedTranslateY(this.isolayerEl) * Math.sqrt(2) +
  //     'px';
  // }

  /**
   * Initialize/Bind events fn.
   */
  _initEvents() {
    var self = this;

    // if (this.options.type === 'scrollable') {
    //   // update the transform (ty) on scroll
    //   window.addEventListener(
    //     'scroll',
    //     () => {
    //       this.requestAnimationFrame(function() {
    //         if (!self.didscroll) {
    //           self.didscroll = true;
    //           self._scrollPage();
    //         }
    //       });
    //     },
    //     false
    //   );
    //   // on resize (layoutComplete for the masonry instance) recalculate height
    //   this.msnry.on('layoutComplete', function(laidOutItems) {
    //     // reset the height of the pseudoScroller (grid´s height + additional space between the top of the rotated isolayerEl and the page)
    //     self.pseudoScrollerEl.style.height =
    //       self.gridEl.offsetHeight +
    //       self.isolayerEl.offsetTop * Math.sqrt(2) +
    //       'px';
    //     self._scrollPage();
    //   });
    // }

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

  // _scrollPage() {
  //   this.gridEl.style.WebkitTransform = this.gridEl.style.transform =
  //     'translate3d(0,-' + scrollY() + 'px,0)';
  //   this.didscroll = false;
  // }
}

export default IsoGrid;
