(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./src/saui/js/index/_normal/button.js":
/*!*********************************************!*\
  !*** ./src/saui/js/index/_normal/button.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\n__webpack_require__(/*! core-js/modules/es.array.map */ \"./node_modules/core-js/modules/es.array.map.js\");\n\n__webpack_require__(/*! core-js/modules/es.function.name */ \"./node_modules/core-js/modules/es.function.name.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _button = _interopRequireDefault(__webpack_require__(/*! components/items/button */ \"./src/saui/components/items/button.js\"));\n\nvar _jsxFileName = \"/Users/sys/lgh/aotoohub-react/src/saui/js/index/_normal/button.js\";\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar _ao = ao2,\n    lib = _ao.lib,\n    $$ = _ao.$$;\n\nfunction template(state, props) {\n  var _this = this;\n\n  //方式一\n  // let btnList = ui_list({\n  //   data: adapter(state.buttonList)\n  // })\n  // return (\n  //   <View>\n  //     <View className=\"pages-title-lg\">按钮</View>\n  //     <btnList.UI />\n  //   </View>\n  // )\n  //方式二\n  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(View, {\n    className: \"pages-title-lg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }, \"\\u6309\\u94AE\"), state.buttonList.map(function (item, ii) {\n    ii = ii + 1;\n    return /*#__PURE__*/React.createElement(View, {\n      className: \"m-default\",\n      key: 'bl-' + ii,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 13\n      }\n    }, /*#__PURE__*/React.createElement(View, {\n      className: \"pages-title\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 15\n      }\n    }, ii + '、 ' + item.title), /*#__PURE__*/React.createElement(View, {\n      className: \"mt-default\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 15\n      }\n    }, item.child.map(function (itemx, jj) {\n      return /*#__PURE__*/React.createElement(_button.default, {\n        key: 'b-' + jj,\n        title: itemx.title || item.title,\n        itemClass: 'ml-default ss-i-block ' + itemx.name,\n        loading: itemx.load,\n        loadClass: \"icon-sm\",\n        loadType: itemx.type,\n        tap: _this[itemx.tap],\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 28\n        }\n      });\n    })));\n  }));\n}\n\nvar _default = function _default(Pager) {\n  return Pager({\n    template: template,\n    data: {\n      buttonList: [{\n        title: '默认',\n        child: [{\n          name: 'btn-default'\n        }, {\n          name: 'btn-minor'\n        }, {\n          name: 'disabled'\n        }]\n      }, {\n        title: '空心',\n        child: [{\n          name: 'btn-default plain'\n        }, {\n          name: 'btn-minor plain'\n        }, {\n          name: 'btn-grey plain'\n        }]\n      }, {\n        title: '圆角',\n        child: [{\n          name: 'btn-default round'\n        }, {\n          name: 'btn-minor round'\n        }, {\n          name: 'btn-grey round'\n        }]\n      }, {\n        title: '大小',\n        child: [{\n          name: 'btn-default larger plain'\n        }, {\n          name: 'btn-minor plain'\n        }, {\n          name: 'btn-grey small plain'\n        }]\n      }, {\n        title: '点击显示加载效果',\n        type: 'load',\n        child: [{\n          title: '自动关闭',\n          name: 'btn-default',\n          type: '1',\n          tap: 'onBtnLoad',\n          load: true\n        }, {\n          title: '手动关闭',\n          name: 'btn-minor',\n          tap: 'onBtnLoad',\n          load: true\n        }]\n      }, {\n        title: '文字链',\n        type: 'link',\n        child: [{\n          title: '文字链接',\n          name: 'ss-link-primary'\n        }, {\n          title: '下划画',\n          name: 'ss-link ss-hover-underline'\n        }]\n      }]\n    },\n    // onLoad(options){\n    //   console.log(options, '======= onLoad options');\n    //   // let $file = this.getData().file\n    //   // let file = options.file\n    //   // if (file && file !== $file) {\n    //   //   this.setData({ file })\n    //   // }\n    // },\n    // onUnload(){\n    //   console.log('====== unload a');\n    // },\n    onBtnLoad: function onBtnLoad(e, params, inst) {\n      var type = params.type;\n      inst.showLoad();\n      setTimeout(function () {\n        inst.hideLoad();\n      }, 500);\n    },\n    onReady: function onReady() {\n      this.setData({\n        file: ''\n      });\n    }\n  });\n};\n\nvar _default2 = _default;\nexports.default = _default2;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(lib, \"lib\", \"/Users/sys/lgh/aotoohub-react/src/saui/js/index/_normal/button.js\");\n  reactHotLoader.register($$, \"$$\", \"/Users/sys/lgh/aotoohub-react/src/saui/js/index/_normal/button.js\");\n  reactHotLoader.register(template, \"template\", \"/Users/sys/lgh/aotoohub-react/src/saui/js/index/_normal/button.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/sys/lgh/aotoohub-react/src/saui/js/index/_normal/button.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2F1aS9qcy9pbmRleC9fbm9ybWFsL2J1dHRvbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zYXVpL2pzL2luZGV4L19ub3JtYWwvYnV0dG9uLmpzPzZlYTEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2xpYiwgJCR9ID0gYW8yXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJjb21wb25lbnRzL2l0ZW1zL2J1dHRvblwiO1xuXG5mdW5jdGlvbiB0ZW1wbGF0ZShzdGF0ZSwgcHJvcHMpIHtcbiAgLy/mlrnlvI/kuIBcbiAgLy8gbGV0IGJ0bkxpc3QgPSB1aV9saXN0KHtcbiAgLy8gICBkYXRhOiBhZGFwdGVyKHN0YXRlLmJ1dHRvbkxpc3QpXG4gIC8vIH0pXG4gIC8vIHJldHVybiAoXG4gIC8vICAgPFZpZXc+XG4gIC8vICAgICA8VmlldyBjbGFzc05hbWU9XCJwYWdlcy10aXRsZS1sZ1wiPuaMiemSrjwvVmlldz5cbiAgLy8gICAgIDxidG5MaXN0LlVJIC8+XG4gIC8vICAgPC9WaWV3PlxuICAvLyApXG5cbiAgLy/mlrnlvI/kuoxcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFZpZXcgY2xhc3NOYW1lPVwicGFnZXMtdGl0bGUtbGdcIj7mjInpkq48L1ZpZXc+XG4gICAgICB7XG4gICAgICAgIHN0YXRlLmJ1dHRvbkxpc3QubWFwKChpdGVtLCBpaSkgPT4ge1xuICAgICAgICAgIGlpID0gaWkgKyAxXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nbS1kZWZhdWx0JyBrZXk9eydibC0nK2lpfT5cbiAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPVwicGFnZXMtdGl0bGVcIj57aWkgKyAn44CBICcgK2l0ZW0udGl0bGV9PC9WaWV3PlxuICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J210LWRlZmF1bHQnPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGl0ZW0uY2hpbGQubWFwKChpdGVteCwgamopID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxCdXR0b24ga2V5PXsnYi0nK2pqfSB0aXRsZT17aXRlbXgudGl0bGUgfHwgaXRlbS50aXRsZX0gaXRlbUNsYXNzPXsnbWwtZGVmYXVsdCBzcy1pLWJsb2NrICcgKyBpdGVteC5uYW1lfSBsb2FkaW5nPXtpdGVteC5sb2FkfSBsb2FkQ2xhc3M9J2ljb24tc20nIGxvYWRUeXBlPXtpdGVteC50eXBlfSB0YXA9e3RoaXNbaXRlbXgudGFwXX0gLz5cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKFBhZ2VyKSB7XG4gIHJldHVybiBQYWdlcih7XG4gICAgdGVtcGxhdGUsXG4gICAgZGF0YToge1xuICAgICAgYnV0dG9uTGlzdDogW1xuICAgICAgICB7dGl0bGU6ICfpu5jorqQnLCBjaGlsZDogW3tuYW1lOiAnYnRuLWRlZmF1bHQnfSwge25hbWU6ICdidG4tbWlub3InfSwge25hbWU6ICdkaXNhYmxlZCd9XX0sXG4gICAgICAgIHt0aXRsZTogJ+epuuW/gycsIGNoaWxkOiBbe25hbWU6ICdidG4tZGVmYXVsdCBwbGFpbid9LCB7bmFtZTogJ2J0bi1taW5vciBwbGFpbid9LCB7bmFtZTogJ2J0bi1ncmV5IHBsYWluJ31dfSxcbiAgICAgICAge3RpdGxlOiAn5ZyG6KeSJywgY2hpbGQ6IFt7bmFtZTogJ2J0bi1kZWZhdWx0IHJvdW5kJ30sIHtuYW1lOiAnYnRuLW1pbm9yIHJvdW5kJ30sIHtuYW1lOiAnYnRuLWdyZXkgcm91bmQnfV19LFxuICAgICAgICB7dGl0bGU6ICflpKflsI8nLCBjaGlsZDogW3tuYW1lOiAnYnRuLWRlZmF1bHQgbGFyZ2VyIHBsYWluJ30sIHtuYW1lOiAnYnRuLW1pbm9yIHBsYWluJ30sIHtuYW1lOiAnYnRuLWdyZXkgc21hbGwgcGxhaW4nfV19LFxuICAgICAgICB7dGl0bGU6ICfngrnlh7vmmL7npLrliqDovb3mlYjmnpwnLCB0eXBlOiAnbG9hZCcsIGNoaWxkOiBbe3RpdGxlOiAn6Ieq5Yqo5YWz6ZetJywgbmFtZTogJ2J0bi1kZWZhdWx0JywgdHlwZTogJzEnLCB0YXA6ICdvbkJ0bkxvYWQnLCBsb2FkOiB0cnVlfSwge3RpdGxlOiAn5omL5Yqo5YWz6ZetJywgbmFtZTogJ2J0bi1taW5vcicsIHRhcDogJ29uQnRuTG9hZCcsIGxvYWQ6IHRydWV9XX0sXG4gICAgICAgIHt0aXRsZTogJ+aWh+Wtl+mTvicsIHR5cGU6ICdsaW5rJywgY2hpbGQ6IFtcbiAgICAgICAgICB7dGl0bGU6ICfmloflrZfpk77mjqUnLCBuYW1lOiAnc3MtbGluay1wcmltYXJ5J30sXG4gICAgICAgICAge3RpdGxlOiAn5LiL5YiS55S7JywgbmFtZTogJ3NzLWxpbmsgc3MtaG92ZXItdW5kZXJsaW5lJ30sXG4gICAgICAgIF19LFxuICAgICAgXVxuICAgIH0sXG4gICAgXG4gICAgLy8gb25Mb2FkKG9wdGlvbnMpe1xuICAgIC8vICAgY29uc29sZS5sb2cob3B0aW9ucywgJz09PT09PT0gb25Mb2FkIG9wdGlvbnMnKTtcbiAgICAvLyAgIC8vIGxldCAkZmlsZSA9IHRoaXMuZ2V0RGF0YSgpLmZpbGVcbiAgICAvLyAgIC8vIGxldCBmaWxlID0gb3B0aW9ucy5maWxlXG4gICAgLy8gICAvLyBpZiAoZmlsZSAmJiBmaWxlICE9PSAkZmlsZSkge1xuICAgIC8vICAgLy8gICB0aGlzLnNldERhdGEoeyBmaWxlIH0pXG4gICAgLy8gICAvLyB9XG4gICAgLy8gfSxcblxuICAgIC8vIG9uVW5sb2FkKCl7XG4gICAgLy8gICBjb25zb2xlLmxvZygnPT09PT09IHVubG9hZCBhJyk7XG4gICAgLy8gfSxcbiAgICBvbkJ0bkxvYWQoZSwgcGFyYW1zLCBpbnN0KSB7XG4gICAgICBjb25zdCB0eXBlID0gcGFyYW1zLnR5cGVcbiAgICAgIGluc3Quc2hvd0xvYWQoKVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGluc3QuaGlkZUxvYWQoKVxuICAgICAgfSwgNTAwKTtcbiAgICB9LFxuICAgIG9uUmVhZHkoKXtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGZpbGU6ICcnXG4gICAgICB9KVxuICAgIH1cbiAgfSlcbn0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUFGQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQVBBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQXZDQTtBQXlDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUFuRkE7QUFBQTtBQUdBOzs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/saui/js/index/_normal/button.js\n");

/***/ })

}]);