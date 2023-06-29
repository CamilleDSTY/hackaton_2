import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Logo from "../assets/emaus-connect.png";
import "./HomeAdmin.css";
import NavBarResponsive from "../components/NavBarResponsive";

export default function HomeAdmin() {
  return (
    <>
      <NavBar />
      <section className="adminPageSection">
        <section className="adminpage-responsive">
          <div className="navbar-off">
            <NavBarResponsive />
          </div>

          <div className="adminpage-button-container">
            <button type="button" className="adminpage-button">
              Gérer les utilisateurs
            </button>
            <button type="button" className="adminpage-button">
              Enregistrer un nouveau modèle
            </button>
          </div>
          <div className="testtkt">
            <img src={Logo} alt="logo" />
          </div>
          <footer className="footer-off">
            <Link to="/faq" className="link">
              <li className="faq"> FAQ</li>
            </Link>
            <Link to="/" className="link">
              <li className="logout">Deconnexion</li>
            </Link>
          </footer>
        </section>
      </section>
    </>
  );
}
