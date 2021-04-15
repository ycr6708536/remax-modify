require('./../../../../../runtime.js');
require('./../../../../../remax-vendors.js');
require('./../../../../../remax-styles.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["npm/_vant/weapp/dist/overlay/index"],{

/***/ "./node_modules/@vant/weapp/dist/overlay/index.entry.js":
/*!**************************************************************!*\
  !*** ./node_modules/@vant/weapp/dist/overlay/index.entry.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/component */ "./node_modules/@vant/weapp/dist/common/component.js");
__webpack_require__(/*! ./index.wxss */ "./node_modules/@vant/weapp/dist/overlay/index.wxss");


Object(_common_component__WEBPACK_IMPORTED_MODULE_0__["VantComponent"])({
  props: {
    show: Boolean,
    customStyle: String,
    duration: {
      type: null,
      value: 300
    },
    zIndex: {
      type: Number,
      value: 1
    }
  },
  methods: {
    onClick: function onClick() {
      this.$emit('click');
    },
    // for prevent touchmove
    noop: function noop() {}
  }
});

/***/ }),

/***/ "./node_modules/@vant/weapp/dist/overlay/index.wxss":
/*!**********************************************************!*\
  !*** ./node_modules/@vant/weapp/dist/overlay/index.wxss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* istanbul ignore next */
// extracted by mini-css-extract-plugin

/***/ })

},[["./node_modules/@vant/weapp/dist/overlay/index.entry.js","runtime","remax-vendors","remax-styles"]]]);