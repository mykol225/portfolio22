import { motion, useAnimation } from 'framer-motion'
import { useEffect, useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen'

export const LazyShow = ({ children, dir, dist, delay, cssClass }) => {
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
          delay: delay,
          ease: "easeOut"
        }
      });
    }
}, [onScreen, controls]);
  return (
    <motion.div
      ref={rootRef}
      initial={{ opacity: 0, y: dist }}
      animate={controls}
      >
      {children}
    </motion.div>
  )
}


/*

import motion, useAnimation, useEffect, useRef, useOnScreen hook
controls variable is useAnimation()
root ref is useref
onScreen is useOnScreen with rootRef as initial value

in return()
change parent div to motion.div
add ref rootref
intial = object opacity at 0 and y at 40
animate is controls
close motion.div

create a useeffect
if onoScreen is true do
controls.start()
with object inside; show 7, opacity, transition. 
in transision show duration, dealy, ease "easeOut"
include [onScreen, cnotrols]
*/
