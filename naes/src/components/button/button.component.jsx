import '../button/button.styles.scss';
const buttonVarietyClasses = {
    google: 'google-sign-in',
    inverted:'inverted',
};


const Button = ({ children, buttonVariety, ...buttonType }) => {
  return (
  <button className={`button-container ${buttonVarietyClasses[buttonVariety]}`} {...buttonType}>
    {children}
    </button>);
};

export default Button;
