import { Link } from "react-router-dom";

export const About = () => {
  return (
    <main style={{ backgroundColor: "white", padding: "1rem 0"}}>
      <h2>About me page</h2>
      <Link to="/" style={{color: "black"}}>back home</Link>
    </main>
  );
}