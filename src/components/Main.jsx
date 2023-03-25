import React from "react";
import HomeSection from "./HomeSection";
import Introduction from "./Introduction";
import Skills from "./Skills";
import Work from "./Work";
import Contact from "./Contact";


const Main = () => {
  return (
    <div>
        <HomeSection />
        <Introduction />
        <Skills />
        <Work/>
        <Contact />
    </div>
  );
};

export default Main;