import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className='terms'>Some info about copyright? 2022</div>
    </footer>
  );
}