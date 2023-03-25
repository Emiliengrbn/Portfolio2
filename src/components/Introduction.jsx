import React from "react";
const memoji = require("../images/memoji.png")

const Introduction = () => {
  return (
    <div className="introduction__section" id="introduction">
      <h2 className="title__introduction">
        A propos de moi
        <span className="back__title__introduction"> Qui suis-je ?</span>
      </h2>
      <div className="content__introduction">
        <img src={memoji} alt="" className="memoji" />
        <p className="presentation">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ducimus tenetur incidunt dolores accusantium similique maxime facere voluptatem enim obcaecati. Sit possimus voluptatem a totam inventore dolor amet debitis minus?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem error fugiat fuga magni aperiam. Iste culpa atque accusamus laborum vitae ipsa dolor omnis architecto veniam! Sint nobis nam hic consectetur!</p>
      </div>
    </div>
  );
};

export default Introduction;