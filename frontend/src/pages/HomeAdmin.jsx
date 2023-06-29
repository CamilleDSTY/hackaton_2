import NavBar from "../components/NavBar";
import Logo from "../assets/emaus-connect.png";
import Phone from "../assets/phone.png";
import "./HomeAdmin.css";

export default function HomeAdmin() {
  return (
    <section>
      <NavBar />
      <figcaption>
        <img src={Phone} alt="" />
      </figcaption>
      <div className="button-container">
        <button type="button">Gérer les utilisateurs</button>
        <button type="button">Enregistrer un nouveau modèle</button>
      </div>
      <div className="testtkt">
        <img src={Logo} alt="logo" />
      </div>
    </section>
  );
}
