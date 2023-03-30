import React from "react";
import BackgroundHomeSection from "./BackgroundHomeSection";

const HomeSection = () => {
  return (
    <div className="homeSection" id="homeSection">
      <BackgroundHomeSection />
      <h1 className="title__home__section">
        Emilien <br/> Gerbouin
        {/* <span className="back__title__home__section">Gerbouin <br/> Emilien</span> */}
      </h1>
      <h2 className="subtitle__home__section">Passionné par la création d'interfaces utilisateurs</h2>

    </div>
  );
};

export default HomeSection;