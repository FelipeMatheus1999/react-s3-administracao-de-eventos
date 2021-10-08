import { Container, Cart, ProductCard, Button } from "./styles";
import Header from "../Header/index.jsx";
import { CartContext } from "../../Providers/cart";
import { useContext } from "react";

const Wedding = () => {
  const { cartWedding, setCartWedding } =
    useContext(CartContext);

  const handleRemove = (productId) => {
    const productRemoved = cartWedding.find(
      (value) => value.id == productId
    );

    const newCartWedding = cartWedding.filter(
      (value) => value !== productRemoved
    );

    setCartWedding(newCartWedding);
  };

  const cartMap = cartWedding.map((value, index) => {
    return (
      <ProductCard key={index}>
        <h3>{value.name}, {value.volume.value}l</h3>
        <div className="divImage">
          <img src={value.image_url} alt="" />
        </div>
        <Button id={value.id} onClick={(evt) => handleRemove(evt.target.id)}>
          remove
        </Button>
      </ProductCard>
    );
  });

  return (
    <Container>
      <Header />
      <h1 className="title">Cart Wedding</h1>
      <Cart>
          {cartMap}
      </Cart>
    </Container>
  );
};

export default Wedding;