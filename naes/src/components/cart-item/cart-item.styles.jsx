import styled from "styled-components";

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 5em;
  margin-bottom: 0.9375em;

  img {
    width: 30%;
  }
`;

export const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0.625em 1.25em;

  span {
    font-size: 1em;
  }
`;
