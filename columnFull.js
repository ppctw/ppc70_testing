'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;

var ColumnFull_component = function (_React$Component) {
  _inherits(ColumnFull_component, _React$Component);

  function ColumnFull_component(props) {
    _classCallCheck(this, ColumnFull_component);

    var _this = _possibleConstructorReturn(this, (ColumnFull_component.__proto__ || Object.getPrototypeOf(ColumnFull_component)).call(this, props));

    _this.state = { name: "ch1_1.png".date, enName: "3" };

    return _this;
  }

  _createClass(ColumnFull_component, [{
    key: "render",
    value: function render() {

      return React.createElement(
        "div",
        { "class": "column-3  box-tab  " },
        React.createElement(
          "div",
          { "class": "effect grid-width3 effect-seven" },
          React.createElement("img", {
            src: "" + this.props.imgUrl,
            "class": "img-fluid" }),
          React.createElement(
            "div",
            { "class": "tab-text" },
            React.createElement(
              "h2",
              null,
              this.props.title
            ),
            React.createElement(
              "p",
              { "class": "pt-5" },
              this.props.description
            )
          )
        )
      );
    }
  }]);

  return ColumnFull_component;
}(React.Component);

document.querySelectorAll('.columnFull_component').forEach(function (domContainer) {

  // Read the comment ID from a data-* attribute.
  var title = domContainer.dataset.title;
  var description = domContainer.dataset.description;
  var imgUrl = domContainer.dataset.imgurl;
  var columnValue = domContainer.dataset.columnValue;
  // console.log("domContainer",domContainer.dataset)
  var root = ReactDOM.createRoot(domContainer);
  root.render(e(ColumnFull_component, { title: title, description: description, imgUrl: imgUrl, columnValue: columnValue }));
});

{/* const root = ReactDOM.createRoot(document.getElementById('ColumnFull_component'));
  root.render( e(ColumnFull_component, { nameAuth: "123" }));   */}