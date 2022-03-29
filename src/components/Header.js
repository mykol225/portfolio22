import { useState } from 'react'
import { motion } from 'framer-motion'
import logo from '../assets/MWLogoOnDark.png'
import MenuButton from './MenuButton'
import MenuOverlay from './MenuOverlay'

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const didToggle = () => {
    console.log("clicked");
    setOpen(value => !value)

  }

  function handleOnClick() {
    console.log("clicked");
  }

  return (
    <motion.header
      className="header"
      initial={{opacity: 0, y: -50, }}
      animate={{opacity: 1, y: 0}}
      transition={{ delay: 0.5, duration: 0.7}}
    >
      <img className="logo visible" src={logo} alt="Logo"/>
      <MenuButton 
        className="menu-btn"
        isOpen={isOpen}
        onClick={() => setOpen(!isOpen)}
        strokeWidth="4"
        color="#fff"
        transition={{ ease: "easeOut", duration: 0.1 }}
        width="64"
        height="64"
      />
      <MenuOverlay className="menu-list hidden" />
    </motion.header>
  )
}

export default Header