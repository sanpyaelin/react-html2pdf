"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Page = function Page(_ref) {
  var children = _ref.children,
      singleMode = _ref.singleMode,
      id = _ref.id;
  return _react2.default.createElement(
    "div",
    {
      id: id, className: "bg-white shadow-1 center pa4",
      style: { width: "210mm", height: singleMode ? "297mm" : "" } },
    children
  );
};

exports.default = Page;