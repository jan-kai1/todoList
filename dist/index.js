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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProject: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_1__.createProject)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
// use lo
 




;(0,_utils__WEBPACK_IMPORTED_MODULE_1__.addResetButton)();
(0,_utils__WEBPACK_IMPORTED_MODULE_1__.indexInit)();

document.addEventListener("DOMContentLoaded", function()
{
    window.addEventListener("message", function(e)
    {
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.messageReceiver)(e);
    })

})
//sort the projectList
// projectList.sort(compareDesc)


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNtRTtBQUMvQztBQUMrRDtBQUMzRDtBQUN4QjtBQUNBLHVEQUFjO0FBQ2QsaURBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1REFBZTtBQUN2QixLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3RvcmFnZXV0aWxzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqe1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJvcmRlcjowO1xyXG4gICAgXHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufVxyXG46cm9vdHtcclxuICAgIC0tbG93LWNvbG9yOiMxNTgwM2Q7XHJcbiAgICAtLWhpZ2gtY29sb3I6Izk5MWIxYjtcclxuICAgIC0tYmFja2dyb3VuZC1jb2xvcjojNTgxYzg3O1xyXG4gICAgLS1jb250cm9sLXBhbmVsLWNvbG9yOiM5MzMzZWE7XHJcbiAgICAtLWVsZW1lbnQtY29sb3I6I2E4NTVmNztcclxufVxyXG5ib2R5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XHJcbn1cclxuLmNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciA1ZnIvMWZyO1xyXG4gICAgbWluLWhlaWdodDoxMDB2aDtcclxuXHJcbn1cclxuLmNvbnRyb2wtcGFuZWx7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIFxyXG59XHJcbi5wcm9qZWN0LWRpc3BsYXl7XHJcbiAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICBcclxuICAgIGdyaWQtdGVtcGxhdGU6IDJmciAxZnIvMWZyO1xyXG4gICAgXHJcbiAgXHJcblxyXG59XHJcbi5wcm9qZWN0LWRpc3BsYXk+LnVyZ2VudHtcclxuICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpZ2gtY29sb3IpO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdCgyLCBtaW5tYXgoMzB2dyw1NSUpKTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czpyZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTV2aCw1MCUpKTtcclxuICAgIG1pbi13aWR0aDoxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogNDB2aDtcclxuICAgIG92ZXJmbG93LXg6aGlkZGVuO1xyXG4gICAgb3ZlcmZsb3cteTpzY3JvbGw7XHJcbiAgIFxyXG4gICBcclxuICAgIFxyXG59XHJcbi5wcm9qZWN0LWRpc3BsYXkgLm5vbi11cmdlbnR7XHJcbiAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sb3ctY29sb3IpO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdCgyLCBtaW5tYXgoMzB2dyw1NSUpKTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czpyZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTV2aCw1MCUpKTtcclxuICAgIG1pbi13aWR0aDoxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogMzB2aDtcclxuICAgIG92ZXJmbG93LXg6aGlkZGVuO1xyXG4gICAgb3ZlcmZsb3cteTpzY3JvbGw7XHJcbiAgXHJcblxyXG59XHJcbi5wcm9qZWN0e1xyXG4gICAgbWFyZ2luOjJweDtcclxuICAgIGJvcmRlcjoycHggc29saWQgd2hpdGU7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OjE1dmg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGU6MWZyIDNmci8xZnI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1JTs7XHJcbiAgICBcclxufVxyXG4ucHJvamVjdC10b3B7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLnByb2plY3QtdG9wPi5wcm9qZWN0LW5hbWV7XHJcbiAgICBmbGV4OjE7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5wcm9qZWN0LXRvcD4ucHJvamVjdC1kdWVEYXRle1xyXG4gICAgdGV4dC1hbGlnbjpyaWdodDtcclxufVxyXG4ucHJvamVjdD4ucHJvamVjdC1kZXNjcmlwdGlvbntcclxuICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXI6bm9uZTtcclxufVxyXG5cclxuZm9ybXtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBib3JkZXI6MnB4IHNvbGlkIHJlZDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbmZvcm0gLmZvcm0taW5wdXR7XHJcbiAgICBib3JkZXI6MnB4IHNvbGlkIHJlZDtcclxuICAgIG1hcmdpbjoxNXB4O1xyXG4gICAgZmxleDoxO1xyXG4gICAgXHJcbn1cclxuLmZvcm0taW5wdXQ+aW5wdXR7XHJcbiAgICBjb2xvcjpibGFjaztcclxufVxyXG50ZXh0YXJlYXtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG59XHJcbmZvcm0gYnV0dG9ue1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlciAgICA7XHJcbn1cclxuXHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsUUFBUTs7SUFFUixXQUFXO0FBQ2Y7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsMEJBQTBCO0lBQzFCLDZCQUE2QjtJQUM3Qix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLHlDQUF5QztBQUM3QztBQUNBO0lBQ0ksWUFBWTtJQUNaLDBCQUEwQjtJQUMxQixnQkFBZ0I7O0FBRXBCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osdUJBQXVCOztBQUUzQjtBQUNBO0lBQ0ksWUFBWTs7SUFFWiwwQkFBMEI7Ozs7QUFJOUI7QUFDQTtJQUNJLFlBQVk7SUFDWixtQ0FBbUM7SUFDbkMsaURBQWlEO0lBQ2pELHNEQUFzRDtJQUN0RCxjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsaUJBQWlCOzs7O0FBSXJCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osa0NBQWtDO0lBQ2xDLGlEQUFpRDtJQUNqRCxzREFBc0Q7SUFDdEQsY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjs7O0FBR3JCO0FBQ0E7SUFDSSxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixlQUFlO0lBQ2YsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixpQkFBaUI7O0FBRXJCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUNBO0lBQ0ksTUFBTTtJQUNOLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLHVCQUF1Qjs7SUFFdkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsV0FBVztJQUNYLE1BQU07O0FBRVY7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsd0JBQXdCO0FBQzVCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYm9yZGVyOjA7XFxyXFxuICAgIFxcclxcbiAgICBjb2xvcjp3aGl0ZTtcXHJcXG59XFxyXFxuOnJvb3R7XFxyXFxuICAgIC0tbG93LWNvbG9yOiMxNTgwM2Q7XFxyXFxuICAgIC0taGlnaC1jb2xvcjojOTkxYjFiO1xcclxcbiAgICAtLWJhY2tncm91bmQtY29sb3I6IzU4MWM4NztcXHJcXG4gICAgLS1jb250cm9sLXBhbmVsLWNvbG9yOiM5MzMzZWE7XFxyXFxuICAgIC0tZWxlbWVudC1jb2xvcjojYTg1NWY3O1xcclxcbn1cXHJcXG5ib2R5e1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXHJcXG59XFxyXFxuLmNvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTpncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgNWZyLzFmcjtcXHJcXG4gICAgbWluLWhlaWdodDoxMDB2aDtcXHJcXG5cXHJcXG59XFxyXFxuLmNvbnRyb2wtcGFuZWx7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIFxcclxcbn1cXHJcXG4ucHJvamVjdC1kaXNwbGF5e1xcclxcbiAgICBkaXNwbGF5OmdyaWQ7XFxyXFxuICAgIFxcclxcbiAgICBncmlkLXRlbXBsYXRlOiAyZnIgMWZyLzFmcjtcXHJcXG4gICAgXFxyXFxuICBcXHJcXG5cXHJcXG59XFxyXFxuLnByb2plY3QtZGlzcGxheT4udXJnZW50e1xcclxcbiAgICBkaXNwbGF5OmdyaWQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpZ2gtY29sb3IpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KDIsIG1pbm1heCgzMHZ3LDU1JSkpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6cmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDE1dmgsNTAlKSk7XFxyXFxuICAgIG1pbi13aWR0aDoxMDAlO1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDQwdmg7XFxyXFxuICAgIG92ZXJmbG93LXg6aGlkZGVuO1xcclxcbiAgICBvdmVyZmxvdy15OnNjcm9sbDtcXHJcXG4gICBcXHJcXG4gICBcXHJcXG4gICAgXFxyXFxufVxcclxcbi5wcm9qZWN0LWRpc3BsYXkgLm5vbi11cmdlbnR7XFxyXFxuICAgIGRpc3BsYXk6Z3JpZDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbG93LWNvbG9yKTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdCgyLCBtaW5tYXgoMzB2dyw1NSUpKTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOnJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxNXZoLDUwJSkpO1xcclxcbiAgICBtaW4td2lkdGg6MTAwJTtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXgtaGVpZ2h0OiAzMHZoO1xcclxcbiAgICBvdmVyZmxvdy14OmhpZGRlbjtcXHJcXG4gICAgb3ZlcmZsb3cteTpzY3JvbGw7XFxyXFxuICBcXHJcXG5cXHJcXG59XFxyXFxuLnByb2plY3R7XFxyXFxuICAgIG1hcmdpbjoycHg7XFxyXFxuICAgIGJvcmRlcjoycHggc29saWQgd2hpdGU7XFxyXFxuICAgIG1pbi13aWR0aDogMTAwJTtcXHJcXG4gICAgbWluLWhlaWdodDoxNXZoO1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxuICAgIGRpc3BsYXk6Z3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZToxZnIgM2ZyLzFmcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNSU7O1xcclxcbiAgICBcXHJcXG59XFxyXFxuLnByb2plY3QtdG9we1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuLnByb2plY3QtdG9wPi5wcm9qZWN0LW5hbWV7XFxyXFxuICAgIGZsZXg6MTtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuLnByb2plY3QtdG9wPi5wcm9qZWN0LWR1ZURhdGV7XFxyXFxuICAgIHRleHQtYWxpZ246cmlnaHQ7XFxyXFxufVxcclxcbi5wcm9qZWN0Pi5wcm9qZWN0LWRlc2NyaXB0aW9ue1xcclxcbiAgICBvdmVyZmxvdzpoaWRkZW47XFxyXFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJvcmRlcjpub25lO1xcclxcbn1cXHJcXG5cXHJcXG5mb3Jte1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGJvcmRlcjoycHggc29saWQgcmVkO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgXFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbmZvcm0gLmZvcm0taW5wdXR7XFxyXFxuICAgIGJvcmRlcjoycHggc29saWQgcmVkO1xcclxcbiAgICBtYXJnaW46MTVweDtcXHJcXG4gICAgZmxleDoxO1xcclxcbiAgICBcXHJcXG59XFxyXFxuLmZvcm0taW5wdXQ+aW5wdXR7XFxyXFxuICAgIGNvbG9yOmJsYWNrO1xcclxcbn1cXHJcXG50ZXh0YXJlYXtcXHJcXG4gICAgY29sb3I6YmxhY2s7XFxyXFxufVxcclxcbmZvcm0gYnV0dG9ue1xcclxcbiAgICBjb2xvcjpibGFjaztcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXIgICAgO1xcclxcbn1cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy9yZXRyaWV2ZXMgcHJvamVjdCBsaXN0IGFuZCByZXR1cm5zIGlmIGV4aXN0cywgZWxzZSByZXR1cm4gbnVsbFxyXG5leHBvcnQge2dldFByb2plY3RMaXN0LHNldFByb2plY3RMaXN0fVxyXG5mdW5jdGlvbiBnZXRQcm9qZWN0TGlzdCgpXHJcbntcclxuICAgIGxldCBwcm9qZWN0TGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0TGlzdFwiKSlcclxuICAgIC8vcmV0dXJuIHByb2plY3RMaXN0IGlmIGV4aXN0IGVsc2UgbnVsbCBpZiBpbnZhbGlkXHJcbiAgICBpZiAocHJvamVjdExpc3QgJiYgcHJvamVjdExpc3QubGVuZ3RoICE9IDApXHJcbiAgICB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJMaXN0IGZvdW5kXCIpXHJcbiAgICAgICAgcmV0dXJuIHByb2plY3RMaXN0O1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibGlzdCBub3QgZm91bmRcIilcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2V0UHJvamVjdExpc3QobGlzdClcclxue1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0TGlzdFwiLCBKU09OLnN0cmluZ2lmeShsaXN0KSk7XHJcbiAgICBjb25zb2xlLmxvZyhcImxpc3Qgc2V0XCIpXHJcbn0iLCJpbXBvcnQgeyBjb21wYXJlQXNjLCBjb21wYXJlRGVzYywgYWRkRGF5cyxzdWJEYXlzIH0gZnJvbSBcImRhdGUtZm5zXCIgXHJcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCJcclxuZXhwb3J0IHsgbWVzc2FnZVJlY2VpdmVyLGNyZWF0ZVByb2plY3QsaW5kZXhJbml0LGNyZWF0ZVByb2plY3RFbGVtZW50LGFkZFJlc2V0QnV0dG9uLHNldFByb2plY3RMaXN0LGdldFByb2plY3RMaXN0IH1cclxuaW1wb3J0IHsgZ2V0UHJvamVjdExpc3Qsc2V0UHJvamVjdExpc3QgfSBmcm9tIFwiLi9zdG9yYWdldXRpbHNcIlxyXG5mdW5jdGlvbiBpbmRleEluaXQoKVxyXG57XHJcbiAgICBsZXQgcHJvamVjdExpc3QgPSBnZXRQcm9qZWN0TGlzdCgpXHJcbiAgICBpZiAocHJvamVjdExpc3QgPT0gbnVsbClcclxuICAgIHtcclxuICAgICAgICBcclxuICAgICAgICBwcm9qZWN0TGlzdCA9IFtdXHJcbiAgICAgICAgY29uc3QgY2xlYW5Sb29tID0gY3JlYXRlUHJvamVjdChcImNsZWFuIHJvb21cIixcIjIwMjMtNy0xXCIsXCJub24tdXJnZW50XCIsXCJjbGVhbiBteSBkYW1uIHJvb21cIik7XHJcbiAgICAgICAgY29uc3QgY2hlY2tFbWFpbCA9IGNyZWF0ZVByb2plY3QoXCJjaGVjayBlbWFpbFwiLCBcIjIwMjMtNi0yMFwiLFwidXJnZW50XCIsXCJjaGVjayBhbGwgZW1haWxzXCIpO1xyXG4gICAgICAgIGNvbnN0IHRlc3RQcm9qZWN0ID0gY3JlYXRlUHJvamVjdChcInRlc3RcIiwgXCIyMy00LTIyMjJcIiwgXCJ1cmdlbnRcIiwgXCJMT0xPTE9MXCIpXHJcbiAgICAgICAgY29uc3QgdGVzdFByb2plY3QyID0gY3JlYXRlUHJvamVjdChcInRlc3QyXCIsIFwiMjAgLSA0LSAyMjIyXCIsIFwidXJnZW50XCIsIFwib2JhbWFtYW1hXCIpXHJcbiAgICAgICAgY29uc3QgdGVzdFByb2plY3QzID0gY3JlYXRlUHJvamVjdChcInRlc3QyXCIsIFwiMjAgLTQtIDIyMjJcIiwgXCJ1cmdlbnRcIiwgXCJvYmFtYW1hbWFcIilcclxuICAgICAgICBjb25zdCB0ZXN0UHJvamVjdDUgPSBjcmVhdGVQcm9qZWN0KFwidGVzdDJcIiwgXCIyMCAtIDQtIDIyMjJcIiwgXCJ1cmdlbnRcIiwgXCJvYmFtYW1hbWFcIilcclxuICAgICAgICBjb25zdCB0ZXN0UHJvamVjdDQgPSBjcmVhdGVQcm9qZWN0KFwidGVzdDJcIiwgXCIyMCAtIDQtIDIyMjJcIiwgXCJ1cmdlbnRcIiwgXCJvYmFtYW1hbWFcIilcclxuICAgICAgICBjb25zdCB0ZXN0UHJvamVjdDYgPSBjcmVhdGVQcm9qZWN0KFwidGVzdDJcIiwgXCIyMCAtIDQtIDIyMjJcIiwgXCJ1cmdlbnRcIiwgXCJvYmFtYW1hbWFcIilcclxuICAgICAgICBwcm9qZWN0TGlzdC5wdXNoKHRlc3RQcm9qZWN0LnBsYWluUHJvamVjdCgpKTtcclxuICAgICAgICBwcm9qZWN0TGlzdC5wdXNoKHRlc3RQcm9qZWN0Mi5wbGFpblByb2plY3QoKSk7XHJcbiAgICAgICAgcHJvamVjdExpc3QucHVzaCh0ZXN0UHJvamVjdDMucGxhaW5Qcm9qZWN0KCkpXHJcbiAgICAgICAgcHJvamVjdExpc3QucHVzaCh0ZXN0UHJvamVjdDQucGxhaW5Qcm9qZWN0KCkpXHJcbiAgICAgICAgcHJvamVjdExpc3QucHVzaCh0ZXN0UHJvamVjdDUucGxhaW5Qcm9qZWN0KCkpO1xyXG4gICAgICAgIHByb2plY3RMaXN0LnB1c2godGVzdFByb2plY3Q2LnBsYWluUHJvamVjdCgpKTtcclxuICAgICAgICBwcm9qZWN0TGlzdC5wdXNoKGNoZWNrRW1haWwucGxhaW5Qcm9qZWN0KCkpO1xyXG4gICAgICAgIHByb2plY3RMaXN0LnB1c2goY2xlYW5Sb29tLnBsYWluUHJvamVjdCgpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0TGlzdClcclxuICAgIH1cclxuICAgICAgICBcclxuXHJcbiAgICBcclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkxpc3QgRm91bmRcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdExpc3QpXHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0wOyBpPCBwcm9qZWN0TGlzdC5sZW5ndGg7IGkrKylcclxuICAgIHtcclxuICAgICAgICBjcmVhdGVQcm9qZWN0RWxlbWVudChwcm9qZWN0TGlzdFtpXSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KG5hbWUsZHVlRGF0ZSxwcmlvcml0eSwgZGVzY3JpcHRpb249XCJcIilcclxue1xyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBnZXROYW1lKClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gbmFtZTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldER1ZURhdGVPYmplY3QoKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBEYXRlKGR1ZURhdGUpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0RHVlRGF0ZSgpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIGR1ZURhdGVcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldERlc2NyaXB0aW9uKClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gZGVzY3JpcHRpb247XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRQcmlvcml0eSgpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHByaW9yaXR5O1xyXG4gICAgfVxyXG4gICAgLy9oYXZlIHRvIGNoYW5nZSB0byBwbGFpbiBwcm9qZWN0IGZvciBsb2NhbFN0b3JhZ2VcclxuICAgIGZ1bmN0aW9uIHBsYWluUHJvamVjdCgpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHtuYW1lLGR1ZURhdGUsZGVzY3JpcHRpb24scHJpb3JpdHl9XHJcbiAgICB9XHJcbiAgICAvLyBjb25zdCBkYXRlU3RyaW5nID0gYCR7Z2V0ZHVlRGF0ZSgpLmdldERhdGUoKX0tJHtkdWVEYXRlKCkuZ2V0TW9udGgoKX0tJHtkdWVEYXRlKCkuZ2V0RnVsbFllYXIoKX1gXHJcblxyXG4gICAgcmV0dXJuIHtnZXREdWVEYXRlLGdldE5hbWUsZ2V0RGVzY3JpcHRpb24sIGdldFByaW9yaXR5LCBwbGFpblByb2plY3R9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0RWxlbWVudChwcm9qZWN0KVxyXG57XHJcbiAgICBsZXQgcHJvamVjdERpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtZGlzcGxheVwiKTtcclxuICAgIGxldCBkaXNwbGF5VGFiO1xyXG4gICAgY29uc29sZS5sb2cocHJvamVjdC5wcmlvcml0eSlcclxuICAgIGlmIChwcm9qZWN0LnByaW9yaXR5ID09IFwidXJnZW50XCIpXHJcbiAgICB7XHJcbiAgICAgICAgZGlzcGxheVRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXJnZW50XCIpXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChwcm9qZWN0LnByaW9yaXR5ID09IFwibm9uLXVyZ2VudFwiKVxyXG4gICAge1xyXG4gICAgICAgIGRpc3BsYXlUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5vbi11cmdlbnRcIilcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCFwcm9qZWN0LnByaW9yaXR5KVxyXG4gICAge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwib2JqZWN0cyBhcmUgZW1wdHlcIilcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgbmV3UHJvamVjdFRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBuZXdQcm9qZWN0VGFiLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xyXG5cclxuICAgIGxldCBwcm9qZWN0VG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHByb2plY3RUb3AuY2xhc3NMaXN0LmFkZChcInByb2plY3QtdG9wXCIpO1xyXG5cclxuICAgIGxldCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIHByb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LW5hbWVcIilcclxuICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xyXG5cclxuICAgIGxldCBwcm9qZWN0RHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBwcm9qZWN0RHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1kdWVEYXRlXCIpOyAgXHJcbiAgICBsZXQgZGF0ZVN0cmluZyA9IHByb2plY3QuZHVlRGF0ZVxyXG4gICAgcHJvamVjdER1ZURhdGUudGV4dENvbnRlbnQgPSAgZGF0ZVN0cmluZztcclxuXHJcbiAgICBsZXQgcHJvamVjdERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBwcm9qZWN0RGVzYy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1kZXNjcmlwdGlvblwiKTtcclxuICAgIHByb2plY3REZXNjLnRleHRDb250ZW50ID0gcHJvamVjdC5kZXNjcmlwdGlvblxyXG5cclxuICAgIHByb2plY3RUb3AuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpXHJcbiAgICBwcm9qZWN0VG9wLmFwcGVuZENoaWxkKHByb2plY3REdWVEYXRlKVxyXG5cclxuICAgIG5ld1Byb2plY3RUYWIuYXBwZW5kQ2hpbGQocHJvamVjdFRvcCk7XHJcbiAgICBuZXdQcm9qZWN0VGFiLmFwcGVuZENoaWxkKHByb2plY3REZXNjKVxyXG4gICAgZGlzcGxheVRhYi5hcHBlbmRDaGlsZChuZXdQcm9qZWN0VGFiKTtcclxuXHJcblxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUmVzZXRCdXR0b24oKVxyXG57XHJcbiAgICBsZXQgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jlc2V0dGVyXCIpO1xyXG4gICAgcmVzZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKClcclxuICAgIHtcclxuICAgICAgICBmb3IgKGxldCBpID0wOyBpPGxvY2FsU3RvcmFnZS5sZW5ndGg7aSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3Qga2V5ID0gbG9jYWxTdG9yYWdlLmtleShpKVxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjbGVhcmVkIGxvY2FsIHN0b3JhZ2VcIilcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1lc3NhZ2VSZWNlaXZlcihlKVxyXG57XHJcbiAgICBuZXdQcm9qZWN0ID0gZS5kYXRhO1xyXG4gICAgY29uc29sZS5sb2cobmV3UHJvamVjdClcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vIHVzZSBsb1xyXG5pbXBvcnQgeyBjb21wYXJlQXNjLCBjb21wYXJlRGVzYywgYWRkRGF5cyxzdWJEYXlzIH0gZnJvbSBcImRhdGUtZm5zXCIgXHJcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCJcclxuaW1wb3J0IHsgYWRkUmVzZXRCdXR0b24sIGNyZWF0ZVByb2plY3QsIGluZGV4SW5pdCwgbWVzc2FnZVJlY2VpdmVyIH0gZnJvbSBcIi4vdXRpbHNcIlxyXG5leHBvcnQgeyBjcmVhdGVQcm9qZWN0IH1cclxuXHJcbmFkZFJlc2V0QnV0dG9uKCk7XHJcbmluZGV4SW5pdCgpO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKVxyXG57XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgZnVuY3Rpb24oZSlcclxuICAgIHtcclxuICAgICAgICBtZXNzYWdlUmVjZWl2ZXIoZSk7XHJcbiAgICB9KVxyXG5cclxufSlcclxuLy9zb3J0IHRoZSBwcm9qZWN0TGlzdFxyXG4vLyBwcm9qZWN0TGlzdC5zb3J0KGNvbXBhcmVEZXNjKVxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9