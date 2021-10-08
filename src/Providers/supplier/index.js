import { createContext, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import api from "../../services/api";

export const SupplierContext = createContext();

export const SupplierProvider = ({ children }) => {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    api
      .get("/beers")
      .then((resp) => setDrinks(resp.data))
      .catch((error) => console.log(`Ocorreu um erro: ${error}`));
  }, []);

  return (
    <SupplierContext.Provider value={{ drinks }}>
      {children}
    </SupplierContext.Provider>
  );
};
