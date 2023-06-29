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
            Qu'est-ce que votre produit/service et comment fonctionne-t-il ?
          </div>
          <div className="support-client">
            Comment puis-je contacter le support client de votre produit/service
            ?
          </div>
          <div className="suppress-account">
            Comment puis-je supprimer mon compte ?
          </div>
          <div className="tutorials">
            Y a-t-il des tutoriels ou des ressources d'apprentissage disponibles
            pour m'aider à utiliser votre produit/service ?
          </div>
          <div className="reinitialized-password">
            Comment puis-je réinitialiser mon mot de passe ?
          </div>
          <div className="update-account">
            Comment puis-je mettre à jour mon compte ou mes informations
            personnelles ?
          </div>
        </figure>
      </section>
    </>
  );
}
