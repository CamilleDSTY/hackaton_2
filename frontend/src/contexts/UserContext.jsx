/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useMemo, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const UserContext = createContext();

export default UserContext;

function UserContextProvider({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [idUser, setIdUser] = useState("");
  const [role, setRole] = useState("");

  const userMemo = useMemo(() => ({
    idUser,
    setIdUser,
    role,
    setRole,
  }));

  useEffect(() => {
    if (location.pathname !== "/") {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/refresh-token`, {
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          navigate(location.pathname);
          setIdUser(data.id);
          setRole(data.role);
        })
        .catch((err) => {
          console.error(err);
          alert("Error to login please try again !");
          navigate("/");
        });
    }
  }, []);

  return (
    <UserContext.Provider value={userMemo}>{children}</UserContext.Provider>
  );
}

const useUserContext = () => useContext(UserContext);

// UserContextProvider.propTypes = { children: PropTypes.elementType.isRequired };

export { UserContextProvider, useUserContext };
