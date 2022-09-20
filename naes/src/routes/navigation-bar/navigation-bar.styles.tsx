import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 5em;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1em;

  @media screen and (max-width:50em) {
    height: 3.75em;
    padding: 0.625em 1.25em;
    margin-bottom: 1.25em;
  }
`;

export const LogoContainer = styled(Link)`
  width: 10em;
  padding-top: 1.5em;
  padding-bottom: 1.5em;

  @media screen and (max-width:50em) {
    width:7em;
} 
`;

export const NavLinksContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width:50em) {
    width: 80%;
  }
`;

export const NavLink = styled(Link)`
  padding: 1em 1em;
  cursor: pointer;
`;
