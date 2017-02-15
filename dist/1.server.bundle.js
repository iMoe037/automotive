exports.ids = [1];
exports.modules = {

/***/ 104:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _apiCaller = __webpack_require__(19);

	var _apiCaller2 = _interopRequireDefault(_apiCaller);

	var _CarImage = __webpack_require__(43);

	var _CarImage2 = _interopRequireDefault(_CarImage);

	var _CarInfo = __webpack_require__(44);

	var _CarInfo2 = _interopRequireDefault(_CarInfo);

	var _CarSummary = __webpack_require__(45);

	var _CarSummary2 = _interopRequireDefault(_CarSummary);

	var _CarAllStats = __webpack_require__(42);

	var _CarAllStats2 = _interopRequireDefault(_CarAllStats);

	var _Box = __webpack_require__(1);

	var _Box2 = _interopRequireDefault(_Box);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// Temp Components


	var TestPage = function (_Component) {
	  _inherits(TestPage, _Component);

	  function TestPage() {
	    _classCallCheck(this, TestPage);

	    return _possibleConstructorReturn(this, (TestPage.__proto__ || Object.getPrototypeOf(TestPage)).apply(this, arguments));
	  }

	  _createClass(TestPage, [{
	    key: 'render',

	    // testApi = () => {
	    //   return callApi('cars').then(res => {
	    //     console.log(res); // eslint-disable-line no-console
	    //   });
	    // }
	    // handleClick = () => {
	    //   console.log('clicked'); // eslint-disable-line no-console
	    // }
	    value: function render() {
	      return _jsx('div', {}, void 0, _jsx(_Box2.default, {
	        direction: 'row',
	        justify: 'start',
	        align: 'center',
	        wrap: false
	      }, void 0, _jsx(_Box2.default, {
	        justify: 'start',
	        align: 'center',
	        wrap: false
	      }, void 0, _jsx(_CarImage2.default, {
	        images: ['http://buyersguide.caranddriver.com/media/assets/submodel/7979.jpg', 'http://photos3.leftlanenews.com/cars/volkswagen/big-images/2012-volkswagen-beetle-21_653.jpg', 'http://photos3.leftlanenews.com/cars/volkswagen/big-images/2012-volkswagen-beetle-22_653.jpg', 'http://photos3.leftlanenews.com/cars/volkswagen/big-images/2012-volkswagen-beetle-23_653.jpg', 'http://photos3.leftlanenews.com/cars/volkswagen/big-images/2012-volkswagen-beetle-24_653.jpg']
	      })), _jsx(_CarInfo2.default, {
	        info: { make: 'Volkswagen', model: 'Beetle', ln_type: 'Coupe', price: 20815, rating: 2.5 }
	      })), _jsx(_CarSummary2.default, {
	        speeds: { topSpeed: 120, hp: 170, zeroSixty: 7.6 },
	        stats: { cityEpa: 25, highwayEpa: 34 },
	        summary: 'Its shape is among the most distinctive on the road; surprisingly, the Beetle, offered as a coupe or a convertible, is as fun to drive as it looks. A 170-hp turbo four has a standard five-speed manual for peppy performance; a six-speed automatic is optional. The Beetle Dune gets the automatic, sits 0.2 inch higher, and has off-road styling elements. The 210-hp turbo four R-Line is the hot rod, with either a six-speed manual or a six-speed automatic. Apple CarPlay and Android Auto are optional.'
	      }), _jsx(_CarAllStats2.default, {
	        dimensions: {
	          cargoVolume: '7 cu ft',
	          curbWeight: '3216 lb',
	          height: '58.0 in',
	          length: '168.4 in',
	          passengerVolume: '81 cu ft',
	          wheelbase: '100.0 in',
	          width: '71.2 in'
	        },
	        displacement: ['110 cu in, 1798 cc', 'Power: 170 hp @ 4800 rpm', 'Torque: 184 lb-ft @ 1500 rpm'],
	        engine: ['turbocharged and intercooled DOHC 16-valve inline-4', 'iron block and aluminum head', 'direct fuel injection'],
	        vehicleType: ['front-engine', 'front-wheel-drive', '4-passenger', '2-door convertible']
	      }));
	    }
	  }]);

	  return TestPage;
	}(_react.Component);

	exports.default = TestPage;

/***/ }

};;