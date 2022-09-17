import styled, { css } from "styled-components";

const subColor = "grey";
const mainColor = "black";

const shrinkLabelStyles = css`
  top: -0.875em;
  font-size: 0.75em;
  color: ${mainColor};
`;

type FormInputLabelProps = {
  shrink?: boolean;
};

export const FormInputLabel = styled.label<FormInputLabelProps>`
  color: ${subColor};
  font-size: 1em;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 0.3125em;
  top: 0.625em;
  transition: 300ms ease all;
  ${({ shrink }) => shrink && shrinkLabelStyles};
`;

export const Input = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 1.125em;
  padding: 0.625em 0.625em 0.625em 0.3125em;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 0.0625em solid ${subColor};
  margin: 1.5625em 0;

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles}
  }
`;

export const Group = styled.div`
  position: relative;
  margin: 2.8125em 0;

  input[type="password"] {
    letter-spacing: 0.3em;
  }
`;
