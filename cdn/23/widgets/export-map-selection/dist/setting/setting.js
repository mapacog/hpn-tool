System.register(["jimu-core","jimu-ui/advanced/data-source-selector","jimu-ui/advanced/setting-components"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "jimu-ui/advanced/data-source-selector":
/*!********************************************************!*\
  !*** external "jimu-ui/advanced/data-source-selector" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__;

/***/ }),

/***/ "jimu-ui/advanced/setting-components":
/*!******************************************************!*\
  !*** external "jimu-ui/advanced/setting-components" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__;

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
/******/ 			// no module.id needed
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
/*!*******************************************************************************************************************************************************!*\
  !*** ../../../git/exb_bts_transportation_cost_burden/exb_widgets_bts_transportation_cost_burden/widgets/export-map-selection/src/setting/setting.tsx ***!
  \*******************************************************************************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Setting)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/data-source-selector */ "jimu-ui/advanced/data-source-selector");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");



function Setting(props) {
    const onToggleUseDataEnabled = (useDataSourcesEnabled) => {
        props.onSettingChange({
            id: props.id,
            useDataSourcesEnabled
        });
    };
    const onDataSourceChange = (useDataSources) => {
        props.onSettingChange({
            id: props.id,
            useDataSources: useDataSources
        });
    };
    const onMapWidgetSelected = (useMapWidgetIds) => {
        props.onSettingChange({
            id: props.id,
            useMapWidgetIds: useMapWidgetIds
        });
    };
    const onFullDataUrlChange = (event) => {
        props.onSettingChange({
            id: props.id,
            config: props.config.set('fullDataUrl', event.target.value)
        });
    };
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "use-feature-layer-setting p-2" },
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { className: "map-selector-section", title: props.intl.formatMessage({
                id: 'dataSourceLabel',
                defaultMessage: 'Select a feature layer to export.'
            }) },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, null,
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_1__.DataSourceSelector, { types: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([jimu_core__WEBPACK_IMPORTED_MODULE_0__.AllDataSourceTypes.FeatureLayer]), useDataSources: props.useDataSources, useDataSourcesEnabled: props.useDataSourcesEnabled, onToggleUseDataEnabled: onToggleUseDataEnabled, onChange: onDataSourceChange, widgetId: props.id }))),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { className: "map-selector-section", title: props.intl.formatMessage({
                id: 'mapWidgetLabel',
                defaultMessage: 'Select a map widget to use the extent. When there is no selection in the feature layer data source, the extent of the selected map widget will be used to export data.'
            }) },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, null,
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.MapWidgetSelector, { onSelect: onMapWidgetSelected, useMapWidgetIds: props.useMapWidgetIds }))),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { className: "full-data-url-section", title: props.intl.formatMessage({
                id: 'fullDataUrlLabel',
                defaultMessage: 'Enter the URL for the full dataset export.'
            }) },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, null,
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { type: "text", className: "w-100", value: props.config.fullDataUrl || '', onChange: onFullDataUrlChange, placeholder: "https://services.arcgis.com/..." }))));
}
;
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9leHBvcnQtbWFwLXNlbGVjdGlvbi9kaXN0L3NldHRpbmcvc2V0dGluZy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7O0FDQUE7OztLQUdLO0FBQ0wsMkJBQTJCO0FBQzNCLGFBQWE7QUFDYixxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05tRDtBQUVmO0FBSzNDO0FBRTdCLFNBQVMsT0FBTyxDQUFDLEtBQXNDO0lBRXBFLE1BQU0sc0JBQXNCLEdBQUcsQ0FBQyxxQkFBOEIsRUFBRSxFQUFFO1FBQ2hFLEtBQUssQ0FBQyxlQUFlLENBQUM7WUFDcEIsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO1lBQ1oscUJBQXFCO1NBQ3RCLENBQUM7SUFDSixDQUFDO0lBRUQsTUFBTSxrQkFBa0IsR0FBRyxDQUFDLGNBQStCLEVBQUUsRUFBRTtRQUM3RCxLQUFLLENBQUMsZUFBZSxDQUFDO1lBQ3BCLEVBQUUsRUFBRSxLQUFLLENBQUMsRUFBRTtZQUNaLGNBQWMsRUFBRSxjQUFjO1NBQy9CLENBQUM7SUFDSixDQUFDO0lBRUQsTUFBTSxtQkFBbUIsR0FBRyxDQUFDLGVBQXlCLEVBQUUsRUFBRTtRQUN4RCxLQUFLLENBQUMsZUFBZSxDQUFDO1lBQ3BCLEVBQUUsRUFBRSxLQUFLLENBQUMsRUFBRTtZQUNaLGVBQWUsRUFBRSxlQUFlO1NBQ2pDLENBQUM7SUFDSixDQUFDO0lBRUQsTUFBTSxtQkFBbUIsR0FBRyxDQUFDLEtBQTBDLEVBQUUsRUFBRTtRQUN6RSxLQUFLLENBQUMsZUFBZSxDQUFDO1lBQ3BCLEVBQUUsRUFBRSxLQUFLLENBQUMsRUFBRTtZQUNaLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDNUQsQ0FBQztJQUNKLENBQUM7SUFFRCxPQUFPLG9FQUFLLFNBQVMsRUFBQywrQkFBK0I7UUFDbkQsMkRBQUMsK0VBQWMsSUFDYixTQUFTLEVBQUMsc0JBQXNCLEVBQ2hDLEtBQUssRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztnQkFDOUIsRUFBRSxFQUFFLGlCQUFpQjtnQkFDckIsY0FBYyxFQUFFLG1DQUFtQzthQUNwRCxDQUFDO1lBRUYsMkRBQUMsMkVBQVU7Z0JBQ1QsMkRBQUMscUZBQWtCLElBQ2pCLEtBQUssRUFBRSxvREFBUyxDQUFDLENBQUMseURBQWtCLENBQUMsWUFBWSxDQUFDLENBQUMsRUFDbkQsY0FBYyxFQUFFLEtBQUssQ0FBQyxjQUFjLEVBQ3BDLHFCQUFxQixFQUFFLEtBQUssQ0FBQyxxQkFBcUIsRUFDbEQsc0JBQXNCLEVBQUUsc0JBQXNCLEVBQzlDLFFBQVEsRUFBRSxrQkFBa0IsRUFDNUIsUUFBUSxFQUFFLEtBQUssQ0FBQyxFQUFFLEdBQ2xCLENBQ1MsQ0FDRTtRQUNqQiwyREFBQywrRUFBYyxJQUNiLFNBQVMsRUFBQyxzQkFBc0IsRUFDaEMsS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO2dCQUM5QixFQUFFLEVBQUUsZ0JBQWdCO2dCQUNwQixjQUFjLEVBQUUsd0tBQXdLO2FBQ3pMLENBQUM7WUFFRiwyREFBQywyRUFBVTtnQkFDVCwyREFBQyxrRkFBaUIsSUFDaEIsUUFBUSxFQUFFLG1CQUFtQixFQUM3QixlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWUsR0FDdEMsQ0FDUyxDQUNFO1FBQ2pCLDJEQUFDLCtFQUFjLElBQ2IsU0FBUyxFQUFDLHVCQUF1QixFQUNqQyxLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7Z0JBQzlCLEVBQUUsRUFBRSxrQkFBa0I7Z0JBQ3RCLGNBQWMsRUFBRSw0Q0FBNEM7YUFDN0QsQ0FBQztZQUVGLDJEQUFDLDJFQUFVO2dCQUNULHNFQUNFLElBQUksRUFBQyxNQUFNLEVBQ1gsU0FBUyxFQUFDLE9BQU8sRUFDakIsS0FBSyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxJQUFJLEVBQUUsRUFDckMsUUFBUSxFQUFFLG1CQUFtQixFQUM3QixXQUFXLEVBQUMsaUNBQWlDLEdBQzdDLENBQ1MsQ0FDRSxDQUNiO0FBQ1IsQ0FBQztBQUFBLENBQUM7QUFFTSxTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpL2FkdmFuY2VkL2RhdGEtc291cmNlLXNlbGVjdG9yXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50c1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4uLy4uLy4uL2dpdC9leGJfYnRzX3RyYW5zcG9ydGF0aW9uX2Nvc3RfYnVyZGVuL2V4Yl93aWRnZXRzX2J0c190cmFuc3BvcnRhdGlvbl9jb3N0X2J1cmRlbi93aWRnZXRzL2V4cG9ydC1tYXAtc2VsZWN0aW9uL3NyYy9zZXR0aW5nL3NldHRpbmcudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9hZHZhbmNlZF9kYXRhX3NvdXJjZV9zZWxlY3Rvcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX2FkdmFuY2VkX3NldHRpbmdfY29tcG9uZW50c19fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbi8vIEB0cy1pZ25vcmVcclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsImltcG9ydCB7UmVhY3QsIEltbXV0YWJsZSwgdHlwZSBJTUZpZWxkU2NoZW1hLCB0eXBlIFVzZURhdGFTb3VyY2UsIEFsbERhdGFTb3VyY2VUeXBlc30gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQge3R5cGUgQWxsV2lkZ2V0U2V0dGluZ1Byb3BzfSBmcm9tICdqaW11LWZvci1idWlsZGVyJ1xyXG5pbXBvcnQge0RhdGFTb3VyY2VTZWxlY3RvciwgRmllbGRTZWxlY3Rvcn0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9kYXRhLXNvdXJjZS1zZWxlY3RvcidcclxuaW1wb3J0IHtcclxuICBNYXBXaWRnZXRTZWxlY3RvcixcclxuICBTZXR0aW5nU2VjdGlvbixcclxuICBTZXR0aW5nUm93XHJcbn0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZXR0aW5nKHByb3BzOiBBbGxXaWRnZXRTZXR0aW5nUHJvcHM8SU1Db25maWc+KSB7XHJcblxyXG4gIGNvbnN0IG9uVG9nZ2xlVXNlRGF0YUVuYWJsZWQgPSAodXNlRGF0YVNvdXJjZXNFbmFibGVkOiBib29sZWFuKSA9PiB7XHJcbiAgICBwcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gICAgICBpZDogcHJvcHMuaWQsXHJcbiAgICAgIHVzZURhdGFTb3VyY2VzRW5hYmxlZFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uRGF0YVNvdXJjZUNoYW5nZSA9ICh1c2VEYXRhU291cmNlczogVXNlRGF0YVNvdXJjZVtdKSA9PiB7XHJcbiAgICBwcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gICAgICBpZDogcHJvcHMuaWQsXHJcbiAgICAgIHVzZURhdGFTb3VyY2VzOiB1c2VEYXRhU291cmNlc1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uTWFwV2lkZ2V0U2VsZWN0ZWQgPSAodXNlTWFwV2lkZ2V0SWRzOiBzdHJpbmdbXSkgPT4ge1xyXG4gICAgcHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgaWQ6IHByb3BzLmlkLFxyXG4gICAgICB1c2VNYXBXaWRnZXRJZHM6IHVzZU1hcFdpZGdldElkc1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uRnVsbERhdGFVcmxDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBwcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gICAgICBpZDogcHJvcHMuaWQsXHJcbiAgICAgIGNvbmZpZzogcHJvcHMuY29uZmlnLnNldCgnZnVsbERhdGFVcmwnLCBldmVudC50YXJnZXQudmFsdWUpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidXNlLWZlYXR1cmUtbGF5ZXItc2V0dGluZyBwLTJcIj5cclxuICAgIDxTZXR0aW5nU2VjdGlvblxyXG4gICAgICBjbGFzc05hbWU9XCJtYXAtc2VsZWN0b3Itc2VjdGlvblwiXHJcbiAgICAgIHRpdGxlPXtwcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2Uoe1xyXG4gICAgICAgIGlkOiAnZGF0YVNvdXJjZUxhYmVsJyxcclxuICAgICAgICBkZWZhdWx0TWVzc2FnZTogJ1NlbGVjdCBhIGZlYXR1cmUgbGF5ZXIgdG8gZXhwb3J0LidcclxuICAgICAgfSl9XHJcbiAgICA+XHJcbiAgICAgIDxTZXR0aW5nUm93PlxyXG4gICAgICAgIDxEYXRhU291cmNlU2VsZWN0b3JcclxuICAgICAgICAgIHR5cGVzPXtJbW11dGFibGUoW0FsbERhdGFTb3VyY2VUeXBlcy5GZWF0dXJlTGF5ZXJdKX1cclxuICAgICAgICAgIHVzZURhdGFTb3VyY2VzPXtwcm9wcy51c2VEYXRhU291cmNlc31cclxuICAgICAgICAgIHVzZURhdGFTb3VyY2VzRW5hYmxlZD17cHJvcHMudXNlRGF0YVNvdXJjZXNFbmFibGVkfVxyXG4gICAgICAgICAgb25Ub2dnbGVVc2VEYXRhRW5hYmxlZD17b25Ub2dnbGVVc2VEYXRhRW5hYmxlZH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkRhdGFTb3VyY2VDaGFuZ2V9XHJcbiAgICAgICAgICB3aWRnZXRJZD17cHJvcHMuaWR9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9TZXR0aW5nUm93PlxyXG4gICAgPC9TZXR0aW5nU2VjdGlvbj5cclxuICAgIDxTZXR0aW5nU2VjdGlvblxyXG4gICAgICBjbGFzc05hbWU9XCJtYXAtc2VsZWN0b3Itc2VjdGlvblwiXHJcbiAgICAgIHRpdGxlPXtwcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2Uoe1xyXG4gICAgICAgIGlkOiAnbWFwV2lkZ2V0TGFiZWwnLFxyXG4gICAgICAgIGRlZmF1bHRNZXNzYWdlOiAnU2VsZWN0IGEgbWFwIHdpZGdldCB0byB1c2UgdGhlIGV4dGVudC4gV2hlbiB0aGVyZSBpcyBubyBzZWxlY3Rpb24gaW4gdGhlIGZlYXR1cmUgbGF5ZXIgZGF0YSBzb3VyY2UsIHRoZSBleHRlbnQgb2YgdGhlIHNlbGVjdGVkIG1hcCB3aWRnZXQgd2lsbCBiZSB1c2VkIHRvIGV4cG9ydCBkYXRhLidcclxuICAgICAgfSl9XHJcbiAgICA+XHJcbiAgICAgIDxTZXR0aW5nUm93PlxyXG4gICAgICAgIDxNYXBXaWRnZXRTZWxlY3RvclxyXG4gICAgICAgICAgb25TZWxlY3Q9e29uTWFwV2lkZ2V0U2VsZWN0ZWR9XHJcbiAgICAgICAgICB1c2VNYXBXaWRnZXRJZHM9e3Byb3BzLnVzZU1hcFdpZGdldElkc31cclxuICAgICAgICAvPlxyXG4gICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICA8L1NldHRpbmdTZWN0aW9uPlxyXG4gICAgPFNldHRpbmdTZWN0aW9uXHJcbiAgICAgIGNsYXNzTmFtZT1cImZ1bGwtZGF0YS11cmwtc2VjdGlvblwiXHJcbiAgICAgIHRpdGxlPXtwcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2Uoe1xyXG4gICAgICAgIGlkOiAnZnVsbERhdGFVcmxMYWJlbCcsXHJcbiAgICAgICAgZGVmYXVsdE1lc3NhZ2U6ICdFbnRlciB0aGUgVVJMIGZvciB0aGUgZnVsbCBkYXRhc2V0IGV4cG9ydC4nXHJcbiAgICAgIH0pfVxyXG4gICAgPlxyXG4gICAgICA8U2V0dGluZ1Jvdz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAwXCJcclxuICAgICAgICAgIHZhbHVlPXtwcm9wcy5jb25maWcuZnVsbERhdGFVcmwgfHwgJyd9XHJcbiAgICAgICAgICBvbkNoYW5nZT17b25GdWxsRGF0YVVybENoYW5nZX1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiaHR0cHM6Ly9zZXJ2aWNlcy5hcmNnaXMuY29tLy4uLlwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9TZXR0aW5nUm93PlxyXG4gICAgPC9TZXR0aW5nU2VjdGlvbj5cclxuICA8L2Rpdj5cclxufTtcclxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==