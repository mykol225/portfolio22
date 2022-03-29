import { motion, useAnimation } from 'framer-motion'
import { useEffect, useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen'
import arrowIcon from '../assets/ArrowIcon.svg'

const CaseStudyThumb = ({hAlign, vAlign, thumb, hCopy, pCopy}) => {
  const controls = useAnimation();
  const rootRef = useRef()
  const onScreen = useOnScreen(rootRef)

  useEffect(() => {
    if (onScreen) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: 0.2,
          ease: "easeOut"
        }
      });
    }
  }, [onScreen, controls]);

  return(
    <motion.article
      className={`cs-thumb-container-${hAlign}`}
      ref={rootRef}
      initial={{opacity: 0, y: 100}}
      animate={controls}
    >
    {/* TEXT CONTENT */}
      <section className={`cs-content-${hAlign} ${vAlign}`}>
        <div className="cs-text">
          <h2>{hCopy}</h2>
          <p>{pCopy}</p>
        </div>
        <a href="google.com" className="content-cta">
          <h4>Check it out</h4>
          <img src={arrowIcon} alt="" />
        </a>
      </section>
    {/* IMAGE THUMBNAIL */}
      <section className={`cs-img-container-${hAlign}`}>
        <img src={thumb} alt="" className={`cs-img`} />
      </section>
    </motion.article>
  )
}

export default CaseStudyThumb

// This is a header  its a bit longer what can we do?
// Lorem ipsum dolor sit amet, consectetur adipiscing elit.