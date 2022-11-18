import React from "react";
import Faq from "../Faq/Faq";
import Hero from "../Hero/Hero";
import Intro from "../Intro/Intro";
import Slicklist from "../Slicklist/Slicklist";

const Service = (props) => {
  return (
    <div>
      <Hero
        title="Services"
        subtitle="Best Food Services"
        pageinfo="Our Services"
      />
      <Slicklist />
      <Intro />
      <Faq />
    </div>
  );
};

export default Service;
