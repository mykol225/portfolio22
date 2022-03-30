import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import logo from '../assets/MWLogoOnDark.png'
import MenuButton from './MenuButton'
import MainMenu from './MainMenu'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      className="header"
      initial={{opacity: 0, y: -50, }}
      animate={{opacity: 1, y: 0}}
      transition={{ delay: 0.5, duration: 0.7}}
    >
      <Link to="/">
        <img className={`logo ${ isOpen ? "hidden" : "visible"}`} src={logo} alt="Logo"/>
      </Link>
      <MenuButton 
        className="menu-btn"
        isOpen={isOpen}
        onClick={() => setIsOpen(isOpen => !isOpen)}
        strokeWidth="4"
        color="#fff"
        transition={{ ease: "easeOut", duration: 0.1 }}
        width="64"
        height="64"
      />
      <MainMenu className={`menu-list ${ isOpen ? "visible" : "hidden"}`}  onClick={setIsOpen} />
      <div className={`overlay ${ isOpen ? "visible" : "hidden"}`}></div>
    </motion.header>
  )
}

export default Header