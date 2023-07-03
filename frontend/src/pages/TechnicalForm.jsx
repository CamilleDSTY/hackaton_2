import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import "./TechnicalForm.css";

export default function SelectForm() {
  const { id } = useParams();
  // const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [rams, setRams] = useState([]);
  const [storages, setStorages] = useState([]);
  const [states, setStates] = useState([]);
  const [ramValue, setRamValue] = useState();
  const [storageValue, setStorageValue] = useState();
  const [brandValue, setBrandValue] = useState();
  const [charger, setCharger] = useState();
  const [cable, setCable] = useState();
  const [stateValue, setStateValue] = useState();
  const [phoneValue, setPhoneValue] = useState();
  const [categoryValue, setCategoryValue] = useState();
  const [className, setClassName] = useState("IdDefault");

  const getOneModel = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/models/${id}`, {
      credentials: "include",
    })
      .then((resp) => resp.json())
      .then((data) => {
        setModels(data);
      })
      .catch((err) => console.error(err));
  };

  const getOneBrand = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/brands/${models.brand_id}`, {
      credentials: "include",
    })
      .then((resp) => resp.json())
      .then((data) => {
        setBrandValue(data.value);
      })
      .catch((err) => console.error(err));
  };

  const getAllRams = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/rams`, {
      credentials: "include",
    })
      .then((resp) => resp.json())
      .then((data) => {
        setRams(data);
      })
      .catch((err) => console.error(err));
  };
  const getAllStorages = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/storages`, {
      credentials: "include",
    })
      .then((resp) => resp.json())
      .then((data) => {
        setStorages(data);
      })
      .catch((err) => console.error(err));
  };
  const getAllStates = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/states`, {
      credentials: "include",
    })
      .then((resp) => resp.json())
      .then((data) => {
        setStates(data);
      })
      .catch((err) => console.error(err));
  };

  const calculatePhoneValue = (e) => {
    e.preventDefault();
    if (charger === "Non" || cable === "Non") {
      setPhoneValue(0);
    } else {
      const val =
        parseInt(ramValue, 10) + parseInt(storageValue, 10) + brandValue;
      setPhoneValue(val + (parseInt(stateValue, 10) / 100) * val);
    }
  };

  const changeCategory = () => {
    if (phoneValue > 375) {
      setCategoryValue("Catégorie : Premium");
      setClassName("catPremium");
    } else if (phoneValue > 254) {
      setCategoryValue("Catégorie : A");
      setClassName("catA");
    } else if (phoneValue > 164) {
      setCategoryValue("Catégorie : B");
      setClassName("catB");
    } else if (phoneValue > 89) {
      setCategoryValue("Catégorie : C");
      setClassName("catC");
    } else if (phoneValue > 0) {
      setCategoryValue("Catégorie : HC");
      setClassName("catHC");
    } else if (phoneValue === 0) {
      setCategoryValue("Hors critères");
      setClassName("catOff");
    }
  };

  useEffect(() => {
    getOneModel();
    getAllRams();
    getAllStorages();
    getAllStates();
  }, []);

  useEffect(() => {
    if (models) {
      getOneBrand();
    }
  }, [models]);

  useEffect(() => {
    changeCategory();
  }, [phoneValue]);

  if (!models || !rams || !storages || !states) {
    return <p>En attente ...</p>;
  }

  return (
    <>
      <NavBar />
      <div className="form-select">
        <h1 className="form-h1">{models.name}</h1>
        <section className="form-box">
          <p className="technicals">Caractéristiques techniques :</p>
          <div className="features">
            {models.image ? (
              <img
                src={`${import.meta.env.VITE_ASSETS_IMAGES_URL}models/${
                  models.image
                }`}
                alt={models.name}
              />
            ) : (
              <img
                src="https://www.apple.com/newsroom/images/product/iphone/standard/iphonex_front_back_glass_big.jpg.large.jpg"
                alt={models.name}
              />
            )}

            <form id="box" onSubmit={calculatePhoneValue}>
              <label htmlFor="model" className="choices">
                <select
                  name="ram"
                  id="ram"
                  className="selection"
                  onChange={(e) => {
                    setRamValue(e.target.value);
                  }}
                >
                  <option className="police">Taille de la RAM :</option>
                  {rams.map((ram) => (
                    <option key={ram.id} value={ram.value}>
                      {ram.nb_ram}
                    </option>
                  ))}
                </select>
              </label>
              <label htmlFor="model" className="choices">
                <select
                  name="storage"
                  id="storage"
                  className="selection"
                  onChange={(e) => {
                    setStorageValue(e.target.value);
                  }}
                >
                  <option className="police">
                    Taille de l'espace de stockage :
                  </option>
                  {storages.map((storage) => (
                    <option key={storage.id} value={storage.value}>
                      {storage.nb_storage}
                    </option>
                  ))}
                </select>
              </label>
              <label htmlFor="model" className="choices">
                <select
                  name="charger"
                  id="charger"
                  className="selection"
                  onChange={(e) => {
                    setCharger(e.target.value);
                  }}
                >
                  <option value="chargeur" className="police">
                    Chargeur :
                  </option>
                  <option>Oui</option>
                  <option>Non</option>
                </select>
              </label>
              <label htmlFor="cable" className="choices">
                <select
                  name="cable"
                  id="cable"
                  className="selection"
                  onChange={(e) => {
                    setCable(e.target.value);
                  }}
                >
                  <option value="cable" className="police">
                    Cable :
                  </option>
                  <option>Oui</option>
                  <option>Non</option>
                </select>
              </label>
              <label htmlFor="state" className="choices">
                <select
                  name="state"
                  id="state"
                  className="selection"
                  onChange={(e) => {
                    setStateValue(e.target.value);
                  }}
                >
                  <option value="chargeur" className="police">
                    Etat :
                  </option>
                  {states.map((state) => (
                    <option key={state.id} value={state.pond}>
                      {state.title}
                    </option>
                  ))}
                </select>
              </label>
              <button type="submit" className="form-display-button">
                Afficher l'estimation
              </button>
              <ul id="estimation-result">
                <li className={`li-estimation-result ${className}`}>
                  {phoneValue}
                </li>
                <li className={`li-estimation-result ${className}`}>
                  {categoryValue}
                </li>
              </ul>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}
