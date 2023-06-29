import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "./createModelForm.css";
import NavBar from "./NavBar";

const imageTypes = ["image/jpeg", "image/jpg", "image/png"];

export default function CreateModelForm() {
  // const navigate = useNavigate();
  const [brand, setBrand] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const handleChangeBrand = (e) => {
    setBrand(e.target.value);
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

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (!name || !brand) {
  //     alert("Veuillez remplir tous les champs obligatoires.");
  //   } else {
  // const modelData = new FormData();
  // modelData.append("brand", brand);
  // modelData.append("name", name);
  // if (image) {
  //   modelData.append("image", image);
  // }

  //     fetch(`${import.meta.env.VITE_BACKEND_URL}/api/models`, {
  //       method: "POST",
  // credentials: "include",
  //       headers: {
  //   "Content-Type": "multipart/form-data",
  //       },
  //       body: modelData,
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         navigate(`/models/${data.id}`);
  //       })
  //       .catch((err) => {
  //         alert("Une erreur est survenue, veuillez réessayer.");
  //       });
  //   }
  // };

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
          <form
            className="createModelForm"
            // onSubmit={handleSubmit}
          >
            <p className="p-input">
              <strong>*</strong> Marque :
            </p>
            <label htmlFor="brand">
              <input
                type="text"
                className="form-input"
                id="brand"
                // placeholder="Marque"
                value={brand}
                onChange={handleChangeBrand}
              />
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
                value={image}
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
