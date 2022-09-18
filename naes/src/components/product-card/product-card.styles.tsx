import styled from "styled-components";

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 21.875em;
  align-items: center;
  position: relative;

  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 0.3125em;
  }

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 15.9375em;
    display: none;
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }

  @media screen and (max-width:50em) {
    height: 13em;;
  } 
`;

export const Footer = styled.div`
.footer {
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 1.125em;
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 0.9375em;
`;

export const Price = styled.span`
  width: 10%;
`;
