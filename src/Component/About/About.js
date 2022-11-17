import React from "react";
import Banner from "../Banner/Banner";
import Faq from "../Faq/Faq";
import Intro from "../Intro/Intro";
import Slicklist from "../Slicklist/Slicklist";

const About = () => {
  return (
    <div>
      <Intro />
      <Slicklist />
      <Banner />
      <Faq />
    </div>
  );
};

export default About;
