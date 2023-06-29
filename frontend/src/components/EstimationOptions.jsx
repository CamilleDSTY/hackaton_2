import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import "../pages/PhoneSelection.css";

export default function EstimationOptions() {
  const [ram, setRam] = useState([]);
  const [storage, setStorage] = useState([]);
  const [state, setState] = useState([]);
  const [brand, setBrand] = useState([]);

  const getAllRams = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/rams`, {
      credentials: "include",
    })
      .then((resp) => resp.json())
      .then((data) => {
        setRam(data);
      })
      .catch((err) => console.error(err));
  };
  const getAllStorages = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/storages`, {
      credentials: "include",
    })
      .then((resp) => resp.json())
      .then((data) => {
        setStorage(data);
      })
      .catch((err) => console.error(err));
  };
  const getAllStates = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/states`, {
      credentials: "include",
    })
      .then((resp) => resp.json())
      .then((data) => {
        setState(data);
      })
      .catch((err) => console.error(err));
  };
  const getAllBrands = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/brands`, {
      credentials: "include",
    })
      .then((resp) => resp.json())
      .then((data) => {
        setBrand(data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getAllRams();
    getAllStorages();
    getAllStates();
    getAllBrands();
  }, []);

  if (!ram || !state || !storage) {
    return <p>En cours de chargement...</p>;
  }
  return (
    <>
      <NavBar />
      <section className="allPhoneSection">
        <section className="phoneSection">
          <a href="/*" id="enregistrement-criteres">
            Modifier les critères d'estimation
          </a>
          <div className="phoneCard">
            <table className="phoneTable">
              <thead>
                <tr>
                  <th>Marque du téléphone</th>
                  <th>Valeur</th>
                </tr>
              </thead>

              <tbody>
                {brand.map((b) => (
                  <tr key={b.id}>
                    <td>{b.title}</td>
                    <td>{b.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="phoneCard">
            <table className="phoneTable">
              <thead>
                <tr>
                  <th>Ram</th>
                  <th>Valeur</th>
                </tr>
              </thead>

              <tbody>
                {ram.map((r) => (
                  <tr key={r.id}>
                    <td>{r.nb_ram}</td>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="phoneCard">
            <table className="phoneTable">
              <thead>
                <tr>
                  <th>Capacité de stockage</th>
                  <th>Valeur</th>
                </tr>
              </thead>

              <tbody>
                {storage.map((s) => (
                  <tr key={s.id}>
                    <td>{s.nb_storage}</td>
                    <td>{s.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="phoneCard">
            <table className="phoneTable">
              <thead>
                <tr>
                  <th>Etat</th>
                  <th>Pourcentage appliqué à la valeur du téléphone</th>
                </tr>
              </thead>

              <tbody>
                {state.map((st) => (
                  <tr key={st.id}>
                    <td>{st.title}</td>
                    <td>{st.pond} %</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="phoneCard">
            <table className="phoneTable">
              <thead>
                <tr>
                  <th>Accessoires</th>
                  <th>Obligatoire</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Chargeur</td>
                  <td>OUI</td>
                </tr>
                <tr>
                  <td>Câble</td>
                  <td>OUI</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </section>
    </>
  );
}
