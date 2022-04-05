import { Link } from "react-router-dom";
import CaseStudyThumb from "./CaseStudyThumb";
import Hero from './Hero'
import image1 from '../assets/alex-beholder-0sBHX4Hf6rs-unsplash.jpg'
import wayfindingThumbImg from '../assets/EmpathyMap.jpg'
import image3 from '../assets/toa-heftiba-FV3GConVSss-unsplash.jpg'
import '../App.css';

export const Home = () => {
  return (
    <main id="home-main">
    <Hero>Hi, Im <Link to="/contact">Mike→</Link>, a Designer from <Link to="/about">Long Beach→</Link>.  I work as a Product Design Manager for <a href='google.com'>Ibotta→</a> in Denver.  I studied B.S. Graphic Design at the <a href="google.com">Art Institute of California→</a>. </Hero>
    <section id="home-work">
      <CaseStudyThumb thumb={image1} hAlign="left" vAlign="top" hCopy="Teamwork makes the dream work" pCopy="Just some copy talkin 'bout showing teamwork, vision, strategy"></CaseStudyThumb>
      <CaseStudyThumb thumb={wayfindingThumbImg} hAlign="right" vAlign="top" hCopy="UX Case Study: Wayfinding" pCopy="Helping people get from point a to point b easily and quickly."></CaseStudyThumb>
      <CaseStudyThumb thumb={image3} hAlign="left" vAlign="bottom" hCopy="My UI Design work" pCopy="Stuff that shows off some tight design work. Could be the podcast app redesign. Could be illustration stuff"></CaseStudyThumb>
      <CaseStudyThumb thumb={image1} hAlign="right" vAlign="top" hCopy="Code monkey" pCopy="Information about how this website was built as well as some other coded projects"></CaseStudyThumb>
    </section>
  </main>
  );
}