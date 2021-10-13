import styled from "styled-components";

export const Container = styled.div`
  background: #212529;
  width: 100%;
  height: 10vh;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.75);

  h1 {
    color: white;
    font-size: 22px;
    margin-left: 20px;
  }

  span {
    background: red;
    font-size: 10px;
    border-radius: 50px;
    padding: 1px 4px;
  }

  div {
    width: 250px;
    font-size: 24px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-right: 20px;
  }

  @media (min-width: 586px) {
    h1 {
      font-size: 40px;
    }
  }

  @media (min-width: 768px) {
    justify-content: space-between;

    h1 {
      font-size: 55px;
      margin-left: 40px;
    }
  }
`;
