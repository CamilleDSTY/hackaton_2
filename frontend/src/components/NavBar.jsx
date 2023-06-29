import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import Logo from "../assets/Logo.png";
import { useUserContext } from "../contexts/UserContext";

export default function NavBar() {
  const { idUser } = useUserContext();
  const [firstname, setFirstname] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users/${idUser}`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setFirstname(data.firstname);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [idUser]);

  if (!firstname) {
    return <p>chargement de la page</p>;
  }
  return (
    <section className="headband">
      <div className="void">
        <img className="logo" src={Logo} alt="" />
        <p className="user">Bienvenue {firstname}</p>
      </div>
      <div className="params">
        <Link to="/faq">
          <li> ? FAQ</li>
        </Link>
        <Link to="/deconnexion">
          <li>Deconnexion</li>
        </Link>
      </div>
    </section>
  );
}
