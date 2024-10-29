System.register(["jimu-core","jimu-ui","jimu-arcgis","esri/layers/FeatureLayer","esri/PopupTemplate","esri/smartMapping/renderers/color","esri/smartMapping/symbology/color","jimu-core/react"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_layers_FeatureLayer__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_PopupTemplate__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_smartMapping_renderers_color__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_smartMapping_symbology_color__ = {};
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_layers_FeatureLayer__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_PopupTemplate__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_smartMapping_renderers_color__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_smartMapping_symbology_color__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", { value: true });
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
					__WEBPACK_EXTERNAL_MODULE_esri_PopupTemplate__[key] = module[key];
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
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_react__[key] = module[key];
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
}

.export-container {
  display: flex;
  align-items: center;
}

.export-select {
  margin-right: 8px;
  min-width: 120px;
}

.export-button {
  white-space: nowrap;
}`, "",{"version":3,"sources":["webpack://./../../../git/exb_mapa_ss4a/exb_widgets_mapa_ss4a/widgets/scoring_widget/src/runtime/style.css"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,aAAA;EACA,sBAAA;AACJ;;AAEA;EACI,gBAAA,EAAA,uCAAA;EACA,cAAA;EACA,gBAAA,EAAA,8BAAA;EACA,YAAA;AACJ;;AAEA;EACI,iBAAA;EACA,gBAAA;EACA,mBAAA;AACJ;;AAEA;EACI,UAAA;AACJ;;AAEA;EACI,aAAA;EACA,8BAAA;EACA,gBAAA;AACJ;;AAEA;;EAEI,gBAAA;AACJ;;AAEA,qCAAA;AACA;EACI,mBAAA;AACJ;;AAEA;EACI,aAAA;EACA,sBAAA;EACA,oBAAA;AACJ;;AAEA;EACI,WAAA;EACA,kBAAA;AACJ;;AAEA;EACI,aAAA;EACA,mBAAA;AACJ;;AAEA;EACI,WAAA,EAAA,qBAAA;EACA,iBAAA;AACJ;;AAEA;EACI,YAAA;EACA,gBAAA;EACA,YAAA;EACA,eAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AACJ;;AAEA;EACI,yBAAA;AACJ;;AAEA;EACI,aAAA;EACA,mBAAA;AACJ;;AAEA;EACI,iBAAA;EACA,gBAAA;AACJ;;AAEA;EACI,mBAAA;AACJ","sourcesContent":[".scoring-widget-container {\r\n    padding: 10px;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.scoring-widget-content {\r\n    max-width: 600px; /* Adjust after Yousef config is done */\r\n    margin: 0 auto;\r\n    overflow-y: auto; /* Enable vertical scrolling */\r\n    flex-grow: 1;\r\n}\r\n\r\n.sum-display {\r\n    font-weight: bold;\r\n    margin-top: 20px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.sum-error {\r\n    color: red;\r\n}\r\n\r\n.buttons {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-top: 20px;\r\n}\r\n\r\n.reset-button,\r\n.apply-button {\r\n    min-width: 100px;\r\n}\r\n\r\n/*style for slider and numeric input*/\r\n.slider-container {\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.slider-input-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: stretch;\r\n}\r\n\r\n.slider {\r\n    width: 100%;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.numeric-input-lock-container {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.slider-input {\r\n    width: 80px; /* Adjust as needed */\r\n    margin-right: 5px;\r\n}\r\n\r\n.lock-button {\r\n    padding: 4px;\r\n    background: none;\r\n    border: none;\r\n    cursor: pointer;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.lock-button:hover {\r\n    background-color: #f0f0f0;\r\n}\r\n\r\n.export-container {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.export-select {\r\n    margin-right: 8px;\r\n    min-width: 120px;\r\n}\r\n\r\n.export-button {\r\n    white-space: nowrap;\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "../../../git/exb_mapa_ss4a/exb_widgets_mapa_ss4a/widgets/scoring_widget/src/runtime/config.ts":
/*!*****************************************************************************************************!*\
  !*** ../../../git/exb_mapa_ss4a/exb_widgets_mapa_ss4a/widgets/scoring_widget/src/runtime/config.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   STORAGE_KEY: () => (/* binding */ STORAGE_KEY),
/* harmony export */   getSessionStorageKey: () => (/* binding */ getSessionStorageKey)
/* harmony export */ });
const STORAGE_KEY = (widgetId) => `widget_${widgetId}_savedWeights`;
const getSessionStorageKey = (widgetId) => `session_${STORAGE_KEY(widgetId)}`;


/***/ }),

/***/ "../../../git/exb_mapa_ss4a/exb_widgets_mapa_ss4a/widgets/scoring_widget/src/runtime/dataUtils.ts":
/*!********************************************************************************************************!*\
  !*** ../../../git/exb_mapa_ss4a/exb_widgets_mapa_ss4a/widgets/scoring_widget/src/runtime/dataUtils.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateScore: () => (/* binding */ calculateScore),
/* harmony export */   getFeatureCount: () => (/* binding */ getFeatureCount),
/* harmony export */   queryAllFeatures: () => (/* binding */ queryAllFeatures)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getFeatureCount(dataSource, queryParams) {
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
function queryAllFeatures(dataSource, totalCount, fields) {
    return __awaiter(this, void 0, void 0, function* () {
        const pageSize = 2000;
        function recursiveQuery(start, accumulatedFeatures) {
            return __awaiter(this, void 0, void 0, function* () {
                if (accumulatedFeatures.length >= totalCount) {
                    return accumulatedFeatures;
                }
                const newQueryParams = {
                    outFields: fields,
                    returnGeometry: true,
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
function calculateScore(feature, fieldInfo, sliderValues) {
    let score = 0;
    fieldInfo.forEach(field => {
        score += (feature.attributes[field.name] || 0) * (sliderValues[field.name] / 100);
    });
    return score;
}


/***/ }),

/***/ "../../../git/exb_mapa_ss4a/exb_widgets_mapa_ss4a/widgets/scoring_widget/src/runtime/exportUtils.ts":
/*!**********************************************************************************************************!*\
  !*** ../../../git/exb_mapa_ss4a/exb_widgets_mapa_ss4a/widgets/scoring_widget/src/runtime/exportUtils.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   exportData: () => (/* binding */ exportData),
/* harmony export */   exportToCSV: () => (/* binding */ exportToCSV),
/* harmony export */   exportToGeoJSON: () => (/* binding */ exportToGeoJSON)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jszip'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// exportUtils.ts
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

// Function to export data to GeoJSON
const exportToGeoJSON = (options) => {
    var _a;
    const { clientSideLayer } = options;
    const getCoordinates = (geometry) => {
        switch (geometry.type) {
            case 'point':
                return [geometry.x, geometry.y];
            case 'polyline':
                return geometry.paths;
            case 'polygon':
                return geometry.rings;
            case 'multipoint':
                return geometry.points;
            default:
                console.warn(`Unsupported geometry type: ${geometry.type}`);
                return [];
        }
    };
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
                type: feature.geometry.type.charAt(0).toUpperCase() + feature.geometry.type.slice(1),
                coordinates: getCoordinates(feature.geometry)
            },
            properties: Object.assign({}, feature.attributes)
        }))
    };
    if ((_a = clientSideLayer.source.items[0]) === null || _a === void 0 ? void 0 : _a.attributes.Shape__Length) {
        featureCollection.features.forEach(feature => {
            var _a;
            feature.properties.Shape__Length = (_a = clientSideLayer.source.items.find(item => item.attributes[clientSideLayer.objectIdField] === feature.id)) === null || _a === void 0 ? void 0 : _a.attributes.Shape__Length;
        });
    }
    return JSON.stringify(featureCollection, null, 2);
};
// Function to export data to CSV
const exportToCSV = (options) => {
    const { clientSideLayer } = options;
    const allFields = Object.keys(clientSideLayer.source.items[0].attributes);
    const headers = [
        clientSideLayer.objectIdField,
        'score',
        ...allFields.filter(field => field !== clientSideLayer.objectIdField && field !== 'score')
    ];
    const csvContent = [
        headers.join(','),
        ...clientSideLayer.source.items.map(feature => {
            const row = [
                feature.attributes[clientSideLayer.objectIdField],
                feature.attributes.score,
                ...allFields
                    .filter(field => field !== clientSideLayer.objectIdField && field !== 'score')
                    .map(field => feature.attributes[field]),
            ];
            return row.join(',');
        })
    ].join('\n');
    return csvContent;
};
const createWeightInfoContent = (sliderValues) => {
    let content = "Field,Weight\n";
    for (const [field, weight] of Object.entries(sliderValues)) {
        content += `${field},${weight}\n`;
    }
    return content;
};
// Modified export function to create a zip file
const exportData = (type, options) => __awaiter(void 0, void 0, void 0, function* () {
    if (!options.clientSideLayer) {
        console.error('No client-side layer available for export');
        return;
    }
    try {
        const zip = new Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jszip'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        let mainFileContent;
        let mainFileName;
        if (type === 'spatial') {
            mainFileContent = exportToGeoJSON(options);
            mainFileName = 'composite_score.geojson';
        }
        else if (type === 'csv') {
            mainFileContent = exportToCSV(options);
            mainFileName = 'composite_score.csv';
        }
        else {
            console.error(`Invalid export type: ${type}`);
            return;
        }
        const weightInfoContent = createWeightInfoContent(options.sliderValues);
        zip.file(mainFileName, mainFileContent);
        zip.file('weight_information.csv', weightInfoContent);
        const zipContent = yield zip.generateAsync({ type: 'blob' });
        const url = URL.createObjectURL(zipContent);
        const link = document.createElement('a');
        link.href = url;
        link.download = `mapa_composite_score_${new Date().toISOString()}.zip`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }
    catch (error) {
        console.error(`Error during ${type} export:`, error);
    }
});


/***/ }),

/***/ "../../../git/exb_mapa_ss4a/exb_widgets_mapa_ss4a/widgets/scoring_widget/src/runtime/mapUtils.ts":
/*!*******************************************************************************************************!*\
  !*** ../../../git/exb_mapa_ss4a/exb_widgets_mapa_ss4a/widgets/scoring_widget/src/runtime/mapUtils.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createRenderer: () => (/* binding */ createRenderer),
/* harmony export */   findDataSourceLayer: () => (/* binding */ findDataSourceLayer),
/* harmony export */   removeWidgetLayers: () => (/* binding */ removeWidgetLayers)
/* harmony export */ });
/* harmony import */ var esri_smartMapping_renderers_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! esri/smartMapping/renderers/color */ "esri/smartMapping/renderers/color");
/* harmony import */ var esri_smartMapping_symbology_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! esri/smartMapping/symbology/color */ "esri/smartMapping/symbology/color");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function createRenderer(layer, field, jimuMapView) {
    return __awaiter(this, void 0, void 0, function* () {
        const params = {
            basemapTheme: "light",
            geometryType: layer.geometryType,
            theme: "high-to-low",
            name: "Blue 11"
        };
        const colorScheme = esri_smartMapping_symbology_color__WEBPACK_IMPORTED_MODULE_1__.getSchemeByName(params);
        const colorParams = {
            layer: layer,
            view: jimuMapView.view,
            field: field,
            classificationMethod: "natural-breaks",
            numClasses: 4,
            colorScheme: colorScheme,
        };
        try {
            const { renderer } = yield esri_smartMapping_renderers_color__WEBPACK_IMPORTED_MODULE_0__["default"].createClassBreaksRenderer(colorParams);
            return renderer;
        }
        catch (error) {
            console.error('Error creating renderer:', error);
            return {
                type: "simple",
                symbol: {
                    type: "simple-marker",
                    color: "blue",
                    outline: {
                        color: "white"
                    }
                }
            };
        }
    });
}
function findDataSourceLayer(jimuMapView, dataSourceId) {
    if (!jimuMapView || !jimuMapView.view || !jimuMapView.view.map)
        return null;
    return jimuMapView.view.map.findLayerById(dataSourceId);
}
function removeWidgetLayers(jimuMapView, geometryType) {
    if (jimuMapView) {
        jimuMapView.view.map.layers.forEach(layer => {
            if (layer.title.includes(`Composite Score - ${geometryType}`)) {
                jimuMapView.view.map.remove(layer);
            }
        });
    }
}


/***/ }),

/***/ "../../../git/exb_mapa_ss4a/exb_widgets_mapa_ss4a/widgets/scoring_widget/src/runtime/uiComponents.tsx":
/*!************************************************************************************************************!*\
  !*** ../../../git/exb_mapa_ss4a/exb_widgets_mapa_ss4a/widgets/scoring_widget/src/runtime/uiComponents.tsx ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSliders: () => (/* binding */ createSliders)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_icons_outlined_editor_unlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-icons/outlined/editor/unlock */ "./jimu-icons/outlined/editor/unlock.tsx");
/* harmony import */ var jimu_icons_outlined_editor_lock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-icons/outlined/editor/lock */ "./jimu-icons/outlined/editor/lock.tsx");
// uiComponents.ts




function createSliders(fieldInfo, sliderValues, lockedSliders, handleValueChange, toggleLock) {
    return fieldInfo.map(field => (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { key: field.name, className: "slider-container" },
        react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, null, field.alias),
        react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "slider-input-container" },
            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Slider, { className: "slider", value: sliderValues[field.name] || 0, onChange: (evt) => handleValueChange(field.name, parseFloat(evt.target.value)), min: 0, max: 100, step: 0.1, disabled: lockedSliders[field.name] }),
            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "numeric-input-lock-container" },
                react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.NumericInput, { className: "slider-input", value: sliderValues[field.name] || 0, onChange: (value) => handleValueChange(field.name, value), min: 0, max: 100, step: 0.1, disabled: lockedSliders[field.name] }),
                react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { className: "lock-button", size: "sm", onClick: () => toggleLock(field.name), title: lockedSliders[field.name] ? "Unlock" : "Lock" }, lockedSliders[field.name] ? react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_icons_outlined_editor_lock__WEBPACK_IMPORTED_MODULE_3__.LockOutlined, { size: "s" }) : react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_icons_outlined_editor_unlock__WEBPACK_IMPORTED_MODULE_2__.UnlockOutlined, { size: "s" })))))));
}


/***/ }),

/***/ "../../../git/exb_mapa_ss4a/exb_widgets_mapa_ss4a/widgets/scoring_widget/src/runtime/useSliderValues.ts":
/*!**************************************************************************************************************!*\
  !*** ../../../git/exb_mapa_ss4a/exb_widgets_mapa_ss4a/widgets/scoring_widget/src/runtime/useSliderValues.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSliderValues: () => (/* binding */ useSliderValues)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "../../../git/exb_mapa_ss4a/exb_widgets_mapa_ss4a/widgets/scoring_widget/src/runtime/config.ts");
// useSliderValues.ts


function useSliderValues(widgetId, fieldInfo) {
    const [sliderValues, setSliderValues] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
    const [lockedSliders, setLockedSliders] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
    const [sumOfWeights, setSumOfWeights] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        initializeSliderValues(fieldInfo);
    }, [fieldInfo]);
    const initializeSliderValues = (fields) => {
        let initialValues = {};
        const savedWeights = sessionStorage.getItem((0,_config__WEBPACK_IMPORTED_MODULE_1__.getSessionStorageKey)(widgetId));
        if (savedWeights) {
            try {
                initialValues = JSON.parse(savedWeights);
                fields.forEach(field => {
                    if (!initialValues.hasOwnProperty(field.name)) {
                        initialValues[field.name] = 100 / fields.length;
                    }
                });
            }
            catch (error) {
                console.error('Error parsing saved weights:', error);
                initialValues = {};
            }
        }
        if (Object.keys(initialValues).length === 0) {
            const fieldCount = fields.length;
            const baseValue = Math.floor((100 / fieldCount) * 10) / 10;
            let remainingValue = Number((100 - baseValue * fieldCount).toFixed(1));
            fields.forEach((field, index) => {
                if (index === fields.length - 1) {
                    initialValues[field.name] = Number((baseValue + remainingValue).toFixed(1));
                }
                else {
                    initialValues[field.name] = baseValue;
                }
            });
        }
        setSliderValues(initialValues);
        updateSumOfWeights(initialValues);
    };
    const updateSumOfWeights = (values) => {
        const sum = Object.values(values).reduce((acc, val) => acc + val, 0);
        setSumOfWeights(Number(sum.toFixed(1)));
    };
    const handleValueChange = (field, value) => {
        const roundedValue = Number(value.toFixed(1));
        const oldValue = sliderValues[field];
        const difference = roundedValue - oldValue;
        const newSliderValues = Object.assign(Object.assign({}, sliderValues), { [field]: roundedValue });
        const unlockedFields = Object.keys(newSliderValues).filter(f => f !== field && !lockedSliders[f]);
        const adjustmentPerField = Number((difference / unlockedFields.length).toFixed(1));
        unlockedFields.forEach(f => {
            newSliderValues[f] = Number((newSliderValues[f] - adjustmentPerField).toFixed(1));
        });
        const sum = Object.values(newSliderValues).reduce((acc, val) => acc + val, 0);
        if (unlockedFields.length > 0) {
            const lastField = unlockedFields[unlockedFields.length - 1];
            newSliderValues[lastField] = Number((newSliderValues[lastField] + (100 - sum)).toFixed(1));
        }
        setSliderValues(newSliderValues);
        updateSumOfWeights(newSliderValues);
    };
    const toggleLock = (field) => {
        setLockedSliders(prev => (Object.assign(Object.assign({}, prev), { [field]: !prev[field] })));
    };
    const resetSliders = () => {
        initializeSliderValues(fieldInfo);
        setLockedSliders({});
    };
    return {
        sliderValues,
        lockedSliders,
        sumOfWeights,
        handleValueChange,
        toggleLock,
        resetSliders
    };
}


/***/ }),

/***/ "esri/PopupTemplate":
/*!*************************************!*\
  !*** external "esri/PopupTemplate" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_PopupTemplate__;

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

/***/ "react":
/*!**********************************!*\
  !*** external "jimu-core/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

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
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var esri_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! esri/layers/FeatureLayer */ "esri/layers/FeatureLayer");
/* harmony import */ var esri_PopupTemplate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! esri/PopupTemplate */ "esri/PopupTemplate");
/* harmony import */ var _dataUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dataUtils */ "../../../git/exb_mapa_ss4a/exb_widgets_mapa_ss4a/widgets/scoring_widget/src/runtime/dataUtils.ts");
/* harmony import */ var _mapUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mapUtils */ "../../../git/exb_mapa_ss4a/exb_widgets_mapa_ss4a/widgets/scoring_widget/src/runtime/mapUtils.ts");
/* harmony import */ var _uiComponents__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./uiComponents */ "../../../git/exb_mapa_ss4a/exb_widgets_mapa_ss4a/widgets/scoring_widget/src/runtime/uiComponents.tsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./config */ "../../../git/exb_mapa_ss4a/exb_widgets_mapa_ss4a/widgets/scoring_widget/src/runtime/config.ts");
/* harmony import */ var _useSliderValues__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./useSliderValues */ "../../../git/exb_mapa_ss4a/exb_widgets_mapa_ss4a/widgets/scoring_widget/src/runtime/useSliderValues.ts");
/* harmony import */ var _exportUtils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./exportUtils */ "../../../git/exb_mapa_ss4a/exb_widgets_mapa_ss4a/widgets/scoring_widget/src/runtime/exportUtils.ts");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./style.css */ "../../../git/exb_mapa_ss4a/exb_widgets_mapa_ss4a/widgets/scoring_widget/src/runtime/style.css");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};












const { useState, useEffect } = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React;
function Widget(props) {
    var _a, _b, _c;
    const [dataSource, setDataSource] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [records, setRecords] = useState([]);
    const [clientSideLayer, setClientSideLayer] = useState(null);
    const [isExportReady, setIsExportReady] = useState(false);
    const [jimuMapView, setJimuMapView] = useState(null);
    const [fieldInfo, setFieldInfo] = useState([]);
    const [isDataReady, setIsDataReady] = useState(false);
    const [geometryType, setGeometryType] = useState(null);
    const [toggledLayerId, setToggledLayerId] = useState(null);
    const [exportType, setExportType] = useState('spatial');
    const [showExportOptions, setShowExportOptions] = useState(false);
    const { sliderValues, lockedSliders, sumOfWeights, handleValueChange, toggleLock, resetSliders } = (0,_useSliderValues__WEBPACK_IMPORTED_MODULE_9__.useSliderValues)(props.id, fieldInfo);
    const queryParams = ((_c = (_b = (_a = props.useDataSources) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.fields) === null || _c === void 0 ? void 0 : _c.length) > 0
        ? { outFields: props.useDataSources[0].fields }
        : {};
    useEffect(() => {
        return () => {
            (0,_mapUtils__WEBPACK_IMPORTED_MODULE_6__.removeWidgetLayers)(jimuMapView, geometryType);
        };
    }, []);
    useEffect(() => {
        if (dataSource) {
            setIsLoading(true);
            setIsDataReady(false);
            if (dataSource.layer) {
                setGeometryType(dataSource.layer.geometryType);
            }
            (0,_dataUtils__WEBPACK_IMPORTED_MODULE_5__.getFeatureCount)(dataSource, queryParams).then(totalCount => {
                // queryAllFeatures(dataSource, totalCount, props.useDataSources[0].fields).then(features => {
                (0,_dataUtils__WEBPACK_IMPORTED_MODULE_5__.queryAllFeatures)(dataSource, totalCount, ['*']).then(features => {
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
    useEffect(() => {
        if (dataSource) {
            const fields = dataSource.getSchema().fields;
            const selectedFields = props.useDataSources[0].fields;
            const newFieldInfo = selectedFields.map(fieldName => ({
                name: fieldName,
                alias: fields[fieldName].alias || fieldName
            }));
            setFieldInfo(newFieldInfo);
        }
    }, [dataSource]);
    const onActiveViewChange = (jmv) => {
        if (jmv) {
            setJimuMapView(jmv);
        }
    };
    const isDsConfigured = () => {
        return props.useDataSources &&
            props.useDataSources.length === 1 &&
            props.useDataSources[0].fields &&
            props.useDataSources[0].fields.length > 0;
    };
    const resetChanges = () => {
        resetSliders();
        if (jimuMapView && jimuMapView.view) {
            if (clientSideLayer) {
                jimuMapView.view.map.remove(clientSideLayer);
                setClientSideLayer(null);
            }
            const sourceLayer = (0,_mapUtils__WEBPACK_IMPORTED_MODULE_6__.findDataSourceLayer)(jimuMapView, dataSource.id);
            if (sourceLayer) {
                sourceLayer.visible = true;
                console.log(`Toggled on data source layer: ${sourceLayer.id}`);
            }
            else {
                console.warn('Data source layer not found in the map');
            }
            (0,_mapUtils__WEBPACK_IMPORTED_MODULE_6__.removeWidgetLayers)(jimuMapView, geometryType);
        }
        else {
            console.warn('JimuMapView is not available');
        }
        setToggledLayerId(null);
        setIsExportReady(false);
        localStorage.removeItem(STORAGE_KEY(props.id));
    };
    // Export functionality is handled in exportUtils.ts
    const handleExport = () => {
        if (!clientSideLayer) {
            console.error('No client-side layer available for export');
            return;
        }
        const exportOptions = {
            clientSideLayer,
            sliderValues,
            fields: props.useDataSources[0].fields
        };
        (0,_exportUtils__WEBPACK_IMPORTED_MODULE_10__.exportData)(exportType, exportOptions);
    };
    const handleExportClick = () => {
        setShowExportOptions(true);
    };
    const handleExportTypeSelect = (type) => {
        if (!clientSideLayer) {
            console.error('No client-side layer available for export');
            return;
        }
        const exportOptions = {
            clientSideLayer,
            sliderValues
        };
        // Call exportData with the selected type
        (0,_exportUtils__WEBPACK_IMPORTED_MODULE_10__.exportData)(type, exportOptions);
        setShowExportOptions(false);
    };
    const applyChanges = () => __awaiter(this, void 0, void 0, function* () {
        if (!dataSource || !jimuMapView || !geometryType) {
            console.error('Data source or map view is not available or geometry not available');
            return;
        }
        setIsLoading(true);
        const new_records = JSON.parse(records).map(record => {
            const { geometry, attributes } = record;
            record.geometry.type = geometryType;
            return {
                geometry,
                attributes: Object.assign(Object.assign({}, attributes), { score: (0,_dataUtils__WEBPACK_IMPORTED_MODULE_5__.calculateScore)(record, fieldInfo, sliderValues) })
            };
        });
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
        const popupTemplate = new esri_PopupTemplate__WEBPACK_IMPORTED_MODULE_4__["default"]({
            title: "Feature Information",
            content: [
                {
                    type: "fields",
                    fieldInfos: [
                        {
                            fieldName: "score",
                            label: "Composite Score",
                            format: {
                                places: 2,
                                digitSeparator: true
                            }
                        },
                        ...props.useDataSources[0].fields.map(fieldName => ({
                            fieldName: fieldName,
                            label: fieldName,
                            format: {
                                places: 2,
                                digitSeparator: true
                            }
                        }))
                    ]
                }
            ]
        });
        const layer = new esri_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_3__["default"]({
            title: `Composite Score - ${geometryType}`,
            source: new_records,
            objectIdField: "OBJECTID",
            geometryType: geometryType,
            spatialReference: { wkid: 102100 },
            popupEnabled: true,
            popupTemplate: popupTemplate,
            legendEnabled: true,
            extent: jimuMapView.view.extent,
            fields: fields,
        });
        layer.renderer = yield (0,_mapUtils__WEBPACK_IMPORTED_MODULE_6__.createRenderer)(layer, "score", jimuMapView);
        (0,_mapUtils__WEBPACK_IMPORTED_MODULE_6__.removeWidgetLayers)(jimuMapView, geometryType);
        sessionStorage.setItem((0,_config__WEBPACK_IMPORTED_MODULE_8__.getSessionStorageKey)(props.id), JSON.stringify(sliderValues));
        jimuMapView.view.map.add(layer);
        const sourceLayer = (0,_mapUtils__WEBPACK_IMPORTED_MODULE_6__.findDataSourceLayer)(jimuMapView, dataSource.id);
        if (sourceLayer) {
            sourceLayer.visible = false;
            setToggledLayerId(sourceLayer.id);
        }
        setClientSideLayer(layer);
        setIsExportReady(true);
        setIsLoading(false);
    });
    const renderWidget = (ds, info) => {
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "widget-scoring-widget" },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "scoring-widget-container" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "scoring-widget-content" },
                    (0,_uiComponents__WEBPACK_IMPORTED_MODULE_7__.createSliders)(fieldInfo, sliderValues, lockedSliders, handleValueChange, toggleLock),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: `sum-display ${sumOfWeights !== 100 ? 'sum-error' : ''}` },
                        "Sum of weights: ",
                        sumOfWeights),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "buttons" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { className: "reset-button", onClick: resetChanges }, "Reset"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { className: "apply-button", onClick: applyChanges, disabled: sumOfWeights !== 100 || !isDataReady || isLoading },
                            isLoading ? 'Loading Data...' : 'Apply',
                            isLoading && jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Loading, { className: "loading-icon" })),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Dropdown, { isOpen: showExportOptions && isExportReady, toggle: () => setShowExportOptions(!showExportOptions) },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DropdownButton, { className: "export-button", disabled: !isExportReady, onClick: handleExportClick }, "Export"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DropdownMenu, null,
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DropdownItem, { onClick: () => handleExportTypeSelect('spatial') }, "Spatial File"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DropdownItem, { onClick: () => handleExportTypeSelect('csv') }, "CSV"))))))));
    };
    if (!isDsConfigured()) {
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("h3", null, "Please configure the data source and select fields.");
    }
    const onFilterChange = (query) => {
        console.log('onFilterChange', query);
    };
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "widget-scoring-widget" },
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceComponent, { useDataSource: props.useDataSources[0], onDataSourceCreated: setDataSource, widgetId: props.id, queryCount: true, onQueryRequired: onFilterChange }, renderWidget),
        props.config.mapWidgetIds && props.config.mapWidgetIds.length > 0 && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__.JimuMapViewComponent, { useMapWidgetId: props.config.mapWidgetIds[0], onActiveViewChange: onActiveViewChange }))));
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9zY29yaW5nX3dpZGdldC9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDK0o7QUFDakI7QUFDOUksOEJBQThCLHNIQUEyQixDQUFDLCtIQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0tBQWdLLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxzQkFBc0IsVUFBVSxzQkFBc0IsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sV0FBVyxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUsscUJBQXFCLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxX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QUFjLENBQUMsQ0FBQyxDQUFDLEVBQ3RDLG1CQUFtQixFQUFFLGFBQWEsRUFDbEMsUUFBUSxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQ2xCLFVBQVUsUUFDVixlQUFlLEVBQUUsY0FBYyxJQUU5QixZQUFZLENBQ087UUFDckIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUNwRSwyREFBQyw2REFBb0IsSUFDbkIsY0FBYyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUM1QyxrQkFBa0IsRUFBRSxrQkFBa0IsR0FDdEMsQ0FDSCxDQUNHLENBQ1AsQ0FBQztBQUNKLENBQUM7QUFFTyxTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi4vLi4vLi4vZ2l0L2V4Yl9tYXBhX3NzNGEvZXhiX3dpZGdldHNfbWFwYV9zczRhL3dpZGdldHMvc2NvcmluZ193aWRnZXQvc3JjL3J1bnRpbWUvc3R5bGUuY3NzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4uLy4uLy4uL2dpdC9leGJfbWFwYV9zczRhL2V4Yl93aWRnZXRzX21hcGFfc3M0YS93aWRnZXRzL3Njb3Jpbmdfd2lkZ2V0L3NyYy9ydW50aW1lL3N0eWxlLmNzcz9lZDExIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvc3ZnL291dGxpbmVkL2VkaXRvci9sb2NrLnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1pY29ucy9zdmcvb3V0bGluZWQvZWRpdG9yL3VubG9jay5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvb3V0bGluZWQvZWRpdG9yL2xvY2sudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL291dGxpbmVkL2VkaXRvci91bmxvY2sudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi4vLi4vLi4vZ2l0L2V4Yl9tYXBhX3NzNGEvZXhiX3dpZGdldHNfbWFwYV9zczRhL3dpZGdldHMvc2NvcmluZ193aWRnZXQvc3JjL3J1bnRpbWUvY29uZmlnLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi4vLi4vLi4vZ2l0L2V4Yl9tYXBhX3NzNGEvZXhiX3dpZGdldHNfbWFwYV9zczRhL3dpZGdldHMvc2NvcmluZ193aWRnZXQvc3JjL3J1bnRpbWUvZGF0YVV0aWxzLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi4vLi4vLi4vZ2l0L2V4Yl9tYXBhX3NzNGEvZXhiX3dpZGdldHNfbWFwYV9zczRhL3dpZGdldHMvc2NvcmluZ193aWRnZXQvc3JjL3J1bnRpbWUvZXhwb3J0VXRpbHMudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uLi8uLi8uLi9naXQvZXhiX21hcGFfc3M0YS9leGJfd2lkZ2V0c19tYXBhX3NzNGEvd2lkZ2V0cy9zY29yaW5nX3dpZGdldC9zcmMvcnVudGltZS9tYXBVdGlscy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4uLy4uLy4uL2dpdC9leGJfbWFwYV9zczRhL2V4Yl93aWRnZXRzX21hcGFfc3M0YS93aWRnZXRzL3Njb3Jpbmdfd2lkZ2V0L3NyYy9ydW50aW1lL3VpQ29tcG9uZW50cy50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uLi8uLi8uLi9naXQvZXhiX21hcGFfc3M0YS9leGJfd2lkZ2V0c19tYXBhX3NzNGEvd2lkZ2V0cy9zY29yaW5nX3dpZGdldC9zcmMvcnVudGltZS91c2VTbGlkZXJWYWx1ZXMudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL1BvcHVwVGVtcGxhdGVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9zbWFydE1hcHBpbmcvcmVuZGVyZXJzL2NvbG9yXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL3NtYXJ0TWFwcGluZy9zeW1ib2xvZ3kvY29sb3JcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZS9yZWFjdFwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi4vLi4vLi4vZ2l0L2V4Yl9tYXBhX3NzNGEvZXhiX3dpZGdldHNfbWFwYV9zczRhL3dpZGdldHMvc2NvcmluZ193aWRnZXQvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vZXhiL0FyY0dJU0V4cGVyaWVuY2VCdWlsZGVyL2NsaWVudC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vZXhiL0FyY0dJU0V4cGVyaWVuY2VCdWlsZGVyL2NsaWVudC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zY29yaW5nLXdpZGdldC1jb250YWluZXIge1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uc2NvcmluZy13aWRnZXQtY29udGVudCB7XG4gIG1heC13aWR0aDogNjAwcHg7IC8qIEFkanVzdCBhZnRlciBZb3VzZWYgY29uZmlnIGlzIGRvbmUgKi9cbiAgbWFyZ2luOiAwIGF1dG87XG4gIG92ZXJmbG93LXk6IGF1dG87IC8qIEVuYWJsZSB2ZXJ0aWNhbCBzY3JvbGxpbmcgKi9cbiAgZmxleC1ncm93OiAxO1xufVxuXG4uc3VtLWRpc3BsYXkge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLnN1bS1lcnJvciB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4ucmVzZXQtYnV0dG9uLFxuLmFwcGx5LWJ1dHRvbiB7XG4gIG1pbi13aWR0aDogMTAwcHg7XG59XG5cbi8qc3R5bGUgZm9yIHNsaWRlciBhbmQgbnVtZXJpYyBpbnB1dCovXG4uc2xpZGVyLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5zbGlkZXItaW5wdXQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG59XG5cbi5zbGlkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4ubnVtZXJpYy1pbnB1dC1sb2NrLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zbGlkZXItaW5wdXQge1xuICB3aWR0aDogODBweDsgLyogQWRqdXN0IGFzIG5lZWRlZCAqL1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmxvY2stYnV0dG9uIHtcbiAgcGFkZGluZzogNHB4O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5sb2NrLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG59XG5cbi5leHBvcnQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmV4cG9ydC1zZWxlY3Qge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgbWluLXdpZHRoOiAxMjBweDtcbn1cblxuLmV4cG9ydC1idXR0b24ge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vLi4vLi4vLi4vZ2l0L2V4Yl9tYXBhX3NzNGEvZXhiX3dpZGdldHNfbWFwYV9zczRhL3dpZGdldHMvc2NvcmluZ193aWRnZXQvc3JjL3J1bnRpbWUvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUEsRUFBQSx1Q0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQSxFQUFBLDhCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBOztFQUVJLGdCQUFBO0FBQ0o7O0FBRUEscUNBQUE7QUFDQTtFQUNJLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUEsRUFBQSxxQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zY29yaW5nLXdpZGdldC1jb250YWluZXIge1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uc2NvcmluZy13aWRnZXQtY29udGVudCB7XFxyXFxuICAgIG1heC13aWR0aDogNjAwcHg7IC8qIEFkanVzdCBhZnRlciBZb3VzZWYgY29uZmlnIGlzIGRvbmUgKi9cXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87IC8qIEVuYWJsZSB2ZXJ0aWNhbCBzY3JvbGxpbmcgKi9cXHJcXG4gICAgZmxleC1ncm93OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VtLWRpc3BsYXkge1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN1bS1lcnJvciB7XFxyXFxuICAgIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi5idXR0b25zIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXQtYnV0dG9uLFxcclxcbi5hcHBseS1idXR0b24ge1xcclxcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKnN0eWxlIGZvciBzbGlkZXIgYW5kIG51bWVyaWMgaW5wdXQqL1xcclxcbi5zbGlkZXItY29udGFpbmVyIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlci1pbnB1dC1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5udW1lcmljLWlucHV0LWxvY2stY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlci1pbnB1dCB7XFxyXFxuICAgIHdpZHRoOiA4MHB4OyAvKiBBZGp1c3QgYXMgbmVlZGVkICovXFxyXFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9jay1idXR0b24ge1xcclxcbiAgICBwYWRkaW5nOiA0cHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxvY2stYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcXHJcXG59XFxyXFxuXFxyXFxuLmV4cG9ydC1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZXhwb3J0LXNlbGVjdCB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xcclxcbiAgICBtaW4td2lkdGg6IDEyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZXhwb3J0LWJ1dHRvbiB7XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vZXhiL0FyY0dJU0V4cGVyaWVuY2VCdWlsZGVyL2NsaWVudC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9leGIvQXJjR0lTRXhwZXJpZW5jZUJ1aWxkZXIvY2xpZW50L25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9leGIvQXJjR0lTRXhwZXJpZW5jZUJ1aWxkZXIvY2xpZW50L25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vZXhiL0FyY0dJU0V4cGVyaWVuY2VCdWlsZGVyL2NsaWVudC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9leGIvQXJjR0lTRXhwZXJpZW5jZUJ1aWxkZXIvY2xpZW50L25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9leGIvQXJjR0lTRXhwZXJpZW5jZUJ1aWxkZXIvY2xpZW50L25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9leGIvQXJjR0lTRXhwZXJpZW5jZUJ1aWxkZXIvY2xpZW50L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9leGIvQXJjR0lTRXhwZXJpZW5jZUJ1aWxkZXIvY2xpZW50L25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzJdIS4uLy4uLy4uLy4uLy4uLy4uLy4uL2V4Yi9BcmNHSVNFeHBlcmllbmNlQnVpbGRlci9jbGllbnQvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVszXSEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL2V4Yi9BcmNHSVNFeHBlcmllbmNlQnVpbGRlci9jbGllbnQvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzFdIS4uLy4uLy4uLy4uLy4uLy4uLy4uL2V4Yi9BcmNHSVNFeHBlcmllbmNlQnVpbGRlci9jbGllbnQvbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMl0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vZXhiL0FyY0dJU0V4cGVyaWVuY2VCdWlsZGVyL2NsaWVudC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzNdIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCI+PHBhdGggZmlsbD1cXFwiIzAwMFxcXCIgZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNNy41IDBBMy41IDMuNSAwIDAgMSAxMSAzLjVWNmgxYTEgMSAwIDAgMSAxIDF2OGExIDEgMCAwIDEtMSAxSDNhMSAxIDAgMCAxLTEtMVY3YTEgMSAwIDAgMSAxLTFoMVYzLjVBMy41IDMuNSAwIDAgMSA3LjUgME01IDZoNVYzLjVhMi41IDIuNSAwIDAgMC0yLjMzNi0yLjQ5NUw3LjUgMWEyLjUgMi41IDAgMCAwLTIuNDk1IDIuMzM2TDUgMy41em02IDFIM3Y4aDlWN3ptLTMuNSA1YTEuNSAxLjUgMCAxIDAgMC0zIDEuNSAxLjUgMCAwIDAgMCAzXFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgZmlsbD1cXFwibm9uZVxcXCIgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIj48cGF0aCBmaWxsPVxcXCIjMDAwXFxcIiBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk0xNiAzLjVhMy41IDMuNSAwIDEgMC03IDBWNkgzYTEgMSAwIDAgMC0xIDF2OGExIDEgMCAwIDAgMSAxaDlhMSAxIDAgMCAwIDEtMVY3YTEgMSAwIDAgMC0xLTFoLTJWMy41bC4wMDUtLjE2NEEyLjUgMi41IDAgMCAxIDEyLjUgMWwuMTY0LjAwNUEyLjUgMi41IDAgMCAxIDE1IDMuNWEuNS41IDAgMCAwIDEgME05IDdIM3Y4aDlWN2gtMXptLTEuNSA1YTEuNSAxLjUgMCAxIDAgMC0zIDEuNSAxLjUgMCAwIDAgMCAzXFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiPjwvcGF0aD48L3N2Zz5cIiIsImltcG9ydCB7IFJlYWN0LCBjbGFzc05hbWVzIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyB0eXBlIFNWR0NvbXBvbmVudFByb3BzIH0gZnJvbSAnamltdS11aSdcclxuaW1wb3J0IHNyYyBmcm9tICcuLi8uLi9zdmcvb3V0bGluZWQvZWRpdG9yL2xvY2suc3ZnJ1xyXG5cclxuZXhwb3J0IGNvbnN0IExvY2tPdXRsaW5lZCA9IChwcm9wczogU1ZHQ29tcG9uZW50UHJvcHMpID0+IHtcclxuICBjb25zdCBTVkcgPSB3aW5kb3cuU1ZHXHJcbiAgY29uc3QgeyBjbGFzc05hbWUsIC4uLm90aGVycyB9ID0gcHJvcHNcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoJ2ppbXUtaWNvbiBqaW11LWljb24tY29tcG9uZW50JywgY2xhc3NOYW1lKVxyXG4gIGlmICghU1ZHKSByZXR1cm4gPHN2ZyBjbGFzc05hbWU9e2NsYXNzZXN9IHsuLi5vdGhlcnMgYXMgYW55fSAvPlxyXG4gIHJldHVybiA8U1ZHIGNsYXNzTmFtZT17Y2xhc3Nlc30gc3JjPXtzcmN9IHsuLi5vdGhlcnN9IC8+XHJcbn1cclxuIiwiaW1wb3J0IHsgUmVhY3QsIGNsYXNzTmFtZXMgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IHR5cGUgU1ZHQ29tcG9uZW50UHJvcHMgfSBmcm9tICdqaW11LXVpJ1xyXG5pbXBvcnQgc3JjIGZyb20gJy4uLy4uL3N2Zy9vdXRsaW5lZC9lZGl0b3IvdW5sb2NrLnN2ZydcclxuXHJcbmV4cG9ydCBjb25zdCBVbmxvY2tPdXRsaW5lZCA9IChwcm9wczogU1ZHQ29tcG9uZW50UHJvcHMpID0+IHtcclxuICBjb25zdCBTVkcgPSB3aW5kb3cuU1ZHXHJcbiAgY29uc3QgeyBjbGFzc05hbWUsIC4uLm90aGVycyB9ID0gcHJvcHNcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoJ2ppbXUtaWNvbiBqaW11LWljb24tY29tcG9uZW50JywgY2xhc3NOYW1lKVxyXG4gIGlmICghU1ZHKSByZXR1cm4gPHN2ZyBjbGFzc05hbWU9e2NsYXNzZXN9IHsuLi5vdGhlcnMgYXMgYW55fSAvPlxyXG4gIHJldHVybiA8U1ZHIGNsYXNzTmFtZT17Y2xhc3Nlc30gc3JjPXtzcmN9IHsuLi5vdGhlcnN9IC8+XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IFNUT1JBR0VfS0VZID0gKHdpZGdldElkOiBzdHJpbmcpID0+IGB3aWRnZXRfJHt3aWRnZXRJZH1fc2F2ZWRXZWlnaHRzYDtcclxuZXhwb3J0IGNvbnN0IGdldFNlc3Npb25TdG9yYWdlS2V5ID0gKHdpZGdldElkOiBzdHJpbmcpID0+IGBzZXNzaW9uXyR7U1RPUkFHRV9LRVkod2lkZ2V0SWQpfWA7XHJcbiIsIi8vIGRhdGFVdGlscy50c1xyXG5pbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnamltdS1jb3JlJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRGZWF0dXJlQ291bnQoZGF0YVNvdXJjZTogRGF0YVNvdXJjZSwgcXVlcnlQYXJhbXM6IGFueSk6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgdHJ5IHtcclxuICAgIHJldHVybiBhd2FpdCBkYXRhU291cmNlLnF1ZXJ5Q291bnQocXVlcnlQYXJhbXMpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBnZXR0aW5nIGZlYXR1cmUgY291bnQ6JywgZXJyb3IpO1xyXG4gICAgdGhyb3cgZXJyb3I7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcXVlcnlBbGxGZWF0dXJlcyhkYXRhU291cmNlOiBEYXRhU291cmNlLCB0b3RhbENvdW50OiBudW1iZXIsIGZpZWxkczogc3RyaW5nW10pOiBQcm9taXNlPGFueVtdPiB7XHJcbiAgY29uc3QgcGFnZVNpemUgPSAyMDAwO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiByZWN1cnNpdmVRdWVyeShzdGFydDogbnVtYmVyLCBhY2N1bXVsYXRlZEZlYXR1cmVzOiBhbnlbXSk6IFByb21pc2U8YW55W10+IHtcclxuICAgIGlmIChhY2N1bXVsYXRlZEZlYXR1cmVzLmxlbmd0aCA+PSB0b3RhbENvdW50KSB7XHJcbiAgICAgIHJldHVybiBhY2N1bXVsYXRlZEZlYXR1cmVzO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5ld1F1ZXJ5UGFyYW1zID0ge1xyXG4gICAgICBvdXRGaWVsZHM6IGZpZWxkcyxcclxuICAgICAgcmV0dXJuR2VvbWV0cnk6IHRydWUsXHJcbiAgICAgIHN0YXJ0OiBzdGFydCxcclxuICAgICAgbnVtOiBwYWdlU2l6ZVxyXG4gICAgfTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBmZWF0dXJlc1Jlc3VsdCA9IGF3YWl0IGRhdGFTb3VyY2UucXVlcnkobmV3UXVlcnlQYXJhbXMpO1xyXG4gICAgICBjb25zdCBjdXJyZW50RmVhdHVyZXMgPSBmZWF0dXJlc1Jlc3VsdC5yZWNvcmRzLm1hcChyZWNvcmQgPT4gcmVjb3JkLmZlYXR1cmUpO1xyXG4gICAgICBjb25zdCBuZXdBY2N1bXVsYXRlZEZlYXR1cmVzID0gWy4uLmFjY3VtdWxhdGVkRmVhdHVyZXMsIC4uLmN1cnJlbnRGZWF0dXJlc107XHJcblxyXG4gICAgICBpZiAoZmVhdHVyZXNSZXN1bHQucmVjb3Jkcy5sZW5ndGggPT09IHBhZ2VTaXplKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlY3Vyc2l2ZVF1ZXJ5KHN0YXJ0ICsgcGFnZVNpemUsIG5ld0FjY3VtdWxhdGVkRmVhdHVyZXMpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBuZXdBY2N1bXVsYXRlZEZlYXR1cmVzO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBxdWVyeWluZyBmZWF0dXJlczonLCBlcnJvcik7XHJcbiAgICAgIHRocm93IGVycm9yO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJlY3Vyc2l2ZVF1ZXJ5KDAsIFtdKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZVNjb3JlKGZlYXR1cmU6IF9fR1JBUEhJQ19UWVBFX18sIGZpZWxkSW5mbzogYW55W10sIHNsaWRlclZhbHVlczogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSk6IG51bWJlciB7XHJcbiAgbGV0IHNjb3JlID0gMDtcclxuICBmaWVsZEluZm8uZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICBzY29yZSArPSAoZmVhdHVyZS5hdHRyaWJ1dGVzW2ZpZWxkLm5hbWVdIHx8IDApICogKHNsaWRlclZhbHVlc1tmaWVsZC5uYW1lXSAvIDEwMCk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHNjb3JlO1xyXG59XHJcbiIsIi8vIGV4cG9ydFV0aWxzLnRzXHJcblxyXG5pbXBvcnQgRmVhdHVyZUxheWVyIGZyb20gJ2VzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllcic7XHJcbmltcG9ydCBKU1ppcCBmcm9tICdqc3ppcCc7XHJcblxyXG5pbnRlcmZhY2UgRXhwb3J0T3B0aW9ucyB7XHJcbiAgY2xpZW50U2lkZUxheWVyOiBGZWF0dXJlTGF5ZXI7XHJcbiAgc2xpZGVyVmFsdWVzOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9O1xyXG59XHJcblxyXG4vLyBGdW5jdGlvbiB0byBleHBvcnQgZGF0YSB0byBHZW9KU09OXHJcbmV4cG9ydCBjb25zdCBleHBvcnRUb0dlb0pTT04gPSAob3B0aW9uczogRXhwb3J0T3B0aW9ucyk6IHN0cmluZyA9PiB7XHJcbiAgY29uc3QgeyBjbGllbnRTaWRlTGF5ZXIgfSA9IG9wdGlvbnM7XHJcblxyXG4gIGNvbnN0IGdldENvb3JkaW5hdGVzID0gKGdlb21ldHJ5KSA9PiB7XHJcbiAgICBzd2l0Y2ggKGdlb21ldHJ5LnR5cGUpIHtcclxuICAgICAgY2FzZSAncG9pbnQnOlxyXG4gICAgICAgIHJldHVybiBbZ2VvbWV0cnkueCwgZ2VvbWV0cnkueV07XHJcbiAgICAgIGNhc2UgJ3BvbHlsaW5lJzpcclxuICAgICAgICByZXR1cm4gZ2VvbWV0cnkucGF0aHM7XHJcbiAgICAgIGNhc2UgJ3BvbHlnb24nOlxyXG4gICAgICAgIHJldHVybiBnZW9tZXRyeS5yaW5ncztcclxuICAgICAgY2FzZSAnbXVsdGlwb2ludCc6XHJcbiAgICAgICAgcmV0dXJuIGdlb21ldHJ5LnBvaW50cztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBjb25zb2xlLndhcm4oYFVuc3VwcG9ydGVkIGdlb21ldHJ5IHR5cGU6ICR7Z2VvbWV0cnkudHlwZX1gKTtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmVhdHVyZUNvbGxlY3Rpb24gPSB7XHJcbiAgICB0eXBlOiAnRmVhdHVyZUNvbGxlY3Rpb24nLFxyXG4gICAgY3JzOiB7XHJcbiAgICAgIHR5cGU6ICduYW1lJyxcclxuICAgICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIG5hbWU6IGBFUFNHOiR7Y2xpZW50U2lkZUxheWVyLnNwYXRpYWxSZWZlcmVuY2Uud2tpZH1gXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBmZWF0dXJlczogY2xpZW50U2lkZUxheWVyLnNvdXJjZS5pdGVtcy5tYXAoZmVhdHVyZSA9PiAoe1xyXG4gICAgICB0eXBlOiAnRmVhdHVyZScsXHJcbiAgICAgIGlkOiBmZWF0dXJlLmF0dHJpYnV0ZXNbY2xpZW50U2lkZUxheWVyLm9iamVjdElkRmllbGRdLFxyXG4gICAgICBnZW9tZXRyeToge1xyXG4gICAgICAgIHR5cGU6IGZlYXR1cmUuZ2VvbWV0cnkudHlwZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGZlYXR1cmUuZ2VvbWV0cnkudHlwZS5zbGljZSgxKSxcclxuICAgICAgICBjb29yZGluYXRlczogZ2V0Q29vcmRpbmF0ZXMoZmVhdHVyZS5nZW9tZXRyeSlcclxuICAgICAgfSxcclxuICAgICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC4uLmZlYXR1cmUuYXR0cmlidXRlc1xyXG4gICAgICB9XHJcbiAgICB9KSlcclxuICB9O1xyXG5cclxuICBpZiAoY2xpZW50U2lkZUxheWVyLnNvdXJjZS5pdGVtc1swXT8uYXR0cmlidXRlcy5TaGFwZV9fTGVuZ3RoKSB7XHJcbiAgICBmZWF0dXJlQ29sbGVjdGlvbi5mZWF0dXJlcy5mb3JFYWNoKGZlYXR1cmUgPT4ge1xyXG4gICAgICBmZWF0dXJlLnByb3BlcnRpZXMuU2hhcGVfX0xlbmd0aCA9IGNsaWVudFNpZGVMYXllci5zb3VyY2UuaXRlbXMuZmluZChcclxuICAgICAgICBpdGVtID0+IGl0ZW0uYXR0cmlidXRlc1tjbGllbnRTaWRlTGF5ZXIub2JqZWN0SWRGaWVsZF0gPT09IGZlYXR1cmUuaWRcclxuICAgICAgKT8uYXR0cmlidXRlcy5TaGFwZV9fTGVuZ3RoO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZmVhdHVyZUNvbGxlY3Rpb24sIG51bGwsIDIpO1xyXG59O1xyXG5cclxuLy8gRnVuY3Rpb24gdG8gZXhwb3J0IGRhdGEgdG8gQ1NWXHJcbmV4cG9ydCBjb25zdCBleHBvcnRUb0NTViA9IChvcHRpb25zOiBFeHBvcnRPcHRpb25zKTogc3RyaW5nID0+IHtcclxuICBjb25zdCB7IGNsaWVudFNpZGVMYXllciB9ID0gb3B0aW9ucztcclxuICBjb25zdCBhbGxGaWVsZHMgPSBPYmplY3Qua2V5cyhjbGllbnRTaWRlTGF5ZXIuc291cmNlLml0ZW1zWzBdLmF0dHJpYnV0ZXMpO1xyXG4gIGNvbnN0IGhlYWRlcnMgPSBbXHJcbiAgICBjbGllbnRTaWRlTGF5ZXIub2JqZWN0SWRGaWVsZCxcclxuICAgICdzY29yZScsXHJcbiAgICAuLi5hbGxGaWVsZHMuZmlsdGVyKGZpZWxkID0+IGZpZWxkICE9PSBjbGllbnRTaWRlTGF5ZXIub2JqZWN0SWRGaWVsZCAmJiBmaWVsZCAhPT0gJ3Njb3JlJylcclxuICBdO1xyXG5cclxuICBjb25zdCBjc3ZDb250ZW50ID0gW1xyXG4gICAgaGVhZGVycy5qb2luKCcsJyksXHJcbiAgICAuLi5jbGllbnRTaWRlTGF5ZXIuc291cmNlLml0ZW1zLm1hcChmZWF0dXJlID0+IHtcclxuICAgICAgY29uc3Qgcm93ID0gW1xyXG4gICAgICAgIGZlYXR1cmUuYXR0cmlidXRlc1tjbGllbnRTaWRlTGF5ZXIub2JqZWN0SWRGaWVsZF0sXHJcbiAgICAgICAgZmVhdHVyZS5hdHRyaWJ1dGVzLnNjb3JlLFxyXG4gICAgICAgIC4uLmFsbEZpZWxkc1xyXG4gICAgICAgIC5maWx0ZXIoZmllbGQgPT4gZmllbGQgIT09IGNsaWVudFNpZGVMYXllci5vYmplY3RJZEZpZWxkICYmIGZpZWxkICE9PSAnc2NvcmUnKVxyXG4gICAgICAgIC5tYXAoZmllbGQgPT4gZmVhdHVyZS5hdHRyaWJ1dGVzW2ZpZWxkXSksXHJcbiAgICAgIF07XHJcbiAgICAgIHJldHVybiByb3cuam9pbignLCcpO1xyXG4gICAgfSlcclxuICBdLmpvaW4oJ1xcbicpO1xyXG5cclxuICByZXR1cm4gY3N2Q29udGVudDtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZVdlaWdodEluZm9Db250ZW50ID0gKHNsaWRlclZhbHVlczogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSk6IHN0cmluZyA9PiB7XHJcbiAgbGV0IGNvbnRlbnQgPSBcIkZpZWxkLFdlaWdodFxcblwiO1xyXG4gIGZvciAoY29uc3QgW2ZpZWxkLCB3ZWlnaHRdIG9mIE9iamVjdC5lbnRyaWVzKHNsaWRlclZhbHVlcykpIHtcclxuICAgIGNvbnRlbnQgKz0gYCR7ZmllbGR9LCR7d2VpZ2h0fVxcbmA7XHJcbiAgfVxyXG4gIHJldHVybiBjb250ZW50O1xyXG59O1xyXG5cclxuLy8gTW9kaWZpZWQgZXhwb3J0IGZ1bmN0aW9uIHRvIGNyZWF0ZSBhIHppcCBmaWxlXHJcbmV4cG9ydCBjb25zdCBleHBvcnREYXRhID0gYXN5bmMgKHR5cGU6ICdzcGF0aWFsJyB8ICdjc3YnLCBvcHRpb25zOiBFeHBvcnRPcHRpb25zKSA9PiB7XHJcbiAgaWYgKCFvcHRpb25zLmNsaWVudFNpZGVMYXllcikge1xyXG4gICAgY29uc29sZS5lcnJvcignTm8gY2xpZW50LXNpZGUgbGF5ZXIgYXZhaWxhYmxlIGZvciBleHBvcnQnKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB6aXAgPSBuZXcgSlNaaXAoKTtcclxuICAgIGxldCBtYWluRmlsZUNvbnRlbnQ6IHN0cmluZztcclxuICAgIGxldCBtYWluRmlsZU5hbWU6IHN0cmluZztcclxuXHJcbiAgICBpZiAodHlwZSA9PT0gJ3NwYXRpYWwnKSB7XHJcbiAgICAgIG1haW5GaWxlQ29udGVudCA9IGV4cG9ydFRvR2VvSlNPTihvcHRpb25zKTtcclxuICAgICAgbWFpbkZpbGVOYW1lID0gJ2NvbXBvc2l0ZV9zY29yZS5nZW9qc29uJztcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2NzdicpIHtcclxuICAgICAgbWFpbkZpbGVDb250ZW50ID0gZXhwb3J0VG9DU1Yob3B0aW9ucyk7XHJcbiAgICAgIG1haW5GaWxlTmFtZSA9ICdjb21wb3NpdGVfc2NvcmUuY3N2JztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEludmFsaWQgZXhwb3J0IHR5cGU6ICR7dHlwZX1gKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHdlaWdodEluZm9Db250ZW50ID0gY3JlYXRlV2VpZ2h0SW5mb0NvbnRlbnQob3B0aW9ucy5zbGlkZXJWYWx1ZXMpO1xyXG5cclxuICAgIHppcC5maWxlKG1haW5GaWxlTmFtZSwgbWFpbkZpbGVDb250ZW50KTtcclxuICAgIHppcC5maWxlKCd3ZWlnaHRfaW5mb3JtYXRpb24uY3N2Jywgd2VpZ2h0SW5mb0NvbnRlbnQpO1xyXG5cclxuICAgIGNvbnN0IHppcENvbnRlbnQgPSBhd2FpdCB6aXAuZ2VuZXJhdGVBc3luYyh7IHR5cGU6ICdibG9iJyB9KTtcclxuICAgIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoemlwQ29udGVudCk7XHJcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgbGluay5ocmVmID0gdXJsO1xyXG4gICAgbGluay5kb3dubG9hZCA9IGBtYXBhX2NvbXBvc2l0ZV9zY29yZV8ke25ldyBEYXRlKCkudG9JU09TdHJpbmcoKX0uemlwYDtcclxuXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspO1xyXG4gICAgbGluay5jbGljaygpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChsaW5rKTtcclxuXHJcbiAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHVybCk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGR1cmluZyAke3R5cGV9IGV4cG9ydDpgLCBlcnJvcik7XHJcbiAgfVxyXG59O1xyXG4iLCIvLyBtYXBVdGlscy50c1xyXG5pbXBvcnQgRmVhdHVyZUxheWVyIGZyb20gJ2VzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllcic7XHJcbmltcG9ydCAqIGFzIGNvbG9yUmVuZGVyZXJDcmVhdG9yIGZyb20gJ2Vzcmkvc21hcnRNYXBwaW5nL3JlbmRlcmVycy9jb2xvcic7XHJcbmltcG9ydCAqIGFzIGNvbG9yU2NoZW1lcyBmcm9tICdlc3JpL3NtYXJ0TWFwcGluZy9zeW1ib2xvZ3kvY29sb3InO1xyXG5pbXBvcnQgeyBKaW11TWFwVmlldyB9IGZyb20gJ2ppbXUtYXJjZ2lzJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVSZW5kZXJlcihsYXllcjogRmVhdHVyZUxheWVyLCBmaWVsZDogc3RyaW5nLCBqaW11TWFwVmlldzogSmltdU1hcFZpZXcpIHtcclxuICBjb25zdCBwYXJhbXMgPSB7XHJcbiAgICBiYXNlbWFwVGhlbWU6IFwibGlnaHRcIixcclxuICAgIGdlb21ldHJ5VHlwZTogbGF5ZXIuZ2VvbWV0cnlUeXBlLFxyXG4gICAgdGhlbWU6IFwiaGlnaC10by1sb3dcIixcclxuICAgIG5hbWU6IFwiQmx1ZSAxMVwiXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY29sb3JTY2hlbWUgPSBjb2xvclNjaGVtZXMuZ2V0U2NoZW1lQnlOYW1lKHBhcmFtcyk7XHJcblxyXG4gIGNvbnN0IGNvbG9yUGFyYW1zID0ge1xyXG4gICAgbGF5ZXI6IGxheWVyLFxyXG4gICAgdmlldzogamltdU1hcFZpZXcudmlldyxcclxuICAgIGZpZWxkOiBmaWVsZCxcclxuICAgIGNsYXNzaWZpY2F0aW9uTWV0aG9kOiBcIm5hdHVyYWwtYnJlYWtzXCIsXHJcbiAgICBudW1DbGFzc2VzOiA0LFxyXG4gICAgY29sb3JTY2hlbWU6IGNvbG9yU2NoZW1lLFxyXG4gIH07XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IHJlbmRlcmVyIH0gPSBhd2FpdCBjb2xvclJlbmRlcmVyQ3JlYXRvci5kZWZhdWx0LmNyZWF0ZUNsYXNzQnJlYWtzUmVuZGVyZXIoY29sb3JQYXJhbXMpO1xyXG4gICAgcmV0dXJuIHJlbmRlcmVyO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyByZW5kZXJlcjonLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxyXG4gICAgICBzeW1ib2w6IHtcclxuICAgICAgICB0eXBlOiBcInNpbXBsZS1tYXJrZXJcIixcclxuICAgICAgICBjb2xvcjogXCJibHVlXCIsXHJcbiAgICAgICAgb3V0bGluZToge1xyXG4gICAgICAgICAgY29sb3I6IFwid2hpdGVcIlxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kRGF0YVNvdXJjZUxheWVyKGppbXVNYXBWaWV3OiBKaW11TWFwVmlldywgZGF0YVNvdXJjZUlkOiBzdHJpbmcpIHtcclxuICBpZiAoIWppbXVNYXBWaWV3IHx8ICFqaW11TWFwVmlldy52aWV3IHx8ICFqaW11TWFwVmlldy52aWV3Lm1hcCkgcmV0dXJuIG51bGw7XHJcbiAgcmV0dXJuIGppbXVNYXBWaWV3LnZpZXcubWFwLmZpbmRMYXllckJ5SWQoZGF0YVNvdXJjZUlkKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVdpZGdldExheWVycyhqaW11TWFwVmlldzogSmltdU1hcFZpZXcsIGdlb21ldHJ5VHlwZTogc3RyaW5nKSB7XHJcbiAgaWYgKGppbXVNYXBWaWV3KSB7XHJcbiAgICBqaW11TWFwVmlldy52aWV3Lm1hcC5sYXllcnMuZm9yRWFjaChsYXllciA9PiB7XHJcbiAgICAgIGlmIChsYXllci50aXRsZS5pbmNsdWRlcyhgQ29tcG9zaXRlIFNjb3JlIC0gJHtnZW9tZXRyeVR5cGV9YCkpIHtcclxuICAgICAgICBqaW11TWFwVmlldy52aWV3Lm1hcC5yZW1vdmUobGF5ZXIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiLy8gdWlDb21wb25lbnRzLnRzXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExhYmVsLCBTbGlkZXIsIE51bWVyaWNJbnB1dCwgQnV0dG9uIH0gZnJvbSAnamltdS11aSc7XHJcbmltcG9ydCB7IFVubG9ja091dGxpbmVkIH0gZnJvbSAnamltdS1pY29ucy9vdXRsaW5lZC9lZGl0b3IvdW5sb2NrJztcclxuaW1wb3J0IHsgTG9ja091dGxpbmVkIH0gZnJvbSAnamltdS1pY29ucy9vdXRsaW5lZC9lZGl0b3IvbG9jayc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2xpZGVycyhcclxuICBmaWVsZEluZm86IGFueVtdLFxyXG4gIHNsaWRlclZhbHVlczogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSxcclxuICBsb2NrZWRTbGlkZXJzOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfSxcclxuICBoYW5kbGVWYWx1ZUNoYW5nZTogKGZpZWxkOiBzdHJpbmcsIHZhbHVlOiBudW1iZXIpID0+IHZvaWQsXHJcbiAgdG9nZ2xlTG9jazogKGZpZWxkOiBzdHJpbmcpID0+IHZvaWRcclxuKSB7XHJcbiAgcmV0dXJuIGZpZWxkSW5mby5tYXAoZmllbGQgPT4gKFxyXG4gICAgPGRpdiBrZXk9e2ZpZWxkLm5hbWV9IGNsYXNzTmFtZT1cInNsaWRlci1jb250YWluZXJcIj5cclxuICAgIDxMYWJlbD57ZmllbGQuYWxpYXN9PC9MYWJlbD5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVyLWlucHV0LWNvbnRhaW5lclwiPlxyXG4gIDxTbGlkZXJcclxuICAgIGNsYXNzTmFtZT1cInNsaWRlclwiXHJcbiAgdmFsdWU9e3NsaWRlclZhbHVlc1tmaWVsZC5uYW1lXSB8fCAwfVxyXG4gIG9uQ2hhbmdlPXsoZXZ0KSA9PiBoYW5kbGVWYWx1ZUNoYW5nZShmaWVsZC5uYW1lLCBwYXJzZUZsb2F0KGV2dC50YXJnZXQudmFsdWUpKX1cclxuICBtaW49ezB9XHJcbiAgbWF4PXsxMDB9XHJcbiAgc3RlcD17MC4xfVxyXG4gIGRpc2FibGVkPXtsb2NrZWRTbGlkZXJzW2ZpZWxkLm5hbWVdfVxyXG4gIC8+XHJcbiAgPGRpdiBjbGFzc05hbWU9XCJudW1lcmljLWlucHV0LWxvY2stY29udGFpbmVyXCI+XHJcbiAgPE51bWVyaWNJbnB1dFxyXG4gICAgY2xhc3NOYW1lPVwic2xpZGVyLWlucHV0XCJcclxuICB2YWx1ZT17c2xpZGVyVmFsdWVzW2ZpZWxkLm5hbWVdIHx8IDB9XHJcbiAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gaGFuZGxlVmFsdWVDaGFuZ2UoZmllbGQubmFtZSwgdmFsdWUpfVxyXG4gIG1pbj17MH1cclxuICBtYXg9ezEwMH1cclxuICBzdGVwPXswLjF9XHJcbiAgZGlzYWJsZWQ9e2xvY2tlZFNsaWRlcnNbZmllbGQubmFtZV19XHJcbiAgLz5cclxuICA8QnV0dG9uXHJcbiAgY2xhc3NOYW1lPVwibG9jay1idXR0b25cIlxyXG4gIHNpemU9XCJzbVwiXHJcbiAgb25DbGljaz17KCkgPT4gdG9nZ2xlTG9jayhmaWVsZC5uYW1lKX1cclxuICB0aXRsZT17bG9ja2VkU2xpZGVyc1tmaWVsZC5uYW1lXSA/IFwiVW5sb2NrXCIgOiBcIkxvY2tcIn1cclxuICAgID5cclxuICAgIHtsb2NrZWRTbGlkZXJzW2ZpZWxkLm5hbWVdID8gPExvY2tPdXRsaW5lZCBzaXplPVwic1wiLz4gOiA8VW5sb2NrT3V0bGluZWQgc2l6ZT1cInNcIi8+fVxyXG4gICAgPC9CdXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbikpO1xyXG59XHJcbiIsIi8vIHVzZVNsaWRlclZhbHVlcy50c1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBnZXRTZXNzaW9uU3RvcmFnZUtleSB9IGZyb20gJy4vY29uZmlnJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VTbGlkZXJWYWx1ZXMod2lkZ2V0SWQ6IHN0cmluZywgZmllbGRJbmZvOiBhbnlbXSkge1xyXG4gIGNvbnN0IFtzbGlkZXJWYWx1ZXMsIHNldFNsaWRlclZhbHVlc10gPSB1c2VTdGF0ZTx7IFtrZXk6IHN0cmluZ106IG51bWJlciB9Pih7fSk7XHJcbiAgY29uc3QgW2xvY2tlZFNsaWRlcnMsIHNldExvY2tlZFNsaWRlcnNdID0gdXNlU3RhdGU8eyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0+KHt9KTtcclxuICBjb25zdCBbc3VtT2ZXZWlnaHRzLCBzZXRTdW1PZldlaWdodHNdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGluaXRpYWxpemVTbGlkZXJWYWx1ZXMoZmllbGRJbmZvKTtcclxuICB9LCBbZmllbGRJbmZvXSk7XHJcblxyXG4gIGNvbnN0IGluaXRpYWxpemVTbGlkZXJWYWx1ZXMgPSAoZmllbGRzOiBhbnlbXSkgPT4ge1xyXG4gICAgbGV0IGluaXRpYWxWYWx1ZXMgPSB7fTtcclxuICAgIGNvbnN0IHNhdmVkV2VpZ2h0cyA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oZ2V0U2Vzc2lvblN0b3JhZ2VLZXkod2lkZ2V0SWQpKTtcclxuXHJcbiAgICBpZiAoc2F2ZWRXZWlnaHRzKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgaW5pdGlhbFZhbHVlcyA9IEpTT04ucGFyc2Uoc2F2ZWRXZWlnaHRzKTtcclxuICAgICAgICBmaWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgICAgICBpZiAoIWluaXRpYWxWYWx1ZXMuaGFzT3duUHJvcGVydHkoZmllbGQubmFtZSkpIHtcclxuICAgICAgICAgICAgaW5pdGlhbFZhbHVlc1tmaWVsZC5uYW1lXSA9IDEwMCAvIGZpZWxkcy5sZW5ndGg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgcGFyc2luZyBzYXZlZCB3ZWlnaHRzOicsIGVycm9yKTtcclxuICAgICAgICBpbml0aWFsVmFsdWVzID0ge307XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoT2JqZWN0LmtleXMoaW5pdGlhbFZhbHVlcykubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGNvbnN0IGZpZWxkQ291bnQgPSBmaWVsZHMubGVuZ3RoO1xyXG4gICAgICBjb25zdCBiYXNlVmFsdWUgPSBNYXRoLmZsb29yKCgxMDAgLyBmaWVsZENvdW50KSAqIDEwKSAvIDEwO1xyXG4gICAgICBsZXQgcmVtYWluaW5nVmFsdWUgPSBOdW1iZXIoKDEwMCAtIGJhc2VWYWx1ZSAqIGZpZWxkQ291bnQpLnRvRml4ZWQoMSkpO1xyXG5cclxuICAgICAgZmllbGRzLmZvckVhY2goKGZpZWxkLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGlmIChpbmRleCA9PT0gZmllbGRzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgIGluaXRpYWxWYWx1ZXNbZmllbGQubmFtZV0gPSBOdW1iZXIoKGJhc2VWYWx1ZSArIHJlbWFpbmluZ1ZhbHVlKS50b0ZpeGVkKDEpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaW5pdGlhbFZhbHVlc1tmaWVsZC5uYW1lXSA9IGJhc2VWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFNsaWRlclZhbHVlcyhpbml0aWFsVmFsdWVzKTtcclxuICAgIHVwZGF0ZVN1bU9mV2VpZ2h0cyhpbml0aWFsVmFsdWVzKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB1cGRhdGVTdW1PZldlaWdodHMgPSAodmFsdWVzOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9KSA9PiB7XHJcbiAgICBjb25zdCBzdW0gPSBPYmplY3QudmFsdWVzKHZhbHVlcykucmVkdWNlKChhY2MsIHZhbCkgPT4gYWNjICsgdmFsLCAwKTtcclxuICAgIHNldFN1bU9mV2VpZ2h0cyhOdW1iZXIoc3VtLnRvRml4ZWQoMSkpKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVWYWx1ZUNoYW5nZSA9IChmaWVsZDogc3RyaW5nLCB2YWx1ZTogbnVtYmVyKSA9PiB7XHJcbiAgICBjb25zdCByb3VuZGVkVmFsdWUgPSBOdW1iZXIodmFsdWUudG9GaXhlZCgxKSk7XHJcbiAgICBjb25zdCBvbGRWYWx1ZSA9IHNsaWRlclZhbHVlc1tmaWVsZF07XHJcbiAgICBjb25zdCBkaWZmZXJlbmNlID0gcm91bmRlZFZhbHVlIC0gb2xkVmFsdWU7XHJcblxyXG4gICAgY29uc3QgbmV3U2xpZGVyVmFsdWVzID0gey4uLnNsaWRlclZhbHVlcywgW2ZpZWxkXTogcm91bmRlZFZhbHVlfTtcclxuXHJcbiAgICBjb25zdCB1bmxvY2tlZEZpZWxkcyA9IE9iamVjdC5rZXlzKG5ld1NsaWRlclZhbHVlcykuZmlsdGVyKGYgPT4gZiAhPT0gZmllbGQgJiYgIWxvY2tlZFNsaWRlcnNbZl0pO1xyXG4gICAgY29uc3QgYWRqdXN0bWVudFBlckZpZWxkID0gTnVtYmVyKChkaWZmZXJlbmNlIC8gdW5sb2NrZWRGaWVsZHMubGVuZ3RoKS50b0ZpeGVkKDEpKTtcclxuXHJcbiAgICB1bmxvY2tlZEZpZWxkcy5mb3JFYWNoKGYgPT4ge1xyXG4gICAgICBuZXdTbGlkZXJWYWx1ZXNbZl0gPSBOdW1iZXIoKG5ld1NsaWRlclZhbHVlc1tmXSAtIGFkanVzdG1lbnRQZXJGaWVsZCkudG9GaXhlZCgxKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBzdW0gPSBPYmplY3QudmFsdWVzKG5ld1NsaWRlclZhbHVlcykucmVkdWNlKChhY2MsIHZhbCkgPT4gYWNjICsgdmFsLCAwKTtcclxuICAgIGlmICh1bmxvY2tlZEZpZWxkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IGxhc3RGaWVsZCA9IHVubG9ja2VkRmllbGRzW3VubG9ja2VkRmllbGRzLmxlbmd0aCAtIDFdO1xyXG4gICAgICBuZXdTbGlkZXJWYWx1ZXNbbGFzdEZpZWxkXSA9IE51bWJlcigobmV3U2xpZGVyVmFsdWVzW2xhc3RGaWVsZF0gKyAoMTAwIC0gc3VtKSkudG9GaXhlZCgxKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U2xpZGVyVmFsdWVzKG5ld1NsaWRlclZhbHVlcyk7XHJcbiAgICB1cGRhdGVTdW1PZldlaWdodHMobmV3U2xpZGVyVmFsdWVzKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB0b2dnbGVMb2NrID0gKGZpZWxkOiBzdHJpbmcpID0+IHtcclxuICAgIHNldExvY2tlZFNsaWRlcnMocHJldiA9PiAoe1xyXG4gICAgICAuLi5wcmV2LFxyXG4gICAgICBbZmllbGRdOiAhcHJldltmaWVsZF1cclxuICAgIH0pKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZXNldFNsaWRlcnMgPSAoKSA9PiB7XHJcbiAgICBpbml0aWFsaXplU2xpZGVyVmFsdWVzKGZpZWxkSW5mbyk7XHJcbiAgICBzZXRMb2NrZWRTbGlkZXJzKHt9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgc2xpZGVyVmFsdWVzLFxyXG4gICAgbG9ja2VkU2xpZGVycyxcclxuICAgIHN1bU9mV2VpZ2h0cyxcclxuICAgIGhhbmRsZVZhbHVlQ2hhbmdlLFxyXG4gICAgdG9nZ2xlTG9jayxcclxuICAgIHJlc2V0U2xpZGVyc1xyXG4gIH07XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfUG9wdXBUZW1wbGF0ZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2xheWVyc19GZWF0dXJlTGF5ZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9zbWFydE1hcHBpbmdfcmVuZGVyZXJzX2NvbG9yX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2Vzcmlfc21hcnRNYXBwaW5nX3N5bWJvbG9neV9jb2xvcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4vLyBAdHMtaWdub3JlXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCJpbXBvcnQge1xyXG4gIFJlYWN0LFxyXG4gIEFsbFdpZGdldFByb3BzLFxyXG4gIERhdGFTb3VyY2VDb21wb25lbnQsXHJcbiAgRmVhdHVyZUxheWVyRGF0YVNvdXJjZSxcclxuICBJTURhdGFTb3VyY2VJbmZvLFxyXG4gIERhdGFTb3VyY2UgLy8gQWRkIHRoaXMgaW1wb3J0XHJcbn0gZnJvbSAnamltdS1jb3JlJztcclxuXHJcbmltcG9ydCB7QnV0dG9uLCBMb2FkaW5nLCBEcm9wZG93biwgRHJvcGRvd25CdXR0b24sIERyb3Bkb3duTWVudSwgRHJvcGRvd25JdGVtfSBmcm9tICdqaW11LXVpJztcclxuaW1wb3J0IHtKaW11TWFwVmlldywgSmltdU1hcFZpZXdDb21wb25lbnR9IGZyb20gJ2ppbXUtYXJjZ2lzJztcclxuaW1wb3J0IEZlYXR1cmVMYXllciBmcm9tICdlc3JpL2xheWVycy9GZWF0dXJlTGF5ZXInO1xyXG5pbXBvcnQgUG9wdXBUZW1wbGF0ZSBmcm9tICdlc3JpL1BvcHVwVGVtcGxhdGUnO1xyXG5pbXBvcnQge2dldEZlYXR1cmVDb3VudCwgcXVlcnlBbGxGZWF0dXJlcywgY2FsY3VsYXRlU2NvcmV9IGZyb20gJy4vZGF0YVV0aWxzJztcclxuaW1wb3J0IHtjcmVhdGVSZW5kZXJlciwgZmluZERhdGFTb3VyY2VMYXllciwgcmVtb3ZlV2lkZ2V0TGF5ZXJzfSBmcm9tICcuL21hcFV0aWxzJztcclxuaW1wb3J0IHtjcmVhdGVTbGlkZXJzfSBmcm9tICcuL3VpQ29tcG9uZW50cyc7XHJcbmltcG9ydCB7IGdldFNlc3Npb25TdG9yYWdlS2V5IH0gZnJvbSAnLi9jb25maWcnO1xyXG5pbXBvcnQge3VzZVNsaWRlclZhbHVlc30gZnJvbSAnLi91c2VTbGlkZXJWYWx1ZXMnO1xyXG5pbXBvcnQge2V4cG9ydERhdGF9IGZyb20gJy4vZXhwb3J0VXRpbHMnO1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmNvbnN0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSA9IFJlYWN0O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2lkZ2V0KHByb3BzOiBBbGxXaWRnZXRQcm9wczx1bmtub3duPikge1xyXG4gIGNvbnN0IFtkYXRhU291cmNlLCBzZXREYXRhU291cmNlXSA9IHVzZVN0YXRlPEZlYXR1cmVMYXllckRhdGFTb3VyY2UgfCBudWxsPihudWxsKTtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIGNvbnN0IFtyZWNvcmRzLCBzZXRSZWNvcmRzXSA9IHVzZVN0YXRlPGFueVtdPihbXSk7XHJcbiAgY29uc3QgW2NsaWVudFNpZGVMYXllciwgc2V0Q2xpZW50U2lkZUxheWVyXSA9IHVzZVN0YXRlPEZlYXR1cmVMYXllciB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFtpc0V4cG9ydFJlYWR5LCBzZXRJc0V4cG9ydFJlYWR5XSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICBjb25zdCBbamltdU1hcFZpZXcsIHNldEppbXVNYXBWaWV3XSA9IHVzZVN0YXRlPEppbXVNYXBWaWV3IHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW2ZpZWxkSW5mbywgc2V0RmllbGRJbmZvXSA9IHVzZVN0YXRlPHsgbmFtZTogc3RyaW5nOyBhbGlhczogc3RyaW5nIH1bXT4oW10pO1xyXG4gIGNvbnN0IFtpc0RhdGFSZWFkeSwgc2V0SXNEYXRhUmVhZHldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtnZW9tZXRyeVR5cGUsIHNldEdlb21ldHJ5VHlwZV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcclxuICBjb25zdCBbdG9nZ2xlZExheWVySWQsIHNldFRvZ2dsZWRMYXllcklkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtleHBvcnRUeXBlLCBzZXRFeHBvcnRUeXBlXSA9IHVzZVN0YXRlPCdzcGF0aWFsJyB8ICdjc3YnPignc3BhdGlhbCcpO1xyXG4gIGNvbnN0IFtzaG93RXhwb3J0T3B0aW9ucywgc2V0U2hvd0V4cG9ydE9wdGlvbnNdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICBjb25zdCB7XHJcbiAgICBzbGlkZXJWYWx1ZXMsXHJcbiAgICBsb2NrZWRTbGlkZXJzLFxyXG4gICAgc3VtT2ZXZWlnaHRzLFxyXG4gICAgaGFuZGxlVmFsdWVDaGFuZ2UsXHJcbiAgICB0b2dnbGVMb2NrLFxyXG4gICAgcmVzZXRTbGlkZXJzXHJcbiAgfSA9IHVzZVNsaWRlclZhbHVlcyhwcm9wcy5pZCwgZmllbGRJbmZvKTtcclxuXHJcbiAgY29uc3QgcXVlcnlQYXJhbXMgPSBwcm9wcy51c2VEYXRhU291cmNlcz8uWzBdPy5maWVsZHM/Lmxlbmd0aCA+IDBcclxuICAgID8ge291dEZpZWxkczogcHJvcHMudXNlRGF0YVNvdXJjZXNbMF0uZmllbGRzfVxyXG4gICAgOiB7fTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHJlbW92ZVdpZGdldExheWVycyhqaW11TWFwVmlldywgZ2VvbWV0cnlUeXBlKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGRhdGFTb3VyY2UpIHtcclxuICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gICAgICBzZXRJc0RhdGFSZWFkeShmYWxzZSk7XHJcbiAgICAgIGlmIChkYXRhU291cmNlLmxheWVyKSB7XHJcbiAgICAgICAgc2V0R2VvbWV0cnlUeXBlKGRhdGFTb3VyY2UubGF5ZXIuZ2VvbWV0cnlUeXBlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZ2V0RmVhdHVyZUNvdW50KGRhdGFTb3VyY2UsIHF1ZXJ5UGFyYW1zKS50aGVuKHRvdGFsQ291bnQgPT4ge1xyXG4gICAgICAgIC8vIHF1ZXJ5QWxsRmVhdHVyZXMoZGF0YVNvdXJjZSwgdG90YWxDb3VudCwgcHJvcHMudXNlRGF0YVNvdXJjZXNbMF0uZmllbGRzKS50aGVuKGZlYXR1cmVzID0+IHtcclxuICAgICAgICBxdWVyeUFsbEZlYXR1cmVzKGRhdGFTb3VyY2UsIHRvdGFsQ291bnQsIFsnKiddKS50aGVuKGZlYXR1cmVzID0+IHtcclxuICAgICAgICAgIHNldFJlY29yZHMoSlNPTi5zdHJpbmdpZnkoZmVhdHVyZXMpKTtcclxuICAgICAgICAgIHNldElzRGF0YVJlYWR5KHRydWUpO1xyXG4gICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICBpZiAoZXJyb3IubmFtZSAhPT0gJ0Fib3J0RXJyb3InKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHJlY29yZHM6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICBhbGVydCgnRXJyb3IgZmV0Y2hpbmcgcmVjb3JkczonKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBnZXR0aW5nIGZlYXR1cmUgY291bnQ6JywgZXJyb3IpO1xyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIFtkYXRhU291cmNlXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoZGF0YVNvdXJjZSkge1xyXG4gICAgICBjb25zdCBmaWVsZHMgPSBkYXRhU291cmNlLmdldFNjaGVtYSgpLmZpZWxkcztcclxuICAgICAgY29uc3Qgc2VsZWN0ZWRGaWVsZHMgPSBwcm9wcy51c2VEYXRhU291cmNlc1swXS5maWVsZHM7XHJcbiAgICAgIGNvbnN0IG5ld0ZpZWxkSW5mbyA9IHNlbGVjdGVkRmllbGRzLm1hcChmaWVsZE5hbWUgPT4gKHtcclxuICAgICAgICBuYW1lOiBmaWVsZE5hbWUsXHJcbiAgICAgICAgYWxpYXM6IGZpZWxkc1tmaWVsZE5hbWVdLmFsaWFzIHx8IGZpZWxkTmFtZVxyXG4gICAgICB9KSk7XHJcbiAgICAgIHNldEZpZWxkSW5mbyhuZXdGaWVsZEluZm8pO1xyXG4gICAgfVxyXG4gIH0sIFtkYXRhU291cmNlXSk7XHJcblxyXG4gIGNvbnN0IG9uQWN0aXZlVmlld0NoYW5nZSA9IChqbXY6IEppbXVNYXBWaWV3KSA9PiB7XHJcbiAgICBpZiAoam12KSB7XHJcbiAgICAgIHNldEppbXVNYXBWaWV3KGptdik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaXNEc0NvbmZpZ3VyZWQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gcHJvcHMudXNlRGF0YVNvdXJjZXMgJiZcclxuICAgICAgcHJvcHMudXNlRGF0YVNvdXJjZXMubGVuZ3RoID09PSAxICYmXHJcbiAgICAgIHByb3BzLnVzZURhdGFTb3VyY2VzWzBdLmZpZWxkcyAmJlxyXG4gICAgICBwcm9wcy51c2VEYXRhU291cmNlc1swXS5maWVsZHMubGVuZ3RoID4gMDtcclxuICB9O1xyXG5cclxuICBjb25zdCByZXNldENoYW5nZXMgPSAoKSA9PiB7XHJcbiAgICByZXNldFNsaWRlcnMoKTtcclxuICAgIGlmIChqaW11TWFwVmlldyAmJiBqaW11TWFwVmlldy52aWV3KSB7XHJcbiAgICAgIGlmIChjbGllbnRTaWRlTGF5ZXIpIHtcclxuICAgICAgICBqaW11TWFwVmlldy52aWV3Lm1hcC5yZW1vdmUoY2xpZW50U2lkZUxheWVyKTtcclxuICAgICAgICBzZXRDbGllbnRTaWRlTGF5ZXIobnVsbCk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgc291cmNlTGF5ZXIgPSBmaW5kRGF0YVNvdXJjZUxheWVyKGppbXVNYXBWaWV3LCBkYXRhU291cmNlLmlkKTtcclxuICAgICAgaWYgKHNvdXJjZUxheWVyKSB7XHJcbiAgICAgICAgc291cmNlTGF5ZXIudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgY29uc29sZS5sb2coYFRvZ2dsZWQgb24gZGF0YSBzb3VyY2UgbGF5ZXI6ICR7c291cmNlTGF5ZXIuaWR9YCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKCdEYXRhIHNvdXJjZSBsYXllciBub3QgZm91bmQgaW4gdGhlIG1hcCcpO1xyXG4gICAgICB9XHJcbiAgICAgIHJlbW92ZVdpZGdldExheWVycyhqaW11TWFwVmlldywgZ2VvbWV0cnlUeXBlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUud2FybignSmltdU1hcFZpZXcgaXMgbm90IGF2YWlsYWJsZScpO1xyXG4gICAgfVxyXG4gICAgc2V0VG9nZ2xlZExheWVySWQobnVsbCk7XHJcbiAgICBzZXRJc0V4cG9ydFJlYWR5KGZhbHNlKTtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFNUT1JBR0VfS0VZKHByb3BzLmlkKSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gRXhwb3J0IGZ1bmN0aW9uYWxpdHkgaXMgaGFuZGxlZCBpbiBleHBvcnRVdGlscy50c1xyXG4gIGNvbnN0IGhhbmRsZUV4cG9ydCA9ICgpID0+IHtcclxuICAgIGlmICghY2xpZW50U2lkZUxheWVyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ05vIGNsaWVudC1zaWRlIGxheWVyIGF2YWlsYWJsZSBmb3IgZXhwb3J0Jyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBleHBvcnRPcHRpb25zID0ge1xyXG4gICAgICBjbGllbnRTaWRlTGF5ZXIsXHJcbiAgICAgIHNsaWRlclZhbHVlcyxcclxuICAgICAgZmllbGRzOiBwcm9wcy51c2VEYXRhU291cmNlc1swXS5maWVsZHNcclxuICAgIH07XHJcblxyXG4gICAgZXhwb3J0RGF0YShleHBvcnRUeXBlLCBleHBvcnRPcHRpb25zKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVFeHBvcnRDbGljayA9ICgpID0+IHtcclxuICAgIHNldFNob3dFeHBvcnRPcHRpb25zKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUV4cG9ydFR5cGVTZWxlY3QgPSAodHlwZTogJ3NwYXRpYWwnIHwgJ2NzdicpID0+IHtcclxuICAgIGlmICghY2xpZW50U2lkZUxheWVyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ05vIGNsaWVudC1zaWRlIGxheWVyIGF2YWlsYWJsZSBmb3IgZXhwb3J0Jyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBleHBvcnRPcHRpb25zID0ge1xyXG4gICAgICBjbGllbnRTaWRlTGF5ZXIsXHJcbiAgICAgIHNsaWRlclZhbHVlc1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBDYWxsIGV4cG9ydERhdGEgd2l0aCB0aGUgc2VsZWN0ZWQgdHlwZVxyXG4gICAgZXhwb3J0RGF0YSh0eXBlLCBleHBvcnRPcHRpb25zKTtcclxuICAgIHNldFNob3dFeHBvcnRPcHRpb25zKGZhbHNlKTtcclxuICB9O1xyXG5cclxuXHJcbiAgY29uc3QgYXBwbHlDaGFuZ2VzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKCFkYXRhU291cmNlIHx8ICFqaW11TWFwVmlldyB8fCAhZ2VvbWV0cnlUeXBlKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0RhdGEgc291cmNlIG9yIG1hcCB2aWV3IGlzIG5vdCBhdmFpbGFibGUgb3IgZ2VvbWV0cnkgbm90IGF2YWlsYWJsZScpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgbmV3X3JlY29yZHMgPSBKU09OLnBhcnNlKHJlY29yZHMpLm1hcChyZWNvcmQgPT4ge1xyXG4gICAgICBjb25zdCB7Z2VvbWV0cnksIGF0dHJpYnV0ZXN9ID0gcmVjb3JkO1xyXG4gICAgICByZWNvcmQuZ2VvbWV0cnkudHlwZSA9IGdlb21ldHJ5VHlwZTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBnZW9tZXRyeSxcclxuICAgICAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgICAgICAuLi5hdHRyaWJ1dGVzLFxyXG4gICAgICAgICAgc2NvcmU6IGNhbGN1bGF0ZVNjb3JlKHJlY29yZCwgZmllbGRJbmZvLCBzbGlkZXJWYWx1ZXMpXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZmllbGRzID0gW1xyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJPQkpFQ1RJRFwiLFxyXG4gICAgICAgIGFsaWFzOiBcIk9iamVjdElEXCIsXHJcbiAgICAgICAgdHlwZTogXCJvaWRcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJzY29yZVwiLFxyXG4gICAgICAgIGFsaWFzOiBcIkNvbXBvc2l0ZSBTY29yZVwiLFxyXG4gICAgICAgIHR5cGU6IFwiZG91YmxlXCJcclxuICAgICAgfSxcclxuICAgICAgLi4ucHJvcHMudXNlRGF0YVNvdXJjZXNbMF0uZmllbGRzLm1hcChmaWVsZE5hbWUgPT4gKHtcclxuICAgICAgICBuYW1lOiBmaWVsZE5hbWUsXHJcbiAgICAgICAgYWxpYXM6IGZpZWxkTmFtZSxcclxuICAgICAgICB0eXBlOiBcImRvdWJsZVwiXHJcbiAgICAgIH0pKVxyXG4gICAgXTtcclxuXHJcbiAgICBjb25zdCBwb3B1cFRlbXBsYXRlID0gbmV3IFBvcHVwVGVtcGxhdGUoe1xyXG4gICAgICB0aXRsZTogXCJGZWF0dXJlIEluZm9ybWF0aW9uXCIsXHJcbiAgICAgIGNvbnRlbnQ6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0eXBlOiBcImZpZWxkc1wiLFxyXG4gICAgICAgICAgZmllbGRJbmZvczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgZmllbGROYW1lOiBcInNjb3JlXCIsXHJcbiAgICAgICAgICAgICAgbGFiZWw6IFwiQ29tcG9zaXRlIFNjb3JlXCIsXHJcbiAgICAgICAgICAgICAgZm9ybWF0OiB7XHJcbiAgICAgICAgICAgICAgICBwbGFjZXM6IDIsXHJcbiAgICAgICAgICAgICAgICBkaWdpdFNlcGFyYXRvcjogdHJ1ZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLi4ucHJvcHMudXNlRGF0YVNvdXJjZXNbMF0uZmllbGRzLm1hcChmaWVsZE5hbWUgPT4gKHtcclxuICAgICAgICAgICAgICBmaWVsZE5hbWU6IGZpZWxkTmFtZSxcclxuICAgICAgICAgICAgICBsYWJlbDogZmllbGROYW1lLFxyXG4gICAgICAgICAgICAgIGZvcm1hdDoge1xyXG4gICAgICAgICAgICAgICAgcGxhY2VzOiAyLFxyXG4gICAgICAgICAgICAgICAgZGlnaXRTZXBhcmF0b3I6IHRydWVcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgbGF5ZXIgPSBuZXcgRmVhdHVyZUxheWVyKHtcclxuICAgICAgdGl0bGU6IGBDb21wb3NpdGUgU2NvcmUgLSAke2dlb21ldHJ5VHlwZX1gLFxyXG4gICAgICBzb3VyY2U6IG5ld19yZWNvcmRzLFxyXG4gICAgICBvYmplY3RJZEZpZWxkOiBcIk9CSkVDVElEXCIsXHJcbiAgICAgIGdlb21ldHJ5VHlwZTogZ2VvbWV0cnlUeXBlLFxyXG4gICAgICBzcGF0aWFsUmVmZXJlbmNlOiB7d2tpZDogMTAyMTAwfSxcclxuICAgICAgcG9wdXBFbmFibGVkOiB0cnVlLFxyXG4gICAgICBwb3B1cFRlbXBsYXRlOiBwb3B1cFRlbXBsYXRlLFxyXG4gICAgICBsZWdlbmRFbmFibGVkOiB0cnVlLFxyXG4gICAgICBleHRlbnQ6IGppbXVNYXBWaWV3LnZpZXcuZXh0ZW50LFxyXG4gICAgICBmaWVsZHM6IGZpZWxkcyxcclxuICAgIH0pO1xyXG5cclxuICAgIGxheWVyLnJlbmRlcmVyID0gYXdhaXQgY3JlYXRlUmVuZGVyZXIobGF5ZXIsIFwic2NvcmVcIiwgamltdU1hcFZpZXcpO1xyXG5cclxuICAgIHJlbW92ZVdpZGdldExheWVycyhqaW11TWFwVmlldywgZ2VvbWV0cnlUeXBlKTtcclxuXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKGdldFNlc3Npb25TdG9yYWdlS2V5KHByb3BzLmlkKSwgSlNPTi5zdHJpbmdpZnkoc2xpZGVyVmFsdWVzKSk7XHJcblxyXG4gICAgamltdU1hcFZpZXcudmlldy5tYXAuYWRkKGxheWVyKTtcclxuICAgIGNvbnN0IHNvdXJjZUxheWVyID0gZmluZERhdGFTb3VyY2VMYXllcihqaW11TWFwVmlldywgZGF0YVNvdXJjZS5pZCk7XHJcbiAgICBpZiAoc291cmNlTGF5ZXIpIHtcclxuICAgICAgc291cmNlTGF5ZXIudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICBzZXRUb2dnbGVkTGF5ZXJJZChzb3VyY2VMYXllci5pZCk7XHJcbiAgICB9XHJcbiAgICBzZXRDbGllbnRTaWRlTGF5ZXIobGF5ZXIpO1xyXG4gICAgc2V0SXNFeHBvcnRSZWFkeSh0cnVlKTtcclxuICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyV2lkZ2V0ID0gKGRzOiBEYXRhU291cmNlLCBpbmZvOiBJTURhdGFTb3VyY2VJbmZvKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1zY29yaW5nLXdpZGdldFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NvcmluZy13aWRnZXQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjb3Jpbmctd2lkZ2V0LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAge2NyZWF0ZVNsaWRlcnMoZmllbGRJbmZvLCBzbGlkZXJWYWx1ZXMsIGxvY2tlZFNsaWRlcnMsIGhhbmRsZVZhbHVlQ2hhbmdlLCB0b2dnbGVMb2NrKX1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BzdW0tZGlzcGxheSAke3N1bU9mV2VpZ2h0cyAhPT0gMTAwID8gJ3N1bS1lcnJvcicgOiAnJ31gfT5cclxuICAgICAgICAgICAgICBTdW0gb2Ygd2VpZ2h0czoge3N1bU9mV2VpZ2h0c31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwicmVzZXQtYnV0dG9uXCIgb25DbGljaz17cmVzZXRDaGFuZ2VzfT5SZXNldDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFwcGx5LWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXthcHBseUNoYW5nZXN9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17c3VtT2ZXZWlnaHRzICE9PSAxMDAgfHwgIWlzRGF0YVJlYWR5IHx8IGlzTG9hZGluZ31cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7aXNMb2FkaW5nID8gJ0xvYWRpbmcgRGF0YS4uLicgOiAnQXBwbHknfVxyXG4gICAgICAgICAgICAgICAge2lzTG9hZGluZyAmJiA8TG9hZGluZyBjbGFzc05hbWU9XCJsb2FkaW5nLWljb25cIi8+fVxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxEcm9wZG93biBpc09wZW49e3Nob3dFeHBvcnRPcHRpb25zICYmIGlzRXhwb3J0UmVhZHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZT17KCkgPT4gc2V0U2hvd0V4cG9ydE9wdGlvbnMoIXNob3dFeHBvcnRPcHRpb25zKX0+XHJcbiAgICAgICAgICAgICAgICA8RHJvcGRvd25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXhwb3J0LWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshaXNFeHBvcnRSZWFkeX1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRXhwb3J0Q2xpY2t9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIEV4cG9ydFxyXG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxEcm9wZG93bk1lbnU+XHJcbiAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gb25DbGljaz17KCkgPT4gaGFuZGxlRXhwb3J0VHlwZVNlbGVjdCgnc3BhdGlhbCcpfT5TcGF0aWFsIEZpbGU8L0Ryb3Bkb3duSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVFeHBvcnRUeXBlU2VsZWN0KCdjc3YnKX0+Q1NWPC9Ecm9wZG93bkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duTWVudT5cclxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGlmICghaXNEc0NvbmZpZ3VyZWQoKSkge1xyXG4gICAgcmV0dXJuIDxoMz5QbGVhc2UgY29uZmlndXJlIHRoZSBkYXRhIHNvdXJjZSBhbmQgc2VsZWN0IGZpZWxkcy48L2gzPjtcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uRmlsdGVyQ2hhbmdlID0gKHF1ZXJ5OiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdvbkZpbHRlckNoYW5nZScsIHF1ZXJ5KTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1zY29yaW5nLXdpZGdldFwiPlxyXG4gICAgICA8RGF0YVNvdXJjZUNvbXBvbmVudFxyXG4gICAgICAgIHVzZURhdGFTb3VyY2U9e3Byb3BzLnVzZURhdGFTb3VyY2VzWzBdfVxyXG4gICAgICAgIG9uRGF0YVNvdXJjZUNyZWF0ZWQ9e3NldERhdGFTb3VyY2V9XHJcbiAgICAgICAgd2lkZ2V0SWQ9e3Byb3BzLmlkfVxyXG4gICAgICAgIHF1ZXJ5Q291bnRcclxuICAgICAgICBvblF1ZXJ5UmVxdWlyZWQ9e29uRmlsdGVyQ2hhbmdlfVxyXG4gICAgICA+XHJcbiAgICAgICAge3JlbmRlcldpZGdldH1cclxuICAgICAgPC9EYXRhU291cmNlQ29tcG9uZW50PlxyXG4gICAgICB7cHJvcHMuY29uZmlnLm1hcFdpZGdldElkcyAmJiBwcm9wcy5jb25maWcubWFwV2lkZ2V0SWRzLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgIDxKaW11TWFwVmlld0NvbXBvbmVudFxyXG4gICAgICAgICAgdXNlTWFwV2lkZ2V0SWQ9e3Byb3BzLmNvbmZpZy5tYXBXaWRnZXRJZHNbMF19XHJcbiAgICAgICAgICBvbkFjdGl2ZVZpZXdDaGFuZ2U9e29uQWN0aXZlVmlld0NoYW5nZX1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9