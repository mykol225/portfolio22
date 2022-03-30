import { NavLink } from 'react-router-dom'

const MainMenu = ({ className, setIsOpen }) => {
  return(
    <nav className={className}>
      <ul>
        <li><h1><NavLink to="/" onClick={() => setIsOpen(false)} >Work</NavLink></h1></li>
        <li><h1><NavLink to="/about" onClick={() => setIsOpen(false)} >About</NavLink></h1></li>
        <li><h1><NavLink to="/contact" onClick={() => setIsOpen(false)} >Contact</NavLink></h1></li>
      </ul>
    </nav>
  )
}
export default MainMenu