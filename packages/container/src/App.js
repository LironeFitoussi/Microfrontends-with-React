import React from "react";

// Libraries
import { BrowserRouter } from "react-router-dom";

// Components
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";
// console.log(marketingMount);
export default () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <MarketingApp />
      </div>
    </BrowserRouter>
  );
};
