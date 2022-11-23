import "./assets/scss/main.scss";
import React from "react";
import Layout from "./Component/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Contact from ".././src/Component/Contact/Contact";
import Service from "./Component/Service/Service";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="service" element={<Service />}></Route>
      </Routes>
    </Layout>
  );
};

export default App;
