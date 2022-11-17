import React from "react";
import Banner from "../Banner/Banner";
import Faq from "../Faq/Faq";
import Intro from "../Intro/Intro";
import Slicklist from "../Slicklist/Slicklist";

const Service = (props) => {
  return (
    <div>
      <Banner />
      <Slicklist />
      <Intro />
      <Faq />
    </div>
  );
};

export default Service;
