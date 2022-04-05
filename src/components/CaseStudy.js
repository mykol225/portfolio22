import { ImageGrid } from "./ImageGrid"
import { CSHeader } from "./CSHeader"
import { CSSection } from "./CSSection"
import placeholderLake from "../assets/placeholder_lake.png"
import placeholderHills from "../assets/placeholder_hills.png"
import placeholderMountains from "../assets/placeholder_mountains.png"
import placeholderHero from "../assets/placeholder_forest_hero.png"
import wayfindingHeroImg from '../assets/EmpathyMap.jpg'

export const CaseStudy = () => {
  return (
    <main className="case_study_main">
      <div className="header_drop"></div>
      <article className="case_study_content top_article">
        <CSHeader h1="Wayfinding UX Process" date="March 21, 2022" img={wayfindingHeroImg} />
        <CSSection>
          <h1 className="ft-header-dt inner-10-grid">Project Summary</h1>
          <p className="ft-body-dt inner-10-grid">Our team was tasked with reducing the friction our customers experienced getting into digital signage. Our approach was to create high-quality turn-key, white-label products that are easy to access and implement.</p>
          <p className="ft-body-dt inner-10-grid">Digital wayfinding was the most significant need for our customers in the hospitality industry and often their first introduction to digital signage. Convention centers, in particular, have the challenge of multiple simultaneous events in spaces that span numerous football fields. Their customers are often in these vast spaces for the first time, rushing to find their talk or demonstration before it starts, so naturally, frustration mounts quickly. On busy days, convention centers often find their information desks overwhelmed using out-of-date paper maps. With that in mind, our digital wayfinding product will have to solve several problems. </p>
          <p className="ft-body-dt inner-10-grid"><b>Creative Director: </b>Kelly Byrom</p>
          <p className="ft-body-dt inner-10-grid"><b>Research assistant: </b>Natalie Dendin</p>
          <p className="ft-body-dt inner-10-grid"><b>Lead Project Designer: </b>Michael Worthington</p>
        </CSSection>
        <CSSection>
          <h1 className="ft-header-dt inner-10-grid">Goals</h1>
          <ul className="ft-body-dt inner-10-grid">
            <li style={{listStyle: "disc inside", paddingLeft: "10px"}}>Help users quickly find and navigate to their event or space.</li>
            <li style={{listStyle: "disc inside", paddingLeft: "10px"}}>Allow users to take the directions with them.</li>
            <li style={{listStyle: "disc inside", paddingLeft: "10px"}}>Integrate with existing customer information infrastructure.</li>
            <li style={{listStyle: "disc inside", paddingLeft: "10px"}}>Allow customers to brand the product quickly.</li>
            <li style={{listStyle: "disc inside", paddingLeft: "10px"}}>Provide a promotional area for an additional revenue stream.</li>
            <li style={{listStyle: "disc inside", paddingLeft: "10px"}}>Design with a user-centered approach.</li>
          </ul>
        </CSSection>
        <ImageGrid img1={placeholderLake} alt1="lake" img2={placeholderHills} alt2="hills" img3={placeholderMountains} alt3="hills" />
        <CSSection>
          <h2 className="ft-subhead1-dt inner-10-grid">This is a smaller header</h2>
          <p className="ft-body-dt inner-10-grid">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa luctus nunc enim elementum venenatis, mollis arcu in. Arcu arcu luctus sit nec urna massa fermentum. Fermentum integer egestas senectus at laoreet tincidunt nec, ullamcorper.</p>
        </CSSection>
        <ImageGrid></ImageGrid>
      </article>
    </main>

  );
}