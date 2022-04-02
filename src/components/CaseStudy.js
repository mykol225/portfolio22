import { Link } from "react-router-dom";
import { ImageGrid } from "./ImageGrid"
// import { Callout } from "./Callout"
import placeholderHero from "../assets/placeholder_forest_hero.png"
import placeholderLake from "../assets/placeholder_lake.png"
import placeholderHills from "../assets/placeholder_hills.png"
import placeholderMountains from "../assets/placeholder_mountains.png"

export const CaseStudy = () => {
  return (
    <main className="case_study_main">
      <div class="header_drop"></div>
      <article className="case_study_content top_article">
        <header className="case_study_header fixed-narrow-grid">
          <div className="case_study_title inner-10-grid">
            <h1 class="ft-title-dt">Wayfinding case study</h1>
            <h5 class="ft-bodybd-dt">March 22, 2022</h5>
          </div>
          <img src={placeholderHero} alt="" className="grid-full"/>
        </header>
        <section className="case_study_section_paragraph fixed-narrow-grid">
          <h1 class="ft-header-dt inner-10-grid">This is a main header</h1>
          <p class="ft-body-dt inner-10-grid">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa luctus nunc enim elementum venenatis, mollis arcu in. Arcu arcu luctus sit nec urna massa fermentum. Fermentum integer egestas senectus at laoreet tincidunt nec, ullamcorper.</p>
          <p class="ft-body-dt inner-10-grid">Cras aenean at et pharetra. Id nibh euismod hac ut lorem amet. Risus nunc pellentesque vel tincidunt auctor suspendisse varius id. Enim mi condimentum dignissim vitae egestas odio malesuada. Volutpat in amet suspendisse non.</p>
        </section>
        <ImageGrid></ImageGrid>
        <section className="case_study_section_paragraph fixed-narrow-grid">
          <h2 class="ft-subhead1-dt inner-10-grid">This is a smaller header</h2>
          <p class="ft-body-dt inner-10-grid">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa luctus nunc enim elementum venenatis, mollis arcu in. Arcu arcu luctus sit nec urna massa fermentum. Fermentum integer egestas senectus at laoreet tincidunt nec, ullamcorper.</p>
          {/* <Callout>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa luctus nunc enim elementum venenatis, mollis arcu in. Arcu arcu luctus sit nec urna massa fermentum. Fermentum integer egestas senectus at laoreet tincidunt nec, ullamcorper.</Callout> */}
        </section>
        <ImageGrid></ImageGrid>
      </article>
    </main>

  );
}