// import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Connection from "./pages/Connection";
import HomeAdmin from "./pages/HomeAdmin";
import "./App.css";
import PhoneSelection from "./pages/PhoneSelection";
import CreateModelForm from "./components/CreateModelForm";
import Faq from "./pages/Faq";
import TechnicalForm from "./pages/TechnicalForm";
import DatabaseUser from "./pages/DatabaseUser";
import Profile from "./pages/Profile";

function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Connection />} />
          <Route path="/selection" element={<PhoneSelection />} />
          <Route path="/admin-new-model" element={<CreateModelForm />} />
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
