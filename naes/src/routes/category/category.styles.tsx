import styled from "styled-components";

export const CategoryContainer = styled.div`
display:grid;
grid-template-columns: repeat(4, 1fr);
column-gap: 1.25em;
row-gap: 3.125em;


@media screen and (max-width: 50em) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 0.9375em;
    grid-row-gap: 1.5625em;
  }
`;

export const CategoryTitle = styled.h2`
font-size: 1.75em;
    margin-bottom: 1.5625em;
    text-align: center;
`;

