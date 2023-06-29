import { Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./contexts/UserContext";
import Connection from "./pages/Connection";
import HomeAdmin from "./pages/HomeAdmin";
import "./App.css";
import PhoneSelection from "./pages/PhoneSelection";
import CreateModelForm from "./components/CreateModelForm";
import CreateBrandForm from "./components/CreateBrandForm";
import Faq from "./pages/Faq";
import TechnicalForm from "./pages/TechnicalForm";
import DatabaseUser from "./pages/DatabaseUser";
import CreateUser from "./components/CreateUser";
import EstimationOptions from "./components/EstimationOptions";

function App() {
  return (
    <main>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Connection />} />
          <Route path="/user-home" element={<PhoneSelection />} />
          <Route path="/admin-new-model" element={<CreateModelForm />} />
          <Route path="/admin-new-brand" element={<CreateBrandForm />} />
          <Route path="/fiche-technique/:id" element={<TechnicalForm />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/admin-page" element={<HomeAdmin />} />
          <Route path="/bdd-user" element={<DatabaseUser />} />
          <Route path="/bdd-user/new-user" element={<CreateUser />} />
          <Route path="/criteres-estimation" element={<EstimationOptions />} />
        </Routes>
      </UserContextProvider>
    </main>
  );
}

export default App;
