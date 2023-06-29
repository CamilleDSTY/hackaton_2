import "./PhoneSelection.css";
import { useState, useEffect } from "react";

export default function PhoneSelection() {
  const [brand, setBrand] = useState();
  const [model, setModel] = useState();

  const getAllBrand = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/${id}`)
      .then((resp) => resp.json())
      .then((data) => setBrand(data))
      .catch((err) => console.error(err));
  };

  const getAllModel = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/${id}`)
      .then((resp) => resp.json())
      .then((data) => setModel(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getAllBrand();
    getAllModel();
  }, []);

  if (!brand || !model) {
    return <p>En attente des marques...</p>;
  }

  return (
    <section className="phoneSection">
      <p>Marque</p>
      <p>Modèle</p>
      <a href="/telephone" className="enregistrement">
        Enregistrer un nouveau téléphone
      </a>
      <div className="card">
        <table className="phoneTable">
          <thead className="t1">
            <tr>
              <th>marque</th>
              <th>modèle</th>
              <th>catégorie</th>
              <th>chargeur</th>
              <th>crée le</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>iphone</td>
              <td>iphone 10</td>
              <td>3 B</td>
              <td>Oui</td>
              <td>21/03/2023</td>
            </tr>
            <tr>
              <td>samsung</td>
              <td>samsung 3</td>
              <td>2 C</td>
              <td>Oui</td>
              <td>15/03/2023</td>
            </tr>
          </tbody>
        </table>
        <p className="pagecount"> Pages 1 / 2</p>
      </div>
    </section>
  );
}
