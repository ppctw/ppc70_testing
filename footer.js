'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer_c = function (_React$Component) {
  _inherits(Footer_c, _React$Component);

  function Footer_c() {
    _classCallCheck(this, Footer_c);

    return _possibleConstructorReturn(this, (Footer_c.__proto__ || Object.getPrototypeOf(Footer_c)).apply(this, arguments));
  }

  _createClass(Footer_c, [{
    key: "render",
    value: function render() {

      return React.createElement(
        "div",
        { "class": "footer" },
        React.createElement(
          "div",
          { "class": "container text-center    " },
          React.createElement(
            "div",
            { "class": "row-fluid" },
            React.createElement(
              "div",
              { "class": "span4 smallspacetop" },
              React.createElement(
                "p",
                { "class": "smaller" },
                "Copyright 2023 \xA9 Pingtung Peace Church."
              )
            ),
            React.createElement(
              "div",
              { "class": "span4" },
              React.createElement(
                "div",
                { "class": "text-center" },
                React.createElement(
                  "a",
                  { "class": "totop", href: "#" },
                  React.createElement("i", { "class": "icon-chevron-up" })
                )
              )
            ),
            React.createElement(
              "div",
              { "class": "span4 smallspacetop" },
              React.createElement(
                "ul",
                { "class": "social-links pull-right" },
                React.createElement(
                  "li",
                  { "class": "facebook-link" },
                  React.createElement(
                    "a",
                    {
                      href: "https://www.facebook.com/PPC.EKKLESIA/?locale=zh_TW",
                      "class": "facebook has-tip",
                      target: "_blank",
                      title: "Join us on Facebook"
                    },
                    "Facebook"
                  )
                ),
                React.createElement(
                  "li",
                  { "class": "youtube-link" },
                  React.createElement(
                    "a",
                    {
                      href: "https://www.youtube.com/@PingtungPeaceChurch",
                      "class": "youtube has-tip",
                      title: "youtube",
                      target: "_blank"
                    },
                    "youtube"
                  )
                ),
                React.createElement(
                  "li",
                  { "class": "instagram-link" },
                  React.createElement(
                    "a",
                    {
                      href: "https://www.instagram.com/ppcofficial/",
                      "class": "instagram has-tip",
                      title: "instagram",
                      target: "_blank"
                    },
                    "instagram"
                  )
                ),
                React.createElement(
                  "li",
                  { "class": "website-link" },
                  React.createElement(
                    "a",
                    {
                      href: "https://www.ppctw.org/",
                      "class": "website has-tip",
                      title: "website",
                      target: "_blank"
                    },
                    "webiste"
                  )
                ),
                React.createElement(
                  "li",
                  { "class": "line-link" },
                  React.createElement(
                    "a",
                    {
                      href: "https://www.ppctw.org/",
                      "class": "line has-tip",
                      title: "line",
                      target: "_blank"
                    },
                    "webiste"
                  )
                )
              ),
              React.createElement("div", { "class": "clearfix" })
            )
          )
        )
      );
    }
  }]);

  return Footer_c;
}(React.Component);

var root = ReactDOM.createRoot(document.getElementById('footer_c'));
root.render(React.createElement(Footer_c, null));