import styled from "styled-components";
import Button from "../button/button.component";

export const PaymentFormContainer = styled.div`
  height: 18.75em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.form`
  height: 6.25em;
  min-width: 31.25em;
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 1.875em;
`;
