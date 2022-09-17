import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
  ButtonSpinner,
} from "./button.styles";
import * as React from "react";

export enum buttonVarietyChoices {
  base = "base",
  google = "google-sign-in",
  inverted = "inverted",
}

const getButtonVariety = (
  buttonVariety = buttonVarietyChoices.base
): typeof BaseButton =>
  ({
    [buttonVarietyChoices.base]: BaseButton,
    [buttonVarietyChoices.google]: GoogleSignInButton,
    [buttonVarietyChoices.inverted]: InvertedButton,
  }[buttonVariety]);

export type ButtonProps = {
  children?: React.ReactNode;
  buttonVariety?: buttonVarietyChoices;
  isLoading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  children,
  buttonVariety,
  isLoading,
  ...buttonFunctionType
}) => {
  const CustomButton = getButtonVariety(buttonVariety);
  return (
    <CustomButton disabled={isLoading} {...buttonFunctionType}>
      {isLoading ? <ButtonSpinner></ButtonSpinner> : children}
    </CustomButton>
  );
};

export default Button;
