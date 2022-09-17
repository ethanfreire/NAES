import styled from "styled-components";
import {
  BaseButton,
  InvertedButton,
  GoogleSignInButton,
} from "../button/button.styles";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 15em;
  height: 25em;
  display: flex;
  flex-direction: column;
  padding: 1.25em;
  border: 0.0625em solid black;
  background-color: white;
  top: 5.625em;
  right: 2.5em;
  z-index: 5;

  ${BaseButton},
  ${InvertedButton},
  ${GoogleSignInButton} {
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 1.125em;
  margin: 3.125em auto;
`;

export const CartItems = styled.div`
  height: 25em;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
