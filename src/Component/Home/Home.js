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
      <Faq image="https://cdn.searchenginejournal.com/wp-content/uploads/2022/07/faq-632c0874710c1-sej-760x400.png" />
    </div>
  );
};

export default Home;