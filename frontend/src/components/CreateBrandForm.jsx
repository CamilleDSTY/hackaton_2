import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./createModelForm.css";
import NavBar from "./NavBar";

const imageTypes = ["image/jpeg", "image/jpg", "image/png"];

export default function CreateBrandForm() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [image, setImage] = useState("");

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeValue = (e) => {
    const valueToUpdate = parseInt(e.target.value, 10);

    if (!Number.isNaN(valueToUpdate, 10)) {
      setValue(valueToUpdate);
    } else {
      alert("Ce champ est requis, veuillez renseigner une valeur");
    }
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

    if (!title || !value) {
      alert("Veuillez remplir tous les champs obligatoires.");
    } else {
      const brandData = new FormData();
      brandData.append("title", title);
      brandData.append("value", value);
      if (image) {
        brandData.append("logo", image);
      }

      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/brands`, {
        method: "POST",
        credentials: "include",
        // headers: {
        //   "Content-Type": "multipart/form-data",
        // },
        body: brandData,
      })
        .then((res) => res.json())
        .then(() => {
          alert("La marque a bien été enregistrée.");
          navigate("/admin-new-model");
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
        <h2 className="form-h2">Enregistrer une nouvelle marque</h2>
        <section className="createForm">
          <p>Remplissez les champs ci-dessous pour enregistrer une marque :</p>
          <p className="required-fields">* : champs obligatoires</p>
          <form className="createModelForm" onSubmit={handleSubmit}>
            <p className="p-input">
              <strong>*</strong> Marque :
            </p>
            <label htmlFor="brand">
              <input
                type="text"
                className="form-input"
                id="title"
                value={title}
                onChange={handleChangeTitle}
              />
            </label>
            <p className="p-input">
              <strong>*</strong> Valeur :
            </p>
            <label htmlFor="value">
              <input
                type="text"
                className="form-input"
                id="value"
                value={value}
                onChange={handleChangeValue}
              />
            </label>
            <p className="p-input">Logo :</p>
            <label htmlFor="image">
              <input
                type="file"
                className="form-input"
                id="logo"
                onChange={handleChangeImage}
              />
            </label>
            <button type="submit" className="form-validation-button">
              Ajouter la marque
            </button>
          </form>
        </section>
      </div>
    </>
  );
}
