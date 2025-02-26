import React from "react";
import Carousel from "./Carousel";
import Aboutus from "./Aboutus";
import ContactForm from "./contactUs";
import Carousel2 from "./Carousel2";
import ESIMSection from "./infosection";
import ESIMInnovationPage from "./innovation";

import "./App.css";

function Home() {
  return (
    <div className="app">
     
      <main>
        <Carousel />
        <ESIMSection />
        <Aboutus />
        
        <Carousel2 />
        <ESIMInnovationPage />
        
      </main>
      
    </div>
  );
}

export default Home;
