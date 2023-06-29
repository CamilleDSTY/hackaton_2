import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import "./PhoneSelection.css";

export default function PhoneSelection() {
  const [users, setUsers] = useState();

  const getAllUsers = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users`, {
      credentials: "include",
    })
      .then((resp) => resp.json())

      .then((data) => {
        setUsers(data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  if (!users) {
    return <p>En attente des utilisateurs...</p>;
  }
  return (
    <>
      <NavBar />
      <section className="allPhoneSection">
        <section className="phoneSection">
          <Link id="button-new-user" to="new-user">
            Enregistrer un nouvel utilisateur
          </Link>
          <div className="phoneCard">
            <table className="phoneTable">
              <thead>
                <tr>
                  <th>Prénom</th>
                  <th>nom</th>
                  <th>adresse email</th>
                </tr>
              </thead>

              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.firstname}</td>
                    <td>{user.lastname}</td>
                    <td>{user.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </section>
    </>
  );
}
