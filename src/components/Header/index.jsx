import { Container } from "./index";
import { FaGraduationCap } from "react-icons/fa";
import { GiDiamondRing, GiPartyPopper, GiBeerBottle } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Providers/cart";

const Header = () => {
  const { cartWedding, cartConfraternization, cartGraduation } =
    useContext(CartContext);

  return (
    <Container>
      <Link to="/">
        <h1>
          <GiBeerBottle />
          Kenzie Drinks
        </h1>
      </Link>
      <div>
        <Link to="/confraternization">
          <GiPartyPopper />
          <span>{cartConfraternization.length}</span>
        </Link>
        <Link to="/graduation">
          <FaGraduationCap />
          <span>{cartGraduation.length}</span>
        </Link>
        <Link to="/wedding">
          <GiDiamondRing />
          <span>{cartWedding.length}</span>
        </Link>
      </div>
    </Container>
  );
};

export default Header;
