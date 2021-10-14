import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-behavior: smooth;

  .title {
    text-shadow: 1px 1px 2px white;
    font-size: 100px;
    margin-top: 130px;
  }
`;

export const Catalog = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 100px;
`;

export const DrinkCard = styled.div`
  background: #495057;
  color: white;
  justify-content: space-around;
  width: 350px;
  max-width: 1000px;
  height: 350px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 20px;
  padding-left: 5px;
  border: none;
  border-radius: 20px;
  box-shadow: 0px 2px 9px 5px rgba(0, 0, 0, 0.68);
  -webkit-box-shadow: 0px 2px 9px 5px rgba(0, 0, 0, 0.68);
  -moz-box-shadow: 0px 2px 9px 5px rgba(0, 0, 0, 0.68);

  h3 {
    color: white;
    letter-spacing: 1.5px;
    font-size: 20px;
    white-space: wrap;
    width: 220px;
    height: 28px;
    overflow-y: hidden;
    margin-bottom: 5px;
    padding: 0 5px;

    :hover {
      overflow-y: visible;
    }
  }

  hr {
    border-color: #212529;
    height: 90%;
  }

  .manufactured {
    color: black;
    font-size: 11px;
    font-weight: bold;
  }

  .product {
    text-align: center;
    display: flex;
    width: 210px;
    height: 330px;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .divImage {
    background: #6c757d;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 180px;
    height: 170px;
    margin: 10px 0 0 0;
    border-radius: 20px;
  }

  img {
    width: 45px;
    height: 150px;
  }

  .drinkCard__description {
    color: black;
    font-size: 13px;
    font-weight: bold;
    white-space: wrap;
    width: 150px;
    max-height: 260px;
    overflow-y: scroll;
    overflow-x: none;
    padding-left: 10px;
  }

  .drinkCard__description::-webkit-scrollbar {
    display: none;
  }

  .selectEvent {
    background: black;
    color: #fff;
    text-align: center;
    font-weight: bold;
    width: 170px;
    height: 20px;
    border: none;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }

  button {
    background: #208b3a;
    color: black;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: BOLD;
    width: 170px;
    height: 33px;
    border: none;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;

    :hover {
      transition: 0.5s;
      background: black;
      color: #208b3a;
    }
  }

  @media (min-width: 768px) {
    width: 420px;
    padding: 10px;

    h3 {
      font-size: 22px;
    }

    .manufactured {
      font-size: 12px;
    }

    .drinkCard__description {
      font-size: 15px;
    }
  }
`;
