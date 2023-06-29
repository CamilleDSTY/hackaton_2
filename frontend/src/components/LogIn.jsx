import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";
import "./LogIn.css";
import Logo from "../assets/emaus-connect.png";

function LogIn() {
  const navigate = useNavigate();
  const { setIdUser, setRole } = useUserContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("You must provide an email and a password!!!!");
    } else {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/login`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.warn(data);

          if (data.role === "admin") {
            navigate(`/admin-home`);
            setIdUser(data.id);
            setRole(data.role);
          } else if (data.role === "user") {
            navigate(`/user-home`);
            setIdUser(data.id);
            setRole(data.role);
          } else navigate("/");
        })
        .catch(() => {
          alert("Error to login, please try again!!!");
          navigate("/");
        });
    }
  };

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <p className="connect">Connexion</p>
          <label htmlFor="email"> Email </label>
          <input
            className="border"
            type="email"
            name="email"
            required
            onChange={handleChangeEmail}
          />
        </div>
        <div className="input-container">
          <label htmlFor="password"> Mot de passe </label>
          <input
            className="border"
            type="password"
            name="pass"
            required
            onChange={handleChangePassword}
          />
        </div>
        <div className="loginpage-button-container">
          <button type="submit" className="loginpage-button">
            Se connecter
          </button>
        </div>
      </form>
    </div>
  );
  return (
    <div className="app">
      <div className="login-form">
        <div className="tittle">
          <img className="emmaus" src={Logo} alt="Loading..." />
        </div>
        {renderForm}
      </div>
    </div>
  );
}

export default LogIn;
