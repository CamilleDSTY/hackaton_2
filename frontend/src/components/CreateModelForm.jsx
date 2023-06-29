import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import "./createModelForm.css";
import NavBar from "./NavBar";
import CreateBrandForm from "./CreateBrandForm";

const imageTypes = ["image/jpeg", "image/jpg", "image/png"];

export default function CreateModelForm() {
  // const navigate = useNavigate();
  const [brands, setBrands] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const getAllBrands = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/brands`, {
      method: "GET",
      credentials: "include",
    })
      .then((resp) => resp.json())
      .then((data) => {
        setBrands(data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getAllBrands();
  }, [selectedBrand]);

  if (!brands) {
    return <p>En attente des marques...</p>;
  }

  const handleChangeBrand = (e) => {
    const brandIdToUpdate = parseInt(e.target.value, 10);

    if (!Number.isNaN(brandIdToUpdate, 10)) {
      setSelectedBrand(brandIdToUpdate);
    } else {
      alert("Ce champ est requis, veuillez renseigner une valeur");
    }
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeImage = (e) => {
    const fileSelected = e.target.files[0];

    if (imageTypes.includes(fileSelected.type)) {
      setImage(e.target.files[0]);
    } else {
      alert("Only .jpeg, .jpg and .png are allowed.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !selectedBrand) {
      alert("Veuillez remplir tous les champs obligatoires.");
    } else {
      const modelData = new FormData();
      modelData.append("brand_id", selectedBrand);
      modelData.append("name", name);
      if (image) {
        modelData.append("image", image);
      }

      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/models`, {
        method: "POST",
        credentials: "include",
        // headers: {
        //   "Content-Type": "multipart/form-data",
        // },
        body: modelData,
      })
        .then((res) => res.json())
        .then(() => {
          alert("Votre modèle a bien été enregistré.");
          setSelectedBrand("");
          setName("");
          setImage("");
        })
        .catch(() => {
          alert("Une erreur est survenue, veuillez réessayer.");
        });
    }
  };

  return (
    <>
      <NavBar />
      <div className="form-container">
        <h2 className="form-h2">Enregistrer un nouveau modèle</h2>
        <section className="createForm">
          <p>
            Remplissez les champs ci-dessous pour enregistrer votre modèle :
          </p>
          <p className="required-fields">* : champs obligatoires</p>
          <form className="createModelForm" onSubmit={handleSubmit}>
            <p className="p-input">
              <strong>*</strong> Marque :
            </p>
            <label htmlFor="brand">
              <select className="brandSelection" onChange={handleChangeBrand}>
                <option>Choisir une marque</option>
                {brands.map((brand) => (
                  <option value={brand.id}>{brand.title}</option>
                ))}
              </select>
              <Link to="/admin-new-brand" element={<CreateBrandForm />}>
                Enregistrer une nouvelle marque
              </Link>
            </label>
            <p className="p-input">
              <strong>*</strong> Nom :
            </p>
            <label htmlFor="name">
              <input
                type="text"
                className="form-input"
                id="name"
                // placeholder="Nom du modèle"
                value={name}
                onChange={handleChangeName}
              />
            </label>
            <p className="p-input">Image :</p>
            <label htmlFor="image">
              <input
                type="file"
                className="form-input"
                id="image"
                onChange={handleChangeImage}
              />
            </label>
            <button type="submit" className="form-validation-button">
              Ajouter le modèle
            </button>
          </form>
        </section>
      </div>
    </>
  );
}
