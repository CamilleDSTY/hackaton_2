import NavBar from "../components/NavBar";
import Logo from "../assets/emaus-connect.png";
import "./HomeAdmin.css";

export default function HomeAdmin() {
  return (
    <>
      <NavBar />
      <section className="adminPageSection">
        <section>
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
        </section>
      </section>
    </>
  );
}
