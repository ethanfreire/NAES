import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
  ButtonSpinner,
} from "./button.styles";

export const buttonVarietyClasses = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButtonType = (buttonVariety = buttonVarietyClasses.base) =>
  ({
    [buttonVarietyClasses.base]: BaseButton,
    [buttonVarietyClasses.google]: GoogleSignInButton,
    [buttonVarietyClasses.inverted]: InvertedButton,
  }[buttonVariety]);

const Button = ({ children, buttonVariety, isLoading, ...buttonType }) => {
  const CustomButton = getButtonType(buttonVariety);
  return (
    <CustomButton disabled={isLoading} {...buttonType}>
      {isLoading ? <ButtonSpinner></ButtonSpinner> : children}
    </CustomButton>
  );
};

export default Button;
