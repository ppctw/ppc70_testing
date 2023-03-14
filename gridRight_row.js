'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;

var GridRightRow_component = function (_React$Component) {
  _inherits(GridRightRow_component, _React$Component);

  function GridRightRow_component(props) {
    _classCallCheck(this, GridRightRow_component);

    var _this = _possibleConstructorReturn(this, (GridRightRow_component.__proto__ || Object.getPrototypeOf(GridRightRow_component)).call(this, props));

    _this.state = { name: "ch1_1.png".date, enName: "enName" };
    return _this;
  }

  _createClass(GridRightRow_component, [{
    key: "render",
    value: function render() {

      return React.createElement(
        "div",
        { "class": "container pt-5" },
        React.createElement(
          "div",
          { "class": "row hide-md " },
          React.createElement("img", {
            src: this.props.imgUrl,
            "class": "img-polaroid span3",
            alt: "img1"
          }),
          React.createElement(
            "div",
            { "class": "align-items-center justify-content-center text-center" },
            React.createElement(
              "div",
              { "class": "col-12" },
              React.createElement(
                "div",
                null,
                React.createElement(
                  "div",
                  {
                    "class": "bordered spacebot text-secondary" },
                  React.createElement(
                    "h1",
                    { "class": "text-left" },
                    this.props.title
                  ),
                  React.createElement(
                    "div",
                    { "class": "span9 pt-3 text-left" },
                    this.props.description
                  )
                )
              )
            )
          ),
          " "
        )
      );
    }
  }]);

  return GridRightRow_component;
}(React.Component);

document.querySelectorAll('.gridRightRow_component').forEach(function (domContainer) {

  // Read the comment ID from a data-* attribute.
  var title = domContainer.dataset.title;
  var description = domContainer.dataset.description;
  var imgUrl = domContainer.dataset.imgurl;
  // console.log("domContainer",domContainer.dataset) 
  var root = ReactDOM.createRoot(domContainer);
  root.render(e(GridRightRow_component, { title: title, description: description, imgUrl: imgUrl }));
});

{/* const root = ReactDOM.createRoot(document.getElementById('columnThree_component'));
  root.render( e(ColumnThree_component, { nameAuth: "123" }));   */}