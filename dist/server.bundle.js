/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + chunkId + ".server.bundle.js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.resolve();
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };

/******/ 	// uncatched error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using System.import().catch()
/******/ 		});
/******/ 	};

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 61);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("grommet/components/Box");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("grommet/components/Heading");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.CHANGE_FILTER = exports.GET_CAR_COUNT = undefined;
	exports.getCarCount = getCarCount;
	exports.fetchCarCount = fetchCarCount;
	exports.getFilter = getFilter;
	exports.fetchFilter = fetchFilter;

	var _apiCaller = __webpack_require__(19);

	var _apiCaller2 = _interopRequireDefault(_apiCaller);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Export Constants
	var GET_CAR_COUNT = exports.GET_CAR_COUNT = 'GET_CAR_COUNT';
	var CHANGE_FILTER = exports.CHANGE_FILTER = 'CHANGE_FILTER';

	function getCarCount(carCount) {
	  return {
	    type: GET_CAR_COUNT,
	    carCount: carCount
	  };
	}

	function fetchCarCount(query) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('carcount', 'get', null, query).then(function (res) {
	      dispatch(getCarCount(res));
	    });
	  };
	}

	function getFilter(filter) {
	  return {
	    type: CHANGE_FILTER,
	    filter: filter
	  };
	}

	function fetchFilter(filterData) {
	  return function (dispatch) {
	    return dispatch(getFilter(filterData));
	  };
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getFilter = exports.getCount = exports.initialState = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // Import Actions


	var _AppActions = __webpack_require__(5);

	// Initial State
	var initialState = exports.initialState = {
	  carCount: 0,
	  filter: {
	    make: 'All',
	    ln_type: 'All',
	    minRating: '1',
	    maxRating: '5'
	  }
	};

	var AppReducer = function AppReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];

	  switch (action.type) {
	    case _AppActions.GET_CAR_COUNT:
	      return _extends({}, state, { carCount: action.carCount });
	    case _AppActions.CHANGE_FILTER:
	      return _extends({}, state, { filter: action.filter });
	    default:
	      return state;
	  }
	};

	/* Selectors */

	// Get Car Count
	var getCount = exports.getCount = function getCount(state) {
	  return state.app.carCount;
	};

	// Get filter
	var getFilter = exports.getFilter = function getFilter(state) {
	  return state.app.filter;
	};

	// Export Reducer
	exports.default = AppReducer;

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("react-router-redux");

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("react-helmet");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DELETE_CAR = exports.ADD_CARS = exports.ADD_CAR = undefined;
	exports.addCar = addCar;
	exports.addCarRequest = addCarRequest;
	exports.addCars = addCars;
	exports.fetchCars = fetchCars;
	exports.fetchCar = fetchCar;
	exports.deleteCar = deleteCar;

	var _apiCaller = __webpack_require__(19);

	var _apiCaller2 = _interopRequireDefault(_apiCaller);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Export Constants
	var ADD_CAR = exports.ADD_CAR = 'ADD_CAR';
	var ADD_CARS = exports.ADD_CARS = 'ADD_CARS';
	var DELETE_CAR = exports.DELETE_CAR = 'DELETE_CAR';

	// Export Actions
	function addCar(car) {
	  return {
	    type: ADD_CAR,
	    car: car
	  };
	}

	function addCarRequest(car) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('cars', 'car', {
	      car: {
	        model: car.model,
	        make: car.make,
	        images: car.images,
	        city_epa: car.city_epa,
	        dimensions: car.dimensions,
	        displacement: car.displacement,
	        engine: car.engine,
	        highway_epa: car.highway_epa,
	        hp: car.hp,
	        ln_type: car.ln_type,
	        msrp: car.msrp,
	        overview: car.overview,
	        price: car.price,
	        rating: car.rating,
	        summary: car.summary,
	        top_speed: car.top_speed,
	        transmission: car.transmission,
	        vehicle_type: car.vehicle_type,
	        vehicle_type_more: car.vehicle_type_more,
	        zero_sixty: car.zero_sixty
	      }
	    }).then(function (res) {
	      return dispatch(addCar(res.car));
	    });
	  };
	}

	function addCars(cars) {
	  return {
	    type: ADD_CARS,
	    cars: cars
	  };
	}

	function fetchCars(query) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('cars', 'get', null, query).then(function (res) {
	      dispatch(addCars(res.cars));
	    });
	  };
	}

	function fetchCar(id) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('cars/' + id).then(function (res) {
	      return dispatch(addCar(res.car));
	    });
	  };
	}

	function deleteCar(id) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('cars/' + id, 'delete').then(function () {
	      return dispatch(deleteCar(id));
	    });
	  };
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getCar = exports.getCars = undefined;

	var _CarActions = __webpack_require__(9);

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	// Inital State
	var initalState = { data: [] };

	var CarReducer = function CarReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initalState;
	  var action = arguments[1];

	  switch (action.type) {
	    case _CarActions.ADD_CAR:
	      return {
	        data: [action.car].concat(_toConsumableArray(state.data))
	      };

	    case _CarActions.ADD_CARS:
	      return {
	        data: action.cars
	      };

	    case _CarActions.DELETE_CAR:
	      return {
	        data: state.data.filter(function (car) {
	          return car.id !== action.id;
	        })
	      };

	    default:
	      return state;
	  }
	};

	/* Selectors */

	// Get all cars
	var getCars = exports.getCars = function getCars(state) {
	  return state.cars.data;
	};

	// Get car by id
	var getCar = exports.getCar = function getCar(state, id) {
	  return state.cars.data.filter(function (car) {
	    return car._id === id;
	  })[0];
	};

	// Export Reducer
	exports.default = CarReducer;

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("grommet/components/Anchor");

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = require("grommet/components/App");

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("grommet/components/Paragraph");

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var config = {
	  mongoURL: process.env.MONGODB_URI || 'mongodb://localhost:27017/mern-starter',
	  port: process.env.PORT || 8000
	};

	exports.default = config;

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = require("mongoose");

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = require("webpack");

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.API_URL = undefined;
	exports.default = callApi;

	var _isomorphicFetch = __webpack_require__(93);

	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

	var _config = __webpack_require__(14);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var API_URL = exports.API_URL = typeof window === 'undefined' || process.env.NODE_ENV === 'test' ? process.env.BASE_URL || 'http://localhost:' + (process.env.PORT || _config2.default.port) + '/api' : '/api';

	function callApi(endpoint) {
	  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'get';
	  var body = arguments[2];
	  var query = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

	  // const page = query ? `?page=${query}` : '';
	  return (0, _isomorphicFetch2.default)(API_URL + '/' + endpoint + query, {
	    headers: { 'content-type': 'application/json' },
	    method: method
	  }).then(function (response) {
	    return response.json().then(function (json) {
	      return { json: json, response: response };
	    });
	  }).then(function (_ref) {
	    var json = _ref.json,
	        response = _ref.response;

	    if (!response.ok) {
	      return Promise.reject(json);
	    }

	    return json;
	  }).then(function (response) {
	    return response;
	  }, function (error) {
	    return error;
	  });
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _reduxDevtools = __webpack_require__(99);

	var _reduxDevtoolsLogMonitor = __webpack_require__(101);

	var _reduxDevtoolsLogMonitor2 = _interopRequireDefault(_reduxDevtoolsLogMonitor);

	var _reduxDevtoolsDockMonitor = __webpack_require__(100);

	var _reduxDevtoolsDockMonitor2 = _interopRequireDefault(_reduxDevtoolsDockMonitor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _reduxDevtools.createDevTools)(_jsx(_reduxDevtoolsDockMonitor2.default, {
	  toggleVisibilityKey: 'ctrl-h',
	  changePositionKey: 'ctrl-w'
	}, void 0, _jsx(_reduxDevtoolsLogMonitor2.default, {})));

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	// Import Actions


	// Import Selectors


	// Import Components


	exports.CarDetailPage = CarDetailPage;

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(3);

	var _reactHelmet = __webpack_require__(8);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	var _CarActions = __webpack_require__(9);

	var _CarReducer = __webpack_require__(10);

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

	var _App = __webpack_require__(12);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function CarDetailPage(props) {
	  return _jsx(_App2.default, {}, void 0, _jsx(_reactHelmet2.default, {
	    title: props.car.make + ' - ' + props.car.model
	  }), _jsx(_Box2.default, {
	    direction: 'row',
	    justify: 'start',
	    align: 'center',
	    wrap: false
	  }, void 0, _jsx(_Box2.default, {
	    justify: 'start',
	    align: 'center',
	    wrap: false
	  }, void 0, _jsx(_CarImage2.default, {
	    images: props.car.images
	  })), _jsx(_CarInfo2.default, {
	    info: { make: props.car.make, model: props.car.model, ln_type: props.car.ln_type, price: props.car.price, rating: props.car.rating, msrp: props.car.msrp }
	  })), _jsx(_CarSummary2.default, {
	    speeds: { topSpeed: props.car.top_speed, hp: props.car.hp, zeroSixty: props.car.zero_sixty },
	    mpg: { cityEpa: props.car.city_epa, highwayEpa: props.car.highway_epa },
	    summary: props.car.summary
	  }), _jsx(_CarAllStats2.default, {
	    dimensions: props.car.dimensions,
	    displacement: props.car.displacement,
	    engine: props.car.engine,
	    vehicleType: props.car.vehicle_type_more
	  }));
	}

	// Actions required to provide data for this component to render sever side.
	CarDetailPage.need = [function (params) {
	  return (0, _CarActions.fetchCar)(params._id);
	}];

	// Retrieve data from store as props
	function mapStateToProps(state, props) {
	  return {
	    car: (0, _CarReducer.getCar)(state, props.params.id)
	  };
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(CarDetailPage);

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	// Import Components


	// Import Actions


	// Import Selectors


	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(3);

	var _lodash = __webpack_require__(29);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _reactDom = __webpack_require__(98);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _CarList = __webpack_require__(49);

	var _CarList2 = _interopRequireDefault(_CarList);

	var _CarActions = __webpack_require__(9);

	var _AppActions = __webpack_require__(5);

	var _CarReducer = __webpack_require__(10);

	var _AppReducer = __webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// Remove page from object
	function removeProp(obj, propName) {
	  var changedObj = _extends({}, obj);
	  if (changedObj[propName]) {
	    delete changedObj[propName];
	  }
	  return changedObj;
	}

	// Check differences in filter params and updates the car count
	function filterParams(oldParam, newParam, store) {
	  if (!_lodash2.default.isEqual(removeProp(oldParam, 'page'), removeProp(newParam, 'page'))) {
	    var filter = _lodash2.default.isEmpty(newParam) ? _AppReducer.initalState.filter : newParam;
	    store.dispatch((0, _AppActions.fetchFilter)(filter));
	  }
	}

	var CarListPage = function (_Component) {
	  _inherits(CarListPage, _Component);

	  function CarListPage() {
	    _classCallCheck(this, CarListPage);

	    return _possibleConstructorReturn(this, (CarListPage.__proto__ || Object.getPrototypeOf(CarListPage)).apply(this, arguments));
	  }

	  _createClass(CarListPage, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      // listen to route changes and update data accordingly
	      var store = this.context.store;
	      var currentLocation = {};

	      var handlechange = function handlechange() {
	        var previousLocation = currentLocation;

	        var storeState = store.getState();
	        currentLocation = storeState.routing.locationBeforeTransitions;

	        // Check if query changed and display data accordingly
	        if (currentLocation.pathname.length > 5) {
	          return;
	        } else if (previousLocation.search !== currentLocation.search) {
	          var search = currentLocation.search;
	          _this2.props.dispatch((0, _CarActions.fetchCars)(search));
	          window.scrollTo(0, 0);
	          var scrollDiv = _reactDom2.default.findDOMNode(_this2).children[0].children[1];
	          scrollDiv.scrollTop = 0;

	          // Check if the filter params have changed and update the filter if neccessary
	          filterParams(previousLocation.query, currentLocation.query, store);
	        }
	      };

	      this.unsubscribe = store.subscribe(handlechange);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.unsubscribe();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _jsx('div', {}, void 0, _jsx(_CarList2.default, {
	        cars: this.props.cars,
	        page: this.props.location.query.page
	      }));
	    }
	  }]);

	  return CarListPage;
	}(_react.Component);

	// Actions required to provide data for this component to render in server side.


	CarListPage.need = [function () {
	  return (0, _CarActions.fetchCars)();
	}];

	// Retrieve data from store as props
	function mapStateToProps(state) {
	  return {
	    cars: (0, _CarReducer.getCars)(state)
	  };
	}

	CarListPage.contextTypes = {
	  router: _react2.default.PropTypes.object,
	  store: _react2.default.PropTypes.object
	};

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(CarListPage);

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	// Import Components


	exports.MainPage = MainPage;

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _MainHero = __webpack_require__(55);

	var _MainHero2 = _interopRequireDefault(_MainHero);

	var _MainPageStats = __webpack_require__(56);

	var _MainPageStats2 = _interopRequireDefault(_MainPageStats);

	var _Paragraph = __webpack_require__(13);

	var _Paragraph2 = _interopRequireDefault(_Paragraph);

	var _Box = __webpack_require__(1);

	var _Box2 = _interopRequireDefault(_Box);

	var _Headline = __webpack_require__(70);

	var _Headline2 = _interopRequireDefault(_Headline);

	var _Heading = __webpack_require__(2);

	var _Heading2 = _interopRequireDefault(_Heading);

	var _App = __webpack_require__(12);

	var _App2 = _interopRequireDefault(_App);

	var _MainPage = {
	  "mainParagraph": "Uf9foKQ6rKSmI-vzkE-Mr"
	};

	var _MainPage2 = _interopRequireDefault(_MainPage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _ref = _jsx(_MainHero2.default, {});

	var _ref2 = _jsx(_Headline2.default, {
	  align: 'center',
	  size: 'medium'
	}, void 0, 'AutoMotive', _jsx(_Heading2.default, {
	  tag: 'h3'
	}, void 0, ' What Drives You? \u2122'));

	function MainPage() {
	  return _jsx('div', {}, void 0, _ref, _jsx(_App2.default, {}, void 0, _jsx(_Box2.default, {
	    align: 'center',
	    pad: 'large'
	  }, void 0, _ref2, _jsx(_Paragraph2.default, {
	    size: 'large',
	    align: 'center',
	    className: _MainPage2.default.mainParagraph
	  }, void 0, 'Finding the right car is a tedious process. Questions like \u201Cis this car fuel efficient?\u201D, \u201Cdoes this car pick up fast?\u201D, \u201Cis this car roomy enough?\u201D, and many more questions go through a potential buyer\u2019s mind. AutoMotive understands this struggle and that\u2019s why we\u2019d like to know what drives you? Our goal is to provide data in a clean efficient format to make your car buying experience easier.'))));
	}

	exports.default = MainPage;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _mongoose = __webpack_require__(16);

	var _mongoose2 = _interopRequireDefault(_mongoose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Schema = _mongoose2.default.Schema;

	var carSchema = new Schema({
	  model: { type: String, required: true },
	  make: { type: String, required: true },
	  images: { type: [String], default: ['http://placehold.it/800x500?text=No+Image'] },
	  city_epa: { type: Number },
	  dimensions: { type: Object },
	  displacement: { type: [String] },
	  engine: { type: [String] },
	  highway_epa: { type: Number },
	  hp: { type: Number },
	  ln_type: { type: String },
	  msrp: { type: String },
	  overview: { type: String },
	  price: { type: Number },
	  rating: { type: Number },
	  summary: { type: String },
	  top_speed: { type: Number },
	  transmission: { type: String },
	  vehicle_type: { type: String },
	  vehicle_type_more: { type: [String] },
	  zero_sixty: { type: Number }
	});

	exports.default = _mongoose2.default.model('Car', carSchema);

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = require("grommet/components/Label");

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = require("grommet/components/List");

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = require("grommet/components/ListItem");

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = require("grommet/components/Menu");

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = require("lodash");

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /* eslint-disable global-require */


	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(4);

	var _App = __webpack_require__(46);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// require.ensure polyfill for node
	if (false) {
	  require.ensure = function requireModule(deps, callback) {
	    callback(require);
	  };
	}

	/* Workaround for async react routes to work with react-hot-reloader till
	  https://github.com/reactjs/react-router/issues/2182 and
	  https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
	 */
	if (process.env.NODE_ENV !== 'production') {
	  // Require async routes only in development for react-hot-reloader to work.
	  __webpack_require__(23);
	  __webpack_require__(22);
	  __webpack_require__(21);
	  // require('./modules/Car/pages/PostListPage/PostListPage');
	  // require('./modules/Car/pages/PostDetailPage/PostDetailPage');
	}

	// react-router setup with code-splitting
	// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
	exports.default = _jsx(_reactRouter.Route, {
	  path: '/',
	  component: _App2.default
	}, void 0, _jsx(_reactRouter.IndexRoute, {
	  getComponent: function getComponent(nextState, cb) {
	    Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
	      cb(null, __webpack_require__(23).default);
	    }).bind(null, __webpack_require__));
	  }
	}), _jsx(_reactRouter.Route, {
	  path: '/test',
	  getComponent: function getComponent(nextState, cb) {
	    __webpack_require__.e/* nsure */(1).catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
	      cb(null, __webpack_require__(104).default);
	    }).bind(null, __webpack_require__));
	  }
	}), _jsx(_reactRouter.Route, {
	  path: '/cars',
	  getComponent: function getComponent(nextState, cb) {
	    Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
	      cb(null, __webpack_require__(22).default);
	    }).bind(null, __webpack_require__));
	  }
	}), _jsx(_reactRouter.Route, {
	  path: '/cars/:id',
	  getComponent: function getComponent(nextState, cb) {
	    Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
	      cb(null, __webpack_require__(21).default);
	    }).bind(null, __webpack_require__));
	  }
	}));

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.configureStore = configureStore;

	var _redux = __webpack_require__(30);

	var _reduxThunk = __webpack_require__(102);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _reactRouterRedux = __webpack_require__(7);

	var _reactRouter = __webpack_require__(4);

	var _DevTools = __webpack_require__(20);

	var _DevTools2 = _interopRequireDefault(_DevTools);

	var _reducers = __webpack_require__(59);

	var _reducers2 = _interopRequireDefault(_reducers);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Main store function
	 */
	function configureStore() {
	  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  var middleware = (0, _reactRouterRedux.routerMiddleware)(_reactRouter.browserHistory);

	  // Middleware and store enhancers
	  var enhancers = [(0, _redux.applyMiddleware)(_reduxThunk2.default), (0, _redux.applyMiddleware)(middleware)];

	  if (process.env.CLIENT && process.env.NODE_ENV === 'development') {
	    // Enable DevTools only when rendering on client and during development.
	    enhancers.push(window.devToolsExtension ? window.devToolsExtension() : _DevTools2.default.instrument());
	  }

	  var store = (0, _redux.createStore)(_reducers2.default, initialState, _redux.compose.apply(undefined, enhancers));

	  // For hot reloading reducers
	  if (false) {
	    // Enable Webpack hot module replacement for reducers
	    module.hot.accept('./reducers', function () {
	      var nextReducer = require('./reducers').default; // eslint-disable-line global-require
	      store.replaceReducer(nextReducer);
	    });
	  }

	  return store;
	}

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _express = __webpack_require__(15);

	var _car = __webpack_require__(60);

	var CarController = _interopRequireWildcard(_car);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var router = new _express.Router();

	// Get all Cars
	router.route('/cars').get(CarController.getCars);

	// Get car count
	router.route('/carcount').get(CarController.getCarCount);

	// Get one car by id
	router.route('/cars/:id').get(CarController.getCar);

	// Add a new Car
	router.route('/cars').post(CarController.addCar);

	// Update a Car
	router.route('/cars/:id').put(CarController.updateCar);

	// Delete a Car
	router.route('/cars/:id').delete(CarController.deleteCar);

	exports.default = router;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  _car2.default.count().exec(function (err, count) {
	    if (count > 0) {
	      return;
	    }
	    var dataPath = _path2.default.join(__dirname, '/data.json');
	    var data = JSON.parse(fs.readFileSync(dataPath));

	    var wrapData = data.map(function (elem) {
	      return new _car2.default(elem);
	    });

	    _car2.default.create(wrapData, function (error) {
	      if (error) {
	        console.error(error); // eslint-disable-line no-console
	      }
	    });
	  });
	};

	var _car = __webpack_require__(24);

	var _car2 = _interopRequireDefault(_car);

	var _fs = __webpack_require__(63);

	var fs = _interopRequireWildcard(_fs);

	var _path = __webpack_require__(17);

	var _path2 = _interopRequireDefault(_path);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	/* WEBPACK VAR INJECTION */}.call(exports, "server"))

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.fetchComponentData = fetchComponentData;

	var _promiseUtils = __webpack_require__(62);

	function fetchComponentData(store, components, params) {
	  var needs = components.reduce(function (prev, current) {
	    return (current.need || []).concat((current.WrappedComponent && current.WrappedComponent.need !== current.need ? current.WrappedComponent.need : []) || []).concat(prev);
	  }, []);

	  return (0, _promiseUtils.sequence)(needs, function (need) {
	    return store.dispatch(need(params, store.getState()));
	  });
	} /*
	  Utility function to fetch required data for component to render in server side.
	  This was inspired from https://github.com/caljrimmer/isomorphic-redux-app/blob/73e6e7d43ccd41e2eb557a70be79cebc494ee54b/src/common/api/fetchComponentDataBeforeRender.js
	  */

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var webpack = __webpack_require__(18);
	var cssnext = __webpack_require__(95);
	var postcssFocus = __webpack_require__(96);
	var postcssReporter = __webpack_require__(97);

	module.exports = {
	  devtool: 'cheap-module-eval-source-map',

	  entry: {
	    app: ['eventsource-polyfill', 'webpack-hot-middleware/client', 'webpack/hot/only-dev-server', 'react-hot-loader/patch', './client/index.js'],
	    vendor: ['react', 'react-dom']
	  },

	  output: {
	    path: __dirname,
	    filename: 'app.js',
	    publicPath: 'http://0.0.0.0:8000/'
	  },

	  resolve: {
	    extensions: ['', '.js', '.jsx', '.scss', '.css', '.json'],
	    modules: ['client', 'node_modules']
	  },

	  module: {
	    loaders: [{
	      test: /\.css$/,
	      exclude: /node_modules/,
	      loader: 'style-loader!css-loader?localIdentName=[name]__[local]__[hash:base64:5]&modules&importLoaders=1&sourceMap!postcss-loader'
	    }, {
	      test: /\.css$/,
	      include: /node_modules/,
	      loaders: ['style-loader', 'css-loader']
	    }, {
	      test: /\.jsx*$/,
	      exclude: [/node_modules/, /.+\.config.js/],
	      loader: 'babel'
	    }, {
	      test: /\.scss$/,
	      loader: 'style!css!sass?outputStyle=compressed'
	    }, {
	      test: /\.(jpe?g|gif|png|svg)$/i,
	      loader: 'url-loader?limit=10000'
	    }, {
	      test: /\.json$/,
	      loader: 'json-loader'
	    }]
	  },

	  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.optimize.CommonsChunkPlugin({
	    name: 'vendor',
	    minChunks: Infinity,
	    filename: 'vendor.js'
	  }), new webpack.DefinePlugin({
	    'process.env': {
	      CLIENT: JSON.stringify(true),
	      'NODE_ENV': JSON.stringify('development')
	    }
	  })],

	  sassLoader: {
	    includePaths: ['./node_modules']
	  },

	  postcss: function postcss() {
	    return [postcssFocus(), cssnext({
	      browsers: ['last 2 versions', 'IE > 10']
	    }), postcssReporter({
	      clearMessages: true
	    })];
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = require("compression");

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = require("webpack-dev-middleware");

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = require("webpack-hot-middleware");

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	// Import Components


	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _Accordion = __webpack_require__(64);

	var _Accordion2 = _interopRequireDefault(_Accordion);

	var _AccordionPanel = __webpack_require__(65);

	var _AccordionPanel2 = _interopRequireDefault(_AccordionPanel);

	var _List = __webpack_require__(26);

	var _List2 = _interopRequireDefault(_List);

	var _ListItem = __webpack_require__(27);

	var _ListItem2 = _interopRequireDefault(_ListItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Converts text to propercase
	function convertCase(word) {
	  var firstLetter = word.slice(0, 1).toUpperCase();
	  var restOfWord = word.slice(1).toLowerCase();

	  var fixedWord = firstLetter + restOfWord;

	  fixedWord = fixedWord === 'Vehicletype' ? 'Vehicle Type' : fixedWord;
	  return fixedWord;
	}

	// Array to unorderedlist and accordion panel
	function arrToUl(arr, panelName, keyIdx) {
	  if (arr === null) {
	    return null;
	  }

	  var listItems = arr.map(function (elem, idx) {
	    return _jsx(_ListItem2.default, {}, panelName + '-' + idx, ' ', elem, ' ');
	  });

	  return _jsx(_AccordionPanel2.default, {
	    pad: 'small',
	    heading: panelName
	  }, panelName + '-' + keyIdx, _jsx(_List2.default, {}, void 0, listItems));
	}

	// Removes Null Props and convert to JSX
	function removeNullProps(props) {
	  var propsArr = Object.values(props);
	  var propsKey = Object.keys(props);

	  var convertedProps = [];
	  propsArr.forEach(function (prop, idx) {
	    var panelName = convertCase(propsKey[idx]);
	    if (prop !== null && Array.isArray(prop)) {
	      convertedProps.push(arrToUl(prop, panelName, idx));
	    } else if (prop !== null && (typeof prop === 'undefined' ? 'undefined' : _typeof(prop)) === 'object') {
	      var arrVal = [];
	      for (var key in prop) {
	        // eslint-disable-line
	        if (prop.hasOwnProperty(key)) {
	          arrVal.push(key + ': ' + prop[key]);
	        }
	      }
	      convertedProps.push(arrToUl(arrVal, panelName, idx));
	    }
	  });
	  convertedProps = convertedProps.length > 0 ? convertedProps : null;
	  return convertedProps;
	}

	function CarAllStats(props) {
	  var removedEmptyProps = removeNullProps(props);
	  if (removedEmptyProps) {
	    return _jsx(_Accordion2.default, {}, void 0, removedEmptyProps);
	  }
	  return null;
	}

	exports.default = CarAllStats;

/***/ },
/* 43 */
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

	var _Image = __webpack_require__(72);

	var _Image2 = _interopRequireDefault(_Image);

	var _Box = __webpack_require__(1);

	var _Box2 = _interopRequireDefault(_Box);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// Import Components


	var CarImage = function (_Component) {
	  _inherits(CarImage, _Component);

	  function CarImage(props) {
	    _classCallCheck(this, CarImage);

	    var _this = _possibleConstructorReturn(this, (CarImage.__proto__ || Object.getPrototypeOf(CarImage)).call(this, props));

	    _this.state = {
	      mainImage: _this.props.images[0],
	      otherImages: _this.props.images.slice(1)
	    };
	    return _this;
	  }

	  _createClass(CarImage, [{
	    key: 'handleClick',
	    value: function handleClick(idx) {
	      var tempMain = this.state.otherImages[idx];
	      var tempOther = this.state.otherImages;
	      tempOther[idx] = this.state.mainImage;

	      this.setState({
	        otherImages: tempOther,
	        mainImage: tempMain
	      });
	    }
	  }, {
	    key: 'hasOtherImages',
	    value: function hasOtherImages() {
	      var _this2 = this;

	      if (this.state.otherImages.length > 0) {
	        return _jsx(_Box2.default, {
	          pad: 'small',
	          justify: 'center',
	          direction: 'row',
	          responsive: false,
	          separator: 'all'
	        }, void 0, this.state.otherImages.map(function (image, idx) {
	          return _jsx(_Box2.default, {
	            margin: { right: 'small', vertical: 'small' },
	            separator: 'all'
	          }, 'Image-' + idx, _jsx(_Image2.default, {
	            onClick: function onClick() {
	              return _this2.handleClick(idx);
	            },
	            src: image,
	            size: 'thumb'
	          }));
	        }));
	      }
	      return null;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _jsx(_Box2.default, {
	        margin: 'small',
	        pad: 'small'
	      }, void 0, _jsx(_Box2.default, {
	        size: 'medium'
	      }, void 0, _jsx(_Image2.default, {
	        src: this.state.mainImage,
	        full: 'horizontal',
	        fit: 'cover'
	      })), this.hasOtherImages());
	    }
	  }]);

	  return CarImage;
	}(_react.Component);

	exports.default = CarImage;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	// Import Components


	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _numeral = __webpack_require__(94);

	var _numeral2 = _interopRequireDefault(_numeral);

	var _Box = __webpack_require__(1);

	var _Box2 = _interopRequireDefault(_Box);

	var _Heading = __webpack_require__(2);

	var _Heading2 = _interopRequireDefault(_Heading);

	var _CarRating = __webpack_require__(53);

	var _CarRating2 = _interopRequireDefault(_CarRating);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function vehicleType(prop) {
	  if (prop) {
	    return _jsx(_Heading2.default, {
	      align: 'center',
	      margin: 'small',
	      tag: 'h3'
	    }, void 0, 'Vehicle type: ' + prop);
	  }
	  return null;
	}

	function rateExists(rate) {
	  if (rate) {
	    return _jsx(_CarRating2.default, {
	      rating: rate
	    });
	  }
	  return null;
	}

	function createPrice(price, msrp) {
	  if (price !== '$0') {
	    return _jsx(_Heading2.default, {
	      align: 'center',
	      margin: 'small',
	      tag: 'h3'
	    }, void 0, 'Price: ' + price);
	  } else if (msrp) {
	    return _jsx(_Heading2.default, {
	      align: 'center',
	      margin: 'small',
	      tag: 'h3'
	    }, void 0, 'MSRP: ' + msrp);
	  }
	  return null;
	}

	function CarInfo(props) {
	  var price = (0, _numeral2.default)(props.info.price).format('$0,0');
	  return _jsx(_Box2.default, {
	    justify: 'start',
	    align: 'center',
	    wrap: false,
	    margin: 'small',
	    pad: 'small',
	    full: 'horizontal'
	  }, void 0, _jsx(_Heading2.default, {
	    align: 'center',
	    margin: 'small'
	  }, void 0, props.info.make + ' ' + props.info.model), vehicleType(props.info.ln_type), rateExists(props.info.rating), createPrice(price, props.info.msrp));
	}

	exports.default = CarInfo;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	// Import components


	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _Box = __webpack_require__(1);

	var _Box2 = _interopRequireDefault(_Box);

	var _Heading = __webpack_require__(2);

	var _Heading2 = _interopRequireDefault(_Heading);

	var _Paragraph = __webpack_require__(13);

	var _Paragraph2 = _interopRequireDefault(_Paragraph);

	var _CarMPGandSpeeds = __webpack_require__(52);

	var _CarMPGandSpeeds2 = _interopRequireDefault(_CarMPGandSpeeds);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _ref = _jsx(_Heading2.default, {
	  align: 'center',
	  tag: 'h2',
	  margin: 'none'
	}, void 0, 'Summary');

	function CarSummary(props) {
	  if (props.summary) {
	    return _jsx(_Box2.default, {
	      pad: 'small',
	      separator: 'horizontal',
	      direction: 'row',
	      alignContent: 'center',
	      justify: 'center'
	    }, void 0, _jsx(_Box2.default, {
	      align: 'center',
	      pad: { horizontal: 'medium' }
	    }, void 0, _ref, _jsx(_Paragraph2.default, {}, void 0, props.summary)), _jsx(_CarMPGandSpeeds2.default, {
	      mpg: props.mpg,
	      speeds: props.speeds
	    }));
	  }
	}

	exports.default = CarSummary;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.App = undefined;

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _reactHelmet = __webpack_require__(8);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	var _DevTools = __webpack_require__(20);

	var _DevTools2 = _interopRequireDefault(_DevTools);

	var _Header = __webpack_require__(48);

	var _Header2 = _interopRequireDefault(_Header);

	var _Footer = __webpack_require__(47);

	var _Footer2 = _interopRequireDefault(_Footer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	// import { connect } from 'react-redux';

	// Import Components


	// Import Actions
	// import { toggleAddPost } from './AppActions';

	var _ref = _jsx(_DevTools2.default, {});

	var _ref2 = _jsx(_Header2.default, {});

	var _ref3 = _jsx(_Footer2.default, {});

	var App = exports.App = function (_Component) {
	  _inherits(App, _Component);

	  function App(props) {
	    _classCallCheck(this, App);

	    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

	    _this.state = { isMounted: false };
	    return _this;
	  }

	  _createClass(App, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.setState({ isMounted: true }); // eslint-disable-line
	    }

	    // toggleAddPostSection = () => {
	    //   this.props.dispatch(toggleAddPost());
	    // };

	  }, {
	    key: 'render',
	    value: function render() {
	      return _jsx('div', {}, void 0, this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && _ref, _jsx('div', {}, void 0, _jsx(_reactHelmet2.default, {
	        title: 'AutoMotive',
	        titleTemplate: '%s - What Drives You?',
	        meta: [{ charset: 'utf-8' }, {
	          'http-equiv': 'X-UA-Compatible',
	          content: 'IE=edge'
	        }, {
	          name: 'viewport',
	          content: 'width=device-width, initial-scale=1'
	        }]
	      }), _ref2, _jsx('div', {}, void 0, this.props.children), _ref3));
	    }
	  }]);

	  return App;
	}(_react.Component);

	// Retrieve data from store as props
	// function mapStateToProps(store) {
	//   return {
	//     intl: store.intl,
	//   };
	// }

	exports.default = App;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	// Import Components


	exports.Footer = Footer;

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _Footer = __webpack_require__(68);

	var _Footer2 = _interopRequireDefault(_Footer);

	var _Box = __webpack_require__(1);

	var _Box2 = _interopRequireDefault(_Box);

	var _Paragraph = __webpack_require__(13);

	var _Paragraph2 = _interopRequireDefault(_Paragraph);

	var _Menu = __webpack_require__(28);

	var _Menu2 = _interopRequireDefault(_Menu);

	var _Anchor = __webpack_require__(11);

	var _Anchor2 = _interopRequireDefault(_Anchor);

	var _Globe = __webpack_require__(83);

	var _Globe2 = _interopRequireDefault(_Globe);

	var _SocialGithub = __webpack_require__(88);

	var _SocialGithub2 = _interopRequireDefault(_SocialGithub);

	var _SocialLinkedin = __webpack_require__(89);

	var _SocialLinkedin2 = _interopRequireDefault(_SocialLinkedin);

	var _Mail = __webpack_require__(86);

	var _Mail2 = _interopRequireDefault(_Mail);

	var _Footer3 = {
	  "resize": "_2tDR1Fa296J8IBoJT5Pez1"
	};

	var _Footer4 = _interopRequireDefault(_Footer3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _ref = _jsx(_Box2.default, {
	  pad: 'small',
	  direction: 'row'
	}, void 0, _jsx(_Paragraph2.default, {
	  margin: 'none'
	}, void 0, '\xA9 AutoMotive - Immad Mohamed - 2017'));

	var _ref2 = _jsx(_Anchor2.default, {
	  icon: _jsx(_Globe2.default, {}),
	  href: 'https://www.immadmohamed.com',
	  target: '_blank'
	});

	var _ref3 = _jsx(_Anchor2.default, {
	  icon: _jsx(_SocialGithub2.default, {}),
	  href: 'https://github.com/iMoe037/automotive',
	  target: '_blank'
	});

	var _ref4 = _jsx(_Anchor2.default, {
	  icon: _jsx(_SocialLinkedin2.default, {}),
	  href: 'https://www.linkedin.com/in/immadmohamed',
	  target: '_blank'
	});

	var _ref5 = _jsx(_Anchor2.default, {
	  icon: _jsx(_Mail2.default, {}),
	  href: 'mailto:i.mohamed037@gmail.com?Subject=AutoMotive%20is%20cool!'
	});

	function Footer() {
	  return _jsx(_Footer2.default, {
	    justify: 'between',
	    colorIndex: 'neutral-1-a',
	    size: 'medium',
	    wrap: true
	  }, void 0, _ref, _jsx(_Menu2.default, {
	    direction: 'row',
	    responsive: false,
	    className: _Footer4.default.resize
	  }, void 0, _ref2, _ref3, _ref4, _ref5));
	}

	exports.default = Footer;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	// Import Components

	// import Search from 'grommet/components/Search';


	exports.Header = Header;

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(4);

	var _Header = __webpack_require__(69);

	var _Header2 = _interopRequireDefault(_Header);

	var _Box = __webpack_require__(1);

	var _Box2 = _interopRequireDefault(_Box);

	var _Menu = __webpack_require__(28);

	var _Menu2 = _interopRequireDefault(_Menu);

	var _menu = __webpack_require__(92);

	var _menu2 = _interopRequireDefault(_menu);

	var _Anchor = __webpack_require__(11);

	var _Anchor2 = _interopRequireDefault(_Anchor);

	var _Title = __webpack_require__(79);

	var _Title2 = _interopRequireDefault(_Title);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _ref = _jsx(_menu2.default, {});

	var _ref2 = _jsx(_Anchor2.default, {
	  tag: 'div'
	}, void 0, _jsx(_reactRouter.Link, {
	  to: '/'
	}, void 0, 'Home'));

	function Header() {
	  return _jsx(_Header2.default, {
	    splash: false,
	    size: 'small',
	    float: false,
	    fixed: true,
	    colorIndex: 'neutral-4-t'
	  }, void 0, _jsx(_Box2.default, {
	    pad: { horizontal: 'small' }
	  }, void 0, _jsx(_Title2.default, {}, void 0, _jsx(_reactRouter.Link, {
	    to: { pathname: '/' }
	  }, void 0, ' AutoMotive '))), _jsx(_Box2.default, {
	    flex: true,
	    justify: 'end',
	    direction: 'row',
	    responsive: false
	  }, void 0, _jsx(_Menu2.default, {
	    icon: _ref,
	    dropAlign: { right: 'right' }
	  }, void 0, _ref2, _jsx(_Anchor2.default, {
	    tag: 'div'
	  }, void 0, _jsx(_reactRouter.Link, {
	    to: { pathname: '/cars', query: { page: 1 } }
	  }, void 0, 'Browse')))));
	}

	exports.default = Header;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	// Import Components


	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _Tiles = __webpack_require__(78);

	var _Tiles2 = _interopRequireDefault(_Tiles);

	var _Split = __webpack_require__(76);

	var _Split2 = _interopRequireDefault(_Split);

	var _Box = __webpack_require__(1);

	var _Box2 = _interopRequireDefault(_Box);

	var _App = __webpack_require__(12);

	var _App2 = _interopRequireDefault(_App);

	var _CarListItem = __webpack_require__(50);

	var _CarListItem2 = _interopRequireDefault(_CarListItem);

	var _SidebarFilter = __webpack_require__(58);

	var _SidebarFilter2 = _interopRequireDefault(_SidebarFilter);

	var _Paginate = __webpack_require__(57);

	var _Paginate2 = _interopRequireDefault(_Paginate);

	var _CarList = {
	  "extraWide": "_2yhxGL4ODyGntmQXsg5Wlp"
	};

	var _CarList2 = _interopRequireDefault(_CarList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _ref = _jsx(_SidebarFilter2.default, {});

	function CarList(props) {
	  return _jsx(_Split2.default, {
	    flex: 'right',
	    fixed: true
	  }, void 0, _ref, _jsx(_App2.default, {
	    className: _CarList2.default.extraWide
	  }, void 0, _jsx(_Box2.default, {
	    justify: 'center',
	    align: 'center',
	    pad: 'medium'
	  }, void 0, _jsx(_Tiles2.default, {
	    fill: false,
	    flush: false,
	    justify: 'center'
	  }, void 0, props.cars.map(function (car) {
	    return _jsx(_CarListItem2.default, {
	      car: car
	    }, car.model);
	  })), _jsx(_Paginate2.default, {
	    page: props.page
	  }))));
	}

	exports.default = CarList;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	// Import Components


	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(4);

	var _Card = __webpack_require__(67);

	var _Card2 = _interopRequireDefault(_Card);

	var _Tile = __webpack_require__(77);

	var _Tile2 = _interopRequireDefault(_Tile);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function CarListItem(props) {
	  return _jsx(_Tile2.default, {}, void 0, _jsx(_reactRouter.Link, {
	    to: 'cars/' + props.car._id
	  }, void 0, _jsx(_Card2.default, {
	    textAlign: 'center',
	    thumbnail: props.car.images[0],
	    heading: props.car.make + ' ' + props.car.model,
	    description: props.car.overview,
	    headingStrong: false
	  })));
	}

	exports.default = CarListItem;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _Box = __webpack_require__(1);

	var _Box2 = _interopRequireDefault(_Box);

	var _Meter = __webpack_require__(73);

	var _Meter2 = _interopRequireDefault(_Meter);

	var _Label = __webpack_require__(25);

	var _Label2 = _interopRequireDefault(_Label);

	var _Value = __webpack_require__(80);

	var _Value2 = _interopRequireDefault(_Value);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// Import Components


	var _ref = _jsx(_Label2.default, {
	  size: 'small'
	}, void 0, '0 MPG');

	var CarMPG = function (_Component) {
	  _inherits(CarMPG, _Component);

	  function CarMPG(props) {
	    _classCallCheck(this, CarMPG);

	    var _this = _possibleConstructorReturn(this, (CarMPG.__proto__ || Object.getPrototypeOf(CarMPG)).call(this, props));

	    _this.state = {
	      mpgTitle: '',
	      mpgVal: ''
	    };
	    return _this;
	  }

	  _createClass(CarMPG, [{
	    key: 'checkPropValue',
	    value: function checkPropValue(obj) {
	      var objVal = Object.values(obj);
	      var bool = false;
	      objVal.forEach(function (elem) {
	        if (elem != null) {
	          bool = true;
	        }
	      });
	      return bool;
	    }
	  }, {
	    key: 'changeMpgVal',
	    value: function changeMpgVal(val) {
	      if (val === undefined) {
	        return this.setState({ mpgTitle: null, mpgVal: null });
	      }
	      return this.setState({ mpgTitle: val.label, mpgVal: val.value });
	    }
	  }, {
	    key: 'makeMpg',
	    value: function makeMpg(cityMpg, highwayMpg) {
	      var _this2 = this;

	      if (cityMpg && highwayMpg) {
	        var _ret = function () {
	          var maxMileage = Math.max(cityMpg, highwayMpg);
	          var series = [{ label: 'City', value: cityMpg, colorIndex: 'graph-1' }, { label: 'Highway', value: highwayMpg, colorIndex: 'graph-2' }];

	          return {
	            v: _jsx(_Box2.default, {
	              direction: 'row',
	              margin: { vertical: 'small' },
	              pad: { between: 'small' },
	              responsive: false,
	              justify: 'center'
	            }, void 0, _jsx(_Meter2.default, {
	              vertical: true,
	              series: series,
	              onActive: function onActive(idx) {
	                return _this2.changeMpgVal(series[idx]);
	              }
	            }), _jsx(_Box2.default, {
	              justify: 'between'
	            }, void 0, _jsx(_Label2.default, {
	              size: 'small'
	            }, void 0, maxMileage + ' MPG'), _jsx(_Value2.default, {
	              value: _this2.state.mpgVal,
	              units: 'MPG',
	              label: _this2.state.mpgTitle,
	              size: 'small'
	            }), _ref))
	          };
	        }();

	        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	      }
	      return null;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (this.checkPropValue(this.props.mpg)) {
	        return _jsx(_Box2.default, {
	          justify: 'center',
	          pad: 'small',
	          responsive: false
	        }, void 0, this.makeMpg(this.props.mpg.cityEpa, this.props.mpg.highwayEpa));
	      }
	      return null;
	    }
	  }]);

	  return CarMPG;
	}(_react.Component);

	exports.default = CarMPG;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	// Import Components


	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _Box = __webpack_require__(1);

	var _Box2 = _interopRequireDefault(_Box);

	var _Heading = __webpack_require__(2);

	var _Heading2 = _interopRequireDefault(_Heading);

	var _CarMPG = __webpack_require__(51);

	var _CarMPG2 = _interopRequireDefault(_CarMPG);

	var _CarSpeeds = __webpack_require__(54);

	var _CarSpeeds2 = _interopRequireDefault(_CarSpeeds);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function checkPropVal(props) {
	  var values = Object.values(props);
	  var bool = false;

	  values.forEach(function (elem) {
	    if ((typeof elem === 'undefined' ? 'undefined' : _typeof(elem)) === 'object' && !Array.isArray(elem)) {
	      var objToArr = Object.values(elem);
	      objToArr.forEach(function (check) {
	        if (check !== null) {
	          bool = true;
	        }
	      });
	    }
	  });
	  return bool;
	}

	var _ref = _jsx(_Heading2.default, {
	  align: 'center',
	  tag: 'h2',
	  margin: 'none'
	}, void 0, 'Mileage & Speed');

	function CarMPGandSpeeds(props) {
	  if (checkPropVal(props)) {
	    return _jsx(_Box2.default, {
	      pad: { horizontal: 'medium' },
	      justify: 'start'
	    }, void 0, _ref, _jsx(_Box2.default, {
	      direction: 'row',
	      justify: 'between'
	    }, void 0, _jsx(_CarMPG2.default, {
	      mpg: props.mpg
	    }), _jsx(_CarSpeeds2.default, {
	      speeds: props.speeds
	    })));
	  }
	  return null;
	}

	exports.default = CarMPGandSpeeds;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	// Import Components


	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _Box = __webpack_require__(1);

	var _Box2 = _interopRequireDefault(_Box);

	var _Star = __webpack_require__(90);

	var _Star2 = _interopRequireDefault(_Star);

	var _StarHalf = __webpack_require__(91);

	var _StarHalf2 = _interopRequireDefault(_StarHalf);

	var _Heading = __webpack_require__(2);

	var _Heading2 = _interopRequireDefault(_Heading);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _ref = _jsx(_StarHalf2.default, {}, 'Star-half');

	function genStars(rating) {
	  var numStars = parseInt(rating, 10);
	  var halfStar = rating % 1 !== 0;
	  var stars = [];

	  for (var i = 0; i < numStars; i++) {
	    stars.push(_jsx(_Star2.default, {}, 'Star-' + i));
	  }

	  if (halfStar) {
	    stars.push(_ref);
	  }

	  return stars;
	}

	function CarRating(props) {
	  if (props.rating) {
	    return _jsx(_Box2.default, {
	      direction: 'row'
	    }, void 0, _jsx(_Heading2.default, {
	      align: 'center',
	      margin: 'small',
	      tag: 'h3'
	    }, void 0, 'Rating: ', genStars(props.rating)));
	  }
	  return null;
	}

	exports.default = CarRating;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	// Import Components


	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _Box = __webpack_require__(1);

	var _Box2 = _interopRequireDefault(_Box);

	var _List = __webpack_require__(26);

	var _List2 = _interopRequireDefault(_List);

	var _ListItem = __webpack_require__(27);

	var _ListItem2 = _interopRequireDefault(_ListItem);

	var _Heading = __webpack_require__(2);

	var _Heading2 = _interopRequireDefault(_Heading);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Checks if Props has a least 1 value to render component
	function checkPropValue(obj) {
	  var objVal = Object.values(obj);
	  var bool = false;
	  objVal.forEach(function (elem) {
	    if (elem != null) {
	      bool = true;
	    }
	  });
	  return bool;
	}

	function genSpeed(title, speed, unit) {
	  if (speed) {
	    return _jsx(_ListItem2.default, {
	      justify: 'between',
	      separator: 'horizontal',
	      responsive: false,
	      pad: 'small'
	    }, void 0, _jsx('span', {}, void 0, title), _jsx('span', {}, void 0, speed + ' ' + unit));
	  }
	  return null;
	}

	var _ref = _jsx(_Heading2.default, {
	  align: 'center',
	  margin: 'small',
	  tag: 'h3'
	}, void 0, 'Speed');

	function CarSpeeds(props) {
	  if (checkPropValue(props)) {
	    return _jsx(_Box2.default, {
	      pad: 'small',
	      justify: 'center'
	    }, void 0, _ref, _jsx(_List2.default, {}, void 0, genSpeed('Top', props.speeds.topSpeed, 'MPH'), genSpeed('HP', props.speeds.hp, 'HP'), genSpeed('0-60', props.speeds.zeroSixty, 'Secs')));
	  }
	}

	exports.default = CarSpeeds;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	// Import Components

	// import classNames from 'classNames';


	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _Hero = __webpack_require__(71);

	var _Hero2 = _interopRequireDefault(_Hero);

	var _Video = __webpack_require__(81);

	var _Video2 = _interopRequireDefault(_Video);

	var _Box = __webpack_require__(1);

	var _Box2 = _interopRequireDefault(_Box);

	var _Heading = __webpack_require__(2);

	var _Heading2 = _interopRequireDefault(_Heading);

	var _MainHeroStyle = {
	  "tabletGt": "Xpru0SEOcJaifA1cEJyl9"
	};

	var _MainHeroStyle2 = _interopRequireDefault(_MainHeroStyle);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _ref = _jsx(_Video2.default, {
	  autoPlay: true,
	  showControls: false,
	  loop: true,
	  muted: true,
	  fit: 'cover',
	  poster: 'https://s3.amazonaws.com/coverr-public/poster/Orchestra_thumb.jpg'
	}, void 0, _jsx('source', {
	  src: 'http://www.coverr.co/s3/mp4/Orchestra.mp4',
	  type: 'video/mp4'
	}));

	var _ref2 = _jsx(_Box2.default, {
	  pad: 'large'
	});

	var _ref3 = _jsx(_Box2.default, {
	  basis: 'xsmall',
	  align: 'start'
	});

	var _ref4 = _jsx(_Box2.default, {
	  justify: 'start',
	  align: 'end',
	  responsive: false
	}, void 0, _jsx(_Heading2.default, {
	  margin: 'none'
	}, void 0, 'AutoMotive'), _jsx(_Heading2.default, {
	  margin: 'none',
	  tag: 'h3'
	}, void 0, 'What Drives you? \u2122'));

	function MainHero() {
	  return _jsx(_Hero2.default, {
	    background: _ref,
	    backgroundColorIndex: 'dark',
	    size: 'large'
	  }, void 0, _ref2, _jsx(_Box2.default, {
	    direction: 'row',
	    className: _MainHeroStyle2.default.tabletGt
	  }, void 0, _ref3, _ref4));
	}

	exports.default = MainHero;

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	// Import Components


	exports.MainPageStats = MainPageStats;

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _Box = __webpack_require__(1);

	var _Box2 = _interopRequireDefault(_Box);

	var _Heading = __webpack_require__(2);

	var _Heading2 = _interopRequireDefault(_Heading);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _ref = _jsx(_Box2.default, {
	  align: 'center'
	}, void 0, _jsx(_Heading2.default, {}, void 0, 'Car Buying Statistics'));

	function MainPageStats() {
	  return _ref;
	}

	exports.default = MainPageStats;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(3);

	var _reactRouterRedux = __webpack_require__(7);

	var _Box = __webpack_require__(1);

	var _Box2 = _interopRequireDefault(_Box);

	var _Anchor = __webpack_require__(11);

	var _Anchor2 = _interopRequireDefault(_Anchor);

	var _LinkPrevious = __webpack_require__(85);

	var _LinkPrevious2 = _interopRequireDefault(_LinkPrevious);

	var _LinkNext = __webpack_require__(84);

	var _LinkNext2 = _interopRequireDefault(_LinkNext);

	var _AppActions = __webpack_require__(5);

	var _AppReducer = __webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// Import components


	// Import Actions


	// Import Selectors


	var _ref = _jsx(_LinkPrevious2.default, {});

	var _ref2 = _jsx(_LinkNext2.default, {});

	var Paginate = function (_Component) {
	  _inherits(Paginate, _Component);

	  function Paginate() {
	    _classCallCheck(this, Paginate);

	    return _possibleConstructorReturn(this, (Paginate.__proto__ || Object.getPrototypeOf(Paginate)).apply(this, arguments));
	  }

	  _createClass(Paginate, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.props.dispatch((0, _AppActions.fetchCarCount)());
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      var store = this.context.store;
	      var currentPage = void 0;
	      var currentCount = void 0;

	      var handleChange = function handleChange() {
	        var prevPage = currentPage;
	        var prevCount = currentCount;

	        currentPage = _this2.getCurrentPage();
	        currentCount = _this2.getCurrentCount();

	        if (currentPage !== prevPage || currentCount !== prevCount) {
	          _this2.backPageDisable = _this2.disablePage('back', currentCount);
	          _this2.forwardPageDisable = _this2.disablePage('forward', currentCount);
	        }
	      };
	      this.unsubscribe = store.subscribe(handleChange);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.unsubscribe();
	    }
	  }, {
	    key: 'getCurrentPage',
	    value: function getCurrentPage() {
	      var store = this.context.store;
	      var currentPage = store.getState();
	      currentPage = currentPage.routing.locationBeforeTransitions.query.page;
	      currentPage = currentPage ? parseInt(currentPage, 10) : 1;
	      return currentPage;
	    }
	  }, {
	    key: 'getCurrentCount',
	    value: function getCurrentCount() {
	      var store = this.context.store;
	      var count = store.getState();
	      count = count.app.carCount;
	      count = count ? parseInt(count, 10) : count;
	      return count;
	    }
	  }, {
	    key: 'nextPage',
	    value: function nextPage(add) {
	      var num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

	      if (!add && this.backPageDisable || add && this.forwardPageDisable) {
	        return;
	      }
	      var store = this.context.store;
	      var state = store.getState();
	      var currentPage = this.getCurrentPage();
	      var nextPage = add ? currentPage + num : currentPage - num;
	      var query = state.routing.locationBeforeTransitions.query;
	      store.dispatch((0, _reactRouterRedux.push)({ pathname: 'cars', query: _extends({}, query, { page: nextPage }) }));
	    }
	  }, {
	    key: 'disablePage',
	    value: function disablePage(direction, count) {
	      var currentPage = this.getCurrentPage();
	      var disable = false;

	      // 20 cars per page get the max
	      var max = currentPage * 20 > count;

	      if (direction === 'back' && currentPage === 1) {
	        disable = true;
	        return disable;
	      } else if (direction === 'forward' && max || count < 20) {
	        disable = true;
	        return disable;
	      }

	      return disable;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;

	      return _jsx(_Box2.default, {
	        direction: 'row',
	        responsive: false
	      }, void 0, _jsx(_Anchor2.default, {
	        disabled: this.backPageDisable,
	        onClick: function onClick() {
	          return _this3.nextPage(false);
	        },
	        icon: _ref,
	        animateIcon: true,
	        primary: true
	      }), _jsx('h4', {}, void 0, 'Total Cars ', this.props.count), _jsx(_Anchor2.default, {
	        disabled: this.forwardPageDisable,
	        onClick: function onClick() {
	          return _this3.nextPage(true);
	        },
	        icon: _ref2,
	        animateIcon: true,
	        primary: true
	      }));
	    }
	  }]);

	  return Paginate;
	}(_react.Component);

	Paginate.contextTypes = {
	  store: _react2.default.PropTypes.object
	};

	// Actions required to provide data for this component to render in server side.
	Paginate.need = [function () {
	  return (0, _AppActions.fetchCarCount)();
	}];

	// Retrieve data from store as props
	function mapStateToProps(state) {
	  return {
	    count: (0, _AppReducer.getCount)(state)
	  };
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(Paginate);

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	// Import Components


	// Import Actions


	// Import Selectors


	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouterRedux = __webpack_require__(7);

	var _reactRedux = __webpack_require__(3);

	var _lodash = __webpack_require__(29);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _Sidebar = __webpack_require__(75);

	var _Sidebar2 = _interopRequireDefault(_Sidebar);

	var _Select = __webpack_require__(74);

	var _Select2 = _interopRequireDefault(_Select);

	var _Label = __webpack_require__(25);

	var _Label2 = _interopRequireDefault(_Label);

	var _Box = __webpack_require__(1);

	var _Box2 = _interopRequireDefault(_Box);

	var _Button = __webpack_require__(66);

	var _Button2 = _interopRequireDefault(_Button);

	var _Filter = __webpack_require__(82);

	var _Filter2 = _interopRequireDefault(_Filter);

	var _Refresh = __webpack_require__(87);

	var _Refresh2 = _interopRequireDefault(_Refresh);

	var _AppActions = __webpack_require__(5);

	var _AppReducer = __webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// Remove Key from Object
	function removeKey(obj, name) {
	  var newObj = _extends({}, obj);

	  if (newObj[name]) {
	    delete newObj[name];
	  }

	  return newObj;
	}

	var _ref = _jsx(_Label2.default, {}, void 0, 'Make');

	var _ref2 = _jsx(_Label2.default, {}, void 0, 'Car Type');

	var _ref3 = _jsx(_Label2.default, {}, void 0, 'Rating');

	var _ref4 = _jsx(_Label2.default, {}, void 0, 'To');

	var _ref5 = _jsx(_Refresh2.default, {});

	var _ref6 = _jsx(_Filter2.default, {});

	var SidebarFilter = function (_Component) {
	  _inherits(SidebarFilter, _Component);

	  function SidebarFilter(props) {
	    _classCallCheck(this, SidebarFilter);

	    var _this = _possibleConstructorReturn(this, (SidebarFilter.__proto__ || Object.getPrototypeOf(SidebarFilter)).call(this, props));

	    _this.makes = ['All', 'Acura', 'Alfa Romeo', 'Aston Martin', 'Audi', 'BMW', 'Bentley', 'Bugatti', 'Chevrolet', 'Chrysler', 'Dodge', 'Ferrari', 'Ford', 'GMC', 'Genesis', 'Hyundai', 'Infiniti', 'Jaguar', 'Jeep', 'Kia', 'Koenigsegg', 'Lamborghini', 'Land Rover', 'Lexus', 'Lincoln', 'Lotus', 'Maserati', 'Mazda', 'McLaren', 'Mercedes-AMG', 'Mercedes-Benz', 'Mercedes-Maybach', 'Mitsubishi', 'Nissan', 'Pagani', 'Porsche', 'Ram', 'Rolls-Royce', 'Smart', 'Subaru', 'Tesla', 'Toyota', 'Volkswagen'];
	    _this.carType = ['All', 'Convertible', 'Coupe', 'Crossover', 'Hatchback', 'Pickup Truck', 'Roadster', 'SUV', 'Sedan', 'Van', 'Wagon'];

	    _this.state = {};
	    return _this;
	  }

	  _createClass(SidebarFilter, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.setState({ formValues: this.props.filter });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var store = this.context.store;
	      var currentFilter = void 0;

	      var self = this;
	      function handleChange() {
	        var prevFilter = removeKey(currentFilter, 'page');

	        var state = store.getState();
	        currentFilter = removeKey(state.app.filter, 'page');

	        if (!_lodash2.default.isEqual(currentFilter, prevFilter)) {
	          self.setState({ formValues: currentFilter });
	          var query = state.routing.locationBeforeTransitions.search;
	          store.dispatch((0, _AppActions.fetchCarCount)(query));
	        }
	      }
	      this.unsubscribe = store.subscribe(handleChange);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.unsubscribe();
	    }
	  }, {
	    key: 'changeValues',
	    value: function changeValues(chosen, itemChanged) {
	      var formValues = this.state.formValues;
	      formValues[itemChanged] = chosen.value;
	      this.setState({ formValues: formValues });
	    }
	  }, {
	    key: 'filter',
	    value: function filter() {
	      var filter = this.state.formValues;
	      var store = this.context.store;

	      store.dispatch((0, _AppActions.fetchFilter)(filter));

	      function checkForAll(key) {
	        if (filter[key] === 'All') {
	          delete filter[key];
	        }
	      }
	      checkForAll('make');
	      checkForAll('ln_type');
	      filter.page = 1;

	      store.dispatch((0, _reactRouterRedux.push)({ pathname: 'cars', query: filter }));
	      var query = store.getState();
	      query = query.routing.locationBeforeTransitions.search;
	      store.dispatch((0, _AppActions.fetchCarCount)(query));
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {
	      var filter = _AppReducer.initialState.filter;
	      this.context.store.dispatch((0, _AppActions.fetchFilter)(filter));
	      this.context.store.dispatch((0, _reactRouterRedux.push)({ pathname: '/cars', query: { page: 1 } }));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return _jsx(_Sidebar2.default, {
	        size: 'small',
	        justify: 'start',
	        pad: 'small',
	        fixed: true,
	        colorIndex: 'neutral-4-t'
	      }, void 0, _ref, _jsx(_Select2.default, {
	        options: this.makes,
	        value: this.state.formValues.make || 'All',
	        onChange: function onChange(chosen) {
	          _this2.changeValues(chosen, 'make');
	        }
	      }), _ref2, _jsx(_Select2.default, {
	        options: this.carType,
	        value: this.state.formValues.ln_type || 'All',
	        onChange: function onChange(chosen) {
	          _this2.changeValues(chosen, 'ln_type');
	        }
	      }), _ref3, _jsx(_Box2.default, {
	        direction: 'row',
	        align: 'center'
	      }, void 0, _jsx(_Select2.default, {
	        options: ['1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5'],
	        value: this.state.formValues.minRating || '1',
	        onChange: function onChange(chosen) {
	          _this2.changeValues(chosen, 'minRating');
	        }
	      }), _ref4, _jsx(_Select2.default, {
	        options: ['1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5'],
	        value: this.state.formValues.maxRating || '5',
	        onChange: function onChange(chosen) {
	          _this2.changeValues(chosen, 'maxRating');
	        }
	      })), _jsx(_Box2.default, {
	        align: 'center'
	      }, void 0, _jsx(_Box2.default, {
	        pad: 'small'
	      }, void 0, _jsx(_Button2.default, {
	        icon: _ref5,
	        label: 'Reset',
	        secondary: true,
	        type: 'reset',
	        onClick: function onClick() {
	          return _this2.reset();
	        }
	      })), _jsx(_Box2.default, {
	        pad: 'small'
	      }, void 0, _jsx(_Button2.default, {
	        icon: _ref6,
	        label: 'Filter',
	        primary: true,
	        type: 'submit',
	        onClick: function onClick() {
	          return _this2.filter();
	        }
	      }))));
	    }
	  }]);

	  return SidebarFilter;
	}(_react.Component);

	function mapStateToProps(state) {
	  return {
	    filter: (0, _AppReducer.getFilter)(state)
	  };
	}

	SidebarFilter.contextTypes = {
	  store: _react2.default.PropTypes.object
	};

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(SidebarFilter);

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(30);

	var _reactRouterRedux = __webpack_require__(7);

	var _AppReducer = __webpack_require__(6);

	var _AppReducer2 = _interopRequireDefault(_AppReducer);

	var _CarReducer = __webpack_require__(10);

	var _CarReducer2 = _interopRequireDefault(_CarReducer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Combine all reducers into one root reducer


	// Import Reducers
	/**
	 * Root Reducer
	 */
	exports.default = (0, _redux.combineReducers)({
	  app: _AppReducer2.default,
	  cars: _CarReducer2.default,
	  routing: _reactRouterRedux.routerReducer
	});

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.getCars = getCars;
	exports.getCarCount = getCarCount;
	exports.addCar = addCar;
	exports.getCar = getCar;
	exports.updateCar = updateCar;
	exports.deleteCar = deleteCar;

	var _car = __webpack_require__(24);

	var _car2 = _interopRequireDefault(_car);

	var _sanitizeHtml = __webpack_require__(103);

	var _sanitizeHtml2 = _interopRequireDefault(_sanitizeHtml);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Get all cars
	 * @param req
	 * @param res
	 * @returns void
	 */

	function filterQuery(query) {
	  var newQuery = _extends({}, query);

	  if (newQuery.minRating && newQuery.minRating !== '1' && newQuery.maxRating && newQuery.maxRating !== '5') {
	    newQuery.rating = { $gt: newQuery.minRating || 1, $lt: newQuery.maxRating || 5 };
	  }

	  delete newQuery.page;
	  delete newQuery.minRating;
	  delete newQuery.maxRating;

	  return newQuery;
	}

	function getCars(req, res) {
	  var query = filterQuery(req.query);

	  // Get the page and convert it to an integer
	  var page = req.query.page || 1;
	  page = parseInt(page, 10);

	  var skipItems = (page - 1) * 20;

	  _car2.default.find(query).sort('make').skip(skipItems).limit(20).exec(function (err, cars) {
	    if (err) {
	      res.status(500).send(err);
	    }
	    res.json({ cars: cars });
	  });
	}

	/**
	 * Get car count
	 * @param req
	 * @param res
	 * @returns void
	 */

	function getCarCount(req, res) {
	  var query = filterQuery(req.query);

	  _car2.default.find(query).count().exec(function (err, count) {
	    if (err) {
	      res.status(500).send(err);
	    }
	    res.send(JSON.stringify(count));
	  });
	}

	/**
	 * Save a car
	 * @param req
	 * @param res
	 * @returns void
	 */
	function addCar(req, res) {
	  if (!req.body.car.model || !req.body.car.make) {
	    res.status(403).end();
	  }

	  var newCar = new _car2.default(req.body.car);

	  Object.keys(newCar).forEach(function (key) {
	    newCar[key] = (0, _sanitizeHtml2.default)(newCar[key]);
	  });

	  newCar.save(function (err, saved) {
	    if (err) {
	      res.status(500).send(err);
	    }
	    res.json({ car: saved });
	  });
	}

	/**
	 * Get a single car
	 * @param req
	 * @param res
	 * @returns void
	 */
	function getCar(req, res) {
	  _car2.default.findOne({ id: req.params.id }).exec(function (err, car) {
	    if (err) {
	      res.status(500).send(err);
	    }
	    res.json({ car: car });
	  });
	}

	/**
	 * Update a car
	 * @param req
	 * @param res
	 * @returns void
	 */
	function updateCar(req, res) {
	  if (!req.body.car.model || !req.body.car.make) {
	    res.status(403).end();
	  }

	  _car2.default.findOne({ id: req.params.id }).exec(function (err, car) {
	    if (err) {
	      res.status(500).send(err);
	    }

	    var updatedCar = Object.assign(car, req.body.car);

	    updatedCar.save(function (error, saved) {
	      if (error) {
	        res.status(500).send(error);
	      }
	      res.json({ car: saved });
	    });
	  });
	}

	/**
	 * Delete a post
	 * @param req
	 * @param res
	 * @returns void
	 */
	function deleteCar(req, res) {
	  _car2.default.findOne({ id: req.params.id }).exec(function (err, car) {
	    if (err) {
	      res.status(500).send(err);
	    }

	    car.remove(function () {
	      res.status(200).end();
	    });
	  });
	}

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	// import IntlWrapper from '../client/modules/Intl/IntlWrapper';

	// Webpack Requirements


	var _express = __webpack_require__(15);

	var _express2 = _interopRequireDefault(_express);

	var _compression = __webpack_require__(38);

	var _compression2 = _interopRequireDefault(_compression);

	var _mongoose = __webpack_require__(16);

	var _mongoose2 = _interopRequireDefault(_mongoose);

	var _bodyParser = __webpack_require__(37);

	var _bodyParser2 = _interopRequireDefault(_bodyParser);

	var _path = __webpack_require__(17);

	var _path2 = _interopRequireDefault(_path);

	var _webpack = __webpack_require__(18);

	var _webpack2 = _interopRequireDefault(_webpack);

	var _webpackConfig = __webpack_require__(36);

	var _webpackConfig2 = _interopRequireDefault(_webpackConfig);

	var _webpackDevMiddleware = __webpack_require__(40);

	var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

	var _webpackHotMiddleware = __webpack_require__(41);

	var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

	var _store = __webpack_require__(32);

	var _reactRedux = __webpack_require__(3);

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(39);

	var _reactRouter = __webpack_require__(4);

	var _reactHelmet = __webpack_require__(8);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	var _routes = __webpack_require__(31);

	var _routes2 = _interopRequireDefault(_routes);

	var _fetchData = __webpack_require__(35);

	var _car = __webpack_require__(33);

	var _car2 = _interopRequireDefault(_car);

	var _seedData = __webpack_require__(34);

	var _seedData2 = _interopRequireDefault(_seedData);

	var _config = __webpack_require__(14);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Initialize the Express App
	var app = new _express2.default();

	// Run Webpack dev server in development mode
	if (process.env.NODE_ENV === 'development') {
	  var compiler = (0, _webpack2.default)(_webpackConfig2.default);
	  app.use((0, _webpackDevMiddleware2.default)(compiler, { noInfo: true, publicPath: _webpackConfig2.default.output.publicPath }));
	  app.use((0, _webpackHotMiddleware2.default)(compiler));
	}

	// React And Redux Setup


	// Import required modules

	// import posts from './routes/post.routes';


	// Set native promises as mongoose promise
	_mongoose2.default.Promise = global.Promise;

	// MongoDB Connection
	_mongoose2.default.connect(_config2.default.mongoURL, function (error) {
	  if (error) {
	    console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
	    throw error;
	  }

	  // Seed data to DB.
	  (0, _seedData2.default)();
	});

	// Apply body Parser and server public assets and routes
	app.use((0, _compression2.default)());
	app.use(_bodyParser2.default.json({ limit: '20mb' }));
	app.use(_bodyParser2.default.urlencoded({ limit: '20mb', extended: false }));
	app.use(_express2.default.static(_path2.default.resolve(__dirname, '../dist')));
	// app.use('/api', posts);
	app.use('/api', _car2.default);

	// Render Initial HTML
	var renderFullPage = function renderFullPage(html, initialState) {
	  var head = _reactHelmet2.default.rewind();

	  // Import Manifests
	  var assetsManifest = process.env.webpackAssets && JSON.parse(process.env.webpackAssets);
	  var chunkManifest = process.env.webpackChunkAssets && JSON.parse(process.env.webpackChunkAssets);

	  return '\n    <!doctype html>\n    <html>\n      <head>\n        ' + head.base.toString() + '\n        ' + head.title.toString() + '\n        ' + head.meta.toString() + '\n        ' + head.link.toString() + '\n        ' + head.script.toString() + '\n\n        ' + (process.env.NODE_ENV === 'production' ? '<link rel=\'stylesheet\' href=\'' + assetsManifest['/app.css'] + '\' />' : '') + '\n        <link href=\'https://fonts.googleapis.com/css?family=Lato:400,300,700\' rel=\'stylesheet\' type=\'text/css\'/>\n        <link rel="shortcut icon" href="http://res.cloudinary.com/hashnode/image/upload/v1455629445/static_imgs/mern/mern-favicon-circle-fill.png" type="image/png" />\n      </head>\n      <body>\n        <div id="root">' + html + '</div>\n        <script>\n          window.__INITIAL_STATE__ = ' + JSON.stringify(initialState) + ';\n          ' + (process.env.NODE_ENV === 'production' ? '//<![CDATA[\n          window.webpackManifest = ' + JSON.stringify(chunkManifest) + ';\n          //]]>' : '') + '\n        </script>\n        <script src=\'' + (process.env.NODE_ENV === 'production' ? assetsManifest['/vendor.js'] : '/vendor.js') + '\'></script>\n        <script src=\'' + (process.env.NODE_ENV === 'production' ? assetsManifest['/app.js'] : '/app.js') + '\'></script>\n      </body>\n    </html>\n  ';
	};

	var renderError = function renderError(err) {
	  var softTab = '&#32;&#32;&#32;&#32;';
	  var errTrace = process.env.NODE_ENV !== 'production' ? ':<br><br><pre style="color:red">' + softTab + err.stack.replace(/\n/g, '<br>' + softTab) + '</pre>' : '';
	  return renderFullPage('Server Error' + errTrace, {});
	};

	// Server Side Rendering based on routes matched by React-router.
	app.use(function (req, res, next) {
	  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirectLocation, renderProps) {
	    if (err) {
	      return res.status(500).end(renderError(err));
	    }

	    if (redirectLocation) {
	      return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
	    }

	    if (!renderProps) {
	      return next();
	    }

	    var store = (0, _store.configureStore)();

	    return (0, _fetchData.fetchComponentData)(store, renderProps.components, renderProps.params).then(function () {
	      var initialView = (0, _server.renderToString)(_jsx(_reactRedux.Provider, {
	        store: store
	      }, void 0, _react2.default.createElement(_reactRouter.RouterContext, renderProps)));
	      var finalState = store.getState();

	      res.set('Content-Type', 'text/html').status(200).end(renderFullPage(initialView, finalState));
	    }).catch(function (error) {
	      return next(error);
	    });
	  });
	});

	// start app
	app.listen(_config2.default.port, function (error) {
	  if (!error) {
	    console.log('MERN is running on port: ' + _config2.default.port + '! Build something amazing!'); // eslint-disable-line
	  }
	});

	exports.default = app;
	/* WEBPACK VAR INJECTION */}.call(exports, "server"))

/***/ },
/* 62 */
/***/ function(module, exports) {

	"use strict";
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.sequence = sequence;
	/**
	 * Throw an array to it and a function which can generate promises
	 * and it will call them sequentially, one after another
	 */
	function sequence(items, consumer) {
	  var results = [];
	  var runner = function runner() {
	    var item = items.shift();
	    if (item) {
	      return consumer(item).then(function (result) {
	        results.push(result);
	      }).then(runner);
	    }

	    return Promise.resolve(results);
	  };

	  return runner();
	}

/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports = require("grommet/components/Accordion");

/***/ },
/* 65 */
/***/ function(module, exports) {

	module.exports = require("grommet/components/AccordionPanel");

/***/ },
/* 66 */
/***/ function(module, exports) {

	module.exports = require("grommet/components/Button");

/***/ },
/* 67 */
/***/ function(module, exports) {

	module.exports = require("grommet/components/Card");

/***/ },
/* 68 */
/***/ function(module, exports) {

	module.exports = require("grommet/components/Footer");

/***/ },
/* 69 */
/***/ function(module, exports) {

	module.exports = require("grommet/components/Header");

/***/ },
/* 70 */
/***/ function(module, exports) {

	module.exports = require("grommet/components/Headline");

/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = require("grommet/components/Hero");

/***/ },
/* 72 */
/***/ function(module, exports) {

	module.exports = require("grommet/components/Image");

/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports = require("grommet/components/Meter");

/***/ },
/* 74 */
/***/ function(module, exports) {

	module.exports = require("grommet/components/Select");

/***/ },
/* 75 */
/***/ function(module, exports) {

	module.exports = require("grommet/components/Sidebar");

/***/ },
/* 76 */
/***/ function(module, exports) {

	module.exports = require("grommet/components/Split");

/***/ },
/* 77 */
/***/ function(module, exports) {

	module.exports = require("grommet/components/Tile");

/***/ },
/* 78 */
/***/ function(module, exports) {

	module.exports = require("grommet/components/Tiles");

/***/ },
/* 79 */
/***/ function(module, exports) {

	module.exports = require("grommet/components/Title");

/***/ },
/* 80 */
/***/ function(module, exports) {

	module.exports = require("grommet/components/Value");

/***/ },
/* 81 */
/***/ function(module, exports) {

	module.exports = require("grommet/components/Video");

/***/ },
/* 82 */
/***/ function(module, exports) {

	module.exports = require("grommet/components/icons/base/Filter");

/***/ },
/* 83 */
/***/ function(module, exports) {

	module.exports = require("grommet/components/icons/base/Globe");

/***/ },
/* 84 */
/***/ function(module, exports) {

	module.exports = require("grommet/components/icons/base/LinkNext");

/***/ },
/* 85 */
/***/ function(module, exports) {

	module.exports = require("grommet/components/icons/base/LinkPrevious");

/***/ },
/* 86 */
/***/ function(module, exports) {

	module.exports = require("grommet/components/icons/base/Mail");

/***/ },
/* 87 */
/***/ function(module, exports) {

	module.exports = require("grommet/components/icons/base/Refresh");

/***/ },
/* 88 */
/***/ function(module, exports) {

	module.exports = require("grommet/components/icons/base/SocialGithub");

/***/ },
/* 89 */
/***/ function(module, exports) {

	module.exports = require("grommet/components/icons/base/SocialLinkedin");

/***/ },
/* 90 */
/***/ function(module, exports) {

	module.exports = require("grommet/components/icons/base/Star");

/***/ },
/* 91 */
/***/ function(module, exports) {

	module.exports = require("grommet/components/icons/base/StarHalf");

/***/ },
/* 92 */
/***/ function(module, exports) {

	module.exports = require("grommet/components/icons/base/menu");

/***/ },
/* 93 */
/***/ function(module, exports) {

	module.exports = require("isomorphic-fetch");

/***/ },
/* 94 */
/***/ function(module, exports) {

	module.exports = require("numeral");

/***/ },
/* 95 */
/***/ function(module, exports) {

	module.exports = require("postcss-cssnext");

/***/ },
/* 96 */
/***/ function(module, exports) {

	module.exports = require("postcss-focus");

/***/ },
/* 97 */
/***/ function(module, exports) {

	module.exports = require("postcss-reporter");

/***/ },
/* 98 */
/***/ function(module, exports) {

	module.exports = require("react-dom");

/***/ },
/* 99 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools");

/***/ },
/* 100 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools-dock-monitor");

/***/ },
/* 101 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools-log-monitor");

/***/ },
/* 102 */
/***/ function(module, exports) {

	module.exports = require("redux-thunk");

/***/ },
/* 103 */
/***/ function(module, exports) {

	module.exports = require("sanitize-html");

/***/ }
/******/ ]);