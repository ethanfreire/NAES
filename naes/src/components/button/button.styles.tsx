import styled from "styled-components";
import {SpinnerContainer} from "../spinner/spinner.styles";

export const BaseButton = styled.button`
  min-width: 10.3125em;
  width: auto;
  height: 3.125em;
  letter-spacing: 0.03125em;
  line-height: 3.125em;
  padding: 0 2.1875em 0 2.1875em;
  font-size: 0.9375em;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  
  &:hover {
    background-color: white;
    color: black;
    border: 0.0625em solid black;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;
  border: 0.0625em solid black;

  &:hover {
    background-color: white;
    color: #357ae8;
    border: 0.0625em solid black;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 0.0625em solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

export const ButtonSpinner = styled(SpinnerContainer)`
  width: 1.875em;
  height: 1.875em;
`;
