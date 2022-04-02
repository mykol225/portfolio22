import { motion } from 'framer-motion'

const Hero = ({children}) => {
  return(
    <motion.section
      id="hero"
      initial={{opacity: 0, y: 25, }}
      animate={{opacity: 1, y: 0}}
      transition={{ delay: 0, duration: 0.7}}
    >
      <h1 className='ft-hero-dt'>{children}</h1>
    </motion.section>
  )
}

export default Hero