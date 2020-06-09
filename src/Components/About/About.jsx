import React, { Component } from "react";
import "./About.scss";
import ListsAboutExamples from "./ListsAboutExamples";

export default class About extends Component {
  render() {
    const pub = process.env.PUBLIC_URL;
    // const link = "img/home/bg-about.png";

    const bgAbout = {
      backgroundImg: `url(${pub + "img/home/bg-ab.png"})`
    };

    return (
      <div id="section-about" style={bgAbout} className="padding-section">
        <h2 className="title-section green">À propos</h2>

        <div className="content">
          <div className="img-section">
            <img
              id="img-about-me"
              src={pub + "img/icones-new/moi.png"}
              alt="Emilie"
            />
          </div>
          <p>
            Bonjour, je m’appelle
            <b> Émilie PHAM DA, </b> Je suis <b>Graphiste Designer Print/Web</b>
            .
          </p>
          <p>
            Professionnelle de l'infographie 2008/2020.
            <br /> Je me suis spécialisée dans ce domaine qui me passionne.
          </p>

          <p>
            Après plus de 10 ans de formation dans le secteur de l'infographie,
            j'ai effectué plusieurs stages qui m'ont permis de développer mon
            expérience professionnelle, en collaborant avec différentes
            entreprises (start-up, petite et moyenne entreprise, freelance
            association).
          </p>

          <p>
            Mes compétences s’articulent autour de l'identité visuelle, des
            chartes graphiques et des supports de communication pour les
            entreprises.
          </p>

          <b>Voici quelques exemples: </b>
          <ListsAboutExamples />

          <p className="mtop">
            N'hésitez pas à consulter{" "}
            <a
              href="https://www.instagram.com/emiliegraphiste/"
              className="social-link"
            >
              mon compte Instagram.
            </a>{" "}
            Pour découvrir mes illustrations.
          </p>
        </div>
      </div>
    );
  }
}
