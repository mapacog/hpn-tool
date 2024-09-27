System.register(["jimu-core","jimu-ui","jimu-arcgis","esri/layers/FeatureLayer","esri/smartMapping/renderers/color","esri/smartMapping/symbology/color"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_layers_FeatureLayer__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_smartMapping_renderers_color__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_smartMapping_symbology_color__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_layers_FeatureLayer__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_smartMapping_renderers_color__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_smartMapping_symbology_color__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_layers_FeatureLayer__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_smartMapping_renderers_color__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_smartMapping_symbology_color__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!../../../git/exb_mapa_ss4a/exb_widgets_mapa_ss4a/widgets/scoring_widget/src/runtime/style.css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!../../../git/exb_mapa_ss4a/exb_widgets_mapa_ss4a/widgets/scoring_widget/src/runtime/style.css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _exb_ArcGISExperienceBuilder_client_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../exb/ArcGISExperienceBuilder/client/node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _exb_ArcGISExperienceBuilder_client_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_exb_ArcGISExperienceBuilder_client_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _exb_ArcGISExperienceBuilder_client_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../exb/ArcGISExperienceBuilder/client/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _exb_ArcGISExperienceBuilder_client_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_exb_ArcGISExperienceBuilder_client_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _exb_ArcGISExperienceBuilder_client_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_exb_ArcGISExperienceBuilder_client_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.scoring-widget-container {
  padding: 10px;
  display: flex;
  flex-direction: column;
}

.scoring-widget-content {
  max-width: 600px; /* Adjust after Yousef config is done */
  margin: 0 auto;
  overflow-y: auto; /* Enable vertical scrolling */
  flex-grow: 1;
}

.sum-display {
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 15px;
}

.sum-error {
  color: red;
}

.buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.reset-button,
.apply-button {
  min-width: 100px;
}

/*style for slider and numeric input*/
.slider-container {
  margin-bottom: 15px;
}

.slider-input-container {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.slider {
  width: 100%;
  margin-bottom: 5px;
}

.numeric-input-lock-container {
  display: flex;
  align-items: center;
}

.slider-input {
  width: 80px; /* Adjust as needed */
  margin-right: 5px;
}

.lock-button {
  padding: 4px;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lock-button:hover {
  background-color: #f0f0f0;
}`, "",{"version":3,"sources":["webpack://./../../../git/exb_mapa_ss4a/exb_widgets_mapa_ss4a/widgets/scoring_widget/src/runtime/style.css"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,aAAA;EACA,sBAAA;AACJ;;AAEA;EACI,gBAAA,EAAA,uCAAA;EACA,cAAA;EACA,gBAAA,EAAA,8BAAA;EACA,YAAA;AACJ;;AAEA;EACI,iBAAA;EACA,gBAAA;EACA,mBAAA;AACJ;;AAEA;EACI,UAAA;AACJ;;AAEA;EACI,aAAA;EACA,8BAAA;EACA,gBAAA;AACJ;;AAEA;;EAEI,gBAAA;AACJ;;AAEA,qCAAA;AACA;EACI,mBAAA;AACJ;;AAEA;EACI,aAAA;EACA,sBAAA;EACA,oBAAA;AACJ;;AAEA;EACI,WAAA;EACA,kBAAA;AACJ;;AAEA;EACI,aAAA;EACA,mBAAA;AACJ;;AAEA;EACI,WAAA,EAAA,qBAAA;EACA,iBAAA;AACJ;;AAEA;EACI,YAAA;EACA,gBAAA;EACA,YAAA;EACA,eAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AACJ;;AAEA;EACI,yBAAA;AACJ","sourcesContent":[".scoring-widget-container {\r\n    padding: 10px;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.scoring-widget-content {\r\n    max-width: 600px; /* Adjust after Yousef config is done */\r\n    margin: 0 auto;\r\n    overflow-y: auto; /* Enable vertical scrolling */\r\n    flex-grow: 1;\r\n}\r\n\r\n.sum-display {\r\n    font-weight: bold;\r\n    margin-top: 20px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.sum-error {\r\n    color: red;\r\n}\r\n\r\n.buttons {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-top: 20px;\r\n}\r\n\r\n.reset-button,\r\n.apply-button {\r\n    min-width: 100px;\r\n}\r\n\r\n/*style for slider and numeric input*/\r\n.slider-container {\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.slider-input-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: stretch;\r\n}\r\n\r\n.slider {\r\n    width: 100%;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.numeric-input-lock-container {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.slider-input {\r\n    width: 80px; /* Adjust as needed */\r\n    margin-right: 5px;\r\n}\r\n\r\n.lock-button {\r\n    padding: 4px;\r\n    background: none;\r\n    border: none;\r\n    cursor: pointer;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.lock-button:hover {\r\n    background-color: #f0f0f0;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

/***/ "../../../git/exb_mapa_ss4a/exb_widgets_mapa_ss4a/widgets/scoring_widget/src/runtime/style.css":
/*!*****************************************************************************************************!*\
  !*** ../../../git/exb_mapa_ss4a/exb_widgets_mapa_ss4a/widgets/scoring_widget/src/runtime/style.css ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _exb_ArcGISExperienceBuilder_client_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../exb/ArcGISExperienceBuilder/client/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _exb_ArcGISExperienceBuilder_client_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_exb_ArcGISExperienceBuilder_client_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _exb_ArcGISExperienceBuilder_client_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../../exb/ArcGISExperienceBuilder/client/node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _exb_ArcGISExperienceBuilder_client_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_exb_ArcGISExperienceBuilder_client_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _exb_ArcGISExperienceBuilder_client_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../exb/ArcGISExperienceBuilder/client/node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _exb_ArcGISExperienceBuilder_client_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_exb_ArcGISExperienceBuilder_client_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _exb_ArcGISExperienceBuilder_client_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../exb/ArcGISExperienceBuilder/client/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _exb_ArcGISExperienceBuilder_client_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_exb_ArcGISExperienceBuilder_client_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _exb_ArcGISExperienceBuilder_client_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../../../exb/ArcGISExperienceBuilder/client/node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _exb_ArcGISExperienceBuilder_client_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_exb_ArcGISExperienceBuilder_client_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _exb_ArcGISExperienceBuilder_client_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../../../exb/ArcGISExperienceBuilder/client/node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _exb_ArcGISExperienceBuilder_client_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_exb_ArcGISExperienceBuilder_client_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _exb_ArcGISExperienceBuilder_client_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_exb_ArcGISExperienceBuilder_client_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_exb_ArcGISExperienceBuilder_client_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../../exb/ArcGISExperienceBuilder/client/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!../../../../../../../exb/ArcGISExperienceBuilder/client/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!../../../../../../../exb/ArcGISExperienceBuilder/client/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./style.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!../../../git/exb_mapa_ss4a/exb_widgets_mapa_ss4a/widgets/scoring_widget/src/runtime/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_exb_ArcGISExperienceBuilder_client_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_exb_ArcGISExperienceBuilder_client_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _exb_ArcGISExperienceBuilder_client_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_exb_ArcGISExperienceBuilder_client_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_exb_ArcGISExperienceBuilder_client_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _exb_ArcGISExperienceBuilder_client_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_exb_ArcGISExperienceBuilder_client_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_exb_ArcGISExperienceBuilder_client_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_exb_ArcGISExperienceBuilder_client_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_exb_ArcGISExperienceBuilder_client_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_exb_ArcGISExperienceBuilder_client_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_exb_ArcGISExperienceBuilder_client_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _exb_ArcGISExperienceBuilder_client_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_exb_ArcGISExperienceBuilder_client_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_exb_ArcGISExperienceBuilder_client_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _exb_ArcGISExperienceBuilder_client_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_exb_ArcGISExperienceBuilder_client_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_exb_ArcGISExperienceBuilder_client_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./jimu-icons/svg/outlined/editor/lock.svg":
/*!*************************************************!*\
  !*** ./jimu-icons/svg/outlined/editor/lock.svg ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M7.5 0A3.5 3.5 0 0 1 11 3.5V6h1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1V3.5A3.5 3.5 0 0 1 7.5 0M5 6h5V3.5a2.5 2.5 0 0 0-2.336-2.495L7.5 1a2.5 2.5 0 0 0-2.495 2.336L5 3.5zm6 1H3v8h9V7zm-3.5 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/editor/unlock.svg":
/*!***************************************************!*\
  !*** ./jimu-icons/svg/outlined/editor/unlock.svg ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M16 3.5a3.5 3.5 0 1 0-7 0V6H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-2V3.5l.005-.164A2.5 2.5 0 0 1 12.5 1l.164.005A2.5 2.5 0 0 1 15 3.5a.5.5 0 0 0 1 0M9 7H3v8h9V7h-1zm-1.5 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/outlined/editor/lock.tsx":
/*!*********************************************!*\
  !*** ./jimu-icons/outlined/editor/lock.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LockOutlined: () => (/* binding */ LockOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_editor_lock_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/editor/lock.svg */ "./jimu-icons/svg/outlined/editor/lock.svg");
/* harmony import */ var _svg_outlined_editor_lock_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_editor_lock_svg__WEBPACK_IMPORTED_MODULE_1__);
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};


const LockOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_editor_lock_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-icons/outlined/editor/unlock.tsx":
/*!***********************************************!*\
  !*** ./jimu-icons/outlined/editor/unlock.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UnlockOutlined: () => (/* binding */ UnlockOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_editor_unlock_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/editor/unlock.svg */ "./jimu-icons/svg/outlined/editor/unlock.svg");
/* harmony import */ var _svg_outlined_editor_unlock_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_editor_unlock_svg__WEBPACK_IMPORTED_MODULE_1__);
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};


const UnlockOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_editor_unlock_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "esri/layers/FeatureLayer":
/*!*******************************************!*\
  !*** external "esri/layers/FeatureLayer" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_layers_FeatureLayer__;

/***/ }),

/***/ "esri/smartMapping/renderers/color":
/*!****************************************************!*\
  !*** external "esri/smartMapping/renderers/color" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_smartMapping_renderers_color__;

/***/ }),

/***/ "esri/smartMapping/symbology/color":
/*!****************************************************!*\
  !*** external "esri/smartMapping/symbology/color" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_smartMapping_symbology_color__;

/***/ }),

/***/ "jimu-arcgis":
/*!******************************!*\
  !*** external "jimu-arcgis" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
// eslint-disable-next-line
// @ts-ignore
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************************************************************************************************!*\
  !*** ../../../git/exb_mapa_ss4a/exb_widgets_mapa_ss4a/widgets/scoring_widget/src/runtime/widget.tsx ***!
  \******************************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_icons_outlined_editor_unlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-icons/outlined/editor/unlock */ "./jimu-icons/outlined/editor/unlock.tsx");
/* harmony import */ var jimu_icons_outlined_editor_lock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-icons/outlined/editor/lock */ "./jimu-icons/outlined/editor/lock.tsx");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "../../../git/exb_mapa_ss4a/exb_widgets_mapa_ss4a/widgets/scoring_widget/src/runtime/style.css");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var esri_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! esri/layers/FeatureLayer */ "esri/layers/FeatureLayer");
/* harmony import */ var esri_smartMapping_renderers_color__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! esri/smartMapping/renderers/color */ "esri/smartMapping/renderers/color");
/* harmony import */ var esri_smartMapping_symbology_color__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! esri/smartMapping/symbology/color */ "esri/smartMapping/symbology/color");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

// @ts-ignore









const { useState, useEffect } = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React;
function Widget(props) {
    var _a, _b, _c;
    const [sliderValues, setSliderValues] = useState({});
    const [dataSource, setDataSource] = useState(null);
    const [sumOfWeights, setSumOfWeights] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [records, setRecords] = useState([]);
    const [clientSideLayer, setClientSideLayer] = useState(null);
    const [isExportReady, setIsExportReady] = useState(false);
    const [jimuMapView, setJimuMapView] = useState(null);
    const queryParams = ((_c = (_b = (_a = props.useDataSources) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.fields) === null || _c === void 0 ? void 0 : _c.length) > 0
        ? { outFields: props.useDataSources[0].fields }
        : {};
    // state for field info
    const [fieldInfo, setFieldInfo] = useState([]);
    const [lockedSliders, setLockedSliders] = useState({});
    const [isDataReady, setIsDataReady] = useState(false);
    function getFeatureCount(queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield dataSource.queryCount(queryParams);
            }
            catch (error) {
                console.error('Error getting feature count:', error);
                throw error;
            }
        });
    }
    // TODO user allRecords instead
    function queryAllFeatures(totalCount) {
        return __awaiter(this, void 0, void 0, function* () {
            const pageSize = 2000; // Adjust this value based on your service's capabilities
            console.log(totalCount);
            function recursiveQuery(start, accumulatedFeatures) {
                return __awaiter(this, void 0, void 0, function* () {
                    if (accumulatedFeatures.length >= totalCount) {
                        return accumulatedFeatures;
                    }
                    // console.log(props.useDataSources[0].fields);
                    // add to the query parameters, return geometry
                    const newQueryParams = {
                        outFields: props.useDataSources[0].fields,
                        returnGeometry: true, //need to visualize
                        start: start,
                        num: pageSize
                    };
                    try {
                        const featuresResult = yield dataSource.query(newQueryParams);
                        const currentFeatures = featuresResult.records.map(record => record.feature);
                        const newAccumulatedFeatures = [...accumulatedFeatures, ...currentFeatures];
                        if (featuresResult.records.length === pageSize) {
                            return recursiveQuery(start + pageSize, newAccumulatedFeatures);
                        }
                        else {
                            return newAccumulatedFeatures;
                        }
                    }
                    catch (error) {
                        console.error('Error querying features:', error);
                        throw error;
                    }
                });
            }
            return recursiveQuery(0, []);
        });
    }
    useEffect(() => {
        // Log JMV details when it's set
        if (jimuMapView) {
            console.log('JimuMapView details:', {
                id: jimuMapView.id,
                isActive: jimuMapView.isActive,
                view: jimuMapView.view
            });
        }
    }, [jimuMapView]);
    useEffect(() => {
        if (dataSource) {
            setIsLoading(true);
            setIsDataReady(false);
            getFeatureCount(queryParams).then(totalCount => {
                queryAllFeatures(totalCount).then(features => {
                    setRecords(JSON.stringify(features));
                    setIsDataReady(true);
                    setIsLoading(false);
                }).catch(error => {
                    if (error.name !== 'AbortError') {
                        console.error('Error fetching records:', error);
                        alert('Error fetching records:');
                    }
                    setIsLoading(false);
                });
            }).catch(error => {
                console.error('Error getting feature count:', error);
                setIsLoading(false);
            });
        }
    }, [dataSource]);
    // set field info and initialize slider values when data source is set
    useEffect(() => {
        if (dataSource) {
            const fields = dataSource.getSchema().fields;
            const selectedFields = props.useDataSources[0].fields;
            const newFieldInfo = selectedFields.map(fieldName => {
                const field = fields[fieldName];
                return {
                    name: fieldName,
                    alias: field.alias || fieldName
                };
            });
            setFieldInfo(newFieldInfo);
            initializeSliderValues(newFieldInfo);
        }
    }, [dataSource]);
    const onActiveViewChange = (jmv) => {
        if (jmv) {
            setJimuMapView(jmv);
        }
    };
    // TODO: delete if unused
    const updateJimuMapView = () => {
        if (jimuMapView && jimuMapView.view) {
            // Update the JimuMapView based on slider values
            // This is a placeholder - you'll need to implement the actual update logic
            console.log('Updating JimuMapView with slider values:', sliderValues);
            // Example: Update the view's extent
            // jimuMapView.view.goTo(someNewExtent)
        }
    };
    const isDsConfigured = () => {
        return props.useDataSources &&
            props.useDataSources.length === 1 &&
            props.useDataSources[0].fields &&
            props.useDataSources[0].fields.length > 0;
    };
    // Initialize slider values based on the number of fields. The sum of weights will be 100.
    const initializeSliderValues = (fields) => {
        const initialValues = {};
        const fieldCount = fields.length;
        const baseValue = Math.floor((100 / fieldCount) * 10) / 10; // Round down to 1 decimal place
        let remainingValue = Number((100 - baseValue * fieldCount).toFixed(1));
        fields.forEach((field, index) => {
            if (index === fields.length - 1) {
                // Assign the remaining value to the last field
                initialValues[field.name] = Number((baseValue + remainingValue).toFixed(1));
            }
            else {
                initialValues[field.name] = baseValue;
            }
        });
        setSliderValues(initialValues);
        updateSumOfWeights(initialValues);
    };
    const updateSumOfWeights = (values) => {
        const sum = Object.values(values).reduce((acc, val) => acc + val, 0);
        setSumOfWeights(Number(sum.toFixed(1)));
    };
    const calculateScore = (feature) => {
        let score = 0;
        fieldInfo.forEach(field => {
            score += (feature.attributes[field.name] || 0) * (sliderValues[field.name] / 100);
        });
        return score;
    };
    const toggleLock = (field) => {
        setLockedSliders(prev => (Object.assign(Object.assign({}, prev), { [field]: !prev[field] })));
    };
    // when slider value changes, update the state of the slider values and sum of weights
    const handleValueChange = (field, value) => {
        const roundedValue = Number(value.toFixed(1));
        const oldValue = sliderValues[field];
        const difference = roundedValue - oldValue;
        const newSliderValues = Object.assign(Object.assign({}, sliderValues), { [field]: roundedValue });
        // Adjust only unlocked fields to maintain sum of 100
        const unlockedFields = Object.keys(newSliderValues).filter(f => f !== field && !lockedSliders[f]);
        const adjustmentPerField = Number((difference / unlockedFields.length).toFixed(1));
        unlockedFields.forEach(f => {
            newSliderValues[f] = Number((newSliderValues[f] - adjustmentPerField).toFixed(1));
        });
        // Ensure the sum is exactly 100 by adjusting the last unlocked field if necessary
        const sum = Object.values(newSliderValues).reduce((acc, val) => acc + val, 0);
        if (unlockedFields.length > 0) {
            const lastField = unlockedFields[unlockedFields.length - 1];
            newSliderValues[lastField] = Number((newSliderValues[lastField] + (100 - sum)).toFixed(1));
        }
        setSliderValues(newSliderValues);
        updateSumOfWeights(newSliderValues);
    };
    const resetChanges = () => {
        // Reset slider values and unlock all sliders
        initializeSliderValues(fieldInfo);
        setLockedSliders({});
        // Remove the scored feature layer if it exists
        if (clientSideLayer && jimuMapView) {
            jimuMapView.view.map.remove(clientSideLayer);
            setClientSideLayer(null);
        }
        setIsExportReady(false);
    };
    const createRenderer = (layer, field) => __awaiter(this, void 0, void 0, function* () {
        const params = {
            basemapTheme: "light",
            geometryType: layer.geometryType,
            theme: "high-to-low",
            name: "Blue 11"
        };
        const colorScheme = esri_smartMapping_symbology_color__WEBPACK_IMPORTED_MODULE_8__.getSchemeByName(params);
        const colorParams = {
            layer: layer,
            view: jimuMapView.view,
            field: field,
            classificationMethod: "natural-breaks",
            numClasses: 4,
            colorScheme: colorScheme,
        };
        const { renderer } = yield esri_smartMapping_renderers_color__WEBPACK_IMPORTED_MODULE_7__["default"].createClassBreaksRenderer(colorParams);
        return renderer;
    });
    // when apply button is clicked
    const applyChanges = () => __awaiter(this, void 0, void 0, function* () {
        if (!dataSource || !jimuMapView) {
            console.error('Data source or map view is not available');
            return;
        }
        setIsLoading(true);
        const new_records = JSON.parse(records).map(record => {
            const { geometry, attributes } = record;
            record.geometry.type = 'polyline';
            return ({
                geometry,
                attributes: Object.assign(Object.assign({}, attributes), { score: calculateScore(record) })
            });
        });
        // Dynamic fields generation
        const fields = [
            {
                name: "OBJECTID",
                alias: "ObjectID",
                type: "oid"
            },
            {
                name: "score",
                alias: "Composite Score",
                type: "double"
            },
            ...props.useDataSources[0].fields.map(fieldName => ({
                name: fieldName,
                alias: fieldName,
                type: "double"
            }))
        ];
        const layer = new esri_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_6__["default"]({
            title: `Composite Score Layer ${Date.now()}`,
            source: new_records,
            objectIdField: "OBJECTID",
            geometryType: 'polyline',
            spatialReference: { wkid: 102100 },
            popupEnabled: true,
            legendEnabled: true,
            extent: jimuMapView.view.extent,
            fields: fields,
            // We'll set the renderer after creating the layer
        });
        // Create and set the new renderer
        const renderer = yield createRenderer(layer, "score");
        layer.renderer = renderer;
        // Remove existing client-side layer if it exists
        if (clientSideLayer) {
            jimuMapView.view.map.remove(clientSideLayer);
        }
        // Add the new layer to the map
        jimuMapView.view.map.add(layer);
        setClientSideLayer(layer);
        setIsExportReady(true);
        setIsLoading(false);
    });
    const exportToGeoJSON = () => {
        var _a;
        if (!clientSideLayer) {
            console.error('No client-side layer available for export');
            return;
        }
        // Helper function to extract coordinates based on geometry type
        const getCoordinates = (geometry) => {
            switch (geometry.type) {
                case 'point':
                    return [geometry.x, geometry.y];
                case 'polyline':
                    return geometry.paths[0]; // Assuming single part line
                case 'polygon':
                    return geometry.rings[0]; // Assuming single part polygon
                default:
                    console.warn(`Unsupported geometry type: ${geometry.type}`);
                    return [];
            }
        };
        // Convert client-side layer to GeoJSON
        const featureCollection = {
            type: 'FeatureCollection',
            crs: {
                type: 'name',
                properties: {
                    name: `EPSG:${clientSideLayer.spatialReference.wkid}`
                }
            },
            features: clientSideLayer.source.items.map(feature => ({
                type: 'Feature',
                id: feature.attributes[clientSideLayer.objectIdField],
                geometry: {
                    type: feature.geometry.type === 'polyline' ? 'LineString' : feature.geometry.type,
                    coordinates: getCoordinates(feature.geometry)
                },
                properties: Object.assign(Object.assign({}, feature.attributes), { 
                    // Add weight values to properties
                    weightValues: Object.fromEntries(Object.entries(sliderValues).map(([field, weight]) => [
                        `${field}_weight`,
                        weight
                    ])) })
            }))
        };
        // Add Shape__Length if it exists in the original features
        if ((_a = clientSideLayer.source.items[0]) === null || _a === void 0 ? void 0 : _a.attributes.Shape__Length) {
            featureCollection.features.forEach(feature => {
                var _a;
                feature.properties.Shape__Length = (_a = clientSideLayer.source.items.find(item => item.attributes[clientSideLayer.objectIdField] === feature.id)) === null || _a === void 0 ? void 0 : _a.attributes.Shape__Length;
            });
        }
        // Convert to JSON string
        const geoJSONString = JSON.stringify(featureCollection, null, 2);
        // Create blob and download link
        const blob = new Blob([geoJSONString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        // append the current date to the file name
        link.download = `mapa_composite_score_${new Date().toISOString()}.geojson`;
        // link.download = 'mapa_score_export.geojson';
        // Trigger download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        // Clean up
        URL.revokeObjectURL(url);
    };
    const createSliders = (ds, info) => {
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "widget-scoring-widget" },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "scoring-widget-container" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "scoring-widget-content" },
                    fieldInfo.map(field => (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { key: field.name, className: "slider-container" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, null, field.alias),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "slider-input-container" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Slider, { className: "slider", value: sliderValues[field.name] || 0, onChange: (evt) => handleValueChange(field.name, parseFloat(evt.target.value)), min: 0, max: 100, step: 0.1, disabled: lockedSliders[field.name] }),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "numeric-input-lock-container" },
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.NumericInput, { className: "slider-input", value: sliderValues[field.name] || 0, onChange: (value) => handleValueChange(field.name, value), min: 0, max: 100, step: 0.1, disabled: lockedSliders[field.name] }),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { className: "lock-button", size: "sm", onClick: () => toggleLock(field.name), title: lockedSliders[field.name] ? "Unlock" : "Lock" }, lockedSliders[field.name] ? jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_icons_outlined_editor_lock__WEBPACK_IMPORTED_MODULE_3__.LockOutlined, { size: "s" }) : jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_icons_outlined_editor_unlock__WEBPACK_IMPORTED_MODULE_2__.UnlockOutlined, { size: "s" }))))))),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: `sum-display ${sumOfWeights !== 100 ? 'sum-error' : ''}` },
                        "Sum of weights: ",
                        sumOfWeights),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "buttons" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { className: "reset-button", onClick: resetChanges }, "Reset"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { className: "apply-button", onClick: applyChanges, disabled: sumOfWeights !== 100 || !isDataReady || isLoading },
                            isLoading ? 'Loading Data...' : 'Apply',
                            isLoading && jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Loading, { className: "loading-icon" })),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "export-button-container" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { className: "export-button", onClick: exportToGeoJSON, disabled: !isExportReady }, "Export GeoJSON")))))));
    };
    if (!isDsConfigured()) {
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("h3", null, "Please configure the data source and select fields.");
    }
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "widget-scoring-widget" },
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceComponent, { useDataSource: props.useDataSources[0], onDataSourceCreated: setDataSource, widgetId: props.id, queryCount: true }, createSliders),
        props.config.mapWidgetIds && props.config.mapWidgetIds.length > 0 && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_arcgis__WEBPACK_IMPORTED_MODULE_5__.JimuMapViewComponent, { useMapWidgetId: props.config.mapWidgetIds[0], onActiveViewChange: onActiveViewChange }))));
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9zY29yaW5nX3dpZGdldC9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQytKO0FBQ2pCO0FBQzlJLDhCQUE4QixzSEFBMkIsQ0FBQywrSEFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0tBQWdLLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxzQkFBc0IsVUFBVSxzQkFBc0IsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sV0FBVyxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUsscUJBQXFCLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsb0RBQW9ELHNCQUFzQixzQkFBc0IsK0JBQStCLEtBQUssaUNBQWlDLDBCQUEwQiwr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LFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQ3BFLDJEQUFDLDZEQUFvQixJQUNuQixjQUFjLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQzVDLGtCQUFrQixFQUFFLGtCQUFrQixHQUN0QyxDQUNILENBQ0csQ0FDUDtBQUNILENBQUM7QUFFTyxTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi4vLi4vLi4vZ2l0L2V4Yl9tYXBhX3NzNGEvZXhiX3dpZGdldHNfbWFwYV9zczRhL3dpZGdldHMvc2NvcmluZ193aWRnZXQvc3JjL3J1bnRpbWUvc3R5bGUuY3NzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4uLy4uLy4uL2dpdC9leGJfbWFwYV9zczRhL2V4Yl93aWRnZXRzX21hcGFfc3M0YS93aWRnZXRzL3Njb3Jpbmdfd2lkZ2V0L3NyYy9ydW50aW1lL3N0eWxlLmNzcz9lZDExIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvc3ZnL291dGxpbmVkL2VkaXRvci9sb2NrLnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1pY29ucy9zdmcvb3V0bGluZWQvZWRpdG9yL3VubG9jay5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvb3V0bGluZWQvZWRpdG9yL2xvY2sudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL291dGxpbmVkL2VkaXRvci91bmxvY2sudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL3NtYXJ0TWFwcGluZy9yZW5kZXJlcnMvY29sb3JcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvc21hcnRNYXBwaW5nL3N5bWJvbG9neS9jb2xvclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1hcmNnaXNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi4vLi4vLi4vZ2l0L2V4Yl9tYXBhX3NzNGEvZXhiX3dpZGdldHNfbWFwYV9zczRhL3dpZGdldHMvc2NvcmluZ193aWRnZXQvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vZXhiL0FyY0dJU0V4cGVyaWVuY2VCdWlsZGVyL2NsaWVudC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vZXhiL0FyY0dJU0V4cGVyaWVuY2VCdWlsZGVyL2NsaWVudC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zY29yaW5nLXdpZGdldC1jb250YWluZXIge1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uc2NvcmluZy13aWRnZXQtY29udGVudCB7XG4gIG1heC13aWR0aDogNjAwcHg7IC8qIEFkanVzdCBhZnRlciBZb3VzZWYgY29uZmlnIGlzIGRvbmUgKi9cbiAgbWFyZ2luOiAwIGF1dG87XG4gIG92ZXJmbG93LXk6IGF1dG87IC8qIEVuYWJsZSB2ZXJ0aWNhbCBzY3JvbGxpbmcgKi9cbiAgZmxleC1ncm93OiAxO1xufVxuXG4uc3VtLWRpc3BsYXkge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLnN1bS1lcnJvciB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4ucmVzZXQtYnV0dG9uLFxuLmFwcGx5LWJ1dHRvbiB7XG4gIG1pbi13aWR0aDogMTAwcHg7XG59XG5cbi8qc3R5bGUgZm9yIHNsaWRlciBhbmQgbnVtZXJpYyBpbnB1dCovXG4uc2xpZGVyLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5zbGlkZXItaW5wdXQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG59XG5cbi5zbGlkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4ubnVtZXJpYy1pbnB1dC1sb2NrLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zbGlkZXItaW5wdXQge1xuICB3aWR0aDogODBweDsgLyogQWRqdXN0IGFzIG5lZWRlZCAqL1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmxvY2stYnV0dG9uIHtcbiAgcGFkZGluZzogNHB4O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5sb2NrLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi9naXQvZXhiX21hcGFfc3M0YS9leGJfd2lkZ2V0c19tYXBhX3NzNGEvd2lkZ2V0cy9zY29yaW5nX3dpZGdldC9zcmMvcnVudGltZS9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQSxFQUFBLHVDQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBLEVBQUEsOEJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7O0VBRUksZ0JBQUE7QUFDSjs7QUFFQSxxQ0FBQTtBQUNBO0VBQ0ksbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQSxFQUFBLHFCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnNjb3Jpbmctd2lkZ2V0LWNvbnRhaW5lciB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5zY29yaW5nLXdpZGdldC1jb250ZW50IHtcXHJcXG4gICAgbWF4LXdpZHRoOiA2MDBweDsgLyogQWRqdXN0IGFmdGVyIFlvdXNlZiBjb25maWcgaXMgZG9uZSAqL1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bzsgLyogRW5hYmxlIHZlcnRpY2FsIHNjcm9sbGluZyAqL1xcclxcbiAgICBmbGV4LWdyb3c6IDE7XFxyXFxufVxcclxcblxcclxcbi5zdW0tZGlzcGxheSB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3VtLWVycm9yIHtcXHJcXG4gICAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5yZXNldC1idXR0b24sXFxyXFxuLmFwcGx5LWJ1dHRvbiB7XFxyXFxuICAgIG1pbi13aWR0aDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi8qc3R5bGUgZm9yIHNsaWRlciBhbmQgbnVtZXJpYyBpbnB1dCovXFxyXFxuLnNsaWRlci1jb250YWluZXIge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyLWlucHV0LWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm51bWVyaWMtaW5wdXQtbG9jay1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyLWlucHV0IHtcXHJcXG4gICAgd2lkdGg6IDgwcHg7IC8qIEFkanVzdCBhcyBuZWVkZWQgKi9cXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5sb2NrLWJ1dHRvbiB7XFxyXFxuICAgIHBhZGRpbmc6IDRweDtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9jay1idXR0b246aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL2V4Yi9BcmNHSVNFeHBlcmllbmNlQnVpbGRlci9jbGllbnQvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vZXhiL0FyY0dJU0V4cGVyaWVuY2VCdWlsZGVyL2NsaWVudC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vZXhiL0FyY0dJU0V4cGVyaWVuY2VCdWlsZGVyL2NsaWVudC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL2V4Yi9BcmNHSVNFeHBlcmllbmNlQnVpbGRlci9jbGllbnQvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vZXhiL0FyY0dJU0V4cGVyaWVuY2VCdWlsZGVyL2NsaWVudC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vZXhiL0FyY0dJU0V4cGVyaWVuY2VCdWlsZGVyL2NsaWVudC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vZXhiL0FyY0dJU0V4cGVyaWVuY2VCdWlsZGVyL2NsaWVudC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vZXhiL0FyY0dJU0V4cGVyaWVuY2VCdWlsZGVyL2NsaWVudC9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsyXSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9leGIvQXJjR0lTRXhwZXJpZW5jZUJ1aWxkZXIvY2xpZW50L25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbM10hLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9leGIvQXJjR0lTRXhwZXJpZW5jZUJ1aWxkZXIvY2xpZW50L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9leGIvQXJjR0lTRXhwZXJpZW5jZUJ1aWxkZXIvY2xpZW50L25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzJdIS4uLy4uLy4uLy4uLy4uLy4uLy4uL2V4Yi9BcmNHSVNFeHBlcmllbmNlQnVpbGRlci9jbGllbnQvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVszXSEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiBmaWxsPVxcXCJub25lXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiPjxwYXRoIGZpbGw9XFxcIiMwMDBcXFwiIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTcuNSAwQTMuNSAzLjUgMCAwIDEgMTEgMy41VjZoMWExIDEgMCAwIDEgMSAxdjhhMSAxIDAgMCAxLTEgMUgzYTEgMSAwIDAgMS0xLTFWN2ExIDEgMCAwIDEgMS0xaDFWMy41QTMuNSAzLjUgMCAwIDEgNy41IDBNNSA2aDVWMy41YTIuNSAyLjUgMCAwIDAtMi4zMzYtMi40OTVMNy41IDFhMi41IDIuNSAwIDAgMC0yLjQ5NSAyLjMzNkw1IDMuNXptNiAxSDN2OGg5Vjd6bS0zLjUgNWExLjUgMS41IDAgMSAwIDAtMyAxLjUgMS41IDAgMCAwIDAgM1xcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCI+PHBhdGggZmlsbD1cXFwiIzAwMFxcXCIgZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNMTYgMy41YTMuNSAzLjUgMCAxIDAtNyAwVjZIM2ExIDEgMCAwIDAtMSAxdjhhMSAxIDAgMCAwIDEgMWg5YTEgMSAwIDAgMCAxLTFWN2ExIDEgMCAwIDAtMS0xaC0yVjMuNWwuMDA1LS4xNjRBMi41IDIuNSAwIDAgMSAxMi41IDFsLjE2NC4wMDVBMi41IDIuNSAwIDAgMSAxNSAzLjVhLjUuNSAwIDAgMCAxIDBNOSA3SDN2OGg5VjdoLTF6bS0xLjUgNWExLjUgMS41IDAgMSAwIDAtMyAxLjUgMS41IDAgMCAwIDAgM1xcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJpbXBvcnQgeyBSZWFjdCwgY2xhc3NOYW1lcyB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgdHlwZSBTVkdDb21wb25lbnRQcm9wcyB9IGZyb20gJ2ppbXUtdWknXHJcbmltcG9ydCBzcmMgZnJvbSAnLi4vLi4vc3ZnL291dGxpbmVkL2VkaXRvci9sb2NrLnN2ZydcclxuXHJcbmV4cG9ydCBjb25zdCBMb2NrT3V0bGluZWQgPSAocHJvcHM6IFNWR0NvbXBvbmVudFByb3BzKSA9PiB7XHJcbiAgY29uc3QgU1ZHID0gd2luZG93LlNWR1xyXG4gIGNvbnN0IHsgY2xhc3NOYW1lLCAuLi5vdGhlcnMgfSA9IHByb3BzXHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCdqaW11LWljb24gamltdS1pY29uLWNvbXBvbmVudCcsIGNsYXNzTmFtZSlcclxuICBpZiAoIVNWRykgcmV0dXJuIDxzdmcgY2xhc3NOYW1lPXtjbGFzc2VzfSB7Li4ub3RoZXJzIGFzIGFueX0gLz5cclxuICByZXR1cm4gPFNWRyBjbGFzc05hbWU9e2NsYXNzZXN9IHNyYz17c3JjfSB7Li4ub3RoZXJzfSAvPlxyXG59XHJcbiIsImltcG9ydCB7IFJlYWN0LCBjbGFzc05hbWVzIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyB0eXBlIFNWR0NvbXBvbmVudFByb3BzIH0gZnJvbSAnamltdS11aSdcclxuaW1wb3J0IHNyYyBmcm9tICcuLi8uLi9zdmcvb3V0bGluZWQvZWRpdG9yL3VubG9jay5zdmcnXHJcblxyXG5leHBvcnQgY29uc3QgVW5sb2NrT3V0bGluZWQgPSAocHJvcHM6IFNWR0NvbXBvbmVudFByb3BzKSA9PiB7XHJcbiAgY29uc3QgU1ZHID0gd2luZG93LlNWR1xyXG4gIGNvbnN0IHsgY2xhc3NOYW1lLCAuLi5vdGhlcnMgfSA9IHByb3BzXHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCdqaW11LWljb24gamltdS1pY29uLWNvbXBvbmVudCcsIGNsYXNzTmFtZSlcclxuICBpZiAoIVNWRykgcmV0dXJuIDxzdmcgY2xhc3NOYW1lPXtjbGFzc2VzfSB7Li4ub3RoZXJzIGFzIGFueX0gLz5cclxuICByZXR1cm4gPFNWRyBjbGFzc05hbWU9e2NsYXNzZXN9IHNyYz17c3JjfSB7Li4ub3RoZXJzfSAvPlxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2xheWVyc19GZWF0dXJlTGF5ZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9zbWFydE1hcHBpbmdfcmVuZGVyZXJzX2NvbG9yX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2Vzcmlfc21hcnRNYXBwaW5nX3N5bWJvbG9neV9jb2xvcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4vLyBAdHMtaWdub3JlXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCJpbXBvcnQge1xyXG4gIFJlYWN0LFxyXG4gIHR5cGUgSU1EYXRhU291cmNlSW5mbyxcclxuICB0eXBlIERhdGFTb3VyY2UsXHJcbiAgdHlwZSBBbGxXaWRnZXRQcm9wcyxcclxuICBEYXRhU291cmNlQ29tcG9uZW50LFxyXG4gIHR5cGUgRmVhdHVyZUxheWVyRGF0YVNvdXJjZVxyXG59IGZyb20gJ2ppbXUtY29yZSdcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQge1NsaWRlciwgQnV0dG9uLCBMYWJlbCwgTnVtZXJpY0lucHV0LCBTd2l0Y2h9IGZyb20gJ2ppbXUtdWknXHJcbmltcG9ydCB7VW5sb2NrT3V0bGluZWR9IGZyb20gJ2ppbXUtaWNvbnMvb3V0bGluZWQvZWRpdG9yL3VubG9jayc7XHJcbmltcG9ydCB7TG9ja091dGxpbmVkfSBmcm9tICdqaW11LWljb25zL291dGxpbmVkL2VkaXRvci9sb2NrJztcclxuaW1wb3J0ICcuL3N0eWxlLmNzcydcclxuaW1wb3J0IHtKaW11TWFwVmlld0NvbXBvbmVudCwgSmltdU1hcFZpZXd9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xyXG5pbXBvcnQgRmVhdHVyZUxheWVyIGZyb20gJ2VzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllcidcclxuaW1wb3J0IHtHcmFwaGljfSBmcm9tICdlc3JpL0dyYXBoaWMnXHJcbmltcG9ydCAqIGFzIGNvbG9yUmVuZGVyZXJDcmVhdG9yIGZyb20gJ2Vzcmkvc21hcnRNYXBwaW5nL3JlbmRlcmVycy9jb2xvcic7XHJcbmltcG9ydCAqIGFzIGNvbG9yU2NoZW1lcyBmcm9tICdlc3JpL3NtYXJ0TWFwcGluZy9zeW1ib2xvZ3kvY29sb3InO1xyXG5pbXBvcnQgeyBMb2FkaW5nIH0gZnJvbSAnamltdS11aSdcclxuXHJcblxyXG5jb25zdCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gPSBSZWFjdFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2lkZ2V0KHByb3BzOiBBbGxXaWRnZXRQcm9wczx1bmtub3duPikge1xyXG4gIGNvbnN0IFtzbGlkZXJWYWx1ZXMsIHNldFNsaWRlclZhbHVlc10gPSB1c2VTdGF0ZTx7IFtrZXk6IHN0cmluZ106IG51bWJlciB9Pih7fSlcclxuICBjb25zdCBbZGF0YVNvdXJjZSwgc2V0RGF0YVNvdXJjZV0gPSB1c2VTdGF0ZTxGZWF0dXJlTGF5ZXJEYXRhU291cmNlIHwgbnVsbD4obnVsbClcclxuICBjb25zdCBbc3VtT2ZXZWlnaHRzLCBzZXRTdW1PZldlaWdodHNdID0gdXNlU3RhdGU8bnVtYmVyPigwKVxyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcclxuICBjb25zdCBbcmVjb3Jkcywgc2V0UmVjb3Jkc10gPSB1c2VTdGF0ZTxhbnlbXT4oW10pXHJcbiAgY29uc3QgW2NsaWVudFNpZGVMYXllciwgc2V0Q2xpZW50U2lkZUxheWVyXSA9IHVzZVN0YXRlPEZlYXR1cmVMYXllciB8IG51bGw+KG51bGwpXHJcbiAgY29uc3QgW2lzRXhwb3J0UmVhZHksIHNldElzRXhwb3J0UmVhZHldID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIGNvbnN0IFtqaW11TWFwVmlldywgc2V0SmltdU1hcFZpZXddID0gdXNlU3RhdGU8SmltdU1hcFZpZXcgfCBudWxsPihudWxsKVxyXG4gIGNvbnN0IHF1ZXJ5UGFyYW1zID0gcHJvcHMudXNlRGF0YVNvdXJjZXM/LlswXT8uZmllbGRzPy5sZW5ndGggPiAwXHJcbiAgICA/IHtvdXRGaWVsZHM6IHByb3BzLnVzZURhdGFTb3VyY2VzWzBdLmZpZWxkc31cclxuICAgIDoge307XHJcbiAgLy8gc3RhdGUgZm9yIGZpZWxkIGluZm9cclxuICBjb25zdCBbZmllbGRJbmZvLCBzZXRGaWVsZEluZm9dID0gdXNlU3RhdGU8eyBuYW1lOiBzdHJpbmc7IGFsaWFzOiBzdHJpbmcgfVtdPihbXSlcclxuICBjb25zdCBbbG9ja2VkU2xpZGVycywgc2V0TG9ja2VkU2xpZGVyc10gPSB1c2VTdGF0ZTx7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfT4oe30pXHJcbiAgY29uc3QgW2lzRGF0YVJlYWR5LCBzZXRJc0RhdGFSZWFkeV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGdldEZlYXR1cmVDb3VudChxdWVyeVBhcmFtczogYW55KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICByZXR1cm4gYXdhaXQgZGF0YVNvdXJjZS5xdWVyeUNvdW50KHF1ZXJ5UGFyYW1zKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGdldHRpbmcgZmVhdHVyZSBjb3VudDonLCBlcnJvcik7XHJcbiAgICAgIHRocm93IGVycm9yO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gVE9ETyB1c2VyIGFsbFJlY29yZHMgaW5zdGVhZFxyXG4gIGFzeW5jIGZ1bmN0aW9uIHF1ZXJ5QWxsRmVhdHVyZXModG90YWxDb3VudDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBwYWdlU2l6ZSA9IDIwMDA7IC8vIEFkanVzdCB0aGlzIHZhbHVlIGJhc2VkIG9uIHlvdXIgc2VydmljZSdzIGNhcGFiaWxpdGllc1xyXG4gICAgY29uc29sZS5sb2codG90YWxDb3VudCk7XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gcmVjdXJzaXZlUXVlcnkoc3RhcnQ6IG51bWJlciwgYWNjdW11bGF0ZWRGZWF0dXJlczogYW55W10pIHtcclxuICAgICAgaWYgKGFjY3VtdWxhdGVkRmVhdHVyZXMubGVuZ3RoID49IHRvdGFsQ291bnQpIHtcclxuICAgICAgICByZXR1cm4gYWNjdW11bGF0ZWRGZWF0dXJlcztcclxuICAgICAgfVxyXG4gICAgICAvLyBjb25zb2xlLmxvZyhwcm9wcy51c2VEYXRhU291cmNlc1swXS5maWVsZHMpO1xyXG4gICAgICAvLyBhZGQgdG8gdGhlIHF1ZXJ5IHBhcmFtZXRlcnMsIHJldHVybiBnZW9tZXRyeVxyXG4gICAgICBjb25zdCBuZXdRdWVyeVBhcmFtcyA9IHtcclxuICAgICAgICBvdXRGaWVsZHM6IHByb3BzLnVzZURhdGFTb3VyY2VzWzBdLmZpZWxkcyxcclxuICAgICAgICByZXR1cm5HZW9tZXRyeTogdHJ1ZSwvL25lZWQgdG8gdmlzdWFsaXplXHJcbiAgICAgICAgc3RhcnQ6IHN0YXJ0LFxyXG4gICAgICAgIG51bTogcGFnZVNpemVcclxuICAgICAgfVxyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBmZWF0dXJlc1Jlc3VsdCA9IGF3YWl0IGRhdGFTb3VyY2UucXVlcnkobmV3UXVlcnlQYXJhbXMpO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRGZWF0dXJlcyA9IGZlYXR1cmVzUmVzdWx0LnJlY29yZHMubWFwKHJlY29yZCA9PiByZWNvcmQuZmVhdHVyZSk7XHJcbiAgICAgICAgY29uc3QgbmV3QWNjdW11bGF0ZWRGZWF0dXJlcyA9IFsuLi5hY2N1bXVsYXRlZEZlYXR1cmVzLCAuLi5jdXJyZW50RmVhdHVyZXNdO1xyXG4gICAgICAgIGlmIChmZWF0dXJlc1Jlc3VsdC5yZWNvcmRzLmxlbmd0aCA9PT0gcGFnZVNpemUpIHtcclxuICAgICAgICAgIHJldHVybiByZWN1cnNpdmVRdWVyeShzdGFydCArIHBhZ2VTaXplLFxyXG4gICAgICAgICAgICBuZXdBY2N1bXVsYXRlZEZlYXR1cmVzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIG5ld0FjY3VtdWxhdGVkRmVhdHVyZXM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHF1ZXJ5aW5nIGZlYXR1cmVzOicsIGVycm9yKTtcclxuICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlY3Vyc2l2ZVF1ZXJ5KDAsIFtdKTtcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBMb2cgSk1WIGRldGFpbHMgd2hlbiBpdCdzIHNldFxyXG4gICAgaWYgKGppbXVNYXBWaWV3KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdKaW11TWFwVmlldyBkZXRhaWxzOicsIHtcclxuICAgICAgICBpZDogamltdU1hcFZpZXcuaWQsXHJcbiAgICAgICAgaXNBY3RpdmU6IGppbXVNYXBWaWV3LmlzQWN0aXZlLFxyXG4gICAgICAgIHZpZXc6IGppbXVNYXBWaWV3LnZpZXdcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LCBbamltdU1hcFZpZXddKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGRhdGFTb3VyY2UpIHtcclxuICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gICAgICBzZXRJc0RhdGFSZWFkeShmYWxzZSk7XHJcbiAgICAgIGdldEZlYXR1cmVDb3VudChxdWVyeVBhcmFtcykudGhlbih0b3RhbENvdW50ID0+IHtcclxuICAgICAgICBxdWVyeUFsbEZlYXR1cmVzKHRvdGFsQ291bnQpLnRoZW4oZmVhdHVyZXMgPT4ge1xyXG4gICAgICAgICAgc2V0UmVjb3JkcyhKU09OLnN0cmluZ2lmeShmZWF0dXJlcykpO1xyXG4gICAgICAgICAgc2V0SXNEYXRhUmVhZHkodHJ1ZSk7XHJcbiAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgIGlmIChlcnJvci5uYW1lICE9PSAnQWJvcnRFcnJvcicpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcmVjb3JkczonLCBlcnJvcik7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdFcnJvciBmZXRjaGluZyByZWNvcmRzOicpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9KVxyXG4gICAgICB9KS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZ2V0dGluZyBmZWF0dXJlIGNvdW50OicsIGVycm9yKTtcclxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LCBbZGF0YVNvdXJjZV0pO1xyXG5cclxuICAvLyBzZXQgZmllbGQgaW5mbyBhbmQgaW5pdGlhbGl6ZSBzbGlkZXIgdmFsdWVzIHdoZW4gZGF0YSBzb3VyY2UgaXMgc2V0XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChkYXRhU291cmNlKSB7XHJcbiAgICAgIGNvbnN0IGZpZWxkcyA9IGRhdGFTb3VyY2UuZ2V0U2NoZW1hKCkuZmllbGRzO1xyXG4gICAgICBjb25zdCBzZWxlY3RlZEZpZWxkcyA9IHByb3BzLnVzZURhdGFTb3VyY2VzWzBdLmZpZWxkcztcclxuICAgICAgY29uc3QgbmV3RmllbGRJbmZvID0gc2VsZWN0ZWRGaWVsZHMubWFwKGZpZWxkTmFtZSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmllbGQgPSBmaWVsZHNbZmllbGROYW1lXTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgbmFtZTogZmllbGROYW1lLFxyXG4gICAgICAgICAgYWxpYXM6IGZpZWxkLmFsaWFzIHx8IGZpZWxkTmFtZVxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRGaWVsZEluZm8obmV3RmllbGRJbmZvKTtcclxuICAgICAgaW5pdGlhbGl6ZVNsaWRlclZhbHVlcyhuZXdGaWVsZEluZm8pO1xyXG4gICAgfVxyXG4gIH0sIFtkYXRhU291cmNlXSk7XHJcblxyXG4gIGNvbnN0IG9uQWN0aXZlVmlld0NoYW5nZSA9IChqbXY6IEppbXVNYXBWaWV3KSA9PiB7XHJcbiAgICBpZiAoam12KSB7XHJcbiAgICAgIHNldEppbXVNYXBWaWV3KGptdilcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFRPRE86IGRlbGV0ZSBpZiB1bnVzZWRcclxuICBjb25zdCB1cGRhdGVKaW11TWFwVmlldyA9ICgpID0+IHtcclxuICAgIGlmIChqaW11TWFwVmlldyAmJiBqaW11TWFwVmlldy52aWV3KSB7XHJcbiAgICAgIC8vIFVwZGF0ZSB0aGUgSmltdU1hcFZpZXcgYmFzZWQgb24gc2xpZGVyIHZhbHVlc1xyXG4gICAgICAvLyBUaGlzIGlzIGEgcGxhY2Vob2xkZXIgLSB5b3UnbGwgbmVlZCB0byBpbXBsZW1lbnQgdGhlIGFjdHVhbCB1cGRhdGUgbG9naWNcclxuICAgICAgY29uc29sZS5sb2coJ1VwZGF0aW5nIEppbXVNYXBWaWV3IHdpdGggc2xpZGVyIHZhbHVlczonLCBzbGlkZXJWYWx1ZXMpXHJcbiAgICAgIC8vIEV4YW1wbGU6IFVwZGF0ZSB0aGUgdmlldydzIGV4dGVudFxyXG4gICAgICAvLyBqaW11TWFwVmlldy52aWV3LmdvVG8oc29tZU5ld0V4dGVudClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGlzRHNDb25maWd1cmVkID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHByb3BzLnVzZURhdGFTb3VyY2VzICYmXHJcbiAgICAgIHByb3BzLnVzZURhdGFTb3VyY2VzLmxlbmd0aCA9PT0gMSAmJlxyXG4gICAgICBwcm9wcy51c2VEYXRhU291cmNlc1swXS5maWVsZHMgJiZcclxuICAgICAgcHJvcHMudXNlRGF0YVNvdXJjZXNbMF0uZmllbGRzLmxlbmd0aCA+IDBcclxuICB9XHJcblxyXG4gIC8vIEluaXRpYWxpemUgc2xpZGVyIHZhbHVlcyBiYXNlZCBvbiB0aGUgbnVtYmVyIG9mIGZpZWxkcy4gVGhlIHN1bSBvZiB3ZWlnaHRzIHdpbGwgYmUgMTAwLlxyXG4gIGNvbnN0IGluaXRpYWxpemVTbGlkZXJWYWx1ZXMgPSAoZmllbGRzKSA9PiB7XHJcbiAgICBjb25zdCBpbml0aWFsVmFsdWVzID0ge307XHJcbiAgICBjb25zdCBmaWVsZENvdW50ID0gZmllbGRzLmxlbmd0aDtcclxuICAgIGNvbnN0IGJhc2VWYWx1ZSA9IE1hdGguZmxvb3IoKDEwMCAvIGZpZWxkQ291bnQpICogMTApIC8gMTA7IC8vIFJvdW5kIGRvd24gdG8gMSBkZWNpbWFsIHBsYWNlXHJcbiAgICBsZXQgcmVtYWluaW5nVmFsdWUgPSBOdW1iZXIoKDEwMCAtIGJhc2VWYWx1ZSAqIGZpZWxkQ291bnQpLnRvRml4ZWQoMSkpO1xyXG5cclxuICAgIGZpZWxkcy5mb3JFYWNoKChmaWVsZCwgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKGluZGV4ID09PSBmaWVsZHMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgIC8vIEFzc2lnbiB0aGUgcmVtYWluaW5nIHZhbHVlIHRvIHRoZSBsYXN0IGZpZWxkXHJcbiAgICAgICAgaW5pdGlhbFZhbHVlc1tmaWVsZC5uYW1lXSA9IE51bWJlcigoYmFzZVZhbHVlICsgcmVtYWluaW5nVmFsdWUpLnRvRml4ZWQoMSkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGluaXRpYWxWYWx1ZXNbZmllbGQubmFtZV0gPSBiYXNlVmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHNldFNsaWRlclZhbHVlcyhpbml0aWFsVmFsdWVzKTtcclxuICAgIHVwZGF0ZVN1bU9mV2VpZ2h0cyhpbml0aWFsVmFsdWVzKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB1cGRhdGVTdW1PZldlaWdodHMgPSAodmFsdWVzOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9KSA9PiB7XHJcbiAgICBjb25zdCBzdW0gPSBPYmplY3QudmFsdWVzKHZhbHVlcykucmVkdWNlKChhY2MsIHZhbCkgPT4gYWNjICsgdmFsLCAwKTtcclxuICAgIHNldFN1bU9mV2VpZ2h0cyhOdW1iZXIoc3VtLnRvRml4ZWQoMSkpKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjYWxjdWxhdGVTY29yZSA9IChmZWF0dXJlOiBHcmFwaGljKSA9PiB7XHJcbiAgICBsZXQgc2NvcmUgPSAwXHJcbiAgICBmaWVsZEluZm8uZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgIHNjb3JlICs9IChmZWF0dXJlLmF0dHJpYnV0ZXNbZmllbGQubmFtZV0gfHwgMCkgKiAoc2xpZGVyVmFsdWVzW2ZpZWxkLm5hbWVdIC8gMTAwKVxyXG4gICAgfSlcclxuICAgIHJldHVybiBzY29yZVxyXG4gIH1cclxuXHJcbiAgY29uc3QgdG9nZ2xlTG9jayA9IChmaWVsZDogc3RyaW5nKSA9PiB7XHJcbiAgICBzZXRMb2NrZWRTbGlkZXJzKHByZXYgPT4gKHtcclxuICAgICAgLi4ucHJldixcclxuICAgICAgW2ZpZWxkXTogIXByZXZbZmllbGRdXHJcbiAgICB9KSlcclxuICB9XHJcblxyXG4gIC8vIHdoZW4gc2xpZGVyIHZhbHVlIGNoYW5nZXMsIHVwZGF0ZSB0aGUgc3RhdGUgb2YgdGhlIHNsaWRlciB2YWx1ZXMgYW5kIHN1bSBvZiB3ZWlnaHRzXHJcbiAgY29uc3QgaGFuZGxlVmFsdWVDaGFuZ2UgPSAoZmllbGQ6IHN0cmluZywgdmFsdWU6IG51bWJlcikgPT4ge1xyXG4gICAgY29uc3Qgcm91bmRlZFZhbHVlID0gTnVtYmVyKHZhbHVlLnRvRml4ZWQoMSkpO1xyXG4gICAgY29uc3Qgb2xkVmFsdWUgPSBzbGlkZXJWYWx1ZXNbZmllbGRdO1xyXG4gICAgY29uc3QgZGlmZmVyZW5jZSA9IHJvdW5kZWRWYWx1ZSAtIG9sZFZhbHVlO1xyXG5cclxuICAgIGNvbnN0IG5ld1NsaWRlclZhbHVlcyA9IHsuLi5zbGlkZXJWYWx1ZXMsIFtmaWVsZF06IHJvdW5kZWRWYWx1ZX07XHJcblxyXG4gICAgLy8gQWRqdXN0IG9ubHkgdW5sb2NrZWQgZmllbGRzIHRvIG1haW50YWluIHN1bSBvZiAxMDBcclxuICAgIGNvbnN0IHVubG9ja2VkRmllbGRzID0gT2JqZWN0LmtleXMobmV3U2xpZGVyVmFsdWVzKS5maWx0ZXIoZiA9PiBmICE9PSBmaWVsZCAmJiAhbG9ja2VkU2xpZGVyc1tmXSk7XHJcbiAgICBjb25zdCBhZGp1c3RtZW50UGVyRmllbGQgPSBOdW1iZXIoKGRpZmZlcmVuY2UgLyB1bmxvY2tlZEZpZWxkcy5sZW5ndGgpLnRvRml4ZWQoMSkpO1xyXG5cclxuICAgIHVubG9ja2VkRmllbGRzLmZvckVhY2goZiA9PiB7XHJcbiAgICAgIG5ld1NsaWRlclZhbHVlc1tmXSA9IE51bWJlcigobmV3U2xpZGVyVmFsdWVzW2ZdIC0gYWRqdXN0bWVudFBlckZpZWxkKS50b0ZpeGVkKDEpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEVuc3VyZSB0aGUgc3VtIGlzIGV4YWN0bHkgMTAwIGJ5IGFkanVzdGluZyB0aGUgbGFzdCB1bmxvY2tlZCBmaWVsZCBpZiBuZWNlc3NhcnlcclxuICAgIGNvbnN0IHN1bSA9IE9iamVjdC52YWx1ZXMobmV3U2xpZGVyVmFsdWVzKS5yZWR1Y2UoKGFjYywgdmFsKSA9PiBhY2MgKyB2YWwsIDApO1xyXG4gICAgaWYgKHVubG9ja2VkRmllbGRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3QgbGFzdEZpZWxkID0gdW5sb2NrZWRGaWVsZHNbdW5sb2NrZWRGaWVsZHMubGVuZ3RoIC0gMV07XHJcbiAgICAgIG5ld1NsaWRlclZhbHVlc1tsYXN0RmllbGRdID0gTnVtYmVyKChuZXdTbGlkZXJWYWx1ZXNbbGFzdEZpZWxkXSArICgxMDAgLSBzdW0pKS50b0ZpeGVkKDEpKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTbGlkZXJWYWx1ZXMobmV3U2xpZGVyVmFsdWVzKTtcclxuICAgIHVwZGF0ZVN1bU9mV2VpZ2h0cyhuZXdTbGlkZXJWYWx1ZXMpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlc2V0Q2hhbmdlcyA9ICgpID0+IHtcclxuICAgIC8vIFJlc2V0IHNsaWRlciB2YWx1ZXMgYW5kIHVubG9jayBhbGwgc2xpZGVyc1xyXG4gICAgaW5pdGlhbGl6ZVNsaWRlclZhbHVlcyhmaWVsZEluZm8pO1xyXG4gICAgc2V0TG9ja2VkU2xpZGVycyh7fSk7XHJcblxyXG4gICAgLy8gUmVtb3ZlIHRoZSBzY29yZWQgZmVhdHVyZSBsYXllciBpZiBpdCBleGlzdHNcclxuICAgIGlmIChjbGllbnRTaWRlTGF5ZXIgJiYgamltdU1hcFZpZXcpIHtcclxuICAgICAgamltdU1hcFZpZXcudmlldy5tYXAucmVtb3ZlKGNsaWVudFNpZGVMYXllcik7XHJcbiAgICAgIHNldENsaWVudFNpZGVMYXllcihudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRJc0V4cG9ydFJlYWR5KGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjcmVhdGVSZW5kZXJlciA9IGFzeW5jIChsYXllciwgZmllbGQpID0+IHtcclxuICAgIGNvbnN0IHBhcmFtcyA9IHtcclxuICAgICAgYmFzZW1hcFRoZW1lOiBcImxpZ2h0XCIsXHJcbiAgICAgIGdlb21ldHJ5VHlwZTogbGF5ZXIuZ2VvbWV0cnlUeXBlLFxyXG4gICAgICB0aGVtZTogXCJoaWdoLXRvLWxvd1wiLFxyXG4gICAgICBuYW1lOiBcIkJsdWUgMTFcIlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNvbG9yU2NoZW1lID0gY29sb3JTY2hlbWVzLmdldFNjaGVtZUJ5TmFtZShwYXJhbXMpO1xyXG5cclxuICAgIGNvbnN0IGNvbG9yUGFyYW1zID0ge1xyXG4gICAgICBsYXllcjogbGF5ZXIsXHJcbiAgICAgIHZpZXc6IGppbXVNYXBWaWV3LnZpZXcsXHJcbiAgICAgIGZpZWxkOiBmaWVsZCxcclxuICAgICAgY2xhc3NpZmljYXRpb25NZXRob2Q6IFwibmF0dXJhbC1icmVha3NcIixcclxuICAgICAgbnVtQ2xhc3NlczogNCxcclxuICAgICAgY29sb3JTY2hlbWU6IGNvbG9yU2NoZW1lLFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB7IHJlbmRlcmVyIH0gPSBhd2FpdCBjb2xvclJlbmRlcmVyQ3JlYXRvci5kZWZhdWx0LmNyZWF0ZUNsYXNzQnJlYWtzUmVuZGVyZXIoY29sb3JQYXJhbXMpO1xyXG4gICAgcmV0dXJuIHJlbmRlcmVyO1xyXG4gIH1cclxuXHJcbiAgLy8gd2hlbiBhcHBseSBidXR0b24gaXMgY2xpY2tlZFxyXG4gIGNvbnN0IGFwcGx5Q2hhbmdlcyA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmICghZGF0YVNvdXJjZSB8fCAhamltdU1hcFZpZXcpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRGF0YSBzb3VyY2Ugb3IgbWFwIHZpZXcgaXMgbm90IGF2YWlsYWJsZScpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgc2V0SXNMb2FkaW5nKHRydWUpXHJcblxyXG4gICAgY29uc3QgbmV3X3JlY29yZHMgPSBKU09OLnBhcnNlKHJlY29yZHMpLm1hcChyZWNvcmQgPT4ge1xyXG4gICAgICBjb25zdCB7IGdlb21ldHJ5LCBhdHRyaWJ1dGVzIH0gPSByZWNvcmRcclxuICAgICAgcmVjb3JkLmdlb21ldHJ5LnR5cGUgPSAncG9seWxpbmUnO1xyXG4gICAgICByZXR1cm4gKHtcclxuICAgICAgICBnZW9tZXRyeSxcclxuICAgICAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgICAgICAuLi5hdHRyaWJ1dGVzLFxyXG4gICAgICAgICAgc2NvcmU6IGNhbGN1bGF0ZVNjb3JlKHJlY29yZClcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIC8vIER5bmFtaWMgZmllbGRzIGdlbmVyYXRpb25cclxuICAgIGNvbnN0IGZpZWxkcyA9IFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiT0JKRUNUSURcIixcclxuICAgICAgICBhbGlhczogXCJPYmplY3RJRFwiLFxyXG4gICAgICAgIHR5cGU6IFwib2lkXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwic2NvcmVcIixcclxuICAgICAgICBhbGlhczogXCJDb21wb3NpdGUgU2NvcmVcIixcclxuICAgICAgICB0eXBlOiBcImRvdWJsZVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIC4uLnByb3BzLnVzZURhdGFTb3VyY2VzWzBdLmZpZWxkcy5tYXAoZmllbGROYW1lID0+ICh7XHJcbiAgICAgICAgbmFtZTogZmllbGROYW1lLFxyXG4gICAgICAgIGFsaWFzOiBmaWVsZE5hbWUsXHJcbiAgICAgICAgdHlwZTogXCJkb3VibGVcIlxyXG4gICAgICB9KSlcclxuICAgIF07XHJcblxyXG4gICAgY29uc3QgbGF5ZXIgPSBuZXcgRmVhdHVyZUxheWVyKHtcclxuICAgICAgdGl0bGU6IGBDb21wb3NpdGUgU2NvcmUgTGF5ZXIgJHtEYXRlLm5vdygpfWAsXHJcbiAgICAgIHNvdXJjZTogbmV3X3JlY29yZHMsXHJcbiAgICAgIG9iamVjdElkRmllbGQ6IFwiT0JKRUNUSURcIixcclxuICAgICAgZ2VvbWV0cnlUeXBlOiAncG9seWxpbmUnLFxyXG4gICAgICBzcGF0aWFsUmVmZXJlbmNlOiB7IHdraWQ6IDEwMjEwMCB9LFxyXG4gICAgICBwb3B1cEVuYWJsZWQ6IHRydWUsXHJcbiAgICAgIGxlZ2VuZEVuYWJsZWQ6IHRydWUsXHJcbiAgICAgIGV4dGVudDogamltdU1hcFZpZXcudmlldy5leHRlbnQsXHJcbiAgICAgIGZpZWxkczogZmllbGRzLFxyXG4gICAgICAvLyBXZSdsbCBzZXQgdGhlIHJlbmRlcmVyIGFmdGVyIGNyZWF0aW5nIHRoZSBsYXllclxyXG4gICAgfSlcclxuXHJcbiAgICAvLyBDcmVhdGUgYW5kIHNldCB0aGUgbmV3IHJlbmRlcmVyXHJcbiAgICBjb25zdCByZW5kZXJlciA9IGF3YWl0IGNyZWF0ZVJlbmRlcmVyKGxheWVyLCBcInNjb3JlXCIpO1xyXG4gICAgbGF5ZXIucmVuZGVyZXIgPSByZW5kZXJlcjtcclxuXHJcbiAgICAvLyBSZW1vdmUgZXhpc3RpbmcgY2xpZW50LXNpZGUgbGF5ZXIgaWYgaXQgZXhpc3RzXHJcbiAgICBpZiAoY2xpZW50U2lkZUxheWVyKSB7XHJcbiAgICAgIGppbXVNYXBWaWV3LnZpZXcubWFwLnJlbW92ZShjbGllbnRTaWRlTGF5ZXIpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWRkIHRoZSBuZXcgbGF5ZXIgdG8gdGhlIG1hcFxyXG4gICAgamltdU1hcFZpZXcudmlldy5tYXAuYWRkKGxheWVyKVxyXG4gICAgc2V0Q2xpZW50U2lkZUxheWVyKGxheWVyKVxyXG4gICAgc2V0SXNFeHBvcnRSZWFkeSh0cnVlKTtcclxuICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBleHBvcnRUb0dlb0pTT04gPSAoKSA9PiB7XHJcbiAgICBpZiAoIWNsaWVudFNpZGVMYXllcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdObyBjbGllbnQtc2lkZSBsYXllciBhdmFpbGFibGUgZm9yIGV4cG9ydCcpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGV4dHJhY3QgY29vcmRpbmF0ZXMgYmFzZWQgb24gZ2VvbWV0cnkgdHlwZVxyXG4gICAgY29uc3QgZ2V0Q29vcmRpbmF0ZXMgPSAoZ2VvbWV0cnkpID0+IHtcclxuICAgICAgc3dpdGNoIChnZW9tZXRyeS50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAncG9pbnQnOlxyXG4gICAgICAgICAgcmV0dXJuIFtnZW9tZXRyeS54LCBnZW9tZXRyeS55XTtcclxuICAgICAgICBjYXNlICdwb2x5bGluZSc6XHJcbiAgICAgICAgICByZXR1cm4gZ2VvbWV0cnkucGF0aHNbMF07IC8vIEFzc3VtaW5nIHNpbmdsZSBwYXJ0IGxpbmVcclxuICAgICAgICBjYXNlICdwb2x5Z29uJzpcclxuICAgICAgICAgIHJldHVybiBnZW9tZXRyeS5yaW5nc1swXTsgLy8gQXNzdW1pbmcgc2luZ2xlIHBhcnQgcG9seWdvblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBjb25zb2xlLndhcm4oYFVuc3VwcG9ydGVkIGdlb21ldHJ5IHR5cGU6ICR7Z2VvbWV0cnkudHlwZX1gKTtcclxuICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBDb252ZXJ0IGNsaWVudC1zaWRlIGxheWVyIHRvIEdlb0pTT05cclxuICAgIGNvbnN0IGZlYXR1cmVDb2xsZWN0aW9uID0ge1xyXG4gICAgICB0eXBlOiAnRmVhdHVyZUNvbGxlY3Rpb24nLFxyXG4gICAgICBjcnM6IHtcclxuICAgICAgICB0eXBlOiAnbmFtZScsXHJcbiAgICAgICAgcHJvcGVydGllczoge1xyXG4gICAgICAgICAgbmFtZTogYEVQU0c6JHtjbGllbnRTaWRlTGF5ZXIuc3BhdGlhbFJlZmVyZW5jZS53a2lkfWBcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGZlYXR1cmVzOiBjbGllbnRTaWRlTGF5ZXIuc291cmNlLml0ZW1zLm1hcChmZWF0dXJlID0+ICh7XHJcbiAgICAgICAgdHlwZTogJ0ZlYXR1cmUnLFxyXG4gICAgICAgIGlkOiBmZWF0dXJlLmF0dHJpYnV0ZXNbY2xpZW50U2lkZUxheWVyLm9iamVjdElkRmllbGRdLFxyXG4gICAgICAgIGdlb21ldHJ5OiB7XHJcbiAgICAgICAgICB0eXBlOiBmZWF0dXJlLmdlb21ldHJ5LnR5cGUgPT09ICdwb2x5bGluZScgPyAnTGluZVN0cmluZycgOiBmZWF0dXJlLmdlb21ldHJ5LnR5cGUsXHJcbiAgICAgICAgICBjb29yZGluYXRlczogZ2V0Q29vcmRpbmF0ZXMoZmVhdHVyZS5nZW9tZXRyeSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgIC4uLmZlYXR1cmUuYXR0cmlidXRlcyxcclxuICAgICAgICAgIC8vIEFkZCB3ZWlnaHQgdmFsdWVzIHRvIHByb3BlcnRpZXNcclxuICAgICAgICAgIHdlaWdodFZhbHVlczogT2JqZWN0LmZyb21FbnRyaWVzKFxyXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhzbGlkZXJWYWx1ZXMpLm1hcCgoW2ZpZWxkLCB3ZWlnaHRdKSA9PiBbXHJcbiAgICAgICAgICAgICAgYCR7ZmllbGR9X3dlaWdodGAsXHJcbiAgICAgICAgICAgICAgd2VpZ2h0XHJcbiAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICB9KSlcclxuICAgIH07XHJcblxyXG4gICAgLy8gQWRkIFNoYXBlX19MZW5ndGggaWYgaXQgZXhpc3RzIGluIHRoZSBvcmlnaW5hbCBmZWF0dXJlc1xyXG4gICAgaWYgKGNsaWVudFNpZGVMYXllci5zb3VyY2UuaXRlbXNbMF0/LmF0dHJpYnV0ZXMuU2hhcGVfX0xlbmd0aCkge1xyXG4gICAgICBmZWF0dXJlQ29sbGVjdGlvbi5mZWF0dXJlcy5mb3JFYWNoKGZlYXR1cmUgPT4ge1xyXG4gICAgICAgIGZlYXR1cmUucHJvcGVydGllcy5TaGFwZV9fTGVuZ3RoID0gY2xpZW50U2lkZUxheWVyLnNvdXJjZS5pdGVtcy5maW5kKFxyXG4gICAgICAgICAgaXRlbSA9PiBpdGVtLmF0dHJpYnV0ZXNbY2xpZW50U2lkZUxheWVyLm9iamVjdElkRmllbGRdID09PSBmZWF0dXJlLmlkXHJcbiAgICAgICAgKT8uYXR0cmlidXRlcy5TaGFwZV9fTGVuZ3RoO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDb252ZXJ0IHRvIEpTT04gc3RyaW5nXHJcbiAgICBjb25zdCBnZW9KU09OU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZmVhdHVyZUNvbGxlY3Rpb24sIG51bGwsIDIpO1xyXG5cclxuICAgIC8vIENyZWF0ZSBibG9iIGFuZCBkb3dubG9hZCBsaW5rXHJcbiAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2dlb0pTT05TdHJpbmddLCB7IHR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcclxuICAgIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgbGluay5ocmVmID0gdXJsO1xyXG4gICAgLy8gYXBwZW5kIHRoZSBjdXJyZW50IGRhdGUgdG8gdGhlIGZpbGUgbmFtZVxyXG4gICAgbGluay5kb3dubG9hZCA9IGBtYXBhX2NvbXBvc2l0ZV9zY29yZV8ke25ldyBEYXRlKCkudG9JU09TdHJpbmcoKX0uZ2VvanNvbmA7XHJcbiAgICAvLyBsaW5rLmRvd25sb2FkID0gJ21hcGFfc2NvcmVfZXhwb3J0Lmdlb2pzb24nO1xyXG5cclxuICAgIC8vIFRyaWdnZXIgZG93bmxvYWRcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluayk7XHJcbiAgICBsaW5rLmNsaWNrKCk7XHJcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGxpbmspO1xyXG5cclxuICAgIC8vIENsZWFuIHVwXHJcbiAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHVybCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY3JlYXRlU2xpZGVycyA9IChkczogRGF0YVNvdXJjZSwgaW5mbzogSU1EYXRhU291cmNlSW5mbykgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LXNjb3Jpbmctd2lkZ2V0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY29yaW5nLXdpZGdldC1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NvcmluZy13aWRnZXQtY29udGVudFwiPlxyXG4gICAgICAgICAgICB7ZmllbGRJbmZvLm1hcChmaWVsZCA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2ZpZWxkLm5hbWV9IGNsYXNzTmFtZT1cInNsaWRlci1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxMYWJlbD57ZmllbGQuYWxpYXN9PC9MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVyLWlucHV0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICA8U2xpZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2xpZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2xpZGVyVmFsdWVzW2ZpZWxkLm5hbWVdIHx8IDB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldnQpID0+IGhhbmRsZVZhbHVlQ2hhbmdlKGZpZWxkLm5hbWUsIHBhcnNlRmxvYXQoZXZ0LnRhcmdldC52YWx1ZSkpfVxyXG4gICAgICAgICAgICAgICAgICAgIG1pbj17MH1cclxuICAgICAgICAgICAgICAgICAgICBtYXg9ezEwMH1cclxuICAgICAgICAgICAgICAgICAgICBzdGVwPXswLjF9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2xvY2tlZFNsaWRlcnNbZmllbGQubmFtZV19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibnVtZXJpYy1pbnB1dC1sb2NrLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOdW1lcmljSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNsaWRlci1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2xpZGVyVmFsdWVzW2ZpZWxkLm5hbWVdIHx8IDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBoYW5kbGVWYWx1ZUNoYW5nZShmaWVsZC5uYW1lLCB2YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBtaW49ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXg9ezEwMH1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9ezAuMX1cclxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtsb2NrZWRTbGlkZXJzW2ZpZWxkLm5hbWVdfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibG9jay1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZUxvY2soZmllbGQubmFtZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17bG9ja2VkU2xpZGVyc1tmaWVsZC5uYW1lXSA/IFwiVW5sb2NrXCIgOiBcIkxvY2tcIn1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7bG9ja2VkU2xpZGVyc1tmaWVsZC5uYW1lXSA/IDxMb2NrT3V0bGluZWQgc2l6ZT1cInNcIi8+IDogPFVubG9ja091dGxpbmVkIHNpemU9XCJzXCIvPn1cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgc3VtLWRpc3BsYXkgJHtzdW1PZldlaWdodHMgIT09IDEwMCA/ICdzdW0tZXJyb3InIDogJyd9YH0+XHJcbiAgICAgICAgICAgICAgU3VtIG9mIHdlaWdodHM6IHtzdW1PZldlaWdodHN9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cInJlc2V0LWJ1dHRvblwiIG9uQ2xpY2s9e3Jlc2V0Q2hhbmdlc30+UmVzZXQ8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcHBseS1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17YXBwbHlDaGFuZ2VzfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3N1bU9mV2VpZ2h0cyAhPT0gMTAwfHwgIWlzRGF0YVJlYWR5IHx8IGlzTG9hZGluZ31cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7aXNMb2FkaW5nID8gJ0xvYWRpbmcgRGF0YS4uLicgOiAnQXBwbHknfVxyXG4gICAgICAgICAgICAgICAge2lzTG9hZGluZyAmJiA8TG9hZGluZyBjbGFzc05hbWU9XCJsb2FkaW5nLWljb25cIiAvPn1cclxuXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHBvcnQtYnV0dG9uLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJleHBvcnQtYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17ZXhwb3J0VG9HZW9KU09OfVxyXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWlzRXhwb3J0UmVhZHl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIEV4cG9ydCBHZW9KU09OXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBpZiAoIWlzRHNDb25maWd1cmVkKCkpIHtcclxuICAgIHJldHVybiA8aDM+UGxlYXNlIGNvbmZpZ3VyZSB0aGUgZGF0YSBzb3VyY2UgYW5kIHNlbGVjdCBmaWVsZHMuPC9oMz5cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1zY29yaW5nLXdpZGdldFwiPlxyXG4gICAgICA8RGF0YVNvdXJjZUNvbXBvbmVudFxyXG4gICAgICAgIHVzZURhdGFTb3VyY2U9e3Byb3BzLnVzZURhdGFTb3VyY2VzWzBdfVxyXG4gICAgICAgIG9uRGF0YVNvdXJjZUNyZWF0ZWQ9e3NldERhdGFTb3VyY2V9XHJcbiAgICAgICAgd2lkZ2V0SWQ9e3Byb3BzLmlkfVxyXG4gICAgICAgIHF1ZXJ5Q291bnQ+XHJcbiAgICAgICAge2NyZWF0ZVNsaWRlcnN9XHJcbiAgICAgIDwvRGF0YVNvdXJjZUNvbXBvbmVudD5cclxuICAgICAge3Byb3BzLmNvbmZpZy5tYXBXaWRnZXRJZHMgJiYgcHJvcHMuY29uZmlnLm1hcFdpZGdldElkcy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICA8SmltdU1hcFZpZXdDb21wb25lbnRcclxuICAgICAgICAgIHVzZU1hcFdpZGdldElkPXtwcm9wcy5jb25maWcubWFwV2lkZ2V0SWRzWzBdfVxyXG4gICAgICAgICAgb25BY3RpdmVWaWV3Q2hhbmdlPXtvbkFjdGl2ZVZpZXdDaGFuZ2V9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9