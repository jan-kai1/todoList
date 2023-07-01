/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*{
    box-sizing: border-box;
    margin: 0;
    border:0;
    
    color:white;
}
:root{
    --low-color:#15803d;
    --high-color:#991b1b;
    --background-color:#581c87;
    --control-panel-color:#9333ea;
    --element-color:#a855f7;
}
body{
    background-color: var(--background-color);
}
.container{
    display:grid;
    grid-template: 1fr 5fr/1fr;
    min-height:100vh;

}
.control-panel{
    display:flex;
    justify-content: center;
    
}
.project-display{
    display:grid;
    
    grid-template: 2fr 1fr/1fr;
    
  

}
.project-display>.urgent{
    display:grid;
    background-color: var(--high-color);
    grid-template-columns:repeat(2, minmax(30vw,55%));
    grid-template-rows:repeat(auto-fill, minmax(15vh,50%));
    min-width:100%;
    max-width: 100%;
    max-height: 40vh;
    overflow-x:hidden;
    overflow-y:scroll;
   
   
    
}
.project-display .non-urgent{
    display:grid;
    background-color: var(--low-color);
    grid-template-columns:repeat(2, minmax(30vw,55%));
    grid-template-rows:repeat(auto-fill, minmax(15vh,50%));
    min-width:100%;
    max-width: 100%;
    max-height: 30vh;
    overflow-x:hidden;
    overflow-y:scroll;
  

}
.project{
    margin:2px;
    border:2px solid white;
    min-width: 100%;
    min-height:15vh;
    max-width: 100%;
    max-height: 100%;
    padding: 15px;
    display:grid;
    grid-template:1fr 3fr/1fr;
    border-radius: 5%;;
    
}
.project-top{
    display:flex;
    border: none;
}
.project-top>.project-name{
    flex:1;
    text-align: left;
}
.project-top>.project-dueDate{
    text-align:right;
}
.project>.project-description{
    overflow:hidden;
    max-height: 100%;
    border:none;
}

form{
    display:flex;
    flex-direction: column;
    border:2px solid red;
    justify-content: center;
    
    align-items: center;
}
form .form-input{
    border:2px solid red;
    margin:15px;
    flex:1;
    
}
.form-input>input{
    color:black;
}
textarea{
    color:black;
}
form button{
    color:black;
    justify-self: center    ;
}

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,SAAS;IACT,QAAQ;;IAER,WAAW;AACf;AACA;IACI,mBAAmB;IACnB,oBAAoB;IACpB,0BAA0B;IAC1B,6BAA6B;IAC7B,uBAAuB;AAC3B;AACA;IACI,yCAAyC;AAC7C;AACA;IACI,YAAY;IACZ,0BAA0B;IAC1B,gBAAgB;;AAEpB;AACA;IACI,YAAY;IACZ,uBAAuB;;AAE3B;AACA;IACI,YAAY;;IAEZ,0BAA0B;;;;AAI9B;AACA;IACI,YAAY;IACZ,mCAAmC;IACnC,iDAAiD;IACjD,sDAAsD;IACtD,cAAc;IACd,eAAe;IACf,gBAAgB;IAChB,iBAAiB;IACjB,iBAAiB;;;;AAIrB;AACA;IACI,YAAY;IACZ,kCAAkC;IAClC,iDAAiD;IACjD,sDAAsD;IACtD,cAAc;IACd,eAAe;IACf,gBAAgB;IAChB,iBAAiB;IACjB,iBAAiB;;;AAGrB;AACA;IACI,UAAU;IACV,sBAAsB;IACtB,eAAe;IACf,eAAe;IACf,eAAe;IACf,gBAAgB;IAChB,aAAa;IACb,YAAY;IACZ,yBAAyB;IACzB,iBAAiB;;AAErB;AACA;IACI,YAAY;IACZ,YAAY;AAChB;AACA;IACI,MAAM;IACN,gBAAgB;AACpB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,gBAAgB;IAChB,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,sBAAsB;IACtB,oBAAoB;IACpB,uBAAuB;;IAEvB,mBAAmB;AACvB;AACA;IACI,oBAAoB;IACpB,WAAW;IACX,MAAM;;AAEV;AACA;IACI,WAAW;AACf;AACA;IACI,WAAW;AACf;AACA;IACI,WAAW;IACX,wBAAwB;AAC5B","sourcesContent":["*{\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    border:0;\r\n    \r\n    color:white;\r\n}\r\n:root{\r\n    --low-color:#15803d;\r\n    --high-color:#991b1b;\r\n    --background-color:#581c87;\r\n    --control-panel-color:#9333ea;\r\n    --element-color:#a855f7;\r\n}\r\nbody{\r\n    background-color: var(--background-color);\r\n}\r\n.container{\r\n    display:grid;\r\n    grid-template: 1fr 5fr/1fr;\r\n    min-height:100vh;\r\n\r\n}\r\n.control-panel{\r\n    display:flex;\r\n    justify-content: center;\r\n    \r\n}\r\n.project-display{\r\n    display:grid;\r\n    \r\n    grid-template: 2fr 1fr/1fr;\r\n    \r\n  \r\n\r\n}\r\n.project-display>.urgent{\r\n    display:grid;\r\n    background-color: var(--high-color);\r\n    grid-template-columns:repeat(2, minmax(30vw,55%));\r\n    grid-template-rows:repeat(auto-fill, minmax(15vh,50%));\r\n    min-width:100%;\r\n    max-width: 100%;\r\n    max-height: 40vh;\r\n    overflow-x:hidden;\r\n    overflow-y:scroll;\r\n   \r\n   \r\n    \r\n}\r\n.project-display .non-urgent{\r\n    display:grid;\r\n    background-color: var(--low-color);\r\n    grid-template-columns:repeat(2, minmax(30vw,55%));\r\n    grid-template-rows:repeat(auto-fill, minmax(15vh,50%));\r\n    min-width:100%;\r\n    max-width: 100%;\r\n    max-height: 30vh;\r\n    overflow-x:hidden;\r\n    overflow-y:scroll;\r\n  \r\n\r\n}\r\n.project{\r\n    margin:2px;\r\n    border:2px solid white;\r\n    min-width: 100%;\r\n    min-height:15vh;\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n    padding: 15px;\r\n    display:grid;\r\n    grid-template:1fr 3fr/1fr;\r\n    border-radius: 5%;;\r\n    \r\n}\r\n.project-top{\r\n    display:flex;\r\n    border: none;\r\n}\r\n.project-top>.project-name{\r\n    flex:1;\r\n    text-align: left;\r\n}\r\n.project-top>.project-dueDate{\r\n    text-align:right;\r\n}\r\n.project>.project-description{\r\n    overflow:hidden;\r\n    max-height: 100%;\r\n    border:none;\r\n}\r\n\r\nform{\r\n    display:flex;\r\n    flex-direction: column;\r\n    border:2px solid red;\r\n    justify-content: center;\r\n    \r\n    align-items: center;\r\n}\r\nform .form-input{\r\n    border:2px solid red;\r\n    margin:15px;\r\n    flex:1;\r\n    \r\n}\r\n.form-input>input{\r\n    color:black;\r\n}\r\ntextarea{\r\n    color:black;\r\n}\r\nform button{\r\n    color:black;\r\n    justify-self: center    ;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/storageutils.js":
/*!*****************************!*\
  !*** ./src/storageutils.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getProjectList: () => (/* binding */ getProjectList),
/* harmony export */   setProjectList: () => (/* binding */ setProjectList)
/* harmony export */ });
//retrieves project list and returns if exists, else return null

function getProjectList()
{
    let projectList = JSON.parse(localStorage.getItem("projectList"))
    //return projectList if exist else null if invalid
    if (projectList && projectList.length != 0)
    {
        console.log("List found")
        return projectList;
    }
    else
    {
        console.log("list not found")
        return null;
    }
}

function setProjectList(list)
{
    localStorage.setItem("projectList", JSON.stringify(list));
    console.log("list set")
}

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addResetButton: () => (/* binding */ addResetButton),
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   createProjectElement: () => (/* binding */ createProjectElement),
/* harmony export */   getProjectList: () => (/* binding */ getProjectList),
/* harmony export */   indexInit: () => (/* binding */ indexInit),
/* harmony export */   messageReceiver: () => (/* binding */ messageReceiver),
/* harmony export */   setProjectList: () => (/* binding */ setProjectList)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _storageutils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storageutils */ "./src/storageutils.js");
 


;
function indexInit()
{
    let projectList = (0,_storageutils__WEBPACK_IMPORTED_MODULE_1__.getProjectList)()
    if (projectList == null)
    {
        
        projectList = []
        const cleanRoom = createProject("clean room","2023-7-1","non-urgent","clean my damn room");
        const checkEmail = createProject("check email", "2023-6-20","urgent","check all emails");
        const testProject = createProject("test", "23-4-2222", "urgent", "LOLOLOL")
        const testProject2 = createProject("test2", "20 - 4- 2222", "urgent", "obamamama")
        const testProject3 = createProject("test2", "20 -4- 2222", "urgent", "obamamama")
        const testProject5 = createProject("test2", "20 - 4- 2222", "urgent", "obamamama")
        const testProject4 = createProject("test2", "20 - 4- 2222", "urgent", "obamamama")
        const testProject6 = createProject("test2", "20 - 4- 2222", "urgent", "obamamama")
        projectList.push(testProject.plainProject());
        projectList.push(testProject2.plainProject());
        projectList.push(testProject3.plainProject())
        projectList.push(testProject4.plainProject())
        projectList.push(testProject5.plainProject());
        projectList.push(testProject6.plainProject());
        projectList.push(checkEmail.plainProject());
        projectList.push(cleanRoom.plainProject());
        console.log(projectList)
    }
        

    
    else
    {
        console.log("List Found");
        console.log(projectList)
    }
    for (let i =0; i< projectList.length; i++)
    {
        createProjectElement(projectList[i]);
    }

}

function createProject(name,dueDate,priority, description="")
{
    
    function getName()
    {
        return name;
    }
    function getDueDateObject()
    {
        return Date(dueDate);
    }
    function getDueDate()
    {
        return dueDate
    }
    function getDescription()
    {
        return description;
    }
    function getPriority()
    {
        return priority;
    }
    //have to change to plain project for localStorage
    function plainProject()
    {
        return {name,dueDate,description,priority}
    }
    // const dateString = `${getdueDate().getDate()}-${dueDate().getMonth()}-${dueDate().getFullYear()}`

    return {getDueDate,getName,getDescription, getPriority, plainProject};
}

function createProjectElement(project)
{
    let projectDisplay = document.querySelector(".project-display");
    let displayTab;
    console.log(project.priority)
    if (project.priority == "urgent")
    {
        displayTab = document.querySelector(".urgent")
    }
    else if (project.priority == "non-urgent")
    {
        displayTab = document.querySelector(".non-urgent")
    }
    else if (!project.priority)
    {
        console.log("objects are empty")
        return;
    }
    let newProjectTab = document.createElement("div");
    newProjectTab.classList.add("project");

    let projectTop = document.createElement("div");
    projectTop.classList.add("project-top");

    let projectName = document.createElement("div")
    projectName.classList.add("project-name")
    projectName.textContent = project.name;

    let projectDueDate = document.createElement("div");
    projectDueDate.classList.add("project-dueDate");  
    let dateString = project.dueDate
    projectDueDate.textContent =  dateString;

    let projectDesc = document.createElement("div")
    projectDesc.classList.add("project-description");
    projectDesc.textContent = project.description

    projectTop.appendChild(projectName)
    projectTop.appendChild(projectDueDate)

    newProjectTab.appendChild(projectTop);
    newProjectTab.appendChild(projectDesc)
    displayTab.appendChild(newProjectTab);



}

function addResetButton()
{
    let resetButton = document.querySelector("#resetter");
    resetButton.addEventListener("click", function()
    {
        for (let i =0; i<localStorage.length;i++)
        {
            const key = localStorage.key(i)
            localStorage.removeItem(key);

        }
        console.log("cleared local storage")
    })
}

function messageReceiver(e)
{
    newProject = e.data;
    console.log(newProject)
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./src/addproject.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _storageutils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storageutils */ "./src/storageutils.js");



document.addEventListener("DOMContentLoaded", function()
{
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.addResetButton)();
    // let projectList = getProjectList();
    // if (projectList == null)
    // {
    //     projectList = []
    // }
    let projectForm = document.querySelector("#addprojectform");
    projectForm.addEventListener("submit",function(event){
        event.preventDefault()
        //for project name
        let projectName = document.querySelector("input[name='project-name']").value
        
        let projectDate = document.querySelector("input[name='project-date']").value;
        let projectPriority = document.querySelector("input[name='priority']").value;
        let projectDesc = document.querySelector("textarea[name='project-description']").value;
        console.log(projectDate,projectName,projectPriority,projectDesc);
        
        let newProject = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createProject)(projectName,projectDate,projectPriority,projectDesc).plainProject()


        // projectList.push(newProject.plainProject());
        // console.log("new project:")
        // console.log(newProject.getName());
        // console.log("new List")
        // console.log(projectList)
        // setProjectList(projectList);



        //opens new window of index.html
        let indexWindow = open("index.html", '_blank');
        //postmessage(message,target origin)
        //targetorigin is the url that message is sent to "*" will match any url
        indexWindow.addEventListener("load",function()
        {
            indexWindow.postMessage(newProject,"*");
            console.log('message sent')
        })
       

    })

   

    

})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBb0I7QUFDbUM7QUFDUTtBQUMvRDtBQUNBO0FBQ0EsSUFBSSxzREFBYztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixxREFBYTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdG9yYWdldXRpbHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvYWRkcHJvamVjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKntcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3JkZXI6MDtcclxuICAgIFxyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuOnJvb3R7XHJcbiAgICAtLWxvdy1jb2xvcjojMTU4MDNkO1xyXG4gICAgLS1oaWdoLWNvbG9yOiM5OTFiMWI7XHJcbiAgICAtLWJhY2tncm91bmQtY29sb3I6IzU4MWM4NztcclxuICAgIC0tY29udHJvbC1wYW5lbC1jb2xvcjojOTMzM2VhO1xyXG4gICAgLS1lbGVtZW50LWNvbG9yOiNhODU1Zjc7XHJcbn1cclxuYm9keXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xyXG59XHJcbi5jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgNWZyLzFmcjtcclxuICAgIG1pbi1oZWlnaHQ6MTAwdmg7XHJcblxyXG59XHJcbi5jb250cm9sLXBhbmVse1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBcclxufVxyXG4ucHJvamVjdC1kaXNwbGF5e1xyXG4gICAgZGlzcGxheTpncmlkO1xyXG4gICAgXHJcbiAgICBncmlkLXRlbXBsYXRlOiAyZnIgMWZyLzFmcjtcclxuICAgIFxyXG4gIFxyXG5cclxufVxyXG4ucHJvamVjdC1kaXNwbGF5Pi51cmdlbnR7XHJcbiAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaWdoLWNvbG9yKTtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoMiwgbWlubWF4KDMwdncsNTUlKSk7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6cmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDE1dmgsNTAlKSk7XHJcbiAgICBtaW4td2lkdGg6MTAwJTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6IDQwdmg7XHJcbiAgICBvdmVyZmxvdy14OmhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6c2Nyb2xsO1xyXG4gICBcclxuICAgXHJcbiAgICBcclxufVxyXG4ucHJvamVjdC1kaXNwbGF5IC5ub24tdXJnZW50e1xyXG4gICAgZGlzcGxheTpncmlkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbG93LWNvbG9yKTtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoMiwgbWlubWF4KDMwdncsNTUlKSk7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6cmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDE1dmgsNTAlKSk7XHJcbiAgICBtaW4td2lkdGg6MTAwJTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6IDMwdmg7XHJcbiAgICBvdmVyZmxvdy14OmhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6c2Nyb2xsO1xyXG4gIFxyXG5cclxufVxyXG4ucHJvamVjdHtcclxuICAgIG1hcmdpbjoycHg7XHJcbiAgICBib3JkZXI6MnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDoxNXZoO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlOjFmciAzZnIvMWZyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNSU7O1xyXG4gICAgXHJcbn1cclxuLnByb2plY3QtdG9we1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcbi5wcm9qZWN0LXRvcD4ucHJvamVjdC1uYW1le1xyXG4gICAgZmxleDoxO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4ucHJvamVjdC10b3A+LnByb2plY3QtZHVlRGF0ZXtcclxuICAgIHRleHQtYWxpZ246cmlnaHQ7XHJcbn1cclxuLnByb2plY3Q+LnByb2plY3QtZGVzY3JpcHRpb257XHJcbiAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbn1cclxuXHJcbmZvcm17XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYm9yZGVyOjJweCBzb2xpZCByZWQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIFxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5mb3JtIC5mb3JtLWlucHV0e1xyXG4gICAgYm9yZGVyOjJweCBzb2xpZCByZWQ7XHJcbiAgICBtYXJnaW46MTVweDtcclxuICAgIGZsZXg6MTtcclxuICAgIFxyXG59XHJcbi5mb3JtLWlucHV0PmlucHV0e1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbn1cclxudGV4dGFyZWF7XHJcbiAgICBjb2xvcjpibGFjaztcclxufVxyXG5mb3JtIGJ1dHRvbntcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXIgICAgO1xyXG59XHJcblxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULFFBQVE7O0lBRVIsV0FBVztBQUNmO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLDBCQUEwQjtJQUMxQiw2QkFBNkI7SUFDN0IsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSx5Q0FBeUM7QUFDN0M7QUFDQTtJQUNJLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsZ0JBQWdCOztBQUVwQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1Qjs7QUFFM0I7QUFDQTtJQUNJLFlBQVk7O0lBRVosMEJBQTBCOzs7O0FBSTlCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osbUNBQW1DO0lBQ25DLGlEQUFpRDtJQUNqRCxzREFBc0Q7SUFDdEQsY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjs7OztBQUlyQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGtDQUFrQztJQUNsQyxpREFBaUQ7SUFDakQsc0RBQXNEO0lBQ3RELGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixpQkFBaUI7OztBQUdyQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsZUFBZTtJQUNmLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsaUJBQWlCOztBQUVyQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTtJQUNJLE1BQU07SUFDTixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQix1QkFBdUI7O0lBRXZCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxNQUFNOztBQUVWO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztJQUNYLHdCQUF3QjtBQUM1QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGJvcmRlcjowO1xcclxcbiAgICBcXHJcXG4gICAgY29sb3I6d2hpdGU7XFxyXFxufVxcclxcbjpyb290e1xcclxcbiAgICAtLWxvdy1jb2xvcjojMTU4MDNkO1xcclxcbiAgICAtLWhpZ2gtY29sb3I6Izk5MWIxYjtcXHJcXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiM1ODFjODc7XFxyXFxuICAgIC0tY29udHJvbC1wYW5lbC1jb2xvcjojOTMzM2VhO1xcclxcbiAgICAtLWVsZW1lbnQtY29sb3I6I2E4NTVmNztcXHJcXG59XFxyXFxuYm9keXtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxyXFxufVxcclxcbi5jb250YWluZXJ7XFxyXFxuICAgIGRpc3BsYXk6Z3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIDVmci8xZnI7XFxyXFxuICAgIG1pbi1oZWlnaHQ6MTAwdmg7XFxyXFxuXFxyXFxufVxcclxcbi5jb250cm9sLXBhbmVse1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBcXHJcXG59XFxyXFxuLnByb2plY3QtZGlzcGxheXtcXHJcXG4gICAgZGlzcGxheTpncmlkO1xcclxcbiAgICBcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMmZyIDFmci8xZnI7XFxyXFxuICAgIFxcclxcbiAgXFxyXFxuXFxyXFxufVxcclxcbi5wcm9qZWN0LWRpc3BsYXk+LnVyZ2VudHtcXHJcXG4gICAgZGlzcGxheTpncmlkO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaWdoLWNvbG9yKTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdCgyLCBtaW5tYXgoMzB2dyw1NSUpKTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOnJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxNXZoLDUwJSkpO1xcclxcbiAgICBtaW4td2lkdGg6MTAwJTtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXgtaGVpZ2h0OiA0MHZoO1xcclxcbiAgICBvdmVyZmxvdy14OmhpZGRlbjtcXHJcXG4gICAgb3ZlcmZsb3cteTpzY3JvbGw7XFxyXFxuICAgXFxyXFxuICAgXFxyXFxuICAgIFxcclxcbn1cXHJcXG4ucHJvamVjdC1kaXNwbGF5IC5ub24tdXJnZW50e1xcclxcbiAgICBkaXNwbGF5OmdyaWQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxvdy1jb2xvcik7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoMiwgbWlubWF4KDMwdncsNTUlKSk7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czpyZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTV2aCw1MCUpKTtcXHJcXG4gICAgbWluLXdpZHRoOjEwMCU7XFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gICAgbWF4LWhlaWdodDogMzB2aDtcXHJcXG4gICAgb3ZlcmZsb3cteDpoaWRkZW47XFxyXFxuICAgIG92ZXJmbG93LXk6c2Nyb2xsO1xcclxcbiAgXFxyXFxuXFxyXFxufVxcclxcbi5wcm9qZWN0e1xcclxcbiAgICBtYXJnaW46MnB4O1xcclxcbiAgICBib3JkZXI6MnB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICBtaW4td2lkdGg6IDEwMCU7XFxyXFxuICAgIG1pbi1oZWlnaHQ6MTV2aDtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgICBkaXNwbGF5OmdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6MWZyIDNmci8xZnI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUlOztcXHJcXG4gICAgXFxyXFxufVxcclxcbi5wcm9qZWN0LXRvcHtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcbi5wcm9qZWN0LXRvcD4ucHJvamVjdC1uYW1le1xcclxcbiAgICBmbGV4OjE7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcbi5wcm9qZWN0LXRvcD4ucHJvamVjdC1kdWVEYXRle1xcclxcbiAgICB0ZXh0LWFsaWduOnJpZ2h0O1xcclxcbn1cXHJcXG4ucHJvamVjdD4ucHJvamVjdC1kZXNjcmlwdGlvbntcXHJcXG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xcclxcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBib3JkZXI6bm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybXtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBib3JkZXI6MnB4IHNvbGlkIHJlZDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIFxcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5mb3JtIC5mb3JtLWlucHV0e1xcclxcbiAgICBib3JkZXI6MnB4IHNvbGlkIHJlZDtcXHJcXG4gICAgbWFyZ2luOjE1cHg7XFxyXFxuICAgIGZsZXg6MTtcXHJcXG4gICAgXFxyXFxufVxcclxcbi5mb3JtLWlucHV0PmlucHV0e1xcclxcbiAgICBjb2xvcjpibGFjaztcXHJcXG59XFxyXFxudGV4dGFyZWF7XFxyXFxuICAgIGNvbG9yOmJsYWNrO1xcclxcbn1cXHJcXG5mb3JtIGJ1dHRvbntcXHJcXG4gICAgY29sb3I6YmxhY2s7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyICAgIDtcXHJcXG59XFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vcmV0cmlldmVzIHByb2plY3QgbGlzdCBhbmQgcmV0dXJucyBpZiBleGlzdHMsIGVsc2UgcmV0dXJuIG51bGxcclxuZXhwb3J0IHtnZXRQcm9qZWN0TGlzdCxzZXRQcm9qZWN0TGlzdH1cclxuZnVuY3Rpb24gZ2V0UHJvamVjdExpc3QoKVxyXG57XHJcbiAgICBsZXQgcHJvamVjdExpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdExpc3RcIikpXHJcbiAgICAvL3JldHVybiBwcm9qZWN0TGlzdCBpZiBleGlzdCBlbHNlIG51bGwgaWYgaW52YWxpZFxyXG4gICAgaWYgKHByb2plY3RMaXN0ICYmIHByb2plY3RMaXN0Lmxlbmd0aCAhPSAwKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTGlzdCBmb3VuZFwiKVxyXG4gICAgICAgIHJldHVybiBwcm9qZWN0TGlzdDtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImxpc3Qgbm90IGZvdW5kXCIpXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFByb2plY3RMaXN0KGxpc3QpXHJcbntcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdExpc3RcIiwgSlNPTi5zdHJpbmdpZnkobGlzdCkpO1xyXG4gICAgY29uc29sZS5sb2coXCJsaXN0IHNldFwiKVxyXG59IiwiaW1wb3J0IHsgY29tcGFyZUFzYywgY29tcGFyZURlc2MsIGFkZERheXMsc3ViRGF5cyB9IGZyb20gXCJkYXRlLWZuc1wiIFxyXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiXHJcbmV4cG9ydCB7IG1lc3NhZ2VSZWNlaXZlcixjcmVhdGVQcm9qZWN0LGluZGV4SW5pdCxjcmVhdGVQcm9qZWN0RWxlbWVudCxhZGRSZXNldEJ1dHRvbixzZXRQcm9qZWN0TGlzdCxnZXRQcm9qZWN0TGlzdCB9XHJcbmltcG9ydCB7IGdldFByb2plY3RMaXN0LHNldFByb2plY3RMaXN0IH0gZnJvbSBcIi4vc3RvcmFnZXV0aWxzXCJcclxuZnVuY3Rpb24gaW5kZXhJbml0KClcclxue1xyXG4gICAgbGV0IHByb2plY3RMaXN0ID0gZ2V0UHJvamVjdExpc3QoKVxyXG4gICAgaWYgKHByb2plY3RMaXN0ID09IG51bGwpXHJcbiAgICB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJvamVjdExpc3QgPSBbXVxyXG4gICAgICAgIGNvbnN0IGNsZWFuUm9vbSA9IGNyZWF0ZVByb2plY3QoXCJjbGVhbiByb29tXCIsXCIyMDIzLTctMVwiLFwibm9uLXVyZ2VudFwiLFwiY2xlYW4gbXkgZGFtbiByb29tXCIpO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrRW1haWwgPSBjcmVhdGVQcm9qZWN0KFwiY2hlY2sgZW1haWxcIiwgXCIyMDIzLTYtMjBcIixcInVyZ2VudFwiLFwiY2hlY2sgYWxsIGVtYWlsc1wiKTtcclxuICAgICAgICBjb25zdCB0ZXN0UHJvamVjdCA9IGNyZWF0ZVByb2plY3QoXCJ0ZXN0XCIsIFwiMjMtNC0yMjIyXCIsIFwidXJnZW50XCIsIFwiTE9MT0xPTFwiKVxyXG4gICAgICAgIGNvbnN0IHRlc3RQcm9qZWN0MiA9IGNyZWF0ZVByb2plY3QoXCJ0ZXN0MlwiLCBcIjIwIC0gNC0gMjIyMlwiLCBcInVyZ2VudFwiLCBcIm9iYW1hbWFtYVwiKVxyXG4gICAgICAgIGNvbnN0IHRlc3RQcm9qZWN0MyA9IGNyZWF0ZVByb2plY3QoXCJ0ZXN0MlwiLCBcIjIwIC00LSAyMjIyXCIsIFwidXJnZW50XCIsIFwib2JhbWFtYW1hXCIpXHJcbiAgICAgICAgY29uc3QgdGVzdFByb2plY3Q1ID0gY3JlYXRlUHJvamVjdChcInRlc3QyXCIsIFwiMjAgLSA0LSAyMjIyXCIsIFwidXJnZW50XCIsIFwib2JhbWFtYW1hXCIpXHJcbiAgICAgICAgY29uc3QgdGVzdFByb2plY3Q0ID0gY3JlYXRlUHJvamVjdChcInRlc3QyXCIsIFwiMjAgLSA0LSAyMjIyXCIsIFwidXJnZW50XCIsIFwib2JhbWFtYW1hXCIpXHJcbiAgICAgICAgY29uc3QgdGVzdFByb2plY3Q2ID0gY3JlYXRlUHJvamVjdChcInRlc3QyXCIsIFwiMjAgLSA0LSAyMjIyXCIsIFwidXJnZW50XCIsIFwib2JhbWFtYW1hXCIpXHJcbiAgICAgICAgcHJvamVjdExpc3QucHVzaCh0ZXN0UHJvamVjdC5wbGFpblByb2plY3QoKSk7XHJcbiAgICAgICAgcHJvamVjdExpc3QucHVzaCh0ZXN0UHJvamVjdDIucGxhaW5Qcm9qZWN0KCkpO1xyXG4gICAgICAgIHByb2plY3RMaXN0LnB1c2godGVzdFByb2plY3QzLnBsYWluUHJvamVjdCgpKVxyXG4gICAgICAgIHByb2plY3RMaXN0LnB1c2godGVzdFByb2plY3Q0LnBsYWluUHJvamVjdCgpKVxyXG4gICAgICAgIHByb2plY3RMaXN0LnB1c2godGVzdFByb2plY3Q1LnBsYWluUHJvamVjdCgpKTtcclxuICAgICAgICBwcm9qZWN0TGlzdC5wdXNoKHRlc3RQcm9qZWN0Ni5wbGFpblByb2plY3QoKSk7XHJcbiAgICAgICAgcHJvamVjdExpc3QucHVzaChjaGVja0VtYWlsLnBsYWluUHJvamVjdCgpKTtcclxuICAgICAgICBwcm9qZWN0TGlzdC5wdXNoKGNsZWFuUm9vbS5wbGFpblByb2plY3QoKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdExpc3QpXHJcbiAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgXHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJMaXN0IEZvdW5kXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RMaXN0KVxyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaSA9MDsgaTwgcHJvamVjdExpc3QubGVuZ3RoOyBpKyspXHJcbiAgICB7XHJcbiAgICAgICAgY3JlYXRlUHJvamVjdEVsZW1lbnQocHJvamVjdExpc3RbaV0pO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdChuYW1lLGR1ZURhdGUscHJpb3JpdHksIGRlc2NyaXB0aW9uPVwiXCIpXHJcbntcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gZ2V0TmFtZSgpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIG5hbWU7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXREdWVEYXRlT2JqZWN0KClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gRGF0ZShkdWVEYXRlKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldER1ZURhdGUoKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBkdWVEYXRlXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXREZXNjcmlwdGlvbigpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIGRlc2NyaXB0aW9uO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0UHJpb3JpdHkoKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBwcmlvcml0eTtcclxuICAgIH1cclxuICAgIC8vaGF2ZSB0byBjaGFuZ2UgdG8gcGxhaW4gcHJvamVjdCBmb3IgbG9jYWxTdG9yYWdlXHJcbiAgICBmdW5jdGlvbiBwbGFpblByb2plY3QoKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB7bmFtZSxkdWVEYXRlLGRlc2NyaXB0aW9uLHByaW9yaXR5fVxyXG4gICAgfVxyXG4gICAgLy8gY29uc3QgZGF0ZVN0cmluZyA9IGAke2dldGR1ZURhdGUoKS5nZXREYXRlKCl9LSR7ZHVlRGF0ZSgpLmdldE1vbnRoKCl9LSR7ZHVlRGF0ZSgpLmdldEZ1bGxZZWFyKCl9YFxyXG5cclxuICAgIHJldHVybiB7Z2V0RHVlRGF0ZSxnZXROYW1lLGdldERlc2NyaXB0aW9uLCBnZXRQcmlvcml0eSwgcGxhaW5Qcm9qZWN0fTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdEVsZW1lbnQocHJvamVjdClcclxue1xyXG4gICAgbGV0IHByb2plY3REaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWRpc3BsYXlcIik7XHJcbiAgICBsZXQgZGlzcGxheVRhYjtcclxuICAgIGNvbnNvbGUubG9nKHByb2plY3QucHJpb3JpdHkpXHJcbiAgICBpZiAocHJvamVjdC5wcmlvcml0eSA9PSBcInVyZ2VudFwiKVxyXG4gICAge1xyXG4gICAgICAgIGRpc3BsYXlUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVyZ2VudFwiKVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocHJvamVjdC5wcmlvcml0eSA9PSBcIm5vbi11cmdlbnRcIilcclxuICAgIHtcclxuICAgICAgICBkaXNwbGF5VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ub24tdXJnZW50XCIpXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICghcHJvamVjdC5wcmlvcml0eSlcclxuICAgIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm9iamVjdHMgYXJlIGVtcHR5XCIpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IG5ld1Byb2plY3RUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbmV3UHJvamVjdFRhYi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcclxuXHJcbiAgICBsZXQgcHJvamVjdFRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBwcm9qZWN0VG9wLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXRvcFwiKTtcclxuXHJcbiAgICBsZXQgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1uYW1lXCIpXHJcbiAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcclxuXHJcbiAgICBsZXQgcHJvamVjdER1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcHJvamVjdER1ZURhdGUuY2xhc3NMaXN0LmFkZChcInByb2plY3QtZHVlRGF0ZVwiKTsgIFxyXG4gICAgbGV0IGRhdGVTdHJpbmcgPSBwcm9qZWN0LmR1ZURhdGVcclxuICAgIHByb2plY3REdWVEYXRlLnRleHRDb250ZW50ID0gIGRhdGVTdHJpbmc7XHJcblxyXG4gICAgbGV0IHByb2plY3REZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgcHJvamVjdERlc2MuY2xhc3NMaXN0LmFkZChcInByb2plY3QtZGVzY3JpcHRpb25cIik7XHJcbiAgICBwcm9qZWN0RGVzYy50ZXh0Q29udGVudCA9IHByb2plY3QuZGVzY3JpcHRpb25cclxuXHJcbiAgICBwcm9qZWN0VG9wLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKVxyXG4gICAgcHJvamVjdFRvcC5hcHBlbmRDaGlsZChwcm9qZWN0RHVlRGF0ZSlcclxuXHJcbiAgICBuZXdQcm9qZWN0VGFiLmFwcGVuZENoaWxkKHByb2plY3RUb3ApO1xyXG4gICAgbmV3UHJvamVjdFRhYi5hcHBlbmRDaGlsZChwcm9qZWN0RGVzYylcclxuICAgIGRpc3BsYXlUYWIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdFRhYik7XHJcblxyXG5cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFJlc2V0QnV0dG9uKClcclxue1xyXG4gICAgbGV0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZXNldHRlclwiKTtcclxuICAgIHJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpXHJcbiAgICB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9MDsgaTxsb2NhbFN0b3JhZ2UubGVuZ3RoO2krKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGxvY2FsU3RvcmFnZS5rZXkoaSlcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2xlYXJlZCBsb2NhbCBzdG9yYWdlXCIpXHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBtZXNzYWdlUmVjZWl2ZXIoZSlcclxue1xyXG4gICAgbmV3UHJvamVjdCA9IGUuZGF0YTtcclxuICAgIGNvbnNvbGUubG9nKG5ld1Byb2plY3QpXHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiXHJcbmltcG9ydCB7IGNyZWF0ZVByb2plY3QsYWRkUmVzZXRCdXR0b24gfSBmcm9tIFwiLi91dGlsc1wiO1xyXG5pbXBvcnQgeyBzZXRQcm9qZWN0TGlzdCxnZXRQcm9qZWN0TGlzdCB9IGZyb20gXCIuL3N0b3JhZ2V1dGlsc1wiO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpXHJcbntcclxuICAgIGFkZFJlc2V0QnV0dG9uKCk7XHJcbiAgICAvLyBsZXQgcHJvamVjdExpc3QgPSBnZXRQcm9qZWN0TGlzdCgpO1xyXG4gICAgLy8gaWYgKHByb2plY3RMaXN0ID09IG51bGwpXHJcbiAgICAvLyB7XHJcbiAgICAvLyAgICAgcHJvamVjdExpc3QgPSBbXVxyXG4gICAgLy8gfVxyXG4gICAgbGV0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRwcm9qZWN0Zm9ybVwiKTtcclxuICAgIHByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIixmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIC8vZm9yIHByb2plY3QgbmFtZVxyXG4gICAgICAgIGxldCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPSdwcm9qZWN0LW5hbWUnXVwiKS52YWx1ZVxyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBwcm9qZWN0RGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPSdwcm9qZWN0LWRhdGUnXVwiKS52YWx1ZTtcclxuICAgICAgICBsZXQgcHJvamVjdFByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9J3ByaW9yaXR5J11cIikudmFsdWU7XHJcbiAgICAgICAgbGV0IHByb2plY3REZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInRleHRhcmVhW25hbWU9J3Byb2plY3QtZGVzY3JpcHRpb24nXVwiKS52YWx1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0RGF0ZSxwcm9qZWN0TmFtZSxwcm9qZWN0UHJpb3JpdHkscHJvamVjdERlc2MpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBuZXdQcm9qZWN0ID0gY3JlYXRlUHJvamVjdChwcm9qZWN0TmFtZSxwcm9qZWN0RGF0ZSxwcm9qZWN0UHJpb3JpdHkscHJvamVjdERlc2MpLnBsYWluUHJvamVjdCgpXHJcblxyXG5cclxuICAgICAgICAvLyBwcm9qZWN0TGlzdC5wdXNoKG5ld1Byb2plY3QucGxhaW5Qcm9qZWN0KCkpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibmV3IHByb2plY3Q6XCIpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cobmV3UHJvamVjdC5nZXROYW1lKCkpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibmV3IExpc3RcIilcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0TGlzdClcclxuICAgICAgICAvLyBzZXRQcm9qZWN0TGlzdChwcm9qZWN0TGlzdCk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgLy9vcGVucyBuZXcgd2luZG93IG9mIGluZGV4Lmh0bWxcclxuICAgICAgICBsZXQgaW5kZXhXaW5kb3cgPSBvcGVuKFwiaW5kZXguaHRtbFwiLCAnX2JsYW5rJyk7XHJcbiAgICAgICAgLy9wb3N0bWVzc2FnZShtZXNzYWdlLHRhcmdldCBvcmlnaW4pXHJcbiAgICAgICAgLy90YXJnZXRvcmlnaW4gaXMgdGhlIHVybCB0aGF0IG1lc3NhZ2UgaXMgc2VudCB0byBcIipcIiB3aWxsIG1hdGNoIGFueSB1cmxcclxuICAgICAgICBpbmRleFdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLGZ1bmN0aW9uKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGluZGV4V2luZG93LnBvc3RNZXNzYWdlKG5ld1Byb2plY3QsXCIqXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbWVzc2FnZSBzZW50JylcclxuICAgICAgICB9KVxyXG4gICAgICAgXHJcblxyXG4gICAgfSlcclxuXHJcbiAgIFxyXG5cclxuICAgIFxyXG5cclxufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=