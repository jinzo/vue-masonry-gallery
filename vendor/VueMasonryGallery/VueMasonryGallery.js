(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueMasonryGallery"] = factory();
	else
		root["VueMasonryGallery"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(8)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alink_vue__ = __webpack_require__(9);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: "vue-masonry-gallery",
  components: {
    alink: __WEBPACK_IMPORTED_MODULE_0__alink_vue__["a" /* default */]
  },
  props: {
    width: {
      // Container width
      type: Number
    },
    height: {
      // Container height
      type: [Number, String]
    },
    reachBottomDistance: {
      // Scroll bottom distance, trigger loading new image
      type: Number, // selector
      default: 0 // Default triggered at the lowest column
    },
    loadingDotCount: {
      // loading points
      type: Number,
      default: 3
    },
    loadingDotStyle: {
      type: Object
    },
    gap: {
      // .img-box spacing
      type: Number,
      default: 20
    },
    mobileGap: {
      type: Number,
      default: 8
    },
    maxCols: {
      type: Number,
      default: 4
    },
    imgsArr: {
      type: Array,
      required: true
    },
    srcKey: {
      type: String,
      default: "src"
    },
    hrefKey: {
      type: String,
      default: "href"
    },
    imgWidth: {
      type: Number,
      default: 330
    },
    isRouterLink: {
      type: Boolean,
      default: false
    },
    linkRange: {
      // card | img | Customize the link range through slots
      type: String,
      default: "card"
    },
    loadingTimeOut: {
      // Preloading events less than 500 milliseconds do not display loading animations, increasing the user experience
      type: Number,
      default: 500
    },
    cardAnimationClass: {
      type: [String],
      default: "default-card-animation"
    },
    perPage: {
      type: Number,
      default: 13
    }
  },
  data() {
    return {
      currentlyVisible: 0,
      msg: "this is from VueMasonryGallery.vue",
      isMobile: !!navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i), // Initialize the mobile terminal
      isPreloading: true, // Preloading, showing loading animation
      isPreloading_c: true,
      imgsArr_c_page: [],
      imgsArr_c: [], // After imgsArr is completed and the image is preloaded, imgsArr_c will be generated after the new field height is inserted. Then the rendering starts.
      loadedCount: 0,
      cols: NaN, // Need to initialize based on window width
      imgBoxEls: null, // All .img-box elements
      beginIndex: 0, // The index of the picture to be arranged is the first picture in the second column for the first time, and the subsequent index is the next index of the already arranged picture.
      colsHeightArr: [],
      // Custom loading
      LoadingTimer: null,
      isFirstLoad: true, // Loading for the first time
      over: false, // Ending the waterfall loading
      scrolled: false
    };
  },
  computed: {
    colWidth() {
      // Width of each column
      return this.imgWidth + this.gap;
    },
    imgWidth_c() {
      // Recalculate the picture width for the mobile side
      return this.isMobile ? window.innerWidth / 2 - this.mobileGap : this.imgWidth;
    },
    hasLoadingSlot() {
      return !!this.$scopedSlots.loading;
    }
  },
  mounted() {
    this.bindClickEvent();
    this.loadingMiddle();

    this.preload();
    this.cols = this.calcuCols();
    this.$on("preloaded", () => {
      this.isFirstLoad = false;

      // First page of perPage elements (default is 12)
      this.imgsArr_c_page = this.imgsArr.slice(0, this.perPage);
      this.currentlyVisible = this.perPage;

      this.imgsArr_c = this.imgsArr.concat([]); // Pre-loading is complete, then only start rendering
      this.$nextTick(() => {
        this.isPreloading = false;
        this.imgBoxEls = this.$el.getElementsByClassName("img-box");
        // console.log('Total number of pictures', this.imgBoxEls.length)
        this.waterfall();
      });
    });
    if (!this.isMobile && !this.width) this.response();
    this.scroll();
  },
  watch: {
    isPreloading(newV, oldV) {
      if (newV) {
        setTimeout(() => {
          if (!this.isPreloading) return; // 500 Loading images after preloading the image in milliseconds
          this.isPreloading_c = true;
        }, this.loadingTimeOut);
      } else {
        this.isPreloading_c = false;
      }
    },
    imgsArr(newV, oldV) {
      if (oldV.length > 0 && newV[0] && !newV[0]._height) {
        // console.log('reset')
        this.reset();
      }
      this.preload();
    }
  },
  methods: {
    // ==1== Preloading
    preload(src, imgIndex) {
      this.imgsArr.forEach((imgItem, imgIndex) => {
        if (imgIndex < this.loadedCount) return; // Preload only new loaded images

        // When there is no picture

        if (!imgItem[this.srcKey]) {
          this.imgsArr[imgIndex]._height = "0";
          this.loadedCount++;
          return;
        }
        var oImg = new Image();
        oImg.src = imgItem[this.srcKey];
        oImg.onload = oImg.onerror = e => {
          this.loadedCount++;
          // Preload images, calculate the height of the image container
          this.imgsArr[imgIndex]._height = e.type == "load" ? Math.round(this.imgWidth_c / (oImg.width / oImg.height)) : this.imgWidth;

          if (this.loadedCount == this.imgsArr.length) {
            this.$emit("preloaded");
          }
        };
      });
    },
    // ==2==  Calculate cols
    calcuCols() {
      // Column number initialization
      var waterfallWidth = this.width ? this.width : window.innerWidth;
      var cols = parseInt(waterfallWidth / this.colWidth);
      cols = cols === 0 ? 1 : cols;
      return this.isMobile ? 2 : cols > this.maxCols ? this.maxCols : cols;
    },
    // ==3== Waterfall layout
    waterfall() {
      if (!this.imgBoxEls) return;
      // console.log('waterfall')
      var top,
          left,
          height,
          colWidth = this.isMobile ? this.imgBoxEls[0].offsetWidth : this.colWidth;
      if (this.beginIndex == 0) this.colsHeightArr = [];
      for (var i = 0; i < this.imgsArr_c.length; i++) {
        if (!this.imgBoxEls[i]) return;
        height = this.imgBoxEls[i].offsetHeight;
        if (i < this.cols) {
          this.colsHeightArr.push(height);
          top = 0;
          left = i * colWidth;
        } else {
          var minHeight = Math.min.apply(null, this.colsHeightArr); // Lowest level
          var minIndex = this.colsHeightArr.indexOf(minHeight); // Lowest height index
          top = minHeight;
          left = minIndex * colWidth;
          // Set the location of the element's positioning
          // Update colsHeightArr

          this.colsHeightArr[minIndex] = minHeight + height;
        }

        this.imgBoxEls[i].style.left = left + "px";
        this.imgBoxEls[i].style.top = top + "px";
      }
    },
    // ==4== Responsive view
    response() {
      window.addEventListener("resize", () => {
        var old = this.cols;
        this.cols = this.calcuCols();
        if (old === this.cols) return; // Leave the number of columns unchanged and exit directly
        this.beginIndex = 0; // Begins to arrange the index of the elements
        this.waterfall();
        if (this.over) this.setOverTipPos();
      });
    },

    // ==5== Scroll bottom event
    scrollFn() {
      var scrollEl = this.$refs.scrollEl;
      if (this.isPreloading) return;
      var minHeight = Math.min.apply(null, this.colsHeightArr);
      if (scrollEl.scrollTop + scrollEl.offsetHeight > minHeight - this.reachBottomDistance) {
        this.isPreloading = true;
        // console.log('scrollReachBottom')
        this.$emit("scrollReachBottom"); // Scrolling bottom
      }
    },
    // Load more images (next page)
    loadMore() {
      const b = this.currentlyVisible - 1;
      const e = b + this.perPage;
      this.currentlyVisible += this.perPage;

      this.imgsArr_c_page = this.imgsArr_c_page.concat(this.imgsArr_c.slice(b, e));
      this.$nextTick(() => {
        this.waterfall();
      });
    },
    scroll() {
      this.$refs.scrollEl.addEventListener("scroll", this.scrollFn);
    },
    masonryOver() {
      this.$refs.scrollEl.removeEventListener("scroll", this.scrollFn);
      this.isPreloading = false;
      this.over = true;
    },
    // ==6== Click event binding
    bindClickEvent() {
      this.$el.querySelector(".vue-masonry-gallery").addEventListener("click", e => {
        var targetEl = e.target;
        if (targetEl.className.indexOf("img-box") != -1) return;
        while (targetEl.className.indexOf("img-inner-box") == -1) {
          targetEl = targetEl.parentNode;
        }
        var index = targetEl.getAttribute("data-index");
        this.$emit("click", e, {
          index,
          value: this.imgsArr_c[index]
        });
      });
    },
    // other
    loadingMiddle() {
      // Correction of the misalignment caused by the width of the scroll bar
      var scrollEl = this.$el.querySelector(".vue-masonry-gallery-scroll");
      var scrollbarWidth = scrollEl.offsetWidth - scrollEl.clientWidth;
      this.$el.querySelector(".loading").style.marginLeft = -scrollbarWidth / 2 + "px";
    },
    reset() {
      this.imgsArr_c = [];
      this.beginIndex = 0;
      this.loadedCount = 0;
      this.isFirstLoad = true;
      this.isPreloading = true;
      this.scroll();
      this.over = false;
    }
  }
});

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//import XXX from './components/XXX'

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "alink",
  props: ["to"],
  data() {
    return {
      msg: "this is from alink.vue"
    };
  },
  methods: {}
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_VueMasonryGallery_vue__ = __webpack_require__(3);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0a767af3_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_VueMasonryGallery_vue__ = __webpack_require__(13);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(6)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0a767af3"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_VueMasonryGallery_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0a767af3_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_VueMasonryGallery_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/VueMasonryGallery.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0a767af3", Component.options)
  } else {
    hotAPI.reload("data-v-0a767af3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(7);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("388e68fa", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0a767af3\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./VueMasonryGallery.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0a767af3\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./VueMasonryGallery.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Module
exports.push([module.i, "\n.vue-masonry-gallery-container[data-v-0a767af3] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.vue-masonry-gallery-container .vue-masonry-gallery-scroll[data-v-0a767af3] {\n    padding-top: 12px;\n    position: relative;\n    width: 100%;\n    height: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    -webkit-overflow-scrolling: touch;\n}\n.vue-masonry-gallery-container .vue-masonry-gallery[data-v-0a767af3] {\n    position: absolute;\n    width: 100%;\n}\n@keyframes show-card-data-v-0a767af3 {\n0% {\n    transform: scale(0.7);\n}\n100% {\n    transform: scale(1);\n}\n}\n.vue-masonry-gallery-container .vue-masonry-gallery > .img-box[data-v-0a767af3] {\n      position: absolute;\n      box-sizing: border-box;\n      width: 50%;\n}\n.vue-masonry-gallery-container .vue-masonry-gallery > .img-box.default-card-animation[data-v-0a767af3] {\n      animation: show-card-data-v-0a767af3 0.4s;\n      transition: left 0.6s, top 0.6s;\n      transition-delay: 0.1s;\n}\n.vue-masonry-gallery-container .vue-masonry-gallery a[data-v-0a767af3] {\n      display: block;\n}\n.vue-masonry-gallery-container .vue-masonry-gallery .alink[data-v-0a767af3]:hover {\n      cursor: pointer;\n}\n.vue-masonry-gallery-container .vue-masonry-gallery a.img-inner-box[data-v-0a767af3] {\n      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\n      border-radius: 4px;\n      transition: all 0.4s ease-out;\n}\n.vue-masonry-gallery-container .vue-masonry-gallery a.img-inner-box[data-v-0a767af3]:hover {\n        filter: grayscale(1);\n}\n.vue-masonry-gallery-container .vue-masonry-gallery a.img-wraper[data-v-0a767af3] {\n      background-repeat: no-repeat;\n      background-position: center;\n      background-size: 44%;\n}\n.vue-masonry-gallery-container .vue-masonry-gallery a.img-wraper > img[data-v-0a767af3] {\n        width: 100%;\n        display: block;\n        border: none;\n}\n.vue-masonry-gallery-container .vue-masonry-gallery .over[data-v-0a767af3] {\n      position: absolute;\n      width: 100%;\n      text-align: center;\n      font-size: 12px;\n      line-height: 1.6;\n      color: #aaa;\n      padding: 20px 0 0 0;\n      margin: 0;\n      font-family: Arial, Helvetica, sans-serif;\n}\n.vue-masonry-gallery-container > .loading.first[data-v-0a767af3] {\n    bottom: 50%;\n    transform: translate(-50%, 50%);\n}\n.vue-masonry-gallery-container > .loading[data-v-0a767af3] {\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n    bottom: 6px;\n    z-index: 999;\n}\n@keyframes ball-beat-data-v-0a767af3 {\n30% {\n    opacity: 0.2;\n    transform: scale(0.55);\n}\n100% {\n    opacity: 1;\n    transform: scale(1);\n}\n}\n.vue-masonry-gallery-container > .loading.ball-beat > .dot[data-v-0a767af3] {\n      vertical-align: bottom;\n      background-color: #da1c04;\n      width: 22px;\n      height: 22px;\n      border-radius: 50%;\n      margin: 2px;\n      animation-fill-mode: both;\n      display: inline-block;\n      animation: ball-beat-data-v-0a767af3 0.7s 0s infinite linear;\n}\n.vue-masonry-gallery-container > .loading.ball-beat > .dot[data-v-0a767af3]:nth-child(2n-1) {\n      animation-delay: 0.35s;\n}\n.vue-masonry-gallery-container .loadMore[data-v-0a767af3] {\n    position: relative;\n    transition: all 0.4s ease-out;\n    width: 160px;\n    height: 40px;\n    line-height: 30px;\n    margin: 0 auto;\n    margin-bottom: 10px;\n    border-radius: 5px;\n    font-size: 15px;\n    color: #b7b7b7;\n    cursor: pointer;\n    outline: none;\n    border: solid 1px #d7d7d7;\n}\n.vue-masonry-gallery-container .loadMore[data-v-0a767af3]:hover {\n      background-color: #cf3e2c;\n      border: solid 1px #cf3e2c;\n      color: white;\n}\n", ""]);


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_alink_vue__ = __webpack_require__(4);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2720030a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_alink_vue__ = __webpack_require__(12);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(10)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_alink_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2720030a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_alink_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/alink.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2720030a", Component.options)
  } else {
    hotAPI.reload("data-v-2720030a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(11);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("048f7f30", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2720030a\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./alink.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2720030a\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./alink.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Module
exports.push([module.i, "\n.alink {\n  color: black;\n}\n", ""]);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "a",
    { staticClass: "alink", attrs: { href: _vm.to, target: "_blank" } },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2720030a", esExports)
  }
}

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "vue-masonry-gallery-container",
      style: {
        width: _vm.width && !_vm.isMobile ? _vm.width + "px" : "",
        height:
          parseFloat(_vm.height) == _vm.height ? _vm.height + "px" : _vm.height
      }
    },
    [
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.isPreloading_c,
              expression: "isPreloading_c"
            }
          ],
          staticClass: "loading ball-beat",
          class: { first: _vm.isFirstLoad }
        },
        [
          _vm._t("loading", null, { isFirstLoad: _vm.isFirstLoad }),
          _vm._l(_vm.loadingDotCount, function(n) {
            return !_vm.hasLoadingSlot
              ? _c("div", { staticClass: "dot", style: _vm.loadingDotStyle })
              : _vm._e()
          })
        ],
        2
      ),
      _c(
        "div",
        { ref: "scrollEl", staticClass: "vue-masonry-gallery-scroll" },
        [
          _vm._t("masonry-head"),
          _c(
            "div",
            {
              staticClass: "vue-masonry-gallery",
              style: _vm.isMobile
                ? ""
                : {
                    width: _vm.colWidth * _vm.cols + "px",
                    left: "50%",
                    marginLeft: (-1 * _vm.colWidth * _vm.cols) / 2 + "px"
                  }
            },
            _vm._l(_vm.imgsArr_c, function(v, i) {
              return i < _vm.currentlyVisible
                ? _c(
                    "div",
                    {
                      staticClass: "img-box",
                      class: [_vm.cardAnimationClass],
                      style: {
                        padding:
                          (_vm.isMobile ? _vm.mobileGap : _vm.gap) / 2 + "px",
                        width: _vm.isMobile ? "" : _vm.colWidth + "px"
                      }
                    },
                    [
                      _c(
                        _vm.isRouterLink && _vm.linkRange == "card"
                          ? "router-link"
                          : "alink",
                        {
                          tag: "component",
                          staticClass: "img-inner-box",
                          attrs: {
                            "data-index": i,
                            to: _vm.linkRange == "card" ? v[_vm.hrefKey] : false
                          }
                        },
                        [
                          v[_vm.srcKey]
                            ? _c(
                                _vm.isRouterLink && _vm.linkRange == "img"
                                  ? "router-link"
                                  : "alink",
                                {
                                  tag: "component",
                                  staticClass: "img-wraper",
                                  style: {
                                    width: _vm.imgWidth_c + "px",
                                    height: v._height ? v._height + "px" : false
                                  },
                                  attrs: {
                                    to:
                                      _vm.linkRange == "img"
                                        ? v[_vm.hrefKey]
                                        : false
                                  }
                                },
                                [
                                  _c("img", {
                                    attrs: {
                                      src: v[_vm.srcKey],
                                      title: v["title"],
                                      alt: v["alt"]
                                    }
                                  })
                                ]
                              )
                            : _vm._e(),
                          _vm._t("default", null, { index: i, value: v })
                        ],
                        2
                      )
                    ],
                    1
                  )
                : _vm._e()
            }),
            0
          )
        ],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0a767af3", esExports)
  }
}

/***/ })
/******/ ])["default"];
});