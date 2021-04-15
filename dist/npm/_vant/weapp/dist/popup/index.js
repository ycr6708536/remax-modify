require('./../../../../../runtime.js');
require('./../../../../../remax-vendors.js');
require('./../../../../../remax-styles.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["npm/_vant/weapp/dist/popup/index"],{

/***/ "./node_modules/@vant/weapp/dist/popup/index.entry.js":
/*!************************************************************!*\
  !*** ./node_modules/@vant/weapp/dist/popup/index.entry.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/component */ "./node_modules/@vant/weapp/dist/common/component.js");
/* harmony import */ var _mixins_transition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mixins/transition */ "./node_modules/@vant/weapp/dist/mixins/transition.js");
__webpack_require__(/*! ./index.wxss */ "./node_modules/@vant/weapp/dist/popup/index.wxss");



Object(_common_component__WEBPACK_IMPORTED_MODULE_0__["VantComponent"])({
  classes: ['enter-class', 'enter-active-class', 'enter-to-class', 'leave-class', 'leave-active-class', 'leave-to-class', 'close-icon-class'],
  mixins: [Object(_mixins_transition__WEBPACK_IMPORTED_MODULE_1__["transition"])(false)],
  props: {
    round: Boolean,
    closeable: Boolean,
    customStyle: String,
    overlayStyle: String,
    transition: {
      type: String,
      observer: 'observeClass'
    },
    zIndex: {
      type: Number,
      value: 100
    },
    overlay: {
      type: Boolean,
      value: true
    },
    closeIcon: {
      type: String,
      value: 'cross'
    },
    closeIconPosition: {
      type: String,
      value: 'top-right'
    },
    closeOnClickOverlay: {
      type: Boolean,
      value: true
    },
    position: {
      type: String,
      value: 'center',
      observer: 'observeClass'
    },
    safeAreaInsetBottom: {
      type: Boolean,
      value: true
    },
    safeAreaInsetTop: {
      type: Boolean,
      value: false
    }
  },
  created: function created() {
    this.observeClass();
  },
  methods: {
    onClickCloseIcon: function onClickCloseIcon() {
      this.$emit('close');
    },
    onClickOverlay: function onClickOverlay() {
      this.$emit('click-overlay');

      if (this.data.closeOnClickOverlay) {
        this.$emit('close');
      }
    },
    observeClass: function observeClass() {
      var _this$data = this.data,
          transition = _this$data.transition,
          position = _this$data.position,
          duration = _this$data.duration;
      var updateData = {
        name: transition || position
      };

      if (transition === 'none') {
        updateData.duration = 0;
        this.originDuration = duration;
      } else if (this.originDuration != null) {
        updateData.duration = this.originDuration;
      }

      this.setData(updateData);
    }
  }
});

/***/ }),

/***/ "./node_modules/@vant/weapp/dist/popup/index.wxss":
/*!********************************************************!*\
  !*** ./node_modules/@vant/weapp/dist/popup/index.wxss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* istanbul ignore next */
// extracted by mini-css-extract-plugin

/***/ })

},[["./node_modules/@vant/weapp/dist/popup/index.entry.js","runtime","remax-vendors","remax-styles"]]]);