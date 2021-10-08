import { createContext, useState, useContext } from "react";
import { SupplierContext } from "../supplier";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartWedding, setCartWedding] = useState([]);
  const [cartConfraternization, setCartConfraternization] = useState([]);
  const [cartGraduation, setCartGraduation] = useState([]);
  const [event, setEvent] = useState("Confraternization");
  const { drinks } = useContext(SupplierContext);

  const handleAddingCart = (idProduct) => {
    const product = drinks.find((value) => value.id == idProduct);

    if (event === "Confraternization") {
      setCartConfraternization([...cartConfraternization, product]);
    } else if (event === "Graduation") {
      setCartGraduation([...cartGraduation, product]);
    } else if (event === "Wedding") {
      setCartWedding([...cartWedding, product]);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartWedding,
        setCartWedding,
        cartConfraternization,
        setCartConfraternization,
        cartGraduation,
        handleAddingCart,
        setCartGraduation,
        event,
        setEvent,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
