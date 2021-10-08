import { Container, Catalog, DrinkCard } from "./styles";
import { useContext } from "react";
import { SupplierContext } from "../../Providers/supplier";
import { CartContext } from "../../Providers/cart";
import Header from "../Header/index.jsx";

const Supplier = () => {
  const { setEvent, handleAddingCart } = useContext(CartContext);
  const { drinks } = useContext(SupplierContext);

  const drinksCards = drinks.map((value, index) => {
    return (
      <DrinkCard key={index}>
        <div className="product">
          <h3>
            {value.name}, {value.volume.value}l
          </h3>
          <div className="divImage">
            <img className="imagem" src={value.image_url} alt="drink" />
          </div>
          <span className="manufactured">Manufactured: {value.first_brewed}</span>
          <div>
            <select
              onChange={(evt) => setEvent(evt.target.value)}
              className="selectEvent"
              name="event"
            >
              <option>Confraternization</option>
              <option>Wedding</option>
              <option>Graduation</option>
            </select>
            <button
              onClick={(evt) => {
                handleAddingCart(evt.target.id);
              }}
              id={value.id}
            >
              Add
            </button>
          </div>
        </div>
        <hr></hr>
        <div className="drinkCard__description">
          <span>Description: </span>
          <span>{value.description}</span>
        </div>
      </DrinkCard>
    );
  });

  return (
    <Container>
      <Header />
      <h1 className="title">Supplier</h1>
      <Catalog>{drinksCards}</Catalog>
    </Container>
  );
};

export default Supplier;
