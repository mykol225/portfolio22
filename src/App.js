import './App.css';
import Header from './components/Header.js'
import CaseStudyThumb from './components/CaseStudyThumb.js'
import Hero from './components/Hero'
import image1 from './assets/alex-beholder-0sBHX4Hf6rs-unsplash.jpg'
import image2 from './assets/jonathan-ansel-moy-de-vitry-fN_hPB1Vaek-unsplash.jpg'
import image3 from './assets/toa-heftiba-FV3GConVSss-unsplash.jpg'

function App() {
  return (
    <div className="App">
      <Header />
      <main id="home-main">
        <Hero>Hi, I’m <a href='google.com'>Mike→</a>, a Designer from <a href='google.com'>Long Beach→</a>.  I work as a Product Design Manager for <a href='google.com'>Ibotta→</a> in Denver.  I studied B.S. Graphic Design at the <a href="google.com">Art Institute of California→</a>. </Hero>
        <section id="home-work">
          <CaseStudyThumb thumb={image1} hAlign="left" vAlign="top" hCopy="Teamwork makes the dream work" pCopy="Just some copy talkin 'bout showing teamwork, vision, strategy"></CaseStudyThumb>
          <CaseStudyThumb thumb={image2} hAlign="right" vAlign="top" hCopy="UX Case Study: Wayfinding" pCopy="Helping people get from point a to point b easily and quickly."></CaseStudyThumb>
          <CaseStudyThumb thumb={image3} hAlign="left" vAlign="bottom" hCopy="My UI Design work" pCopy="Stuff that shows off some tight design work. Could be the podcast app redesign. Could be illustration stuff"></CaseStudyThumb>
          <CaseStudyThumb thumb={image1} hAlign="right" vAlign="top" hCopy="Code monkey" pCopy="Information about how this website was built as well as some other coded projects"></CaseStudyThumb>
        </section>
      </main>
      <footer className="footer">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className='terms'>Some info about copyright? 2022</div>
      </footer>
    </div>
  );
}

export default App;
