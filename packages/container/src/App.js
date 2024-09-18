import React from "react";

// Libraries
import { BrowserRouter } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
// Components
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";
// console.log(marketingMount);

// Generate class name
const createGenerateClassName = createGenerateClassName({
  productionPrefix: "co",
});

export default () => {
  return (
    <StylesProvider generateClassName={createGenerateClassName}>
      <BrowserRouter>
        <div>
          <Header />
          <MarketingApp />
        </div>
      </BrowserRouter>
    </StylesProvider>
  );
};
