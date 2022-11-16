import "./assets/scss/main.scss";
import Header from "./Component/Header/Header";
import Banner from "./Component/Banner/Banner";
import Slicklist from "./Component/Slicklist/Slicklist";
import Intro from "./Component/Intro/Intro";
import React from "react";
import Faq from "./Component/Faq/Faq";
import Footer from "./Component/Footer/Footer";
import Layout from "./Component/Layout/Layout";
import Home from "./Component/Home/Home";

const App = (routs) => {
  return (
    // <div>
    //   <Header />
    //   <Banner />
    //   <Slicklist />
    //   <Intro />
    //   <Faq />
    //   <Footer />
    // </div>
    <Layout>
      <Home />
    </Layout>
  );
};

export default App;
