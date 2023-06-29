import { useState, useEffect } from "react";
import "./PhoneSelection.css";
import NavBar from "../components/NavBar";

export default function PhoneSelection() {
  const [brands, setBrands] = useState();
  const [models, setModels] = useState();
  // const [oneBrand, setOneBrand] = useState();

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

  // const getOneBrand = () => {
  //   fetch(`${import.meta.env.VITE_BACKEND_URL}/brands/`)
  //     .then((resp) => resp.json())
  //     .then((data) => setOneBrand(data))
  //     .catch((err) => console.error(err));
  // };

  useEffect(() => {
    getAllBrands();
    getAllModels();
    // getOneBrand();
  }, []);

  if (!brands || !models) {
    return <p>En attente des marques...</p>;
  }

  return (
    <section>
      <NavBar />
      <select className="brandSelection">
        <option>Choisir une marque</option>
        {brands.map((brand) => (
          <option>{brand.title}</option>
        ))}
      </select>

      <select className="modelSelection">
        <option>Choisir un modèle</option>
        {models.map((model) => (
          <option>{model.name}</option>
        ))}
      </select>
      <section className="phoneSection">
        <a href="/telephone" className="enregistrement">
          Enregistrer un nouveau téléphone
        </a>
        <div className="phoneCard">
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
    </section>
  );
}
