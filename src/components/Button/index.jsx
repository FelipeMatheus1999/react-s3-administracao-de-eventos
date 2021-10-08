import "./styled.css";
import { useState, useContext } from "react";
import { CartContext } from "../../Providers/cart";
import { SupplierContext } from "../../Providers/supplier";

const Button = ({ productId, id }) => {
  const { drinks } = useContext(SupplierContext);
  const {
    cartWedding,
    setCartWedding,
    cartConfraternization,
    setCartConfraternization,
    cartGraduation,
    setCartGraduation,
  } = useContext(CartContext);
  const [event, setEvent] = useState("Confraternization");

  const handleAddingCart = () => {
    const product = drinks.find((value) => value.id === productId);

    if (event === "Confraternization") {
      setCartConfraternization([...cartConfraternization, product]);
    } else if (event === "Graduation") {
      setCartGraduation([...cartGraduation, product]);
    } else if (event === "Wedding") {
      setCartWedding([...cartWedding, product]);
    }
  };

  return (
    <div>
      <select className="select" onChange={(evt) => setEvent(evt.target.value)}>
        <option>Confraternization</option>
        <option>Wedding</option>
        <option>Graduation</option>
      </select>
      <button id={id} onClick={() => handleAddingCart(event)}>
        Add
      </button>
    </div>
  );
};

export default Button;
