import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./createModelForm.css";
import NavBar from "./NavBar";

export default function CreateModelForm() {
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [role, setRole] = useState("user");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeFirstname = (e) => {
    setFirstname(e.target.value);
  };

  const handleChangeLastname = (e) => {
    setLastname(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstname || !lastname || !role || !email || !password) {
      alert("Veuillez remplir tous les champs obligatoires.");
    } else {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname,
          lastname,
          role,
          email,
          password,
        }),
      })
        .then((res) => res.json())
        .then(() => {
          alert("Votre utilisateur a bien été enregistré.");
          navigate("/bdd-user");
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
            Remplissez les champs ci-dessous pour enregistrer votre utilisateur
            :
          </p>
          <p className="required-fields">* : champs obligatoires</p>
          <form className="createModelForm" onSubmit={handleSubmit}>
            <p className="p-input">
              <strong>*</strong> Prénom :
            </p>
            <label htmlFor="brand">
              <input
                type="text"
                className="form-input"
                id="brand"
                // placeholder="Marque"
                value={firstname}
                onChange={handleChangeFirstname}
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
                value={lastname}
                onChange={handleChangeLastname}
              />
            </label>
            <p className="p-input">
              <strong>*</strong> Role :
            </p>
            <select
              id="select-user-input"
              htmlFor="name"
              onChange={(e) => {
                setRole(e.target.value);
              }}
            >
              <option value="user">Utilisateur</option>
              <option value="admin">Administrateur</option>
            </select>
            <p className="p-input">
              <strong>*</strong> Email :
            </p>
            <label htmlFor="name">
              <input
                type="email"
                className="form-input"
                id="name"
                // placeholder="Nom du modèle"
                value={email}
                onChange={handleChangeEmail}
              />
            </label>
            <p className="p-input">
              <strong>*</strong> Password :
            </p>
            <label htmlFor="name">
              <input
                type="password"
                className="form-input"
                id="name"
                value={password}
                onChange={handleChangePassword}
              />
            </label>

            <button type="submit" id="form-validation-button-user">
              Ajouter l'utilisateur
            </button>
          </form>
        </section>
      </div>
    </>
  );
}
