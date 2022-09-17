import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 6.25em;
  border-bottom: 0.0625em solid darkgrey;
  padding: 0.9375em 0;
  font-size: 1.25em;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 0.9375em;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const BaseSpan = styled.span`
  width: 30%;
`;

export const Quantity = styled(BaseSpan)`
  display: flex;
`;

export const Arrow = styled.div`
  cursor: pointer;
`;

export const Value = styled.span`
  margin: 0 0.625em;
`;

export const RemoveButton = styled.div`
  padding-left: 0.75em;
  cursor: pointer;
`;
