import FormInput from "../../components/form-input/form-input.component";
import { SignUpContainer } from "./sign-up.styles";
import { useState, FormEvent, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import Button, {
  buttonVarietyChoices,
} from "../../components/button/button.component";
import { useDispatch } from "react-redux";
import { updateUserName, signUpStart } from "../../store/user/user.action";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navigateToSignIn = () => {
    navigate("/sign-in");
  };
  const navigateToHomePage = () => {
    navigate("/", { replace: true });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("password and confirm password must match when signing up");
      return;
    }

    dispatch(signUpStart(email, password, displayName));
    resetFormFields();
    dispatch(updateUserName(displayName));
    navigateToHomePage();
  };

  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>

      <form action="" onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button buttonVariety={buttonVarietyChoices.base} type="submit">
          Sign Up
        </Button>
      </form>
      <h3> If you want to be redirected to sign in page please click </h3>
      <Button
        buttonVariety={buttonVarietyChoices.inverted}
        onClick={navigateToSignIn}
      >
        Sign In
      </Button>
    </SignUpContainer>
  );
};
export default SignUp;
