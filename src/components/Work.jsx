import React from "react";
import { Link } from "react-router-dom";
import ImageSlider from "./ImageSlider";
const ohmyfood = require ("../images/ohmyfood_project.png")
const panthere = require ("../images/panthere_project.png")
const kanap = require ("../images/kanap_project.png")
const piiquante = require ("../images/piiquante_project.png")
const kasa = require ("../images/kasa_project.png")

const Work = () => {

  const slides = [
    { cover: ohmyfood, title: "Ohmyfood - Projet de formation", description: "Dévouverte HTML et CSS, intégration de maquette et ajout d'animations", link: "https://github.com/Emiliengrbn/P3_ohmyfood"},
    { cover: panthere, title: "Panthere - Projet de formation", description: "Refonte du site existant avec les bonnes pratiques d'accéssibilité et de SEO", link: "https://github.com/Emiliengrbn/agence_la_panthere"},
    { cover: kanap, title: "Kanap - Projet de formation", description: "Découverte du JavaScript et utilisation d'un API pour un affichage dynamique", link: "https://github.com/Emiliengrbn/P5_KANAP"},
    { cover: piiquante, title: "Piiquante - Projet de formation", description: "Création d'un serveur et d'une API avec NodeJs, Express et Mongo DB", link: "https://github.com/Emiliengrbn/P6_piiquante"},
    { cover: kasa, title: "Kasa - Projet de formation", description: "Création d'un application web avec React", link: "https://github.com/Emiliengrbn/P7_KASA"}
  ]

  const projects = [
    { cover: ohmyfood, title: "Ohmyfood - Projet de formation", description: "Dévouverte HTML et CSS, intégration de maquette et ajout d'animations"},
    { cover: panthere, title: "Panthere - Projet de formation", description: "Refonte du site existant avec les bonnes pratiques d'accéssibilité et de SEO"},
    { cover: kanap, title: "Kanap - Projet de formation", description: "Découverte du JavaScript et utilisation d'un API pour un affichage dynamique"},
    { cover: piiquante, title: "Piiquante - Projet de formation", description: "Création d'un serveur et d'une API avec NodeJs, Express et Mongo DB"},
    { cover: kasa, title: "Kasa - Projet de formation", description: "Création d'un application web avec React"},
  ]


  return (
    <div className="work__section" id="work">
    <h2 className="title__work title__section">
      Projets
    </h2>
    <div className="containerStyles">
        <ImageSlider slides={slides} />
    </div>
    </div>
  );
};

export default Work;

