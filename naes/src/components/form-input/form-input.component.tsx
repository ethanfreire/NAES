import { Group, Input, FormInputLabel } from "./form-input.styles";
import * as React from "react";

export type FormInputProps = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const FormInput: React.FC<FormInputProps> = ({ label, ...inputOptions }) => {
  return (
    <Group>
      <Input {...inputOptions} />

      {label && (
        <FormInputLabel
          shrink={Boolean(
            inputOptions.value &&
              typeof inputOptions.value === "string" &&
              inputOptions.value.length
          )}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
