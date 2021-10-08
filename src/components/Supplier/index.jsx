import { Container, Catalog, DrinkCard } from "./styles";
import { useContext, useState } from "react";
import { SupplierContext } from "../../Providers/supplier";
import Header from "../Header/index.jsx";
import Button from "../Button";

const Supplier = () => {
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
          <span className="manufactured">
            Manufactured: {value.first_brewed}
          </span>
          <div>
            <Button productId={value.id}>Add</Button>
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
