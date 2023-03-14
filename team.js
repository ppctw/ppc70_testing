'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;

var Team_component = function (_React$Component) {
  _inherits(Team_component, _React$Component);

  function Team_component(props) {
    _classCallCheck(this, Team_component);

    var _this = _possibleConstructorReturn(this, (Team_component.__proto__ || Object.getPrototypeOf(Team_component)).call(this, props));

    _this.state = { name: "ch1_1.png".date, enName: "enName" };
    return _this;
  }

  _createClass(Team_component, [{
    key: "render",
    value: function render() {

      return React.createElement(
        "div",
        { "class": "span3" },
        React.createElement(
          "div",
          { "class": "our_team" },
          React.createElement("img", {
            src: "" + this.props.imgUrl,
            alt: "team name" }),
          React.createElement(
            "div",
            { "class": "pro_detail" },
            React.createElement(
              "h3",
              { "class": "pro_name" },
              this.props.title
            ),
            React.createElement(
              "span",
              { "class": "pro_desc" },
              this.props.description
            )
          )
        )
      );
    }
  }]);

  return Team_component;
}(React.Component);

document.querySelectorAll('.team_component').forEach(function (domContainer) {

  // Read the comment ID from a data-* attribute.
  var title = domContainer.dataset.title;
  var description = domContainer.dataset.description;
  var imgUrl = domContainer.dataset.imgurl;
  var linkUrl = domContainer.dataset.linkurl;
  // console.log("domContainer",domContainer.dataset) 
  var root = ReactDOM.createRoot(domContainer);
  root.render(e(Team_component, { title: title, description: description, imgUrl: imgUrl, linkUrl: linkUrl }));
});

{/* const root = ReactDOM.createRoot(document.getElementById('columnThree_component'));
  root.render( e(ColumnThree_component, { nameAuth: "123" }));   */}