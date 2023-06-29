import { Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./contexts/UserContext";
import Connection from "./pages/Connection";
import HomeAdmin from "./pages/HomeAdmin";
import CreateModelForm from "./components/CreateModelForm";
// import DatabaseView from "./pages/DatabaseView";
// import Faq from "./pages/Faq";
import TechnicalForm from "./pages/TechnicalForm";
import DatabaseUser from "./pages/DatabaseUser";
import Profile from "./pages/Profile";
import "./App.css";

function App() {
  return (
    <main>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Connection />} />
          <Route path="/user-home" element={<HomeAdmin />} />
          <Route path="/admin-new-model" element={<CreateModelForm />} />
          {/* <Route path="/bdd-globale" element={<DatabaseView />} /> */}
          {/* <Route path="/faq" element={<Faq />} /> */}
          <Route path="/admin-home" element={<HomeAdmin />} />
          <Route path="/fiche-technique" element={<TechnicalForm />} />
          <Route path="/bdd-user" element={<DatabaseUser />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </UserContextProvider>
    </main>
  );
}

export default App;
