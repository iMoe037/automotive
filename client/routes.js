/* eslint-disable global-require */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './modules/App/App';

// require.ensure polyfill for node
if (typeof require.ensure !== 'function') {
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
  require('./modules/Car/pages/MainPage/MainPage');
  require('./modules/Car/pages/CarListPage/CarListPage');
  require('./modules/Car/pages/CarDetailPage/CarDetailPage');
  // require('./modules/Car/pages/PostListPage/PostListPage');
  // require('./modules/Car/pages/PostDetailPage/PostDetailPage');
}

// react-router setup with code-splitting
// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
export default (
  <Route path="/" component={App}>
    <IndexRoute
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Car/pages/MainPage/MainPage').default);
        });
      }}
    />
    <Route
      path="/test"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Car/pages/TestPage/TestPage').default);
        });
      }}
    />
    <Route
      path="/cars"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Car/pages/CarListPage/CarListPage').default);
        });
      }}
    />
    <Route
      path="/cars/:id"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Car/pages/CarDetailPage/CarDetailPage').default);
        });
      }}
    />
   {/* <Route
      path="/posts/:slug-:cuid"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Car/pages/PostDetailPage/PostDetailPage').default);
        });
      }}
    /> */}
  </Route>
);
