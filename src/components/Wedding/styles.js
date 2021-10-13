import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    font-size: 40px;
    margin: 100px 0 30px 0;
    text-shadow: 1px 1px 2px white;
  }

  @media (min-width: 768px) {
    .title {
      font-size: 40px;
      margin: 150px 0 30px 0;
      text-shadow: 1px 1px 2px white;
    }
  }
`;

export const Cart = styled.div`
  width: 80%;
  height: 80%;
  overflow-y: scroll;
  max-width: 1100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  border-radius: 20px;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export const ProductCard = styled.div`
  background: #495057;
  color: black;
  width: 170px;
  height: 355px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 10px;
  border-radius: 20px;

  h3 {
    color: white;
    letter-spacing: 1.5px;
    text-align: center;
    font-size: 22px;
    height: 30px;
    overflow-y: hidden;
    white-space: wrap;
    width: 150px;

    :hover {
      overflow-y: visible;
    }
  }

  img {
    width: 50px;
    height: 160px;
  }

  .divImage {
    background: #6c757d;
    width: 80%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    border-radius: 10px;
  }
`;

export const Button = styled.button`
  background: #208b3a;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  text-justify: center;
  width: 80%;
  height: 33px;
  border: none;
  border-radius: 7px;

  :hover {
    transition: 0.5s;
    background: black;
    color: #208b3a;
  }
`;
