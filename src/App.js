import './App.scss';
import './assets/scss/style.scss';
import Header from './Component/Header/Header';
import Banner from './Component/Banner/Banner';
import Slicklist from './Component/Slicklist/Slicklist';
import Footer from './Component/Footer/Footer';
import React from 'react';
import Faq from './Component/Faq/Faq';


const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Slicklist />
      <Faq />

      <Footer/>
    </div>
  )
}

export default App

