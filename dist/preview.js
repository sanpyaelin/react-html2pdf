'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _page = require('./page');

var _page2 = _interopRequireDefault(_page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Base = function Base(props) {
  return _react2.default.createElement('div', { id: props.id, dangerouslySetInnerHTML: props.html });
};

var Preview = function (_React$Component) {
  _inherits(Preview, _React$Component);

  function Preview() {
    _classCallCheck(this, Preview);

    return _possibleConstructorReturn(this, (Preview.__proto__ || Object.getPrototypeOf(Preview)).apply(this, arguments));
  }

  _createClass(Preview, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          html = _props.html,
          id = _props.id,
          children = _props.children;

      var htmlDoc = { __html: html };
      return _react2.default.createElement(
        'div',
        null,
        _reactDom2.default.createPortal(_react2.default.createElement(
          'div',
          { style: { opacity: 0, position: 'absolute', top: 0 } },
          _react2.default.createElement(
            _page2.default,
            { id: id },
            htmlDoc && _react2.default.createElement(Base, { html: htmlDoc }),
            children
          )
        ), document.body),
        htmlDoc && _react2.default.createElement(Base, { html: htmlDoc }),
        children
      );
    }
  }]);

  return Preview;
}(_react2.default.Component);

exports.default = Preview;