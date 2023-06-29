// import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Connection from "./pages/Connection";
import HomeAdmin from "./pages/HomeAdmin";
import TechnicalForm from "./pages/TechnicalForm";
import CreateModelForm from "./components/CreateModelForm";
import DatabaseView from "./pages/DatabaseView";
import Faq from "./pages/Faq";
import DatabaseUser from "./pages/DatabaseUser";
import Profile from "./pages/Profile";
import "./App.css";

function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Connection />} />
          <Route path="/admin-new-model" element={<CreateModelForm />} />
          <Route path="/bdd-globale" element={<DatabaseView />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/admin-page" element={<HomeAdmin />} />
          <Route path="/fiche-technique" element={<TechnicalForm />} />
          <Route path="/bdd-user" element={<DatabaseUser />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
