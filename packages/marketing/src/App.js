// React import
import React from "react";

// Libraries import
import { Switch, Route, BrowserRouter } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

// Components import
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

// Generate class name
const generateClassName = createGenerateClassName({
  productionPrefix: "ma",
});

// Exported function
export default () => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/pricing" component={Pricing} />
            <Route path="/" component={Landing} />
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
};
