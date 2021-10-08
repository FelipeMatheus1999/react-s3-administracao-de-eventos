import { Container, Cart, ProductCard, Button } from "./styles";
import Header from "../Header/index.jsx";
import { CartContext } from "../../Providers/cart";
import { useContext } from "react";

const Graduation = () => {
  const { cartGraduation, setCartGraduation } = useContext(CartContext);

  const handleRemove = (productId) => {
    const productRemoved = cartGraduation.find(
      (value) => value.id == productId
    );

    const newCartGraduation = cartGraduation.filter(
      (value) => value !== productRemoved
    );

    setCartGraduation(newCartGraduation);
  };

  const cartMap = cartGraduation.map((value, index) => {
    return (
      <ProductCard key={index}>
        <h3>
          {value.name}, {value.volume.value}l
        </h3>
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
      <h1 className="title">Cart Graduation</h1>
      <Cart>{cartMap}</Cart>
    </Container>
  );
};

export default Graduation;
