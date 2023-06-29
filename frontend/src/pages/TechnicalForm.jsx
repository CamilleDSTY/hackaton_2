import { useEffect, useState } from "react";
import "./TechnicalForm.css";

export default function SelectForm() {
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [rams, setRams] = useState([]);
  const [storages, setStorages] = useState([]);
  const [states, setStates] = useState([]);

  const getAllBrands = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/brands`)
      .then((resp) => resp.json())
      .then((data) => setBrands(data))
      .catch((err) => console.error(err));
  };

  const getAllModels = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/models`)
      .then((resp) => resp.json())
      .then((data) => setModels(data))
      .catch((err) => console.error(err));
  };

  const getAllRams = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/rams`)
      .then((resp) => resp.json())
      .then((data) => setRams(data))
      .catch((err) => console.error(err));
  };
  const getAllStorages = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/storages`)
      .then((resp) => resp.json())
      .then((data) => setStorages(data))
      .catch((err) => console.error(err));
  };
  const getAllStates = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/states`)
      .then((resp) => resp.json())
      .then((data) => setStates(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getAllBrands();
    getAllModels();
    getAllRams();
    getAllStorages();
    getAllStates();
  }, []);

  if (!brands || !models || !rams || !storages || !states) {
    return <p>En attente ...</p>;
  }

  return (
    <div className="form-select">
      <h1 className="form-h1">{models.name}</h1>
      <section className="form">
        <p className="technicals">Caractéristiques techniques :</p>
        <div className="features">
          <img
            src="https://www.apple.com/newsroom/images/product/iphone/standard/iphonex_front_back_glass_big.jpg.large.jpg"
            alt=""
          />
          <form>
            <label htmlFor="model">
              <select name="ram" id="ram" className="selection">
                <option>Taille de la RAM :</option>
                {rams.map((ram) => (
                  <option key={ram.id}>{ram.nb_ram}</option>
                ))}
              </select>
            </label>
            <label htmlFor="model">
              <select name="storage" id="storage" className="selection">
                <option>Taille de l'espace de stockage :</option>
                {storages.map((storage) => (
                  <option key={storage.id}>{storage.nb_storage}</option>
                ))}
              </select>
            </label>
            <label htmlFor="model">
              <select name="charger" id="charger" className="selection">
                <option value="chargeur">Chargeur :</option>
                <option>Oui</option>
                <option>Non</option>
              </select>
            </label>
            <label htmlFor="cable">
              <select name="cable" id="cable" className="selection">
                <option value="cable">Cable :</option>
                <option>Oui</option>
                <option>Non</option>
              </select>
            </label>
            <label htmlFor="state">
              <select name="state" id="state" className="selection">
                <option value="chargeur">Etat :</option>
                {states.map((state) => (
                  <option key={state.id}>{state.title}</option>
                ))}
              </select>
            </label>
          </form>
        </div>
      </section>
      <button type="submit" className="form-display-button">
        Afficher l'estimation
      </button>
    </div>
  );
}
