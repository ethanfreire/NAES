import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 5em;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1em;
`;

export const LogoContainer = styled(Link)`
  width: 10em;
  padding-top: 1.5em;
  padding-bottom: 1.5em;
`;

export const NavLinksContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 1em 1em;
  cursor: pointer;
`;
