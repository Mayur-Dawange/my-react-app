import React from "react";
import "./home.scss";
import Faq from "../Faq/Faq";
import Hero from "../Hero/Hero";
import Intro from "../Intro/Intro";
import Slicklist from "../Slicklist/Slicklist";
import background from "../../assets/img/lily-banse--YHSwy6uqvk-unsplash.jpg";

const Home = () => {
  return (
    <div>
      <Hero
        title="Restaurant"
        subtitle="Get The Best Food"
        pageinfo="About Us"
        background={background}
      />
      <Slicklist />
      <Intro />
      <Faq image="https://cdn.searchenginejournal.com/wp-content/uploads/2022/07/faq-632c0874710c1-sej-760x400.png" />
    </div>
  );
};

export default Home;
