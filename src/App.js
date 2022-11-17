import "./assets/scss/main.scss";
import React from "react";
import Layout from "./Component/Layout/Layout";
import Home from "./Component/Home/Home";
// import { Route, Switch } from "react-router-dom";
// import About from ".././src/Component/About/About";
// import Contact from ".././src/Component/Contact/Contact";

const App = (routs) => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default App;
