import styled from "styled-components";

type BackgroundImageProps ={
  imageUrl:string;
};


export const BackgroundImage = styled.div<BackgroundImageProps>`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => {
    return `url(${imageUrl})`;
  }};
`;

export const DirectoryItemBody = styled.div`
  height: 5.625em;
  padding: 0 1.5625em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;

  h2 {
    font-weight: bold;
    margin: 0 0.375em 0;
    font-size: 1.375em;
    color: #4a4a4a;
  }

  p {
    font-weight: lighter;
    font-size: 1em;
  }

  @media screen and (max-width:50em) {
    padding: 0 1em;
  } 
`;

export const DirectoryItemContainer = styled.div`
  min-width: 30%;
  height: 15em;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 0.46875em 0.9375em;
  overflow: hidden;

  &:first-child {
    margin-right: 0.46875em;
  }

  &:last-child {
    margin-left: 0.46875em;
  }

  &:hover {
    cursor: pointer;

    & ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${DirectoryItemBody} {
      opacity: 0.9;
    }
  }

  @media screen and (max-width: 50em) {
    height: 200px;
  }
`;
