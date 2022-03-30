import { Link } from "react-router-dom";

export const Contact = () => {
  return (
    <main style={{ backgroundColor: "white", padding: "1rem 0" }}>
      <h2>Contact page</h2>
      <Link to="/" style={{color: "black"}}>back home</Link>
    </main>
  );
}