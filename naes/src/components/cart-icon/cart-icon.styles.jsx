import styled from "styled-components";
import { ReactComponent as ShoppingSvg } from "../../assets/shopping-bag.svg";

export const CartIconContainer = styled.div`
  width: 2.8125em;
  height: 2.8125em;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ShoppingIcon = styled(ShoppingSvg)`
  width: 1.5em;
  height: 1.5em;
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 0.625em;
  font-weight: bold;
  bottom: 1.25em;
`;
