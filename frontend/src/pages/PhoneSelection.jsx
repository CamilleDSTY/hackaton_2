import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function PhoneSelection() {
  const [models, setModels] = useState();
  const [brands, setBrands] = useState();
  const [selectedBrand, setSelectedBrand] = useState("");

  const getAllModels = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/models`, {
      credentials: "include",
    })
      .then((resp) => resp.json())

      .then((data) => {
        setModels(
          data.filter((model) => {
            if (!selectedBrand) {
              return data;
            }
            return model.brand_id === parseInt(selectedBrand, 10);
          })
        );
      })
      .catch((err) => console.error(err));
  };

  const getAllBrands = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/brands`, {
      credentials: "include",
    })
      .then((resp) => resp.json())
      .then((data) => {
        setBrands(data);
      })
      .catch((err) => console.error(err));
  };
  // const getOneBrand = () => {
  //   fetch(`${import.meta.env.VITE_BACKEND_URL}/brands/`)
  //     .then((resp) => resp.json())
  //     .then((data) => setOneBrand(data))
  //     .catch((err) => console.error(err));
  // };
  useEffect(() => {
    getAllModels();
    getAllBrands();
  }, [selectedBrand]);

  if (!models || !brands) {
    return <p>En attente des marques...</p>;
  }
  return (
    <>
      <NavBar />
      <section>
        <select
          className="brandSelection"
          onChange={(e) => {
            setSelectedBrand(e.target.value);
          }}
        >
          <option>Choisir une marque</option>
          {brands.map((brand) => (
            <option value={brand.id}>{brand.title}</option>
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
                </tr>
              </thead>
              <tbody>
                {models.map((model) => (
                  <tr key={model.id}>
                    <Link to={`/fiche-technique/${model.id}`}>
                      <td>{model.title}</td>
                      <td>{model.name}</td>
                    </Link>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="pagecount"> Pages 1 / 2</p>
          </div>
        </section>
      </section>
    </>
  );
}
