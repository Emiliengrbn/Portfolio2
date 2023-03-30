import React from "react";
const memoji = require("../images/memoji.png")

const Introduction = () => {
  return (
    <div className="introduction__section" id="introduction">
      <h2 className="title__introduction">
        A propos de moi
      </h2>
      <div className="content__introduction">
        <img src={memoji} alt="" className="memoji" />
        <p className="presentation">Moi c'est Emilien, j'ai 19 ans et je me suis intéressé au développement web il y a environ 1 ans.<br/><br/>
        Avant de découvrir le développement web, je faisais des études dans le domaine de la vente, mais cette branche ne m'intessait plus. Néanmoins, j'avais un formateur qui est développeur full-stack, avec qui nous apprenions à faire des sites web via WordPress. Je lui ai alors demandé des conseils sur les différentes formations dans ce millieu.<br/><br/>
        C'est à ce moment-là qu'il m'a parlé d'Openlassrooms et de leurs formations diplomantes. J'ai donc décidé de mettre un terme à mon BTS et de commencer la formation "Développeur Web".<br/><br/>
        Aujourd'hui, grâce à cette formation, j'ai acquis des <a href="#skills" className="presentation__link">compétences professionnelles</a>, mais aussi des compétences personnelles, comme l'autonimie, la gestion de son temps, etc...<br/>
        Vous pouvez aussi découvrir <a href="#work" className="presentation__link">les différents projets</a> que j'ai eu à réaliser durant ma formation.
        </p>
      </div>
    </div>
  );
};

export default Introduction;