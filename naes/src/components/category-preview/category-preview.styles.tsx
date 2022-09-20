import styled from "styled-components";
import { Link } from "react-router-dom";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.875em;

  @media screen and (max-width: 50em) {
    align-items: center;
  }
`;

export const Title = styled(Link)`
  font-size: 1.75em;
  margin-bottom: 1.5625em;
  cursor: pointer;
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1.25em;

  @media screen and (max-width: 50em) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 0.9375em;
    grid-row-gap: 1.5625em;
  }
`;
