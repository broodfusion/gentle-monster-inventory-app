import { login, logout } from "actions/auth";
import { startSetProducts } from "actions/products";
import "assets/scss/material-dashboard-pro-react.css?v=1.4.0";
import { createBrowserHistory } from "history";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route, Router, Switch } from "react-router-dom";
import indexRoutes from "routes/index.jsx";
import configureStore from "store/configureStore";
import Home from "views/Home/Home";
import { firebase } from "./utils/firebase";
import PrivateRoute from "./utils/privateRoute";

const store = configureStore();
const history = createBrowserHistory();

const app = (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <PrivateRoute exact path="/home" component={Home} />
        {indexRoutes.map((prop, key) => {
          return (
            <Route
              path={prop.path}
              component={prop.component}
              key={key}
              {...prop}
            />
          );
        })}
      </Switch>
    </Router>
  </Provider>
);

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetProducts()).then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/home");
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push("/login");
  }
});
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(app, document.getElementById("root"));
    hasRendered = true;
  }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById("root"));
