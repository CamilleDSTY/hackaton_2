import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import "./TechnicalForm.css";

export default function SelectForm() {
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [rams, setRams] = useState([]);
  const [storages, setStorages] = useState([]);
  const [states, setStates] = useState([]);

  const getAllBrands = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/brands`, {
      credentials: "include",
    })
      .then((resp) => resp.json())
      .then((data) => setBrands(data))
      .catch((err) => console.error(err));
  };

  const getAllModels = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/models`, {
      credentials: "include",
    })
      .then((resp) => resp.json())
      .then((data) => setModels(data))
      .catch((err) => console.error(err));
  };

  const getAllRams = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/rams`, {
      credentials: "include",
    })
      .then((resp) => resp.json())
      .then((data) => setRams(data))
      .catch((err) => console.error(err));
  };
  const getAllStorages = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/storages`, {
      credentials: "include",
    })
      .then((resp) => resp.json())
      .then((data) => setStorages(data))
      .catch((err) => console.error(err));
  };
  const getAllStates = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/states`, {
      credentials: "include",
    })
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
    <>
      <NavBar />
      <div className="form-select">
        <h1 className="form-h1">{models.name}</h1>
        <section className="form-box">
          <p className="technicals">Caractéristiques techniques :</p>
          <div className="features">
            <img
              src="https://www.apple.com/newsroom/images/product/iphone/standard/iphonex_front_back_glass_big.jpg.large.jpg"
              alt=""
            />
            <form id="box">
              <label htmlFor="model" className="choices">
                <select name="ram" id="ram" className="selection">
                  <option className="police">Taille de la RAM :</option>
                  {rams.map((ram) => (
                    <option key={ram.id}>{ram.nb_ram}</option>
                  ))}
                </select>
              </label>
              <label htmlFor="model" className="choices">
                <select name="storage" id="storage" className="selection">
                  <option className="police">
                    Taille de l'espace de stockage :
                  </option>
                  {storages.map((storage) => (
                    <option key={storage.id}>{storage.nb_storage}</option>
                  ))}
                </select>
              </label>
              <label htmlFor="model" className="choices">
                <select name="charger" id="charger" className="selection">
                  <option value="chargeur" className="police">
                    Chargeur :
                  </option>
                  <option>Oui</option>
                  <option>Non</option>
                </select>
              </label>
              <label htmlFor="cable" className="choices">
                <select name="cable" id="cable" className="selection">
                  <option value="cable" className="police">
                    Cable :
                  </option>
                  <option>Oui</option>
                  <option>Non</option>
                </select>
              </label>
              <label htmlFor="state" className="choices">
                <select name="state" id="state" className="selection">
                  <option value="chargeur" className="police">
                    Etat :
                  </option>
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
    </>
  );
}
