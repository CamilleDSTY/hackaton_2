import { Link } from "react-router-dom";
import "./NavBar.css";
import Logo from "../assets/Logo.png";

export default function NavBar() {
  return (
    <section className="headband">
      <div className="void">
        <img className="logo" src={Logo} alt="" />
        <p className="user">Bienvenue Alicia</p>
      </div>
      <div className="params">
        <Link to="/faq">
          <li> ? FAQ</li>
        </Link>
        <Link to="/deconnexion">
          <li>Deconnexion</li>
        </Link>
      </div>
    </section>
  );
}
