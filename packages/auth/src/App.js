// React import
import React from "react";

// Libraries import
import { Switch, Route, Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

// Components import
import Signin from "./components/Signin";
import Signup from "./components/Signup";

// Generate class name
const generateClassName = createGenerateClassName({
  productionPrefix: "au",
});

// Exported function
export default ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/auth/signin" component={Signin} />
            <Route path="/auth/signup" component={Signup} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
