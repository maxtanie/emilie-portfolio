import React, { Component } from "react";
import "./About1.scss";
import ListsAboutExamples from "./ListsAboutExamples";

export default class About1 extends Component {
  render() {
    const pub = process.env.PUBLIC_URL;
    return (
      <section className="section-content" id="apropos">
        <div className="img-section">
          <img
            className="img-about-me auto"
            src={pub + "img/icones-new/moi.png"}
            alt="Emilie"
          />
        </div>
        <h2 className="violet-pink-2-color ">A propos</h2>
        <div className="content-txt auto">
          <div className="flex">
            <div className="txt-left violet-pink-2-color">
              <p>
                Bonjour, je m’appelle Émilie PHAM DA, <br /> Je suis Graphiste
                Designer Print/Web
                <br />
              </p>
              <br />
              <p>
                Professionnelle de l'infographie 2008/2020.
                <br /> Je me suis spécialisée dans ce domaine qui me passionne.
              </p>
              <br />

              <p>
                Après plus de 10 ans de formation dans le secteur de
                l'infographie, j'ai
                <br /> effectué des stages pro dans mon parcours d'étude qui
                m'ont
                <br /> permis de développer mon expérience professionnelle, en
                collaborant
                <br />
                avec différentes entreprises (start-up, petite et moyenne
                <br />
                entreprise, freelance association).
              </p>
            </div>
            <div className="txt-right violet-pink-2-color">
              <p>
                Après plus de 10 ans de formation dans le secteur
                <br /> de l'infographie, j'ai effectué plusieurs stages
                <br /> qui m'ont permis de développer mon expérience
                professionnelle, <br />
                en collaborant avec différentes entreprises
                <br /> (start-up, petite et moyenne entreprise, freelance
                association).
              </p>
              <br />

              <p>
                Mes compétences s’articulent autour de l'identité visuelle,
                <br /> des chartes graphiques et des supports de communication
                <br />
                pour les entreprises.
              </p>
            </div>
          </div>
          <div className="container-skills-about auto">
            <ListsAboutExamples></ListsAboutExamples>
          </div>
        </div>
      </section>
    );
  }
}
