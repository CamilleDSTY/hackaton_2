import NavBar from "../components/NavBar";
import "./faq.css";

export default function Faq() {
  return (
    <>
      <NavBar />
      <section className="box-faq">
        <h1 className="title-faq">FAQ</h1>
        <figure className="listing-faq">
          <div className="fonctionnality-service">
            Comment faire si le téléphone n'est pas dans la base de données ?
          </div>
          <div className="support-client">
            Dois-je créer mon compte ou c'est mon administrateur qui m'envoie
            mes identifiants ?
          </div>
          <div className="suppress-account">
            Comment juger de l'état du téléphone ?
          </div>
          <div className="tutorials">
            Exite-t-il des tutoriels pour se servir de l'application ?
          </div>
        </figure>
      </section>
    </>
  );
}
