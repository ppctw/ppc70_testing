'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar_component = function (_React$Component) {
  _inherits(Navbar_component, _React$Component);

  function Navbar_component() {
    _classCallCheck(this, Navbar_component);

    return _possibleConstructorReturn(this, (Navbar_component.__proto__ || Object.getPrototypeOf(Navbar_component)).apply(this, arguments));
  }

  _createClass(Navbar_component, [{
    key: "render",
    value: function render() {

      return React.createElement(
        "div",
        { "class": "container" },
        React.createElement(
          "button",
          {
            type: "button",
            "class": "btn btn-navbar mt-5",
            "data-toggle": "collapse",
            "data-target": ".nav-collapse" },
          React.createElement("span", { "class": "icon-bar" }),
          React.createElement("span", { "class": "icon-bar" }),
          React.createElement("span", { "class": "icon-bar" })
        ),
        React.createElement(
          "a",
          {
            "class": "brand",
            href: "index.html"
          },
          " ",
          React.createElement("img", { src: "./assets/image/logo.png", "class": "width-auto" })
        ),
        React.createElement(
          "div",
          { "class": "nav-collapse collapse" },
          React.createElement(
            "ul",
            { "class": "nav" },
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "aboutPPC.html" },
                "\u8A8D\u8B58\u548C\u5E73\u6559\u6703"
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "ppcTenYears.html" },
                "2012-2022\u95DC\u9375\u5341\u5E74"
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "ppcCulture.html" },
                "PPC\u8207\u6587\u5316"
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "agape.html" },
                "\u611B\u5496\u5561Agape"
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "song.html" },
                "\u8A69\u6B4C\u5275\u4F5C"
              )
            )
          )
        )
      );
    }
  }]);

  return Navbar_component;
}(React.Component);

var root = ReactDOM.createRoot(document.getElementById('navbar_component'));
root.render(React.createElement(Navbar_component, null));