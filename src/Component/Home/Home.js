import React from "react";
import Banner from "../Banner/Banner";
import Faq from "../Faq/Faq";
import Intro from "../Intro/Intro";
import Slicklist from "../Slicklist/Slicklist";

const Home = () => {
  return (
    <div>
      <Banner />
      <Slicklist />
      <Intro />
      <Faq />
    </div>
  );
};

export default Home;
