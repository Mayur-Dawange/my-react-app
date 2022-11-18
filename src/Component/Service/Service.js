import React from "react";
import Faq from "../Faq/Faq";
import Hero from "../Hero/Hero";
import Intro from "../Intro/Intro";
import Slicklist from "../Slicklist/Slicklist";
import background from "../../assets/img/eiliv-aceron-ZuIDLSz3XLg-unsplash.jpg";

const Service = () => {
  return (
    <div>
      <Hero
        title="Services"
        subtitle="Best Food Services"
        pageinfo="Our Services"
        background={background}
      />
      <Slicklist />
      <Intro />
      <Faq />
    </div>
  );
};

export default Service;
