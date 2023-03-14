'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var comment = {
  date: "123",
  text: 'I hope you enjoy learning React!',
  author: {
    nameAuth: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};
var e = React.createElement;

var ColumnFour_component = function (_React$Component) {
  _inherits(ColumnFour_component, _React$Component);

  function ColumnFour_component(props) {
    _classCallCheck(this, ColumnFour_component);

    var _this = _possibleConstructorReturn(this, (ColumnFour_component.__proto__ || Object.getPrototypeOf(ColumnFour_component)).call(this, props));

    _this.state = { name: "ch1_1.png".date, enName: "enName" };
    return _this;
  }

  _createClass(ColumnFour_component, [{
    key: 'render',
    value: function render() {

      return React.createElement(
        'a',
        { href: '' + this.props.linkUrl },
        React.createElement(
          'div',
          { 'class': 'column-4 column-md-6 column-xs-12   box-tab' },
          React.createElement(
            'div',
            { 'class': 'effect effect-seven', 'data-aos': 'zoom-in-left' },
            React.createElement('img', {
              src: '' + this.props.imgUrl,
              'class': 'img-fluid' }),
            React.createElement(
              'div',
              { 'class': 'tab-text' },
              React.createElement(
                'h2',
                null,
                this.props.title
              ),
              React.createElement(
                'p',
                null,
                this.props.description
              )
            )
          )
        )
      );
    }
  }]);

  return ColumnFour_component;
}(React.Component);

document.querySelectorAll('.columnFour_component').forEach(function (domContainer) {

  // Read the comment ID from a data-* attribute.
  var title = domContainer.dataset.title;
  var description = domContainer.dataset.description;
  var imgUrl = domContainer.dataset.imgurl;
  var linkUrl = domContainer.dataset.linkurl;
  // console.log("domContainer",domContainer.dataset)
  var root = ReactDOM.createRoot(domContainer);
  root.render(e(ColumnFour_component, { title: title, description: description, imgUrl: imgUrl, linkUrl: linkUrl }));
});

{/* const root = ReactDOM.createRoot(document.getElementById('columnThree_component'));
  root.render( e(ColumnThree_component, { nameAuth: "123" }));   */}