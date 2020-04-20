import Router from "next/router";
import { Provider } from "react-redux";
import NProgress from "nprogress";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import es6promise from "es6-promise";

es6promise.polyfill();

import createStore from "../redux/store";
import GlobalStyles from "../components/globals";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const MyApp = ({ store, ...rest }) => {
  const { Component } = rest;

  return (
    <Provider store={store}>
      <Component {...rest} />
      <GlobalStyles />
    </Provider>
  );
};

export default withRedux(createStore)(withReduxSaga(MyApp));
