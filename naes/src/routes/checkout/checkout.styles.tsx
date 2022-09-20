import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3.125em auto 0;

  @media screen and (max-width: 50em) {
    width: unset;
  }
`;

export const ColumnHeaders = styled.div`
  width: 100%;
  padding: 0.625em 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.0625em solid darkgrey;

  @media screen and (max-width: 50em) {
    width: null;
  }
`;

export const ColumnTitle = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }

  @media screen and (max-width: 50em) {
    width: unset;
  }
  
`;

export const CartTotal = styled.span`
  margin-top: 1.875em;
  margin-left: auto;
  font-size: 1.875em;
`;
