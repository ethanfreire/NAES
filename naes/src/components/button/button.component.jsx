import {BaseButton,GoogleSignInButton,InvertedButton} from './button.styles';

export const buttonVarietyClasses = {
    base:'base',
    google: 'google-sign-in',
    inverted:'inverted',
};

const getButtonType = (buttonVariety = buttonVarietyClasses.base) => (
  {
    [buttonVarietyClasses.base]:BaseButton,
    [buttonVarietyClasses.google]:GoogleSignInButton,
    [buttonVarietyClasses.inverted]:InvertedButton,
  }[buttonVariety]
);


const Button = ({ children, buttonVariety, ...buttonType }) => {
  const CustomButton = getButtonType(buttonVariety);
  return (
  <CustomButton {...buttonType}>
    {children}
    </CustomButton>);
};

export default Button;
